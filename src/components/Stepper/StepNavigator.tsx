import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, View, Button, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import color from "../../utils/color";


type StepNavigatorProps = {
  onNext: Function,
  onPrev: Function,
  isLast: Boolean,
  isFirst: Boolean
};

const StepNavigator: React.FC<StepNavigatorProps> = ({ onNext, onPrev, isLast, isFirst}) => {
  
  return (
    <View style={styles.container}>
      {!isFirst && <TouchableOpacity
        style={[styles.navBtn, styles.prevBtn]}
        onPress={() => onPrev()}
      >
        <Text style={styles.navBtnText}>
          Prev
        </Text>
      </TouchableOpacity>
      }
      <View style={styles.spacer}/>
       <TouchableOpacity
        style={[styles.navBtn, styles.nextBtn]}
        onPress={() => onNext() }
      >
        <Text style={styles.navBtnText}>
          {isLast ? 'Finish' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    paddingVertical: 27.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 9 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navBtn: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    borderRadius: 15,
    borderStyle: 'solid',
    marginHorizontal: 20,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensures children do not overflow the button's border
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
    width: 153,
    height: 51,
  },
  prevBtn: {
    alignSelf: 'flex-start'
  },
  nextBtn: {
    alignSelf: 'flex-end'
  },
  navBtnText: {
    fontSize: 20,
    color: color.textWhite
  },
  spacer: {
    flexGrow: 1
  }
});

export default StepNavigator;