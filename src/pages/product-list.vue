<template>
  <f7-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <f7-navbar title="Product List" back-link="Back">
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
      :virtual-list-params="{
        items,
        searchAll,
        renderExternal,
        height: theme.ios ? 63 : theme.md ? 73 : 77,
      }"
    >
      <ul>
        <f7-list-item
          swipeout
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          :header="item.name+` || `+item.category"
          :title="`SKU: `+item.code"
          :footer="`Attribute: ` +item.attribute"
          :after="`Price: ` + item.price"
          :style="`top: ${vlData.topPosition}px`"
        >
          <!-- ----right swipe---- -->
          <f7-swipeout-actions right>
            <f7-swipeout-button  color="green" @click="print"
              >Print</f7-swipeout-button
            >
            <f7-swipeout-button  color="blue" href="/current-stock/" view=".view-main" panel-close
              >Due Collection</f7-swipeout-button
            >
            <f7-swipeout-button  color="orange" @click="view">
              View
            </f7-swipeout-button>
          </f7-swipeout-actions>
        </f7-list-item>
      </ul>
    </f7-list>
  </f7-page>
</template>
<script>
import { theme } from "framework7-vue";
import { f7 } from "framework7-vue";
import store from '../js/store';
import { request } from "framework7";

export default {
  data() {
    const items = [];
    return {
      theme,
      items,
      vlData: {
        items: [],
        allowInfinite: true,
        showPreloader: true,
      },
    };
  },
  created(){
    let products = store.state.productList
    for (let p = 0; p < products.length; p++) {
      const element = products[p];
      this.items.push({
        attribute: element.product_attribute,
        code: element.product_code,
        name: element.product_name,
        category: element.category_name,
        price: element.unit_price,
      });
    }
    this.vlData.items = this.items;
  },
  methods: {
    searchAll(query, items) {
      const found = [];
      for (let i = 0; i < items.length; i += 1) {
        if (
          items[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0 || items[i].code.toLowerCase().indexOf(query.toLowerCase()) >= 0 || items[i].category.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
          query.trim() === ""
        )
          found.push(i);
      }
      return found; // return array with mathced indexes
    },
    renderExternal(vl, vlData) {
      this.vlData = vlData;
    },
    loadMore() {
      //   const self = this;
      if (!f7.allowInfinite) return;
      f7.allowInfinite = false;
      setTimeout(() => {
        if (f7.items.length >= 1000) {
          f7.showPreloader = false;
          return;
        }
        const itemsLength = f7.items.length;
        for (let i = 1; i <= 20; i += 1) {
          f7.items.push(itemsLength + i);
        }
        f7.allowInfinite = true;
      }, 1000);
    },
    //---- Swipeout-Action-Buttons----//
    dueCollection() {
      f7.dialog.alert("Due-collection Action");
    },
    print() {
      f7.dialog.alert("Print Your Invoice");
    },
    view() {
      f7.dialog.alert("View Your Invoice");
    },
  },
};
</script>