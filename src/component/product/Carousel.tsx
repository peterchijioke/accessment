import {
  ImageContainer,
  ProductImage,
  ProductScrollList,
} from './ProductElement';

import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
export interface IItem {
  item?: any;
}
interface ICarouse {
  data: [IItem] | any;
}
const Carousel = ({data}: ICarouse) => {
  const {height, width} = useWindowDimensions();
  return (
    <ProductScrollList
      contentContainerStyle={{flexGrow: 1}}
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <ImageContainer style={{width}}>
          <ProductImage source={item.item} />
        </ImageContainer>
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default Carousel;
