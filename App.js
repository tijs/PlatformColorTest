/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Appearance,
  Button,
} from 'react-native';

import DarkModeView from './DarkModeView';

const App: () => React$Node = () => {
  const colorScheme = Appearance.getColorScheme();

  const [darkMode, setDarkMode] = useState(null);
  const [showView, setView] = useState(true);

  useEffect(() => {
    Appearance.addChangeListener(_handleAppStateChange);

    return () => {
      Appearance.removeChangeListener(_handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextDarkModeState) => {
    console.log('nextDarkModeState', nextDarkModeState);
    setDarkMode(nextDarkModeState);
  };

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.appContainer}>
          <Text>App Container</Text>
          <Text>Darkmode state = {darkMode}</Text>
          <Button
            onPress={() => setView(!showView)}
            title="toggle dark mode view"
          />
          {showView && <DarkModeView colorScheme={colorScheme} />}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'yellow',
  },
});

export default App;
