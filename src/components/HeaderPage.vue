<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'

// Créer une référence réactive pour suivre l'état du menu
const activeMenu = ref(false)
const isConnected = ref(false)

function closeMenu() {
  activeMenu.value = false
}
</script>

<template>
  <header
    class="fixed top-0 z-10 flex w-full items-center justify-between bg-nuance3 px-6 py-1 transition-all duration-300 ease-in-out lg:py-0 font-pt-serif">
    <RouterLink to="/">
      <div class="flex w-36 mt-2">
        <img rel="image" src="@/components/icons/logo.png">
      </div>
    </RouterLink>

    <div class="flex items-center gap-4 lg:flex-row-reverse">


      <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300"
          :class="{ 'translate-y-[9px] rotate-45 !bg-white': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300"
          :class="{ 'bg-white opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300"
          :class="{ '-translate-y-[9px] -rotate-45 !bg-white': activeMenu }"></div>
      </button>

      <nav
        class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-nuance3 text-2xl text-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-base lg:tracking-wide lg:text-white lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
        <ul class="mt-[25vh]  lg:m-0 lg:flex sm:flex justify-center text-center">
          <li class="py-5">
            <RouterLink class="lg:mr-14 lg:hover:text-accompagnement1 mb-10" to="/panier" @click="closeMenu">Panier
            </RouterLink>
          </li>
          <li class="py-5">
            <RouterLink :to="isConnected ? '/profil' : '/connexion'" class="lg:mr-14 lg:hover:text-accompagnement1"  @click="closeMenu">{{ isConnected ? 'Profil' : 'Connexion' }}</RouterLink>
          </li>
          <li class="py-5">
            <RouterLink class="lg:mr-14 lg:hover:text-accompagnement1" to="/favori" @click="closeMenu">Favori</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>