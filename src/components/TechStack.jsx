import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";

// Categorized Skill Data
const techCategories = [
  {
    title: "Frontend Architecture",
    icon: <Layout size={20} className="text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    skills: [
      { name: "React.js", logo: "images/tech/react.jpeg" },
      { name: "Next.js", logo: "images/tech/next.jpeg" },
      { name: "TypeScript", logo: "images/tech/typescript.jpg" },
      { name: "Tailwind CSS", logo: "images/tech/tailwind.jpeg" },
      { name: "Framer Motion", logo: "images/tech/framer.jpg" },
      { name: "Bootstrap", logo: "images/tech/bootstrap.jpeg" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Server size={20} className="text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    skills: [
      { name: "Node.js", logo: "images/tech/node.jpeg" },
      { name: "Express.js", logo: "images/tech/express.jpeg" },
      { name: "Python", logo: "images/tech/python.jpeg" },
      { name: "Java", logo: "images/tech/java.jpeg" },
      { name: "MongoDB", logo: "images/tech/mongo.jpeg" },
      { name: "PostgreSQL", logo: "images/tech/postgres.jpg" },
      { name: "Drizzle", logo: "images/tech/drizzle.jpeg" },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: <Wrench size={20} className="text-blue-400" />,
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    skills: [
      { name: "Docker", logo: "images/tech/docker.jpg" },
      { name: "AWS", logo: "images/tech/aws.jpg" },
      { name: "Git", logo: "images/tech/git.jpg" },
      { name: "Postman", logo: "images/tech/postman.jpg" },
      { name: "Figma", logo: "images/tech/figma.jpg" },
    ],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

const TechStack = () => {
  return (
    <section className="py-24 bg-black flex flex-col items-center relative overflow-hidden selection:bg-purple-100 selection:text-purple-900" id="tech">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight selection:bg-purple-100 selection:text-purple-900">
            My Tech Stack
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
            A comprehensive ecosystem of modern frameworks, robust databases, and cloud infrastructure I use to build scalable applications.
          </p>
        </motion.div>

        {/* The Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative bg-gradient-to-br ${category.color} ${category.border} border rounded-[2rem] p-8 md:p-10 backdrop-blur-md flex flex-col h-full`}
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-black/40 rounded-xl border border-white/5 shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* "Zero-Gravity" Floating Skill Orbs */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    // continuous gentle floating animation
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                    className="group relative flex items-center justify-center"
                  >
                    {/* Logo Container with reduced padding for larger logos */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-900 border border-white/10 p-1.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(76,29,149,0.3)] group-hover:z-10 cursor-pointer overflow-hidden">
                      {/* FIX 1 reduce grey box padding: p-2.5 makes logos fill much more space */}
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* implicit text tooltip */}
                    <div className="absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl pointer-events-none z-20 whitespace-nowrap">
                      {skill.name}
                      {/* Tooltip Arrow */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;