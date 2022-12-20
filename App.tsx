import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
// import RootNavigation from './src/navigation';
//Redux
// import {Provider} from 'react-redux';
// import {store} from './src/redux/store';
import {ThemeProvider, Button, createTheme} from '@rneui/themed';

const theme = createTheme({
  components: {
    Button: {
      titleStyle: {
        color: 'red',
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text>Testing</Text>
    </ThemeProvider>
  );
};

export default App;
