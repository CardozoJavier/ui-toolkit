import styled from 'styled-components';

export default styled.svg`
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
`;