import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './bottomNavigation/MyBottom'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Helmet from './home/Helmet';
import Nam from './home/Nam';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Helmet" component={Helmet} />
        <Stack.Screen name="Nam" component={Nam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
