<script setup lang="ts">
import { faAdd } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form>
      <label>
        <span>Nom</span>
        <input type="text" />
        <span class="error"></span>
      </label>

      <label>
        <span>Prix</span>
        <input type="number" />
        <span class="error"></span>
      </label>

      <label>
        <span>Quantité</span>
        <input type="number" />
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
