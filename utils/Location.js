const GOOGLE_AI_KEY = "AIzaSyAxsp9ezAC86UvwfaSAVcsSpzQLutKFiT0";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_AI_KEY}`;
  console.log(imadePreviewUrl);
  return imagePreviewUrl;
}
