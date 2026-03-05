# RANDOM_NOTES

Static multi-track interview prep site covering AI, COAL, DBMS, DSA, Full Stack, OOP, OS, SE, and programming fundamentals.

## Local preview

Because this project uses relative links between many folders, open it with a local static server (recommended) instead of double-clicking files.

### Option 1: VS Code Live Server
- Install the **Live Server** extension.
- Right-click `index.html` and choose **Open with Live Server**.

### Option 2: Python
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

## GitHub Pages deployment

Repository: `ASAD2204/RANDOM_NOTES`

### 1) Push code to GitHub
If not already initialized:
```bash
git init
git add .
git commit -m "Initial commit: static interview prep portal"
git branch -M main
git remote add origin https://github.com/ASAD2204/RANDOM_NOTES.git
git push -u origin main
```

If remote already exists:
```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push
```

### 2) Enable Pages
- Open repository settings on GitHub.
- Go to **Settings → Pages**.
- Under **Build and deployment**, set:
  - **Source**: `Deploy from a branch`
  - **Branch**: `main`
  - **Folder**: `/ (root)`
- Save.

### 3) Open deployed site
After GitHub finishes deployment, your site will be available at:

`https://asad2204.github.io/RANDOM_NOTES/`

## Notes
- Entry point is root `index.html`.
- All course hubs and topic pages use relative paths and are GitHub Pages compatible.
- `.nojekyll` is included to prevent Jekyll processing.
