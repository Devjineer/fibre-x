import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/home/nav";
import { Hero } from "@/components/home/hero";
import { Benefits } from "@/components/home/benefits";
import { UseCases } from "@/components/home/usecases";
import { Plans } from "@/components/home/plans";
import { Coverage } from "@/components/home/coverage";
import { Register } from "@/components/home/register";
import { Payment } from "@/components/home/payment";
import { HowToConnect } from "@/components/home/how-to-connect";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/home/footer";
import { WhatsAppFab } from "@/components/home/whatsapp-fab";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <UseCases />
        <Plans />
        <Coverage />
        <Register />
        <Payment />
        <HowToConnect />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
