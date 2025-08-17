// GitHub Metrics Component
const metrics = {
  id: 'metrics',
  name: 'GitHub Metrics',
  icon: '📊',
  template: `## 📊 Detailed GitHub Metrics

<div align="center">
  <img src="https://metrics.lecoq.io/\${username}?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&languages=1&languages.limit=8&languages.sections=most-used&languages.colors=github&languages.threshold=0%25&languages.indepth=false&languages.analysis.timeout=15&languages.categories=markup%2C%20programming&languages.recent.categories=markup%2C%20programming&languages.recent.load=300&languages.recent.days=14&config.timezone=Asia%2FKolkata" alt="Metrics" />
</div>

### 🎯 Activity Overview
<div align="center">
  <img src="https://metrics.lecoq.io/\${username}?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&activity=1&activity.limit=5&activity.load=300&activity.days=14&activity.filter=all&activity.visibility=all&activity.timestamps=false&config.timezone=Asia%2FKolkata" alt="Activity" />
</div>

### 🏆 Achievements
<div align="center">
  <img src="https://metrics.lecoq.io/\${username}?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&achievements=1&achievements.threshold=C&achievements.secrets=true&achievements.display=detailed&achievements.limit=0&config.timezone=Asia%2FKolkata" alt="Achievements" />
</div>

*Powered by [GitHub Metrics](https://github.com/lowlighter/metrics) - Replace \${username} with your GitHub username*`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(metrics);
}