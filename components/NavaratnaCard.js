import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NavaratnaCard = ({ item }) => {
  
  return (
    <View>
      
     
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
      
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.hindiName}>{item.hindiName}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 3,
    width: 120,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,

    paddingTop: 40, 
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    
    
  },
  imageContainer: {
    position: 'absolute',
    top: -30, 
    width:80,
    height: 80,
    borderRadius: 60,
    
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10, 
  },
  name: {
    fontSize: 14,
    fontWeight: 'medium',
    marginTop: 2,
    textAlign: 'center',
    color: '#000000',
  },
  hindiName: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});

export default NavaratnaCard;
