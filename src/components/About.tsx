export default function About() {
const skills = {
  'Data Analysis': ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  'Machine Learning': ['Scikit-learn', 'TensorFlow', 'Keras'],
  'Business Analysis': ['Requirements Gathering', 'Stakeholder Communication','User Stories','Process Mapping'],
  'Tools & Platforms': ['Visual Studio Code', 'Git', 'Power BI', 'JIRA', 'Confluence']
};

  return (
    <section id="about" className="bg-secondary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Meet me, a patient and attentive individual with a sharp ear for listening.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As a dedicated listener, I believe that understanding is the key to impactful solutions. I'm not just a coder; I'm a night owl who stays burning the midnight oil until the code is done. The thrill of discovering patterns and transforming data into meaningful stories keeps me driven and engaged in every project I undertake.
           </p>
           <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              However, my journey is not without its quirks; I'm an unapologetic overthinker. Yes, it does add a touch of complexity to my life, but that's the exact trait that pushes me to constantly question and seek out the extraordinary in the ordinary.
           </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
             Beyond the code and quirks, my academic background has given me a solid foundation in the fields of programming, data analysis, and machine learning. As I take on new challenges and opportunities, I look forward to blending my technical and soft skills to create real-world solutions.
              Join me on this exciting journey, where every challenge is an opportunity in disguise!
            </p>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Data Visualization', 'Statistical Analysis', 'Team Collaboration', 'Active Listening'].map(
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
                <p className="text-3xl font-bold text-accent mb-2">15+</p>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-primary p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-accent mb-2">1+</p>
                <p className="text-gray-300">Years of Experience</p>
              </div>
              <div className="bg-primary p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-accent mb-2">10+</p>
                <p className="text-gray-300">Team Collaborations</p>
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
