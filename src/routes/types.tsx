import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  ProfileDetails: undefined;
  Login: undefined;
  Register: undefined;
  Profiles: undefined;
  Main: undefined;
  CategoryProductDetails: undefined;
  ProductDetails: undefined;
};

export type BottomTabProps = {
  Main: undefined;
  Search: undefined;
  Account: undefined;
  Cart: undefined;
  Offer: undefined;
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;
