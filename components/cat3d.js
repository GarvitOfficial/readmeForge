// 3D Animated Cats Component
const cat3d = {
  id: 'cat3d',
  name: '3D Animated Cats',
  icon: '🐱',
  template: `## 🐱 Coding Companions - 3D Cats

<div align="center">
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" alt="Coding Cat" />
</div>

### 😸 Meet My Coding Buddies

<table>
<tr>
<td align="center">
  <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="150" /><br>
  <b>Debug Cat</b><br>
  <em>Finds all the bugs! 🐛</em>
</td>
<td align="center">
  <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" width="150" /><br>
  <b>Coffee Cat</b><br>
  <em>Fuel for coding! ☕</em>
</td>
<td align="center">
  <img src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif" width="150" /><br>
  <b>Thinking Cat</b><br>
  <em>Algorithm master! 🧠</em>
</td>
</tr>
</table>

### 🎯 Cat Stats
- 🐾 **Lines of Code Written:** 50,000+ (with paws!)
- 😴 **Naps Taken:** 9,999+ (essential for productivity)
- 🎣 **Bugs Caught:** Too many to count!
- 🥛 **Milk Consumed:** Infinite loops worth

<div align="center">
  <img src="https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif" width="200" alt="Happy Coding Cat" />
  <br>
  <em>"Purr-fect code, every time!" - Senior Cat Developer</em>
</div>`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(cat3d);
}