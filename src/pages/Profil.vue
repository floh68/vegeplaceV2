<script setup lang="ts">
import RecipeCardR from '../components/RecipeCardR.vue';
import IngredientsCardL from '@/components/IngredientsCardL.vue'
import type { IngredientsResponse, RecettesResponse, UsersRecord } from "@/pocketbase-types";
import { AllRecettesFavori, AllRecettesPanier, AllIngredientsPanier } from '@/backend'
const toutesLesRecettesFav: RecettesResponse[] = await AllRecettesFavori();
const toutesLesRecettesPanier: RecettesResponse[] = await AllRecettesPanier();
const tousLesIngredients: IngredientsResponse[] = await AllIngredientsPanier();
const loggedInUser: UsersRecord = {
  name: 'Therry Amilkov',
};
</script>

<template>
  <div class="mt-16">
    <div class="pt-8 text-center">
      <img class="mx-auto rounded-full w-40 h-40" src="../components/icons/profilpic.png" alt="Profile Image" />
      <div class="flex items-center justify-center mt-4">
        <img class="w-12 h-12 rounded-full" src="../components/icons/leafL.png" alt="Illustration" />
        <h3 class="text-lg font-bold ml-4">{{ loggedInUser.name }}</h3>
        <img class="w-12 h-12 rounded-full ml-4" src="../components/icons/leafR.png" alt="Another Image" />
      </div>
    </div>
    <h2 class="text-2xl font-bold mx-6 my-4">Favoris</h2>
    <ul class="flex flex-wrap justify-center md:grid md:grid-cols-3 md:gap-4">
      <li v-for="oneRecette in toutesLesRecettesFav" :key="oneRecette.id" class="w-full md:w-auto">
        <RouterLink :to="{ name: 'recettes-id', params: { id: oneRecette.id } }">
          <RecipeCardR v-bind="{ ...oneRecette }" />
        </RouterLink>
      </li>
    </ul>
    


    <div class="bg-accompagnement1 py-10 px-5">
      <div class="flex flex-col col-span-3 text-center">
        <h1 class="text-2xl mb-4 font-pt-serif">Tips et conseils pour être plus écologique</h1>
      </div>
      <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:ml-48	">
        <div class="flex flex-col items-start mt-10 "> <!-- Première grille -->
          <div class="bg-accompagnement relative">
            <img class="w-80 lg:w-full h-auto object-contain rounded" src="../../public/images/ecologie-tips.webp"
              alt="Photo 1" />
            <div class="absolute left-0 bottom-0 bg-acompagnement h-full w-4"></div>
            <div class="absolute bg-acompagnement h-4 w-11/12"></div>
          </div>
          <ul class="mt-4 overflow-hidden truncate">
            <li class="list-item">&#8226; Acheter des choses réutilisables, des produits<br> avec des composants plus sains
            </li>
            <li class="list-item">&#8226; Vérifiez les labels</li>
          </ul>
        </div>
        <div class="flex flex-col items-start mt-10"> <!-- Deuxième grille -->
          <div class="bg-accompagnement relative">
            <img class="w-48 lg:w-full h-auto object-contain rounded shadow-green"
              src="../../public/images/pexels-antoni-shkraba-6187619.webp" alt="Photo 2" />
            <div class="absolute left-0 bottom-0 bg-acompagnement h-full w-4"></div>
            <div class="absolute bg-acompagnement h-4 w-11/12"></div>
          </div>
          <ul class="mt-4 overflow-hidden truncate">
            <li class="list-item">&#8226; Eteignez vos lumières <br>quand il n'y en a pas besoin</li>
            <li class="list-item">&#8226; Utilisez le mode éco sur <br>vos machines à laver et lave-linge</li>
          </ul>
        </div>
        <div class="flex flex-col items-start mt-10"> <!-- Troisième grille -->
          <div class="bg-accompagnement relative">
            <img class="w-44 lg:w-full h-auto object-contain rounded shadow-green"
              src="../../public/images/ecoliegie-tips3.webp" alt="Photo 3" />
            <div class="absolute left-0 bottom-0 bg-acompagnement h-full w-4"></div>
            <div class="absolute bg-acompagnement h-4 w-11/12"></div>
          </div>
          <ul class="mt-4">
            <li class="list-item">&#8226; Utilisez des bocaux pour<br> mettre vos aliments achetés <br>en vrac</li>
            <li class="list-item">&#8226; Remplacez les sachets en<br> plastique et les cartons par <br>des sacs en tissu
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


