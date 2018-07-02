import React, {Fragment, Component} from 'react';
import './Filters.css';
import PropTypes from 'prop-types';
import {capitalize} from '../../utils/capitalize';

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilters: {} // object where keys are name of filter categories and values are selected values
    };
    this.onClick = this.onClick.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  /**
   * @param {string} filterName filter category name
   * @param {string} value
   * @returns {boolean} true if the value is already selected, false otherwise
   */
  isChecked(filterName, value) {
    let filterValues = this.state.selectedFilters[filterName] || [];
    return filterValues.includes(value);
  }

  onClick(filterName, value) {
    let filterValues = this.state.selectedFilters[filterName] || [];
    filterValues = filterValues.includes(value) ? filterValues.filter(val => val !== value) : [...filterValues, value];

    this.setState(prevState => ({
      selectedFilters: {
        ...prevState.selectedFilters,
        [filterName]: [...filterValues],
      }
    }),
      () => this.props.filtersChanged(this.state.selectedFilters)); // signal the selected filters has changed
  }

  render() {
    return this.props.filters.map(filter => <Fragment key={filter.name}>
      <div className="Shop-Filters-brand"> {capitalize(filter.name)}</div>
      {
        filter.values.map(value => <div key={`${filter.name}-${value}`} className="Shop-Filters-value">
          <input type="checkbox"
                 value={value}
                 checked={this.isChecked(filter.name, value)}
                 onClick={() => this.onClick(filter.name, value)}/>
          {value}
        </div>)}
    </Fragment>)
  };
}

Filters.propTypes = ({
  filters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  filtersChanged: PropTypes.func.isRequired,
});