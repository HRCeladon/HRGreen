import create from 'zustand';

const UserStore = create((set, get) => ({
  LoggedIn: false,
  UserData: null,
  Page: 'Home',
  switcher: (val) => {
    console.log(val)
    set(() => ({Page: val}))
  },
  UserSwap: (val) => {
    set(() => ({UserData: val}))
  }
}))

export default UserStore;