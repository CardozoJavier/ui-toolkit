import React from 'react';
import { ExclamationIconContainer } from './styles';

export default ({ props, disabled }) => (
  <ExclamationIconContainer {...props} disabled={disabled} >
    <svg viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389955 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9972 6.6139 17.0481 4.32634 15.3609 2.63911C13.6737 0.951889 11.3861 0.00278344 9 0ZM9 15.4286C7.72855 15.4286 6.48565 15.0515 5.42848 14.3452C4.37131 13.6388 3.54734 12.6348 3.06078 11.4601C2.57421 10.2854 2.44691 8.99287 2.69496 7.74585C2.943 6.49883 3.55526 5.35336 4.45432 4.45431C5.35337 3.55526 6.49883 2.943 7.74585 2.69495C8.99287 2.4469 10.2854 2.57421 11.4601 3.06077C12.6348 3.54734 13.6388 4.3713 14.3452 5.42848C15.0515 6.48565 15.4286 7.72855 15.4286 9C15.4266 10.7043 14.7486 12.3383 13.5435 13.5435C12.3383 14.7486 10.7044 15.4266 9 15.4286Z" />
      <path d="M9.64293 3.85718H8.35721C8.00217 3.85718 7.71436 4.14499 7.71436 4.50003V9.64289C7.71436 9.99793 8.00217 10.2857 8.35721 10.2857H9.64293C9.99797 10.2857 10.2858 9.99793 10.2858 9.64289V4.50003C10.2858 4.14499 9.99797 3.85718 9.64293 3.85718Z" />
      <path d="M9.00007 14.143C9.71015 14.143 10.2858 13.5673 10.2858 12.8572C10.2858 12.1472 9.71015 11.5715 9.00007 11.5715C8.28999 11.5715 7.71436 12.1472 7.71436 12.8572C7.71436 13.5673 8.28999 14.143 9.00007 14.143Z" />
    </svg>
  </ExclamationIconContainer>
);
