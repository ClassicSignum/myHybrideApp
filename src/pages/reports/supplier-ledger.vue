<template>
  <f7-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <f7-navbar title="Supplier Ledger" back-link="Back">
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
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          :header="item.header"
          :footer="item.orderQty"
          :title="item.title"
          :after="item.after"
          :style="`top: ${vlData.topPosition}px`"
        ></f7-list-item>
      </ul>
    </f7-list>
  </f7-page>
</template>
<script>
import { theme } from "framework7-vue";

export default {
  data() {
    const items = [];
    for (let i = 1; i <= 10000; i += 1) {
      items.push({
        header: `Name: Mr. Jerry Song${i}`,
        title: `Phone: 017732123${i}`,
        after: `Cr: 2554${i} Tk.`,
      });
    }
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
    loadMore() {
      const self = this;
      if (!self.allowInfinite) return;
      self.allowInfinite = false;
      setTimeout(() => {
        if (self.items.length >= 200) {
          self.showPreloader = false;
          return;
        }
        const itemsLength = self.items.length;
        for (let i = 1; i <= 20; i += 1) {
          self.items.push(itemsLength + i);
        }
        self.allowInfinite = true;
      }, 1000);
    },
  },
};
</script>
