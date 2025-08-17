// GitHub Stats Component
const stats = {
  id: 'stats',
  name: 'GitHub Stats',
  icon: '📊',
  template: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=\${username}&theme=radical&hide_border=false&include_all_commits=true&count_private=true" alt="GitHub Stats" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=\${username}&theme=radical&hide_border=false" alt="GitHub Streak" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=\${username}&theme=radical&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="Top Languages" />
</div>`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(stats);
}