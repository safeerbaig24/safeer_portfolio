# React Developer Portfolio

A modern, responsive portfolio website built with React to showcase my skills, projects, and experience as a developer.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized for speed and performance
- **Sections**:
  - Hero section with introduction
  - About me section
  - Skills & Technologies
  - Featured Projects
  - Contact form

## 🛠️ Technologies Used

- React 18
- CSS3
- React Icons
- GitHub Pages (for deployment)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/safeerbaig/react-developer-portfolio.git
cd react-developer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Git installed on your machine

### Steps:

1. **Create a GitHub repository** (if you haven't already):
   - Go to GitHub and create a new repository
   - Name it `react-developer-portfolio` (or your preferred name)

2. **Update the homepage in package.json**:
   - The homepage is already set to: `https://safeerbaig.github.io/react-developer-portfolio`
   - Update it with your GitHub username if different

3. **Initialize Git and push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/safeerbaig/react-developer-portfolio.git
git push -u origin main
```

4. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

5. **Enable GitHub Pages** (if not auto-enabled):
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll to "Pages" section
   - Select "gh-pages" branch as the source
   - Click Save

6. **Access your deployed site**:
   - Your portfolio will be live at: `https://safeerbaig.github.io/react-developer-portfolio`
   - It may take a few minutes for the changes to propagate

## 📝 Customization

### Update Personal Information:
1. Edit `src/components/Hero.js` - Update name and introduction
2. Edit `src/components/About.js` - Update about section and technologies
3. Edit `src/components/Projects.js` - Update projects with your own
4. Edit `src/components/Contact.js` - Update contact information and social links
5. Update LinkedIn profile link in Hero and Contact components

### Change Colors:
- Main color scheme is defined in CSS files
- Primary color: `#64ffda` (cyan)
- Background: `#0a192f` (dark blue)
- Text colors: `#ccd6f6`, `#8892b0`

### Add More Projects:
- Edit `src/components/Projects.js`
- Add new project objects to the `projects` array

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Safeer Baig**
- LinkedIn: [https://www.linkedin.com/in/safeer-baig-84230b192/](https://www.linkedin.com/in/safeer-baig-84230b192/)
- GitHub: [@safeerbaig](https://github.com/safeerbaig)

---

Made with ❤️ using React

