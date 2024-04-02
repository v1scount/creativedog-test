import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../constants/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/colors';
import Carousel from '../../components/Carousel';
import { styles } from './styles';

const Home = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <ScrollView>
      <View style={styles.heroContainer}>
        <Image
          source={images.headphones}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <Text
          style={styles.heroText}
          numberOfLines={3}>
          Conecta tu mundo con la tecnología más avanzada
        </Text>
        <Pressable
          style={styles.heroButton}>
          <Text
            style={styles.heroButtonText}>
            Ver productos
          </Text>
          <FeatherIcons name="chevron-right" color="white" size={32} />
        </Pressable>
      </View>
      <View>
        <Text
          style={styles.categoriesTitle}
          numberOfLines={2}>
          Categorias más{' '}
          <Text
            style={styles.categoriesTitleAccent}>
            visitadas
          </Text>
        </Text>
        <Text
          style={styles.categoriesText}>
          Descubre lo último en tecnología con nuestras categorías más
          populares. Encuentra lo que buscas en electrónica, informática y más.
        </Text>
        <View
          style={styles.allCategories}>
          <Text
            style={styles.allCategoriesText}>
            Ver todas las categorías
          </Text>
          <FeatherIcons
            name="chevron-right"
            color={colors.textPrimary}
            size={32}
          />
        </View>
      </View>
      <Carousel />
      <Text
        style={styles.higihlightedProducts}
        numberOfLines={2}>
        Productos{' '}
        <Text
          style={styles.higihlightedProductsAccent}>
          destacados
        </Text>
      </Text>
      <Text
        style={styles.highlightedProductsText}
        numberOfLines={3}>
        ¡Descubre nuestros productos estrella! Encuentra lo mejor en tecnología
        y accesorios para simplificar tu vida.
      </Text>
      <View
        style={styles.gridContainer}>
        <View style={styles.firstGridRow}>
          <View>
            <View>
              <Image
                source={images.grid2}
                resizeMode="contain"
                style={[styles.gridImage, {marginRight: 8}]}
              />
              <View
                style={styles.whitePrice}>
                <Text style={styles.whitePriceText}>$ 2.800</Text>
              </View>
            </View>
            <View style={{marginTop: 6}}>
              <Text style={styles.gridMainText}>Product name here</Text>
              <Text style={styles.gridSecondaryText}>Cub-categoría</Text>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={images.grid1}
                resizeMode="contain"
                style={styles.gridImage}
              />
              <View
                style={styles.blueDiscount}>
                <Text style={{color: 'white'}}>-30%</Text>
              </View>
              <View
                style={styles.whitePrice}>
                <Text style={styles.whitePriceText}><Text style={[styles.redPriceText, {textDecorationLine: 'line-through'}]}>$ 2.800</Text>  $ 2.800</Text>
              </View>
            </View>
            <View style={{marginTop: 6}}>
              <Text style={styles.gridMainText}>Product name here</Text>
              <Text style={styles.gridSecondaryText}>Cub-categoría</Text>
            </View>
          </View>
        </View>
        <View style={styles.secondGridRow}>
          <View style={{marginBottom: 16}}>
            <View>
              <Image
                source={images.grid2}
                resizeMode="contain"
                style={[styles.gridImage, {marginRight: 8}]}
              />
              <View
                style={styles.whitePrice}>
                <Text style={styles.whitePriceText}>$ 2.800</Text>
              </View>
            </View>
            <View style={{marginTop: 6}}>
              <Text style={styles.gridMainText}>Product name here</Text>
              <Text style={styles.gridSecondaryText}>Cub-categoría</Text>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={images.grid1}
                resizeMode="contain"
                style={styles.gridImage}
              />
              <View
                style={styles.whitePrice}>
                <Text style={styles.whitePriceText}>$ 2.800</Text>
              </View>
            </View>
            <View style={{marginTop: 6}}>
              <Text style={styles.gridMainText}>Product name here</Text>
              <Text style={styles.gridSecondaryText}>Cub-categoría</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
