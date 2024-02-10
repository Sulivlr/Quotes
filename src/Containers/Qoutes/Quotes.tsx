import {useCallback, useEffect, useState} from 'react';
import {ApiQuotes, Quote} from '../../types';
import axiosApi from '../../axiosApi';
import {Link} from 'react-router-dom';

const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = useCallback(async () => {
    const response = await axiosApi.get<ApiQuotes | null>('/quotes.json');
    const quotes = response.data;

    if (quotes) {
      setQuotes(Object.keys(quotes).map(id => ({
        ...quotes[id],
        id
      })))
    } else {
      setQuotes([])
    }

  }, []);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);


  return (
    <div className="mt-3 d-flex flex-column gap-3" >
      {quotes.map(quote => (
        <div key={quote.id} className="card">
          <div className="card-body">
            <h5>{quote.category}</h5>
            <Link className="btn btn-primary" to={'/quotes/' + quote.id}>Choose here!</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quotes;