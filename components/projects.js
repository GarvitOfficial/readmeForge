// Featured Projects Component
const projects = {
  id: 'projects',
  name: 'Featured Projects',
  icon: '🚀',
  template: `## 🚀 Featured Projects

### 🔥 [Project Name 1](https://github.com/yourusername/project1)
**Tech Stack:** React, Node.js, MongoDB  
**Description:** An innovative project that makes a difference! 🌍  
**Features:**
- ✨ Feature 1
- 🚀 Feature 2
- 💡 Feature 3

### 🌟 [Project Name 2](https://github.com/yourusername/project2)
**Tech Stack:** Python, Django, PostgreSQL  
**Description:** A comprehensive solution with advanced features! 🤯  
**Live Demo:** [Check it out](https://your-demo-link.com)

### 💻 [Project Name 3](https://github.com/yourusername/project3)
**Tech Stack:** Next.js, TypeScript, Prisma  
**Description:** A cutting-edge example of modern innovation! 🎯

*Check out more projects on my [GitHub](https://github.com/[YOUR_USERNAME])!*`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(projects);
}