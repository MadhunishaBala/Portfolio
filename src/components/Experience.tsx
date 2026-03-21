export default function Experience() {
  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Leading data analysis initiatives, building dashboards, and creating ML models for predictive analytics.',
      highlights: ['Led team of 3 analysts', 'Reduced query time by 60%', 'Implemented ML pipeline'],
    },
    {
      title: 'Data Analyst',
      company: 'Digital Agency',
      period: '2021 - 2023',
      description: 'Analyzed customer behavior, created visualizations, and provided data-driven recommendations.',
      highlights: ['Processed 50M+ records', 'Built 5+ dashboards', 'Improved reporting efficiency by 40%'],
    },
    {
      title: 'Junior Data Analyst',
      company: 'Startup',
      period: '2020 - 2021',
      description: 'Started career in data analysis, learning SQL, Python, and data visualization.',
      highlights: ['Learned core data skills', 'Built first ML models', 'Contributed to product analytics'],
    },
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