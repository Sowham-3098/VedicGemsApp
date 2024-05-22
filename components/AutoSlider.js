import React, { useRef, useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

const LOGO_WIDTH = 100;
const LOGO_SPACING = 30;

const AutoSlider = ({ logos }) => { 
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      flatListRef.current.scrollToOffset({
        offset: (currentIndex + 1) * (LOGO_WIDTH + LOGO_SPACING),
        animated: true,
      });
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [currentIndex, logos.length]);

  const handleScrollEnd = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(offsetX / (LOGO_WIDTH + LOGO_SPACING));
    if (newIndex >= logos.length) {
      flatListRef.current.scrollToOffset({
        offset: 0,
        animated: false,
      });
      setCurrentIndex(0);
    }
  };

  return (
    <FlatList
    className="bg-gray-100  px-3 mx-3 "
      ref={flatListRef}
      data={logos}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.logoContainer}>
          <Image source={item} style={styles.logo} />
        </View>
      )}
      contentContainerStyle={styles.flatListContent}
      snapToInterval={LOGO_WIDTH + LOGO_SPACING}
      decelerationRate="fast"
      onMomentumScrollEnd={handleScrollEnd}
    />
  );
};

const styles = StyleSheet.create({
  
  logoContainer: {
    width: LOGO_WIDTH,
    marginHorizontal: LOGO_SPACING / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_WIDTH,
    resizeMode: 'contain',
  },
});

export default AutoSlider;
