import styled from 'styled-components/native';
import AppTheme from '../../theme/AppTheme';

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${AppTheme.wrapper};
`;

export default Wrapper;
