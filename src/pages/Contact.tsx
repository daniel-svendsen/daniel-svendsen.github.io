import React, { FormEvent, useState } from 'react'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Button } from '@/components/Button'
import { HelmetProvider } from 'react-helmet-async'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string>('')
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

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
    const formValues = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >
    const data = {
      ...formValues,
      service: selectedService,
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
    },
  }

  const inputClasses =
    'block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  const labelClasses =
    'block text-sm font-medium mb-1.5 text-foreground text-left'
  const radioLabelClasses =
    'ml-2 text-sm font-medium text-foreground cursor-pointer'
  const radioInputClasses =
    'h-4 w-4 shrink-0 text-primary border-muted-foreground focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50'

  return (
    <HelmetProvider>
      <SEO
        title="Kontakt | Fotograf & Webb | Göteborg & Kungälv - Svendsén Photography"
        description="Kontakta Svendsén Photography för bröllopsfotografering, porträtt, företagsfoto, eventfoto eller webbutveckling i Göteborg och Kungälv. Skicka din förfrågan!"
        url="https://www.svendsenphotography.com/contact"
        image={absoluteLogoUrl}
        keywords="kontakt fotograf, fotograf göteborg, fotograf kungälv, webbutvecklare kungälv, boka fotograf, offert fotografering, kontakta webbyrå"
        jsonLd={contactJsonLd}
      />

      <main className="pt-16 md:pt-20 bg-background text-foreground">
        <Section
          bgColor="beige"
          roundedBottom="10xl"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent>
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-textPrimary dark:text-white mb-4 font-poiret">
                Kontakta mig
              </h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-xl mx-auto">
                Fyll i formuläret nedan så återkommer jag till dig så snart som
                möjligt via e-post.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 max-w-3xl mx-auto"
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
                <legend className={`${labelClasses} mb-2`}>
                  {' '}
                  Vilken tjänst är du intresserad av? *
                </legend>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {' '}
                  {services.map((service) => (
                    <div key={service} className="flex items-center">
                      <input
                        type="radio"
                        id={service}
                        name="service_option"
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

              <div className="sm:col-span-2 flex justify-center mt-4">
                {' '}
                <Button
                  type="submit"
                  variant="default"
                  subVariant="rounded"
                  size="lg"
                  className="w-full sm:w-auto px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                </Button>
              </div>
            </form>

            <div className="mt-8 h-6 text-center max-w-3xl mx-auto">
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
    </HelmetProvider>
  )
}