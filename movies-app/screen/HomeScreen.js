import { StyleSheet, Text, View,Image,Platform,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native'
import React from 'react'


const movies=[{
    "title":"Spider-Man: Far From Home",
    "Description":"Perter Parker Europe with his friends",
    "imgUrl":"https://picsum.photos/600/600",
    "category":{
        "title":"action"
    }
}]

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
     <FlatList
        keyExtractor={(item, index)=>index.toString}
        data={movies}
        numColumns={2}
        contentContainerStyle={styles.scrollContent}
        renderItem={({item, index})=><Text>{item.title}</Text>}
     />
    </View>
  )
}


const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:"#fff"
   },
   scrollContent:{
    paddingTop:50,
   }
})

export default HomeScreen;

