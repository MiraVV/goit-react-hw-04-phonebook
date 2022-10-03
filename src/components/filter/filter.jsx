import PropTypes from 'prop-types';
import React from 'react';
import { FilterContainer, FilterName, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput type="text" name={value} onChange={onChange} />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
