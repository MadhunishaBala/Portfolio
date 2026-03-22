export default function Experience() {
  const experiences = [
  {
    title: 'Intern Business Analyst',
    company: 'Fcode Labs',
    period: 'June 2024 - June 2025',
    description: 'Assisted in gathering and documenting requirements, collaborated with stakeholders, supported user story creation, and contributed to UAT and coordination of tasks in an Agile team.',
    highlights: [
      'Contributed to Agile sprint activities',
      'Supported testing and UAT processes',
      'Translated requirements into clear user stories'
    ],
  }
]

  return (
    <section id="experience" className="bg-primary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Work <span className="text-accent">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 p-6 bg-secondary rounded-lg border-l-4 border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-accent text-lg">{exp.company}</p>
                </div>
                <p className="text-gray-400 text-sm md:text-right">{exp.period}</p>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center">
                    <span className="text-accent mr-2">✓</span> {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
