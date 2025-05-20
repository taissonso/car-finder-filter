import Image from "next/image";
import { Montserrat } from "next/font/google";
import ListCars from "@/components/listcars";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <main>
      <ListCars />
    </main>
  );
}
