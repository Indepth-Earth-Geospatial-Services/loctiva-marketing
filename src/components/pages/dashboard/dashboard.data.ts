/** Content for the "See It In Action" video section, right after Features. */

export const dashboardContent = {
  eyebrow: 'See It In Action',
  title: 'One Platform, Every Operation — In Under Three Minutes',
  body: 'Watch a quick walkthrough of how Loctiva brings live drone feeds, AI threat detection, and geospatial intelligence into a single command view.',
  /**
   * Set this to a real YouTube video ID (the part after `v=` in a normal
   * YouTube URL, or after `youtu.be/`) to enable the embed. Leave empty to
   * show a "coming soon" placeholder instead of a broken/wrong video.
   */
  videoId: '',
  poster: { src: '/landing/dashboard.png', width: 2480, height: 1950 },
} as const;
