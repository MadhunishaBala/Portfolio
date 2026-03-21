export default function About() {
  const skills = {
    'Data Analysis': ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    'Machine Learning': ['Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost', 'NLP'],
    'Tools & Platforms': ['Jupyter', 'Tableau', 'Power BI', 'AWS', 'Git', 'Docker'],
  }

  return (
    <section id="about" className="bg-secondary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Data Analyst and ML Engineer with a strong foundation in statistics, programming, and business acumen. I specialize in extracting meaningful insights from complex datasets and building predictive models that drive business decisions.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My approach combines rigorous statistical analysis with modern ML techniques to solve real-world problems. I'm constantly learning and exploring new technologies to stay at the forefront of data science.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Data Visualization', 'Statistical Analysis', 'Team Collaboration'].map(
                (trait) => (
                  <span
                    key={trait}
                    className="bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm"
                  >
                    {trait}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-accent mb-2">50+</p>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-primary p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-accent mb-2">5+</p>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-primary p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-accent mb-2">100M+</p>
                <p className="text-gray-300">Records Analyzed</p>
              </div>
              <div className="bg-primary p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-accent mb-2">15+</p>
                <p className="text-gray-300">ML Models Built</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}