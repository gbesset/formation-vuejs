import type { Directive } from 'vue'

export type FocusValue = 'focus' | 'selectAll'

export const vFocus: Directive<HTMLElement, FocusValue> = {
  mounted: (element, binding) => {
    if (element instanceof HTMLInputElement) {
      if (binding.value === 'focus') {
        element.focus()
        return
      }
      element.select()
      return
    }
  },
}
