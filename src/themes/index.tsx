import {Dimensions} from 'react-native';

type ITheme = {
  colors: {
    Primary: string;
    LightBlue: string;
    Pink: string;
    Dark: string;
    LightGray: string;
    White: string;
    Yellow: string;
  };
  WIDTH: number;
  HEIGHT: number;
  fontFamilys: {
    Poppins: string;
    PoppinsMedium: string;
    PoppinsSemiBold: string;
    PoppinsBold: string;
    PoppinsExtraBold: string;
  };
  fontSize: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    body: number;
  };
};

export const theme: ITheme = {
  colors: {
    Primary: '#40BFFF',
    LightBlue: '#BCDDFE',
    Pink: '#FF4858',
    Dark: '#373737',
    LightGray: '#9098B1',
    White: '#fff',
    Yellow: '#FFC833',
  },

  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,

  fontFamilys: {
    Poppins: 'Poppins-Regular',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsSemiBold: 'Poppins-SemiBold',
    PoppinsBold: 'Poppins-Bold',
    PoppinsExtraBold: 'Poppins-ExtraBold',
  },
  fontSize: {
    h1: 21.0,
    h2: 19.9,
    h3: 17.25,
    h4: 15.0,
    h5: 14.0,
    body: 12,
  },
};
