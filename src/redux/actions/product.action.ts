import axios from 'axios';
import {API_URL} from '../../config/apiEndPoint';
import {ProductActionTypes} from '../types/product.types';

interface DataProps {
  title: string;
  description: string;
  price: any;
  productImage: string;
  offerPrice: any;
}

export const productAction =
  ({title, description, price, productImage, offerPrice}: DataProps) =>
  async (dispatch: any) => {
    try {
      dispatch({type: ProductActionTypes.GET_PRODUCTS_REQUEST});
      const response = await axios.post(
        `${API_URL}/product`,
        {title, description, price, offerPrice, productImage},
        {
          headers: {
            'Content-Type': 'application/json',
            // authorization: `Bearer ${}`,
          },
        },
      );

      dispatch({
        type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
