# 🖥️ Hacker Portfolio

A cyberpunk-styled portfolio website built with **Next.js**, **Tailwind CSS**, and **JavaScript**.

```
   ___                  _
  / _ \___ ___ __  __  / |
 / ___/ -_) -_) \ / / / /
/_/   \__/\__/_\_\/_/ /_/

> system.initialize()
$ PORTFOLIO_LOADED
> access_level: PUBLIC
```

## 🎨 Features

- ✨ **Hacker/Cyberpunk** aesthetic with neon colors
- 🎯 **High Performance** with Next.js 15
- 💻 **Responsive Design** - Works on all devices
- 🌈 **Neon Effects** - Glitch animations and terminal styling
- ⚡ **Fast** - Optimized for speed
- 🔒 **Secure** - Best practices implemented
- 📱 **Mobile First** approach
- 🎪 **Interactive** animations and effects

## 🚀 Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 3.4
- **Language:** JavaScript (No TypeScript)
- **Fonts:** Courier Prime (Monospace)
- **Icons:** Unicode/Text-based

## 📋 Prerequisites

- Node.js 14+ 
- npm or yarn

## 🔧 Installation

```bash
# Clone or navigate to the project
cd scicolone.dev

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
scicolone.dev/
├── app/
│   ├── layout.jsx       # Root layout
│   ├── page.jsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.jsx       # Navigation bar
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Projects.jsx     # Projects section
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer section
├── package.json
├── tailwind.config.js
├── next.config.js
└── vercel.json
```

## 🎨 Customization

### Change Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  hacker: {
    dark: '#0a0e27',      // Main background
    darker: '#050812',    // Darker background
    accent: '#00ff41',    // Main color (neon green)
    cyan: '#00ffff',      // Cyan neon
    pink: '#ff006e',      // Pink neon
    purple: '#9d00ff',    // Purple neon
  },
}
```

### Change Personal Info

1. **Name/Title** - Edit `components/Navbar.jsx`
2. **Hero Text** - Edit `components/Hero.jsx`
3. **About Section** - Edit `components/About.jsx`
4. **Projects** - Edit `components/Projects.jsx`
5. **Contact Info** - Edit `components/Contact.jsx`

### Add New Projects

In `components/Projects.jsx`, add to the projects array:

```javascript
{
  id: 4,
  title: 'Your Project',
  description: 'Project description',
  tech: ['Tech1', 'Tech2'],
  status: 'ACTIVE',
  level: '█████',
},
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel dashboard.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run linter
npm run format    # Format code with Prettier
```

## 🎯 Features Explained

### Terminal Styling
All components are styled to look like a hacker terminal with monospace fonts and command-line prompts.

### Glitch Effects
Text has animated glitch effects for a cyberpunk feel.

### Neon Colors
- **Green** (#00ff41) - Primary accent
- **Cyan** (#00ffff) - Secondary accent
- **Pink** (#ff006e) - Tertiary accent
- **Purple** (#9d00ff) - Additional accent

### Animations
- **Glitch** - Text distortion effect
- **Flicker** - Terminal flicker effect
- **Scan** - Scanline effect across the page
- **Matrix Rain** - Background matrix effect

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📝 License

MIT - Feel free to use this code for your own portfolio.

## 🤝 Contributing

Contributions welcome! Feel free to fork and submit pull requests.

---

**Built with ❤️ using Next.js & Tailwind CSS**

```
$ exit
> connection closed
> [404_Nothing_Illegal_Here.js]
```
