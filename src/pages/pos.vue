<template>
  <f7-page>
    <!-- Top Navbar -->
    <f7-navbar title="POS" back-link="Back">
      <!-- --------------Searchbar---------- -->
      <f7-subnavbar :inner="false">
        <f7-searchbar
          search-container=".virtual-list"
          search-item="li"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></f7-searchbar>
      </f7-subnavbar>
      <!-- --------------Searchbar---------- -->
    </f7-navbar>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
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
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          :header="item.subtitle"
          :title="item.title"
          footer="Qty:20"
        >
          <template #media>
            <img src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" />
          </template>
          <template #after>
            <f7-col>
              <small class="display-block text-align-center">Tk.1600</small>
              <f7-stepper></f7-stepper>
            </f7-col>
          </template>
        </f7-list-item>
      </ul>
    </f7-list>

    <f7-toolbar bottom>
      <f7-link
        href="/pos-cart/"
        tab-link-active
        icon-ios="f7:cart"
        icon-aurora="f7:cart"
        icon-md="f7:cart"
        text="Cart"
      ></f7-link>
      <f7-link>
        Subtotal:&nbsp;
        5000<h4>/= Tk.</h4>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
import { theme } from "framework7-vue";

export default {
  data() {
    const items = [];
    for (let i = 1; i <= 10000; i += 1) {
      items.push({
        title: `SKU ${i}`,
        subtitle: `Product Product Product Product ${i}`,
      });
    }
    return {
      theme,
      items,
      vlData: {
        items: [],
      },
    };
  },
  methods: {
    searchAll(query, items) {
      const found = [];
      for (let i = 0; i < items.length; i += 1) {
        if (
          items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
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
