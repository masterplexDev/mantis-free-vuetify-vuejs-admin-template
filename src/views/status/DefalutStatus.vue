<script setup lang="ts">
import { ref, shallowRef } from 'vue';

import BaseBreadcrumb   from '@/components/shared/BaseBreadcrumb.vue';

const page = ref({ title: '표고 농장 배양동 현황' });
const tabs_item = ref('3');
const breadcrumbs = shallowRef([
  {
    title: '군자 표고버섯 농장',
    disabled: false,
    href: '#'
  },
  {
    title: '표고 농장 배양동 현황',
    disabled: true,
    href: '#'
  }
]);
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

</template>
