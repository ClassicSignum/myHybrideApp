// services
import store from '../js/store';

import HomePage from '../pages/home.vue';
import LoginScreen from '../pages/login-screen-page.vue';
// pos
import PointOfSale from '../pages/pos.vue';
import POSCart from '../pages/pos-cart.vue';
import POScustomerInfo from '../pages/pos-customer-info.vue';
import POSPayment from '../pages/pos-payment.vue';
import Invoice from '../pages/invoice.vue';
import OrderList from '../pages/order-list.vue';
import ProductList from '../pages/product-list.vue';

// report //
import CurrentStock from '../pages/reports/current-stock.vue';
import CustomerLedger from '../pages/reports/customer-ledger.vue';
import CustomerLedgerDetails from '../pages/reports/customer-ledger-details.vue';
import SupplierLedger from '../pages/reports/supplier-ledger.vue';
import AccountBook from '../pages/reports/account-book.vue';
import ChartOfAccountBook from '../pages/reports/chart-of-account.vue';
import JournalBook from '../pages/reports/journal-book.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    // component: HomePage,
    async:function({router,to,resolve}){
      const loggedInUser = localStorage.getItem('loggedInUser');
      const userId = JSON.parse(loggedInUser);
      
      if (store.state.authentication == false && userId==null) {
      
      resolve({component:LoginScreen})
    }
    else{
        resolve({component:HomePage})
      }
    }
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/login-screen-page/',
    component: LoginScreen,
  },
  {
    path: '/pos/',
    component: PointOfSale,
  },
  {
    path: '/pos-cart/',
    component: POSCart,
  },
  {
    path: '/pos-customer-info/',
    component: POScustomerInfo,
  },
  {
    path: '/pos-payment/',
    component: POSPayment,
  },
  {
    path: '/invoice/',
    component: Invoice,
  },
  {
    path: '/current-stock/',
    component: CurrentStock,
  },
  {
    path: '/customer-ledger/',
    component: CustomerLedger,
  },
  {
    path: '/customer-ledger-details/',
    component: CustomerLedgerDetails,
  },
  {
    path: '/supplier-ledger/',
    component: SupplierLedger,
  },
  {
    path: '/account-book/',
    component: AccountBook,
  },
  {
    path: '/chart-of-account/',
    component: ChartOfAccountBook,
  },
  {
    path: '/journal-book/',
    component: JournalBook,
  },
  {
    path: '/order-list/',
    component: OrderList,
  },
  {
    path: '/product-list/',
    component: ProductList,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
