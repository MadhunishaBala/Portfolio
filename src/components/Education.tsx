'use client'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science (Honours) in Artificial Intelligence and Data Science',
      institution: 'Informatics Institute of Technology affliated with Robert Gordon University',
      year: 'September 2022 - May 2026',
    },
    {
      degree: 'Advanced Level Examination - Maths Stream ',
      institution: 'Royal Institute International School - Cambridge Curriculum',
      year: 'September 2020 - June 2022',
    },
    {
      degree: 'Ordinary Level Examination - Science Stream ',
      institution: 'Royal Institute International School - Cambridge Curriculum',
      year: 'September 2018 - June 2020',
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
    
                </div>
                <span className="text-gray-400 text-sm">{edu.year}</span>
              </div>
              
              <p className="text-gray-300 mb-2">{edu.institution}</p>
            

              <di
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
