import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {launchImageLibrary} from 'react-native-image-picker';
import CameraIcon from 'react-native-vector-icons/FontAwesome';

import * as Styled from './styles';
import {AuthTextInput} from '../../../components';
import ErrorMessage from '../../../components/error-message';

// @ Navigation
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../routes/types';
import {useDispatch} from 'react-redux';
import {productAction} from '../../../redux/actions/product.action';
// import { ScrollView } from 'react-native-gesture-handler';

const AddProductScreen = () => {
  let dispatch = useDispatch();

  const handelImage = async (handelChange: any) => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
      selectionLimit: 10,
    });

    if (!result.didCancel) {
      result.assets?.map(asset => handelChange(asset.uri));
    }
  };

  return (
    <ScrollView>
      <Styled.Container>
        <Formik
          onSubmit={values => {
            dispatch(productAction(values));
          }}
          // validationSchema={signupValidationSchema}
          initialValues={{
            title: '',
            description: '',
            price: '',
            productImage: '',
            offerPrice: '',
          }}>
          {({handleChange, handleSubmit, values, touched, errors}) => (
            <>
              <View>
                <Styled.ImageUpload
                  activeOpacity={0.9}
                  onPress={() => handelImage(handleChange('productImage'))}>
                  <CameraIcon name="camera" size={30} color={'#000'} />
                </Styled.ImageUpload>

                {values.productImage && values.productImage.length > 0 ? (
                  <Image
                    source={{uri: values.productImage}}
                    style={{width: 50, height: 50}}
                  />
                ) : null}
              </View>
              <AuthTextInput
                value={values.title}
                placeholder="Product name"
                onChangeText={(title: string) => handleChange('title')(title)}
              />

              {touched.title && errors.title && (
                <ErrorMessage error={errors.title} />
              )}
              <AuthTextInput
                value={values.description}
                placeholder="Description"
                multiline={true}
                style={{height: 160}}
                onChangeText={(description: string) =>
                  handleChange('description')(description)
                }
              />

              {touched.description && errors.description && (
                <ErrorMessage error={errors.description} />
              )}

              <AuthTextInput
                value={values.price}
                style={{width: 130}}
                keyboardType="numeric"
                onChangeText={(price: string) => handleChange('price')(price)}
                placeholder="Price"
              />
              {touched.price && errors.price && (
                <ErrorMessage error={errors.price} />
              )}
              <AuthTextInput
                style={{width: 130}}
                keyboardType="numeric"
                onChangeText={(offerPrice: string) =>
                  handleChange('offerPrice')(offerPrice)
                }
                value={values.offerPrice}
                placeholder="Offer Price"
              />
              {touched.offerPrice && errors.offerPrice && (
                <ErrorMessage error={errors.offerPrice} />
              )}

              <Styled.Button activeOpacity={0.8} onPress={handleSubmit}>
                <Styled.ButtonText>Create Product </Styled.ButtonText>
              </Styled.Button>
            </>
          )}
        </Formik>
      </Styled.Container>
    </ScrollView>
  );
};

export default AddProductScreen;
