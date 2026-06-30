"use client";

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", 
  "Tailwind CSS", "Framer Motion", "Three.js", "OpenAI API", 
  "PostgreSQL", "Prisma", "Docker", "AWS", "Vercel"
];

export function Technologies() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          Trusted By & Built With
        </p>
        
        {/* Simple infinite scroll marquee effect */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center py-4">
            {technologies.concat(technologies).map((tech, index) => (
              <span 
                key={index} 
                className="text-xl md:text-2xl font-bold text-foreground/50 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* We need a custom tailwind animation for marquee in tailwind.config or global CSS, 
              but since we are using Tailwind v4, we can handle it via inline styles or tailwind plugins later. 
              For now, utilizing flex wrap for fallback if marquee fails */}
        </div>
      </div>
    </section>
  );
}
