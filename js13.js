const initialState = {
    products: {
      "Хліб": { quantity: 10, price: 20 },
      "Молоко": { quantity: 5, price: 30 },
      "Яйця": { quantity: 15, price: 2 }
    },
    cashRegister: 0
  };

  

  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ДОДАТИ_ТОВАР':
        return {
          ...state,
          products: {
            ...state.products,
            [action.payload.name]: {
              ...state.products[action.payload.name],
              quantity: state.products[action.payload.name].quantity + action.payload.quantity
            }
          }
        };
      case 'КУПИТИ_ТОВАР':
        const { name, quantity, funds } = action.payload;
        const product = state.products[name];
        const totalPrice = product.price * quantity;
        if (product.quantity >= quantity && state.cashRegister >= totalPrice) {
          return {
            ...state,
            products: {
              ...state.products,
              [name]: {
                ...product,
                quantity: product.quantity - quantity
              }
            },
            cashRegister: state.cashRegister - totalPrice
          };
        } else {
          return state; 
        }
      default:
        return state;
    }
  }
  



  store.subscribe(() => {
    const currentState = store.getState();
    
   
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';
  
    Object.entries(currentState.products).forEach(([name, product]) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${name}: ${product.quantity}`;
      productsList.appendChild(listItem);
    });
  
    
    document.title = `Каса: ${currentState.cashRegister}`;
  });

  document.getElementById('buy-button').addEventListener('click', () => {
    const selectedProduct = document.getElementById('product-select').value;
    const quantity = parseInt(document.getElementById('quantity-input').value);
    const funds = parseInt(document.getElementById('funds-input').value);
  
    store.dispatch({ 
      type: 'КУПИТИ_ТОВАР', 
      payload: { name: selectedProduct, quantity, funds } 
    });
  });
  