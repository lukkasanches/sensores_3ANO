import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movimento from './components/Movimento';
import Pedometro from './components/Pedometro';
import Estilos from './styles/Estilos';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarStyle: Estilos.tabBar 
        }}
      >
        <Tab.Screen 
          name="Movimento" 
          component={Movimento}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="walk-outline" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Contador de Passos" 
          component={Pedometro}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="footsteps-outline" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}