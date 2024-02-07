/**
 * Footer presentational component
 * 
 * App -> Footer
 */

export default function Footer() {
  return (
    <footer>
      <p>Built by Matt Fergoda</p>
      <p>Powered by <a
        href="https://openai.com/research/clip"
        target="_blank"
        rel="noreferrer">
        OpenAI's CLIP model
      </a> and <a href="https://unsplash.com/data"
        target="_blank"
        rel="noreferrer">Unsplash's open source image dataset</a></p>
      <p>
        <a
          href="https://github.com/mattfergoda/semantic-image-search-frontend"
          target="_blank"
          rel="noreferrer">
          Demo Repo
        </a> | <space/> 
        <a
          href="https://github.com/mattfergoda/semantic-image-search"
          target="_blank"
          rel="noreferrer">
          Backend Repo
        </a>
      </p>
    </footer>
  );
}