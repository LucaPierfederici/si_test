import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import enLocaleData from 'react-intl/locale-data/en';
import itLocaleData from 'react-intl/locale-data/it';
import { addLocaleData, IntlProvider } from 'react-intl';
import messages from '../translation';
import { getLocale } from './store/locale/locale.selectors';
import { LocaleAction } from './store/locale/locale.actions';
import Footer from './ui/components/Footer';

const LOCALES = Object.keys(messages)

addLocaleData(enLocaleData)
addLocaleData(itLocaleData)

class LocaleProvider extends Component {
  render() {
    const { locale, setLocale } = this.props
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div>
          {this.props.children}
          <Footer items={LOCALES} onSelect={setLocale} />
        </div>
      </IntlProvider>
    )
  }
}

export default connect(
  (state) => ({
    locale: getLocale(state),
  }),
  (dispatch) => {
    return ({
      setLocale: bindActionCreators(LocaleAction, dispatch).setLocale,
    })
  }
)(LocaleProvider)