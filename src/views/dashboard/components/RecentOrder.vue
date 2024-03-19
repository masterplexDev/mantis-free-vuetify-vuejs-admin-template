<script setup lang="ts">
import { shallowRef } from 'vue';

import UiTitleCard from '@/components/shared/UiTitleCard.vue';

const projects = shallowRef([
  {
    number: 13256498,
    order: 125,
    name: '1공장 (국내)',
    amount: '70,999',
    priority: '생산 취소'
  },
  {
    number: 13286564,
    order: 100,
    name: '1공장 (국내)',
    amount: '83,348',
    priority: '출하'
  },
  {
    number: 84564564,
    order: 40,
    name: '2공장 (국내)',
    amount: '40,570',
    priority: '주문 취소'
  },
  {
    number: 86739658,
    order: 99,
    name: '2공장 (국내)',
    amount: '410,780',
    priority: '생산 지연'
  },
  {
    number: 98652366,
    order: 50,
    name: '3공장 (해외)',
    amount: '10,239',
    priority: '주문 출하'
  },
  {
    number: 98753263,
    order: 89,
    name: '1공장 (국내)',
    amount: '10,570',
    priority: '주문 취소'
  },
  {
    number: 98753275,
    order: 185,
    name: '4공장 (해외)',
    amount: '98,063',
    priority: '주문 출하'
  },
  {
    number: 98753291,
    order: 100,
    name: '2공장 (국내)',
    amount: '14,001',
    priority: '생산 지연'
  },
  {
    number: 98756325,
    order: 355,
    name: '3공장 (해외)',
    amount: '90,989',
    priority: '주문 출하'
  },
  {
    number: 98764564,
    order: 300,
    name: '1공장 (국내)',
    amount: '180,139',
    priority: '생산 지연'
  }
]);
</script>

<template>
  <UiTitleCard title="농장 별 주문양" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">Supply no.</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Factory name</th>
          <th class="text-right text-caption font-weight-bold text-uppercase" style="min-width: 100px">Total order</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Status</th>
          <th class="text-right text-caption font-weight-bold text-uppercase">Total Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.name">
          <td class="py-3">
            <router-link to="/dashboard/default" class="text-secondary link-hover">{{ item.number }}</router-link>
          </td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.order }}</td>
          <td class="py-3">
            <v-chip variant="text" size="small" class="px-0" v-if="item.priority === '주문 취소'">
              <v-avatar size="8" color="error" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">주문 취소</p>
            </v-chip>
            <v-chip variant="text" size="small" class="px-0" v-else-if="item.priority === '주문 출하'">
              <v-avatar size="8" color="success" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">주문 출하</p>
            </v-chip>
            <v-chip variant="text" size="small" class="px-0" v-else>
              <v-avatar size="8" color="warning" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">생산 지연</p>
            </v-chip>
          </td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.amount }}</td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>
