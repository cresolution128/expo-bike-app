import React from "react";;
import { StyleSheet, Text, View } from "react-native";

const PickingLevelStepComponent: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.content}>
        LEVEL SELECTING - 3
      </Text>
    </View>
  )
} 

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    fontSize: 25
  }
})

export default PickingLevelStepComponent;