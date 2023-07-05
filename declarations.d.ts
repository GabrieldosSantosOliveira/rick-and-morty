/// <reference types="@testing-library/jest-native" />

declare module '*.jpg' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}
