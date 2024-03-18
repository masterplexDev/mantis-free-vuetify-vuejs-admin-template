<script setup lang="ts">
import Logo from '@/layouts/dashboard/logo/LogoDark.vue';
import AuthLogin from '../authForms/AuthLogin.vue';
import AuthFooter from './AuthFooter.vue';
</script>

<template>
  <v-parallax src="https://th.bing.com/th/id/OIG2.lGhBdbX3VCv8pMZ55jEv?w=1024&h=1024&rs=1&pid=ImgDetMain" jumbotron >
      <!---Login Part-->
      <v-col cols="12" lg="12" class="d-flex align-center">
        <v-container>
        
          <div class="d-flex align-center justify-center" style="min-height: calc(100vh - 148px)">
            <v-row justify="center">
              <v-col cols="12" md="12">
                  <v-card elevation="24" class="loginBox pt-5">
                    <v-card-text>
                      <!---Login Form-->
                      <AuthLogin />
                      <!---Login Form-->
                    </v-card-text>
                  </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-col>
      <!---Login Part-->
      <v-col cols="12">
        <v-container class="pt-0 pb-6">
          <AuthFooter />
        </v-container>
      </v-col>
  </v-parallax>

</template>
<style lang="scss">
.loginBox {
  max-width: 500px;
  min-height: 500px;
  margin: 0 auto;
}
.blur-logo {
  position: absolute;
  filter: blur(18px);
  bottom: 0;
  transform: inherit;
}
</style>
