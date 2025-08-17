// Spotify Integration Component
const spotify = {
  id: 'spotify',
  name: 'Spotify Now Playing',
  icon: '🎧',
  template: `## 🎧 Spotify Now Playing

[![Spotify](https://novatorem-kyzbk7wxl-bardiesel.vercel.app/api/spotify)](https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME)

### 🎵 Recently Played
[![Spotify recently played](https://spotify-recently-played-readme.vercel.app/api?user=YOUR_SPOTIFY_USERNAME&count=5)](https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME)

### 🎼 Top Tracks
[![Top Tracks](https://spotify-github-profile.vercel.app/api/view?uid=YOUR_SPOTIFY_USER_ID&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f)](https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME)`
};

// Register the component
if (typeof window !== 'undefined' && window.registerComponent) {
  window.registerComponent(spotify);
}