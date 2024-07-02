import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, View, Button, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";


type StepNavigatorProps = {
  onNext: Function,
  onPrev: Function,
  isLast: Boolean,
  isFirst: Boolean
};

const StepNavigator: React.FC<StepNavigatorProps> = ({ onNext, onPrev, isLast, isFirst}) => {
  
  return (
    <View>
      {!isFirst && <TouchableOpacity
        style={styles.navBtn}
        onPress={() => onPrev()}
      >
        <Text>
          Prev
        </Text>
      </TouchableOpacity>
      }
      {!isLast && <TouchableOpacity
        onPress={() => onNext() }
      >
        <Text>
          Next
        </Text>
      </TouchableOpacity>}
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navBtn: {
    paddingVertical: 8,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 2,
    marginHorizontal: 20,
    backgroundColor: ''
  }
});

export default StepNavigator;