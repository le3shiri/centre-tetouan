"use client"

import { useLanguage } from '../context/LanguageContext'
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('ar')}
        className={`${language === 'ar' ? 'bg-white/10' : ''}`}
      >
        العربية
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('fr')}
        className={`${language === 'fr' ? 'bg-white/10' : ''}`}
      >
        Français
      </Button>
    </div>
  )
}