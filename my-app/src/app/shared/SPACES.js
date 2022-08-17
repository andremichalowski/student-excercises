import berlin from "../assets/img/berlin.jpeg";
import casablanca from "../assets/img/casablanca.jpg";
import japan from "../assets/img/japan.jpg";
import warsaw from "../assets/img/warsaw.jpg";

export const SPACES = [
  {
    id: 0,
    name: "Berlin",
    image: berlin,
    elevation: 1233,
    featured: false,
    description:
      "An quiet co-working space meant for entrepeneurs and creatives.",
  },
  {
    id: 1,
    name: "Casablanca ",
    image: casablanca,
    elevation: 877,
    featured: false,
    description: "Morocco's finest hotels have some nice Brutalism.",
  },
  {
    id: 2,
    name: "Japan",
    image: japan,
    elevation: 2901,
    featured: false,
    description:
      "Japan is home to some of the cleanest and minimalistic design. A perfect home for this style.",
  },
  {
    id: 3,
    name: "Warsaw",
    image: warsaw,
    elevation: 42,
    featured: true,
    description:
      "Warsaw's history with concrete runs deep. Repurposing this style is a big statement.",
  },
];
