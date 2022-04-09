import backgroundImageLight from '../images/bg-desktop-light.jpg';
import backgroundImageDark from '../images/bg-desktop-dark.jpg';

const primary = 'hsl(220, 98%, 61%)';
const breakingPoints = { mobile: 588, desktop: 1440 };
const linearGradient =
  'linear-gradient(0.35turn, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';

export const light = {
  name: 'light',
  breakingPoints,
  linearGradient,
  colors: {
    primary,
    text: '#0E0E0E',
    background: 'hsl(236, 33%, 92%)',
    cardBackground: '#fff',
    disable: 'hsl(236, 9%, 61%)',
  },
  backgroundImage: backgroundImageLight,
};

export const dark = {
  name: 'dark',
  breakingPoints,
  linearGradient,
  colors: {
    primary,
    text: 'hsl(234, 39%, 85%)',
    background: 'hsl(235, 21%, 11%)',
    cardBackground: 'hsl(235, 24%, 19%)',
    disable: 'hsl(234, 11%, 52%)',
  },
  backgroundImage: backgroundImageDark,
};

export type ITheme = typeof light;

export const themes = { light, dark };
