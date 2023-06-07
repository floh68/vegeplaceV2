<script setup lang="ts">
import RecipeCardR from '../components/RecipeCardR.vue';
import IngredientsCardL from '@/components/IngredientsCardL.vue'
import type { IngredientsResponse, RecettesResponse, UsersResponse } from "@/pocketbase-types";
import { allIngredients, AllIngredientsPanier, allRecettes, AllRecettesFavori, AllRecettesPanier } from '@/backend'
const toutesLesRecettesPanier: RecettesResponse[] = await AllRecettesPanier();
const tousLesIngredientsPanier: IngredientsResponse[] = await AllIngredientsPanier();

</script>

<template>
    <div class="mt-16 font-open-sans">
        <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold mx-6 my-4">Recettes</h2>
            <div class="bg-accompagnement1 rounded h-12 flex justify-center items-center mr-5">
                <p class="p-5 font-bold">TOTAL : 50€</p>
            </div>
        </div>
        <ul class="flex flex-wrap justify-center md:grid md:grid-cols-3 md:gap-4">
            <li v-for="oneRecette in toutesLesRecettesPanier" :key="oneRecette.id" class="w-full md:w-auto">
                <RouterLink :to="{ name: 'recettes-id', params: { id: oneRecette.id } }">
                    <RecipeCardR v-bind="{ ...oneRecette }" />
                </RouterLink>
            </li>
        </ul>


        <div>
            <h2 class="text-2xl font-bold mx-6 my-4 w-12">Ingrédients</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- faire une boucle pour afficher tous les ingrédients  -->
                <!-- <v-for="(oneIngredient, index) in tousLesIngredients ">
                        v-if="index%2 === 0"
                                <const IngredientsCardL = v-bind="{...oneIngredient}">
                            v-else
                                <const IngredientsCardR = v-bind="{...oneIngredient}">
                    </v-for> -->
                <IngredientsCardL v-for="oneIngredient in tousLesIngredientsPanier" v-bind="{ ...oneIngredient }" />
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <RouterLink to="/paiement">
            <button class="
                            bg-[#E05303]
                            text-white
                            rounded-tl-lg rounded-br-lg
                            border-t-4 border-b-4 border-[#FFA704]
                            px-4 py-1
                            hover:bg-[#FFA704]
                            hover:border-[#E05303]
                            transition-colors duration-300
                            mb-2
                        ">
                Passer au paiement
            </button>
        </RouterLink>
    </div>
</template>