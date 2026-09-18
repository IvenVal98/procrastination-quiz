# Discovering Your Procrastination Style

Interactive self-assessment quizzes based on  
**Sapadin, Linda. *Beat Procrastination and Make the Grade*. 1999**

## Features

- Six quizzes: Perfectionist, Dreamer, Worrier, Crisis-Maker, Defier, Overdoer
- Click **frequently / sometimes / rarely** for each question
- Live automatic scoring on every quiz:
  - Count of each answer
  - SUBTOTAL Fx2 = frequently × 2
  - SUBTOTAL S = sometimes
  - TOTAL SCORE
- Summary table with Major (≥10), Minor (5–9), and Rank
- Progress bar (0–60 questions)
- Answers saved in the browser (localStorage)
- Print / Save results button
- Works offline — pure HTML, CSS, JS

## Use on GitHub Pages

1. Create a new GitHub repository (e.g. `procrastination-quiz`).
2. Upload these three files to the root of the repo:
   - `index.html`
   - `styles.css`
   - `app.js`
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Select branch `main` (or `master`) and folder `/ (root)`.
6. Save. After a minute your site will be live at:  
   `https://YOUR-USERNAME.github.io/procrastination-quiz/`

## Local preview

Just open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).  
Or from a terminal:

```bash
# Python
python3 -m http.server 8000

# then visit http://localhost:8000
```

## Files

| File        | Purpose                          |
|-------------|----------------------------------|
| index.html  | Page structure                   |
| styles.css  | Layout and design                |
| app.js      | Quiz data, scoring, interactivity|
| README.md   | This file                        |

No build step, no dependencies, no backend.
