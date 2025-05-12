# token-demo

A React project using Style Dictionary 4 to process design tokens into CSS, SCSS, and JS variables.

## Prerequisites

- Node.js 22+ (LTS)
- npm 10+

## Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd color-tokens-react
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Generate tokens**:
   Run Style Dictionary to process tokens:

   ```bash
   npm run tokens
   ```

   This generates:

   - `src/styles/variables.css` (CSS variables)
   - `src/styles/_variables.scss` (SCSS variables)
   - `src/styles/variables.js` (JS variables)

   Example `variables.css` output:

   ```css
   :root {
     --rds-color-primitive-red-100: #ff0000;
     --rds-color-primitive-blue-100: #0000ff;
     --rds-color-semantic-primary-base: #0000ff;
     --rds-color-semantic-error-base: #ff0000;
   }
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`, displaying a color swatch demo.

## Project Structure

- `tokens/`: JSON token files (e.g., `sample-uswds-colors.json`, USWDS files).
- `src/styles/`: Generated CSS, SCSS, and JS variables.
- `src/components/`: React components (`ColorDisplay` for token demo).
- `build-tokens.js`: Script to run Style Dictionary 4.

## Using Tokens

Place your token files (`1.1-uswds-primitive-colors.json`, etc.) in `tokens/`. They must use `$value` and `$type` (DTCG format). Example:

```json
{
  "color": {
    "red": {
      "100": {
        "$value": "#ff0000",
        "$type": "color"
      }
    }
  }
}
```

If your tokens are not DTCG-compliant, install `@tokens-studio/sd-transforms`:

```bash
npm install --save-dev @tokens-studio/sd-transforms
```

Update `build-tokens.js` to include:

```javascript
import { registerTransforms } from "@tokens-studio/sd-transforms";
registerTransforms(StyleDictionary, { expand: true, excludeParentKeys: false });
```

Use `transformGroup: 'tokens-studio'` for `css` and `scss` platforms.

## Troubleshooting

If `npm run tokens` fails with "Can't register parser; parser.name must be a string":

- This is caused by `@tokens-studio/sd-transforms`. The current setup avoids this by using standard transformGroups (`css`, `scss`, `js`).
- If you need `@tokens-studio/sd-transforms`, try a newer version (`npm install @tokens-studio/sd-transforms@latest`) or report the issue at https://github.com/tokens-studio/sd-transforms.

If generated files are empty:

- Verify `tokens/` contains valid JSON files (`dir tokens\` on Windows).
- Check `npm run tokens` console output for errors (verbose logging is enabled).
- Ensure token files have `$value` and `$type`. If not, use `@tokens-studio/sd-transforms` or reformat them.
- Confirm `tokens/` path (`source: ['tokens/**/*.json']`) matches your file structure.
- Clear npm cache:
  ```bash
  del /s /q node_modules package-lock.json
  npm install
  ```
- Share console output or a sample token file for further diagnosis.

## Building for Production

```bash
npm run build
```

## License

MIT
