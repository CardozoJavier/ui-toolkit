import styled from 'styled-components';
import OptionCheckboxGroup from './OptionCheckboxGroup.styles';
import { palette } from '../../styles';
const { black, gray } = palette;

export const OptionListContainer = styled(OptionCheckboxGroup)`
  width: 250px;
  padding: 48px 20px 20px 20px;
  top: -16px;
  right: -5px;
  background-color: #fff;
`;
export const EmailField = styled.p`
  font-size: 12px;
  color: ${black};
  margin: 0;
  text-indent: 5px;
`;

export const OptionItemContainer = styled.div`
  padding: 15px 0 40px;
`;

export const EmailFieldContainer = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${gray.g1};
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
  width: 95px;
`;