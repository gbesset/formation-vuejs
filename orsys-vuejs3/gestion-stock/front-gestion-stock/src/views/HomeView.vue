<script setup lang="ts">
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <main>
    <h1>Gérer efficacement votre stock !</h1>
    <RouterLink to="/stock" class="button primary"
      ><span>Voir le stock</span><FaIcon :icon="faChevronRight" />
    </RouterLink>
  </main>
</template>

<style scoped>
section {
  padding: 5rem;
}
h1 {
  text-align: center;
}
main {
  flex-grow: 0;
}
</style>
