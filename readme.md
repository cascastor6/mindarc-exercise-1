# Exercise 1 by Ponch Castor
Version: 1.0.2
[Exercise 2](https://github.com/cascastor6/mindarc-exercise-2)

## Features
- single JS file for both mobile and web versions of components
- modular, easily reusable and modifiable components
- separation of data/variables and UI elements
- mobile and web UI


## Initialization and Running the App
Download the repository from github, and then clone it into your machine with 'git clone <link-to-repository>'
Change your terminal's directory to mindarc-exercise-1 (can be done using 'cd mindarc-exercise-1' in the console)
Run 'npm install' to download the dependencies of the program
Open up the directory in your terminal and type 'npm run start', then proceed to enter localhost:3000 into your browser's address bar to open the program

## Architecture
The UI is separated into different folders per component with all relevant UI assets in a subfolder.
An example component folder structure is:
    - component
        - component-name
            - component-name.js (the exported React component)
            - assets
                - image.png (if any relevant)
                - component-name.css
Variable data is separated into data.js in the data folder see how to edit and add more data below.

## How to Use 
### Responsive Design
Using 'react-responsive' package, you can determine whether the viewport is mobile or desktop by pasting the following import at the top of your file
```import { useMediaQuery } from "react-responsive";```
Afterwards, paste this boolean into your function body and use it accordingly. 
```
const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
```

### Changing name
To change name from the default "Developer", change the value of "username" in src/data/data.js

### Adding Article Cards
To add extra images, copy the desired image into src/component/card/assets/ and import it as a named import to data.js, then use that as the image link.

To add article cards, simply access src/data/data.js and add to the array, adding a sub-array containing the image-link and body text of the new cards. 
