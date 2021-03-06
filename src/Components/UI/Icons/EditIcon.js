import React from 'react';
import { EditIconContainer } from './styles';

const EditIcon = ({props}) => (
  <EditIconContainer {...props} xmlns="http://www.w3.org/2000/svg">
    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="a">
        <path d="m0 0h16v16h-16z"/>
      </clipPath>
      <g clipPath="url(#a)">
        <path d="m3.71579 15.2956-3.463155.6939c-.147368.0315-.273684-.0947-.25263134-.2418l.67368434-3.4797c.021053-.0841.052631-.1576.115789-.2207l9.778923-9.76612c.1684-.1682.4316-.1682.6 0l2.5369 2.53351c.1684.1682.1684.43101 0 .59921l-9.78951 9.7766c-.05263.0526-.12631.0946-.2.1051z"/>
        <path d="m14.8632 4.2575-3.1369-3.13272.8211-.819975c.4105-.409987 1.0737-.409987 1.4842 0l1.6421 1.639945c.4105.40999.4105 1.07228 0 1.48226z"/>
      </g>
    </svg>
  </EditIconContainer>
);
  
export default EditIcon;
