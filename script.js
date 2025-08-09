// GitHub README Generator - Main Application Logic
// Professional Section Templates
const SECTION_TEMPLATES = {
  bio: {
    id: 'bio',
    name: 'Bio Section',
    icon: '👨‍💻',
    template: `# Hello, World! 👋 I'm [Your Name]

<div align="center">
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30px"/>
</div>

### Passionate Developer & Problem Solver 💻✨

- 🔭 Currently working on **[Your Current Project]**
- 🌱 Learning **[Technology you're learning]**
- 👯 Looking to collaborate on **Open Source Projects**
- 💬 Ask me about **[Your expertise]**
- 📫 Reach me: **[your.email@example.com]**
- ⚡ Fun fact: **Coffee + Code = Magic** ☕`
  },
  skills: {
    id: 'skills',
    name: 'Skills & Tech Stack',
    icon: '🛠️',
    template: `## 🛠️ Tech Stack & Skills

### Languages
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)`
  },
  projects: {
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
**Description:** A cutting-edge example of modern innovation! 🎯`
  },
  stats: {
    id: 'stats',
    name: 'GitHub Stats',
    icon: '📊',
    template: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=[YOUR_USERNAME]&theme=radical&hide_border=false&include_all_commits=true&count_private=true" alt="GitHub Stats" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[YOUR_USERNAME]&theme=radical&hide_border=false" alt="GitHub Streak" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=[YOUR_USERNAME]&theme=radical&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="Top Languages" />
</div>`
  },
  social: {
    id: 'social',
    name: 'Social Links',
    icon: '🌐',
    template: `## 🌐 Connect with me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/yourhandle)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/yourchannel)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://yourportfolio.com)

</div>

### 💌 Let's collaborate and build something amazing together!`
  },
  snake: {
    id: 'snake',
    name: 'Contribution Snake',
    icon: '🐍',
    template: `## 🐍 Contribution Snake

<div align="center">
  <img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg" alt="Snake animation" />
</div>

<div align="center">
  <img src="https://github.com/[YOUR_USERNAME]/[YOUR_USERNAME]/blob/output/github-contribution-grid-snake-dark.svg" alt="Snake animation - Dark" />
</div>

*Powered by [Platane/snk](https://github.com/Platane/snk) - Set up GitHub Action in your profile repository for personalized snake*`
  },
  metrics: {
    id: 'metrics',
    name: 'GitHub Metrics',
    icon: '📊',
    template: `## 📊 Detailed GitHub Metrics

<div align="center">
  <img src="https://metrics.lecoq.io/[YOUR_USERNAME]?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&languages=1&languages.limit=8&languages.sections=most-used&languages.colors=github&languages.threshold=0%25&languages.indepth=false&languages.analysis.timeout=15&languages.categories=markup%2C%20programming&languages.recent.categories=markup%2C%20programming&languages.recent.load=300&languages.recent.days=14&config.timezone=Asia%2FKolkata" alt="Metrics" />
</div>

### 🎯 Activity Overview
<div align="center">
  <img src="https://metrics.lecoq.io/[YOUR_USERNAME]?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&activity=1&activity.limit=5&activity.load=300&activity.days=14&activity.filter=all&activity.visibility=all&activity.timestamps=false&config.timezone=Asia%2FKolkata" alt="Activity" />
</div>

### 🏆 Achievements
<div align="center">
  <img src="https://metrics.lecoq.io/[YOUR_USERNAME]?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&achievements=1&achievements.threshold=C&achievements.secrets=true&achievements.display=detailed&achievements.limit=0&config.timezone=Asia%2FKolkata" alt="Achievements" />
</div>

*Powered by [GitHub Metrics](https://github.com/lowlighter/metrics) - Replace [YOUR_USERNAME] with your GitHub username*`
  },
  contrib3d: {
    id: 'contrib3d',
    name: '3D Contribution Graph',
    icon: '🎲',
    template: `## 🎲 3D Contribution Graph

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=[YOUR_USERNAME]&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=39ff14&text_color=ffffff&icon_color=00ffff" alt="GitHub Stats" />
</div>

### 🌟 Contribution Activity
<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=[YOUR_USERNAME]&theme=react-dark&bg_color=0d1117&color=39ff14&line=00ffff&point=ff1493&area=true&hide_border=true" alt="Activity Graph" />
</div>

### 📈 Detailed Stats
<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=[YOUR_USERNAME]&theme=radical" alt="Profile Summary" />
</div>

*Powered by multiple GitHub visualization tools for comprehensive insights*`
  },
  typing: {
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
  },
  views: {
    id: 'views',
    name: 'Profile Views & Badges',
    icon: '👁️',
    template: `## 👁️ Profile Views & Recognition

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=[YOUR_USERNAME]&label=Profile%20views&color=0e75b6&style=for-the-badge" alt="Profile Views" />
  <img src="https://img.shields.io/github/followers/[YOUR_USERNAME]?label=Followers&style=for-the-badge&color=39ff14" alt="Followers" />
  <img src="https://img.shields.io/badge/Status-Available%20for%20hire-brightgreen?style=for-the-badge" alt="Status" />
</div>

### 🏆 GitHub Trophies
<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=[YOUR_USERNAME]&theme=radical&no-frame=false&no-bg=false&margin-w=4" alt="GitHub Trophies" />
</div>`
  },
  wakatime: {
    id: 'wakatime',
    name: 'Coding Time Stats',
    icon: '⏰',
    template: `## ⏰ Weekly Development Breakdown

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/wakatime?username=[YOUR_USERNAME]&theme=radical&hide_border=false" alt="Wakatime Stats" />
</div>

### 📊 Coding Activity
<div align="center">
  <img src="https://wakatime.com/badge/user/[YOUR_USERNAME].svg" alt="Total time coded since Jul 2020" />
</div>

*Connect your WakaTime account to track coding time automatically*`
  },
  spotify: {
    id: 'spotify',
    name: 'Spotify Playing',
    icon: '🎵',
    template: `## 🎵 Currently Vibing To

<div align="center">
  <img src="https://spotify-github-profile.vercel.app/api/spotify?background_color=0d1117&border_color=39ff14" alt="Spotify Playing" />
</div>

### 🎧 My Coding Playlist
<div align="center">
  <img src="https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify" />
  <img src="https://img.shields.io/badge/Apple_Music-9933CC?style=for-the-badge&logo=apple-music&logoColor=white" alt="Apple Music" />
</div>

*Music fuels the code! 🎶*`
  },
  quotes: {
    id: 'quotes',
    name: 'Dynamic Quotes',
    icon: '💭',
    template: `## 💭 Daily Motivation

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Random Dev Quote" />
</div>

### 🌟 Personal Mantra
<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=20&pause=1000&color=FF1493&center=true&vCenter=true&random=false&width=600&lines=Code+is+poetry+in+motion+%F0%9F%8E%AD;Every+bug+is+a+learning+opportunity+%F0%9F%90%9B;Innovation+through+iteration+%F0%9F%94%84" alt="Mantra" />
</div>`
  },
  activity: {
    id: 'activity',
    name: 'Activity Graph',
    icon: '📈',
    template: `## 📈 Contribution Activity

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=[YOUR_USERNAME]&theme=react-dark&bg_color=0d1117&color=39ff14&line=00ffff&point=ff1493&area=true&hide_border=true" alt="Activity Graph" />
</div>

### 🔥 Streak Stats
<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[YOUR_USERNAME]&theme=radical&hide_border=true&stroke=39ff14&ring=ff1493&fire=00ffff&currStreakLabel=39ff14" alt="Streak Stats" />
</div>`
  },
  languages: {
    id: 'languages',
    name: 'Language Usage',
    icon: '📊',
    template: `## 📊 Language Breakdown

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=[YOUR_USERNAME]&layout=compact&theme=radical&hide_border=true&bg_color=0d1117&title_color=39ff14&text_color=ffffff&icon_color=00ffff" alt="Top Languages" />
</div>

### 🌐 Language Distribution
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=[YOUR_USERNAME]&layout=donut&theme=radical&hide_border=true&bg_color=0d1117&title_color=39ff14&text_color=ffffff" alt="Language Donut" />
</div>

### 💻 Most Used Languages
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=[YOUR_USERNAME]&layout=pie&theme=radical&hide_border=true&bg_color=0d1117&title_color=39ff14&text_color=ffffff" alt="Language Pie" />
</div>`
  },
  matrix: {
    id: 'matrix',
    name: 'Matrix Rain',
    icon: '🌧️',
    template: `## 🌧️ Welcome to the Matrix

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=30&pause=1000&color=00FF00&center=true&vCenter=true&random=false&width=800&lines=Wake+up%2C+Neo...;The+Matrix+has+you...;Follow+the+white+rabbit+%F0%9F%90%B0;There+is+no+spoon+%F0%9F%A5%84" alt="Matrix" />
</div>

### 🔴 Red Pill or Blue Pill?
<div align="center">
  <img src="https://img.shields.io/badge/Choice-Red%20Pill%20%F0%9F%94%B4-red?style=for-the-badge&logo=matrix&logoColor=white" alt="Red Pill" />
  <img src="https://img.shields.io/badge/Reality-Simulation-green?style=for-the-badge&logo=matrix&logoColor=white" alt="Simulation" />
</div>

*"There's a difference between knowing the path and walking the path." - Morpheus*`
  },
  coffee: {
    id: 'coffee',
    name: 'Coffee Counter',
    icon: '☕',
    template: `## ☕ Fuel Station

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=22&pause=1000&color=8B4513&center=true&vCenter=true&random=false&width=500&lines=Coffee+%2B+Code+%3D+%E2%9D%A4%EF%B8%8F;Debugging+with+caffeine;Powered+by+espresso" alt="Coffee" />
</div>

### ☕ Daily Intake
<div align="center">
  <img src="https://img.shields.io/badge/Coffee-∞%20cups-brown?style=for-the-badge&logo=coffee&logoColor=white" alt="Coffee Counter" />
  <img src="https://img.shields.io/badge/Status-Caffeinated-success?style=for-the-badge&logo=coffee&logoColor=white" alt="Caffeinated" />
  <img src="https://img.shields.io/badge/Energy-Over%209000-orange?style=for-the-badge&logo=dragonball&logoColor=white" alt="Energy" />
</div>

*"Code is like coffee - it's better when it's hot and strong!" ☕*`
  },
  cat3d: {
    id: 'cat3d',
    name: '3D Animated Cat',
    icon: '🐱',
    template: `## 🐱 My Coding Companion

<div align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat.png" alt="Cat" width="100" height="100" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20with%20Wry%20Smile.png" alt="Wry Cat" width="100" height="100" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20with%20Tears%20of%20Joy.png" alt="Happy Cat" width="100" height="100" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&color=FF69B4&center=true&vCenter=true&random=false&width=400&lines=Meow+meow+code+code+🐱;Debugging+with+my+cat;Purr-fect+coding+buddy" alt="Cat Typing" />
</div>

*My feline debugging assistant - always there when I need a paw! 🐾*`
  },
  stickers3d: {
    id: 'stickers3d',
    name: '3D Sticker Collection',
    icon: '🎨',
    template: `## 🎨 3D Sticker Vibes

<div align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" alt="Laptop" width="80" height="80" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop" width="80" height="80" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Mobile%20Phone.png" alt="Mobile" width="80" height="80" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Keyboard.png" alt="Keyboard" width="80" height="80" />
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="60" height="60" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png" alt="Bulb" width="60" height="60" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Fire.png" alt="Fire" width="60" height="60" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Star.png" alt="Star" width="60" height="60" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gem%20Stone.png" alt="Gem" width="60" height="60" />
</div>

### 🌈 Mood Stickers
<div align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Big%20Eyes.png" alt="Happy" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Sunglasses.png" alt="Cool" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Nerd%20Face.png" alt="Nerd" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png" alt="Star Struck" width="50" height="50" />
</div>`
  },
  robot3d: {
    id: 'robot3d',
    name: '3D Robot Assistant',
    icon: '🤖',
    template: `## 🤖 AI Coding Assistant

<div align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" alt="Robot" width="120" height="120" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=20&pause=1000&color=00BFFF&center=true&vCenter=true&random=false&width=500&lines=BEEP+BOOP+CODING+MODE+ON;AI+ASSISTANT+ACTIVATED;PROCESSING+AWESOME+CODE;ERROR+404%3A+BUGS+NOT+FOUND" alt="Robot Typing" />
</div>

### 🔧 System Status
<div align="center">
  <img src="https://img.shields.io/badge/AI-Online-brightgreen?style=for-the-badge&logo=robot&logoColor=white" alt="AI Status" />
  <img src="https://img.shields.io/badge/Mode-Coding-blue?style=for-the-badge&logo=code&logoColor=white" alt="Mode" />
  <img src="https://img.shields.io/badge/Efficiency-9000%25-orange?style=for-the-badge&logo=speedtest&logoColor=white" alt="Efficiency" />
</div>`
  },
  gaming3d: {
    id: 'gaming3d',
    name: '3D Gaming Zone',
    icon: '🎮',
    template: `## 🎮 Gaming & Development

<div align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Video%20Game.png" alt="Gaming" width="100" height="100" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Joystick.png" alt="Joystick" width="100" height="100" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&color=9932CC&center=true&vCenter=true&random=false&width=500&lines=Level+Up+Your+Code+🆙;Achievement+Unlocked:+Bug+Slayer;Game+Developer+by+Day;Code+Warrior+by+Night" alt="Gaming Typing" />
</div>

### 🏆 Gaming Achievements
<div align="center">
  <img src="https://img.shields.io/badge/Level-∞-gold?style=for-the-badge&logo=level-up&logoColor=white" alt="Level" />
  <img src="https://img.shields.io/badge/XP-Over%209000-purple?style=for-the-badge&logo=experience&logoColor=white" alt="XP" />
  <img src="https://img.shields.io/badge/Status-Boss%20Mode-red?style=for-the-badge&logo=crown&logoColor=white" alt="Boss Mode" />
</div>`
  },
  space3d: {
    id: 'space3d',
    name: '3D Space Explorer',
    icon: '🚀',
    template: `## 🚀 Space Code Explorer

<div align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="100" height="100" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png" alt="Galaxy" width="100" height="100" />
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ringed%20Planet.png" alt="Planet" width="100" height="100" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=1000&color=FFD700&center=true&vCenter=true&random=false&width=600&lines=Houston%2C+we+have+no+bugs!;Coding+at+light+speed+%E2%9A%A1;Exploring+the+code+universe;To+infinity+and+beyond!" alt="Space Typing" />
</div>

### 🌌 Mission Control
<div align="center">
  <img src="https://img.shields.io/badge/Mission-Code%20Explorer-blue?style=for-the-badge&logo=rocket&logoColor=white" alt="Mission" />
  <img src="https://img.shields.io/badge/Status-In%20Orbit-success?style=for-the-badge&logo=satellite&logoColor=white" alt="Status" />
  <img src="https://img.shields.io/badge/Fuel-Caffeine-brown?style=for-the-badge&logo=coffee&logoColor=white" alt="Fuel" />
</div>`
  }
};

// React Components and Application Logic
const { useState, useRef, useCallback } = React;
const { motion, AnimatePresence } = window.Motion || {};

// Utility Functions
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function replaceUsername(content, username) {
  if (!username) return content;
  return content
    .replace(/\[YOUR_USERNAME\]/g, username)
    .replace(/\[Your Name\]/g, username)
    .replace(/yourusername/g, username.toLowerCase());
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Main Components
function Sidebar({ onDragStart }) {
  const sidebarRef = useRef(null);
  
  return React.createElement('div', {
    ref: sidebarRef,
    className: 'w-80 bg-dark-card border-r border-dark-border h-screen overflow-y-auto p-4 sidebar'
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'mb-6'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-xl font-bold text-neon-green mb-2'
      }, '📝 README Sections'),
      React.createElement('p', {
        key: 'subtitle',
        className: 'text-gray-400 text-sm'
      }, 'Drag sections to canvas')
    ]),
    React.createElement('div', {
      key: 'sections',
      className: 'space-y-3'
    }, Object.values(SECTION_TEMPLATES).map(section => 
      React.createElement('div', {
        key: section.id,
        draggable: true,
        onDragStart: (e) => onDragStart(e, section),
        className: 'p-3 bg-dark-bg border border-dark-border rounded-lg cursor-move hover:border-neon-green transition-colors section-card'
      }, [
        React.createElement('div', {
          key: 'content',
          className: 'flex items-center space-x-3'
        }, [
          React.createElement('span', {
            key: 'icon',
            className: 'text-2xl'
          }, section.icon),
          React.createElement('div', {
            key: 'info'
          }, [
            React.createElement('h3', {
              key: 'name',
              className: 'font-medium text-white'
            }, section.name),
            React.createElement('p', {
              key: 'desc',
              className: 'text-xs text-gray-400'
            }, `${section.template.split('\n')[0].substring(0, 30)}...`)
          ])
        ])
      ])
    ))
  ]);
}

function SectionCard({ section, onEdit, onDelete, onDragStart, index }) {
  return React.createElement(motion.div, {
    key: section.id,
    layout: true,
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    draggable: true,
    onDragStart: (e) => onDragStart(e, section, index),
    className: 'p-4 bg-dark-card border border-dark-border rounded-lg cursor-move hover:border-neon-blue transition-all section-card'
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'flex items-center justify-between mb-2'
    }, [
      React.createElement('div', {
        key: 'info',
        className: 'flex items-center space-x-2'
      }, [
        React.createElement('span', {
          key: 'icon',
          className: 'text-xl'
        }, SECTION_TEMPLATES[section.type]?.icon || '📄'),
        React.createElement('h3', {
          key: 'name',
          className: 'font-medium text-white'
        }, SECTION_TEMPLATES[section.type]?.name || 'Custom Section')
      ]),
      React.createElement('div', {
        key: 'actions',
        className: 'flex space-x-2'
      }, [
        React.createElement('button', {
          key: 'edit',
          onClick: () => onEdit(section),
          className: 'px-2 py-1 bg-neon-blue text-black rounded text-xs hover:bg-opacity-80 transition-colors'
        }, 'Edit'),
        React.createElement('button', {
          key: 'delete',
          onClick: () => onDelete(section.id),
          className: 'px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-opacity-80 transition-colors'
        }, 'Delete')
      ])
    ]),
    React.createElement('div', {
      key: 'preview',
      className: 'text-sm text-gray-400 truncate'
    }, section.content.split('\n')[0])
  ]);
}

function Canvas({ sections, onDrop, onDragOver, onEdit, onDelete, onReorder }) {
  const canvasRef = useRef(null);
  
  const handleDragStart = (e, section, index) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ section, index, source: 'canvas' }));
  };
  
  return React.createElement('div', {
    ref: canvasRef,
    onDrop: onDrop,
    onDragOver: onDragOver,
    className: 'flex-1 p-6 bg-dark-bg min-h-screen canvas'
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'mb-6'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-2xl font-bold text-neon-green mb-2'
      }, '🎨 README Canvas'),
      React.createElement('p', {
        key: 'subtitle',
        className: 'text-gray-400'
      }, sections.length === 0 ? 'Canvas is empty! Drag sections from the sidebar to start building your README.' : `${sections.length} section(s) added`)
    ]),
    React.createElement('div', {
      key: 'sections',
      className: 'space-y-4'
    }, sections.length === 0 ? 
      React.createElement('div', {
        key: 'empty',
        className: 'border-2 border-dashed border-gray-600 rounded-lg p-12 text-center'
      }, [
        React.createElement('div', {
          key: 'icon',
          className: 'text-6xl mb-4'
        }, '📝'),
        React.createElement('h3', {
          key: 'title',
          className: 'text-xl font-medium text-gray-400 mb-2'
        }, 'Start Building Your README'),
        React.createElement('p', {
          key: 'desc',
          className: 'text-gray-500'
        }, 'Drag sections from the sidebar to create your perfect GitHub profile')
      ]) :
      React.createElement(AnimatePresence, null,
        sections.map((section, index) => 
          React.createElement(SectionCard, {
            key: section.id,
            section,
            onEdit,
            onDelete,
            onDragStart: handleDragStart,
            index
          })
        )
      )
    )
  ]);
}

function Preview({ sections }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const previewRef = useRef(null);
  
  const generateMarkdown = () => {
    return sections.map(section => section.content).join('\n\n');
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  return React.createElement('div', {
    className: `${isFullscreen ? 'fullscreen' : 'w-1/2'} bg-dark-card border-l border-dark-border flex flex-col`
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'p-4 border-b border-dark-border flex items-center justify-between'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-xl font-bold text-neon-pink'
      }, '👁️ Live Preview'),
      React.createElement('button', {
        key: 'fullscreen',
        onClick: toggleFullscreen,
        className: 'px-3 py-1 bg-neon-pink text-black rounded text-sm hover:bg-opacity-80 transition-colors'
      }, isFullscreen ? 'Exit Fullscreen' : 'Fullscreen')
    ]),
    React.createElement('div', {
      key: 'content',
      ref: previewRef,
      className: 'flex-1 overflow-y-auto p-4 github-markdown preview-content',
      dangerouslySetInnerHTML: {
        __html: marked.parse(generateMarkdown())
      }
    })
  ]);
}

function EditModal({ section, onSave, onClose }) {
  const [content, setContent] = useState(section?.content || '');
  
  const handleSave = () => {
    onSave({ ...section, content });
    onClose();
  };
  
  if (!section) return null;
  
  return React.createElement('div', {
    className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
  }, [
    React.createElement(motion.div, {
      key: 'modal',
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      className: 'bg-dark-card border border-dark-border rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto'
    }, [
      React.createElement('div', {
        key: 'header',
        className: 'flex items-center justify-between mb-4'
      }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-xl font-bold text-neon-green'
        }, `Edit ${SECTION_TEMPLATES[section.type]?.name || 'Section'}`),
        React.createElement('button', {
          key: 'close',
          onClick: onClose,
          className: 'text-gray-400 hover:text-white'
        }, '✕')
      ]),
      React.createElement('textarea', {
        key: 'editor',
        value: content,
        onChange: (e) => setContent(e.target.value),
        className: 'w-full h-96 code-editor',
        placeholder: 'Enter your markdown content here...'
      }),
      React.createElement('div', {
        key: 'actions',
        className: 'flex justify-end space-x-3 mt-4'
      }, [
        React.createElement('button', {
          key: 'cancel',
          onClick: onClose,
          className: 'px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors'
        }, 'Cancel'),
        React.createElement('button', {
          key: 'save',
          onClick: handleSave,
          className: 'px-4 py-2 bg-neon-green text-black rounded hover:bg-opacity-80 transition-colors'
        }, 'Save Changes')
      ])
    ])
  ]);
}

function Toolbar({ onImport, onExport, onClear, sections, showUsernameButton, githubUsername, openUsernameModal }) {
  const fileInputRef = useRef(null);
  
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target.result;
          onImport(content);
          showToast('README imported successfully!');
        } catch (error) {
          showToast('Error importing file', 'error');
        }
      };
      reader.readAsText(file);
    }
  };
  
  const handleExport = () => {
    const markdown = sections.map(section => section.content).join('\n\n');
    const blob = new Blob([markdown], { type: 'text/markdown' });
    saveAs(blob, 'README.md');
    showToast('README exported successfully!');
  };
  
  const handleCopy = () => {
    const markdown = sections.map(section => section.content).join('\n\n');
    navigator.clipboard.writeText(markdown).then(() => {
      showToast('README copied to clipboard!');
    });
  };
  
  return React.createElement('div', {
    className: 'bg-dark-card border-b border-dark-border p-4'
  }, [
    React.createElement('div', {
      key: 'content',
      className: 'flex items-center justify-between'
    }, [
      React.createElement('div', {
        key: 'left',
        className: 'flex items-center space-x-4'
      }, [
        React.createElement('h1', {
          key: 'title',
          className: 'text-2xl font-bold text-neon-green'
        }, '🚀 GitHub README Generator'),
        showUsernameButton && React.createElement('button', {
          key: 'username',
          onClick: openUsernameModal,
          className: 'px-3 py-1 bg-neon-blue text-black rounded text-sm hover:bg-opacity-80 transition-all transform hover:scale-105'
        }, githubUsername ? `👤 ${githubUsername}` : '👤 Set Username')
      ]),
      React.createElement('div', {
        key: 'actions',
        className: 'flex items-center space-x-3'
      }, [
        React.createElement('input', {
          key: 'file-input',
          ref: fileInputRef,
          type: 'file',
          accept: '.md,.txt',
          onChange: handleImport,
          className: 'hidden'
        }),
        React.createElement('button', {
          key: 'import',
          onClick: () => fileInputRef.current?.click(),
          className: 'px-4 py-2 bg-neon-blue text-black rounded hover:bg-opacity-80 transition-colors btn-secondary'
        }, '📁 Import'),
        React.createElement('button', {
          key: 'copy',
          onClick: handleCopy,
          disabled: sections.length === 0,
          className: 'px-4 py-2 bg-neon-pink text-black rounded hover:bg-opacity-80 transition-colors disabled:opacity-50 btn-primary'
        }, '📋 Copy'),
        React.createElement('button', {
          key: 'export',
          onClick: handleExport,
          disabled: sections.length === 0,
          className: 'px-4 py-2 bg-neon-green text-black rounded hover:bg-opacity-80 transition-colors disabled:opacity-50 btn-primary'
        }, '💾 Download'),
        React.createElement('button', {
          key: 'clear',
          onClick: onClear,
          disabled: sections.length === 0,
          className: 'px-4 py-2 bg-red-500 text-white rounded hover:bg-opacity-80 transition-colors disabled:opacity-50'
        }, '🗑️ Clear'),
        React.createElement('a', {
          key: 'contribute',
          href: 'https://github.com/GarvitOfficial/readmeForge',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors'
        }, '🤝 Contribute')
      ])
    ])
  ]);
}

function UsernameModal({ isOpen, onSave, onSkip }) {
  const [username, setUsername] = useState('');
  
  const handleSave = () => {
    if (username.trim()) {
      onSave(username.trim());
      showToast(`Username set to: ${username.trim()}`);
    }
  };
  
  if (!isOpen) return null;
  
  return React.createElement('div', {
    className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
  }, [
    React.createElement(motion.div, {
      key: 'modal',
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      className: 'bg-dark-card border border-neon-green rounded-lg p-6 w-full max-w-md'
    }, [
      React.createElement('div', {
        key: 'header',
        className: 'text-center mb-6'
      }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-2xl font-bold text-neon-green mb-2'
        }, '👤 Set Your GitHub Username'),
        React.createElement('p', {
          key: 'desc',
          className: 'text-gray-400'
        }, 'This will automatically replace [YOUR_USERNAME] in all templates')
      ]),
      React.createElement('input', {
        key: 'input',
        type: 'text',
        value: username,
        onChange: (e) => setUsername(e.target.value),
        placeholder: 'Enter your GitHub username',
        className: 'w-full p-3 bg-dark-bg border border-dark-border rounded text-white placeholder-gray-400 focus:border-neon-green focus:outline-none',
        onKeyPress: (e) => e.key === 'Enter' && handleSave()
      }),
      React.createElement('div', {
        key: 'actions',
        className: 'flex space-x-3 mt-6'
      }, [
        React.createElement('button', {
          key: 'skip',
          onClick: onSkip,
          className: 'flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors'
        }, 'Skip for now'),
        React.createElement('button', {
          key: 'save',
          onClick: handleSave,
          className: 'flex-1 px-4 py-2 bg-neon-green text-black rounded hover:bg-opacity-80 transition-colors'
        }, 'Save Username')
      ])
    ])
  ]);
}

// Main Application Component
function App() {
  const [sections, setSections] = useState([]);
  const [editingSection, setEditingSection] = useState(null);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [githubUsername, setGithubUsername] = useState('');
  const [showUsernameButton] = useState(true);
  
  const handleDragStart = (e, section) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ section, source: 'sidebar' }));
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    
    if (data.source === 'sidebar') {
      const newSection = {
        id: generateId(),
        type: data.section.id,
        content: replaceUsername(data.section.template, githubUsername)
      };
      setSections(prev => [...prev, newSection]);
      showToast(`${data.section.name} added to canvas!`);
    } else if (data.source === 'canvas') {
      // Handle reordering within canvas
      const draggedSection = sections[data.index];
      const newSections = sections.filter((_, index) => index !== data.index);
      
      // Find drop position
      const dropIndex = sections.length - 1;
      newSections.splice(dropIndex, 0, draggedSection);
      setSections(newSections);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  const handleEdit = (section) => {
    setEditingSection(section);
  };
  
  const handleSave = (updatedSection) => {
    setSections(prev => prev.map(section => 
      section.id === updatedSection.id ? updatedSection : section
    ));
    showToast('Section updated successfully!');
  };
  
  const handleDelete = (sectionId) => {
    setSections(prev => prev.filter(section => section.id !== sectionId));
    showToast('Section removed from canvas');
  };
  
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all sections?')) {
      setSections([]);
      showToast('Canvas cleared');
    }
  };
  
  const handleImport = (content) => {
    const newSection = {
      id: generateId(),
      type: 'imported',
      content: replaceUsername(content, githubUsername)
    };
    setSections(prev => [...prev, newSection]);
  };
  
  const openUsernameModal = () => {
    setShowUsernameModal(true);
  };
  
  const handleUsernameSave = (username) => {
    setGithubUsername(username);
    setShowUsernameModal(false);
    
    // Update existing sections with new username
    setSections(prev => prev.map(section => ({
      ...section,
      content: replaceUsername(
        SECTION_TEMPLATES[section.type]?.template || section.content,
        username
      )
    })));
  };
  
  const handleUsernameSkip = () => {
    setShowUsernameModal(false);
  };
  
  return React.createElement('div', {
    className: 'min-h-screen bg-dark-bg text-white'
  }, [
    React.createElement(Toolbar, {
      key: 'toolbar',
      onImport: handleImport,
      onExport: () => {},
      onClear: handleClear,
      sections,
      showUsernameButton,
      githubUsername,
      openUsernameModal
    }),
    React.createElement('div', {
      key: 'main',
      className: 'flex h-screen'
    }, [
      React.createElement(Sidebar, {
        key: 'sidebar',
        onDragStart: handleDragStart
      }),
      React.createElement(Canvas, {
        key: 'canvas',
        sections,
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onEdit: handleEdit,
        onDelete: handleDelete
      }),
      React.createElement(Preview, {
        key: 'preview',
        sections
      })
    ]),
    React.createElement(AnimatePresence, {
      key: 'modals'
    }, [
      editingSection && React.createElement(EditModal, {
        key: 'edit-modal',
        section: editingSection,
        onSave: handleSave,
        onClose: () => setEditingSection(null)
      }),
      showUsernameModal && React.createElement(UsernameModal, {
        key: 'username-modal',
        isOpen: showUsernameModal,
        onSave: handleUsernameSave,
        onSkip: handleUsernameSkip
      })
    ]),
    React.createElement('footer', {
      key: 'footer',
      className: 'bg-dark-card border-t border-dark-border p-4 text-center'
    }, [
      React.createElement('div', {
        key: 'content',
        className: 'text-gray-400 text-sm'
      }, [
        React.createElement('span', {
          key: 'text'
        }, 'Made with ❤️ for the developer community | '),
        React.createElement('a', {
          key: 'link',
          href: 'https://github.com/GarvitOfficial/readmeForge',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'text-neon-green hover:text-neon-blue transition-colors'
        }, 'GitHub README Generator')
      ])
    ])
  ]);
}

// Initialize Application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));