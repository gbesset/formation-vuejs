<script setup lang="ts">
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'
import type { NewArticle } from '../interfaces/Article'
import { useArticleStore } from '../stores/article.store'
import { useRouter } from 'vue-router'
import AsyncBtn from '@/widgets/AsyncBtn.vue'
import { vFocus } from '@/widgets/focus.directive'

const articleStore = useArticleStore()
const router = useRouter()

const article = ref<NewArticle>({
  name: 'your name',
  price: 0,
  qty: 0,
})

const errorMsg = ref('')
const handleSubmit = async () => {
  if (article.value.name === 'test') throw new Error()

  await articleStore.addArticle(article.value)
  await router.push('/stock')
}

const handleError = (msg: string) => {
  errorMsg.value = msg
}
</script>

<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form>
      <label>
        <span>Nom</span>
        <input type="text" v-model="article.name" v-focus="'focus'" />
        <span class="error"></span>
      </label>

      <label>
        <span>Prix</span>
        <input type="number" v-model="article.price" v-focus="''" />
        <span class="error"></span>
      </label>

      <label>
        <span>Quantité</span>
        <input type="number" v-model="article.qty" />
        <span class="error"></span>
      </label>

      <div class="error">{{ errorMsg }}</div>

      <AsyncBtn :icon="faAdd" :action="handleSubmit" class="primary" @error="handleError"
        >Ajouter</AsyncBtn
      >
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

div.error {
  height: 1em;
  color: red;
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
