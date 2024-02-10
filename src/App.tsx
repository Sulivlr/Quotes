import Appbar from './components/Appbar/Appbar';
import {Route, Routes} from 'react-router-dom';
import QuoteForm from './Containers/QouteForm/QuoteForm';
import Quotes from './Containers/Qoutes/Quotes';
import Quote from './Containers/Quote/Quote';

const App = () => (
  <>
    <header>
      <Appbar/>
    </header>
    <main className="container-fluid">
      <Routes>
        <Route path="/" element={<Quotes/>} />
        <Route path="/new-quote" element={<QuoteForm/>} />
        <Route path="/quotes/:id" element={<Quote/>} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </main>
  </>
);

export default App;
