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
        const mediumUsername = '@Nisha_Bala'
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
        )
        const data = await response.json()

        if (data.items) {
          const recent = data.items.slice(0, 4).map((item: any) => ({
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
            title: 'Exploring Late Fusion',
            link: 'https://medium.com/@Nisha_Bala/irp-series-part-04-exploring-late-fusion-487d0547df22',
            pubDate: 'Sep 21, 2025',
            content: 'A comprehensive guide to understanding Late Fusion Mechansim',
          },
          {
            title: 'Basics of Multimodal Fusion Networks',
            link: 'https://medium.com/@Nisha_Bala/fyp-series-part-01-basics-of-multimodal-fusion-network-78b0f39a3fab',
            pubDate: 'August 20, 2025',
            content: 'A guide to the fundamentals of multimodal fusion networks',
          },
          {
            title: 'Walk through into Convolutional Neural Network',
            link: 'https://medium.com/@Nisha_Bala/walkthrough-into-convolutional-neural-network-e46df19a4602',
            pubDate: 'April 14, 2024',
            content: 'A concise walkthrough of Convolutional Neural Networks (CNNs), explained through a practical example ',
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
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
