"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Gamepad2,
  Monitor,
  Camera,
  FileText,
  Theater,
  Mic,
  Clock,
  Users,
  Star,
  ArrowRight,
  Calendar,
  Activity,
  Target, // Add this import
} from "lucide-react"
import Link from "next/link"

import PageHero from "../components/page-hero"
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/activities'


const activities = [
  {
    icon: Gamepad2,
    title: "Jeux électroniques",
    description:
      "Un espace moderne dédié aux jeux vidéo et à l'e-sport. Équipé des dernières consoles et jeux, cet espace permet aux jeunes de développer leurs réflexes, leur esprit stratégique et de participer à des tournois.",
    features: ["PlayStation 5", "Xbox Series X", "Tournois e-sport", "Gaming PCs"],
    duration: "Accès libre",
    schedule: "Lun-Sam 14h-20h",
    audience: "12-25 ans",
    color: "from-purple-500 to-pink-500",
    image: "/gaming-room.JPG",
  },
  {
    icon: Theater,
    title: "Activités artistiques",
    description:
      "Un espace créatif pour l'expression artistique sous toutes ses formes : théâtre, peinture, musique et danse. Un lieu où les jeunes peuvent développer leur créativité et s'exprimer librement.",
    features: ["Théâtre", "Arts plastiques", "Musique", "Expression corporelle"],
    duration: "Selon l'activité",
    schedule: "Mer-Sam 15h-19h",
    audience: "Tous niveaux",
    color: "from-indigo-500 to-purple-500",
    image: "/art.JPG",
  },
  {
    icon: Users,
    title: "Coworking",
    description:
      "Un espace de travail collaboratif moderne et équipé, idéal pour étudier, travailler sur des projets ou organiser des réunions. Accès à internet haut débit et équipements de bureau.",
    features: ["WiFi haut débit", "Espaces calmes", "Salles de réunion", "Équipement bureau"],
    duration: "Flexible",
    schedule: "Lun-Ven 9h-18h",
    audience: "Étudiants & Professionnels",
    color: "from-blue-500 to-cyan-500",
    image: "/coworking.JPG",
  },
  {
    icon: Mic,
    title: "Studio d'enregistrement",
    description:
      "Un studio professionnel pour l'enregistrement audio, la production musicale et la création de podcasts. Équipé de matériel de haute qualité pour des productions professionnelles.",
    features: ["Équipement pro", "Cabine isolée", "Mixage audio", "Production musicale"],
    duration: "Sur réservation",
    schedule: "Sur rendez-vous",
    audience: "Créateurs de contenu",
    color: "from-pink-500 to-rose-500",
    image: "/studio.JPG",
  },
  {
    icon: Camera,
    title: "Audiovisuel",
    description:
      "Un département dédié à la production audiovisuelle, offrant des équipements et des formations en photographie, vidéo et montage. Idéal pour les créateurs de contenu digital.",
    features: ["Caméras pro", "Montage vidéo", "Photo studio", "Éclairage pro"],
    duration: "Variable",
    schedule: "Mar-Sam 10h-18h",
    audience: "Tous niveaux",
    color: "from-green-500 to-emerald-500",
    image: "/audiovisual.JPG",
  },
  {
    icon: Target,
    title: "Animation éducative",
    description:
      "Programme spécialement conçu pour les enfants, combinant apprentissage et divertissement. Activités pédagogiques, ateliers créatifs et développement personnel adaptés aux plus jeunes.",
    features: ["Activités ludiques", "Soutien scolaire", "Ateliers créatifs", "Développement personnel"],
    duration: "Selon programme",
    schedule: "Mer & Sam 14h-17h",
    audience: "6-12 ans",
    color: "from-orange-500 to-red-500",
    image: "/education.JPG",
  },
]

export default function ActivitiesPage() {
  const { language } = useLanguage()
  const t = translations[language] || translations['fr']
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <PageHero
        badge={{
          icon: Activity,
          text: t.pageSubtitle,
          color: "bg-purple-600/20",
        }}
        title={t.pageTitle.split(' ')[0]}
        subtitle={t.pageTitle.split(' ').slice(1).join(' ')}
        description={t.pageDescription}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Monitor className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">{t.categories.technical.title}</h3>
            <p className="text-gray-400 text-sm">{t.categories.technical.description}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Theater className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">{t.categories.artistic.title}</h3>
            <p className="text-gray-400 text-sm">{t.categories.artistic.description}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Users className="w-8 h-8 text-green-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">{t.categories.social.title}</h3>
            <p className="text-gray-400 text-sm">{t.categories.social.description}</p>
          </div>
        </div>
      </PageHero>

      {/* Activities Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div
                      className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-r ${activity.color} flex items-center justify-center`}
                    >
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{activity.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{activity.description}</p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {activity.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <Clock className="w-5 h-5 text-purple-400 mb-2" />
                      <p className="text-white font-medium text-sm">Durée</p>
                      <p className="text-gray-300 text-xs">{activity.duration}</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <Calendar className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-white font-medium text-sm">Horaires</p>
                      <p className="text-gray-300 text-xs">{activity.schedule}</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <Users className="w-5 h-5 text-pink-400 mb-2" />
                      <p className="text-white font-medium text-sm">Public</p>
                      <p className="text-gray-300 text-xs">{activity.audience}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${activity.color} hover:opacity-90 text-white px-8 py-3 rounded-full shadow-lg`}
                      >
                        Rejoindre
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>

                    {/* <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-md bg-transparent"
                    >
                      En savoir plus
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">Prêt à commencer votre parcours ?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté dynamique et découvrez de nouvelles passions, développez vos compétences et
              créez des liens durables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl"
                >
                  Inscrivez-vous maintenant
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/about">
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl rounded-full backdrop-blur-md bg-transparent"
                >
                  En savoir plus
                </Button> */}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
