// Quotes Component
const quotes = {
  id: 'quotes',
  name: 'Inspirational Quotes',
  icon: '💭',
  template: `## 💭 Daily Quote

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Random Dev Quote" />
</div>

### 💡 Coding Wisdom
> *"First, solve the problem. Then, write the code."* - John Johnson

> *"Code never lies, comments sometimes do."* - Ron Jeffries

*Stay inspired, keep coding!* ✨`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(quotes);
}