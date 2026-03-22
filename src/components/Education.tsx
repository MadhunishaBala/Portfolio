'use client'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Information Technology',
      institution: 'Indian Institute of Technology (IIT)',
      year: '2022 - 2026',
      cgpa: '7.2/10',
      achievements: [
        'IRP (Final Year Project): Non-Invasive Anemia Prediction using Multimodal Fusion',
        'Active in AI/ML clubs and hackathons',
      ],
    },
    {
      degree: 'Higher Secondary (12th)',
      field: 'Science Stream',
      institution: 'School Name',
      year: '2020 - 2022',
      cgpa: '94%',
      achievements: [
        'Merit holder',
        'Science topper',
      ],
    },
  ]

  return (
    <section id="education" className="bg-secondary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-accent">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-8 p-6 bg-primary rounded-lg border border-gray-700 hover:border-accent transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-accent text-lg font-semibold">{edu.field}</p>
                </div>
                <span className="text-gray-400 text-sm">{edu.year}</span>
              </div>
              
              <p className="text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-accent font-semibold mb-4">CGPA: {edu.cgpa}</p>

              <div className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <p key={i} className="text-gray-400 text-sm flex items-start">
                    <span className="text-accent mr-3">▸</span>
                    {achievement}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}