<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
</script>
<template>
  <footer class="bg-blue-950 px-5 py-4 font-open-sans">
    <div class="text-white md:grid md:grid-cols-3 md:gap-8">
      <div class="H4">
        <h4>Contactez Nous</h4>
        <ul class="list-disc list-inside">
          <li class="text-sm pt-2 hover:text-[#B3F274]">
            <a href="vegeplace@free.fr">vegeplace@free.fr</a>
          </li>
        </ul>
                <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-white">
                <IconFacebook class="sm:w-30 sm:h-30 w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="#">
                <IconInstagram class="sm:w-30 sm:h-30 w-8 h-8" />
              </a>
            </li>
          </ul>
      </div>
      <div class="H4">
        <h4>En savoir Plus</h4>
        <ul class="list-disc list-inside">
          <RouterLink to="/">
          <li class="text-sm pt-2 hover:text-[#B3F274]">
            Calendrier des évenements à venir
          </li>
          </RouterLink>
        </ul>
      </div>
      <div>
        <h4 class="text-lg text-white lg:mt-0 mt-5 mb-2">Newsletters</h4>
        <p class="text-gray-100 mb-4">Inscrivez-vous pour recevoir les nouveautés dans votre boîte mail !</p>
        <form class="flex flex-col md:flex-row">
          <input
            class="w-full md:w-3/4 bg-white border border-gray-300 rounded py-2 px-4 placeholder-gray-400 mb-4 md:mb-0 text-gray-800"
            type="text" placeholder="Adresse mail">
          <div class="w-full md:w-1/4 md:ml-4">
            <button
              class="bg-white text-black font-semibold py-2 px-4 rounded w-full hover:bg-black hover:text-white">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="text-center mt-4">
        <p class="text-sm text-gray-100">
          <RouterLink to="/politique" class="hover:text-[#B3F274]">Termes et conditions d'utilisation</RouterLink> -
          <RouterLink to="/cookies" class="hover:text-[#B3F274]">Cookies</RouterLink> -
        <RouterLink to="/mentions" class="hover:text-[#B3F274]">Mention légales</RouterLink>
      </p>
    </div>
  </div>
</footer></template>

