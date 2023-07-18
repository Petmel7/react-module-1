import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Gallery } from "./components/Gallery/Gallery";
import { Hero } from "./components/hero/hero";
import Title from "./components/title/title";

const galleryImages = {
  title: "Images",
  description: "Best images on the world",
  images: [
    {
      id: "1",
      source:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    },
    {
      id: "2",
      source:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    },
  ],
};

const { title, description, images } = galleryImages;
function App() {
  return (
    <div className="App">
      Module 1 Lesson 1
      <Gallery d={description} i={images}>
        {/*if на Рякт*/}
        {title === "Images" && <Title value={title} />}
        {/* Тернарник на Рякт */}
        {title === "images" ? <h3>Показати це</h3> : <h3>Показати друге</h3>}
        <p>Jast Text</p>
        <div>
          <h2 className="titleWrapper">Lesson 2</h2>
          <Hero />
          {/* Кнопка з бібліотеки bootstrap */}
          <Button id="bsBtn" variant="outline-info">
            Info
          </Button>{" "}
        </div>
      </Gallery>
    </div>
  );
}

export default App;
