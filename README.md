# Political Nakshatra (राजनीति नक्षत्र)

A 3D political compass specifically designed for Indian political realities. Find your position in India's political constellation.

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

- **36 carefully designed questions** covering all three axes
- **Interactive 3D visualization** with constellation theme
- **Party comparison** - see your position relative to major Indian parties
- **Privacy-focused** - all data stays in your browser
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

The quiz includes 36 questions (12 per axis):

- **Statism**: Economic statism (6) + Social statism (6)
- **Recognition**: Affirmative action (6) + Minority rights (6)
- **SID**: Distribution mechanisms (6) + Governance philosophy (6)

Questions use a 5-point Likert scale (Strongly Disagree to Strongly Agree) with some reverse-scored for balance.

## 🎨 Party Positions

The app includes estimated positions for 8 major Indian political parties:

- BJP, Congress, AAP, BSP, TMC, CPI(M), SP, DMK

Party positions are based on policy analysis, electoral strategies, and governance records. These are academic assessments, not official party positions.

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

Contributions are welcome! Areas for improvement:

- Additional questions for better calibration
- More political parties
- Translation to Indian languages
- Improved 3D visualization
- Party position refinements

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
