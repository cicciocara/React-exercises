import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Strings = {
  en: {
    CURRENT_LANGUAGE: 'ENGLISH',
  },

  it: {
    CURRENT_LANGUAGE: 'ITALIANO',
  },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext); // ritorna il valore passato come prop a LanguageContext.Provider

  return (
    <div>
      <h1>{Strings[language].CURRENT_LANGUAGE}</h1>
    </div>
  );
}
