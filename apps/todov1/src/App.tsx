/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from '@to-do-redux';
import { RootStackParamList } from './App.types';
import i18n from '@to-do-translations';
import { useTranslation } from 'react-i18next';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen/DetailsScreen';
import ChangeLanguageScreen from './screens/ChangeLanguagueScreen/ChangeLanguageScreen';
i18n 

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App: React.FunctionComponent = () => {

  const {t} = useTranslation();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{title: "TO DO V1" }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{title: "Details"}} />
          <Stack.Screen name="ChangeLanguage" component={ChangeLanguageScreen} options={{title: t("configurationLanguageScreen")}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
