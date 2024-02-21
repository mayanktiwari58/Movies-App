import { StyleSheet, Text, View,Image,Platform,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native'
import React from 'react'
import MoviePoster from '../component/MoviePoster'


const movies=[{
    "title":"Spider-Man: Far From Home",
    "Description":"Perter Parker Europe with his friends",
    "imgUrl":"https://picsum.photos/600/600",
    "category":{
        "title":"Action"
    }
}]

const HomeScreen = (props) => {
    const {navigation}=props;
  return (
    <View style={styles.container}>
     <FlatList
        keyExtractor={(item, index)=>index.toString}
        data={movies}
        numColumns={2}
        contentContainerStyle={styles.scrollContent}
        renderItem={({item, index})=>(
            <MoviePoster
                movie={item}
                onPress={()=>navigation.navigate('Detail',{movie:item})}
            />
        )}
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
   paddingRight:10,
  
   }
})

export default HomeScreen;

