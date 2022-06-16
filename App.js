import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routes from './routes'
import BooksScreen from './screens/Books';
import UserScreen from './screens/User';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = {routes.Books} component = {BooksScreen}/>
        <Tab.Screen name = {routes.User} component = {UserScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}