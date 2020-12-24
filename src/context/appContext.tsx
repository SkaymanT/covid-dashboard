import React, { useState, useContext } from 'react';

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
};

type Props = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: Props): JSX.Element {
  const [stateApp, setStateApp] = useState<StateAppType>({
    country: 'afghanistan',
    casses: 'confirmed',
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
