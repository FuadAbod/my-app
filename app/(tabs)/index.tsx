
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,

} from '@react-native-google-signin/google-signin';


import { useState } from 'react';
import { View,Text,Button } from 'react-native';


GoogleSignin.configure();

const HomeScreen = () => {
  const [userInfo,setUserInfo] = useState<any>(null)
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        // ✅ Now TypeScript knows response is SignInSuccessResponse
        setUserInfo(response.data);
      } else {
        console.log("Sign in cancelled by user");
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log("Sign in already in progress");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log("Play services not available");
            break;
          default:
            console.log("Some other error happened", error);
        }
      } else {
        console.log("Non-Google Sign In error", error);
      }
    }
  };

  return (
    <View>
      <Text> index</Text>
      <Button title="sign in with google" onPress={signIn}></Button>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default HomeScreen;
