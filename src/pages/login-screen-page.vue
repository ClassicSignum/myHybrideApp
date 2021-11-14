<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>Framework7</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="Company"
        type="text"
        placeholder="Your Company"
        :value="company"
        @input="company = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Username"
        type="text"
        placeholder="Your username"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button @click="signIn">Sign In</f7-list-button>
      <f7-block-footer>
        Some text about login information.
        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </f7-block-footer>
    </f7-list>
  </f7-page>
</template>
<script>
import { f7 } from "framework7-vue";
import { request } from "framework7";
import store from "../js/store";
export default {
  props: {
    f7router: Object,
  },
  data() {
    return {
      username: "ICTLayer",
      password: "*&Layer8ICT&*",
      company: "Demo",
    };
  },
  methods: {
    signIn() {
      const self = this;
      const data = {
        username: self.username,
        pass: self.password,
        db: self.company,
      };
      // https://www.mislayer.com/apis/
      request
        .post("https://www.mislayer.com/apis/", JSON.stringify(data))
        .then((res) => {
          if (res.data != "") {
            if (res.data != "") {
              store.dispatch("addAuthentication", true);
              store.dispatch("addDatabase", self.company);
              const loginUser = JSON.parse(res.data);
              store.dispatch("addLoggedInUser", loginUser[0]);
              localStorage.setItem(
                "loggedInUser",
                JSON.stringify(loginUser[0])
              );

              f7.views.main.router.navigate("/home/");
            } else {
              store.dispatch("addAuthentication", false);
            }
          }
        });
    },
  },
};
</script>