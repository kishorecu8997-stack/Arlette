import person1 from "../assets/Rectangle 30.png";
import person2 from "../assets/Rectangle 29.png";
import person3 from "../assets/Rectangle 31.png";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Abraham Jhony",
    role: "Site Engineer",
    quote: "The precision and reliability of their equipment are unmatched. It has significantly streamlined our site operations and reduced downtime.",
    rating: "4.8/5",
    image: person1,
  },
  {
    id: 2,
    name: "Alex Mortis",
    role: "Operation Engineer",
    quote: "Batch variation used to slow us down. Since partnering with Conada, output stability has improved dramatically-run after run.",
    rating: "4.5/5",
    image: person2,
  },
  {
    id: 3,
    name: "Jonathan Roy",
    role: "Owner USV",
    quote: "An absolute game-changer for our manufacturing process. We appreciate their 24/7 support and dedication to sustainability.",
    rating: "5.0/5",
    image: person3,
  }
];