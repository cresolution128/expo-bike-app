import React from "react";;
import { StyleSheet, Text, View } from "react-native";

const PickingDateStepComponent: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.content}>
        DATE SELECTING - 1
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

export default PickingDateStepComponent;