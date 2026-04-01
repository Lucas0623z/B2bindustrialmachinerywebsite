import React from 'react';
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Factory, Zap, Award, Globe, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "../translations";
import { motion } from "motion/react";
import {
  HeroReveal,
  ScrollReveal,
  StaggerReveal,
  StaggerRevealItem,
} from "../components/motion/PremiumMotion";
import { motionConfig } from "../components/motion/MotionConfig";

export default function HomePage() {
  const t = useTranslation();

  const products = [
    {
      id: "filtration",
      title: t.home.productCategories.filtration.title,
      description: t.home.productCategories.filtration.description,
      image: "https://images.unsplash.com/photo-1748002757537-00ab5114135b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWx0cmF0aW9uJTIwc3lzdGVtJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "pumps",
      title: t.home.productCategories.pumps.title,
      description: t.home.productCategories.pumps.description,
      image: "https://images.unsplash.com/photo-1768779611359-c4bb38ba3c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjBwdW1wJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDQ5NzY0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "separators",
      title: t.home.productCategories.separators.title,
      description: t.home.productCategories.separators.description,
      image: "https://images.unsplash.com/photo-1683119926853-6427b2966f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNlcGFyYXRvciUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "filters",
      title: t.home.productCategories.filters.title,
      description: t.home.productCategories.filters.description,
      image: "https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGluZHVzdHJpYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const strengths = [
    {
      icon: Factory,
      title: t.home.whyChooseUs.manufacturing.title,
      description: t.home.whyChooseUs.manufacturing.description,
    },
    {
      icon: Zap,
      title: t.home.whyChooseUs.innovation.title,
      description: t.home.whyChooseUs.innovation.description,
    },
    {
      icon: Award,
      title: t.home.whyChooseUs.quality.title,
      description: t.home.whyChooseUs.quality.description,
    },
    {
      icon: Globe,
      title: t.home.whyChooseUs.global.title,
      description: t.home.whyChooseUs.global.description,
    },
  ];

  const industries = [
    {
      name: t.home.industries.chemical,
      image: "https://images.unsplash.com/photo-1768128834406-f5b1b962af9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHByb2Nlc3NpbmclMjBwbGFudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0NDk3NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: t.home.industries.automotive,
      image: "https://images.unsplash.com/photo-1689942007858-7b12bf5864bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc3NDQ5NzY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: t.home.industries.mining,
      image: "https://images.unsplash.com/photo-1758750518277-1a8a182033e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnQlMjBpbmR1c3RyaWFsJTIwaGVhdnl8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: t.home.industries.food,
      image: "https://images.unsplash.com/photo-1768737180431-9b986c7dd1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGVxdWlwbWVudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section - Layered entrance animation */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        {/* Background image with subtle parallax */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: motionConfig.easing.smooth }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQ0OTc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industrial machinery"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Hero content - Sequential layered reveal */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Headline */}
            <HeroReveal custom={0}>
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-white mb-6 whitespace-nowrap">
                {t.home.hero.title}
              </h1>
            </HeroReveal>

            {/* Supporting text */}
            <HeroReveal custom={1}>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                {t.home.hero.subtitle}
              </p>
            </HeroReveal>

            {/* CTA button with enhanced interaction */}
            <HeroReveal custom={2}>
              <div>
                <Link to="/products">
                  <motion.div
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white rounded-md overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Button background glow on hover */}
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium text-lg">
                      {t.home.hero.exploreProducts}
                    </span>
                    <ArrowRight className="h-6 w-6 relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </div>
            </HeroReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Product categories - Staggered card reveal */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              {t.home.productCategories.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.home.productCategories.subtitle}
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <StaggerRevealItem key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <motion.div
                    className="group bg-white rounded-xl overflow-hidden shadow-sm"
                    whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                    transition={{ duration: 0.4, ease: motionConfig.easing.smooth }}
                  >
                    {/* Image container with zoom effect */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: motionConfig.easing.smooth }}
                        className="h-full"
                      >
                        <ImageWithFallback
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                      {/* Hover line indicator */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>

                    <div className="p-7">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-slate-600 text-base mb-5 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Arrow with slide animation */}
                      <div className="flex items-center text-blue-600 font-medium">
                        <span>{t.home.productCategories.learnMore}</span>
                        <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerRevealItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Company strengths - Grid reveal with icons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              {t.home.whyChooseUs.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.home.whyChooseUs.subtitle}
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {strengths.map((strength, index) => (
              <StaggerRevealItem key={index}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon with scale animation */}
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <strength.icon className="h-10 w-10" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    {strength.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {strength.description}
                  </p>
                </motion.div>
              </StaggerRevealItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Industries served - Dark section with image cards */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              {t.home.industries.title}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.home.industries.subtitle}
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <StaggerRevealItem key={index}>
                <Link to="/industries">
                  <motion.div
                    className="group relative h-80 rounded-xl overflow-hidden"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: motionConfig.easing.smooth }}
                  >
                    {/* Image with zoom */}
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: motionConfig.easing.smooth }}
                    >
                      <ImageWithFallback
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />

                    {/* Border glow on hover */}
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-500 rounded-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {industry.name}
                      </h3>
                      <div className="flex items-center text-blue-300 opacity-0 -translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <span className="text-sm font-medium">Explore solutions</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerRevealItem>
            ))}
          </StaggerReveal>

          <ScrollReveal className="text-center mt-12">
            <Link to="/industries">
              <motion.div
                className="group inline-flex items-center text-blue-400 hover:text-blue-300 text-lg font-medium"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <span>{t.home.industries.viewAll}</span>
                <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Manufacturing capability - Side-by-side reveal */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <ScrollReveal variant="slideLeft">
              <div>
                <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  {t.home.manufacturing.title}
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {t.home.manufacturing.description}
                </p>

                <StaggerReveal>
                  <ul className="space-y-5 mb-10">
                    <StaggerRevealItem>
                      <motion.li
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="h-7 w-7 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700 text-lg">{t.home.manufacturing.features.iso}</span>
                      </motion.li>
                    </StaggerRevealItem>
                    <StaggerRevealItem>
                      <motion.li
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="h-7 w-7 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700 text-lg">{t.home.manufacturing.features.rd}</span>
                      </motion.li>
                    </StaggerRevealItem>
                    <StaggerRevealItem>
                      <motion.li
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="h-7 w-7 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700 text-lg">{t.home.manufacturing.features.oem}</span>
                      </motion.li>
                    </StaggerRevealItem>
                    <StaggerRevealItem>
                      <motion.li
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="h-7 w-7 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700 text-lg">{t.home.manufacturing.features.testing}</span>
                      </motion.li>
                    </StaggerRevealItem>
                  </ul>
                </StaggerReveal>

                <Link to="/technology">
                  <motion.div
                    className="group inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-md font-medium text-lg"
                    whileHover={{
                      backgroundColor: "#1e3a8a",
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{t.home.manufacturing.learnMore}</span>
                    <ArrowRight className="h-6 w-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal variant="slideRight">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: motionConfig.easing.smooth }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1764835822981-1a3ccf47c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Accent border */}
                <div className="absolute inset-0 border-4 border-blue-600/20 rounded-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
