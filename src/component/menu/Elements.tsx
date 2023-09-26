import styled from 'styled-components/native';
import AppTheme from '../../theme/AppTheme';

export const ProductCardList = styled.FlatList`
  margin-top: 10px;
  flex-grow: 1;
`;

export const ProductCardWrapper = styled.View`
  width: 175px;
  height: 230px;
  border-radius: 8px;
  padding: 10px;
  background: ${AppTheme.secondary};
  margin: 10px;
  elvation: 7;
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
