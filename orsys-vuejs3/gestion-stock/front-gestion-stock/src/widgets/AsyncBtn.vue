<script lang="ts" setup>
import { sleep } from '@/utils/sleep'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { ref } from 'vue'

const isDisabled = ref(false)

const props = defineProps<{
  icon: IconDefinition
  action: () => Promise<void>
}>()

const handleAction = async () => {
  isDisabled.value = true
  await sleep(300)
  await props.action()
  isDisabled.value = false
}
</script>

<template>
  <button @click="handleAction" :disabled="isDisabled">
    <FaIcon :icon="props.icon" /><span>Ajouter</span>
  </button>
</template>
