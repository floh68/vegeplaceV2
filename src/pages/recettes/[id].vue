<script setup lang="ts">
import templaterecette from '@/components/templaterecette.vue';
import { oneRecette } from '@/backend';
const props = defineProps<{ id: string }>()
const uneRecette = await oneRecette(props.id)
</script>
<template>
    <templaterecette v-bind="{ ...uneRecette }" />
</template>