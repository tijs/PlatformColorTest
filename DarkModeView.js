/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  PlatformColor,
  Button,
} from 'react-native';

const DarkModeView = ({colorScheme}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>View using Platform Colors</Text>
          <Text>
            {colorScheme} and {clicked ? 'clicked' : 'not clicked'}
          </Text>
          <Button
            onPress={() => setClicked(!clicked)}
            title="Update view state"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: PlatformColor('@color/white'),
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: PlatformColor('@color/lightGrey'),
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: PlatformColor('@color/nearBlack'),
  },
});

export default DarkModeView;
