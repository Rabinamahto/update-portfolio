# 🌟 Rabina Kumari - Portfolio Website

A modern, responsive, and interactive portfolio website showcasing my skills, projects, and professional journey as a Software Engineer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism UI** with smooth gradients
- **Dark/Light Theme Toggle** with persistent preferences
- **Smooth Animations** using Framer Motion
- **Responsive Design** - Works on all devices
- **Custom Scrollbar** and scroll progress indicator

### 🚀 Interactive Components
- **Typing Animation** in hero section
- **Skill Progress Bars** with animated reveals
- **Project Filters** for easy navigation
- **Timeline View** for experience and education
- **Modal Windows** for certificates and images
- **Back to Top Button** for better UX

### 💻 Tech Stack Display
- Frontend: HTML, CSS, JavaScript, React, TypeScript, Next.js
- Backend: Node.js, Express.js, MongoDB, PostgreSQL
- Tools: Git, GitHub, Docker, AWS, Figma, Canva
- Soft Skills: Problem Solving, Communication, Leadership

### 📱 Sections
1. **Hero** - Eye-catching introduction with social links
2. **About** - Professional summary with highlights
3. **Experience** - Work history and education timeline
4. **Skills** - Categorized tech stack with proficiency levels
5. **Projects** - Filterable portfolio showcase
6. **Achievements** - Certifications and accomplishments
7. **Contact** - Interactive form with social links

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **React Type Animation** - Typing effects
- **React Intersection Observer** - Scroll animations

### Styling
- **CSS3** - Custom styles with CSS variables
- **Modern CSS Features** - Grid, Flexbox, Animations
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/rabinakumari/portfolio.git
cd portfolio/react
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 📂 Project Structure

```
react/
├── public/              # Static assets
│   ├── img.png         # Profile picture
│   ├── Diploma.jpg     # Certificates
│   └── Rabina.png      # Additional images
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollProgress.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── App.css         # Base styles
│   └── modern-styles.css # Modern UI styles
├── index.html
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`Hero.jsx`)
   - Update name, titles, and social links
   - Replace profile image in `public/` folder

2. **Skills** (`Skills.jsx`)
   - Modify `skillsData` object
   - Add/remove technologies
   - Update proficiency levels

3. **Projects** (`Projects.jsx`)
   - Update `sampleProjects` array
   - Add project images, links, and descriptions

4. **Experience** (`Experience.jsx`)
   - Update `experiences` array
   - Add work history and education

5. **Contact Form** (`Contact.jsx`)
   - Update email and social links

### Customize Colors

Edit CSS variables in `App.css`:

```css
:root {
    --primary-color-light: #6366f1;  /* Main brand color */
    --secondary-color: #8b5cf6;      /* Accent color */
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🌐 Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+
- 🎯 **First Contentful Paint:** < 1s
- 🚀 **Time to Interactive:** < 2s
- 📱 **Mobile Friendly:** 100%

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rabina Kumari**
- GitHub: [@rabinakumari](https://github.com/rabinakumari)
- LinkedIn: [Rabina Kumari](https://linkedin.com/in/rabinakumari)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ **Star this repo** if you found it helpful!

Made with ❤️ by Rabina Kumari
