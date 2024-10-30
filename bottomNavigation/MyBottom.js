import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Danhmuc from '../pages/Danhmuc';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Danhmuc"  
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',  
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Danhmuc"
        component={Danhmuc}
        options={{
          headerShown: false,
          tabBarLabel: 'Danh Mục',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          tabBarLabel: 'Tài Khoản',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          // Bạn có thể kích hoạt badge nếu muốn
          // tabBarBadge: 1,
        }}
      />
      {/* 
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shield-account-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          tabBarLabel: 'Register',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shield-account-outline" color={color} size={size} />
          ),
        }}
      />
      */}
    </Tab.Navigator>
  );
}

export default MyTabs;
