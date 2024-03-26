
<template>
    <v-stepper :items="['배양 입고', '배양', '배양 출고']"
        next-text="다음"
        prev-text="이전"
        >
        <template v-slot:item.1>
          <v-card title="배양실 입고" flat>
              <!-- LOT 배양실 입고 시간, 날짜 등록                -->
              <v-skeleton-loader type="card"></v-skeleton-loader>
          </v-card>
        </template>
    
        <template v-slot:item.2>
          <v-card title="배양" flat>
            <!-- 배양관리<br/> 
              배양동 온도, 습도, CO2, 광도조절, - 입력 <br/>
              환경변화시 알림 (온습도 광도 상하한선 등록 / 알림 연락처 등록 ) - 조작<br/>
              전체배양 현황 확인 대시보드 <br/>
              배지 온도, 무게, 색상, 방 조도 <br/>
              배양 특이사항 기록,<br/>
              배양 이동 - 배양실 위치 이동 / 이동 등록 <br/>
              타공 -????? / 배지의 타공 유무<br/> -->
              <v-skeleton-loader type="card"></v-skeleton-loader>

          </v-card>
        </template>
    
        <template v-slot:item.3>
          <v-card title="배양 출고" flat>
            <!-- 배양 출고 - 배양 LOT 출고시 새롭게 LOT 분할생성이라고 적었지만
            결국 출고 LOT 기준으로 관리 하게 끔 재생성 -->
            <v-skeleton-loader type="card"></v-skeleton-loader>

          </v-card>
        </template>

        <!-- <template v-slot:item.4>
          <v-card title="배양 Daliy report" flat>
            배양실 현황을 고려한 Daly report 생성 - 배양실 현황 확인, 추적 
          </v-card>
        </template>

        <template v-slot:item.5>
          <v-card title="배양 메뉴얼" flat>
            배양 메뉴얼 관리 - 실제 메뉴얼 버전관리 - 리스트 표현해주고 / 버전 업그레이드 할때마다 수정 한사람 이력 표현 
            배양 메뉴얼 관리 - 배양 일자별 온도, 습도 Co2 내부온도 (온도 중심 관리)
            
          </v-card>
        </template> -->
    </v-stepper>
</template>