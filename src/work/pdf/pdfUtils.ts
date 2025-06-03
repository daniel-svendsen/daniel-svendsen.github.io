import { Font } from '@react-pdf/renderer'
import { type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'

export const registerPdfFonts = () => {
  Font.register({
    family: 'Open Sans',
    src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf',
  })
  Font.register({
    family: 'Open Sans Bold',
    src: 'https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhs.ttf',
  })
}

export const translatePdf = (
  localized: LocalizedContent | string | undefined,
  lang: Language,
): string => {
  if (!localized) return ''
  if (typeof localized === 'string') return localized
  return localized[lang] || localized.en
}

export const pdfSectionTitles: Record<string, LocalizedContent> = {
  profileIntro: { en: 'Profile', sv: 'Profil' },
  technicalSkills: { en: 'Technical Skills', sv: 'Tekniska Färdigheter' },
  experiencedIn: { en: 'Experienced In', sv: 'Erfarenhet Av' },
  familiarWith: { en: 'Familiar with/Studied', sv: 'Känner till/Studerat' },
  workExperience: { en: 'Work Experience', sv: 'Arbetslivserfarenhet' },
  education: { en: 'Education', sv: 'Utbildning' },
  contact: { en: 'Contact', sv: 'Kontakt' },
  linkedInName: { en: 'LinkedIn Profile', sv: 'LinkedIn-profil' },
  websiteLinkText: {
    en: 'Website: www.svendsenphotography.com/work',
    sv: 'Webbplats: www.svendsenphotography.com/work',
  },
}