import React from "react";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, useDrawerProgress } from "@react-navigation/drawer";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
//import Animated from "react-native-reanimated";
import FontAwesome from 'react-native-vector-icons/FontAwesome'



export default class DrawerComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            manuItem: [
                { label: "Home", action: 'Home', icon: 'institution' },
                { label: "Books", action: 'Books', icon: 'vimeo' },
                { label: "Cart", action: 'cart', icon: 'usb' },
                { label: "Help", action: 'Help', icon: 'address-card' }
            ],

        }

        console.log(props)
        // const progress = useDrawerProgress();
        // const translateX = Animated.interpolate(progress, {
        //     inputRange: [0, 1],
        //     outputRange: [-100, 0],
        // });

    }

   

   
    render() {
        return (
            
               
                    <DrawerContentScrollView>
                        <View style={styles.container}>
                        <Image style={styles.imgsty} source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png' }} />
                        </View>
                        <DrawerItemList {...this.props} />
                        {/* <DrawerItem
               label="Help"
               onPress={() => Linking.openURL('https://mywebsite.com/help')}
               /> */}

                        {
                            this.state.manuItem.map((item,index) => (
                                <DrawerItem key={index}
                                    label={() => this.mylabel(item.label)}
                                    onPress={item.action}
                                    icon={() => <FontAwesome name={item.icon} size={18} color="red" />}

                                />
                            ))
                        }

                    </DrawerContentScrollView>
              
            
        )
    }

    mylabel(label) {
        return (
            <Text style={styles.txtlabel}>
                {label}
            </Text>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imgsty: {
        resizeMode: 'cover',
        width: 80,
        height: 80,
    },
    txtlabel: {
        fontSize: 20,
        color: 'red',
        fontWeight: '400'
    }

})