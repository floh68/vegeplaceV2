<script setup lang="ts">
import RecipeCardR from '../components/RecipeCardR.vue';
import type { IngredientsResponse, RecettesResponse } from "@/pocketbase-types";
import { allIngredients, allRecettes } from '@/backend'
const toutesLesRecettes: RecettesResponse[] = await allRecettes();
</script>
<template>
            <div class="mt-16">
                <ul class="flex flex-wrap justify-center md:grid md:grid-cols-3 md:gap-4">
                <li v-for="oneRecette in toutesLesRecettes" :key="oneRecette.id" class="w-full md:w-auto">
                    <RouterLink :to="{ name: 'recettes-id', params: { id: oneRecette.id } }">
                        <RecipeCardR v-bind="{ ...oneRecette }" />
                    </RouterLink>
                </li>
                        </ul>
            </div>
</template>