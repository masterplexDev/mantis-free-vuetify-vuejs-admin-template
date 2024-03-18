
<template>
    <v-stepper class="mt-5" 
    prev-text = "이전"
    next-text = "다음"
    :items="['원재료 검수', '원재료 데이터 입력', '원재료 최종결과']">
        <template v-slot:item.1>

          <v-card title="원재료 검수" flat>

          </v-card>
        </template>
    
        <template v-slot:item.2>
          <v-card title="원재료 데이터 입력" flat>...</v-card>
        </template>
    
        <template v-slot:item.3>
          <v-card title="원재료 최종결과" flat>...</v-card>
        </template>
    </v-stepper>
</template>