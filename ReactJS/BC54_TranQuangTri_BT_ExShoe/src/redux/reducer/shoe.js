import { shoeArr } from "../../data";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DETAIL": {
      state.detail = action.payload;
      return { ...state };
    }
    case "ADD_TO_CART": {
      const shoe = action.payload;
      const newCart = [...state.cart];

      const index = newCart.findIndex((value) => value.id === shoe.id);

      if (index !== -1) {
        const updatedCart = newCart.map((item, i) => {
          if (i === index) {
            return { ...item, cartQuantity: item.cartQuantity + 1 };
          }
          return item;
        });
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...shoe, cartQuantity: 1 }],
        };
      }
    }
    case "CART_QUANTITY": {
      console.log("object");

      const { shoe, quantity } = action.payload;
      const newCart = [...state.cart];
      const index = newCart.findIndex((value) => value.id === shoe);

      if (index !== -1) {
        newCart[index].cartQuantity =
          newCart[index].cartQuantity + quantity || 1;
      }

      return {
        ...state,
        cart: newCart,
      };
    }
    case "REMOVE_ITEM": {
      console.log("remove");

      const shoe = action.payload;
      const newCart = [...state.cart].filter((item) => {
        return item.id !== shoe;
      });

      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return state;
  }
};
