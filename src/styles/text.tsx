import React from 'react';
import { Text } from 'react-native';

const variantStyles = {
  default: 'text-lg',
  primary: 'my-1 text-black',
  secondary: 'text-sm text-pink',
  bold: 'font-bold text-xl',
  italic: 'italic',
};

type Props = {
  variant: 'primary' | 'secondary' | 'bold' | 'italic';
  children: string;
};

export const StyledText: React.FC<Props> = ({ variant, children }) => {
  return (
    <Text
      className={`
      ${variantStyles.default}
      ${variantStyles[variant]}
    `}
    >
      {children}
    </Text>
  );
};
