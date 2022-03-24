import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {PRODUCT_LIST} from '../../assets/data/product-list.data';
import {HeaderBack} from '../../components';
import Card from '../../components/cards';

const CategoryProductDetails = () => {
  return (
    <>
      <HeaderBack title="Flash Sale" />
      <ScrollView>
        <View style={styles.listItem}>
          {PRODUCT_LIST.map((item, index) => (
            <Card {...item} style={styles.card} key={item.id} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryProductDetails;

const styles = StyleSheet.create({
  card: {
    width: '45%',
    marginVertical: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 8,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
});
