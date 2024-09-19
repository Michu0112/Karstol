import { readdir } from 'fs/promises';
import { join, extname } from 'path';

// Define the directory path
const directoryPath = join(import.meta.url.replace('file://', ''), '.');

// Read the files in the directory
try {
  const files = await readdir(process.argv[2] || './');

  // Filter the list of files (adjust for your image formats)
  const imageFiles = files.filter(file => {
    return ['.png', '.jpg', '.jpeg', '.gif'].includes(extname(file).toLowerCase());
  });

  // Print the array of file names
  console.log(JSON.stringify(imageFiles, null, 2));
} catch (err) {
  console.error('Unable to scan directory:', err);
}