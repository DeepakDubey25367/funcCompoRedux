import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingCartIcon from "../ShoppingCartIcon";
import Navigationdrawer from "./Drawermenu";

const stack = createStackNavigator();

const ScreenNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name="Books"
                    component={Navigationdrawer}
                    options={{ headerShown: false }}
                />

                <stack.Screen
                    name="Cart"
                    component={Navigationdrawer} />
            </stack.Navigator>
        </NavigationContainer>
    )
}
export default ScreenNavigation;