import Album from "./components/Album/index";
import Gif from "./components/gif/index";
import spotify from "./data/spotify.json";
import dataGif from "./data/gif.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <header className="App-header"></header>
      <body className="App-body">
        <div className="Album-container">
          <Album
            image={spotify.album.images[0].url}
            name={spotify.album.name}
            type={spotify.album.type}
            artist={spotify.album.artists[0].name}
          />
        </div>
        <div>
          <Gif titleGif={dataGif.title} urlGif={dataGif.url} />
        </div>
      </body>
    </div>
  );
}

export default App;
