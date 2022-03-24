import AsyncStorage from '@react-native-async-storage/async-storage';

const JWT = 'JWT_USER_KEY';

export const storeUserData = async (value: any) => {
  try {
    await AsyncStorage.setItem(JWT, value);
  } catch (e: any) {
    console.log('JWT Store Error: ', e);
  }
};

export const getUserData = async () => {
  try {
    const item = await AsyncStorage.getItem(JWT);
    // @ts-ignore
    return item ? item : null;
  } catch (e: any) {
    console.log('JWT get Error: ', e);
  }
};

export const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem(JWT);
  } catch (e: any) {
    // remove error
    console.log('JWT remove Error: ', e);
  }

  console.log('Done.');
};
