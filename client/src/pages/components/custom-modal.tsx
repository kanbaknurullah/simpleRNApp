import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  isVisible?: boolean;
  onClose?: () => void;
  onModalHide?: () => void;
  onModalShow?: () => void;
  children?: React.ReactNode;
  headerText?: string;
  swipeable?: boolean;
  propagateSwipe?: boolean;
  testID?: string;
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
        {headerText ? (
          <Text style={styles.headerTitle}>{headerText}</Text>
        ) : null}
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'white',
  },
  gestureContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 8,
  },
  gestureItem: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'gray',
  },
  header: {
    paddingTop: 0,
  },
  headerSubContainer: {
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    marginTop: 5,
  },
});
