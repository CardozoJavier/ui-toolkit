import styled from 'styled-components';
import { CardHeader } from '../../Card/styles';
import { XIconContainer } from '../../UI/Icons/styles';

export const ModalHeader = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;

  ${XIconContainer} {
    svg {
      width: 6px;
      height: 6px;
    }
  }

  ${XIconContainer}:hover {
    cursor: pointer;
  }
`;