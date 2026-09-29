import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
    
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[720px] max-w-none select-none rounded-full bg-[radial-gradient(closest-side,rgba(214,242,80,0.75),rgba(214,242,80,0)_100%)] blur-2xl"
      />
       <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[30%] h-[520px] w-[720px] max-w-none select-none rounded-full bg-[radial-gradient(closest-side,rgba(214,242,80,0.75),rgba(214,242,80,0)_100%)] blur-2xl"
      />
      
    
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[480px] w-[640px] max-w-none select-none rounded-full bg-[radial-gradient(closest-side,rgba(150,170,255,0.45),rgba(150,170,255,0)_100%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-8 xl:px-0">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
          <h2 className="max-w-[420px] text-3xl font-semibold leading-tight tracking-tight text-black md:pt-6 md:text-[40px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[560px] text-sm leading-relaxed text-gray-600">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:mt-16 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={item.avatar}
                alt={item.name}
                width={80}
                height={80}
                className="h-10 w-10 rounded-full object-cover"
              />
              <figcaption className="mt-4">
                <p className="text-base font-semibold text-black">
                  {item.name}
                </p>
                <p className="text-sm text-blue-600">{item.role}</p>
              </figcaption>
              <blockquote className="mt-5 text-sm leading-relaxed text-gray-600">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}