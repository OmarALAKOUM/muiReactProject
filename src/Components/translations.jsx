// pages/translations.jsx
import React, { useEffect, useState } from 'react';
import { fetchLanguages, translateWord } from '../api/translationapi';

const Translations = () => {
  const [languages, setLanguages] = useState([]);
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('fr');
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const loadLanguages = async () => {
      const data = await fetchLanguages();
      setLanguages(data);
    };
    loadLanguages();
  }, []);

  const handleTranslate = async () => {
    if (!text.trim()) return;

    try {
      console.log('t', text);
      const response = await translateWord(fromLang, toLang, text);
      console.log('t', response.translated)
      setTranslated(response.translated);
    } catch (error) {
      console.error('Translation failed', error);
      setTranslated('Translation error');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Translation Page</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>From: </label>
        <select 
        style={{ width: '250px', height: '48px', fontSize: '16px' }}
        value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.id} value={lang.name}>
              {lang.name}
            </option>
          ))}
        </select>

        <label style={{ marginLeft: '1rem' }}>To: </label>
        <select
        style={{ width: '250px', height: '48px', fontSize: '16px' }}
         value={toLang} onChange={(e) => setToLang(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.id} value={lang.name}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <textarea
        rows="3"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter word to translate..."
      />

      <div>
        <button onClick={handleTranslate} style={{ marginTop: '1rem' }}>
          Translate
        </button>
      </div>

      {translated && (
        <div style={{ marginTop: '1rem', background: '#f0f0f0', padding: '1rem' }}>
          <strong>Translation:</strong> {translated}
        </div>
      )}
    </div>
  );
};

export default Translations;
