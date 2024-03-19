<script setup lang="ts">
import { ref } from 'vue';
// icons
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';
import Logo from '@/layouts/dashboard/logo/LogoDark.vue';
const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
const password = ref('admin123');
const username = ref('admin@doctor-ag.com');
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);
const logpath = ref("@/assets/images/logo.png");
/* eslint-disable @typescript-eslint/no-explicit-any */
function validate(values: any, { setErrors }: any) {
  const authStore = useAuthStore();
  return authStore.login(username.value, password.value).catch((error) => setErrors({ apiError: error }));
}
</script>

<template>
    <v-container class="w-100 ma-0 pa-0">
        <v-row>
          <h3 class="ml-7 mb-10" style="font-weight: bolder;">For the Great Future, We Dream of Green!</h3>
        </v-row>
        <v-row class="ma-0 pa-0">
          <v-col cols="4" class="justify-center ma-0 pa-0">
              <img class="justify-center logo_size ml-3" src="@/assets/images/logo.png"/>
          </v-col>
          <v-col cols="8" class="justify-center ma-0 pa-0 pt-8">
            <br/>
            <h3 style="font-weight: bolder;">닥터 애그 스마트팜 관제 제어 시스템</h3>
          </v-col>
        </v-row>
      <Form @submit="validate" class="mt-7 loginForm" v-slot="{ errors, isSubmitting }">
        <div class="mb-6">
          <v-label>Email Address</v-label>
          <v-text-field
            aria-label="email address"
            v-model="username"
            :rules="emailRules"
            class="mt-2"
            required
            hide-details="auto"
            variant="outlined"
            color="primary"
          ></v-text-field>
        </div>
        <div>
          <v-label>Password</v-label>
          <v-text-field
            aria-label="password"
            v-model="password"
            :rules="passwordRules"
            required
            variant="outlined"
            color="primary"
            hide-details="auto"
            :type="show1 ? 'text' : 'password'"
            class="pwdInput mt-2"
          >
            <template v-slot:append>
              <v-btn color="secondary" icon rounded variant="text">
                <EyeInvisibleOutlined :style="{ color: 'rgb(var(--v-theme-secondary))' }" v-if="show1 == false" @click="show1 = !show1" />
                <EyeOutlined :style="{ color: 'rgb(var(--v-theme-secondary))' }" v-if="show1 == true" @click="show1 = !show1" />
              </v-btn>
            </template>
          </v-text-field>
        </div>

        <div class="d-flex align-center mt-4 mb-7 mb-sm-0">
          <v-checkbox
            v-model="checkbox"
            :rules="[(v: any) => !!v || 'You must agree to continue!']"
            label="Keep me sign in"
            required
            color="primary"
            class="ms-n2"
            hide-details
          ></v-checkbox>
          <div class="ml-auto">
            <router-link to="/auth/login" class="text-darkText link-hover">Forgot Password?</router-link>
          </div>
        </div>
        <v-btn color="primary" :loading="isSubmitting" block class="mt-5" variant="flat" size="large" :disabled="valid" type="submit">
          Login</v-btn
        >
        <div v-if="errors.apiError" class="mt-2">
          <v-alert color="error">{{ errors.apiError }}</v-alert>
        </div>
      </Form>
    </v-container>
</template>
<style lang="scss">
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>
<style scoped>
 .logo_size {max-width: 300px; max-height: 80px; text-align: center; vertical-align:middle;}
 h3 {font-size:21px; color:#00a950; font-weight:700; text-align:center;}
</style>