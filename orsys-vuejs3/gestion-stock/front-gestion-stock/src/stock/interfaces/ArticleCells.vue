<script lang="ts">
import type { Article } from './Article'

defineProps<{
  article: Article
}>()
</script>

<template>
  <td class="name">{{ article.name }}</td>
  <td class="price">{{ article.price }}</td>
  <td class="qty">{{ article.qty }}</td>
</template>
