# Tailwind-Easy-Themer

A lightweight library for dark/light mode switching that integrates with a Tailwind / React / Typescript workflow.


### Demo

![Theme Toggler GIF](ThemeSwitcher.webm)

### Usage

If you're using NPM:

```npm install tailwind-easy-themer```

```
import ThemeToggle from 'tailwind-easy-themer';

function App() {
  return (
    <div className="App">
      <h1>Theme Mode Toggle Example</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;
```

E.g - when using tailwind, defaults are:

```
<div class = "dark:stroke-white stroke-black" >
```

---

If not using NPM, just stick the source code in a file and see the note below.

### Important Note

I've included a post-install script that *should* update your tailwind.config.ts 

If it doesn't - just slide this in before the theme key:

```
darkMode: 'class',
```

### Next.js Users

Don't forget to put ```'use client'```` at the top of the file in which you import the theme switcher!

### Props

The ThemeToggle component accepts the following props:

    initialDarkMode: (optional) Specifies the initial state of the dark mode toggle. Default is false.
    storageKey: (optional) Specifies the key to use for storing the dark mode state in local storage. Default is 'darkMode'.

### License

This project is licensed under the MIT License.