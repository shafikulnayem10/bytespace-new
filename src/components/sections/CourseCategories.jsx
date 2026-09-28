export default function CourseCategories() {
  const row1 = [
    { name: "Featured", active: true },
    { name: "Music" },
    { name: "Drawing & Painting" },
    { name: "Marketing" },
    { name: "Animation" },
    { name: "Social Media" },
    { name: "UI/UX Design" },
    { name: "Creative Marketing" },
  ];

  const row2 = [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ];

  const row3 = [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ];

  return (
    <section className="bg-white pt-20 pb-12"> 
      <div className="mx-auto max-w-[1200px] px-4 text-center md:px-8 xl:px-0">
      
        <h2 className="font-heading text-[36px] font-bold leading-tight text-neutral-950 md:text-[46px]">
          Discover Your Passion, <br /> Build Your Skills
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-body-s text-neutral-500 md:text-body-m">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Category Buttons Container */}
        <div className="mt-12 flex flex-col items-center gap-4">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-[1080px]">
            {row1.map((cat, idx) => (
              <button
                key={idx}
                className={`rounded-full px-5 py-2.5 text-body-s font-medium transition-all ${
                  cat.active
                    ? "bg-secondary-500 text-neutral-950 shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-[950px]">
            {row2.map((item, idx) => (
              <button
                key={idx}
                className="rounded-full bg-neutral-100 px-5 py-2.5 text-body-s font-medium text-neutral-600 transition-all hover:bg-neutral-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-[650px]">
            {row3.map((item, idx) => (
              <button
                key={idx}
                className={`rounded-full px-5 py-2.5 text-body-s font-medium transition-all ${
                  item === "+ More"
                    ? "text-primary-600 hover:underline"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}