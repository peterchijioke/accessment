import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  ProductCardWrapper,
  ProductImage,
  TextWrap,
  Topography,
} from './MenuElements';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import AppTheme from '../../theme/AppTheme';
import styled from 'styled-components/native';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {ProductScreenID} from '../../screen/Product';

export default function ProductCard() {
  const navigation: any = useNavigation();
  const [heart, setHeart] = useState(false);
  return (
    <ProductCardWrapper
      onPress={() => navigation.navigate(ProductScreenID)}
      style={{elevation: 1}}>
      {heart && (
        <HeartIcon
          onPress={() => setHeart(!heart)}
          style={{alignSelf: 'flex-end'}}
          color={AppTheme.button}
          size={20}
          name={'heart-sharp'}
        />
      )}
      {!heart && (
        <HeartIcon
          onPress={() => setHeart(!heart)}
          style={{alignSelf: 'flex-end'}}
          color={AppTheme.basic}
          size={20}
          name={'heart-outline'}
        />
      )}
      <ProductImage source={require('../../assets/images/a.png')} />
      <TextWrap>
        <Topography>Chicken Stew</Topography>
        <Topography style={{color: AppTheme.button}}>£30</Topography>
      </TextWrap>
      <Button>
        <CartIcon
          name="shopping-outline"
          size={20}
          color={AppTheme.secondary}
        />
        <Topography style={{color: AppTheme.secondary}}>Add to cart</Topography>
      </Button>
    </ProductCardWrapper>
  );
}
