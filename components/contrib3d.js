// GitHub Stats Component
const contrib3d = {
  id: 'contrib3d',
  name: '3D Contribution Graph',
  icon: '🎲',
  template: `## 🎲 3D Contribution Graph

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=\${username}&show_icons=true&theme=radical)

### 📈 Activity Graph
![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=\${username}&theme=react-dark)

### 📈 Detailed Stats
<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=\${username}&theme=radical" alt="Profile Summary" />
</div>

### 💻 Top Languages
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=\${username}&layout=compact&theme=radical)

### 🔥 Streak Stats
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=\${username}&theme=radical)

### 🏆 Trophies
![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=\${username}&theme=radical&no-frame=false&no-bg=true&margin-w=4)
`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(contrib3d);
}