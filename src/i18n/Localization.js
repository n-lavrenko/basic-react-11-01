import React, { Component } from 'react';
import { ru } from './ru'
import { en } from './en'
import PropTypes from 'prop-types';


class Localization extends Component {
  
  static childContextTypes = {
    currentLanguage: PropTypes.string, // en | ru
    en: PropTypes.object,
    ru: PropTypes.object,
    translate: PropTypes.func,
    setLanguage: PropTypes.func
  }
  
  state = {
    currentLanguage: 'ru'
  }
  
  translate = (key) => {
    switch (this.state.currentLanguage) {
      case 'en':
        return en[key]
      case 'ru':
        return ru[key]
    }
  }
  
  setLanguage = (lang) => {
    if (this.state.currentLanguage === lang) {
      return;
    }
    this.setState({ currentLanguage: lang })
  }
  
  getChildContext() {
    return {
      currentLanguage: this.state.currentLanguage,
      en,
      ru,
      translate: this.translate,
      setLanguage: this.setLanguage
    }
  }
  
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default Localization;
