"use client";

import { site } from "@/content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCompanion from "@/components/ContactCompanion";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import ClientsSection from "@/components/sections/ClientsSection";
import TeachingSection from "@/components/sections/TeachingSection";
import ImpactSection from "@/components/sections/ImpactSection";
import MediaSection from "@/components/sections/MediaSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * 섹션 순서는 여기서 바꿉니다. 한 줄을 지우면 그 섹션이 사라집니다.
 * 각 섹션의 내용은 src/content/site.ts 에서 고칩니다.
 */
export default function HomePage() {
  return (
    <>
      <main className="relative">
        <Navbar />
        <div className="film-grain" />
        <HeroSection />
        {site.about.enabled && <AboutSection />}
        {site.works.enabled && <WorksSection />}
        {site.clients.enabled && <ClientsSection />}
        {site.teaching.enabled && <TeachingSection />}
        {site.impact.enabled && <ImpactSection />}
        {site.media.enabled && <MediaSection />}
        {site.resources.enabled && <ResourcesSection />}
        {site.philosophy.enabled && <PhilosophySection />}
        {site.services.enabled && <ServicesSection />}
        <ContactSection />
      </main>
      <Footer />
      {site.contact.companion.enabled && <ContactCompanion />}
    </>
  );
}
