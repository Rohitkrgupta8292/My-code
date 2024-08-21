## How to Setup Tailwind CSS

Step 1: Run the following Commands

```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.config.js file to include this line:

```
content: ["*.html"],
```

Step 3: Create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Step 4: Include your src/output.css file in html

Step 5: Run the following commands
```
npx tailwindcss -i ./src/input.css -0 ./src/output.css --watch
```
Step 6: link your output.css  file into your HTML page by adding a <link> tag

Now you can start coding with Tailwind CSS!