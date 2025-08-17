// Coffee Counter Component
const coffee = {
  id: 'coffee',
  name: 'Coffee Counter',
  icon: '☕',
  template: `## ☕ Coffee Counter

<div align="center">
  <img src="https://img.shields.io/badge/Coffee-☕_8_cups_today-brown?style=for-the-badge" alt="Coffee Counter" />
</div>

### ☕ Daily Fuel
- **Today:** 8 cups ☕☕☕☕☕☕☕☕
- **This Week:** 42 cups
- **Favorite:** Espresso ☕
- **Status:** Fully Caffeinated ⚡

*Powered by coffee and code* ☕💻`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(coffee);
}