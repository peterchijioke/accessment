import styled from 'styled-components/native';
import AppTheme from '../../theme/AppTheme';

export const BarButton = styled.TouchableOpacity`
  border-radius: 8px;
  border: 1px solid #e1e5e9;
  background: ${AppTheme.secondary};
  padding: 6px;
`;

export const ProductImage = styled.Image`
  margin: 10px;
  width: 90%;
  height: 400px;
`;
export const ProductScrollList = styled.FlatList`
  width: 100%;
`;
export const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const FooterSection = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PaginationWrap = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  margin-top: 20px;
`;
export const PaginationDots = styled.Pressable`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background: #d9d9d9;
`;

export const ProductDetailsScrollWrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const TopologyNormal = styled.Text`
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 10px;
`;
export const ProductDetailsWrapper = styled.View`
  width: 90%;
  align-self: center;
`;
export const DetailsBreakDownWrapper = styled.View`
  width: 100%;
  align-self: center;
  padding-bottom: 20px;
  margin-top: 20px;
`;
export const EachDetailsBreakdown = styled.View`
  padding: 15px 0px 15px 0px;
  border-top: 1px;
  width: 100%;

  border-color: #e1e5e9;
  display: flex;
  /* border-top-width: 1px; */
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CountIncrementWrapper = styled.View`
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const ButtonWrapper = styled.View`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
`;
