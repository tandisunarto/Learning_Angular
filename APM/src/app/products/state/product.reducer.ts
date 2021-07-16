import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';

import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  products: ProductState
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  currentProductId: number;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  currentProductId: 0,
  products: []
}

const getProductFeatureSelector = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureSelector,
  productState => productState.showProductCode
)

export const getCurrentProduct =  createSelector(
  getProductFeatureSelector,
  productState => productState.currentProduct
)

export const getProducts =  createSelector(
  getProductFeatureSelector,
  productState => productState.products
)

// selector composition (using multiple selectors)
export const getCurrentProductId = createSelector(
  getProductFeatureSelector,
  productState => productState.currentProductId
);

export const getCurrentProductById = createSelector(
  getProducts,
  getCurrentProductId,
  (products, productId) => products.filter(p => p.id === productId)
)

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  }),
);


// strongly typed state
