import React, {useState} from 'react';
import './App.css';

import Category from './components/Category';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [results, setResults] = useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
      })
  }, []);

  const renderCategories = () => {
    const categories = [];
    for (let i = 0; i < results.length; i++) {
      categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title} />);
    }

    return categories;
  }
  return (
    <>
    <header>My Store</header>
    <section>
      <nav>
      {
        results && renderCategories()
      }
      </nav>
      <article>
        main content
      </article>
    </section>
    <footer>
      footer
    </footer>
    </>
  );
}

export default App;