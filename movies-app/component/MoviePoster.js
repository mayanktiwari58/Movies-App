import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React from "react";
  
  
  const { width, height } = Dimensions.get('window');
  
  const cols = 2,
    rows = 2;
  
  const MoviePoster = (props) => {
    const {
      movie,
      movie: { title, category, imgUrl },
      onPress,
    } = props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPress && onPress}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imgUrl }} />
         
        </View>
        <Text style={styles.title}>{title}</Text>
          <Text style={styles.genre}>{category.title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      marginBottom: 10,
      height: (height - 20 - 20) / rows - 10,
      width: (width - 10) / cols - 10,
    },
    imageContainer: {
      flex: 1,
    },
    title: {
      fontSize: 14,
      marginTop: 4,
    },
    genre: {
      color: "#BBBBBB",
      fontSize: 12,
      lineHeight: 14,
    },
    image: {
      borderRadius:10,
      ...StyleSheet.absoluteFillObject,
    },
  });
  
  export default MoviePoster;
  
  