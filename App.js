import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import BookScreen from './src/BookScreen'
import CartScreen from './src/CartScreen'
import ShoppingCartIcon from './src/ShoppingCartIcon';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';
import Navigationdrawer from './src/utils/Drawermenu';
import ScreenNavigation from './src/utils/ScreensNavigation';

const Stack = createStackNavigator()
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Books'
          component={Navigationdrawer}
          options={{ headerRight: props => <ShoppingCartIcon {...props} /> }}
        />
        <Stack.Screen name='Cart'
          component={Navigationdrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  return (
    <StoreProvider store={store} >
      {/* <MainStackNavigator /> */}
      <Navigationdrawer />
      {/* <ScreenNavigation/> */}


    </StoreProvider>)


}

export default App
