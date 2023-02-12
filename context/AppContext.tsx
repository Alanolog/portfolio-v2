import React from "react";
type appContextType = {
  isEnglish: boolean;
  switchIsEnglish: () => void;
};
const appContextDefaultValues: appContextType = {
  isEnglish: false,
  switchIsEnglish: () => {},
};
const AppContext = React.createContext<appContextType>(appContextDefaultValues);

export function useAppContext() {
  return React.useContext(AppContext);
}

type Props = {
  children: React.ReactNode;
};

export function AppContextProvider({ children }: Props) {
  const [isEnglish, setIsEnglish] = React.useState(false);

  const switchIsEnglish = () => {
    setIsEnglish((prevValue) => !prevValue);
  };

  const value = { isEnglish, switchIsEnglish };
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
