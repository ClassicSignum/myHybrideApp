<template>
  <f7-page>
    <f7-navbar title="Cart" back-link="Back"></f7-navbar>
    <!-- Product Items-----------start -->
    <f7-card class="demo-facebook-card">
      <f7-card-header class="no-border">
        <div class="demo-facebook-avatar">
          <img
            src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg"
            width="34"
            height="34"
          />
        </div>
        <div class="demo-facebook-name">SKU:1000 || Product Title John Doe</div>
        <div class="demo-facebook-name">Tk.1600</div>
      </f7-card-header>
      <f7-card-footer :padding="true" class="no-border">
        <f7-row no-gap>
          <f7-list>
            <f7-list-input label="Attribute" type="select" outline floating-label>
              <option value selected>Attribute</option>
              <option value="10pcs">10pcs</option>
              <option value="20pcs">20pcs</option>
              <option value="10pcs">Red</option>
              <option value="20pcs">Green</option>
            </f7-list-input>
          </f7-list>
        </f7-row>
        <f7-row no-gap>
          <f7-link>
            <f7-stepper></f7-stepper>
          </f7-link>
        </f7-row>
      </f7-card-footer>
    </f7-card>
    <f7-card class="demo-facebook-card">
      <f7-card-header class="no-border">
        <div class="demo-facebook-avatar">
          <img
            src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg"
            width="37"
            height="34"
          />
        </div>
        <div class="demo-facebook-name">SKU:1000 || Product Title John Doe</div>
        <div class="demo-facebook-name">Tk.1600</div>
      </f7-card-header>
      <f7-card-footer :padding="true" class="no-border">
        <f7-row no-gap>
          <f7-list>
            <f7-list-input label="Attribute" type="select" outline floating-label>
              <option value selected>Attribute</option>
              <option value="10pcs">10pcs</option>
              <option value="20pcs">20pcs</option>
              <option value="10pcs">Red</option>
              <option value="20pcs">Green</option>
            </f7-list-input>
          </f7-list>
        </f7-row>
        <f7-row no-gap>
          <f7-link>
            <f7-stepper></f7-stepper>
          </f7-link>
        </f7-row>
      </f7-card-footer>
    </f7-card>
    <f7-card class="demo-facebook-card">
      <f7-card-header class="no-border">
        <div class="demo-facebook-avatar">
          <img
            src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg"
            width="37"
            height="34"
          />
        </div>
        <div class="demo-facebook-name">SKU:1000 || Product Title John Doe Product Product Title</div>
        <div class="demo-facebook-name">Tk.1600</div>
      </f7-card-header>
      <f7-card-footer :padding="true" class="no-border">
        <f7-row no-gap>
          <f7-list>
            <f7-list-input label="Attribute" type="select" outline floating-label>
              <option value selected>Attribute</option>
              <option value="10pcs">10pcs</option>
              <option value="20pcs">20pcs</option>
              <option value="10pcs">Red</option>
              <option value="20pcs">Green</option>
            </f7-list-input>
          </f7-list>
        </f7-row>
        <f7-row no-gap>
          <f7-link>
            <f7-stepper></f7-stepper>
          </f7-link>
        </f7-row>
      </f7-card-footer>
    </f7-card>

    <!-- Product Items-----------start -->

    <!-- --------Calculation -------- -->
    <f7-card class="elevation-demo elevation-20">
      <f7-card-header>
        <f7-title>Price Calculation</f7-title>
      </f7-card-header>

      <f7-card-footer :padding="true" class="no-border">
        <f7-list>
          <f7-list-input label="Discount Type" type="select" outline floating-label>
            <option value="10pcs">Coupon</option>
            <option value="20pcs">Instant</option>
            <option value="10pcs">Cash</option>
            <option value="20pcs">sales</option>
          </f7-list-input>

          <f7-list-input label="Extra Charge Tk." type="number" floating-label outline clear-button></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-input label="Discount %" outline floating-label type="number" clear-button></f7-list-input>

          <f7-list-input label="Less Tk." type="number" outline floating-label clear-button></f7-list-input>
        </f7-list>
      </f7-card-footer>
    </f7-card>

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
        Total:&nbsp;
        5000<h4>/= Tk.</h4>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<style>
.demo-facebook-card .demo-facebook-name {
  margin-left: 15px;
  font-size: 15px;
}
</style>
