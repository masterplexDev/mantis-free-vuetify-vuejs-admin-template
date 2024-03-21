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
    lot_list : [] as any,
    counter: 0 
  }),
  actions: {
    getNextCode(type:string) {
      const date = new Date().toJSON().slice(2, 10).replace(/-/g, '');
      const currentCounter = this.counter || 0;
      this.counter = currentCounter + 1;

      const temp ={
        lot_no : `${type}-${date}-${currentCounter + 1}`,
        import_date : new Date(),
        import_yn   : false,
        export_date : new Date(),
        export_yn   : false,
      }
      this.lot_list.push(temp);
      return `${type}-${date}-${currentCounter + 1}`;
    }
  }
});
