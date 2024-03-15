<template>
  <div class="logo">
    <RouterLink to="/dashboard" aria-label="logo">
      <v-img 
          src="http://www.doctor-ag.com/images/common/logo.png" 
          class="logo_size"
      ></v-img>
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
 .logo_size {max-width: 180px; max-height: 70px;}
</style>