<script setup lang="ts">
  import { defineComponent }  from "vue";
  import { useDataStore }     from '@/stores/data_store';
  import { ko } from 'date-fns/locale';
</script>

<script lang="ts">
const dataStore = useDataStore();

export default defineComponent({
  computed :{
    color () {
        if (this.step2_data.temperature < 20) return '#4B0082'
        if (this.step2_data.temperature < 27) return '#008080'
        if (this.step2_data.temperature < 30) return '#008000'
        if (this.step2_data.temperature < 37) return '#FFA500'
        return '#FF0000'
      },
  },
  data() {
    return {
          comment_text        : ''              //  댓글 입력 텍스트
        , loading_bool        : false           //  로딩바
        , imgDialog           : false           //  이미지 Modal
        , imgCarouselstart    : 1               //  이미지 상세 보기 Modal
        , showboardEdit       : false           //  내용 수정  
        
        , step2_data          : 
          { 
            
              frozen                 : '0'       // 냉동정도
            , temperature            :  20        // 온도
            , incubationPoint        : new Date  // 타공시점
            , thermometer            : new Date  // 타코미터
            , cultivationDays        : new Date  // 배양일수
            , inoculationDate        : new Date  // 접종일
            , invoice                : ''        // 배지invoice
            , outside_hole           : '0'       // 배지 외부 - 타공 구멍
            , outside_bar            : '0'       // 배지 외부 - 봉 찢어짐 여부
            , outside_pollution      : '1'       // 배지 외부 - 오염 여부
            , inside_substrate       : '0'       // 배지 내부 - 융기 진행 정도
            , inside_colorchange     : '1'       // 배지 내부 - 갈변 진행 정도
            , inside_mycelial_spread : '0'       // 배지 내부 - 균사 퍼짐
          }   
        , step3_data          : 
          { 
              etc             : '[2024-3-21] 특이사항 발견 \n배지 검수 중 일부 30% 의 배지에서 불량이 발생하고 균 분포도가 너무 늘어난 관계로 온도가 너무 높거나 조절에 실패하여\n불량 배지가 늘어난것을 판단 됩니다. 온도 조절기 점검이 필요하며, 주기적인 관리가 필요합니다.'       // 냉동정도
          },     
    };
  },
  methods:{
    /* 게시글 확인 처리 */
    getlot() {
      this.loading_bool=true;
      setTimeout(() => {
        dataStore.user.lot = dataStore.getNextCode('A')
        this.loading_bool= false;}, 1000);
      },
      decrement () {
        this.step2_data.temperature--;
      },
      increment () {
        this.step2_data.temperature++;
      },
  }

});
</script>

<template>
    <v-stepper 
        :items="['배지 LOT 생성', '배지 검수(기본)', '배지 검수(특이사항)','해동 입고', '해동', '해동 출고']"
        next-text="다음"
        prev-text="이전"
    >
      <template v-slot:item.1>
        <v-card 
            flat
            title     = "배지 LOT 생성" 
            subtitle  = "배지입고 LOT 생성 및 등록"
          >
          <v-row>
            <v-col cols="3">
              <v-text-field 
                v-model="dataStore.user.lot" 
                label="LOT 번호"
                readonly
                required
                variant="outlined"
                :loading="loading_bool"
                clearable>
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-btn @click="getlot()"> LOT 생성 </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </template>
      
      <template v-slot:item.2>
        <v-card title="배지 검수 (기본) 입력" flat
        subtitle  = "배지 검수 내역 등록 및 설정">

        <v-row>
            <v-col cols="6"></v-col>
            <v-col cols="6" class="justify-end float-right" >
              <v-row class="justify-end pr-5">
                  <span class="ma-2 text-overline"> 생성된 LOT 번호 </span>
                  <v-chip>{{ dataStore.user.lot }}</v-chip>
              </v-row>
            </v-col>
          </v-row>

          <v-divider class="ma-5"></v-divider>
          
          <h4 class="ml-5">배지 상태</h4>
          
          <v-row class="mt-5 ml-4">
            <v-col cols="2" class="text-body-1 mt-4">
                배지 상태 - 냉동정도 
            </v-col>
            <v-col cols="4">
              <v-slide-group show-arrows v-model="step2_data.frozen">
                <v-slide-group-item
                  v-for="(option, index) in ['양호', '미흡', '불량']"
                    :key="index"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-btn
                      :color="isSelected ? (option === '양호' ? 'success' : (option === '불량' ? 'error' : 'warning')) : undefined"
                      class="ma-2"
                      rounded
                      @click="toggle"
                    >
                    {{ option }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
            <v-col cols="2" class="text-body-1 mt-4">
                배지 상태 - 배지온도
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col cols="2">
                  <v-row class="mt-2">
                    <span class="text-h2 font-weight-light" v-text="step2_data.temperature"></span>
                    <span class="subheading font-weight-light me-1 mt-4">℃</span>
                  </v-row>
                </v-col>
                <v-col cols="10">
                  <v-slider
                    class="mt-2"
                    v-model="step2_data.temperature"
                    :color="color"
                    min         ="10" 
                    max         ="40" 
                    step        = "1"
                    track-color="grey"
                  >
                  <template v-slot:prepend>
                    <v-btn
                    :color="color"
                    icon="mdi-minus"
                    size="small"
                    variant="text"
                    @click="decrement"
                    ></v-btn>
                  </template>
                  
                  <template v-slot:append>
                    <v-btn
                    :color="color"
                    icon="mdi-plus"
                    size="small"
                    variant="text"
                    @click="increment"
                    ></v-btn>
                  </template>
                </v-slider>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="ml-4">
            <v-col cols="2" class="text-body-1 mt-2">
                배지 상태 - 타공시점 
            </v-col>
            <v-col cols="4">
              <VueDatePicker 
                v-model   ="step2_data.incubationPoint"
                format="yyyy-MM-dd"
                :auto-apply=true
                :teleport = true
                :enable-time-picker="false" 
                :format-locale="ko"
              />
            </v-col>
            <v-col cols="2" class="text-body-1 mt-2">
                배지 상태 - 배양일수 
            </v-col>
            <v-col cols="4">
              <VueDatePicker 
                v-model="step2_data.cultivationDays"
                format="yyyy-MM-dd"
                :auto-apply=true
                :teleport = true
                :enable-time-picker="false" 
                :format-locale="ko"
                />
            </v-col>
          </v-row>
          <v-row class="ml-4 mt-4">
            <v-col cols="2" class="text-body-1 mt-2">
                배지 상태 - 접종일
            </v-col>
            <v-col cols="4">
              <VueDatePicker 
                v-model="step2_data.inoculationDate"
                format="yyyy-MM-dd"
                :auto-apply=true
                :teleport = true
                :enable-time-picker="false" 
                :format-locale="ko"
                />
            </v-col>
          </v-row>
          
          <v-divider class="ma-5"></v-divider>
          <h4 class="ml-5">배지 내,외부</h4>

          <v-row class="mt-5 ml-4">
            <v-col cols="2" class="text-body-1 mt-4">
                배지 내부 - 융기 진행 정도
            </v-col>
            <v-col cols="4">
              <v-slide-group show-arrows v-model="step2_data.inside_substrate">
                <v-slide-group-item
                  v-for="(option, index) in ['충분', '부족', '과다']"
                    :key="index"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-btn
                      :color="isSelected ? (option === '충분' ? 'success' : (option === '과다' ? 'error' : 'warning')) : undefined"
                      class="ma-2"
                      rounded
                      @click="toggle"
                    >
                    {{ option }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
            <v-col cols="2" class="text-body-1 mt-4">
                배지 외부 -  타공 여부 
            </v-col>
            <v-col cols="4">
              <v-slide-group show-arrows v-model="step2_data.outside_hole">
                <v-slide-group-item
                  v-for="(option, index) in ['O', 'X']"
                    :key="index"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-btn
                      :color="isSelected ?  'success' : undefined"
                      class="ma-2"
                      rounded
                      @click="toggle"
                    >
                    {{ option }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
          </v-row>

          <v-row class="ml-4">
            <v-col cols="2" class="text-body-1 mt-4">
                배지 내부 - 갈변 진행 정도
            </v-col>
            <v-col cols="4">
              <v-slide-group show-arrows v-model="step2_data.inside_colorchange">
                <v-slide-group-item
                  v-for="(option, index) in ['강함', '보통', '약함', '없음']"
                    :key="index"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-btn
                      :color="isSelected ? (option === '강함' ? 'primary' : option === '보통' ? 'success' : (option === '없음' ? 'error' : 'warning')) : undefined"
                      class="ma-2"
                      rounded
                      @click="toggle"
                    >
                    {{ option }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
            <v-col cols="2" class="text-body-1 mt-4">
                배지 외부 -  봉 찢어짐 여부
            </v-col>
            <v-col cols="4">
              <v-slide-group show-arrows v-model="step2_data.outside_bar">
                <v-slide-group-item
                  v-for="(option, index) in ['O', 'X']"
                    :key="index"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-btn
                      :color="isSelected ?  'success' : undefined"
                      class="ma-2"
                      rounded
                      @click="toggle"
                    >
                    {{ option }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
          </v-row>

          <v-row class="ml-4">
            <v-col cols="2" class="text-body-1 mt-4">
                배지 내부 - 균사 퍼짐 
            </v-col>
            <v-col cols="4">
              <v-slide-group show-arrows v-model="step2_data.inside_mycelial_spread">
                <v-slide-group-item
                  v-for="(option, index) in ['충분', '부족', '과다']"
                    :key="index"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-btn
                      :color="isSelected ? (option === '충분' ? 'success' : (option === '과다' ? 'error' : 'warning')) : undefined"
                      class="ma-2"
                      rounded
                      @click="toggle"
                    >
                    {{ option }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
            <v-col cols="2" class="text-body-1 mt-4">
                배지 외부 -  오염 여부
            </v-col>
            <v-col cols="4">
              <v-slide-group show-arrows v-model="step2_data.outside_pollution">
                <v-slide-group-item
                  v-for="(option, index) in ['O', 'X']"
                    :key="index"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-btn
                      :color="isSelected ?  'success' : undefined"
                      class="ma-2"
                      rounded
                      @click="toggle"
                    >
                    {{ option }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
          </v-row>
          
        </v-card>
      </template>
      
      <template v-slot:item.3>
        <v-card title="배지 검수 (특이사항) 입력" flat
        subtitle  = "특이사항 별도 입력">
          <v-row>
            <v-col cols="6"></v-col>
            <v-col cols="6" class="justify-end float-right" >
              <v-row class="justify-end pr-5">
                  <span class="ma-2 text-overline"> 생성된 LOT 번호 </span>
                  <v-chip>{{ dataStore.user.lot }}</v-chip>
              </v-row>
            </v-col>
          </v-row>

         <v-row>
            <v-col class="ma-5">
              <v-textarea 
              v-model="step3_data.etc"
              class     = "text-area-custom"
              label     ="특이사항 입력"
              row-height="15"
              rows      ="30"
              density   = "compact"
              counter
              variant="outlined"
              auto-grow
              shaped
              maxlength = "300"
              ></v-textarea>
            </v-col>
          </v-row>
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
