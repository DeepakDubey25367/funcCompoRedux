import React, { useEffect } from 'react';
import {View,Text, StyleSheet, FlatList, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from './redux/cartItem';
import { books } from './utils/Data';


function Separator(){
    return <View style={{borderBottomWidth:1,borderBottomColor:'#a9a9a9'}} ></View>
}


// useEffect(()=>{
    
// },[])

//  addItemtoCart=(item)=>{
//     dispatch({type:ADD_TO_CART,payload:item});
// }




function BookScreen(){
    const dispatch=useDispatch(); 
  const addItemtoCart=(item)=>{
    dispatch({type:ADD_TO_CART,payload:item});
}
    return(
        <View style={styles.container}>
            <FlatList
            data={books}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={()=>Separator()}
            renderItem={(item)=>renderItems(item)}
            />
           
        </View>
    )

    function renderItems({item}){
        return(
    <View style={styles.bookItemContainer}>
        <Image source={{uri:item.imgUrl}} style={styles.thumbnail}/>
    
        <View style={styles.bookItemMetaContainer}>
            <Text style={styles.textTitle} numberOfLines={1}>
                {item.name}
            </Text>
            <Text style={styles.textAuthor}>by {item.author}</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={()=>addItemtoCart(item)}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Add +</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
        )
    
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    bookItemContainer:{
        flexDirection:'row',
        padding:10
    },
    thumbnail: {
        width: 100,
        height: 150
      },
      button: {
        borderRadius: 8,
        backgroundColor: '#24a0ed',
        padding: 5
      },
      bookItemMetaContainer:{
        padding: 5,
        paddingLeft: 10
      },
      buttonText: {
        fontSize: 22,
        color: '#fff'
      },
      textTitle:{
        fontSize: 22,
        fontWeight: '400'
      },
      textAuthor:{
        fontSize: 18,
        fontWeight: '200'   
      },
      buttonContainer:{
        position: 'absolute',
        top: 110,
        left: 10
      }
})
export default BookScreen