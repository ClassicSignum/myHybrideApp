<template>
  <f7-page>
    <f7-navbar title="Journal Book" back-link="Back">
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
    <f7-card
      outline
      class="searchbar-found no-margin-top no-margin-horizontal no-padding-left"
      medial-list
      virtual-list
      :virtual-list-params="{
        items,
        searchAll,
        renderExternal,
        height: theme.ios ? 63 : theme.md ? 73 : 77,
      }"
      v-for="(item, index) in items"
      :key="index"
    >
      <f7-card-header>
        <span>Receipt Voucher</span>
        <span>JN: {{ item.journalNo }}</span>
      </f7-card-header>
      <f7-card-content>
        <div class="data-table no-margin-horizontal">
          <table class="no-margin-horizontal">
            <thead>
              <tr>
                <th class="label-cell sortable-cell custom">Name of A/C</th>
                <th class="numeric-cell sortable-cell custom">Dr.</th>
                <th class="numeric-cell sortable-cell custom">Cr.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="label-cell custom">{{ item.name }}</td>
                <td class="numeric-cell custom">{{ item.dr }}</td>
                <td class="numeric-cell custom">{{ item.cr }}</td>
              </tr>
              <tr>
                <td class="label-cell custom">BRAC Bank Ltd(Uttara)</td>
                <td class="numeric-cell custom">12900321</td>
                <td class="numeric-cell custom">---</td>
              </tr>
              <tr>
                <td class="label-cell custom">Customer (Nirob 01825181825)</td>
                <td class="numeric-cell custom">---</td>
                <td class="numeric-cell custom">12900765</td>
              </tr>
            </tbody>
          </table>
        </div>
      </f7-card-content>
      <f7-card-footer>
        {{ item.date }}
      </f7-card-footer>
    </f7-card>
  </f7-page>
</template>
<script>
import { theme } from "framework7-vue";

export default {
  data() {
    const items = [];
    for (let i = 1; i <= 100; i += 1) {
      items.push({
        journalNo: `13643${i}`,
        name: `BRAC Bank Ltd ${i}`,
        date: `2021-10-1${i}`,
        dr: `2554000${i}`,
        cr: `---`,
        index: i,
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
<style scoped>
.custom {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
