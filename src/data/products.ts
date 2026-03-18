import type { Product } from '../types/product'


//product 1
import p1 from "../assets/Rectangle 60.png";
import p2 from "../assets/Rectangle 61.png"; 
import p3 from "../assets/Rectangle 62.png"; 
import p4 from "../assets/Rectangle 63.png";


//manifacture

// import m1 from "../assets/m1.jfif";
// import m2 from "../assets/m2.jfif";
// import m3 from "../assets/m3.jfif";
// import m4 from "../assets/m4.jfif";


import m1 from "../assets/Manufacturing1.jpg";
import m2 from "../assets/Manufacturing2.jfif";
import m3 from "../assets/Manufacturing3.png";
import m4 from "../assets/Manufacturing4.jfif";

//infra
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/infra3.jfif";
import i4 from "../assets/infra4.png";          

   

const description =
  "GK industries, an ISO 9001:2015 certified company, boasts a rich history of 50 years in manufacturing and exporting diverse sheet metal components. Our expertise lies in crafting customized designs that cater to our customers'";


export const products: Product[] = [
  {
    id: 1,
    name: 'Precision Engineering',
    slug: 'precision-engineering',
    description,
    price: 19.99,
    images: [ p1, p2, p3,p4],
  },
  {
    id: 2,
    name: 'Manufacturing Solutions',
    slug: 'manufacturing-solutions',
    description,
    price: 59.99,
    images: [m1, m2, m3, m4],
  },
  {
    id: 3,
    name: 'Infrastructure Project',
    slug: 'infrastructure-project',
    description,
    price: 89.99,
    images: [i1, i2, i3, i4],
  },
]
