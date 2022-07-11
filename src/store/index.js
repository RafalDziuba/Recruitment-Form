import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      password: "",
      email: "",
      firstName: "",
      surName: "",
      age: 0,
    };
  },
  getters: {
    password(state) {
      return state.password;
    },
    email(state) {
      return state.email;
    },
    firstName(state) {
      return state.firstName;
    },
    surName(state) {
      return state.surName;
    },
    age(state) {
      return state.age;
    },
  },
  mutations: {
    updatePassword(state, payload) {
      state.password = payload;
    },
    updateEmail(state, payload) {
      state.email = payload;
    },
    updateFirstName(state, payload) {
      state.firstName = payload;
    },
    updateSurName(state, payload) {
      state.surName = payload;
    },
    updateAge(state, payload) {
      state.age = payload;
    },
  },
});

export default store;
