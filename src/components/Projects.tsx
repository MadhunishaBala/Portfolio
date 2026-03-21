'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Repository {
  name: string
  description: string
  url: string
  stars: number
  language: string
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Replace with your GitHub username
        const response = await fetch('https://api.github.com/users/MadhunishaBala/repos?sort=stars&per_page=6')
        const data = await response.json()
        
        const filtered = data
          .filter((repo: any) => !repo.fork && repo.description)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
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
      name: 'ML Classification Model',
      description: 'End-to-end machine learning pipeline for customer churn prediction using XGBoost.',
      url: 'https://github.com/MadhunishaBala/ml-classification',
      stars: 45,
      language: 'Python',
    },
    {
      name: 'Data Analysis Dashboard',
      description: 'Interactive Tableau dashboard analyzing sales trends and customer behavior.',
      url: 'https://github.com/MadhunishaBala/data-dashboard',
      stars: 32,
      language: 'Tableau',
    },
    {
      name: 'NLP Sentiment Analysis',
      description: 'Sentiment analysis tool using BERT and transformers on social media data.',
      url: 'https://github.com/MadhunishaBala/nlp-sentiment',
      stars: 28,
      language: 'Python',
    },
  ]

  return (
    <section id="projects" className="bg-secondary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold flex-1">{project.name}</h3>
                <span className="text-accent text-sm font-semibold">⭐ {project.stars}</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-accent text-xs bg-accent bg-opacity-20 px-3 py-1 rounded-full">
                  {project.language}
                </span>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-blue-300 font-semibold"
                >
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repos */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">More Projects</h3>
          {loading ? (
            <p className="text-center text-gray-400">Loading projects...</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {repos.map((repo, index) => (
                <Link
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-6 rounded-lg border border-gray-700 hover:border-accent transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">{repo.name}</h4>
                    <span className="text-accent">⭐ {repo.stars}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{repo.description}</p>
                  <span className="text-accent text-xs">{repo.language}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}