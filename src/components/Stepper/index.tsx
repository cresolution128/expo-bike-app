import { useNavigation } from "@react-navigation/native"
import React, { Suspense, lazy, useMemo, useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import StepIndicator from "./StepIndicator"
import StepNavigator from "./StepNavigator"
// import PickingLevelStepComponent from "../Steps/PickingLevelStep"
// PickingLevelStepComponent
const PickingDateStepComponent = lazy(() => import('../Steps/PickingDateStep'));
const PickingStyleStepComponent = lazy(() => import('../Steps/PickingStyleStep'));
const PickingLevelStepComponent = lazy(() => import('../Steps/PickingLevelStep'));
const PickingSizeStepComponent = lazy(() => import('../Steps/PickingSizeStep'));
const PickingModelStepComponent = lazy(() => import('../Steps/PickingModelStep'));

const Stepper: React.FC = (props) => {
  const [title, setTitle] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const stepInfo = [
    'first',
    'first',
    'first',
    'first',
    'first',
  ]
  const steps = useMemo(() => [
    <PickingDateStepComponent/>,
    <PickingStyleStepComponent/>,
    <PickingLevelStepComponent/>,
    <PickingSizeStepComponent/>,
    <PickingModelStepComponent/>
  ], []);


  const onNext = () => {
    setCurrentStep((prev: number) => {
      if(prev >= steps.length - 1) {
        // props.onFinish();
        return prev;
      }
      else return prev + 1;
    })
  }
  const onPrev = () => {
    setCurrentStep((prev) => {
      if(prev <= 0) {
        return 0;
      }
      else return prev - 1;
    })
  }

  const onFinish = () => {

  }

  const isFirst = useMemo(() => {
    return currentStep == 0;
  }, [currentStep]);

  const isLast = useMemo(() => {
    return currentStep == steps.length - 1;
  }, [currentStep])

  return (
    <>
      <View style={styles.container}>
        <StepIndicator checked={currentStep} title={title} stepInfo={stepInfo}/>
        <View style={styles.stepperBody}>

          <Suspense fallback={<Text>....loading</Text>}>
            {steps[currentStep]}
          </Suspense>
        </View>
        <StepNavigator onNext={onNext} onPrev={onPrev} isFirst={isFirst} isLast={isLast} />
      </View>
    </>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  stepperBody: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    margin: 'auto'
  }
})

export default Stepper;