# Political Nakshatra (राजनीति नक्षत्र)

A 3D political compass specifically designed for Indian political realities. Find your position in India's political constellation.

## ⚠️ Translation Status

**Marathi translations are AI-generated and for testing purposes only.**

The 15 quiz vignettes in Marathi (`src/i18n/locales/mr/questions.json`) have been translated using AI and **require native Marathi speaker review** before production deployment.

**Known limitations:**
- May contain grammatical errors or awkward phrasing
- Political terminology may not be optimal
- Cultural nuances may be missed
- Scenario phrasing may feel unnatural

**Contributing**: If you're a native Marathi speaker with political knowledge, we'd welcome your review! See [TRANSLATION_REVIEW.md](TRANSLATION_REVIEW.md) for the review checklist.

## 🌟 About

Political Nakshatra addresses the fundamental limitations of the traditional Western political compass (Left-Right economic, Authoritarian-Libertarian social) when applied to Indian politics. Instead, it uses a three-dimensional framework based on academic research on multi-ethnic, post-colonial democracies.

### The Three Axes

1. **Statism Axis** 📊
   - Measures views on state intervention in economy and society
   - Economic: Government control vs market freedom
   - Social: State-led transformation vs traditional autonomy

2. **Recognition Axis** 👥
   - Measures support for group-based rights and protections
   - Affirmative action and reservations (SC/ST/OBC)
   - Minority rights vs uniform national identity

3. **SID Axis** (Structural Incentive Distribution) ⚖️
   - Measures resource distribution philosophy
   - Universalist: Rule-based, objective criteria
   - Particularist: Identity networks, patronage systems

## 🚀 Features

- **15 situational vignettes** - scenario-based questions covering all three axes
- **Interactive 3D visualization** with constellation theme
- **Comprehensive comparison** - see your position relative to 16 Indian leaders and 8 global leaders
- **Privacy-focused** - all data stays in your browser
- **Bilingual** - English and Marathi (AI-translated, needs review)
- **Mobile-friendly** responsive design
- **GitHub Pages** deployment ready

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: Tailwind CSS v4
- **Routing**: React Router
- **State Management**: React Context API
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/political-nakshatra.git
cd political-nakshatra

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Project Structure

```
political-nakshatra/
├── src/
│   ├── components/        # React components
│   │   ├── layout/        # Header, Footer, Layout
│   │   ├── quiz/          # Quiz UI components
│   │   └── visualization/ # 3D Compass
│   ├── contexts/          # React Context (QuizContext)
│   ├── data/              # Questions, parties data
│   ├── pages/             # Page components
│   └── utils/             # Scoring algorithm, helpers
├── public/                # Static assets
└── .github/workflows/     # GitHub Actions deployment
```

## 📊 Question Design

The quiz uses a **vignette-based framework** with 15 situational scenarios (5 per axis):

- **Statism (राज्यवाद)**: Government bailouts, price controls, public utilities, land redistribution, social safety nets
- **Recognition (मान्यता)**: Affirmative action, cultural assimilation, religious expression, identity data, protest policing
- **SID (संरचनात्मक प्रोत्साहन वितरण)**: Contract awarding, family loyalty, patronage politics, networking ethics, national interest

Each vignette presents a realistic political scenario. Users respond on a 5-point Likert scale (Strongly Disagree to Strongly Agree). 4 questions are reverse-scored for balance (ST_05, RC_02, RC_04, SID_04).

**Coordinate System**: Results are plotted on a [-10, +10] scale for each axis, providing granular positioning.

## 🎨 Political Entity Positions

The app includes estimated positions for:

**16 Indian Political Leaders:**
- Narendra Modi, Rahul Gandhi, Arvind Kejriwal, Mamata Banerjee, M.K. Stalin, Akhilesh Yadav, Mayawati, Amit Shah, Rajnath Singh, Nirmala Sitharaman, Mulayam Singh Yadav, M. Karunanidhi, Nitish Kumar, Yogi Adityanath, N. Chandrababu Naidu, Sharad Pawar

**8 Global Leaders (for comparison):**
- Keir Starmer (UK Labour), Rishi Sunak (UK Conservative), Justin Trudeau (Canada Liberal), Pierre Poilievre (Canada Conservative), Donald Trump (US Republican), Viktor Orbán (Hungary Fidesz), Lee Kuan Yew (Singapore PAP), Xi Jinping (China CCP)

**8 Indian Political Parties:**
- BJP, Congress, AAP, BSP, TMC, CPI(M), SP, DMK

All positions are based on policy analysis, electoral strategies, and governance records. These are academic assessments, not official positions.

## 🔒 Privacy

**Your data never leaves your device.** Political Nakshatra runs entirely in your browser:

- No account creation required
- No data collection or tracking
- No cookies or analytics
- Responses stored in browser localStorage only
- Clear data anytime by resetting the quiz

## 📚 Academic Foundation

This framework is based on research including:

- Chhibber & Verma (2018): *Ideology and Identity: The Changing Party Systems of India*
- Kanchan Chandra: *Why Ethnic Parties Succeed: Patronage and Ethnic Headcounts in India*
- Research on caste networks, reservations, and patronage democracy

## 🚀 Deployment

### GitHub Pages

1. Update `base` in `vite.config.js` to match your repository name
2. Push to GitHub
3. Enable GitHub Pages in repository settings (Source: GitHub Actions)
4. The site will auto-deploy on push to `main` branch

```js
// vite.config.js
export default defineConfig({
  base: '/your-repo-name/', // Update this
  // ...
})
```

## 🤝 Contributing

Contributions are welcome! Priority areas:

- **URGENT**: Native Marathi speaker review of AI-generated translations (see [TRANSLATION_REVIEW.md](TRANSLATION_REVIEW.md))
- Additional vignettes for better calibration
- More political leaders (Indian and global)
- Translations to other Indian languages (Hindi, Tamil, Telugu, Bengali)
- Improved 3D visualization
- Leader position refinements based on new vignettes
- User testing and feedback

## 📝 License

MIT License - feel free to use and modify

## 🙏 Credits

- Framework design based on academic research on Indian politics
- Built with React, Three.js, and Tailwind CSS
- Icons from Lucide React

## ⚠️ Disclaimer

This is an educational tool. Party positions are estimates based on policy analysis and should not be considered official party stances. Your political views are complex and multifaceted - this quiz provides one perspective among many.

---

**Made with ❤️ for understanding Indian politics**
