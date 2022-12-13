import create from 'zustand';

interface User {
  usernumber: Number;
  username: string;
  isLoggedIn: boolean;
  token: string;
  setUsernumber: (num: Number)=>void;
  setUsername: (name: string)=>void;
  setIsLoggedIn: (val: boolean)=>void;
  setToken: (val: string)=>void;
}

const UserStore = create<User>((set) => ({
  usernumber: -1,
  username: '',
  isLoggedIn: false,
  token: '',
  setUsernumber: (num: Number) => {
    set((state) => ({usernumber: num}))
  },
  setUsername: (name: string) => {
    set((state) =>({username: name}))
  },
  setIsLoggedIn: (val: boolean) => {
    set((state) => ({isLoggedIn: val}))
  },
  setToken: (val: string) => {
    set((state) => ({token: val}))
  },
}));

export default UserStore;
