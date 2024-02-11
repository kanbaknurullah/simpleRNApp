import React from 'react';
import {View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '../header/header.component';
import {styles} from './custom-modal.style';

interface Props {
  isVisible?: boolean;
  onClose?: () => void;
  onModalHide?: () => void;
  onModalShow?: () => void;
  children?: React.ReactNode;
  headerText?: string;
  swipeable?: boolean;
  propagateSwipe?: boolean;
  containerStyle?: ViewStyle;
  avoidKeyboard?: boolean;
}

export const CustomModal = ({
  avoidKeyboard = true,
  isVisible,
  containerStyle,
  headerText,
  children,
  onClose,
}: Props) => {
  const safeAreaInsets = useSafeAreaInsets();
  const containerPadding = {paddingBottom: safeAreaInsets?.bottom};
  const modalStyle: ViewStyle = {
    justifyContent: 'flex-end',
    marginTop: safeAreaInsets?.top,
    marginLeft: safeAreaInsets?.left,
    marginRight: safeAreaInsets?.right,
    marginBottom: 0,
  };
  return (
    <Modal
      avoidKeyboard={avoidKeyboard}
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropOpacity={0.8}
      onModalHide={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={modalStyle}
      propagateSwipe>
      <View style={[styles.container, containerPadding, containerStyle]}>
        <View style={styles.gestureContainer}>
          <View style={styles.gestureItem} />
        </View>
        {headerText ? <Header title={headerText} /> : null}
        {children}
      </View>
    </Modal>
  );
};
