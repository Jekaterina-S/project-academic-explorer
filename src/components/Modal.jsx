import { useEffect } from 'react';
import { useSettings } from '../context/SettingsContext';
import translations from '../utils/i18n';

const Modal = ({ article, onClose }) => {
  if (!article) return null;

  const { settings } = useSettings();
  const t = translations[settings.language];
  const themeBg = settings.theme === 'dark' ? 'bg-gray-900' : 'bg-white';

  const cleanSummary = article.summary
    ?.replace(/<\/?jats:[^>]*>/g, '')        // Remove JATS tags
    .replace(/<\/?[^>]+>/g, '')              // Remove HTML/XML tags
    .replace(/&lt;[^&]+&gt;/g, '');          // Remove encoded tags
  
  // close article preview with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 items-center flex justify-center">
      <div className={`${themeBg} p-6 rounded shadow-lg max-w-xl w-full relative`}>
        <div className="flex justify-end top-2 right-2">
          <button
          onClick={onClose}
          className="text-2xl"
        >
          &times;
        </button>
        </div>
        
        <h2 className="text-2xl mb-2">{article.title || t.resultNoTitle}</h2>

        <p className="text-sm mb-2">
          <strong>{t.authors}</strong>{' '}
          {Array.isArray(article.authors) ? article.authors.join(', ') : t.unknownAuthors}
        </p>

        <p className="text-sm mb-2">
          <strong>{t.published}:</strong> {article.published || t.unknownPublished}
        </p>

        <p className="text-sm mb-2">
          <strong>{t.source}:</strong> {article.source}
        </p>

        <p className="abs-text whitespace-pre-wrap">
          {article.summary ? cleanSummary : t.noAbstract}
        </p>

        {article.link ? (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4"
          >
            {t.viewFull}
          </a>
        ) : (
            <p className="faded-text">{t.noOnlineSource}</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
