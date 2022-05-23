import React from 'react';
import { LanguageContext } from './LanguageContext';

const Strings = {
  en: {
    CURRENT_LANGUAGE: 'ENGLISH',
  },

  it: {
    CURRENT_LANGUAGE: 'ITALIANO',
  },
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <h1>{Strings[language].CURRENT_LANGUAGE}</h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
