import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura"
          topic="Neural network"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="2"
          name="Count"
          topic="Derivatives"
          subject="science"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="3"
          name="Verba"
          topic="Language"
          subject="English"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
