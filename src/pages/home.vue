<template>
  <f7-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
          panel-open="left"
        ></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>MIS Layer</f7-nav-title>
      <f7-nav-right>
        <f7-link
          icon-ios="f7:chart_bar_alt_fill"
          icon-aurora="f7:chart_bar_alt_fill"
          icon-md="f7:chart_bar_alt_fill"
          panel-open="right"
        ></f7-link>
      </f7-nav-right>
      <f7-nav-title-large >{{getUserName}}</f7-nav-title-large>
    </f7-navbar>
    
    <!-- --------Start Content Area---------- -->
   <f7-card expandable>
        <f7-card-content :padding="false">
          <div
            :style="{
              background: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg) no-repeat center bottom',
              'background-size': 'cover',
              height: '240px',
            }"
          ></div>
          <f7-link
            card-close
            color="white"
            class="card-opened-fade-in"
            :style="{ position: 'absolute', right: '15px', top: '15px' }"
            icon-f7="xmark_circle_fill"
          ></f7-link>
          <f7-card-header :style="{ height: '60px' }">ICT Layer, Bangladesh</f7-card-header>
          <div class="card-content-padding">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus rhoncus cursus.
              Etiam lorem est, consectetur vitae tempor a, volutpat eget purus. Duis urna lectus,
              vehicula at quam id, sodales dapibus turpis. Suspendisse potenti. Proin condimentum
              luctus nulla, et rhoncus ante rutrum eu. Maecenas ut tincidunt diam. Vestibulum
              lacinia dui ligula, sit amet pulvinar nisl blandit luctus. Vestibulum aliquam ligula
              nulla, tincidunt rhoncus tellus interdum at. Phasellus mollis ipsum at mollis
              tristique. Maecenas sit amet tempus justo. Duis dolor elit, mollis quis viverra quis,
              vehicula eu ante. Integer a molestie risus. Vestibulum eu sollicitudin massa, sit amet
              dictum sem. Aliquam nisi tellus, maximus eget placerat in, porta vel lorem. Aenean
              tempus sodales nisl in cursus. Curabitur tincidunt turpis in nisl ornare euismod eget
              at libero.
            </p>
            <p>
              Suspendisse ligula eros, congue in nulla pellentesque, imperdiet blandit sapien. Morbi
              nisi sem, efficitur a rutrum porttitor, feugiat vel enim. Fusce eget vehicula odio, et
              luctus neque. Donec mattis a nulla laoreet commodo. Integer eget hendrerit augue, vel
              porta libero. Morbi imperdiet, eros at ultricies rutrum, eros urna auctor enim, eget
              laoreet massa diam vitae lorem. Proin eget urna ultrices, semper ligula aliquam,
              dignissim eros. Donec vitae augue eu sapien tristique elementum a nec nulla. Aliquam
              erat volutpat. Curabitur condimentum, metus blandit lobortis fringilla, enim mauris
              venenatis neque, et venenatis lorem urna ut justo. Maecenas neque enim, congue ac
              tempor quis, tincidunt ut mi. Donec venenatis ante non consequat molestie. Quisque ut
              rhoncus ligula. Vestibulum sodales maximus justo sit amet ornare. Nullam pulvinar
              eleifend nisi sit amet molestie.
            </p>
            <p>
              <f7-button fill round large card-close>Close</f7-button>
            </p>
          </div>
        </f7-card-content>
      </f7-card>
    <!-- --------End Content Area---------- -->

    
  </f7-page>
</template>
<script>
import store from '../js/store'
export default {
  data(){
    return{
      showPreloader:'',
      loadMore:''

    }
  },
  computed:{
      getUserName(){
        const username = store.state.loggedInUser['username']
        return username
      }
  }

}
</script>
  
