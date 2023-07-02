import { createContext, useState } from 'react';

type ColorThemeType = {
  BGColor: string;
  TXTColor: string;
  TextInputColor: string;
  HighlightColor: string;
};

type DataType = {
  newVar: ColorThemeType;
  isDarkMode: boolean;
  setisDarkMode: (data_: boolean) => void;
};

export const ColorSchema = createContext<DataType>({ 
  newVar: {
    BGColor: '',
    TXTColor: '',
    TextInputColor: '',
    HighlightColor: '',
  },
  isDarkMode: true,
  setisDarkMode: () => {},
});

export default function ColorThemes(props: { children: React.ReactNode }) {
  const [isDarkMode, setisDarkMode] = useState<boolean>(true);

  const darkMode: ColorThemeType = {
    BGColor: '#1d1d1d',
    TXTColor: '#fff',
    TextInputColor: '#252631',
    HighlightColor: '#FFC300',
  };

  const lightMode: ColorThemeType = {
    BGColor: '#fff',
    TXTColor: '#282c34',
    TextInputColor: '#DBDBDB',
    HighlightColor: '#ff8c00',
  };

  const newVar: ColorThemeType = isDarkMode ? darkMode : lightMode;

  const data: DataType = {
    newVar,
    isDarkMode,
    setisDarkMode: (data_) => setisDarkMode(data_),
  };

  return (
    <ColorSchema.Provider value={data}>{props.children}</ColorSchema.Provider>
  );
}
