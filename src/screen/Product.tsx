import React, {useLayoutEffect, useState} from 'react';
import Wrapper from '../component/common/Wrapper';
import {useNavigation} from '@react-navigation/native';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import AppTheme from '../theme/AppTheme';
import BackArrow from 'react-native-vector-icons/Entypo';
import CaretDownIcon from 'react-native-vector-icons/Entypo';
import {
  BarButton,
  ButtonWrapper,
  CountIncrementWrapper,
  DetailsBreakDownWrapper,
  EachDetailsBreakdown,
  FooterSection,
  PaginationDots,
  PaginationWrap,
  ProductDetailsScrollWrapper,
  ProductDetailsWrapper,
  TopologyNormal,
} from '../component/product/ProductElement';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from 'react-native';
import {Button, TextWrap, Topography} from '../component/menu/MenuElements';
import Carousel, {IItem} from '../component/product/Carousel';
import {tabName} from '../routes/Tabs';
import {cartScreenID} from './Cart';

export const ProductScreenID = 'Product';
const data: Array<IItem> = [
  {item: require('../assets/images/a.png')},
  {item: require('../assets/images/a.png')},
  {item: require('../assets/images/a.png')},
  {item: require('../assets/images/a.png')},
];
const Product = () => {
  const navigation: any = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerShown: true,
      headerStyle: {
        backgroundColor: AppTheme.secondary,
      },
      title: '',
      headerLeft: () => (
        <BarButton>
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
  const getTitle = (i: number) => {
    switch (i) {
      case 0:
        return 'Ingredients';
      case 1:
        return 'Nutritional Information';
      case 2:
        return 'How to Prepare';
      case 3:
        return 'Dietary Information';
      case 4:
        return 'Storage Information';
        break;
      case 5:
        return 'Extra';
    }
  };
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const totalWidth = e.nativeEvent.layoutMeasurement.width;
    const xPosition = e.nativeEvent.contentOffset.x;
    const currentValue = Math.floor(xPosition / totalWidth);
    setCurrentIndex(currentValue);
  };
  return (
    <Wrapper style={{backgroundColor: AppTheme.secondary}}>
      <ProductDetailsScrollWrapper>
        <Carousel onScroll={onScroll} data={data} />
        <FooterSection>
          <PaginationWrap>
            {data?.map((_, index: number) => (
              <PaginationDots
                style={{
                  backgroundColor:
                    currentIndex === index ? AppTheme.primary : '#d9d9d9',
                }}
                key={index.toString()}
              />
            ))}
          </PaginationWrap>
        </FooterSection>

        <ProductDetailsWrapper>
          <TextWrap style={{width: '100%'}}>
            <Topography>African Donut Mix (Puff Puff)</Topography>
            <Topography style={{color: AppTheme.button}}>£3.99</Topography>
          </TextWrap>
          <TopologyNormal style={{marginBottom: 10}}>
            Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are
            made from yeast dough, shaped into balls and deep-fried until golden
            brown. It has a doughnut-like texture but slightly o....
            <TopologyNormal style={{color: AppTheme.button}}>
              Read more
            </TopologyNormal>
          </TopologyNormal>

          <DetailsBreakDownWrapper>
            {Array(6)
              .fill(3)
              .map((_, i) => (
                <EachDetailsBreakdown key={i.toString()}>
                  <Topography>{getTitle(i)}</Topography>
                  <CaretDownIcon
                    color={AppTheme.text}
                    name="chevron-thin-down"
                    size={20}
                  />
                </EachDetailsBreakdown>
              ))}
          </DetailsBreakDownWrapper>
        </ProductDetailsWrapper>
        {/* INCREMENT PRODUCT COUNT */}
        <CountIncrementWrapper>
          <BarButton
            onPress={() => setValue(value - 1)}
            disabled={value === 0 ? true : false}>
            <MinusIcon
              color={value === 0 ? '#e1e5e9' : AppTheme.text}
              name="minus"
              size={20}
            />
          </BarButton>
          <Topography>{value}</Topography>
          <BarButton onPress={() => setValue(value + 1)}>
            <PlusIcon color={AppTheme.text} name="plus" size={20} />
          </BarButton>
        </CountIncrementWrapper>
        <ButtonWrapper>
          <Button
            style={{height: 48}}
            onPress={() =>
              navigation.navigate(tabName, {screen: `${cartScreenID}`})
            }>
            <Topography style={{color: AppTheme.secondary}}>
              Add to cart
            </Topography>
          </Button>
          <Button
            style={{
              height: 48,
              backgroundColor: AppTheme.secondary,
              borderColor: AppTheme.primary,
              borderWidth: 1,
            }}>
            <Topography style={{color: AppTheme.primary}}>
              Add to cart
            </Topography>
          </Button>
        </ButtonWrapper>
      </ProductDetailsScrollWrapper>
    </Wrapper>
  );
};

export default Product;
