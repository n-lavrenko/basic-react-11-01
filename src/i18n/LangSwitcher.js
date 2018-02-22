import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LangSwitcher extends Component {
  static contextTypes = {
    setLanguage: PropTypes.func
  }
  
  render() {
    return (
      <div>
        <button onClick={ () => this.context.setLanguage('ru') }>Русский</button>
        <button onClick={ () => this.context.setLanguage('en') }>Английский</button>
      </div>
    );
  }
}

export default LangSwitcher;
