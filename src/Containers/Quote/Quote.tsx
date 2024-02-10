import {Link, useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import {ApiQuote} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const Quote = () => {

  const params = useParams();

  const [quote, setQuote] = useState<ApiQuote | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    const response = await axiosApi.get<ApiQuote | null>('/quotes/' + params.id + '.json');
    setQuote(response.data)
    console.log(response.data)
    setLoading(false);
  }, [params.id]);

  useEffect(() => {
    void fetchQuote();
  }, [fetchQuote]);

  let area = <Spinner/>;

  if (!loading && quote) {
    area = (
      <div>
        <h1>{quote.category}</h1>
        <p>{quote.text}</p>
        <h3>{quote.author}</h3>
        <div>
          <button className="btn btn-danger">Delete</button>
          <Link to={'/quotes/' + params.id + '/edit'} className="btn btn-danger m-2 ">Edit</Link>
        </div>
      </div>
    )
  } else if (!loading &&!quote) {
    area = (
      <h1>Wrong page!</h1>
    )
  }

  return area;
};

export default Quote;