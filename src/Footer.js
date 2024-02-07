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
    </footer>
  )
}