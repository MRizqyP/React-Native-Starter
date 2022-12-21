import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
export type DashboardParamList = {
  Beranda: undefined;
  Mobil: undefined;
  Darurat: undefined;
  Pesanan: undefined;
  Akun: undefined;
};

export type NavigatorParamList = {
  tutorial: undefined;
  login: undefined;
  forgot_password: undefined;
  forgot_password_success: undefined;
  register: undefined;
  register_success: undefined;
  news: undefined;
  'single-news': undefined;
  'emergency-call': undefined;
  'chat-daisy': undefined;
  'about-app': undefined;
  'privacy-policy': undefined;
  'contact-us': undefined;
  'about-astra-daihatsu': undefined;
  'terms-and-conditions': undefined;
  faq: undefined;
  'my-profile': undefined;
  dashboard: NavigatorScreenParams<DashboardParamList>;
  // "service-gr-status": undefined
  testdriveBook: undefined;
  testdriveStatus: undefined;
  testdriveDetail: {orderNumber?: string};
  // Below is "Dashboard" children
  beranda: undefined;
  pesanan: {selectedType?: string};
  // -------
  pilihan_servis: undefined;
  general_repair: undefined;
  servis: undefined;
  after_booking: {orderNumber?: string; status?: string};
  katalog: undefined;
  katalog_mobil: undefined;
  search_bar_screen: undefined;
  car_detail: {description: string};
  CarSpec: undefined;
  DetailPembiayaan: undefined;
  bandingkan_mobil: undefined;
  penawaran_mobil: undefined;
  ajukan_penawaran_mobil: undefined;
  response_submit_penawaran_screen: {isSuccess: boolean};
  status_penawaran: undefined;
  map_screen: undefined;
  ImageViewer: {images: string[]};
  NotificationsScreen: undefined;
  DetailNotificationsScreen: {
    type: string;
    title: string;
    desc: string;
  };
  tambah_mobil_saya: undefined;
  tambah_mobil_saya_success: undefined;
  validasi_mobil: undefined;
  list_mobil_saya: undefined;
  ubah_detail_mobil: undefined;
  tracking_offline_service: undefined;

  // Promo
  promo_list_screen: undefined;
  //   promo_detail_screen: {promo: PromotionSnapshotOut};
  orderDetail: {orderNumber?: string; type?: string};
  penawaran_promo_screen: undefined;
  penawaran_promo_success_screen: undefined;
  penawaran_promo_failed_screen: undefined;
  ourOutlet: undefined;
  //   outletDetail: {branchData: BranchInformationSnapshotIn};
};

export type NavList = keyof Partial<NavigatorParamList>;
export type NavigationProps = NativeStackNavigationProp<NewNavList>;
type NewNavList = Partial<NavigatorParamList>;

const getRouteName = (route: RouteProp<NewNavList, NavList>) => {
  const routeName = route.name;
  switch (routeName) {
    case 'ourOutlet':
      return 'Outlet Kami';
    default:
      return `${routeName}`;
  }
};

const getIconMenu = (route: RouteProp<NewNavList, NavList>) => {
  const routeName = route.name;
  switch (routeName) {
    default:
      return 'google';
  }
};

export const getRoute = (route: RouteProp<NewNavList, NavList>) => {
  const routeName = route.name;
  const secondaryRoute = [
    'pilihan_servis',
    'servis',
    'pesanan',
    'search_bar_screen',
    'ourOutlet',
    'orderDetail',
  ] as NavList[];
  const screensWithoutHeader = [
    'tutorial',
    'login',
    'register',
    'register_success',
    'forgot_password',
    'forgot_password_success',
    'news',
    'single-news',
    'emergency-call',
    'chat-daisy',
    'dashboard',
    'about-app',
    'privacy-policy',
    'contact-us',
    'about-astra-daihatsu',
    'terms-and-conditions',
    'faq',
    'my-profile',
    // "service-gr-status",
    'testdriveBook',
    'testdriveStatus',
    'testdriveDetail',
    'general_repair',
    'after_booking',
    'katalog',
    'bandingkan_mobil',
    // "ajukan_penawaran_mobil",
    'response_submit_penawaran_screen',
    'DetailNotificationsScreen',
    'tambah_mobil_saya_success',
    'validasi_mobil',
    'list_mobil_saya',
    'map_screen',
    'car_detail',
    'promo_list_screen',
    'promo_detail_screen',
    'penawaran_promo_screen',
    'penawaran_promo_success_screen',
    'penawaran_promo_failed_screen',
  ] as NavList[];

  const icon = getIconMenu(route);
  const name = getRouteName(route);

  // let hasHeader = true as boolean
  // let barColor = color.white as ColorValue
  // let barStyle = "dark-content" as StatusBarStyle
  // let tintColor = color.black

  let hasHeader = true as boolean;
  let barColor = 'black';
  let barStyle = 'light-content';
  let tintColor = 'white';
  let headerTitleColor = 'white';

  if (secondaryRoute.includes(routeName)) {
    barColor = 'white';
    barStyle = 'dark-content';
    tintColor = 'black';
    headerTitleColor = 'black';
  }
  if (screensWithoutHeader.includes(routeName)) hasHeader = false;

  return {
    hasHeader,
    barColor,
    barStyle,
    tintColor,
    icon,
    name,
    headerTitleColor,
  };
};

export const getNavScreenOpt = (route: RouteProp<NewNavList, NavList>) => {
  const screensWithCustomHeaderOption: NavList[] = [
    'pilihan_servis',
    'servis',
    'katalog_mobil',
    'CarSpec',
    'bandingkan_mobil',
    'penawaran_mobil',
    'status_penawaran',
    'search_bar_screen',
    'ImageViewer',
    'NotificationsScreen',
    'tambah_mobil_saya',
    'ubah_detail_mobil',
    'DetailPembiayaan',
    'tracking_offline_service',
  ];

  if (screensWithCustomHeaderOption.includes(route.name)) {
    return {};
  }

  const getRouteOpt = getRoute(route);
  return {
    headerTintColor: getRouteOpt.tintColor,
    headerShown: getRouteOpt.hasHeader,
    headerBackTitle: '',
    headerTitle: getRouteOpt.name,
    headerTitleStyle: {
      // ...typography.primarySemiBold,
      color: getRouteOpt.headerTitleColor,
    },
    headerStyle: {backgroundColor: getRouteOpt.barColor},
  } as NativeStackNavigationOptions;
};
