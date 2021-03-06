import React from 'react';
import { CalendarIconContainer } from './styles';

const CalendarIcon = ({ props }) => (
  <CalendarIconContainer {...props}>
    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="m15.6 2h-3.6v-1.6c0-.22-.18-.4-.4-.4h-1.2c-.22 0-.4.18-.4.4v1.6h-4v-1.6c0-.22-.18-.4-.4-.4h-1.2c-.22 0-.4.18-.4.4v1.6h-3.6c-.22 0-.4.18-.4.4v13.2c0 .22.18.4.4.4h15.2c.22 0 .4-.18.4-.4v-13.2c0-.22-.18-.4-.4-.4zm-12 12h-1.2c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4v1.2c0 .22-.18.4-.4.4zm0-4h-1.2c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4v1.2c0 .22-.18.4-.4.4zm5 4h-1.2c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4v1.2c0 .22-.18.4-.4.4zm0-4h-1.2c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4v1.2c0 .22-.18.4-.4.4zm5 4h-1.2c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4v1.2c0 .22-.18.4-.4.4zm0-4h-1.2c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4v1.2c0 .22-.18.4-.4.4zm.4-4.4c0 .22-.18.4-.4.4h-11.2c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4z" />
    </svg>
  </CalendarIconContainer>
);

export default CalendarIcon;
