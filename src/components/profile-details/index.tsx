import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import {USER_PROFILE_LIST_DATA} from '../../assets/data/user-profile-list.data';

import * as Styled from './styles';
import HeaderBack from '../header-back';
import ProfileListItem from '../profile-list-item';

const USER = null;

const ProfileDetails = () => {
  const {currentUser} = useSelector((state: any) => state.user);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <HeaderBack title="Profile" />
        <Styled.ProfileContainer>
          {!USER ? (
            <Styled.UploadContainerImage>
              <Styled.CameraIcon name="camera" />
            </Styled.UploadContainerImage>
          ) : (
            <Styled.ProfileContainerImage activeOpacity={0.8}>
              <Styled.ProfileImage source={{uri: USER}} resizeMode="contain" />
            </Styled.ProfileContainerImage>
          )}

          <View>
            <Styled.BoldText>Dominic Ovo</Styled.BoldText>
            <Styled.Text>DominicOvo@gmail.com</Styled.Text>
          </View>
        </Styled.ProfileContainer>
        <ProfileListItem
          title={USER_PROFILE_LIST_DATA[0].title}
          imageUri={USER_PROFILE_LIST_DATA[0].imageUri}
          onPress={() => console.log('Logs')}
          value={currentUser.name}
        />
        <ProfileListItem
          title={USER_PROFILE_LIST_DATA[1].title}
          imageUri={USER_PROFILE_LIST_DATA[1].imageUri}
          onPress={() => console.log('Logs')}
          value={'Male'}
        />
        <ProfileListItem
          title={USER_PROFILE_LIST_DATA[2].title}
          imageUri={USER_PROFILE_LIST_DATA[2].imageUri}
          onPress={() => console.log('Logs')}
          value={'12-05-1999'}
        />
        <ProfileListItem
          title={USER_PROFILE_LIST_DATA[3].title}
          imageUri={USER_PROFILE_LIST_DATA[3].imageUri}
          onPress={() => console.log('Logs')}
          value={currentUser.email}
        />
        <ProfileListItem
          title={USER_PROFILE_LIST_DATA[4].title}
          imageUri={USER_PROFILE_LIST_DATA[4].imageUri}
          onPress={() => console.log('Logs')}
          value={'+91-9888888888'}
        />
        <ProfileListItem
          title={USER_PROFILE_LIST_DATA[5].title}
          imageUri={USER_PROFILE_LIST_DATA[5].imageUri}
          onPress={() => console.log('Logs')}
          isPassword
          value={currentUser.name}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileDetails;
