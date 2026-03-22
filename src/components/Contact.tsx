'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // This example uses Formspree (free service). Sign up at formspree.io
      const response = await fetch('https://formspree.io/f/mkoqaylg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section id="contact" className="bg-secondary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="text-accent">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl text-accent">✉️</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:madhuni@gmail.com" className="text-white hover:text-accent transition-colors">
                    madhuni@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl text-accent">💼</span>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/madhunisha-balajeyandhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors"
                  >
                   linkedin.com/in/madhunisha-balajeyandhan/
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl text-accent">🐙</span>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a
                    href="https://github.com/MadhunishaBala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors"
                  >
                    github.com/MadhunishaBala
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl text-accent">📝</span>
                <div>
                  <p className="text-gray-400 text-sm">Medium</p>
                  <a
                    href="https://medium.com/@Nisha_Bala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors"
                  >
                    medium.com/@Nisha_Bala
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-primary p-6 rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-secondary border border-gray--600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="nisha@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 text-accent text-center">✓ Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
