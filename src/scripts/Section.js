/*Contiene un objeto con dos propiedades (items y renderer) como el primer parámetro del constructor. 
La propiedad items funciona como un array de datos, que debes añadir a una página cuando se inicializa la clase. 
La propiedad rendereres la función responsable de crear y renderizar los datos en una página.
El segundo parámetro debe ser un selector de clase CSS donde vas a agregar los elementos de la tarjeta.
Almacena un método público que renderiza todos los elementos en la página. 
La función renderer() renderizará cada elemento en una página.
Almacena un método público llamado addItem() que toma un elemento del DOM y lo agrega al contenedor.*/

class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items; //es el arreglo
    this._renderer = renderer; /*const createCard = (data) => {
  return new Card(data, "#cardTemplate");
};*/
    this._containerSelector = document.querySelector(containerSelector); //el HTML
  }
  rendererItems(items) {
    items.forEach((item) => {
      this._renderer(item); /*
      cardList.addItem(createCard(data));
    }, */
    });
  }
  addItem(element) {
    this._containerSelector.prepend(element);
  }
}

export default Section;

/*renderer
function renderCard(data, cardsContainer) {
  const x1 = new card(data, "#cardtemplate");
  cardsContainer.prepend(x1.setProperties());
}*/
