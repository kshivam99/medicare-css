import { createTheme } from '@mantine/core';

type CustomColors = {
  blue: [string, string, string, string, string, string, string, string, string, string];
  yellow: [string, string, string, string, string, string, string, string, string, string];
  yellowSecondary: [string, string, string, string, string, string, string, string, string, string];
  teal: [string, string, string, string, string, string, string, string, string, string];
};

const theme = createTheme({
  colors: {
    blue: ['#717EFE', '#EEF9FF', '#717EFE', '#717EFE', '#717EFE', '#717EFE', '#717EFE', '#717EFE', '#717EFE', '#717EFE'],
    yellow: ['#FFB814', '#FFB714', '#FFB814', '#FFB814', '#FFB814', '#FFB814', '#FFB814', '#FFB814', '#FFB814', '#FFB814'],
    yellowSecondary: ['#FFF9ED', '#FFF9ED', '#FFF9ED', '#FFF9ED', '#FFF9ED', '#FFF9ED', '#FFF9ED', '#FFF9ED', '#FFF9ED', '#FFF9ED'],
    teal: ['#06B9C9', '#ccedd8', '#06B9C9', '#06B9C9', '#06B9C9', '#06B9C9', '#06B9C9', '#06B9C9', '#06B9C9', '#06B9C9'],
  } as CustomColors,
});

export default theme;
