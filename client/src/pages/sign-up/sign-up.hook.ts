import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation, RootRoutes} from '../../router/router.type';
import {Alert, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageParam} from '../../constants/async-storage.constant';
import {useAppDispatch} from '../../redux-store/store.hooks';
import {setUserInfo} from '../../redux-store/actions/user-info.actions';
import {useStateObject} from '../../hooks/useStateObject';
import {ISignUpCredential} from './sign-up';
import axios from 'axios';

export const useSignupHook = () => {
  const navigation = useNavigation<RootNavigation>();
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = useStateObject<ISignUpCredential>({
    name: '',
    email: '',
    password: '',
  });
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const setEmail = (value: string) => {
    setCredentials({email: value});
    validateEmail(value);
  };
  const setPassword = (value: string) => setCredentials({password: value});
  const setName = (value: string) => setCredentials({name: value});
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const showHidePassword = () => setHidePassword(prev => !prev);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);

  const validateEmail = (text: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(text));
  };

  const handleFocus = (itemRef: React.RefObject<TextInput>) => {
    itemRef.current?.setNativeProps({
      style: styles.focused,
    });
  };

  const handleBlur = (itemRef: React.RefObject<TextInput>) => {
    itemRef.current?.setNativeProps({
      style: styles.textInputStyle,
    });
  };

  const onSignUp = async () => {
    if (
      credentials.name === '' ||
      (credentials.email === '' && isValidEmail) ||
      credentials.password === ''
    ) {
      Alert.alert('All fields are required!');
      return;
    }
    const response = await axios.post('http://localhost:8000/api/signup', {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    });
    if (response.data.error) {
      Alert.alert(response.data.error);
    } else {
      AsyncStorage.setItem(
        AsyncStorageParam.AUTH,
        JSON.stringify(response.data),
      );
      dispatch(setUserInfo(JSON.parse(JSON.stringify(response.data))));
      navigation.navigate(RootRoutes.HOME);
      navigation.reset({
        index: 0,
        routes: [
          {
            name: RootRoutes.HOME,
          },
        ],
      });
    }
  };

  const navigateToLogin = () => {
    navigation.navigate(RootRoutes.SIGN_IN);
  };

  return {
    credentials,
    setEmail,
    setPassword,
    handleBlur,
    handleFocus,
    emailRef,
    passwordRef,
    isValidEmail,
    hidePassword,
    showHidePassword,
    onSignUp,
    setName,
    nameRef,
    navigateToLogin,
  };
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#C4C4C4',
    height: 50,
    width: '100%',
    color: 'black',
    padding: 10,
    position: 'relative',
  },
  focused: {
    borderColor: 'black',
  },
});
