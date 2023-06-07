<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-16">
      <div class="flex justify-end"><img class="lg:w-1/5 w-1/2" rel="image" src="@/components/icons/fleurPaiement.png"></div>
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Mode de paiement
        </h2>
        <form class="mt-8 space-y-6 px-5" action="#" method="POST">
          <!-- Informations de paiement -->
          <div class="rounded-md shadow-sm ">
            <div>
              <label for="card-number" class="sr-only">Numéro de carte</label>
              <input id="card-number" name="card-number" type="text" autocomplete="cc-number" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Numéro de carte">
            </div>
            <div class="">
              <label for="expiration-date" class="sr-only">Date d'expiration</label>
              <input id="expiration-date" name="expiration-date" type="text" autocomplete="cc-exp" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="MM/AA">
            </div>
            <div>
              <label for="cvv" class="sr-only">CVV</label>
              <input id="cvv" name="cvv" type="text" autocomplete="cc-csc" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="CVV">
            </div>
          </div>
          
          <!-- Informations personnelles -->
          <div>
            <label for="name" class="sr-only">Nom</label>
            <input id="name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nom complet">
          </div>
          <div>
            <label for="email" class="sr-only">Adresse e-mail</label>
            <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Adresse e-mail">
          </div>
          
          <!-- Bouton de paiement -->
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-acompagnement hover:bg-nuance3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-accompagnement1 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.8.4l-7 9a1 1 0 101.6 1.2L9 4.4 16.2 13a1 1 0 001.6-1.2l-7-9A1 1 0 009 2zm0 7a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                </svg>
              </span>
              Payer
            </button>
          </div>
        </form>
      </div>
      <div class="flex justify-start mt-5"><img class="lg:w-1/5 w-1/2" rel="image" src="@/components/icons/fleurPaiement.png"></div>
    </div>
  </template>
  
  <script setup lang="ts">
    // Logique de la page de paiement
  </script>
  
  <style>
    /* Styles Tailwind CSS */
  </style>
  