<template>
  <f7-page>
    <f7-navbar title="Virtual List">
      <f7-subnavbar :inner="false">
        <f7-searchbar
          search-container=".virtual-list"
          search-item="li"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></f7-searchbar>
      </f7-subnavbar>
    </f7-navbar>
    <f7-block>
      <p>Here is the example of virtual list with 10 000 items:</p>
    </f7-block>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <f7-list
      class="searchbar-found"
      medial-list
      virtual-list
      :virtual-list-params="{
        items,
        searchAll,
        renderExternal,
        height: theme.ios ? 63 : theme.md ? 73 : 77,
      }"
    >
      <ul>
        <f7-list-item
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          :link="item.link"
          :title="item.title"
          :subtitle="item.subtitle"
          :after="item.after"
          :style="`top: ${vlData.topPosition}px`"
        ></f7-list-item>
      </ul>
    </f7-list>
    <f7-toolbar bottom class="button" v-if="loadMoreButton">
      <button class="col button" @click="loadCustomerLedger">
        Load more
      </button>
    </f7-toolbar>
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
        items: [],
      },
      loadMoreButton: true,
      itemStart: 200,
      database: { db: store.state.database,start:0,limit: 200 },
    };
  },
  created() {
    request
      .post(apiBaseUrl + "customer-ledger/", JSON.stringify(this.database))
      .then((res) => {
        const customerLedger = JSON.parse(res.data);
        if (customerLedger) {
          customerLedger.forEach((element) => {
            this.items.push({
              title: element.customer_name,
              subtitle: element.customer_phone,
              after: element.balance,
              link: '/customer-ledger-details/'+element.customer_id,
            });
          });
          this.vlData.items = this.items;
        }
      });
  },
  methods: {
    loadCustomerLedger(){
      let database = { db: store.state.database,start:this.itemStart,limit: 200 };
      request
      .post(apiBaseUrl + "customer-ledger/", JSON.stringify(database))
      .then((res) => {
        const customerLedger = JSON.parse(res.data);
        if (customerLedger != false) {
          customerLedger.forEach((element) => {
            this.items.push({
              title: element.customer_name,
              subtitle: element.customer_phone,
              after: element.balance,
              link: '/customer-ledger-details/'+element.customer_id,
            });
          });
          this.vlData.items = this.items;
        }else{
          this.loadMoreButton = false;
        }
      });
      this.itemStart += 200;
    },
    searchAll(query, items) {
      const found = [];
      for (let i = 0; i < items.length; i += 1) {
        if (
          items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || items[i].subtitle.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
          query.trim() === ""
        )
          found.push(i);
      }
      return found; // return array with mathced indexes
    },
    renderExternal(vl, vlData) {
      this.vlData = vlData;
    },
  },
};
</script>