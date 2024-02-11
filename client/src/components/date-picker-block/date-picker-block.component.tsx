import React, {useEffect, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Platform} from 'react-native';
import styles from './date-picker-block.style';

interface DateBlockProps {
  digits: number[];
  value: number;
  type: string;
  height: number;
  onChange(type: string, digit: number): void;
}

export const DateBlock: React.FC<DateBlockProps> = ({
  value,
  digits,
  type,
  onChange,
  height,
}) => {
  const digitHeight: number = height * 0.15;

  const offsets = digits.map((_: number, index: number) => index * digitHeight);

  const scrollRef = useRef<any>(null);

  const snapScrollToIndex = (index: number) => {
    scrollRef?.current?.scrollTo({y: digitHeight * index, animated: true});
  };

  useEffect(() => {
    snapScrollToIndex(value - digits[0]);
  }, [scrollRef.current]);

  const handleMomentumScrollEnd = ({nativeEvent}: any) => {
    const digit = Math.round(
      nativeEvent.contentOffset.y / digitHeight + digits[0],
    );
    onChange(type, digit);
  };

  const selection = (index: number) => {
    onChange(type, digits[index]);
    snapScrollToIndex(index);
  };

  const displayedMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <View style={styles.blockContainer}>
      <View
        style={[styles.mark, {...styles.markOverride, height: digitHeight}]}
      />
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        snapToOffsets={offsets}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={0}
        onMomentumScrollEnd={handleMomentumScrollEnd}>
        {digits.map((value: number | string, index: number) => {
          if (value <= 12) {
            value = displayedMonths[index];
          }
          const bottomChecker = index === digits.length - 1;
          const topChecker = index === 0;
          const marginChecker = height / 2 - digitHeight / 2;
          return (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              onPress={() => selection(index)}>
              <Text
                style={[
                  styles.digit,
                  {
                    ...styles.digitOverride,
                    marginBottom: bottomChecker ? marginChecker : 0,
                    marginTop: topChecker ? marginChecker : 0,
                    lineHeight: Platform.OS === 'ios' ? digitHeight : undefined,
                    height: digitHeight,
                  },
                ]}>
                {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
