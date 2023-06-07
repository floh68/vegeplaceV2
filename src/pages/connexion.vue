<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';
import { useRouter } from 'vue-router';

let pb: PocketBase | null = null;
const currentUser = ref<any>();
const email = ref("");
const password = ref("");
const confirm_password = ref("");
const firstName = ref("");

const loginMode = ref(true);
const router = useRouter();

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.onChange(() => {
    currentUser.value = pb!.authStore.model;
  }, true);
});

const doLogout = () => {
  pb!.authStore.clear();
  currentUser.value = null;
};

const doLogin = async () => {
  try {
    const authData = await pb!.collection('users')
      .authWithPassword(email.value, password.value);

    // Redirect to the profile page
    router.push('/profil');
  } catch (error: any) {
    alert(error.message);
  }
};

const doCreateAccount = async () => {
  try {
    const data = {
      "username": firstName.value,
      "email": email.value,
      "emailVisibility": false,
      "password": password.value,
      "passwordConfirm": confirm_password.value,
      "first_name": firstName.value,
    };

    const record = await pb!.collection('users').create(data);

    await doLogin();
  } catch (error: any) {
    alert(error.message);
  }
};
</script>



<template>
  <form>
      <div class="bg-nuance3 justify-center flex flex-col items-center min-h-screen font-open-sans">
        <img rel="image" src="@/components/icons/logo.png">
        <h2 class="text-center text-white ">{{ loginMode ? "CONNEXION" : "INSCRIPTION" }}</h2>
        <div class="sm:col-span-2 sm:col-start-1 mt-4 text-white ">
          <div class="mt-2 ">
            <input v-model="email" type="email" name="email" id="email" autocomplete="email" placeholder="Entrez votre adresse mail" required
              class="border border-gray-300 rounded w-80 h-12 text-black">
          </div>
        </div>
        <div class="sm:col-span-2 sm:col-start-1 mt-4">
          <div class="mt-2">
            <input v-model="password" type="password" name="password" id="password" autocomplete="none" placeholder="Entrez votre mot de passe" required
              class="border border-gray-300 rounded w-80 h-12 text-black">
          </div>
        </div>

        <div v-if="loginMode">
          <div class="text-center mt-6">
            <button type="button" @click="doLogin" class="bg-accompagnement1 text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300">
              Se connecter
            </button>

          <div class="text-center mt-6">
            <p class="mb-2 sm:mb-1">Vous n'avez pas de compte ?</p>
            <button type="button" @click="loginMode = false" class="text-white">
              S'inscrire            
            </button>
          </div>

          </div>
        </div>
        
        <div v-else>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <div class="mt-2">
              <input v-model="confirm_password" type="password" name="confirm_password" id="confirm_password" autocomplete="none" placeholder="Confirmation du mot de passe" required
                class="border border-gray-300 rounded w-80 h-12 text-black">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <div class="mt-2">
              <input v-model="firstName" type="text" name="firstName" id="firstName" autocomplete="first_name" placeholder="Entrer votre prénom" required
                class="border border-gray-300 rounded w-80 h-12 text-black">
            </div>
          </div>
          <div class="mt-5 items-center">
            <input class="mr-3 sm:mr-5" id="confidential" type="checkbox" required>
            <label for="confidential">J'accepte <RouterLink to="/mentions" class="link"><strong>la politique de confidentialité</strong></RouterLink></label>
          </div>

          <div class="text-center mt-5 sm:mt-8">
            <button type="button" @click="doCreateAccount" class="bg-bleuTurquoise text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300 bg-accompagnement1">
              S'inscrire
            </button>
          </div>

          <div class="text-center mt-6 text-blanc">
            <p class="mb-2 sm:mb-1">Vous avez déjà un compte ?</p>
            <button type="button" @click="loginMode = true" class="text-white">
              Se connecter
            </button>
          </div>
        </div>
      </div>
  </form>
</template>