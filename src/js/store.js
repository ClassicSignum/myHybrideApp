import { createStore } from "framework7/lite";

const store = createStore({
  state: {
    authentication: false,
    loggedInUser: [],
    database: "",
    productList: [],
    accountBook: [],
  },
  getters: {
    products({ state }) {
      return  state.productList;
    },
  },
  actions: {
    getProductList({state}) {
      return state.productList
    },
    addLoggedInDatabase({ state }, database) {
      state.database = database;
    },
    addProductList({ state }, product) {
      state.productList = product;
    },
    addAccountBook({ state }, payload) {
      state.accountBook = payload;
    },
    addAuthentication({ state }, auth) {
      state.authentication = auth;
    },
    addLoggedInUser({ state }, loggedInUser) {
      state.loggedInUser = loggedInUser;
    },
    addDatabase({ state }, database) {
      state.database = database;
    },
  },
});
export default store;
