import React from 'react';
import { useTheme } from '../../hooks/theme';
import IconSun from '../../images/icon-sun.svg';
import IconMoon from '../../images/icon-moon.svg';

import { Button, Image } from './styles';

export const ThemeSwitcher: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button type="button" onClick={toggleTheme}>
      <Image src={theme.name === 'light' ? IconMoon : IconSun} alt="" />
    </Button>
  );
};
