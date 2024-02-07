import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


/** Images presentational component
 * 
 * Props:
 *  - images: [{ name, aws_image_src, exif_data, uploaded_at }, ...]
 * 
 * App ->
 */

export default function Images({ images }) {
  return (
    <Box 
      sx={{
         width: "99%", 
         height: "100%", 
         margin: "auto",
         overflowY: 'scroll' }}>
      <ImageList 
        sx={{ width: "90%", height: 1000, margin: "auto" }} 
        gap={1}
        cols={3}>
          
        {images.map((image) => (
          <ImageListItem key={image.name}>
            <img
              key={image.name}
              //srcSet={`${image.aws_image_src} 2x`}
              src={image.aws_image_src}
              alt={image.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );

}