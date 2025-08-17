// Matrix Code Rain Component
const matrix = {
  id: 'matrix',
  name: 'Matrix Code Rain',
  icon: '🔢',
  template: `## 🔢 Matrix Code Rain

<div align="center">
  <img src="https://media.giphy.com/media/3o7qDVHln5s9aZqs2k/giphy.gif" width="300" alt="Matrix Code Rain" />
</div>

### 💻 Digital Rain
\`\`\`
01001000 01100101 01101100 01101100 01101111
01010111 01101111 01110010 01101100 01100100
01001101 01100001 01110100 01110010 01101001
01111000 00100000 01000011 01101111 01100100
\`\`\`

*"There is no spoon."* 🕶️

### 🌊 Code Streams
- **Active Streams:** 4 🔢
- **Data Flow:** 9,999 chars/sec ⚡
- **Status:** OPERATIONAL 🟢

*Welcome to the real world* 💊`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(matrix);
}