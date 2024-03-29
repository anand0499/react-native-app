import React, { useContext, useState } from 'react';
import { View, Text, StatusBar, } from 'react-native';
import './i18n.js';
import { useTranslation } from 'react-i18next';
import { ThemeContext,ThemeProvider } from './ContextStore/ThemeContext.js';
import CustomButton from './Components/CustomButton.js';
import CustomList from './Components/CustumList.js';
import CustomForm from './Components/CustomForm.js';

const App = () => {
  const {isDarkMode,toggleMode,styles}=useContext(ThemeContext)
  const {t,i18n}=useTranslation()

  const statusBarStyle = isDarkMode ? 'light-content' : 'dark-content';
  const statusBarBackgroundColor = isDarkMode ? '#000000' : '#ffffff';

  const onChangeLanguage=(item)=>{
    i18n.changeLanguage(item.code)
  }

  return (
    <View style={[styles.container]}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackgroundColor} />
      <View style={{flex:1,marginTop:30,marginBottom:30,alignItems:'center'}} >
      <Text style={styles.text}>{t('greeting')}</Text>
      <Text style={[styles.text,{fontSize:20}]} >{t('text')}</Text>
      </View>
      <CustomList style={[styles.text]}  onChangeLanguage={onChangeLanguage} />
      <CustomForm name={t('name')} placeholder={t('placeHolder')} />
      <CustomButton onPress={toggleMode} title={t('toggle_button_text')}/>
    </View>
  );
};


const ThemeApp=()=>{
  return (
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  )
}

export default ThemeApp;


// export default App;
