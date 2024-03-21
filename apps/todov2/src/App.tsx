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
import { ChangeLanguageScreen } from '@to-do-shared-screens';
import { Colors } from './styles';
i18n 

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = ()=>{
  const {t} = useTranslation();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' 
          screenOptions={
            {
              headerStyle: {backgroundColor: Colors.BG_PRIMARY}, 
              headerShadowVisible: false,
              headerTitleStyle: {fontWeight: "300"}
            }
          }>
          <Stack.Screen name="Home" component={HomeScreen} options={{title: "TO DO V2", contentStyle: {padding: 45, backgroundColor: Colors.BG_PRIMARY} }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{title: t("detailsScreen"), contentStyle: {backgroundColor: Colors.BG_PRIMARY}}} />
          <Stack.Screen name="ChangeLanguage" component={ChangeLanguageScreen} options={{title: t("configurationLanguageScreen"), contentStyle: {backgroundColor: Colors.BG_PRIMARY}}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;