import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import CategoryPage from './components/CategoryPage';
import SubCategoryPage from './components/SubCategoryPage';
import store from './store/store'


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoryPage} />
          <Stack.Screen name="Subcategory" component={SubCategoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;