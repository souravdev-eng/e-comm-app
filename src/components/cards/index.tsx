import {Image, StyleSheet, Text, View, ImageProps} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Row, TextBold, Title} from '../global/global.styles';
import * as Styled from './styles';
import {theme} from '../../themes';

export interface CardProps {
  title: string;
  price: number;
  productImage: string;
  onPress: () => void;
  offerPrice?: number;
  discount?: number;
  rating?: number;
  id?: string;
  style?: any;
}

const Card: React.FC<CardProps> = props => {
  const {
    title,
    price,
    productImage,
    offerPrice,
    discount,
    rating,
    style,
    onPress,
  } = props;

  return (
    <>
      <Styled.Container style={style}>
        {/* @ts-ignore */}
        <Image source={productImage} resizeMode="cover" style={styles.image} />

        <Styled.DetailsContainer activeOpacity={0.8} onPress={onPress}>
          <Title numberOfLines={2}>{title}</Title>
          <Title style={{color: theme.colors.Primary}}>
            ${price.toFixed(2)}
          </Title>
          <Row style={{alignItems: 'center'}}>
            <Text style={{marginRight: 4}}>({rating})</Text>
            {/* @ts-ignore */}
            {new Array(Math.floor(rating)).fill(0).map((_, index) => (
              <Icon
                key={index}
                name="star"
                color={theme.colors.Yellow}
                size={14}
                style={{marginRight: 1.2}}
              />
            ))}
          </Row>
          <Row style={styles.priceContainer}>
            <TextBold style={styles.textBold}>
              ${offerPrice?.toFixed(2)}
            </TextBold>
            <TextBold style={{color: '#d6336c'}}>{discount} Off</TextBold>
          </Row>
        </Styled.DetailsContainer>
      </Styled.Container>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  priceContainer: {
    justifyContent: 'space-between',
    marginVertical: 6,
    marginRight: 10,
  },
  textBold: {
    textDecorationLine: 'line-through',
    color: theme.colors.LightGray,
  },
  image: {width: '100%', height: '35%'},
  wishlist: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 0,
    right: 0,
    backgroundColor: '#f06596ac',
    zIndex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
