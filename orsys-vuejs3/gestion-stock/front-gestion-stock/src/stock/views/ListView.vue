<script setup lang="ts">
import { faAdd, faRotateRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useArticleStore } from '../stores/article.store'
import type { Article } from '../interfaces/Article'
import { onMounted, ref } from 'vue'
import ArticleCells from '../interfaces/ArticleCells.vue'
//import { storeToRefs } from 'pinia'

const articleStore = useArticleStore()

// Sinon on récupère une snaphsot du store et ce n'est pas réactif
//const {articles} = storeToRefs(articleStore)

const handeSelectArticle = (id: Article['id']) => {
  console.log('id: ', id)
  if (selectedArticleIds.value.has(id)) {
    selectedArticleIds.value.delete(id)
    return
  }
  selectedArticleIds.value.add(id)
}
const handleDelete = async () => {
  await articleStore.remove(selectedArticleIds.value)
  selectedArticleIds.value.clear()
}

const handleRefresh = async () => {
  await articleStore.refresh()
}

const selectedArticleIds = ref(new Set<Article['id']>())

onMounted(async () => {
  if (articleStore.articles.length === 0) {
    articleStore.refresh()
  }
})
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <section class="content">
      <nav>
        <AsyncBtn :icon="faRotateRight" :action="handleRefresh"
          ><RouterLink to="/stock/add" class="button" title="Add">
            <FaIcon :icon="faAdd" /></RouterLink
        ></AsyncBtn>

        <button title="Refresh"><FaIcon :icon="faRotateRight" @click="handleRefresh" /></button>

        <button title="delete" v-show="selectedArticleIds.size > 0" @click="handleDelete">
          <FaIcon :icon="faTrashCan" />
        </button>
      </nav>
      <div class="error">Erreur</div>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr class="loading" v-if="articleStore.articles === undefined">
            <td colspan="3"><FaIcon icon="" />Loading</td>
          </tr>
          <tr
            v-else
            v-for="(article, index) in articleStore.articles"
            :key="article.id"
            @click="handeSelectArticle(article.id)"
            :class="{ selected: selectedArticleIds.has(article.id) }"
          >
            <ArticleCells :article="articleStore.articles[index]" />
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
nav {
  display: flex;
  gap: 0.5rem;
}

.error {
  height: 2rem;
}

.name {
  text-align: left;
}
td.qty,
td.price {
  text-align: right;
}
</style>
