import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Project_1.PNG"
          title="Memories"
          description="
Memories propose des cartes souvenirs interactives avec authentification, commentaires, likes et recommandations. Alimenté par MongoDB, il permet le filtrage par tags et recherche, offrant une expérience utilisateur personnalisée et engageante."
        />
        <ProjectCard
          src="/Project_2.png"
          title="Space Website"
          description="Portfolio au thème spatial avec animations élégantes en TypeScript et Next.js, mettant en valeur mes compétences de manière visuellement attrayante et offrant une expérience utilisateur dynamique."
        />
      </div>
    </div>
  );
};

export default Projects;
