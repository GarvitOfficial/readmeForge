// Bio Section Component
const bio = {
  id: 'bio',
  name: 'Bio Section',
  icon: '👨‍💻',
  template: `# Hello, World! 👋 I'm [Your Name]

<div align="center">
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30px"/>
</div>

### Passionate Developer & Problem Solver 💻✨

- 🔭 Currently working on **[Your Current Project]**
- 🌱 Learning **[Technology you're learning]**
- 👯 Looking to collaborate on **Open Source Projects**
- 💬 Ask me about **[Your expertise]**
- 📫 Reach me: **[your.email@example.com]**
- ⚡ Fun fact: **Coffee + Code = Magic** ☕`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(bio);
}