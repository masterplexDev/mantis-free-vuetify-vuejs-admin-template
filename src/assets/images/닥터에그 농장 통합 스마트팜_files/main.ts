import { createApp } from "/node_modules/.vite/deps/vue.js?v=6eec1da5";
import { createPinia } from "/node_modules/.vite/deps/pinia.js?v=6eec1da5";
import App from "/src/App.vue";
import { router } from "/src/router/index.ts";
import vuetify from "/src/plugins/vuetify.ts";
import "/src/scss/style.scss";
import PerfectScrollbar from "/node_modules/.vite/deps/vue3-perfect-scrollbar.js?v=6eec1da5";
import VueTablerIcons from "/node_modules/.vite/deps/vue-tabler-icons.js?v=6eec1da5";
import __vite__cjsImport8_vue3Apexcharts from "/node_modules/.vite/deps/vue3-apexcharts.js?v=6eec1da5"; const VueApexCharts = __vite__cjsImport8_vue3Apexcharts.__esModule ? __vite__cjsImport8_vue3Apexcharts.default : __vite__cjsImport8_vue3Apexcharts;
import Antd from "/node_modules/.vite/deps/ant-design-vue.js?v=6eec1da5";
import "/node_modules/ant-design-vue/dist/reset.css";
import "/node_modules/@fontsource/public-sans/400.css";
import "/node_modules/@fontsource/public-sans/500.css";
import "/node_modules/@fontsource/public-sans/600.css";
import "/node_modules/@fontsource/public-sans/700.css";
import { fakeBackend } from "/src/utils/helpers/fake-backend.ts";
import { createI18n } from "/node_modules/.vite/deps/vue-i18n_dist_vue-i18n__esm-bundler__js.js?v=6eec1da5";
import messages from "/src/utils/locales/messages.ts";
const i18n = createI18n({
  locale: "en",
  messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true
});
const app = createApp(App);
fakeBackend();
app.use(router);
app.use(PerfectScrollbar);
app.use(createPinia());
app.use(VueTablerIcons);
app.use(Antd);
app.use(i18n);
app.use(VueApexCharts);
app.use(vuetify).mount("#app");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNyZWF0ZVBpbmlhIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHZ1ZXRpZnkgZnJvbSAnLi9wbHVnaW5zL3Z1ZXRpZnknO1xuaW1wb3J0ICdAL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICd2dWUzLXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCBWdWVUYWJsZXJJY29ucyBmcm9tICd2dWUtdGFibGVyLWljb25zJztcbmltcG9ydCBWdWVBcGV4Q2hhcnRzIGZyb20gJ3Z1ZTMtYXBleGNoYXJ0cyc7XG5pbXBvcnQgQW50ZCBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7XG5pbXBvcnQgJ2FudC1kZXNpZ24tdnVlL2Rpc3QvcmVzZXQuY3NzJztcblxuLy8gZ29vZ2xlLWZvbnRzXG5pbXBvcnQgJ0Bmb250c291cmNlL3B1YmxpYy1zYW5zLzQwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9wdWJsaWMtc2Fucy81MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvcHVibGljLXNhbnMvNjAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3B1YmxpYy1zYW5zLzcwMC5jc3MnO1xuXG4vL01vY2sgQXBpIGRhdGFcbmltcG9ydCB7IGZha2VCYWNrZW5kIH0gZnJvbSAnQC91dGlscy9oZWxwZXJzL2Zha2UtYmFja2VuZCc7XG5cbi8vaTE4XG5pbXBvcnQgeyBjcmVhdGVJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJ0AvdXRpbHMvbG9jYWxlcy9tZXNzYWdlcyc7XG5cbmNvbnN0IGkxOG4gPSBjcmVhdGVJMThuKHtcbiAgbG9jYWxlOiAnZW4nLFxuICBtZXNzYWdlczogbWVzc2FnZXMsXG4gIHNpbGVudFRyYW5zbGF0aW9uV2FybjogdHJ1ZSxcbiAgc2lsZW50RmFsbGJhY2tXYXJuOiB0cnVlXG59KTtcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcCk7XG5mYWtlQmFja2VuZCgpO1xuYXBwLnVzZShyb3V0ZXIpO1xuYXBwLnVzZShQZXJmZWN0U2Nyb2xsYmFyKTtcbmFwcC51c2UoY3JlYXRlUGluaWEoKSk7XG5hcHAudXNlKFZ1ZVRhYmxlckljb25zKTtcbmFwcC51c2UoQW50ZCk7XG5hcHAudXNlKGkxOG4pO1xuYXBwLnVzZShWdWVBcGV4Q2hhcnRzKTtcbmFwcC51c2UodnVldGlmeSkubW91bnQoJyNhcHAnKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxtQkFBbUI7QUFDNUIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsY0FBYztBQUN2QixPQUFPLGFBQWE7QUFDcEIsT0FBTztBQUNQLE9BQU8sc0JBQXNCO0FBQzdCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sVUFBVTtBQUNqQixPQUFPO0FBR1AsT0FBTztBQUNQLE9BQU87QUFDUCxPQUFPO0FBQ1AsT0FBTztBQUdQLFNBQVMsbUJBQW1CO0FBRzVCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sY0FBYztBQUVyQixNQUFNLE9BQU8sV0FBVztBQUFBLEVBQ3RCLFFBQVE7QUFBQSxFQUNSO0FBQUEsRUFDQSx1QkFBdUI7QUFBQSxFQUN2QixvQkFBb0I7QUFDdEIsQ0FBQztBQUVELE1BQU0sTUFBTSxVQUFVLEdBQUc7QUFDekIsWUFBWTtBQUNaLElBQUksSUFBSSxNQUFNO0FBQ2QsSUFBSSxJQUFJLGdCQUFnQjtBQUN4QixJQUFJLElBQUksWUFBWSxDQUFDO0FBQ3JCLElBQUksSUFBSSxjQUFjO0FBQ3RCLElBQUksSUFBSSxJQUFJO0FBQ1osSUFBSSxJQUFJLElBQUk7QUFDWixJQUFJLElBQUksYUFBYTtBQUNyQixJQUFJLElBQUksT0FBTyxFQUFFLE1BQU0sTUFBTTsiLCJuYW1lcyI6W119