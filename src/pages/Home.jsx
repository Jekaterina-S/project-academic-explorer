import { useState, useEffect } from 'react';

import SourceFilter from '../components/SourceFilter';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';
import SettingsPanel from '../components/SettingsPanel';
import ResultList from '../components/ResultList';

import { fetchFromCrossref } from '../utils/fetchCrossref';
import { fetchFromEuropePmc } from '../utils/fetchEuropePMC';

import translations from '../utils/i18n';
import { useSettings } from '../context/SettingsContext';

const Home = () => {
  const API_HANDLERS = {
    crossref: fetchFromCrossref,
    europepmc: fetchFromEuropePmc,
  };

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedSources, setSelectedSources] = useState(['crossref']); // default selection
  const [showSettings, setShowSettings] = useState(false);

  const { settings } = useSettings();
  const t = translations[settings.language];

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const promises = selectedSources.map((source) => {
        const handler = API_HANDLERS[source];
        return handler ? handler(query) : Promise.resolve([]);
      });

      const allResults = await Promise.all(promises);
      const merged = allResults.flat();
      setResults(merged);
    } catch (err) {
      console.error('Source search error:', err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // fetch at load
  useEffect(() => {
    handleSearch('');
  }, []);

  // close settings with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setShowSettings(false);
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [setShowSettings]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-end mb-4">
          <button onClick={() => setShowSettings(true)}>⚙️</button>
        </div>
        <h1 className='text-4xl mb-2'>{t.title}</h1>
        <p className="my-2 text-sm faded-text">{t.intro}</p>
        <SourceFilter selectedSources={selectedSources} onChange={setSelectedSources} />
        <SearchBar onSearch={handleSearch} />
        {loading ? <p>{t.loading}</p> : <ResultList results={results} onPreview={setSelectedArticle} />}
        <Modal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
        {showSettings && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="relative">
              <SettingsPanel />
              <button
                onClick={() => setShowSettings(false)}
                className="absolute top-2 right-2 text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
