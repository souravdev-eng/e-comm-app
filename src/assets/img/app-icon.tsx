import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const AppIcon = (props: any) => (
  <Svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={72} height={72} rx={16} fill="#40BFFF" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.828 33.172a4 4 0 0 1 0 5.656l-12 12a4 4 0 0 1-5.656 0l-12-12a4 4 0 0 1 0-5.656l12-12a4 4 0 0 1 5.656 0l12 12ZM36 29.657 29.657 36 36 42.343 42.343 36 36 29.657Z"
      fill="#fff"
    />
  </Svg>
);

export default AppIcon;
