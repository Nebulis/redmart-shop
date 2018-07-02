import React, {Fragment} from 'react';
import './Filters.css';
import PropTypes from 'prop-types';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.substr(1);

export const Filters = ({filters}) => {
  return filters.map(filter => <Fragment key={filter.name}>
    <div className="Shop-Filters-brand"> {capitalize(filter.name)}</div>
    {
      filter.values.map(value => <div key={`${filter.name}-${value}`} className="Shop-Filters-value">
        <input type="checkbox" value={value}/> {value}
      </div>)}
  </Fragment>)
};

Filters.propTypes = ({
  filters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired
});