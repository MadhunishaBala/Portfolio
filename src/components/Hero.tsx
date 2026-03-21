export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 flex items-center min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="container fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-accent">Madhunisha Bala</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Data Analyst & ML Engineer
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Transforming data into insights. Building intelligent solutions with Python, SQL, and Machine Learning.
            Passionate about solving complex problems and creating data-driven products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}