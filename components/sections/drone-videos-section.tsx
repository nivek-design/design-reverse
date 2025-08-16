
"use client";

import { useState } from "react";
import { Play, Eye, Clock, MapPin, Calendar } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { HoverCard } from "@/components/animations/hover-card";
import { Button } from "@/components/ui/button";

interface DroneVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  location: string;
  date: string;
  category: string;
  views?: string;
}

const droneVideos: DroneVideo[] = [
  {
    id: "1",
    title: "Condomínio Residencial Premium",
    description: "Vídeo promocional aéreo destacando a arquitetura moderna e área de lazer completa do empreendimento.",
    thumbnail: "/drone-video-1.jpg",
    videoUrl: "#",
    duration: "2:15",
    location: "Londrina, PR",
    date: "Dezembro 2024",
    category: "Imobiliário",
    views: "1.2K"
  },
  {
    id: "2",
    title: "Evento Corporativo - Tech Summit",
    description: "Cobertura aérea completa do maior evento de tecnologia da região, capturando a grandiosidade do evento.",
    thumbnail: "/drone-video-2.jpg",
    videoUrl: "#",
    duration: "3:45",
    location: "Centro de Convenções",
    date: "Novembro 2024",
    category: "Eventos",
    views: "2.8K"
  },
  {
    id: "3",
    title: "Resort de Luxo - Vista Panorâmica",
    description: "Filmagem cinematográfica mostrando as instalações premium e paisagens deslumbrantes do resort.",
    thumbnail: "/drone-video-3.jpg",
    videoUrl: "#",
    duration: "4:20",
    location: "Interior do Paraná",
    date: "Outubro 2024",
    category: "Turismo",
    views: "3.5K"
  },
  {
    id: "4",
    title: "Indústria Sustentável",
    description: "Documentário aéreo sobre práticas sustentáveis e inovação tecnológica na indústria moderna.",
    thumbnail: "/drone-video-4.jpg",
    videoUrl: "#",
    duration: "5:30",
    location: "Distrito Industrial",
    date: "Setembro 2024",
    category: "Industrial",
    views: "1.9K"
  },
  {
    id: "5",
    title: "Campus Universitário",
    description: "Tour aéreo completo apresentando toda a infraestrutura e beleza arquitetônica do campus.",
    thumbnail: "/drone-video-5.jpg",
    videoUrl: "#",
    duration: "3:10",
    location: "Universidade Estadual",
    date: "Agosto 2024",
    category: "Institucional",
    views: "4.1K"
  },
  {
    id: "6",
    title: "Shopping Center Grand Opening",
    description: "Cobertura aérea da inauguração do maior shopping da região com imagens espetaculares da multidão.",
    thumbnail: "/drone-video-6.jpg",
    videoUrl: "#",
    duration: "2:45",
    location: "Novo Shopping Londrina",
    date: "Julho 2024",
    category: "Comercial",
    views: "5.2K"
  }
];

const categories = ["Todos", "Imobiliário", "Eventos", "Turismo", "Industrial", "Institucional", "Comercial"];

export function DroneVideosSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedVideo, setSelectedVideo] = useState<DroneVideo | null>(null);

  const filteredVideos = selectedCategory === "Todos" 
    ? droneVideos 
    : droneVideos.filter(video => video.category === selectedCategory);

  const handlePlayVideo = (video: DroneVideo) => {
    setSelectedVideo(video);
    // Aqui você pode implementar a lógica para abrir um modal ou player de vídeo
  };

  return (
    <section className="py-20 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 rounded-full text-sm font-medium mb-4 border border-orange-500/30">
              Portfólio de Vídeos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Vídeos Profissionais com Drone
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubra nossa coleção de vídeos aéreos cinematográficos que elevam marcas e contam histórias únicas. 
              Cada projeto é uma obra de arte visual criada para gerar impacto e resultados.
            </p>
          </FadeIn>
        </div>

        {/* Category Filter */}
        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Videos Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <FadeIn key={video.id} direction="up" delay={0.1 * index}>
              <HoverCard className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-all duration-500">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button */}
                  <button
                    onClick={() => handlePlayVideo(video)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-orange-500/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 hover:bg-orange-600">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </button>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {video.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {video.date}
                    </div>
                    {video.views && (
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {video.views} visualizações
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => handlePlayVideo(video)}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Assistir Vídeo
                  </Button>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </StaggerChildren>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <FadeIn direction="up">
            <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Pronto para criar seu próximo vídeo aéreo?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Transforme sua visão em realidade com nossa expertise em filmagem aérea profissional. 
                Vamos criar conteúdo que eleva sua marca e gera resultados extraordinários.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
                  Solicitar Orçamento
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-500/10 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  Ver Mais Trabalhos
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
