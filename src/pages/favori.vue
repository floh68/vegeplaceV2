<script setup lang="ts">
import RecipeCardR from '../components/RecipeCardR.vue';
import type { IngredientsResponse, RecettesResponse, UsersResponse } from "@/pocketbase-types";
import { allIngredients, allRecettes, AllRecettesFavori } from '@/backend'
const toutesLesRecettesFav: RecettesResponse[] = await AllRecettesFavori();
</script>

<template>
    <div class="mt-16">
        <h2 class="text-2xl font-bold mx-6 my-4">Favoris</h2>
                      <ul class="flex flex-wrap justify-center md:grid md:grid-cols-3 md:gap-4">
                      <li v-for="oneRecette in toutesLesRecettesFav" :key="oneRecette.id" class="w-full md:w-auto">
                          <RouterLink :to="{ name: 'recettes-id', params: { id: oneRecette.id } }">
                              <RecipeCardR v-bind="{ ...oneRecette }" />
                          </RouterLink>
                      </li>
                  </ul>
    </div>
</template>