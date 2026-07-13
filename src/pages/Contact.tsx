import React, { FormEvent, useState } from 'react'
import { Mail, MapPin, MessageCircle } from 'lucide-react'

import { Button } from '@/components/Button'
import { EditorialIntro, EditorialSection } from '@/components/Editorial'
import SEO from '@/components/SEO'
import { businessReference } from '@/config/seo'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string>('')
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  const services = [
    'Utefotografering',
    'Familjefotografering',
    'Studiofoto',
    'Bröllop',
    'Företagsporträtt',
    'Produktfotografering',
    'Verksamhetsfoto / hobby / fordon',
    'Film som tillägg',
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
    url: 'https://www.svendsenphotography.com/contact/',
    mainEntity: businessReference,
  }

  const inputClasses =
    'block w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-textPrimary shadow-none outline-none transition focus:border-textPrimary/45 focus:ring-4 focus:ring-textPrimary/8 disabled:cursor-not-allowed disabled:opacity-55'
  const labelClasses = 'mb-2 block text-sm font-semibold text-textPrimary'
  const radioInputClasses =
    'h-4 w-4 shrink-0 border-black/20 text-textPrimary focus:ring-textPrimary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50'

  return (
    <>
      <SEO
        title="Kontakt | Fotograf & Webb | Göteborg & Kungälv - Svendsén Photography"
        description="Kontakta Svendsén Photography för fotografering, porträtt, familjefoto, företagsfoto och webbutveckling i Göteborg, Kungälv och Stenungsund."
        url="https://www.svendsenphotography.com/contact/"
        image={absoluteLogoUrl}
        keywords="kontakt fotograf, familjefotograf göteborg, fotograf göteborg, fotograf kungälv, fotograf stenungsund, webbutvecklare kungälv, boka fotograf, offert fotografering, kontakta webbyrå"
        jsonLd={contactJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Kontakt',
            url: 'https://www.svendsenphotography.com/contact/',
          },
        ]}
      />

      <main className="bg-[#f5f5f2] pt-20 text-textPrimary md:pt-24">
        <EditorialSection compact>
          <EditorialIntro
            align="center"
            eyebrow="Kontakt"
            headingLevel="h1"
            title="Berätta vad du planerar."
            description="Fyll i formuläret så återkommer jag med ett upplägg som passar fotograferingen, platsen och känslan du vill åt."
          />
        </EditorialSection>

        <EditorialSection tone="white" className="pt-0">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <aside className="rounded-[1.75rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-textSecondary">
                Område
              </p>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-textPrimary">
                Fotograf i Göteborg, Kungälv och Stenungsund med omnejd.
              </h2>
              <p className="leading-8 text-textPrimary/68">
                Jag fotograferar bröllop, porträtt, familjer och företag. Oavsett
                om fotograferingen sker vid havet, i stadsmiljö, hemma hos er
                eller på en plats som betyder något, anpassar jag upplägget efter
                ljuset, platsen och känslan ni vill åt.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  { icon: MapPin, text: 'Kungälv, Göteborg & Stenungsund' },
                  { icon: MessageCircle, text: 'Svar via e-post så snart jag kan' },
                  { icon: Mail, text: 'Bokning, offert eller enkel fråga' },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white px-4 py-3 text-sm font-semibold text-textPrimary/78"
                    >
                      <Icon className="h-4 w-4 text-textPrimary" />
                      {item.text}
                    </div>
                  )
                })}
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-x-5 gap-y-6 rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] sm:grid-cols-2 md:p-8"
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
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      htmlFor={service}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/6 bg-[#f8f8f5] px-4 py-3 text-sm font-medium text-textPrimary/78 transition hover:border-textPrimary/25"
                    >
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
                      {service}
                    </label>
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
                  rows={6}
                  required
                  placeholder="Berätta lite om vad du behöver hjälp med..."
                  className={inputClasses}
                  disabled={isSubmitting}
                />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  variant="default"
                  subVariant="rounded"
                  size="lg"
                  className="w-full px-8 sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                </Button>
              </div>

              <div className="min-h-6 sm:col-span-2">
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
            </form>
          </div>
        </EditorialSection>
      </main>
    </>
  )
}
