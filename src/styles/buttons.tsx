import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const buttonStyles = {
  default: 'my-2 rounded',
  pink: 'bg-pink py-2 px-4 text-white rounded-lg',
  black: 'bg-black py-2 px-6',
  transparent: 'bg-transparent',
};

const textStyles = {
  default: 'text-black',
  pink: 'text-white',
  black: 'text-white italic',
  transparent: 'text-xl',
};

type Props = {
  variant: 'pink' | 'black' | 'transparent';
  children: string;
};

export const StyledButton: React.FC<Props> = ({ variant, children }) => {
  return (
    <TouchableOpacity
      className={`
      ${buttonStyles.default}
      ${buttonStyles[variant]}
    `}
    >
      <Text className={`${textStyles.default} ${textStyles[variant]}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
