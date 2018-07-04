import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * component that fetch data from the endpoint and notify that data has been fetched through onFetchSucceeded
 * dont reuse this in production :)
 */
export class Fetch extends Component {
  componentDidMount() {
    return fetch(this.props.endpoint)
      .then(data => data.json())
      .then(data => this.props.onFetchSucceeded(data))
  }

  render() {
    return this.props.children || null;
  }
}

Fetch.propTypes = {
  endpoint: PropTypes.string.isRequired,
  onFetchSucceeded: PropTypes.func.isRequired,
};