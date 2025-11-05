import React, { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "sonner"
import Loader from "../utils/Loader"

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const apiKey = "c3c808a6a66b4db3ab74444b11632bcf"
      const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=${apiKey}`
      const response = await axios.get(url)
      setNews(response.data.articles || [])
      toast.success("News data fetched successfully!")
    } catch (error) {
      console.error("Error fetching news data:", error)
      toast.error("Failed to load news")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  

  return (
    <div className="news-container">
      <div className="news-header">
        <div>
          <h2 className="news-title">Latest News</h2>
          <p className="news-sub">Top headlines — United States</p>
        </div>
      </div>

      {loading ? (
       <Loader/>
      ) : news.length === 0 ? (
        <div className="news-empty">No news found.</div>
      ) : (
        <div className="news-grid">
          {news.map((article, idx) => (
            <article className="news-card" key={idx}>
              {article.urlToImage ? (
                <img className="news-image" src={article.urlToImage} alt={article.title} />
              ) : (
                <div className="news-image" aria-hidden />
              )}

              <div className="news-body">
                <h3 className="news-title-card">{article.title}</h3>
                <p className="news-desc">{article.description || "No description available."}</p>

                <div className="news-footer">
                  <div className="news-source">{article.source?.name || "Unknown source"}</div>
                  <a
                    className="news-link"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default News
