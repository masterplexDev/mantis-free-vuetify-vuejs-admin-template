<script setup lang="ts">
import { ref, shallowRef } from 'vue';

import BaseBreadcrumb   from '@/components/shared/BaseBreadcrumb.vue';
import RawInput         from './components/Rawinput.vue';
import Cultivation      from './components/Cultivation.vue';
import Growth           from './components/Growth.vue';
import Sub_Manufacture  from './components/Sub_Manufacture.vue';
import Sub_Receipt      from './components/Sub_Receipt.vue';

const page = ref({ title: '표고 농장 생산 관리' });
const tabs_item = ref('3');
const breadcrumbs = shallowRef([
  {
    title: '군자 표고버섯 농장',
    disabled: false,
    href: '#'
  },
  {
    title: '표고 농장 생산 관리',
    disabled: true,
    href: '#'
  }
]);
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

  <v-sheet class="mt-5">
    <v-tabs grow v-model="tabs_item" @click="" >
      <!-- <v-tab value="1">원재료 입고</v-tab>
      <v-tab value="2">배지 제조</v-tab> -->
      <v-tab value="3">배지 입고</v-tab>
      <v-tab value="4">배양</v-tab>
      <v-tab value="5">생육</v-tab>
    </v-tabs>
  </v-sheet>

  <v-window v-model="tabs_item" class="mt-5">
    <!-- 
      <v-window-item value="1">
        <RawInput/>
      </v-window-item>
      <v-window-item value="2">
        <Sub_Manufacture />
      </v-window-item> 
    -->
    <v-window-item value="3">
      <Sub_Receipt />
    </v-window-item>
    <v-window-item value="4">
      <Cultivation />
    </v-window-item>
    <v-window-item value="5">
      <Growth />
    </v-window-item>
  </v-window>

</template>
