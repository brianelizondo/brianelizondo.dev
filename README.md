<div align="center">
    <img alt="Brian Elizondo Logo" src="https://www.github.com/brianelizondo/brianelizondo.dev/public/images/brianelizondo_logo.png" width="125" />
</div>
<h1 align="center">brianelizondo.dev</h1>
<p align="center">
    This is the first version of my portfolio website using TypeScript, JavaScript, React, Bootstrap, jQuery and CCS Animations/Transitions.
</p>

![preview](https://www.github.com/brianelizondo/brianelizondo.dev/public/images/brianelizondo_screenshot.jpg)

## 🚀 Building and Deploy for Production

I used the [gh-pages](https://www.npmjs.com/package/gh-pages) library to display the page in GitHub Pages but you can use your preferred method.

1. Install `gh-pages` as a development dependency
    ```console
    $ npm install gh-pages --save-dev
    ```

2. Add the `homepage` property to the `package.json` with your personal domain or GitHub Page personal domain.
    ```json
    {
        "homepage": "https://brianelizondo.dev"
    }
    ```

3. Add the following commands in the `script` property of the `package.json` file.
    ```json
    {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ```

4. Deploy your website in GitHub Pages with your personal domain, this will create a `gh-pages` branch on your repo and push only the files inside the build directory to it.
    ```console
    $ npm run deploy
    ```

5. Go to your GitHub repo's Settings then under `Pages` verify that GitHub set the source to `gh-pages` branch.


## 🎨 Pallet Color Reference
| Color Name     | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Black          | ![#000000](https://via.placeholder.com/10/000000?text=+) `#000000` |
| White          | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) `#ffffff` |
| Green Yellow   | ![#adff2f](https://via.placeholder.com/10/adff2f?text=+) `#adff2f` |