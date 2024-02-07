const BASE_API_ENDPOINT = "https://35.86.74.230:8000/images/"

/** Get all images
 * Fetches images from the api with an optional search term q.
 * Returns images ordered by relevance to the search term.
 * 
 * q: string containing search term
 * limit: integer containing number of images to fetch
 * 
 * Returns: [{ name, aws_image_src, exif_data, uploaded_at }, ...] 
 * where exif_data: { Make, Model, Orientation, DateTime, ... }
 * 
 */

export async function getImages(q, limit=25) {
  const url = new URL(BASE_API_ENDPOINT);

  if (q) url.searchParams.append('q', q);
  url.searchParams.append('limit', limit);

  const response = await fetch(url);
  const imagesData = await response.json();

  return imagesData;
}