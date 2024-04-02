import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import Store from '../screens/Store';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Navbar from '../components/Navbar';
import {colors} from '../constants/colors';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="home" size={24} color="black" />
          ),
          header: () => <Navbar />,
          tabBarLabelStyle: {color: colors.textBlack},
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="shopping-cart" size={24} color="black" />
          ),
          tabBarLabelStyle: {color: colors.textBlack},
          tabBarLabel: 'Carrito'
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="heart" size={24} color="black" />
          ),
          tabBarLabelStyle: {color: colors.textBlack},
          tabBarLabel: 'Favoritos'
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="shopping-bag" size={24} color="black" />
          ),
          tabBarLabelStyle: {color: colors.textBlack},
          tabBarLabel: 'Tienda'
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
