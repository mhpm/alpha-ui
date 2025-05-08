export const BUTTON_VARIANTS = [
  'solid',
  'faded',
  'bordered',
  'light',
  'flat',
  'ghost',
  'shadow',
] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_COLORS = [
  'primary',
  'secondary',
  'danger',
  'success',
  'warning',
] as const;

export type ButtonColor = (typeof BUTTON_COLORS)[number];

export const BUTTON_SIZES = ['small', 'medium', 'large'] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];
