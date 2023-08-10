import './App.css';
import Row from './Row'
import requests from './requests.js';

function App() {
  return (
    <div className="App">

      We will rock the app

      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals} 
      />
      <Row 
        title="Trending"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  );
}

export default App;
