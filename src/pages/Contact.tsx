// src/pages/Contact.tsx
import React, { FormEvent, useState } from 'react'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string>('')
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const services = [
    'Utefotografering',
    'Studiofoto',
    'Bröllop',
    'Företagsporträtt',
    'Produktfotografering',
    'Verksamhetsfoto',
    'Film',
    'Hobby',
    'Hemsida',
    'Annat',
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)
    const form = e.currentTarget

    const formData = new FormData(form)
    const data: Record<string, any> = {}
    formData.forEach((value, key) => {
      if (key === 'service') {
        data[key] = selectedService
      } else {
        data[key] = value
      }
    })

    if (!data.service && selectedService) {
      data.service = selectedService
    }

    try {
      const response = await fetch('https://formspree.io/f/xvgowldv', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
        setSelectedService('')
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error('Formspree error:', response.status, errorData)
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission network error:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakta Svendsén Photography',
    description:
      'Kontakta och boka fotograf eller webbutvecklare i Kungälv & Göteborg.',
    url: 'https://www.svendsenphotography.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Svendsén Photography',
      url: 'https://www.svendsenphotography.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kungälv',
        addressRegion: 'Västra Götaland',
        addressCountry: 'SE',
      },
      telephone: '+46XXXXXXXXX',
    },
  }

  const inputClasses =
    'block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  const labelClasses = 'block text-sm font-medium mb-1.5 text-foreground'
  const radioLabelClasses =
    'ml-2 text-sm font-medium text-foreground cursor-pointer'
  const radioInputClasses =
    'h-4 w-4 shrink-0 text-primary border-muted-foreground focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50'

  return (
    <>
      <SEO
        title="Kontakt | Fotograf & Webb | Göteborg & Kungälv - Svendsén Photography"
        description="Kontakta Svendsén Photography för bröllopsfotografering, porträtt, företagsfoto, eventfoto eller webbutveckling i Göteborg och Kungälv. Skicka din förfrågan!"
        url="https://www.svendsenphotography.com/contact"
        keywords="kontakt fotograf, fotograf göteborg, fotograf kungälv, webbutvecklare kungälv, boka fotograf, offert fotografering, kontakta webbyrå"
        jsonLd={contactJsonLd}
      />

      <main className="pt-16 md:pt-20 bg-background text-foreground">
        <Section variant="white">
          <SectionContent heading="Kontakta mig">
            <p className="text-muted-foreground mb-8 max-w-xl">
              Fyll i formuläret nedan så återkommer jag till dig så snart som
              möjligt via e-post.
            </p>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 max-w-3xl"
            >
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Ditt namn *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Förnamn Efternamn"
                  className={inputClasses}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  E-postadress *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="din.epost@exempel.com"
                  className={inputClasses}
                  disabled={isSubmitting}
                />
              </div>

              <fieldset className="sm:col-span-2">
                <legend className={labelClasses}>
                  Vilken tjänst är du intresserad av? *
                </legend>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {services.map((service) => (
                    <div key={service} className="flex items-center">
                      <input
                        type="radio"
                        id={service}
                        name="service"
                        value={service}
                        checked={selectedService === service}
                        onChange={() => setSelectedService(service)}
                        required
                        className={radioInputClasses}
                        disabled={isSubmitting}
                      />
                      <label htmlFor={service} className={radioLabelClasses}>
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClasses}>
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Berätta lite om vad du behöver hjälp med..."
                  className={inputClasses}
                  disabled={isSubmitting}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-highlight text-secondary hover:bg-primary/90 h-10 px-4 py-2"
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                </button>
              </div>
            </form>

            <div className="mt-6 h-6">
              {formStatus === 'success' && (
                <p className="text-sm font-medium text-green-600">
                  Tack! Ditt meddelande har skickats. Jag återkommer snart.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-sm font-medium text-destructive">
                  Ett fel uppstod när meddelandet skulle skickas. Försök igen
                  eller kontakta mig direkt via e-post.
                </p>
              )}
            </div>
          </SectionContent>
        </Section>
      </main>
    </>
  )
}
