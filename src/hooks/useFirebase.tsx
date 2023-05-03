import auth from '@react-native-firebase/auth';
const useFirebase = () => {
  const signup = (email: string, password: string) =>
    auth().createUserWithEmailAndPassword(email, password);
  const login = (email: string, password: string) =>
    auth().signInWithEmailAndPassword(email, password);
  return {
    signup,
    login,
  };
};

export default useFirebase;
