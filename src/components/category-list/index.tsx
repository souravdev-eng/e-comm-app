import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CATEGORY_DATA} from '../../assets/data/category.data';

import {theme} from '../../themes';
import * as Styled from './styles';

const CategoryList = () => {
  return (
    <Styled.Container>
      <View style={styles.container}>
        <View>
          <Styled.TextBold>Category</Styled.TextBold>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Styled.TextBold primary={true}>More Category</Styled.TextBold>
        </TouchableOpacity>
      </View>
      <FlatList
        data={CATEGORY_DATA}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.curule} activeOpacity={0.7}>
              <Image source={item.icon} style={styles.image} />
            </TouchableOpacity>
            <Styled.Text>Dress</Styled.Text>
          </View>
        )}
        keyExtractor={item => item.title}
      />
    </Styled.Container>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
  },
  curule: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.LightBlue,
  },
  itemContainer: {
    width: 80,
    alignItems: 'center',
    marginRight: 12,
  },
  image: {width: 30, height: 30},
});
