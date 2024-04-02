import {View, Text, Image} from 'react-native';
import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {images} from '../constants/images';

const Navbar = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        alignItems: 'center'
      }}>
      <View style={{marginLeft: 12 }}>
        <FeatherIcons name="menu" size={24} color="black" />
      </View>
      <Image
        source={images.cCommerce}
        style={{width: 180, height: 30, resizeMode: 'contain'}}
      />
      <View style={{marginRight: 12}}>
        <FeatherIcons name="log-out" size={24} color="black" />
      </View>
    </View>
  );
};

export default Navbar;
