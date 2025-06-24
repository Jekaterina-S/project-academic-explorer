import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import translations from '../utils/i18n';

const NotFound = () => {
  const { settings } = useSettings();
  const t = translations[settings.language].notFound;

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <h1 className="text-4xl mb-4">{t.title}</h1>
        <p className="mb-6">{t.message}</p>
        <Link to="/" className="px-4 py-2 rounded">
          {t.back}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
