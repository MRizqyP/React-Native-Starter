import React, {memo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import { palette } from "../../theme/palette"
import {navigationRef} from '../navigation-utilities';
import {IconProps} from 'react-native-vector-icons/Icon';

interface Props {
  iconProps?: IconProps | any;
  touchableProps?: TouchableOpacityProps;
}

const BackButton = memo(function BackButton({
  iconProps,
  touchableProps,
}: Props) {
  const onButtonPress = () => {
    navigationRef.goBack();
  };

  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={style.button}
      {...touchableProps}>
      <MaterialIcon
        color={iconProps?.color ?? 'black'}
        name="chevron-left"
        size={28}
        {...iconProps}
      />
    </TouchableOpacity>
  );
});

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    marginStart: -12,
    width: 32,
  } as ViewStyle,
});

export {BackButton};
