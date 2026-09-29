

export const courses = [
  { id: 1, title: "Learn Figma from Basic", image: "/images/course-1.png" },
  { id: 2, title: "Build Digital Asset", image: "/images/course-2.png" },
  { id: 3, title: "the Power of Big Data", image: "/images/course-3.png" },
  { id: 4, title: "Balancing Productivity an...", image: "/images/course-4.png" },
  { id: 5, title: "Mastering Money Manage...", image: "/images/course-5.png" },
  { id: 6, title: "From Idea to Startup Succ...", image: "/images/course-6.png" },
].map((c) => ({
  ...c,
  rating: 4.5,
  author: "purepearl studio",
  level: "Beginner",
  price: 25,
}));