import styled from 'styled-components/native';
import AppTheme from '../../theme/AppTheme';

export const ProductCardList = styled.FlatList`
  margin-top: 10px;
  flex-grow: 1;
`;

export const ProductCardWrapper = styled.Pressable`
  width: 175px;
  height: 230px;
  border-radius: 8px;
  padding: 10px;
  background: ${AppTheme.secondary};
  margin: 10px;
`;

export const SearchInputWrap = styled.View`
  height: 40px;
  width: 90%;
  margin-top: 20px;
  align-items: center;
  padding: 0px 5px 0px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-radius: 5px;
  background-color: ${AppTheme.secondary};
  border: 1px solid ${AppTheme.basic};
`;

export const SearchInput = styled.TextInput`
  height: 100%;
  flex-grow: 1;
  background-color: ${AppTheme.secondary};
`;

// ================

export const ProductImage = styled.Image`
  width: 100px;
  height: 110px;
  align-self: center;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${AppTheme.button};
  margin-top: 10px;
  border-radius: 50px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  padding: 8.384px 16.227px 7.616px 16.107px;
  justify-content: center;
  align-items: center;
`;
export const Details = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
export const TextWrap = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;
export const Topography = styled.Text<{$color?: any}>`
  color: ${props => props.$color || AppTheme.text};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.42px;
`;
