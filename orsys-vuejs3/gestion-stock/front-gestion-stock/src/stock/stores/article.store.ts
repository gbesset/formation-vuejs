import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Article, NewArticle } from '../interfaces/Article'

export const useArticleStore = defineStore('articles', () => {
  const articles = ref<Article[]>([
    {
      id: 'a1',
      name: 'BTC',
      price: 72054.23,
      qty: 1,
    },
    {
      id: 'a8',
      name: 'ETH',
      price: 5245.32,
      qty: 2,
    },
    {
      id: 'a4',
      name: 'TAO',
      price: 997.25,
      qty: 3,
    },
  ])

  const totalArticles = computed(() => articles.value.length)

  const refresh = async () => {}

  const addArticle = async (article: NewArticle) => {
    articles.value.push({ id: window.crypto.randomUUID(), ...article })
  }

  return { articles, totalArticles, addArticle, refresh }
})
