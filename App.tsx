// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Wallet"
            component={WalletScreen}
            options={{
              headerTransparent: true,
              headerTitleAlign: 'center',
              title: '',

              headerTintColor: '#102D6F',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
