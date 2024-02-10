import React, {useState} from 'react';
import {Props} from '../../types';


const QuoteForm: React.FC<Props> = ({addQuote, deleteQuote}) => {
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');

  const Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !category || !text) return;
    addQuote({
      author, category, text,
      id: ''
    });
    setAuthor('');
    setCategory('');
    setText('');
  };

  const Delete = () => {
    deleteQuote();
  }

  return (
    <form onSubmit={Submit}>
      <div>
        <label className="form-label">
          Author:
          <input className="form-control" type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </label>
      </div>
      <div>
        <label className="form-control">
          Category:
          <select value={category}
                  onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            <option value="star-wars">Star Wars</option>
            <option value="famous-people">Famous People</option>
            <option value="saying">Saying</option>
            <option value="humour">Humour</option>
            <option value="motivational">Motivational</option>
          </select>
        </label>
      </div>
      <div>
        <label className="form-label">
          Text:
          <textarea value={text} onChange={(e) => setText(e.target.value)}/>
        </label>
      </div>
      <button className="btn btn-primary m-2" type="submit">Save</button>
      <button className="btn btn-danger" type="button" onClick={Delete}>Delete</button>
    </form>
  );
};

export default QuoteForm;
