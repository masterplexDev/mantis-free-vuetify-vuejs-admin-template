<script setup lang="ts">
import { RouterView } from 'vue-router';
import LoaderWrapper from './LoaderWrapper.vue';
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import FooterPanel from './footer/FooterPanel.vue';
</script>

<template>
  <v-locale-provider>
    <v-app :class="[]">
      <VerticalSidebarVue />
      <VerticalHeaderVue />

      <v-main class="page-wrapper">
        <v-container class="ma-0">
          <v-col cols="12" class="ma-0 pa-0">
            <!-- Loader start -->
            <LoaderWrapper />
            <!-- Loader end -->
            <RouterView />
          </v-col>
        </v-container>
        <v-container>
          <v-col cols="12" class="ma-0 pa-0">
            <FooterPanel />
          </v-col>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
