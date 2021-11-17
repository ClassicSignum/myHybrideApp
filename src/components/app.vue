<template>
  <f7-app v-bind="f7params" theme-dark>
    <!-- Left panel with cover effect when hidden -->
    <f7-panel left reveal swipe swipe-active-area="20" theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title></f7-navbar>
          <f7-list>
            <f7-list-item
              link="/"
              view=".view-main"
              panel-close
              title="Home"
            ></f7-list-item>
            <f7-list-item
              link="/logout/"
              view=".view-main"
              panel-close
              title="Logout"
            ></f7-list-item>
          </f7-list>
          <f7-block-title>Sales</f7-block-title>
          <f7-list>
            <f7-list-item
              link="/pos/"
              view=".view-main"
              panel-close
              title="POS"
            ></f7-list-item>
            <f7-list-item
              link="/order-list/"
              view=".view-main"
              panel-close
              title="Order List"
            ></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Right panel with reveal effect-->
    <f7-panel right reveal swipe swipe-active-area="20" theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Reports"></f7-navbar>
          <f7-block-title>Invoice</f7-block-title>
          <f7-list>
            <!-- ------ -->
          </f7-list>
          <f7-block-title>Accounts</f7-block-title>
          <f7-list>
            <f7-list-item
              link="/account-book/"
              view=".view-main"
              panel-close
              title="Accounts Book"
            ></f7-list-item>
            <f7-list-item
              link="/chart-of-account/"
              view=".view-main"
              panel-close
              title="Chart Of Accounts"
            ></f7-list-item>
            <f7-list-item
              link="/customer-ledger/"
              view=".view-main"
              panel-close
              title="Customer Ledger"
            ></f7-list-item>
            <f7-list-item
              link="/supplier-ledger/"
              view=".view-main"
              panel-close
              title="Supplier Ledger"
            ></f7-list-item>
            <f7-list-item
              link="/journal-book/"
              view=".view-main"
              panel-close
              title="Journal Book"
            ></f7-list-item>
            <f7-list-item
              link="/income-statement/"
              view=".view-main"
              panel-close
              title="Income Statement"
            ></f7-list-item>
          </f7-list>
          <f7-block-title>Inventory</f7-block-title>
          <f7-list>
            <f7-list-item
              link="/current-stock/"
              view=".view-main"
              panel-close
              title="Current Stock"
            ></f7-list-item>
            <f7-list-item
              link="/product-list/"
              view=".view-main"
              panel-close
              title="Product List"
            ></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>
    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
import { ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";
import { getDevice } from "../js/framework7-custom.js";
import cordovaApp from "../js/cordova-app.js";

import routes from "../js/routes.js";
import store from "../js/store";

export default {
  setup() {
    const device = getDevice();
    // Framework7 Parameters
    const f7params = {
      name: "MIS Layer", // App name
      theme: "auto", // Automatic theme detection

      id: "io.framework7.mislayer", // App bundle ID
      // App store
      store: store,
      // App routes
      routes: routes,
      // Register service worker (only on production build)
      serviceWorker:
        process.env.NODE_ENV === "production"
          ? {
              path: "/service-worker.js",
            }
          : {},

      // Input settings
      input: {
        scrollIntoViewOnFocus: device.cordova && !device.electron,
        scrollIntoViewCentered: device.cordova && !device.electron,
      },
      // Cordova Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
    };

    onMounted(() => {
      f7ready(() => {
        // Init cordova APIs (see cordova-app.js)
        if (device.cordova) {
          cordovaApp.init(f7);
        }

        // Call F7 APIs here
      });
    });

    return {
      f7params,
    };
  },
};
</script>
