import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardTitle, CardDescription, CardHeader } from './styles';

/**
 * Card component can be called with
 * @param {Node} children - (Optional)  It's the content to be displayed into Card.
 * @param {String} title - (Optional) It's title to be displayed in card.
 * @param {String} description - (Optional) It's description to be displayed in card below of title.
 * @param {String} width - (Optional) It's the width of the card container.
 * @param {String} padding - (Optional) It's the padding of the card container.
 * @param {String} backgroundColor - (Optional) It's the color of background card container.
 * @return {React Component} A view for card with title and description.
 */
const Card = ({ children, title, description, width, padding, borderBottom, backgroundColor, }) => (
  <CardContainer width={width} padding={padding} backgroundColor={backgroundColor}>
    {title &&
      <CardHeader flexDirection={description ? 'column' : 'row'} borderBottom={borderBottom}>
        <CardTitle>{ title }</CardTitle>
        {description && <CardDescription>{ description }</CardDescription>}
      </CardHeader>
    }
    {children}
  </CardContainer>
);

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  borderBottom: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  title: '',
  description: '',
  width: '',
  padding: '',
  borderBottom: '',
  backgroundColor: 'white',
};

export default Card;
