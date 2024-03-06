# LMS FRONTEND

### Setup instruction

1. Clone the project

```
  git clone https://github.com/Saurabh8423/lms-frontend.git

```

2. Move into the directory

```
   cd lms-frontend
```
3. install dependencies

```
   npm i
```

4. run the server

```
npm run dev
```

### Setup struction for tailwind

[tailwind offcial instruction doc] (https://tailwindcss.com/docs/installation)

1. Install tailwind css in vite

```
npm install -D tailwindcss postcss autoprefixer
```

2. create tailwind config file

```
npx tailwindcss init -p
```

3. Add file extention to tailwind  config file in the content property

```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

```

4. Add the Tailwind directives to your top of index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Adding plugins and dependencies

npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

### Configure auto import sort esline

1. Install simple import sore
```
npm i -D eslint-plugin-simple-import-sort
```
2. Add rule in `.eslint.cjs`

```
'simple-import-sort/imports' : 'error',
```

3. add simple-import-sort in `.eslint.cjs`
```
plugins: ['react-refresh', 'simple-import-sort'],
```
4. To enable auro import sort on file save in vccode

-Opne `setting.json` (Settings option - setting- search seting than find the Edit in seeting.json click)
- add the follong config

```
"editor.codeActionOnSave": {
  "sourse.fixAll.eslint": true
}
```