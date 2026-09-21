import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";

export default function Home() {
  return (
    <AuthGuard>
      <main>
        <HeroSection />
        <Footer />
      </main>
    </AuthGuard>
  );
}