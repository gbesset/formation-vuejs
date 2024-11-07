<script lang="ts" setup>
import { sleep } from '@/utils/sleep'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const isDisabled = ref(false)
const isLoading = ref(false)

const props = defineProps<{
  icon: IconDefinition
  action: () => Promise<void>
}>()

const emit = defineEmits<{
  (e: 'error', msg: string): void
}>()

const handleAction = async () => {
  try {
    isDisabled.value = true
    isLoading.value = true
    //await Promise.all([sleep(1000), props.action()])
    await sleep(1000)
    await props.action()
    emit('error', '')
    isDisabled.value = false
  } catch (err) {
    if (err instanceof Error) {
      emit('error', 'Erreur technique')
    }
    console.log('err: ', err)
  } finally {
    isLoading.value = false
    isDisabled.value = false
  }
}
</script>

<template>
  <button @click="handleAction" :disabled="isDisabled">
    <FaIcon :icon="isLoading ? faCircleDot : props.icon" /><span><slot></slot></span>
  </button>
</template>
