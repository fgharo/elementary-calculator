Initializing a react pwa that uses TypeScript and Tailwind CSS.

1. Use create-react-app via npx to initialize a react project folder that has typescript and pwa configurations.
npx create-react-app elementary-calculator --template cra-template-pwa-typescript
cd elementary-calculator

2. Install dev dependencies that will allow us to use tailwind.
npm install -D tailwindcss postcss autoprefixer

3. Initialize a `tailwind.config.js` and `postcss.config.js` file
npx tailwindcss init -p