// screens/HomeScreen.tsx

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
