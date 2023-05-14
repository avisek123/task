import React, {useRef, useState} from 'react';
import {Text} from 'react-native';

interface ExpandableTextProps {
  children: string;
  numberOfLines?: number;
}

const CustomText = ({children, numberOfLines}: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textHeight, setTextHeight] = useState<number | undefined>();
  const textRef = useRef<Text>(null);

  const handleTextLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    setTextHeight(height);
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate =
    !!numberOfLines &&
    !isExpanded &&
    textHeight &&
    textHeight > numberOfLines * 20;

  return (
    <Text
      ref={textRef}
      numberOfLines={shouldTruncate ? numberOfLines : undefined}
      onLayout={handleTextLayout}>
      {children}
      {shouldTruncate && (
        <>
          {!isExpanded && (
            <>
              {'... '}
              <Text
                onPress={toggleExpansion}
                style={{color: 'blue', textDecorationLine: 'underline'}}>
                Read more
              </Text>
            </>
          )}
          {isExpanded && (
            <>
              {' '}
              <Text
                onPress={toggleExpansion}
                style={{color: 'blue', textDecorationLine: 'underline'}}>
                Read less
              </Text>
            </>
          )}
        </>
      )}
    </Text>
  );
};

export default CustomText;
