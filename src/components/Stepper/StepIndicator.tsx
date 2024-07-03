import React from "react"
import { StyleSheet, Text, View } from "react-native"
import color from "../../utils/color"


type StepIndicatorType = {
  checked: number,
  title: string,
  stepInfo: string[]
}

const StepIndicator: React.FC<StepIndicatorType> = ({checked: currentIndex, stepInfo: steps, title}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.stepperContainer}>
        {steps.map((step, index) => (
          <View key={index} style={[index == steps.length - 1 ? styles.lastStepItem : styles.stepItem]}>
            <View
              style={[
                styles.stepCircle,
                currentIndex === index && styles.currentStep,
                index < currentIndex && styles.completedStep,
              ]}
            >
              {index < currentIndex ? (
                <Text style={styles.stepCheckMark}>√</Text>
              ) : (
                <Text style={[styles.stepDot, currentIndex === index && styles.currentStepDot]}></Text>
              )}
            </View>
            {index < steps.length - 1 && <View style={styles.line} />}
          </View>
        ))}
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',    
    width: '100%'
  },
  stepItem: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  lastStepItem: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  stepCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.primary,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedStep: {
    backgroundColor: color.primary,
  },
  stepCheckMark: {
    color: color.textWhite,
    fontSize: 12,
  },
  stepDot: {
    width: 0,
    height: 0,
    borderRadius: 4,
    backgroundColor: '#999',
  },
  currentStep: {
    backgroundColor: '#fff',
    borderColor: color.primary,
  },
  currentStepDot: {
    width: 4,
    height: 4,
    backgroundColor: color.primary,
  },
  line: {
    height: 2,
    backgroundColor: '#ddd',
    flex: 1,
  },
});

export default StepIndicator;