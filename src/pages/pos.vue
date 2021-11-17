<template>
  <f7-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <f7-navbar title="Cart" back-link="Back"></f7-navbar>
    <!-- Product Items-----------start -->
    <f7-card
      v-for="(item, index) in items"
      :key="index"
      class="demo-facebook-card"
    >
      <f7-card-header class="no-border">
        <div class="demo-facebook-avatar">
          <img
            src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg"
            width="34"
            height="34"
          />
        </div>
        <div class="demo-facebook-name">
          SKU:{{ item.sku }} || {{ item.title }}
        </div>
        <!-- <div class="demo-facebook-name">SKU:1000 || Product Title John Doe</div> -->
        <div class="demo-facebook-name">Tk.{{ item.unitPrice }}</div>
      </f7-card-header>
      <f7-card-footer :padding="true" class="no-border">
        <f7-row no-gap>
          <f7-list>
            <f7-list-input
              label="Attribute"
              type="select"
              outline
              floating-label
            >
              <option value selected>Attribute</option>
              <option value="10pcs">10pcs</option>
              <option value="20pcs">20pcs</option>
              <option value="10pcs">Red</option>
              <option value="20pcs">Green</option>
            </f7-list-input>
          </f7-list>
        </f7-row>
        <f7-row no-gap>
          <span class="margin-right">Stock : {{ item.stock }}</span>
          <f7-link>
            <f7-stepper></f7-stepper>
          </f7-link>
        </f7-row>
      </f7-card-footer>
    </f7-card>

    <!-- Product Items-----------start -->

    <!-- --------Calculation -------- -->
    <!-- <f7-card class="elevation-demo elevation-20">
      <f7-card-header>
        <f7-title>Price Calculation</f7-title>
      </f7-card-header>

      <f7-card-footer :padding="true" class="no-border">
        <f7-list>
          <f7-list-input
            label="Discount Type"
            type="select"
            outline
            floating-label
          >
            <option value="10pcs">Coupon</option>
            <option value="20pcs">Instant</option>
            <option value="10pcs">Cash</option>
            <option value="20pcs">sales</option>
          </f7-list-input>

          <f7-list-input
            label="Extra Charge Tk."
            type="number"
            floating-label
            outline
            clear-button
          ></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-input
            label="Discount %"
            outline
            floating-label
            type="number"
            clear-button
          ></f7-list-input>

          <f7-list-input
            label="Less Tk."
            type="number"
            outline
            floating-label
            clear-button
          ></f7-list-input>
        </f7-list>
      </f7-card-footer>
    </f7-card> -->

    <!-- -------------Footer------------ -->
    <f7-toolbar bottom>
      <f7-link
        href="/pos-customer-info/"
        icon-ios="f7:chevron_right_2"
        icon-aurora="f7:chevron_right_2"
        icon-md="material:chevron_right_2"
        text="Customer Info"
      ></f7-link>
      <f7-link>
        Total:&nbsp; 5000
        <h4>/= Tk.</h4>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
import store from "../js/store";
import { f7 } from "framework7-vue";

export default {
  data() {
    const productList = store.state.productList;
    const items = [];
    for (let index = 0; index < 20; index++) {
      items.push({
        sku: productList[index].product_code,
        title: productList[index].product_name,
        unitPrice: productList[index].unit_price,
        stock: productList[index].available_stock,
      });
    }

    return {
      allowInfinite: true,
      showPreloader: true,
      items,
      itemIndex: 20,
    };
  },
  methods: {
    loadMore() {
      const productList = store.state.productList;
      //   const self = this;
      console.log(this.allowInfinite);

      if (!this.allowInfinite) {
        console.log("allow");

        return;
      }

      setTimeout(() => {
        if (this.items.length >= productList.length) {
          console.log(this.items.length);
          this.allowInfinite = false;
          this.showPreloader = false;
          return;
        } else {
          console.log(this.items.length);
        }
        for (
          let index = this.itemIndex;
          index < this.itemIndex + 20;
          index += 1
        ) {
          this.items.push({
            sku: productList[index].product_code,
            title: productList[index].product_name,
            unitPrice: productList[index].unit_price,
          });
        }
        this.itemIndex += 20;
        this.allowInfinite = true;
      }, 1000);
    },
  },
};
</script>
<style>
.demo-facebook-card .demo-facebook-name {
  margin-left: 15px;
  font-size: 15px;
}
</style>
