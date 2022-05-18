import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'

import News from './src/screens/News'
import ShowNews from './src/screens/ShowNews'
import Info from './src/screens/Info'
// const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="News" component={News} />
      <HomeStack.Screen name="ShowNews" component={ShowNews} />
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
