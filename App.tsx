import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
// import RootNavigation from './src/navigation';
//Redux
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {ThemeProvider, Button, createTheme} from '@rneui/themed';
import {HomeScreen} from './src/screen'


const theme = createTheme({
  components: {
    Button: {
      titleStyle: {
        color: 'red',
      },
    },
  },
});

console.log("blabla");
// console.log(store);

// const



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
