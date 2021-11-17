<template>
  <f7-page>
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>{{ getUserName }}</f7-nav-title>
      <f7-nav-right>
        <f7-link
          icon-ios="f7:chart_bar_alt_fill"
          icon-aurora="f7:chart_bar_alt_fill"
          icon-md="f7:chart_bar_alt_fill"
          panel-open="right"
        ></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>{{ getUserName }}</f7-nav-title-large>
    </f7-navbar>

    <!-- --------Start Content Area---------- -->
    <f7-card title="Order Vs Sales">
      <f7-block strong>
        <f7-area-chart
          tooltip
          axis
          :axis-labels="dates"
          legend
          toggle-datasets
          line-chart
          :format-axis-label="(date) => axisDateFormat.format(date)"
          :format-tooltip-axis-label="(date) => tooltipDateFormat.format(date)"
          :datasets="[
            {
              label: 'Order',
              color: '#f00',
              values: [0, 300, 127, 47],
            },
            {
              label: 'Sales',
              color: '#6bc180',
              values: [0, 75, 133, 237],
            },
          ]"
        />
      </f7-block>
    </f7-card>
    <!-- --------End Content Area---------- -->
    <!-- --------Start Content Area---------- -->
    <f7-card
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></f7-card>
    <!-- --------End Content Area---------- -->
    <f7-card
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></f7-card>
    <!-- --------End Content Area---------- -->
    <f7-card
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></f7-card>
    <!-- --------End Content Area---------- -->
    <f7-card
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></f7-card>
    <!-- --------End Content Area---------- -->
    <f7-card
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></f7-card>
    <!-- --------End Content Area---------- -->
  </f7-page>
</template>
<script>
import apiBaseUrl from "../js/global";
import store from "../js/store";
import { request } from "framework7";

export default {
  data() {
    return {
      database: { db: store.state.database },
      showPreloader: "",
      loadMore: "",
    };
  },
  created() {
    request
      .post(apiBaseUrl + "products/", JSON.stringify(this.database))
      .then((res) => {
        const productList = JSON.parse(res.data);
        store.dispatch("addProductList", productList);
        console.log(store.state.productList);
      });
  },
  computed: {
    getUserName() {
      const username = JSON.parse(localStorage.getItem("loggedInUser"));
      return username.username;
    },
  },
};
</script>
  
