'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Repository {
  name: string
  description: string
  url: string
  language: string
}

interface FeaturedProject {
  name: string
  description: string
  url: string
  language: string
  categories: string[]
}

const CATEGORIES = ['Computer Vision','Data Analytics', 'Machine Learning','NLP','Optimization']

const CATEGORY_COLORS: { [key: string]: string } = {
  'Computer Vision': 'bg-blue-500',
  'Data Analytics': 'bg-yellow-500',
  'Machine Learning': 'bg-green-500',
  'NLP': 'bg-purple-500',
  'Optimization': 'bg-orange-500',
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

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

  const featured: FeaturedProject[] = [
     /* Computer Vision */
    {
      name: 'Non-Invasive Iron Deficiency Anaemia Prediction',
      description: 'Built an attention-based multimodal fusion model for hemoglobin regression and anemia classification using palm, nail, and metadata inputs.',
      url: 'https://github.com/MadhunishaBala/Non-Invasive-Iron-Deficiency-Anaemia-Prediction-using-Multimodal-Fusion',
      language: 'Python, TensorFlow, OpenCV, Self-Attention,Multimodal Fusion',
      categories: ['Computer Vision']
    },

    {
      name: 'Multimodal Fruit Ripeness Detection System',
      description:'Built a ripeness detection system for banana, mango and papaya using CNN-based models',
      url:'https://github.com/vgry5/Multi-modal-Fruit-Ripeness-Detection-System',
      language:'Python, TensorFlow, OpenCV, ResNet50, CNN, Numpy, Matplotlib',
      categories:['Computer Vision']
    },

     /* Data Analytics */
    {
      name: 'HR Analytics',
      description: 'Dashboard and analysis of HR metrics including attendance patterns and employee insights using data visualization.',
      url: 'https://github.com/MadhunishaBala/HR-Analytics',
      language: 'Excel, PowerBI',
      categories: ['Data Analytics'],

    },
   {
      name: 'Formaldehyde Monitoring in Sri Lanka',
      description: 'Dashboard performing analysis of HCHO concentration over 7 cities in SL with data visualization and statistical insights.',
      url: 'https://github.com/MadhunishaBala/Formaldehyde-HCHO-Monitoring-in-Sri-Lanka-',
      language: 'Python, Pandas, PowerBI',
      categories: ['Data Analytics'],
    },

     /* Machine Learning */
    {
      name: 'Personality Classification: Introvert vs Extrovert',
      description: 'Developed ML models to classify personality (Introvert vs. Extrovert) using behavioral features.',
      url: 'https://github.com/MadhunishaBala/Social-Behaviour-Personality',
      language: 'Python, Pandas, scikit-learn, matplotlib',
      categories: ['Machine Learning'],
    },

    {
      name: 'Census Income Classification',
      description: 'Machine learning classification model to predict income levels (>50K vs ≤50K) using census data. Implements Naive Bayes and Random Forest with complete data preprocessing, feature engineering, and model evaluation.',
      url: 'https://github.com/MadhunishaBala/Census_Income_Classification',
      language: 'Python, scikit-learn, Pandas',
      categories: ['Machine Learning'],
    },


     /* NLP*/
    {
      name: 'Reddit Analytical System',
      description: 'End-to-end NLP system on Reddit data for text classification, sentiment analysis, and topic modeling using ML and transformer models.',
      url: 'https://github.com/MadhunishaBala/Reddit-Analytical-System',
      language: 'Python, NLP, Transformers, Spacy',
      categories: ['NLP'],
    },

     /*Optimization */
    {
      name: 'Optimizing Bus Schedules Using EA',
      description: 'An intelligent framework that integrates Machine Learning with NSGA-II to optimize Delhi bus schedules, balancing punctuality, reliability, and operational feasibility through Pareto-optimal solutions.',
      url: 'https://github.com/MadhunishaBala/Optimizing-Public-Bus-Schedules-Using-Multi-Objective-Evolutionary-Algorithms-and-Machine-Learning',
      language: 'Python, NSGA-II',
      categories: ['Optimization'],
    },
  ]
  
  const filteredProjects = activeFilters.length === 0 
  ? featured 
  : featured.filter(project => 
      project.categories.some(cat => activeFilters.includes(cat))
    )

  // Calculate category counts
  const categoryCounts = CATEGORIES.map(cat => ({
    name: cat,
    count: featured.filter(p => p.categories.includes(cat)).length
  }))

  // Toggle filter
  const toggleFilter = (category: string) => {
    setActiveFilters(prev => 
      prev.includes(category)
        ? []
        : [category]
    )
  }

  // Reset filters
  const resetFilters = () => {
    setActiveFilters([])
  }

  return (
    <section id="projects" className="bg-secondary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-accent">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            onClick={resetFilters}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeFilters.length === 0
                ? 'bg-accent text-black'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All
          </button>
          {categoryCounts.map(({ name, count }) => (
            <button
              key={name}
              onClick={() => toggleFilter(name)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilters.includes(name)
                  ? 'bg-accent text-black'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {name} ({count})
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-accent animate-fadeIn"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              
              {/* Category Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map(cat => (
                  <span
                    key={cat}
                    className="text-xs bg-accent bg-opacity-20 text-accent px-2 py-1 rounded-full font-semibold"
                  >
                    {cat}
                  </span>
                ))}
              </div>

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
          ) : null}
        </div>
      </div>
    </section>
  )
}