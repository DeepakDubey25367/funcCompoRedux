import React from 'react';
import { StyleSheet, TouchableOpacity , View,Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function ShoppingCartIcon(props){
    const navigation=useNavigation()
    const cartItems=useSelector(state=>state)
    return(
        <TouchableOpacity
        onPress={()=>navigation.navigate('Cart')}
        style={{marginRight:10}}>
            <View style={styles.itemCountContainer}>
                <Text style={styles.itemCountText}>{cartItems.length}</Text>
            </View>
        <Ionicon name='ios-cart' size={32} color='#101010'/>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
        marginRight:10
    },
    itemCountContainer:{
        backgroundColor:"#FF7D7D",
        borderRadius:15,
        position:'absolute',
        width:30,
        height:30,
        right:22,
        bottom:10,
        alignItems:'center',
        justifyContent: 'center',
        zIndex:2000


    },
    itemCountText: {
        color: 'white',
        fontWeight: 'bold'
      }
})
export default ShoppingCartIcon