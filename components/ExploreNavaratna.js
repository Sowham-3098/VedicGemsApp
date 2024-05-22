import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NavaratnaCard from './NavaratnaCard'; // Import the NavaratnaCard component
const navaratnas = [
    { name: 'Diamond', image: require('../assets/images/diamond.png'), hindiName: 'Heera' },
    { name: 'Blue Sapphire', image: require('../assets/images/bluesapphire.png'), hindiName: 'Neelam' },
    { name: 'Ruby', image: require('../assets/images/ruby.png'), hindiName: 'Manikya' },
    { name: 'Yellow Sapphire', image: require('../assets/images/yellowsapphire.png'), hindiName: 'Pukhraj' },
    { name: 'Freshwater Pearl', image: require('../assets/images/pearl.png'), hindiName: 'Moti' },
    { name: 'Blue Sapphire', image: require('../assets/images/blue.png'), hindiName: 'Neelam' },
    
  ];
  
const ExploreNavaratna = () => {
  return (
    <View style={styles.container}>
     
      <FlatList
        data={navaratnas}
        renderItem={({ item }) => <NavaratnaCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} 
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
 
  flatListContent: {
    alignItems: 'center',
  },
});

export default ExploreNavaratna;
