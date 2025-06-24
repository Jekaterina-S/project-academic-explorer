export const fetchFromEuropePmc = async (query, maxResults = 10) => {
  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=${maxResults}`;
  
  const response = await fetch(url);
  const data = await response.json();

  return (data.resultList?.result || []).map((item) => ({
    title: item.title || 'No title',
    authors: item.authorString
      ? item.authorString.split(',').map((name) => name.trim())
      : ['Unknown author'],
    summary: item.abstractText || 'No abstract available.',
    published: item.pubYear || 'Unknown year',
    source: item.journalTitle + ' issue ' + item.journalIssn || item.source || 'europepmc',
  }));
};
