// Languages Component
const languages = {
  id: 'languages',
  name: 'Programming Languages',
  icon: '💻',
  template: `## 💻 Programming Languages

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=\${username}&layout=compact&theme=radical" alt="Top Languages" />
</div>

### 🚀 Tech Stack
- **Frontend:** JavaScript, TypeScript, React ⚛️
- **Backend:** Python, Node.js, Java ☕
- **Database:** PostgreSQL, MongoDB 🗄️
- **Tools:** Docker, Git, AWS ☁️

*Always learning something new!* 📚`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(languages);
}