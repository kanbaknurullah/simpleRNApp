import React from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import {i18n} from '../../constants/i18n';
import {Icon, IconName} from '../../icons';

interface Props {
  value?: string;
  onBlur?: (itemRef: React.RefObject<TextInput>) => void;
  onFocus?: (itemRef: React.RefObject<TextInput>) => void;
  onChangeText?: ((text: string) => void) | undefined;
  ref?: React.LegacyRef<TextInput> | undefined;
  hidePassword?: boolean;
  onShowHidePassword?: () => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  isDisabled?: boolean;
  testId?: string;
}

export const Input = ({
  value,
  onBlur,
  onFocus,
  onChangeText,
  hidePassword,
  onShowHidePassword,
  placeholder,
  keyboardType,
  ref,
  isDisabled = false,
  testId,
}: Props): JSX.Element => {
  const floatingPlaceholderStyle: StyleProp<ViewStyle> = {
    top: value ? -20 : 10,
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInputStyle}
        secureTextEntry={hidePassword}
        ref={ref}
        onFocus={() => onFocus}
        onBlur={() => onBlur}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={!isDisabled}
        testID={testId}
        autoCapitalize="none"
      />
      {placeholder === i18n.t('password') ? (
        <Icon
          name={
            hidePassword ? IconName.PASSWORD_VISIBLE : IconName.PASSWORD_HIDDEN
          }
          onPress={onShowHidePassword}
          style={styles.passwordButton}
          fill={'#C4C4C4'}
        />
      ) : null}
      {value ? (
        <View style={[styles.placeholderContainer, floatingPlaceholderStyle]}>
          <Text style={styles.placeholderText}>{placeholder}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: 'gray',
  },
  inputContainer: {
    position: 'relative',
  },
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
  passwordButton: {
    position: 'absolute',
    top: 18,
    right: 18,
  },
});
