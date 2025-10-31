
# CardGenChecker

A desktop card generator and checker built with Electron and React.

## Features
- Generate Luhn-valid card numbers with custom BIN prefix
- Check card numbers for Luhn validity and issuer
- Simple, modern GUI

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   cd renderer && npm install
   cd ..
   ```
2. Start the app (dev mode):
   ```bash
   npm start
   ```
3. Build for production:
   ```bash
   npm run make
   ```

## Project Structure

```
CardGenChecker/
│
├── src/                  # Electron main (Node.js)
│   └── main.js
├── renderer/             # React app (GUI)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── Generator.js
│   │   ├── Checker.js
│   │   └── index.js
│   └── package.json
├── package.json          # Root (Electron + Forge)
├── forge.config.js       # Build config
├── build.bat             # Build .exe
└── README.md             # Updated
```
