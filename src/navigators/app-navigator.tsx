import {HomeScreen, LoginScreen, RegisterScreen} from '../screen';
// import { TrackingOfflineServiceScreen } from "@/screens/tracking-offline-service/tracking-offline-service-screen"
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {BackButton} from './components';
import {navigationRef, useBackButtonHandler} from './navigation-utilities';
import {getNavScreenOpt, NavigatorParamList, NavList} from './navigator-helper';
// import {BottomSheetPool} from '@/components';

type ListScreenType = {
  name: NavList;
  component: React.ComponentType<object> | (() => JSX.Element);
  options?: NativeStackNavigationOptions;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const whiteHeaderOptions: NativeStackNavigationOptions = {
  headerBackVisible: false,
  headerBackTitleVisible: false,
  headerLeft: () => <BackButton />,
  headerTintColor: 'black',
  headerTitleStyle: {
    // ...typography.content,
    // ...typography.primarySemiBold,
    color: 'black',
  },
};

const darkHeaderOptions: NativeStackNavigationOptions = {
  ...whiteHeaderOptions,
  headerLeft: () => <BackButton iconProps={{color: 'white'}} />,
  headerTintColor: 'white',
  headerTitleStyle: [whiteHeaderOptions.headerTitleStyle, {color: 'white'}],
};

const AppStack = () => {
  const screens: ListScreenType[] = [
    {name: 'dashboard', component: HomeScreen},
    {name: 'login', component: LoginScreen},
    {name: 'register', component: RegisterScreen},
  ];

  return (
    <Stack.Navigator
      initialRouteName={'dashboard'}
      screenOptions={({route}) => getNavScreenOpt(route)}>
      {screens.map(item => {
        return (
          <Stack.Screen
            key={`screen-${item.name}`}
            component={item.component}
            name={item.name}
            options={item.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  useBackButtonHandler(canExit);
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />

      {/* Render Bottom Sheets */}
      {/* <BottomSheetPool /> */}
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['welcome'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
