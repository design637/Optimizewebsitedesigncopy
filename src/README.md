# IronFit Industries

E-commerce website for athletic wear and supplements.

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   
3. **Open in browser:**
   - The dev server will show you a URL (usually `http://localhost:5173`)
   - Open that URL in your browser

## Build for Production

```bash
npm run build
```

This creates a `dist` folder with the production-ready files.

## Deploy

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. It will auto-detect Vite and deploy

### Netlify
1. Push to GitHub
2. Import project in Netlify
3. It will auto-detect Vite and deploy

OR use the Netlify CLI:
```bash
netlify deploy --prod
```

## Important Notes

- **DO NOT** open `index.html` directly in the browser - it won't work
- Always use `npm run dev` for local development
- The app requires a build step to work properly
