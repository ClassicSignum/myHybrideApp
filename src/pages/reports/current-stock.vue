<template>
  <f7-page>
    <f7-navbar title="Current Stock" back-link="Back">
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
      <f7-list-group>
        <!-- <f7-list-item title="Category Name" group-title></f7-list-item> -->
        <f7-list-item
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          :header="item.totalStock"
          :footer="item.orderQty"
          :after="item.availableStock"
          :title="item.sku"
          :subtitle="item.title"
        >
          <!-- src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" -->
          <template #media>
            <img
              class="margin-top"
              v-if="item.thumbnailImage"
              :src="item.thumbnailImage"
              width="37"
            />
            <img
              class="margin-top"
              v-else
              src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
              width="37"
            />
          </template>
        </f7-list-item>
      </f7-list-group>
    </f7-list>

    <!-- -------------Footer------------ -->
    <f7-toolbar bottom>
      <f7-link
        href="/"
        icon-ios="f7:square_stack_3d_up"
        icon-aurora="f7:square_stack_3d_up"
        icon-md="material.square_stack_3d_up"
        text="Total:"
      ></f7-link>

      <f7-link
        ><h4>&nbsp;&nbsp;</h4>
        {{ totalAvailableStock }}</f7-link
      >
    </f7-toolbar>
  </f7-page>
</template>
<script>
import { theme } from "framework7-vue";
import store from "../../js/store";
import { request } from "framework7";

export default {
  data() {
    const items = [];

    return {
      theme,
      items,
      totalAvailableStock: 0,
      vlData: {
        items: [],
      },
    };
  },
  created() {
    // https://www.mislayer.com/apis/
    // http://localhost/misslayer
    const database = {
      db: store.state.database,
    };
    request
      .post(
        "https://www.mislayer.com/apis/products/current_stock",
        JSON.stringify(database)
      )
      .then((res) => {
        if (res.data != "") {
          const products = JSON.parse(res.data);
          for (let i in products) {
            this.items.push({
              category: products[i].category,
              sku: `SKU: ` + products[i].product_code,
              title: products[i].product_name,
              totalStock: `Total Stock: ` + products[i].total_stock,
              orderQty:
                `Order QTY: ` +
                products[i].order_qty +
                ` || ` +
                `Attribute: ` +
                products[i].product_type_name,
              availableStock: `Available: ` + products[i].available_stock,
              thumbnailImage: products[i].thumbnail_image_url,
            });
            if (products[i].available_stock >= 0) {
              this.totalAvailableStock += products[i].available_stock;
            }
          }
          this.vlData.items = this.items;
          // console.log(this.items);
        } else {
        }
      });
  },

  methods: {
    searchAll(query, items) {
      console.log("serch: " + query);

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
      console.log(vlData);
      this.vlData = vlData;
      // this.items = vlData;
    },
  },
};
</script>
