import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './page/Home';
import Translation from './page/Translation';
import Tutorials from './page/Tutorials';
import About_us from './page/About_us';
import OnBoarding from './page/OnBoarding';

const Stack = createStackNavigator();

const Loading = () => {
  <View>
      <ActivityIndicator size="large" />
  </View>
}

export default function App() {

  const [Loading, setLoading] = useState(true);
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false);

  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnBoarding");

      if (value !== null) {
        setViewedOnBoarding(true)
      }
    } catch(err) {
      console.log("Error @checkOnBoarding; ", err)
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    checkOnBoarding();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{
          headerStyle: {
            shadowColor: 'black', // Define a cor da sombra
            shadowOpacity: 0.3, // Define a opacidade da sombra
            shadowRadius: 5, // Define o raio da sombra
            shadowOffset: { width: 0, height: 2 },
            backgroundColor: '#3889F2', // Define a cor de fundo da barra de navegação
          },
          headerTintColor: 'white', // Define a cor do texto na barra de navegação
          headerTitleStyle: { display: 'none' }, // Oculta o título da página, // Oculta o título da página
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} options={{headerLeft: null}}/>
        <Stack.Screen name="Translation" component={Translation} />
        <Stack.Screen name="Tutorials" component={Tutorials} />
        <Stack.Screen name="About_us" component={About_us} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});