import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CloneElementContainer } from './styles';
import { Button } from '../Button';

/**
 *  CloneElement component should be called with
 *  @param {Array} children - (Required) They're the structures to be cloned. Should be one React node.
 *  @param {String} buttonText - (Optional) The text to be displayed into button add structure. Default value is empty string.
 *  @param {String} buttonType - (Optional) The button type corresponding to class styles. Default value is link-default-left.
 *  @param {Node} buttonIcon - (Optional) The icon to be displayed into button. Default value is 'null'.
 *  @param {Boolean} removableFirst - (Optional) Is the flag to determine if the first structure is removable or not. Default value is true.
 *  @param {Object} buttonProps - (Optional) It's the props to be passed to structure container for modifying Add button styles.
 *  @param {Function} onDeleteCallback - (Required) It's the callback to be called when remove icon is clicked. It receive the structure ID in first argument.
 */
const CloneElement = ({ children, buttonText, buttonType, buttonIcon, removableFirst, buttonProps, onDeleteCallback }) => {
  const initialState = Object.assign({}, children);
  const [structure, setStructure] = useState(initialState);

  /**
   * Modifying onClick callback to receive the ID of each cloned structure to be removed.
   */
  const settingOnClickCallback = (arrayChildren, id) => (
    arrayChildren.map(child => {
      const key = Math.random().toString();
      if (child.props.role === 'icon-to-remove-structure') {
        return React.cloneElement(child, {
          key,
          props: {
            ...child.props.props,
            onClick: () => onDeleteCallback(id),
          }
        });
      } else {
        return React.cloneElement(child, { key });
      }
    })
  ); 

  /**
   * Assigning unique id to new structures
   */
  const cloningWithUniqueId = (clone) => {
    const key = Math.random().toString();
    return (
      React.cloneElement(clone, {
        key: key,
        id: key,
        className: 'trash-icon__visible',
        children: clone.props.children ? settingOnClickCallback(clone.props.children, key) : null,
      })
    );
  };

  /**
   * Add duplicated children structure to be rendered.
   */
  const handleAddStructure = () => {
    const structuresArray = Array.isArray(structure) ? [...structure] : [structure];
    const newStructure = cloningWithUniqueId(initialState);

    structuresArray.push(newStructure);
    setStructure(structuresArray);
  };

  useEffect(() => {
    /**
     * If the first element is not removable, the icon is deleted and component is re-rendered.
     */
    if (!removableFirst) {
      const childrenArray = Array.isArray(children) ? [...children] : [children];
      const structureUpdated = [];

      childrenArray.forEach(child => {
        const childCloned = Array.isArray(child.props.children) ? [...child.props.children] : [child.props.children];
        childCloned.forEach(nestedChild => {
          /**
           * Exclude remove icon in the first structure
           */
          if (nestedChild.props.role !== 'icon-to-remove-structure') {
            structureUpdated.push(nestedChild);
          };
        });
      });

      const childrenCloned = React.cloneElement(children, {
        children: structureUpdated,
      });
      
      setStructure(childrenCloned);
    }
  }, []);

  return (
    <CloneElementContainer {...buttonProps}>
      {structure}
      <Button onClick={handleAddStructure} label={buttonText} type={buttonType} icon={buttonIcon} />
    </CloneElementContainer>
  );
};

CloneElement.propTypes = {
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  buttonIcon: PropTypes.func,
  removableFirst: PropTypes.bool,
  buttonProps: PropTypes.shape({}),
  onDeleteCallback: PropTypes.func,
};

CloneElement.defaultProps = {
  buttonText: '',
  buttonType: 'link-default-left',
  buttonIcon: null,
  removableFirst: true,
  buttonProps: {},
  onDeleteCallback: () => null,
};

export default CloneElement;