<template>
  <div class="logo">
    <RouterLink to="/dashboard" aria-label="logo">
      <img class="justify-center logo_size ml-3" src="@/assets/images/logo.png"/>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const darkprimary = ref('rgb(var(--v-theme-darkprimary))');
</script>
<style scoped>
 .logo_size {max-width: 400px; max-height: 100px;}
</style>