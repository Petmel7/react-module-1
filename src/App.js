import './App.css';
import { Gallery } from './components/Gallery/Gallery';
import Title from './components/title/title';

const galleryImages = {
  title: 'Images',
  // description: 'Best images on the world',
  images: [
    'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg'
  ],
}

const { title, description, images } = galleryImages
function App() {
  return (
    <div className="App">
      Module 1 Lesson 1
      <Gallery d={description} i={images}>
        <Title value={title} />
        <p>Jast Text</p>
      </Gallery>
    </div>
  );
}

export default App;