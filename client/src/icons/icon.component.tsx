import React from 'react';
import {Insets, TouchableOpacity, View} from 'react-native';
import {
  PasswordVisible,
  PasswordHidden,
  Back,
  ChevronRightIcon,
  CheckIcon,
  DonePopupCloseIcon,
} from './icon.library';
import {IconName, IconProps} from './icon.type';

export const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const {clickable = true, style, onPress, testID, disabled, ...rest} = props;
  return clickable ? (
    <TouchableOpacity
      testID={testID}
      style={style}
      onPress={onPress}
      hitSlop={hitSlop}
      activeOpacity={1}
      disabled={disabled}>
      <GeneratedIcon {...rest} />
    </TouchableOpacity>
  ) : (
    <View testID={testID} style={style} hitSlop={hitSlop}>
      <GeneratedIcon {...rest} />
    </View>
  );
};

const GeneratedIcon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const {name} = props;
  const iconLookUp = {
    [IconName.PASSWORD_VISIBLE]: PasswordVisible,
    [IconName.PASSWORD_HIDDEN]: PasswordHidden,
    [IconName.BACK]: Back,
    [IconName.CHEVRON_RIGHT]: ChevronRightIcon,
		[IconName.CHECK]: CheckIcon,
		[IconName.DONE_POPUP_CLOSE]: DonePopupCloseIcon,
  };
  if (!name || !iconLookUp[name]) {
    return <></>;
  }
  const SelectedIcon = iconLookUp[name];
  return <SelectedIcon {...props} />;
};

const hitSlop: Insets = {top: 5, bottom: 5, right: 5, left: 5};
