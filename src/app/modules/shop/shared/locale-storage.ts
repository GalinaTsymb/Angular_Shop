export class LocaleStorage {

  // tslint:disable-next-line:typedef
  setCartlocaleStorage(object){
    localStorage.setItem('product', JSON.stringify(object));
  }

  // tslint:disable-next-line:typedef
  getCartLocaleStorage(){
   return JSON.parse(localStorage.getItem('product'));
  }
}
