import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProductCardWrapper} from './Elements';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import AppTheme from '../../theme/AppTheme';
import styled from 'styled-components/native';

export default function ProductCard() {
  return (
    <ProductCardWrapper>
      <HeartIcon
        style={{alignSelf: 'flex-end'}}
        color={AppTheme.basic}
        size={20}
        name={'heart-outline'}
      />
      <ProductImage source={require('../../assets/images/a.png')} />
      <TextWrap>
        <Topography>Chicken Stew</Topography>
        <Topography $color={AppTheme.button}>£30</Topography>
      </TextWrap>
    </ProductCardWrapper>
  );
}

const ProductImage = styled.Image`
  width: 100px;
  height: 110px;
  align-self: center;
`;
const Details = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
const TextWrap = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;
const Topography = styled.Text<{$color?: any}>`
  color: ${props => props.$color || AppTheme.text};

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.42px;
`;

const styles = StyleSheet.create({});
