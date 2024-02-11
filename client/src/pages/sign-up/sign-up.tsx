import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSignupHook} from './sign-up.hook';
import {i18n} from '../../constants/i18n';
import {Input} from '../components/input';
import {Separator} from '../components/separator';
import {ErrorText} from '../components/error-text';
import {MainButton} from '../components/main-button';
import {facebookImage, googleImage} from '../../assets/images';

export interface ISignUpCredential {
  name: string;
  email: string;
  password: string;
}

export const SignUp: React.FC = (): JSX.Element => {
  const {
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
  } = useSignupHook();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topIconRowContainer}>
        <View style={styles.topLeftCircle} />
        <View style={styles.topRightCircle} />
      </View>
      <Text style={styles.loginHeader}>{i18n.t('sign_up')}</Text>
      <Input
        value={credentials.name}
        onChangeText={setName}
        placeholder={i18n.t('name')}
        keyboardType={'default'}
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={nameRef}
        testId={'Name'}
      />
      <Separator />
      <Input
        value={credentials.email}
        onChangeText={setEmail}
        placeholder={i18n.t('email_address')}
        keyboardType={'email-address'}
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={emailRef}
        testId={'Email Address'}
      />
      {!isValidEmail && credentials.email !== '' && (
        <ErrorText title="Invalid email address" />
      )}
      <Separator />
      <Input
        value={credentials.password}
        onChangeText={setPassword}
        placeholder={i18n.t('password')}
        keyboardType={'default'}
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={passwordRef}
        hidePassword={hidePassword}
        onShowHidePassword={showHidePassword}
        testId={'Password'}
      />
      <MainButton
        title={i18n.t('sign_up')}
        onPress={onSignUp}
        testId="Sign up"
      />
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>{i18n.t('or')}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialLoginContainer}>
        <Image source={googleImage} style={styles.image} />
        <Image source={facebookImage} style={styles.image} />
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.dontHaveAccountText}>
          {i18n.t('already_have_account')}
        </Text>
        <Text style={styles.signUpText} onPress={navigateToLogin}>
          {i18n.t('login')}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginHorizontal: 35,
  },
  topIconRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 80,
    marginTop: 20,
  },
  topLeftCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5063BF',
  },
  topRightCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8EDFEB',
    left: -20,
  },
  loginHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'center',
    color: 'black',
    marginTop: 10,
    marginBottom: 50,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 15,
    marginTop: 25,
  },
  line: {
    width: 80,
    height: 1,
    backgroundColor: '#B1B1B1',
  },
  orText: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#B1B1B1',
  },
  image: {
    width: 60,
    height: 60,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 45,
    marginTop: 25,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 45,
  },
  dontHaveAccountText: {
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#878787',
  },
  signUpText: {
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#5063BF',
    textDecorationLine: 'underline',
  },
});
