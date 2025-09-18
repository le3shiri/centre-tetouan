"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react"

import PageHero from "../components/page-hero"


const teamMembers = [
  {
    name: "Ahmed Benali",
    role: "Directeur du Centre",
    image: "/placeholder.svg?height=300&width=300",
    description: "Passionné par l'éducation des jeunes depuis plus de 10 ans",
  },
  {
    name: "Fatima Zahra",
    role: "Coordinatrice Pédagogique",
    image: "/placeholder.svg?height=300&width=300",
    description: "Experte en développement de programmes éducatifs innovants",
  },
  {
    name: "Youssef Alami",
    role: "Animateur Multimédia",
    image: "/placeholder.svg?height=300&width=300",
    description: "Spécialiste en technologies créatives et production audiovisuelle",
  },
  {
    name: "Aicha Mansouri",
    role: "Responsable Théâtre",
    image: "/placeholder.svg?height=300&width=300",
    description: "Comédienne professionnelle et formatrice en arts dramatiques",
  },
]

const values = [
  {
    icon: Heart,
    title: "Inclusion",
    description: "Un espace ouvert à tous, sans discrimination",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encourager la créativité et l'esprit d'initiative",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Créer des liens durables entre les jeunes",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Viser la qualité dans tous nos programmes",
    color: "from-purple-500 to-indigo-500",
  },
]

const partners = [
  "Ministère de la Jeunesse",
  "Région Tetouan",
  "Commune de Tetouan",
  "UNESCO",
  "Fondation Mohammed V",
  "Association des Centres de Jeunesse",
]

export default function AboutPage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">



      <PageHero
        badge={{
          icon: Target,
          text: "À PROPOS DE NOUS",
          color: "bg-blue-600/20",
        }}
        title="Notre"
        subtitle="Mission"
        description="Créé dans le cadre d'une initiative nationale de soutien à la jeunesse, Dar Chabab Tetouan est un espace créatif et éducatif où les jeunes peuvent découvrir leurs talents et développer des compétences pratiques."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">2019</div>
            <div className="text-sm text-gray-400">Année de création</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">1200m²</div>
            <div className="text-sm text-gray-400">Surface du centre</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-sm text-gray-400">Jeunes accompagnés</div>
          </div>
        </div>
      </PageHero>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-transparent backdrop-blur-md border-white/20 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Notre Mission</h2>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Promouvoir la croissance personnelle et professionnelle des jeunes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Favoriser l'inclusion numérique et l'engagement culturel</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Encourager l'innovation communautaire et l'expression artistique</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-transparent backdrop-blur-md border-white/20 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Notre Vision</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Être un centre de jeunesse de référence au Maroc, reconnu pour ses programmes inclusifs, son impact
                    éducatif et son enrichissement culturel. Nous aspirons à créer une génération de jeunes leaders,
                    créatifs et engagés dans leur communauté.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Nos{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Valeurs
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4`}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Équipe</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des professionnels passionnés dédiés à l'épanouissement des jeunes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-purple-300 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Partenaires
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ensemble pour l'épanouissement de la jeunesse marocaine
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white font-medium text-center">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
