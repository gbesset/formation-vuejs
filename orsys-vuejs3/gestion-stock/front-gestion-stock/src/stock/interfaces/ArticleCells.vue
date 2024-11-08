<script lang="ts" setup>
import type { Article } from './Article'

const model = defineModel<Article>()
</script>

<template>
  <template v-if="model">
    <td class="name">{{ model.name }} /td></td>
    <td class="price">{{ model.price }}</td>
    <td class="qty"><input type="number" v-model="model.qty" /></td>
  </template>
</template>
