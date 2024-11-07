<script setup lang="ts">
import { faAdd, faRotateRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useArticleStore } from '../stores/article.store'

const articleStore = useArticleStore()

setTimeout(() => {
  articleStore.addArticle({ name: 'ee', price: 2, qty: 3 })
}, 2000)
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <section class="content">
      <nav>
        <button title="Refresh"><FaIcon :icon="faRotateRight" /></button>
        <RouterLink to="/stock/add" class="button" title="Add">
          <FaIcon :icon="faAdd"
        /></RouterLink>
        <button title="delete"><FaIcon :icon="faTrashCan" /></button>
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
          <tr v-for="(article, index) in articleStore.articles" :key="article.id">
            <td hidden>{{ index }}</td>
            <td class="name">{{ article.name }}</td>
            <td class="price">{{ article.price }} k</td>
            <td class="qty">{{ article.qty }}</td>
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
