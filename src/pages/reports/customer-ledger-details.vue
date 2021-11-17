<template>
  <f7-page>
    <f7-navbar title="Customer Ledger Details" back-link="Back" />
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>

    <f7-card outline class="no-margin-top no-margin-horizontal no-padding-left">
      <h3 class="text-align-center margin-top">
        Shajeeb Enterprise (Gulistan,Dhaka)
      </h3>

      <!-- filter----------- -->
      <div class="no-margin-top padding-left">
        <div class="row no-gap">
          <div class="col-50 text-align-center">
            <f7-list>
              <f7-list-input
                type="datepicker"
                placeholder="Select Form date"
                readonly
                :calendar-params="{
                  dateFormat: 'M dd yyyy',
                }"
              ></f7-list-input>
            </f7-list>
          </div>
          <div class="col-50 text-align-center">
            <f7-list no-hairlines-md>
              <f7-list-input
                type="datepicker"
                placeholder="Select To date"
                readonly
                :calendar-params="{
                  dateFormat: 'M dd yyyy',
                }"
              ></f7-list-input>
            </f7-list>
          </div>
          <!-- <div class="col-50 text-align-center">
            <f7-list>
              <f7-list-input
                type="select"
                value="Cost Center 1"
                placeholder="Please choose..."
                info="Select your Cost Center"
              >
                <f7-icon icon="demo-list-icon" #="media"></f7-icon>

                <option value="Cost Center 1">Cost Center 1</option>
                <option value="Cost Center 2">Cost Center 2</option>
                <option value="Cost Center 3">Cost Center 3</option>
                <option value="Cost Center 4">Cost Center 4</option>
              </f7-list-input>
            </f7-list>
          </div> -->
          <div
            class="col-100 text-align-center margin-bottom-half margin-right"
          >
            <f7-link
              class="col button button-fill color-white text-color-black"
              icon-ios="f7:search_circle"
              icon-aurora="f7:search_circle"
              icon-md="f7:search_circle"
              >Filter
            </f7-link>
          </div>
        </div>
      </div>
      <!-- filter----------- -->
    </f7-card>
    <!-- ---------------------- -->
    <f7-card
      outline
      class="
        searchbar-found
        margin-top-half
        no-margin-horizontal no-padding-left
      "
    >
      <f7-card-content>
        <div class="data-table no-margin-horizontal">
          <f7-link class="text-align-center" color="green">
            <h3>Account Book</h3>
          </f7-link>

          <table class="no-margin-horizontal">
            <thead>
              <tr>
                <th class="label-cell sortable-cell custom-right">Date</th>
                <th class="label-cell sortable-cell custom">Name of A/C</th>
                <th class="numeric-cell sortable-cell custom-left">J. ID</th>
                <th class="numeric-cell sortable-cell custom" width="200px">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="label-cell custom"></th>
                <th class="label-cell custom" colspan="2">Opening Balance:</th>
                <th class="numeric-cell custom" width="200px">
                  11,649.09<span color="green">(Dr.)</span>
                </th>
              </tr>
              <tr>
                <td class="label-cell custom custom-right">2020-11-10</td>
                <td class="label-cell custom">Income-Sales Account</td>
                <td class="numeric-cell custom-left">4599</td>
                <td class="numeric-cell custom" width="100px">
                  11,649.09<span>(Cr.)</span>
                </td>
              </tr>
              <tr>
                <td class="label-cell custom">2020-11-10</td>
                <td class="label-cell custom">Salary Payable</td>
                <td class="numeric-cell custom-left">2615</td>
                <td class="numeric-cell custom" width="100px">
                  21,415.92 <span color="green">(Dr.)</span>
                </td>
              </tr>
              <tr>
                <td class="label-cell custom">2020-11-30</td>
                <td class="label-cell custom">Dealer Incentive</td>
                <td class="numeric-cell custom-left">6802</td>
                <td class="numeric-cell custom" width="100px">
                  2,554.93<span>(Cr.)</span>
                </td>
              </tr>
              <tr>
                <td class="label-cell custom">2020-11-10</td>
                <td class="label-cell custom">Income-Sales Account</td>
                <td class="numeric-cell custom-left">4599</td>
                <td class="numeric-cell custom" width="100px">
                  11,649.09<span color="green">(Dr.)</span>
                </td>
              </tr>
              <tr>
                <td class="label-cell custom">2020-11-10</td>
                <td class="label-cell custom">Salary Payable</td>
                <td class="numeric-cell custom-left">2615</td>
                <td class="numeric-cell custom" width="100px">
                  21,415.92<span>(Cr.)</span>
                </td>
              </tr>
              <tr>
                <td class="label-cell custom">2020-11-30</td>
                <td class="label-cell custom">Dealer Incentive</td>
                <td class="numeric-cell custom-left">6802</td>
                <td class="numeric-cell custom" width="100px">
                  2,554.93<span color="green">(Dr.)</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th class="label-cell custom"></th>
                <th class="label-cell custom" colspan="2">Closing Balance:</th>
                <th class="numeric-cell custom" width="300px">
                  10,000.00<span>(Dr.)</span>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </f7-card-content>
    </f7-card>

    <!-- -------------- -->
    <f7-card
      outline
      class="searchbar-found no-margin-top no-margin-horizontal no-padding-left"
    >
      <f7-card-content>
        <div class="data-table no-margin-horizontal">
          <f7-link class="text-align-center" color="green">
            <h3>Invoice</h3>
          </f7-link>

          <table class="no-margin-horizontal">
            <thead>
              <tr>
                <th class="label-cell sortable-cell">Date</th>
                <th class="numeric-cell sortable-cell">No of Invoice</th>
                <th class="numeric-cell sortable-cell custom-left">Total</th>
                <th class="numeric-cell sortable-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="label-cell custom">2020-11-10</td>
                <td class="label-cell">4599</td>
                <td class="numeric-cell custom-left">4599.00</td>
                <td class="label-cell custom">
                  <f7-icon
                    class="space"
                    f7="eye"
                    size="20"
                    color="blue"
                  ></f7-icon>
                  <f7-icon
                    class="space"
                    f7="pencil_outline"
                    size="20"
                    color="yellow"
                  ></f7-icon>
                  <f7-icon
                    class="space"
                    f7="trash_circle_fill"
                    size="20"
                    color="red"
                  ></f7-icon>
                </td>
              </tr>
              <tr>
                <td class="label-cell custom">2020-11-10</td>
                <td class="label-cell">2615</td>
                <td class="numeric-cell custom-left">2615.00</td>
                <td class="label-cell custom" >
                  <f7-icon
                    class="space"
                    f7="eye"
                    size="20"
                    color="blue"
                  ></f7-icon>
                  <f7-icon
                    class="space"
                    f7="pencil_outline"
                    size="20"
                    color="yellow"
                  ></f7-icon>
                  <f7-icon
                    class="space"
                    f7="trash_circle_fill"
                    size="20"
                    color="red"
                  ></f7-icon>
                </td>
              </tr>
              <tr>
                <td class="label-cell custom">2020-11-30</td>
                <td class="label-cell">6802</td>
                <td class="numeric-cell custom-left">6802.00</td>
                <td class="label-cell custom" >
                  <f7-icon
                    class="space"
                    f7="eye"
                    size="20"
                    color="blue"
                  ></f7-icon>
                  <f7-icon
                    class="space"
                    f7="pencil_outline"
                    size="20"
                    color="yellow"
                  ></f7-icon>
                  <f7-icon
                    class="space"
                    f7="trash_circle_fill"
                    size="20"
                    color="red"
                    onclick="icon()"
                  ></f7-icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </f7-card-content>
    </f7-card>
    <!-- ----------------- -->
    <f7-card
      outline
      class="searchbar-found no-margin-top no-margin-horizontal no-padding-left"
    >
      <f7-card-content>
        <div class="data-table no-margin-horizontal">
          <f7-link class="text-align-center" color="green">
            <h3>Product Transactions Summary</h3>
          </f7-link>

          <table class="no-margin-horizontal">
            <thead>
              <tr>
                <th class="label-cell sortable-cell custom">SKU || Name</th>
                <th class="label-cell sortable-cell custom">Attribute</th>
                <th class="numeric-cell sortable-cell custom" >In</th>
                <th class="numeric-cell sortable-cell custom" >Out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="label-cell custom">E-123 || Active Cone Mehedi</td>
                <td class="label-cell custom">30 gm</td>
                <td class="numeric-cell custom" >555</td>
                <td class="numeric-cell custom" >555</td>
              </tr>
              <tr>
                <td class="label-cell custom">E-123 || Active Cone Mehedi</td>
                <td class="label-cell custom">30 gm</td>
                <td class="numeric-cell custom" >555</td>
                <td class="numeric-cell custom" >555</td>
              </tr>
              <tr>
                <td class="label-cell custom">E-123 || Active Cone Mehedi</td>
                <td class="label-cell custom">30 gm</td>
                <td class="numeric-cell custom" >555</td>
                <td class="numeric-cell custom">555</td>
              </tr>
            </tbody>
          </table>
        </div>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>
<script>
function icon() {
  alert("Working!");
}
</script>
<style scoped>
.custom {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.custom-left {
  padding-right: 3px !important;
}
.custom-right {
  padding-left: 3px !important;
}
.space {
  padding-left: 3px;
  padding-right: 3px;
}
</style>
