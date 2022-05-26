enum ColorValues {
  default,
  black,
  yellow,
  pink
}

enum SizeValues {
  exS,
  s,
  m,
  sm,
  l,
  exl,
  sl,
  f28,
  f36,
}

enum WeightValues {
  light,
  regular,
  medium,
  semiBold,
  bold,
  extraBold,
}

enum Aligns {
  center,
  left,
  right,
}

enum HeadingTypes {
  h1,
  h2,
  h3,
  h4,
}

export type TextColor = keyof typeof ColorValues;
export type TextSize = keyof typeof SizeValues;
export type TextWeight = keyof typeof WeightValues;
export type TextAlign = keyof typeof Aligns;
export type HeadingType = keyof typeof HeadingTypes;
