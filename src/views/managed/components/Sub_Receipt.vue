
<template>
    <h3>배지 - 입고</h3>
    <v-stepper 
        :items="['배지 LOT 생성', '배지 검수(기본)', '배지 검수(특이사항)','해동 입고', '해동', '해동 출고']"
        next-text="다음"
        prev-text="이전"
    >
      <template v-slot:item.1>
        <v-card title="배지 입고 LOT 생성" flat>
          LOT 번호 생성 20240314-1
        </v-card>
      </template>
      
      <template v-slot:item.2>
        <v-card title="배지 검수 (기본) 입력" flat>
            배지상태 
            냉동정도
            배지온도
            타공시점
            타코미터
            배양일수 
            배지무게

          배지외부모양
            -타공구멍
            -봉 찢어짐
            -오염여부
          배지내부모양
            -융기진행정도
            -갈변진행정도
            -균사 퍼짐 

        </v-card>
      </template>
      
      <template v-slot:item.3>
        <v-card title="배지 검수 (특이사항) 입력" flat>
          일자별 배지무게
          일자별 배지온도 
        </v-card>
      </template>

      <template v-slot:item.4>
        <v-card title="해동 입고" flat>
          해동실 입고일 저장
        </v-card>
      </template>
      
      <template v-slot:item.5>
        <v-card title="해동" flat>
         해동실 온도,습도,Co2,광도 조절

        </v-card>
      </template>
      
      <template v-slot:item.6>
        <v-card title="해동 출고" flat>
          해동실 출고일 저장
        </v-card>
      </template>
    </v-stepper>
  </template>