# Meu time

It is an application that searches for data and statistics of soccer teams.

(in progress...)

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [How to run the code](#How-to-run-the-code)
- [Author](#author)

## Overview

### Screenshot

![image](https://github.com/alexandreSouza31/Meu-time/assets/112407769/033c7bca-9014-42eb-b0ef-07f812f29560)

![image](https://github.com/alexandreSouza31/Meu-time/assets/112407769/969ce6e1-7fa7-4182-aa4e-795b955f836f)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- mobile first
- JSX
- ReactJS
- Vite
- API

### What I learned

```jsx
//onChange and onBlur in the same tag.
<select
  onChange={(e) => {
    setCountryState(e.target.value);
  }}
  onBlur={() => {
    leagueFilter(allInfo);
  }}
  name=""
  className="styles.country"
>
  {allInfo.map((c, index) => (
    <option key={index} value={c.country.name}>
      {c.country.name}
    </option>
  ))}
</select>

//props
```

### Continued development

```
Mobile first, clean code, refactoring, ReactJS, API.
```

### Useful resources

- [Rapi API](https://rapidapi.com/developer/dashboard) - I used it to get the key to use in the API.
- [API-football](https://dashboard.api-football.com/) - I used it to get the key to use in the API.(alternative)

### How to run the code?

you can download it to your machine, open your code editor terminal, go to your project root folder and type 'npm run dev' You will get an address like 'localhost:3000/' or equivalent. Copy and paste into your browser, or press CTRL + 'mouse click' on the address.

If you want to test the app without downloading the code:

- [Vercel](https://meu-time-tan.vercel.app/)

:)

## Author

- LinkdIn - Alexandre Mariano(https://www.linkedin.com/in/alexandresouza31/)
