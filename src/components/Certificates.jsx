import { AnimatedTestimonials } from "./animated-testimonials";

export function Certificates() {
  const testimonials =[
  {
    quote:
      "This certificate acknowledges successful completion of the C Training program conducted by SR Institute of Management & Technology, Lucknow in collaboration with the Spoken Tutorial Project, IIT Bombay. The participant earned 2 credits with a score of 77.50%.",
    name: "C Training",
    designation: "Spoken Tutorial Project, IIT Bombay",
    src: "images/certf/c.jpg",
  },
  {
    quote:
      "This certificate recognizes participation in Frontend Battle 2.0, organized by WebnD, IIT Bhubaneswar, from 19th to 21st June 2025. Sonia Sharma showcased enthusiasm and frontend development skills.",
    name: "Frontend Battle 2.0",
    designation: "WebnD, IIT Bhubaneswar",
    src: "images/certf/frontendBattleIIT.jpg",
  },
  {
    quote:
      "Sonia Sharma completed a 6-week Full Stack Developer Bootcamp by GeeksforGeeks, led by Mr. Sandeep Jain, covering both frontend and backend development.",
    name: "Full Stack Bootcamp",
    designation: "GeeksforGeeks",
    src: "images/certf/gfg fullstack.png",
  },
  {
    quote:
      "Sonia Sharma successfully completed a Full Stack Development Internship at InlighNX Global Pvt. Ltd. from 05/06/2025 to 05/07/2025, gaining hands-on experience in web technologies.",
    name: "Internship",
    designation: "InlighNX Global Pvt. Ltd.",
    src: "images/certf/inlignIntern.png",
  },
  {
    quote:
      "Sonia Sharma participated in Kabaddi at the Dr. Abdul Kalam Inter-Technical University Sports Fest 2023–24 (Zonal Level), held on 3rd–4th November 2023 at SRMCEM, Lucknow.",
    name: "Kabaddi Participation",
    designation: "SRMCEM, Lucknow",
    src: "images/certf/kabadi.jpg",
  },
  {
    quote:
      "Sonia Sharma completed a one-day workshop on Data Structures & Algorithms organized by Li-Mat Soft Solutions Pvt. Ltd. at SRIMT, Lucknow.",
    name: "DSA Workshop",
    designation: "Li-Mat Soft Solutions Pvt. Ltd.",
    src: "images/certf/limat.jpg",
  },
  {
    quote:
      "Sonia Sharma completed a 4-credit course in Programming in Python with 90% through SWAYAM, offered by Dr. Rizwan Rehman of Dibrugarh University. The exam was held in May 2024.",
    name: "Python Programming",
    designation: "SWAYAM, Dibrugarh University",
    src: "images/certf/nptel python.png",
  },
  {
    quote:
      "Sonia Sharma completed a 4-credit course in Web Technology with 86% through SWAYAM, offered by Dr. Ashutosh Kumar Bhatt of Uttarakhand Open University. The exam was held on 08-12-2024.",
    name: "Web Technology",
    designation: "SWAYAM, Uttarakhand Open University",
    src: "images/certf/nptel web.png",
  },
  {
    quote:
      "Sonia Sharma completed the Python for Data Science course through NPTEL, conducted by IIT Madras during July–August 2023, with a consolidated score of 62%.",
    name: "Python for Data Science",
    designation: "NPTEL, IIT Madras",
    src: "images/certf/nptel.jpg",
  },
  {
    quote:
      "Rajnath Singh, Defence Minister of India, congratulated Sonia Sharma for securing excellent marks in her Class 12th Board Exam, recognizing her dedication and hard work.",
    name: "Board Exam Recognition",
    designation: "Ministry of Defence, India",
    src: "images/certf/recognition.png",
  },
  {
    quote:
      "Sonia Sharma completed a one-month Frontend Development internship at Unified Mentor Pvt. Ltd. from 01-11-2024 to 01-12-2024, noted for her consistency and hard work.",
    name: "Frontend Internship",
    designation: "Unified Mentor Pvt. Ltd.",
    src: "images/certf/unifiedCertificate.png",
  }
]
  return <AnimatedTestimonials testimonials={testimonials} />;
}
