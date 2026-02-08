export const projects = Array.from({ length: 29 }, (_, i) => ({
  id: i + 1,
  slug: `project-${i + 1}`,
  title: `Project ${i + 1}`,
  description: `This is a short description for Project ${i + 1}. It showcases modern design and functionality.`,
  fullDescription: `This is a detailed description for Project ${i + 1}. It explains the technologies used, the challenges faced, and the solutions implemented. The project demonstrates high-quality code and attention to detail.`,
  videoUrl: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', // Placeholder video
}));
