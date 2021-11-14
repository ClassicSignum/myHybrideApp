<template>
  <f7-page>
    <f7-navbar title="Customer Info" back-link="Back"></f7-navbar>

    <f7-card>
      <f7-card-content :padding="true" class="no-border">
        <f7-list>
          <!-- -----Sales person------ -->
          <f7-list-input
            label="Sales Person Name*"
            type="select"
            outline
            floating-label
            required
            validate
          >
            <option value="Karim">Karim</option>
            <option value="Almas">Almas</option>
            <option value="Kabir">Kabir</option>
            <option value="Green">Green</option>
          </f7-list-input>
          <!-- ------------User-------- -->
          <f7-list-input
            label="Logged User"
            type="text"
            value="ICT layer"
            outline
            floating-label
            clear-button
          ></f7-list-input>
          <!-- date1 -->
          <f7-list-input
            label="Selling Date*"
            type="datepicker"
            :value="Date('M dd, yyyy')"
            :placeholder="Date('M dd, yyyy')"
            floating-label
            required
            validate
            outline
            readonly
            :calendar-params="{ dateFormat: 'M dd, yyyy' }"
          ></f7-list-input>
          <!-- date2 -->
          <f7-list-input
            label="Delivery Date*"
            type="datepicker"
            value="Date('M dd, yyyy')"
            :placeholder="Date('M dd, yyyy')"
            floating-label
            required
            validate
            outline
            readonly
            :calendar-params="{ dateFormat: 'M dd, yyyy' }"
          ></f7-list-input>
          <!-- ------customer name---- -->
          <f7-list-input
            label="Customer Name*"
            type="text"
            floating-label
            required
            validate
            outline
          ></f7-list-input>
          <!-- ------number---- -->
          <f7-list-input label="Phone Number*" type="tel" floating-label required validate outline></f7-list-input>
          <!-- ------Email -->
          <f7-list-input label="E-mail" type="email" floating-label validate outline></f7-list-input>
          <!-- ----area--- -->
          <f7-list-input label="Area*" type="select" outline floating-label>
            <option value="Mirpur">Mirpur</option>
            <option value="Mirpur">Mirpur</option>
            <option value="Banani">Banani</option>
            <option value="Dhanmondhi">Dhanmondhi</option>
          </f7-list-input>
          <!-- ------House name/No---- -->
          <f7-list-input label="House Name/No" type="text" floating-label outline></f7-list-input>

          <!-- ------Road name/No---- -->
          <f7-list-input label="Road Name/No" type="text" floating-label outline></f7-list-input>
          <div class="item-content">
            <div class="item-media">
              <i class="icon icon-form-calendar"></i>
            </div>
            <div class="item-inner">
              <div class="item-input">
                <input type="date" placeholder="Birth day" value="Date('M, dd, yyyy')" />
              </div>
            </div>
          </div>
        </f7-list>
      </f7-card-content>
      <small class="margin-left">Note: Asterisk items are required!</small>
    </f7-card>

    <!-- -------------Footer------------ -->
    <f7-toolbar bottom>
      <f7-link
        href="/pos-payment/"
        tab-link-active
        icon-ios="f7:chevron_right_2"
        icon-aurora="f7:chevron_right_2"
        icon-md="material:chevron_right_2"
        text="Payment"
      ></f7-link>
      <f7-link>
        Total:&nbsp;
        5000<h4>/= Tk.</h4>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>
