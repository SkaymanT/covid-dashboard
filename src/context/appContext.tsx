import React, { useState, useContext } from 'react';

import { categoriesTable } from '@/constants';

type AppContextType = {
  stateApp: StateAppType;
  updateCountry(newCountry: string): void;
  updateCasses(newCases: string): void;
};

const AppContext = React.createContext<AppContextType>({} as AppContextType);

export const useStateApp = () => useContext(AppContext);

type StateAppType = {
  country: string;
  casses: string;
  lat: number;
  long: number;
};

type Props = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: Props): JSX.Element {
  const [stateApp, setStateApp] = useState<StateAppType>({
    country: 'afghanistan',
    casses: categoriesTable[0],
    lat: 10,
    long: 40,
  });

  const updateCountry = (newCountry: string) => {
    setStateApp(prev => ({ ...prev, country: newCountry }));
  };

  const updateCasses = (newCases: string) => {
    setStateApp(prev => ({ ...prev, casses: newCases }));
  };

  return (
    <AppContext.Provider value={{ stateApp, updateCountry, updateCasses }}>
      {children}
    </AppContext.Provider>
  );
}
