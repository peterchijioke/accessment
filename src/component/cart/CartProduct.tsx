import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  CartProductImage,
  ColumDetails,
  EachProductWrapper,
} from './CartElements';
import {Topography} from '../menu/MenuElements';
import DeleteIcon from 'react-native-vector-icons/EvilIcons';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AppTheme from '../../theme/AppTheme';
import {BarButton} from '../product/ProductElement';

const CartProduct = () => {
  const navigation: any = useNavigation();
  const [value, setValue] = useState(0);
  return (
    <EachProductWrapper
      style={{justifyContent: 'space-between', marginTop: 30}}>
      <EachProductWrapper>
        <CartProductImage source={require('../../assets/images/pr.png')} />
        <ColumDetails>
          <Topography>
            Asaro{' '}
            <Topography style={{color: '#4A4A4A'}}>(Yam Porridge)</Topography>
          </Topography>
          <Topography style={{color: AppTheme.primary}}>£30</Topography>
          <DeleteIcon color={AppTheme.basic} name="trash" size={30} />
        </ColumDetails>
      </EachProductWrapper>

      <ColumDetails style={{alignItems: 'center'}}>
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
      </ColumDetails>
    </EachProductWrapper>
  );
};

export default CartProduct;
