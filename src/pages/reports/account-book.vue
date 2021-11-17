<template>
  <f7-page
  >
    <f7-navbar title="Account Book" back-link="Back">
      <div class="right">
        <f7-link
          href="/"
          icon-ios="f7:search_circle"
          icon-aurora="f7:search_circle"
          icon-md="f7:search_circle"
        ></f7-link>
      </div>
      <f7-subnavbar :inner="false">
        <f7-searchbar
          search-container=".virtual-list"
          search-item="li"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></f7-searchbar>
      </f7-subnavbar>
    </f7-navbar>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <!-- FAB Right Bottom (Orange) -->

    <f7-list
      class="searchbar-found no-margin-top"
      medial-list
      virtual-list
    >
      <ul>
        <f7-list-item
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          :title="item.title"
          :footer="item.group"
          :after="item.balance"
          :style="`top: ${vlData.topPosition}px`"
        ></f7-list-item>
      </ul>
    </f7-list>
  </f7-page>
</template>
<script>
import { theme } from "framework7-vue";
import apiBaseUrl from "../../js/global";
import store from "../../js/store";
import { request } from "framework7";

export default {
  data() {
    const items = [];
    return {
      theme,
      items,
      vlData: {
        items: []
      },
      database: { db: store.state.database },
    };
  },
  created() {
    request
      .post(apiBaseUrl + "account-book/", JSON.stringify(this.database))
      .then((res) => {
        const accountBook = JSON.parse(res.data);
        if (accountBook) {
          store.dispatch("addAccountBook", accountBook);
          accountBook.forEach((element) => {
            this.items.push({
              group: element.group_chain,
              title: element.ledger_name,
              balance: element.balance,
            });
          });
          this.vlData.items = this.items;
        }
      });
  },
  methods: {
    searchAll(query, items) {
      const found = [];
      for (let i = 0; i < items.length; i += 1) {
        if (
          items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || items[i].group.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
          query.trim() === ""
        )
          found.push(i);
      }
      return found; // return array with mathced indexes
    },
    renderExternal(vl, vlData) {
      this.vlData = vlData;
    }
  },
};
</script>
