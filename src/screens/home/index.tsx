import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import * as Styled from './styles';

import Header from '../../components/header';
import CategoryList from '../../components/category-list';
import BannerList from '../../components/banner-list';
import ProductList from '../../components/product-list';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <BannerList />
        <CategoryList />
        <ProductList />
        <ProductList />
        <BannerList />
        <ProductList />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
});
