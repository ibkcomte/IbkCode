
import pet from "../assets/pet.png";
import meriTrade from "../assets/meriTrade.png";
import tiwaBlog from "../assets/tiwaBlog.jpg";
import TourSite from "../assets/TourSite.png";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: "Completed" | "In Progress";
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}
const Project: Project[] = [
  {
    id: 1,
    title: "Tourism Website",
    description:
      "this particular Website was for a client in iceland. tourism company that offers travel packages, destination guides, and booking services to adventure seekers.",
    image: TourSite,
    status: "Completed",
    tags: [""],
    githubUrl: " ",
    liveUrl: "https://eleganttours.is/#",
  },
  {
    id: 2,
    title: "TiwaBlog",
    description:
      "A Blog website that contains all of what a client is willing to showcase on her site, ranging from storytelling, books, fashion, Art and what have you.",
    image: tiwaBlog,
    status: "Completed",
    tags: [""],
    githubUrl: " ",
    liveUrl: "https://tiwaadetoye.com/",
  },
  {
    id: 1,
    title: "Trade Solution",
    description: " .",
    image: meriTrade,
    status: "Completed",
    tags: [""],
    liveUrl: "https://web.meritrade.com",
  },
  {
    id: 2,
    title: "PetCare Services",
    description:
      "This application kicked-of a while ago as a project being assign to us. It has both the mobile, web and ios version",
    image: pet,
    status: "In Progress",
    tags: [""],
    githubUrl: "https://github.com/ZULFAHGROUP/pet-app-frontend",
    liveUrl: "https://tiwaadetoye.com/",
  },
];

export default Project;
