import React, { useState } from 'react';
import translations from '../utils/i18n';
import { useSettings } from '../context/SettingsContext';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const { settings } = useSettings();
  const t = translations[settings.language];

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2 my-2">
      <input
        type="text"
        placeholder={t.searchPlaceholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded transition"
      >
        {t.searchButton}
      </button>
    </form>
  );
};

export default SearchBar;
