// WakaTime Component
const wakatime = {
  id: 'wakatime',
  name: 'WakaTime Stats',
  icon: '⏰',
  template: `## ⏰ WakaTime Coding Stats

[![WakaTime stats](https://github-readme-stats.vercel.app/api/wakatime?username=YOUR_WAKATIME_USERNAME&theme=radical)](https://wakatime.com/@YOUR_WAKATIME_USERNAME)

### 📊 Weekly Stats
![WakaTime Weekly Stats](https://wakatime.com/share/@YOUR_WAKATIME_USERNAME/YOUR_WAKATIME_SHARE_ID.svg)

### 💻 Languages This Week
![WakaTime Languages](https://wakatime.com/share/@YOUR_WAKATIME_USERNAME/YOUR_LANGUAGE_SHARE_ID.svg)`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(wakatime);
}