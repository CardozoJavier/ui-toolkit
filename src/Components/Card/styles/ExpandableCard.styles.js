import styled from 'styled-components';
import { CardContainer, CardHeader, CardDescription } from './Card.styles';
import { DivContainer } from '../../UI/GenericElements/GenericElements.styles';
import { TrashIconContainer } from '../../UI/Icons/styles';

export const ExpandableCardHeader = styled(CardHeader)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0;
  cursor: pointer;
`;

export const ExpandableCardDescription = styled(CardDescription)`
  margin: 0 auto 0 123px;
`;

export const ExpandableCardContainer = styled(CardContainer)`
  transition: all .3s;
  min-height: 0;

  &.expandable.card {
    &--default {
      &__expand {
        min-height: 316px;

        ${ExpandableCardHeader} {
          padding-bottom: 15px;
        }
      }
      &__collapse {
        ${ExpandableCardHeader} {
          border-bottom: none;
        }
      }
    }
  }
`;

export const ChildrenContainer = styled.div`
  &.expandable.card {
    &--default {
      &__expand {
        transform: scaleY(1);
        visibility: visible;
        transition: visibility .2s, transform .2s;
        ${DivContainer} {
          margin: 16px 0;
        }
      }
      &__collapse {
        transform: scaleY(0);
        max-height: 0;
        visibility: hidden;
        transition: visibility 0s, transform .2s;
      }
    }
  }
  .trash-icon__visible {
    ${TrashIconContainer} {
      display: block;
    }
  }
`;