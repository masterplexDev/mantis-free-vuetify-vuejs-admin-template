
<template>
    <v-stepper :items="['생육동 환경 조절', '생육 입고', '생육 환경 (1기)']"
        next-text="다음"
        prev-text="이전">
        <template v-slot:item.1>
          <v-card title="생육동 환경 조절" flat>
            <!-- 생육동 온도,습도,CO2,광도 조절 - 조작이네 ?


            생육 1기 발생 (3일) -->
            <v-skeleton-loader type="card"></v-skeleton-loader>

          </v-card>
        </template>
    
        <template v-slot:item.2>
          <v-card title="생육 입고" flat>
            <v-skeleton-loader type="card"></v-skeleton-loader>
          </v-card>
        </template>

        <template v-slot:item.3>
          <v-card title="생육 환경(1기)" flat>
            <v-row>
                <v-col class="pa-4">

                  <v-stepper :items="['생육 1기 발생(3일)', '생육 1기 솎기', '생육 1기 수확(6 ~ 20일)']"
                  next-text="다음"
                  prev-text="이전"
                  >
                    <template v-slot:item.1>
                      <v-card title="생육 1기 발생(3일)" flat>
                        <v-skeleton-loader type="card"></v-skeleton-loader>
                      </v-card>
                    </template>
                    <template v-slot:item.2>
                      <v-card title="생육 1기 솎기" flat>
                        <v-skeleton-loader type="card"></v-skeleton-loader>
                        
                      </v-card>
                    </template>
                    <template v-slot:item.3>
                      <v-card title="생육 1기 수확(6 ~ 20일)" flat>
                        <v-skeleton-loader type="card"></v-skeleton-loader>
                      </v-card>
                    </template>
                    
                  </v-stepper>
                </v-col>
            </v-row>
              
          </v-card>
        </template>
     
    </v-stepper>
</template>