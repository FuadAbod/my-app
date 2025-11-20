import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

// Define types for your context values
interface AppContextType {
  channel: any | null; // You can replace `any` with a more specific type if available (e.g., Channel from stream-chat)
  setChannel: Dispatch<SetStateAction<any | null>>;
  thread: any | null; // Likewise, replace `any` when you know the structure
  setThread: Dispatch<SetStateAction<any | null>>;
}

// Create context with a default value
export const AppContext = React.createContext<AppContextType>({
  channel: null,
  setChannel: () => {},
  thread: null,
  setThread: () => {},
});

// Define props for the provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [channel, setChannel] = useState<any | null>(null);
  const [thread, setThread] = useState<any | null>(null);

  return (
    <AppContext.Provider value={{ channel, setChannel, thread, setThread }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => React.useContext(AppContext);
