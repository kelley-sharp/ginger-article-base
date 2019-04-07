import axios from 'axios';
import formatData from '../helpers/formatData';

export async function getArticles() {
  const { data } = await axios.get(
    'http://export.arxiv.org/api/query?search_query=%28%28cat:stat.ML OR cat:cs.SI OR cat:cs.LG OR cat:9-bio.NC OR cat:stat.AP OR cat:cs.CV OR cat:physics.bio-ph OR cat:stat.ME OR cat:cs.AI%29 AND %28abs:psychiatry OR abs:psychotherapy OR abs:mental health OR abs:mental illness OR abs:psychology%29%29&sortBy=submittedDate&sortOrder=descending',
    { responseType: 'text' }
  );

  console.log(data);

  return formatData(data);
}
