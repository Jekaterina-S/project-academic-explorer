import React from 'react';
import translations from '../utils/i18n';
import { useSettings } from '../context/SettingsContext';

const SourceFilter = ({ selectedSources, onChange }) => {
  const { settings } = useSettings();
  const t = translations[settings.language];

  const SOURCES = [
    {
      id: 'crossref',
      name: 'CrossRef',
      description: t.sources.crossref.description,
    },
    {
      id: 'europepmc',
      name: 'Europe PMC',
      description: t.sources.europepmc.description,
    },
  ];

  const toggleSource = (id) => {
    const newSelection = selectedSources.includes(id)
      ? selectedSources.filter((s) => s !== id)
      : [...selectedSources, id];
    onChange(newSelection);
  };

  return (
    <div className="space-y-3">
      <h3>{t.filterTitle}</h3>
      <ul className="space-y-2">
        {SOURCES.map((source) => (
          <li key={source.id} className="border p-3 rounded shadow-sm">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedSources.includes(source.id)}
                onChange={() => toggleSource(source.id)}
                className="mt-1"
              />
              <div>
                <div className="font-medium">{source.name}</div>
                <p>
                  {source.description}
                </p>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceFilter;
