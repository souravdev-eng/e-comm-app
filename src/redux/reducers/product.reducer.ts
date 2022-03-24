import {ProductActionTypes} from '../types/product.types';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS_REQUEST:
      return {loading: true, error: null, products: []};
    case ProductActionTypes.GET_PRODUCTS_SUCCESS:
      return {loading: false, error: null, products: action.payload};
    case ProductActionTypes.GET_PRODUCTS_FAILURE:
      return {loading: false, error: action.payload, products: []};
    default:
      return state;
  }
};
