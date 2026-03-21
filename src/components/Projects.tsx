'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Repository {
  name: string
  description: string
  url: string
  language: string
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/MadhunishaBala/repos?sort=stars&per_page=6')
        const data = await response.json()
        
        const filtered = data
          .filter((repo: any) => !repo.fork && repo.description)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language || 'JavaScript',
          }))
        
        setRepos(filtered)
      } catch (error) {
        console.error('Failed to fetch repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const featured = [
    {
      name: 'Non-Invasive Iron Deficiency Anaemia Prediction',
      description: 'Built an attention-based multimodal fusion model for hemoglobin regression and anemia classification using palm, nail, and metadata inputs.',
      url: 'https://github.com/MadhunishaBala/Non-Invasive-Iron-Deficiency-Anaemia-Prediction-using-Multimodal-Fusion',
      language: 'Python, TensorFlow, OpenCV',
    },
    {
      name: 'Reddit Analytical System',
      description: 'End-to-end NLP system on Reddit data for text classification, sentiment analysis, and topic modeling using ML and transformer models.',
      url: 'https://github.com/MadhunishaBala/Reddit-Analytical-System',
      language: 'Python, NLP, Transformers',
    },
    {
      name: 'Formaldehyde Monitoring in Sri Lanka',
      description: 'Dashboard performing analysis of HCHO concentration over 7 cities in SL with data visualization and statistical insights.',
      url: 'https://github.com/MadhunishaBala/Formaldehyde-Monitoring',
      language: 'Python, Pandas, PowerBI',
    },
  ]

  return (
    <section id="projects" className="bg-secondary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-accent">Projects</span>
        </h2>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featured.map((project, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-accent"
            >
              <h3 className="text-xl font-bold mb-4">{project.name}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-accent text-xs bg-accent bg-opacity-20 px-3 py-1 rounded-full">
                  {project.language}
                </span>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-blue-300 font-semibold transition-colors"
                >
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects from GitHub */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">More Projects</h3>
            <Link
              href="https://github.com/MadhunishaBala?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-blue-300 font-semibold"
            >
              View All →
            </Link>
          </div>

          {loading ? (
            <p className="text-center text-gray-400 py-8">Loading projects...</p>
          ) : repos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <Link
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary p-6 rounded-lg border border-gray-700 hover:border-accent transition-all duration-300 hover:shadow-lg"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{repo.name}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{repo.description}</p>
                  <span className="text-accent text-xs bg-accent bg-opacity-20 px-2 py-1 rounded">{repo.language}</span>
                </Link>
              ))}
            </div>
          ) : (
          )}
        </div>
      </div>
    </section>
  )
}
