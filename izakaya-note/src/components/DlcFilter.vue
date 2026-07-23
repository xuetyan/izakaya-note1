<template>
  <div class="dlc-filter">
    <div class="tag-group">
      <el-tag
        v-for="dlc in dlcList"
        :key="dlc.value"
        :type="selectedDlcs.includes(dlc.value) ? '' : 'info'"
        :effect="selectedDlcs.includes(dlc.value) ? 'dark' : 'plain'"
        @click="toggleDlc(dlc.value)"
        class="dlc-tag"
      >
        {{ dlc.label }}
      </el-tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'change', selected: string[]): void
}>()

const dlcList = [
  { label: 'DLC1', value: 'DLC1' },
  { label: 'DLC2', value: 'DLC2' },
  { label: 'DLC3', value: 'DLC3' },
  { label: 'DLC4', value: 'DLC4' },
  { label: 'DLC5', value: 'DLC5' },
]

const selectedDlcs = ref<string[]>([])

const toggleDlc = (dlc: string) => {
  const index = selectedDlcs.value.indexOf(dlc)
  if (index > -1) {
    selectedDlcs.value.splice(index, 1)
  } else {
    selectedDlcs.value.push(dlc)
  }
  emit('change', selectedDlcs.value)
}

onMounted(() => {
  selectedDlcs.value = dlcList.map(d => d.value)
  emit('change', selectedDlcs.value)
})
</script>

<style scoped>
.dlc-filter {
  display: flex;
  align-items: center;
}

.tag-group {
  display: flex;
  gap: 6px;
}

.dlc-tag {
  cursor: pointer;
  user-select: none;
}
</style>