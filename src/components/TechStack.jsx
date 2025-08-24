import { ThreeDMarquee } from "./3d-marquee";

 function TechStack() {
const baseImages = [
  "images/tech/bootstrap.jpeg",
  "images/tech/java.jpeg",
  "images/tech/next.jpeg",
  "images/tech/react.jpeg",
  "images/tech/tailwind.jpeg",
  "images/tech/python.jpeg",
  "images/tech/mongo.jpeg",
  "images/tech/drizzle.jpeg",
  "images/tech/node.jpeg",
  "images/tech/express.jpeg",
];

const images = Array(8).fill(baseImages).flat();
  return (<>
 <h2 className="font-bold text-xl md:text-3xl text-center " id="tech">My Tech Playground </h2>
    <div
      className="w-full my-10  bg-gradient-to-b from-violet-900 to-black p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
        </>
  );
}
export default TechStack
