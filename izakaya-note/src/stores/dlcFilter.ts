import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDlcFilterStore = defineStore('dlcFilter', () => {
  const selectedDlcs = ref<string[]>(['DLC1', 'DLC2', 'DLC3', 'DLC4', 'DLC5'])

  const setSelectedDlcs = (dlcs: string[]) => {
    selectedDlcs.value.splice(0, selectedDlcs.value.length, ...dlcs)
  }

  const filterByDlc = (name: string): boolean => {
    if (selectedDlcs.value.length === 5) return true
    if (!name.includes('【')) return true
    const dlcMatch = name.match(/【(DLC\d)】/)
    if (dlcMatch) {
      return selectedDlcs.value.includes(dlcMatch[1])
    }
    return true
  }

  return { selectedDlcs, setSelectedDlcs, filterByDlc }
})