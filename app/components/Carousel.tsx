import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {images} from '../constants/images';
import {colors} from '../constants/colors';

const renderItem = (image: any) => {
  return (
    <View style={{left: 20, marginTop: 16}}>
      <Image source={image} style={{width: 280, height: 380, borderRadius: 8, marginRight: 20}}/>
      <Text style={{position: 'absolute', bottom: 40, left: 20, fontFamily: 'Raleway-Bold', color: colors.textWhite, fontSize: 20}}>Category name</Text>
      <Text style={{position: 'absolute', bottom: 20, left: 20, fontFamily: 'Raleway-Regular', color: colors.textWhite, fontSize: 14}}>20 products</Text>
    </View>
  );
};

const Carousel = () => {
  const carouselImages = [
    images.carousel1,
    images.carousel2,
    images.carousel3,
    images.carousel4,
    images.carousel5,
  ];
  return (
    <FlatList
      data={carouselImages}
      renderItem={({item, index}) => renderItem(item)}
      horizontal
    />
  );
};

export default Carousel;
