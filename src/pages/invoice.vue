<template>
  <f7-page>
    <f7-navbar title="Invoice" back-link="Back" />
    <f7-login-screen-title>ICT Layer</f7-login-screen-title>
    <div class="display-block text-align-center margin-bottom">
      <div>Order Invoice: ASD-123-1000</div>
      <div>Date: 11-12-2021</div>
      <div class="text-color-yellow">
        <span>Name: Yellow Maiden</span>,
        <span>Phone: 01683130000</span>
      </div>
      <div class="text-color-yellow">
        <span>Address: 18/7 Dhanmondi, 7A, Dhaka, Bangladesh</span>
      </div>
    </div>
    <!-- -------------------------------- -->
    <div class="data-table card">
      <table width="100%" border="1">
        <thead>
          <tr>
            <th width="62%" class="label-cell">Item</th>
            <th width="17%" align="right" class="numeric-cell">Price</th>
            <th width="11%" align="right" class="numeric-cell">Qty</th>
            <th width="10%" align="right" class="numeric-cell">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" align="left" class="label-cell">
              <div>SKU:&nbsp; 10000</div>
              <small>Product Name subtitle</small>
            </th>
            <td align="right" class="numeric-cell">100</td>
            <td align="right" class="numeric-cell">5</td>
            <td align="right" class="numeric-cell">500</td>
          </tr>
          <tr>
            <th scope="row" align="left" class="label-cell">
              <div>SKU:&nbsp; 10000</div>
              <small>Product Name subtitle</small>
            </th>
            <td align="right" class="label-cell">10</td>
            <td align="right" class="label-cell">2</td>
            <td align="right" class="label-cell">20</td>
          </tr>
          <tr>
            <th scope="row" align="left" class="label-cell">
              <div>SKU:&nbsp; 10000</div>
              <small>Product Name</small>
            </th>
            <td align="right" class="label-cell">1</td>
            <td align="right" class="label-cell">1</td>
            <td align="right" class="label-cell">1</td>
          </tr>
          <tr>
            <th colspan="2" rowspan="5" scope="row" class="label-cell"></th>
            <td>
              <p align="right" class="label-cell">Sub Total</p>
            </td>
            <td align="right" class="numeric-cell">1111</td>
          </tr>
          <tr>
            <td>
              <p align="right" class="label-cell">Discount</p>
            </td>
            <td align="right" class="numeric-cell">1111</td>
          </tr>
          <tr>
            <td>
              <p align="right" class="label-cell">Less</p>
            </td>
            <td align="right" class="numeric-cell">1111</td>
          </tr>
          <tr>
            <td>
              <p align="right" class="label-cell">Collection In this Memo : (Include Extra Charge)</p>
            </td>
            <td align="right" class="numeric-cell">1111</td>
          </tr>
          <tr>
            <td>
              <p align="right" class="label-cell">Customer Current Balance</p>
            </td>
            <td align="right" class="numeric-cell">1111</td>
          </tr>
        </tbody>
      </table>
      <div class="display-block">
        <div class="text-align-center">Note: Call me when the order is ready.</div>
      </div>
      <f7-block-title align="center">Back To</f7-block-title>
      <f7-block strong>
        <f7-segmented round tag="p">
          <f7-button round outline href="/">Home</f7-button>
          <f7-button round outline href="/order-list/">Order List</f7-button>
          <f7-button round outline href="/pos/">POS</f7-button>
        </f7-segmented>
      </f7-block>
    </div>
  </f7-page>
</template>
