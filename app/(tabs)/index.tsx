import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import products from '@/assets/data/products';
import ProductListItem from '@/components/ProductListItem';

export default function MenuScreen() {
  
  return (
    <View>
      <ProductListItem product={products[0]} />
    </View>
  );
}