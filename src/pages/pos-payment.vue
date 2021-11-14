<template>
  <f7-page>
    <f7-navbar title="Payment" back-link="Back"></f7-navbar>
    <div>
      <f7-list inline-labels class="no-margin-top">
        <f7-list-input label="Payment Method" type="select" title="Payment Method">
          <option value="Cash">Cash</option>
          <option value="DBBL">IBBL</option>
          <option value="BRAC">BRAC</option>
          <option value="EBL">EBL</option>
          <option value="Pubali">Pubali</option>
          <option value="Bkash">Bkash</option>
        </f7-list-input>

        <f7-list-input label="Payment" type="text" placeholder="Amount ৳."></f7-list-input>
        <f7-list-input label="Payment Info*" type="text" placeholder="Reference*"></f7-list-input>
      </f7-list>

      <!-- ------------Start Another Add Field----------- -->

      <f7-card v-for="(textField, i) in textFields" :key="i" class="my-3 py-2 text-fields-row margin-horizontal-half">
        <f7-block class="grid-demo">
          <f7-row>
            <f7-col width="90">
              <f7-list inline-labels>
                <f7-list-input label="Payment Method" type="select" title="Payment Method">
                  <option value="Cash">Cash</option>
                  <option value="DBBL">IBBL</option>
                  <option value="BRAC">BRAC</option>
                  <option value="EBL">EBL</option>
                  <option value="Pubali">Pubali</option>
                  <option value="Bkash">Bkash</option>
                </f7-list-input>

                <f7-list-input label="Payment" type="text" placeholder="Amount ৳."></f7-list-input>
                <f7-list-input label="Payment Info*" type="text" placeholder="Reference*"></f7-list-input>
              </f7-list>
            </f7-col>
            <f7-col width="10">
              <f7-icon
                ios="f7:close"
                aurora="f7:close"
                md="material:close"
                color="red"
                @click="remove(i)"
              ></f7-icon>
            </f7-col>
          </f7-row>
        </f7-block>
      </f7-card>
      <!-- ------------End Another Add Field----------- -->
    </div>
    <f7-button fill @click="add" class="margin-horizontal-half margin-bottom">
      <f7-chip text="Add Partial Payment" media-bg-color="blue">
        <template #media>
          <f7-icon ios="f7:plus_circle" aurora="f7:plus_circle" md="f7:add_circle"></f7-icon>
        </template>
      </f7-chip>
    </f7-button>
    <!-- -------------Footer------------ -->
    <f7-toolbar bottom>
      <f7-link
        href="/invoice/"
        tab-link-active
        icon-ios="f7:creditcard"
        icon-aurora="f7:creditcard"
        icon-md="material.creditcard"
        text="Submit"
      ></f7-link>
      <f7-link>
        Total:&nbsp;
        5000<h4>/= Tk.</h4>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<script>
export default {
  data: () => ({
    textFields: [],
  }),
  methods: {
    add() {
      this.textFields.push({
        // label: "Payment Type *",
        // label1: "Advance *",
        // label2: "Payment Info",
      });
    },

    remove(i) {
      this.textFields.splice(i, 1);
    },
  },
};
</script>
