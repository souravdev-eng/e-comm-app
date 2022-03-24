import React from 'react';
import {Keyboard, Pressable, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Styled from './styles';

// import Divider from '../../../components/divider';
import AppIcon from '../../../assets/img/app-icon';
import AuthTextInput from '../../../components/auth-text-input';
import ErrorMessage from '../../../components/error-message';
import {signInValidation} from '../../../validation';

//@ Navigation
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../routes/types';
import {userLoginAction} from '../../../redux/actions/user.action';

type Props = NativeStackScreenProps<AuthStackParamList>;

const LoginScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => Keyboard.dismiss()}>
      <Styled.Container>
        <Styled.LogoContainer>
          <AppIcon />
          <Styled.Title>Welcome to E-com</Styled.Title>
          <Styled.Text>Sign in to continue</Styled.Text>
        </Styled.LogoContainer>

        <Formik
          validationSchema={signInValidation}
          initialValues={{email: '', password: ''}}
          // @ts-ignore
          onSubmit={values => {
            dispatch(userLoginAction(values.email, values.password));
          }}>
          {({handleChange, handleSubmit, values, touched, errors}) => (
            <>
              <AuthTextInput
                value={values.email}
                keyboardType="email-address"
                iconName="email-outline"
                placeholder="Your email"
                onChangeText={(email: string) => handleChange('email')(email)}
              />

              {touched.email && errors.email && (
                <ErrorMessage error={errors.email} />
              )}

              <AuthTextInput
                keyboardType="default"
                secureTextEntry={true}
                value={values.password}
                onChangeText={(password: string) =>
                  handleChange('password')(password)
                }
                iconName="lock-outline"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <ErrorMessage error={errors.password} />
              )}

              <Styled.Button onPress={handleSubmit} activeOpacity={0.8}>
                <Styled.ButtonText>Sign In</Styled.ButtonText>
              </Styled.Button>
            </>
          )}
        </Formik>

        <Pressable style={{marginTop: 16, marginBottom: 4}}>
          <Styled.TextBold>Forgot Password?</Styled.TextBold>
        </Pressable>

        <Styled.Text>
          Don’t have a account?
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
            <Styled.TextBold>{} Register</Styled.TextBold>
          </TouchableWithoutFeedback>
        </Styled.Text>
        {/* <Divider /> */}
      </Styled.Container>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
