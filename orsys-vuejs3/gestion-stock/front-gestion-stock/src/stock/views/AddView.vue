<script setup lang="ts">
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'
import type { NewArticle } from '../interfaces/Article'
import { useArticleStore } from '../stores/article.store'
import { useRouter } from 'vue-router'

const articleStore = useArticleStore()
const router = useRouter()

const article = ref<NewArticle>({
  name: '',
  price: 0,
  qty: 0,
})

const handleSubmit = async () => {
  await articleStore.addArticle(article.value)
  await router.push('/stock')
}
</script>

<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form v-on:submit.prevent="handleSubmit">
      <label>
        <span>Nom</span>
        <input type="text" v-model="article.name" />
        <span class="error"></span>
      </label>

      <label>
        <span>Prix</span>
        <input type="number" v-model="article.price" />
        <span class="error"></span>
      </label>

      <label>
        <span>Quantité</span>
        <input type="number" v-model="article.qty" />
        <span class="error"></span>
      </label>

      <div class="error"></div>
      <button class="primary"><FaIcon :icon="faAdd" /><span>Ajouter</span></button>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  gap: 0.25rem;

  width: 100%;
  max-width: 25rem;

  input {
    padding: 0.5rem 1.5rem;
    border: 0.1 solid #eee;
    border-radius: 0.25rem;
  }
}

span.error {
  height: 1em;
}
div.error {
  height: 3em;
}

label {
  display: flex;
  flex-flow: column;
  span {
    text-align: left;
  }
}
</style>
