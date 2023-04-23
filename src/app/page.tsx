import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-red-300  items-center justify-between p-24">
      <Container />
    </main>
  );
}