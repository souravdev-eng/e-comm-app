import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MainNavigation} from './src/routes/mainNavigation';
import {persistStores, store} from './src/redux/store';
import AddProductScreen from './src/screens/admin/add-product';
import CategoryProductDetails from './src/screens/category-product-details';

const App = () => {
  return (
    <>
      {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistStores}> */}
      <MainNavigation />
      {/* </PersistGate>
    </Provider> */}
    </>
  );
};

export default App;
