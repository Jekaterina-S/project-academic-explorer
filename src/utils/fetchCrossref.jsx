export const fetchFromCrossref = async (query, maxResults = 10) => {
  const url = `https://api.crossref.org/works?query=${encodeURIComponent(query)}&sort=created&order=desc&rows=${maxResults}`;

  const response = await fetch(url);
  const data = await response.json();

  return (data.message?.items || []).map((item) => ({
    title: item.title?.[0] || 'No title',
    authors: item.author?.map((a) => `${a.given || ''} ${a.family || ''}`.trim()) || ['Unknown author'],
    summary: item.abstract || '',
    published: item.issued?.['date-parts']?.[0]?.[0] || 'Unknown',
    link: item.URL || '',
    source: item.source || 'crossref',
  }));
};
