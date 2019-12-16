import React from 'react';
import { Button } from '../Button';
import { OptionButtonContainer } from '../Button/styles';
import { bemDestruct } from '../../utils';

const types = {
  right: {
    defaultClassName: 'button option--default-right__selected',
    optionaClassName: 'button option--default-right',
  },
  middle: {
    defaultClassName: 'button option--default-middle__selected',
    optionaClassName: 'button option--default-middle',
  },
  left: {
    defaultClassName: 'button option--default-left__selected',
    optionaClassName: 'button option--default-left',
  },
};

const SwitchButton = ({ value, label, className, handleCheck, disabled }) => (
  <OptionButtonContainer className={bemDestruct(className, disabled)} onClick={disabled ? null : (e) => handleCheck(e, value)}>
    <Button
      label={label}
      defaultClassName={bemDestruct(className, disabled)}
    />
  </OptionButtonContainer>
);

export default SwitchButton;