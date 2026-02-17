import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./Features";
import Product from "./components/Product";
import Metrics from "./components/Metrics";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      {/* FUNDO COM LUZ */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[200px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[200px] bottom-[-100px] right-[-100px]" />
      </div>

      <Header />
      <Hero />

      <div className="h-px w-full my-32 speed-line opacity-40" />
      <Features />

      <div className="h-px w-full my-32 speed-line opacity-40" />
      <Product />

      <div className="h-px w-full my-32 speed-line opacity-40" />
      <Metrics />

      <div className="h-px w-full my-32 speed-line opacity-40" />
      <Projects />

      <div className="h-px w-full my-32 speed-line opacity-40" />
      <CTA />

      <Footer />
    </main>
  );
}
