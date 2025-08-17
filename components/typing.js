// Typing Animation Component
const typing = {
  id: 'typing',
  name: 'Typing Animation',
  icon: '⌨️',
  template: `## ⌨️ What I'm Coding

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=25&pause=1000&color=39FF14&center=true&vCenter=true&random=false&width=600&lines=Full+Stack+Developer+%F0%9F%9A%80;Code+Alchemist+%E2%9C%A8;Building+Amazing+Things+%F0%9F%8C%9F;Coffee+%2B+Code+%3D+Magic+%E2%98%95" alt="Typing SVG" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=400&size=18&pause=1000&color=00FFFF&center=true&vCenter=true&random=false&width=500&lines=Learning+new+technologies+daily;Open+to+collaboration;Always+ready+for+challenges" alt="Typing SVG" />
</div>`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(typing);
}