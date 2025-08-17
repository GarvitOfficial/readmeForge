// Activity Component
const activity = {
  id: 'activity',
  name: 'Recent Activity',
  icon: '📊',
  template: `## 📊 Recent Activity

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=\${username}&theme=react-dark" alt="GitHub Activity Graph" />
</div>

### 🔥 This Week
- **Commits:** 12 📝
- **Lines Added:** +2,847 ➕
- **Issues Closed:** 5 ✅
- **PRs Merged:** 3 🎯

*Keep the momentum going!* 🚀`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(activity);
}