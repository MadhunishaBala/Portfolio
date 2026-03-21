'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Article {
  title: string
  link: string
  pubDate: string
  content: string
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Replace with your Medium username
        const mediumUsername = 'your-medium-username'
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
        )
        const data = await response.json()

        if (data.items) {
          const recent = data.items.slice(0, 3).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            content: item.description?.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
          }))
          setArticles(recent)
        }
      } catch (error) {
        console.error('Failed to fetch articles:', error)
        // Fallback articles
        setArticles([
          {
            title: 'Getting Started with Machine Learning',
            link: 'https://medium.com/@yourname/ml-guide',
            pubDate: 'March 15, 2026',
            content: 'A comprehensive guide to understanding machine learning fundamentals...',
          },
          {
            title: 'Data Analysis Best Practices',
            link: 'https://medium.com/@yourname/data-best-practices',
            pubDate: 'March 10, 2026',
            content: 'Learn the best practices for analyzing and visualizing data...',
          },
          {
            title: 'Building Production ML Models',
            link: 'https://medium.com/@yourname/production-ml',
            pubDate: 'March 5, 2026',
            content: 'Techniques and tools for deploying machine learning models...',
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return (
    <section id="articles" className="bg-primary">
      <div className="container fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Latest <span className="text-accent">Articles</span>
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading articles...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-6 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-accent"
              >
                <h3 className="text-lg font-bold mb-3 text-white hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{article.content}</p>
                <p className="text-accent text-xs">Published: {article.pubDate}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}