import { useNavigation } from "@react-navigation/native"
import React, { Suspense, lazy, useMemo, useState } from "react"
import { Text, View } from "react-native"
import StepIndicator from "./StepIndicator"
import StepNavigator from "./StepNavigator"

const PickingDateStep = lazy(() => import('../Steps/PickingDateStep'));
const PickingStyleStep = lazy(() => import('../Steps/PickingStyleStep'));



const Stepper: React.FC = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const stepInfo = [
    'first',
    'second',
  ]
  const steps = [
    <PickingDateStep/>,
    <PickingStyleStep/>
  ]


  const onNext = () => {
    setCurrentStep((prev: number) => {
      if(prev >= steps.length - 1) {
        return prev;
      }
      else return prev + 1;
    })


  }
  const onPrev = () => {
    setCurrentStep((prev) => {
      if(prev <= 0) {
        return prev;
      }
      else return prev - 1;
    })
  }

  const isFirst = useMemo(() => {
    if(currentStep == 0) return true;
    else return false;
  }, [currentStep]);

  const isLast = useMemo(() => {
    if(currentStep == steps.length - 1) return true;
    else return false;
  }, [currentStep])

  return (
    <>
      <View>
        <StepIndicator checked={currentStep} title={title} stepInfo={stepInfo}/>
        <Suspense fallback={<Text>....loading</Text>}>
          {steps[currentStep]}
        </Suspense>
        <StepNavigator onNext={onNext} onPrev={onPrev} isFirst={isFirst} isLast={isLast} />
      </View>
    </>
  )
  
}

export default Stepper;