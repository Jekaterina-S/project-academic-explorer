import React from 'react';
import { useSettings } from '../context/SettingsContext';
import translations from '../utils/i18n';

const ResultList = ({ results, onPreview }) => {
  const { settings } = useSettings();
  const t = translations[settings.language];

  if (!results.length) return <p className="faded-text">{t.noResults}</p>;

  return (
    <ul className="space-y-2">
      {results.map((item, idx) => (
        <li
          key={`${item.doi || item.id || ''}-${item.link || ''}-${idx}`}
          onClick={() => onPreview(item)}
        >
          <h2 className="text-lg">{item.title}</h2>

          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent modal
              className="text-sm"
            >
              {t.source}
            </a>
          ) : (
            <p className="faded-text">{t.noOnlineSource}</p>
          )}
          <p className="authors">{item.authors?.join(', ') || t.unknownAuthors}</p>
          <p className="faded-text">{t.published}: {item.published}</p>
          <p className="source-text">{t.source}: {item.source}</p>
        </li>
      ))}
    </ul>
  );
};

export default ResultList;
