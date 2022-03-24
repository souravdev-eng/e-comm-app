import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Styled from './styles';
import {Row, Text} from '../../components/global/global.styles';

import {HeaderBack} from '../../components';
import {theme} from '../../themes';
import {PRODUCT_DETAILS} from '../../assets/data/product.details';

const ProductDetails = () => {
  const {productImage, price, title, rating, details} = PRODUCT_DETAILS;
  const active = true;
  return (
    <>
      <ScrollView
        style={{flex: 1, backgroundColor: '#fff'}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Styled.Container>
          <HeaderBack title={title} />
          <Styled.ImageContainer>
            <Image
              source={productImage}
              style={{width: '100%', height: '100%'}}
              resizeMode="cover"
            />
          </Styled.ImageContainer>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={{width: '80%'}}>
                <Styled.Title>{title}</Styled.Title>
              </View>

              <TouchableOpacity>
                {active ? (
                  <Styled.Icon active={active} name="heart" />
                ) : (
                  <Styled.Icon active={active} name="heart-outline" />
                )}
              </TouchableOpacity>
            </View>
            <Row>
              {new Array(Math.floor(rating)).fill(0).map((_, index) => (
                <Icon
                  key={index}
                  name="star"
                  color={theme.colors.Yellow}
                  size={22}
                  style={{marginRight: 1.2}}
                />
              ))}
            </Row>
            <Styled.Price>${price.toFixed(2)}</Styled.Price>
            <Styled.Title>Specification</Styled.Title>
            <Text>{details}</Text>
          </View>
        </Styled.Container>
      </ScrollView>
      <View style={{height: 80, backgroundColor: '#ffffffa0'}}>
        <Styled.BuyButton>
          <Styled.BtnText>Buy Now</Styled.BtnText>
        </Styled.BuyButton>
      </View>
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  container: {
    marginHorizontal: 12,
  },
});
