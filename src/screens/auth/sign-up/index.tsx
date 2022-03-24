import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Formik} from 'formik';

import * as Styled from './styles';
import AppIcon from '../../../assets/img/app-icon';
import {AuthTextInput} from '../../../components';

import ErrorMessage from '../../../components/error-message';
import {signupValidationSchema} from '../../../validation';

// @ Navigation
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../routes/types';

type Props = NativeStackScreenProps<AuthStackParamList>;

const RegisterScreen = ({navigation}: Props) => {
  return (
    <Styled.Container>
      {/* Logo container */}
      <Styled.LogoContainer>
        <AppIcon />
        <Styled.Title>Let’s Get Started</Styled.Title>
        <Styled.Text>Create an new account</Styled.Text>
      </Styled.LogoContainer>
      <Formik
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={signupValidationSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordAgain: '',
        }}>
        {({handleChange, handleSubmit, values, touched, errors}) => (
          <>
            <AuthTextInput
              value={values.name}
              iconName="account-outline"
              placeholder="Full Name"
              onChangeText={(name: string) => handleChange('name')(name)}
            />

            {touched.name && errors.name && (
              <ErrorMessage error={errors.name} />
            )}
            <AuthTextInput
              value={values.email}
              iconName="email-outline"
              placeholder="Your email"
              onChangeText={(email: string) => handleChange('email')(email)}
            />

            {touched.email && errors.email && (
              <ErrorMessage error={errors.email} />
            )}

            <AuthTextInput
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
            <AuthTextInput
              onChangeText={(passwordAgain: string) =>
                handleChange('passwordAgain')(passwordAgain)
              }
              value={values.passwordAgain}
              iconName="lock-outline"
              placeholder="Password Again"
            />
            {touched.passwordAgain && errors.passwordAgain && (
              <ErrorMessage error={errors.passwordAgain} />
            )}

            <Styled.Button activeOpacity={0.8} onPress={handleSubmit}>
              <Styled.ButtonText>Sign Up</Styled.ButtonText>
            </Styled.Button>
          </>
        )}
      </Formik>

      <Styled.Text style={{marginTop: 21}}>
        have a account?
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <Styled.TextBold>{} Sign In</Styled.TextBold>
        </TouchableWithoutFeedback>
      </Styled.Text>
    </Styled.Container>
  );
};

export default RegisterScreen;
