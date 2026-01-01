import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    // Call the Tailwind CSS plugin function
    tailwindcss(),
    // Call the Autoprefixer plugin function
    autoprefixer()
  ],
};