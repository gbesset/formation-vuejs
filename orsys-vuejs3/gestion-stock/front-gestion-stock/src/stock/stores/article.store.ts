import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Article, NewArticle } from '../interfaces/Article'
import { api } from '../services/article.api'
//import { readonly } from 'vue'
import { sleep } from '@/utils/sleep'

export const useArticleStore = defineStore('articles', () => {
  const articles = ref<Article[]>([])

  const totalArticles = computed(() => articles.value.length)

  const refresh = async () => {
    sleep(200)
    articles.value = await api.retrieveAll()
  }

  const addArticle = async (article: NewArticle) => {
    await api.add(article)
    await refresh()
  }
  const remove = async (selectedIds: Set<Article['id']>) => {
    await api.remove([...selectedIds])
    await refresh()
  }

  //return { articles: readonly(articles), totalArticles, addArticle, refresh, remove }
  return { articles, totalArticles, addArticle, refresh, remove }
})
