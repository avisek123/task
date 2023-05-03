import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';
import auth from '@react-native-firebase/auth';
const AppContext = createContext<any>({});

type AppContextProviderProps = {
  children?: ReactNode;
};

export default ({children}: AppContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<unknown>(false);
  const [user, setUser] = React.useState<string | null>(null);
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    authStateHandler();
    return () => {
      isMounted.current = false;
    };
  }, []);
  const authStateHandler = async () => {
    try {
      auth().onAuthStateChanged(user => {
        if (user) {
          setUser(user?.email);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    } catch (error) {}
  };
  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
