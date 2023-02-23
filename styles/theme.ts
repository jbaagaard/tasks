export interface Theme {
  bg: string;
  bgDark: string;
  bgLight: string;
  text: string;
  textSubtle: string;
  textSubtler: string;
  red: string;
  redText: string;
  yellowText: string;
  yellow: string;
  greenText: string;
  green: string;
}

export const train: Theme = {
  bg: "#1d2021",
  bgDark: "#161819",
  bgLight: "#282828",
  text: "#d4be98",
  textSubtle: "#897f73",
  textSubtler: "#897f73",
  green: "#a9b665",
  greenText: "#1d2021",
  red: "#ea6962",
  redText: "#d4be98",
  yellow: "#d8a657",
  yellowText: "#1d2021",
};

export const eightOOEight: Theme = {
  greenText: "#f9fae6",
  redText: "#f9fae6",
  yellowText: "#f9fae6",
  bg: "#333a45",
  bgDark: "#2e343d",
  bgLight: "#464f5d",
  text: "#939eae",
  textSubtle: "#666e7a",
  textSubtler: "#4b525d",
  green: "#50d886",
  red: "#f44c7f",
  yellow: "#f4cd4c",
};

export const hanok: Theme = {
  bg: "#d8d2c3",
  bgDark: "#c2bcac",
  bgLight: "#e5decc",
  green: "#aad295",
  greenText: "#8b6f5c",
  red: "#d29595",
  redText: "#8b6f5c",
  text: "#8b6f5c",
  textSubtle: "#b18d75",
  textSubtler: "#d7ab8e",
  yellow: "#d2cf95",
  yellowText: "#8b6f5c",
};

export interface Themes {
  [key: string]: Theme;
}

export const themes: Themes = {
  eightOOEight: eightOOEight,
  train: train,
  hanok: hanok,
};
