import React from 'react';
import { useSettings } from '../context/SettingsContext';
import translations from '../utils/i18n';

const SettingsPanel = () => {
  const { settings, setSettings } = useSettings();
  const t = translations[settings.language];
  const themeBg = settings.theme === 'dark' ? 'bg-gray-900' : 'bg-white';

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className={`${themeBg} w-full max-w-2xl p-6 rounded shadow space-y-6`}>
      <h3>{t.settingsTitle}</h3>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between">
        <span>{t.settings.theme}</span>
        <div className="flex gap-2">
          <button
            onClick={() => updateSetting('theme', 'light')}
            className={`px-3 py-1 rounded`}
          >
            {t.settings.themeLight}
          </button>
          <button
            onClick={() => updateSetting('theme', 'dark')}
            className={`px-3 py-1 rounded`}
          >
            {t.settings.themeDark}
          </button>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="flex items-center justify-between">
        <span>{t.settings.language}</span>
        <div className="flex gap-2">
          <button
            onClick={() => updateSetting('language', 'en')}
            className={`px-3 py-1 rounded`}
          >
            EN
          </button>
          <button
            onClick={() => updateSetting('language', 'et')}
            className={`px-3 py-1 rounded`}
          >
            ET
          </button>
        </div>
      </div>

      {/* Font Size Selector */}
      <div className="flex items-center justify-between">
        <span>{t.settings.fontSize}</span>
        <select
          value={settings.fontSize}
          onChange={(e) => updateSetting('fontSize', e.target.value)}
          className="px-2 py-1 rounded border"
        >
          <option value="text-sm">{t.settings.textSmall}</option>
          <option value="text-base">{t.settings.textBase}</option>
          <option value="text-lg">{t.settings.textLarge}</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsPanel;
