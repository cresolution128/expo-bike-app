import React from "react"
import { Text, View } from "react-native"
import AppNavigator from "../navigation/AppNavigator"
import { NavigationContainer, useNavigationState } from "@react-navigation/native"


const Layout: React.FC = () => {
  const routeName = useNavigationState(state => state? state.routes[state.index].name : 'Home');

  return (
    <>
      <AppNavigator />
        {routeName == 'Home' && <View>
          <Text>This is footer</Text>
        </View>}
    </>
  )
}

export default Layout;