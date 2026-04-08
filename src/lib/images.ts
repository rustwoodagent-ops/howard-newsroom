// Helper to get correct image path with basePath for GitHub Pages
// Always use basePath for GitHub Pages deployment
const basePath = "/howard-newsroom";

export function getImagePath(path: string): string {
  // If path already starts with basePath, don't add it again
  if (path.startsWith(basePath + "/")) {
    return path;
  }
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}
