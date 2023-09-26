import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Wrapper from '../component/common/Wrapper';
import styled from 'styled-components/native';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import AppTheme from '../theme/AppTheme';
import {
  ProductCardList,
  SearchInput,
  SearchInputWrap,
} from '../component/menu/MenuElements';
import ProductCard from '../component/menu/ProductCard';
export const menuScreenID = 'Menu';

const Menu = () => {
  const [dataSource, setDataSource] = useState([]);

  return (
    <Wrapper>
      <SearchInputWrap>
        <SearchIcon color={AppTheme.basic} size={20} name="search-outline" />
        <SearchInput
          placeholderTextColor={AppTheme.basic}
          placeholder="Search"
        />
      </SearchInputWrap>

      <ProductCardList
        data={[1, 2, 3, 4, 8, 9]}
        renderItem={({item}: any) => <ProductCard />}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </Wrapper>
  );
};

export default Menu;
