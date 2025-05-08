import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonVariant, ButtonColor, ButtonSize } from './button.types';

const buttonStyles = cva(
  'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none',
  {
    variants: {
      variant: {
        solid: 'bg-primary text-white hover:bg-primary-600',
        faded:
          'bg-gray-700 text-gray-300 hover:bg-gray-900 border-2 border-gray-700',
        bordered: 'bg-transparent border-2 border-primary-500 text-primary-500',
        light: 'bg-transparent text-gray-800 hover:bg-primary-50',
        flat: 'bg-primary/20 text-primary',
        ghost: 'bg-transparent text-primary-500 hover:bg-primary-100',
        shadow: 'bg-primary text-white shadow-md hover:shadow-lg',
      },
      color: {
        primary: '',
        secondary: 'text-white bg-gray-400 hover:bg-gray-500',
        danger: 'text-red-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
      },
      size: {
        small: 'text-sm py-1 px-2 min-w-[4rem]',
        medium: 'text-base py-2 px-4 min-w-[5rem]',
        large: 'text-lg py-3 px-6 min-w-[6rem]',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'medium',
      disabled: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'medium',
      disabled = false,
      className,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const classes = buttonStyles({ variant, color, size, disabled });
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        className={twMerge(classes, className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
