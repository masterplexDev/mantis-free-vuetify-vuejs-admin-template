import { defineStore } from 'pinia';



export const useDataStore = defineStore({
  id    : 'process',
  state : () => ({
    user :  {
              lot     : '',
              name    : '',
              email   : '',
              password: ''
            },
    counter: 0 
  }),
  actions: {
    getNextCode(type:string) {
      const date = new Date().toJSON().slice(2, 10).replace(/-/g, '');
      const currentCounter = this.counter || 0;
      this.counter = currentCounter + 1;
      return `${type}-${date}-${currentCounter + 1}`;
    }
  }
});
