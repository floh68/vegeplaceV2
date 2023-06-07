<script setup lang="ts">
import IngredientsCardL from '@/components/IngredientsCardL.vue'
import type { IngredientsResponse, RecettesResponse } from "@/pocketbase-types";
import { allIngredients, allRecettes, AllIngredientsPanier, AllIngredientsAutre, AllIngredientsFruit, AllIngredientsLegume } from '@/backend'
const tousLesIngredients: IngredientsResponse[] = await AllIngredientsLegume();
//const tousLesIngredientsPanier: IngredientsResponse[] = await AllIngredientsPanier();
</script>
<template>
    <div class="mt-16">
        <h3 class="px-12 pb-2 text-xl font-bold">
            Filtrer
        </h3>
        <ul class="px-12 pb-6  text-lg flex flex-row gap-4">
            <li>
                <RouterLink to="/allingredientsfruit">Fruits</RouterLink>
            </li>
            <li>
                <RouterLink class="underline" to="/allingredientslegume">Légumes</RouterLink>
            </li>
            <li>
                <RouterLink to="/allingredientsAutre">Autre</RouterLink>
            </li>
        </ul>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- faire une boucle pour afficher tous les ingrédients  -->
            <!-- <v-for="(oneIngredient, index) in tousLesIngredients ">
                    v-if="index%2 === 0"
                            <const IngredientsCardL = v-bind="{...oneIngredient}">
                        v-else
                            <const IngredientsCardR = v-bind="{...oneIngredient}">
                </v-for> -->
            <IngredientsCardL v-for="oneIngredient in tousLesIngredients" v-bind="{ ...oneIngredient }" />
        </div>
    </div>
</template>