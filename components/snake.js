// Contribution Snake Component
const snake = {
  id: 'snake',
  name: 'Contribution Snake',
  icon: '🐍',
  template: `## 🐍 Contribution Snake

<div align="center">
  <img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg" alt="Snake animation" />
</div>

<div align="center">
  <img src="https://github.com/\${username}/\${username}/blob/output/github-contribution-grid-snake-dark.svg" alt="Snake animation - Dark" />
</div>

*Powered by [Platane/snk](https://github.com/Platane/snk) - Set up GitHub Action in your profile repository for personalized snake*`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(snake);
}