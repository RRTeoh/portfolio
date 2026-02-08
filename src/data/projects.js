import { categories } from './categories';

// Helper to assign categories cyclically to ensure even distribution
const getCategory = (index) => categories[index % categories.length];

export const projects = Array.from({ length: 29 }, (_, i) => {
  const category = getCategory(i);
  return {
    id: i + 1,
    slug: `project-${i + 1}`,
    title: `Project ${i + 1} (${category.title})`,
    categorySlug: category.slug,
    description: `This is a ${category.title} project. It showcases modern design and functionality specific to this field.`,
    fullDescription: `This is a detailed description for Project ${i + 1}. It explains the technologies used, the challenges faced, and the solutions implemented. The project demonstrates high-quality code and attention to detail within the ${category.title} domain.`,
    videoUrl: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', // Placeholder video
    images: Array.from({ length: 7 }, (_, j) => `https://picsum.photos/seed/${i + 1}-${j + 1}/800/600`), // 7 placeholder images
  };
});
