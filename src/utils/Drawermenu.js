import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BookScreen from "../BookScreen";
import CartScreen from "../CartScreen";
import ShoppingCartIcon from "../ShoppingCartIcon";
import DrawerComponent from "./DrawerComponent";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="Books"
            drawerContent={(props)=><DrawerComponent {...props}/>
            }
            
            >
            <Drawer.Screen name="Books" component={BookScreen} options={{ headerRight: props => <ShoppingCartIcon {...props} /> }} />
            <Drawer.Screen name="Cart" component={CartScreen} />

        </Drawer.Navigator>
    )

}


function Navigationdrawer() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )

}

export default Navigationdrawer;