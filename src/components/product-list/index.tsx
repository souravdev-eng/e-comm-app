import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Card, {CardProps} from '../cards';
import * as Styled from './styles';

import {PRODUCT_LIST} from '../../assets/data/product-list.data';

const ProductList = () => {
  const handelNavigation = (name: string) => navigation.navigate(name);

  const navigation = useNavigation<any>();
  return (
    <Styled.Container>
      <View style={styles.container}>
        <View>
          <Styled.TextBold>Flash Sale</Styled.TextBold>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handelNavigation('CategoryProductDetails')}>
          <Styled.TextBold primary={true}>See More</Styled.TextBold>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={PRODUCT_LIST}
        renderItem={({item}: {item: CardProps}) => (
          <Card
            {...item}
            style={styles.card}
            onPress={() => handelNavigation('ProductDetails')}
          />
        )}
      />
    </Styled.Container>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {marginBottom: 10},
});
