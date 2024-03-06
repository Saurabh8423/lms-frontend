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

