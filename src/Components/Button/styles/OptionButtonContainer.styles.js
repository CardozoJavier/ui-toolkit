import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, action, indefinido } = palette;

/*
 * Option button - Left | Middle | Right
 */
export default styled.div`
  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    transition: background-color: .3s;

    .button {
      &--option {
        background-color: ${indefinido};

        &__selected {
          background-color: ${indefinido};
        }

        &__default {
          background-color: ${indefinido};
        }

        &__disabled {
          background-color: ${white};
        }
      }
    }
  }

  .button {
    transition: background-color .3s;
    text-align: center;
    
    &:focus {
      outline: none;
    }

    &--option {
      background-color: ${violet.v05};
      color: ${violet.v1};
      border-radius: 5px;
      border: 1px solid ${violet.v1};
      padding: 0.67em .62em;
      font-size: 12px;
      font-weight: 400;    
      
      &-left {
        border-radius: 5px 0 0 5px;
        margin-right: 5px;
      }

      &-middle {
        border-radius: 0;
        margin: 0 5px;
      }

      &-right {
        border-radius: 0 5px 5px 0;
        margin-left: 5px;
      }

      &__selected {
        background-color: ${violet.v05};
        color: ${violet.v1};
        border: 1px solid ${action};
      }

      &__default {
        background-color: ${white};
        color: ${gray.g3};
        border: 1px solid ${gray.g1};
      }
      
      &__disabled {
        background-color: ${white};
        color: ${gray.g4};
        border: 1px solid ${gray.g1};
      }
    }
  }  
`;