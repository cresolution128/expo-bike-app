import React from "react";;
import { StyleSheet, Text, View } from "react-native";

const PickingStyleStepComponent: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.content}>
        STYLE SELECTING - 2
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

export default PickingStyleStepComponent;