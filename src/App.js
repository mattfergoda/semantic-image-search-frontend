import { useState, useEffect } from "react";

import './App.css';

import { getImages } from './api';
import Images from './Images';
import Search from './Search';
import Footer from './Footer';

/** Main logical component
 * 
 * State:
 *  - images: [{ name, aws_image_src, exif_data, uploaded_at }, ...] 
 *  - isLoading: bool
 * 
 * App -> { Search, Images, Footer }
 */

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchImagesOnMount() {
    fetchImages();
  }, []);

  /** Get all images from the API and update Images state
 * Takes optional parameter searchTerm.
 */

  async function fetchImages(searchTerm) {
    const images = await getImages(searchTerm);
    setImages(images);
    setIsLoading(false);
  }

  function getPageContent() {
    if (isLoading) {
      return <p>Loading...</p>
    } else {
      return (
        <div className='page-content'>
          <Search searchImages={fetchImages}/>
          <Images images={images} />
          <Footer />
        </div>
      )
    }
  }

  return (
    <div className="App">
      <h1>Semantic Image Search</h1>
      <p>
        Search 25,000 images
        based on their content using <space />
        <a 
          href="https://openai.com/research/clip" 
          target="_blank"
          rel="noreferrer">
            AI
        </a>.
        </p>
      { getPageContent() }
    </div>
  );
}

export default App;
