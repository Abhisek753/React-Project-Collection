
<h2>
  Start
  npm i redux react-redux axios react-router-dom@6
</h2>

<h2>Add Tailwind</h2>
<h4>
  npm install -D tailwindcss
npx tailwindcss init
</h4>
<h4> 
Replace tailwind.config.js
  
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</h4>
<h4>
  Add in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
</h4>
