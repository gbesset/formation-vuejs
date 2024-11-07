import type { Article, NewArticle } from '../interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
  async retrieveAll(): Promise<Article[]> {
    const response = await fetch(url)
    const articles: Article[] = await response.json()
    return articles
  }

  async add(newArticle: NewArticle) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newArticle),
      headers: { 'Content-Type': 'application/json' },
    })

    console.log('response: ', response)
  }

  async remove(ids: Article['id'][]) {
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(ids),
      headers: { 'Content-Type': 'application/json' },
    })
    console.log('response: ', response)
  }
}

export const api = new API()
