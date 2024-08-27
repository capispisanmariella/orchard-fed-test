# Orchard Frontend Developer Test

This project implements two responsive components for AEG using modern web technologies. It showcases a "Answer Your Body's Needs" section with a modal image viewer and an "All the Latest from AEG" section with article previews.

## Technologies Used

- HTML5
- SCSS (CSS preprocessor)
- JavaScript (ES6+)
- Webpack (for bundling and build process)

## Features

1. Responsive design (down to 320px)
2. Modal image viewer for "Answer Your Body's Needs" section
3. Interactive "READ MORE" links
4. Semantic HTML structure
5. Accessibility considerations (aria-labels)

## Build Process

This project uses Webpack to bundle JavaScript, compile SCSS, and optimize assets for production.

### Prerequisites

- Node.js (v12 or later recommended)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

git clone [repository-url]
cd orchard-fed-test-1

2. Install dependencies:

npm install

### Development

To run the development server:
npm start

This will start a local server, usually at `http://localhost:9000`.

### Production Build

To create a production-ready build:
npm run build
This will create a `dist` folder with optimized and minified assets.

## Design Decisions

1. SCSS: Chosen for its nesting capabilities, variables, and mixins, which make the CSS more maintainable and easier to read.

2. Webpack: Used for its powerful bundling capabilities and to optimize assets for production.

3. Semantic HTML: Improves accessibility and SEO.

4. Flexbox and Grid: Used for layout to ensure responsiveness and ease of alignment.

5. JavaScript: Keeps JavaScript modular for better organization and potential scalability.

6. Responsive Images: Ensures images are responsive and optimized for different screen sizes.

7. Accessibility: Added aria-labels to improve screen reader experience.

## Browser Compatibility

This layout is designed to work in the latest versions of Chrome, Firefox, and Edge.
