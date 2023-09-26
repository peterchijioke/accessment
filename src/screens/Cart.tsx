import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import AppTheme from '../theme/AppTheme';
import {BarButton} from '../component/product/ProductElement';
import BackArrow from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Wrapper from '../component/common/Wrapper';
import CartProduct from '../component/cart/CartProduct';
import {Button, TextWrap, Topography} from '../component/menu/MenuElements';

export const cartScreenID = 'Cart';
const Cart = () => {
  const navigation: any = useNavigation();
  const [value, setValue] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerShown: true,
      headerStyle: {
        backgroundColor: AppTheme.secondary,
      },
      title: cartScreenID,
      headerLeft: () => (
        <BarButton style={{marginLeft: 15}}>
          <BackArrow
            onPress={() => navigation.goBack()}
            color={AppTheme.text}
            name="chevron-small-left"
            size={20}
          />
        </BarButton>
      ),
    });
  }, [navigation]);
  return (
    <Wrapper>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        style={{flex: 1, marginTop: 20}}
        renderItem={({}) => <CartProduct />}
        data={[3, 3, 3]}
      />
      <TextWrap style={{width: '90%'}}>
        <Topography>
          Total <Topography style={{color: '#4A4A4A'}}>(3 items)</Topography>
        </Topography>
        <Topography style={{color: AppTheme.text}}>£3.99</Topography>
      </TextWrap>
      <Button
        style={{
          height: 45,
          marginBottom: 40,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Topography style={{color: '#fff'}}>Checkout - £90</Topography>
      </Button>
    </Wrapper>
  );
};

export default Cart;

const styles = StyleSheet.create({});
