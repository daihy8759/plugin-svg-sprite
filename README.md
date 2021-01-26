# plugin-svg-sprite

SVG sprite plugin for [Vite2](https://github.com/vitejs/vite)

## install

```
npm i plugin-svg-sprite -D
```

## Usage

vite.config.js:

```javascript
import svgSprite from 'plugin-svg-sprite';

const config = {
    plugins: [svgSprite()],
};
```

app code:

```javascript
const modules = import.meta.globEager('./assets/icons/svg/*.svg');
console.log(modules);
// or
import appIconId from './path/to/icons/app.svg';

// react or vue component, as you want
export default function App() {
    return (
        <svg class="svg-icon">
            <use href="#icon-system"></use>
        </svg>
    );
}
```
