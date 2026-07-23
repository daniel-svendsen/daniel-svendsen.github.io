import React, { FormEvent, useEffect, useMemo, useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import { Button, LinkButton } from '@/components/Button'
import { EditorialIntro, EditorialSection } from '@/components/Editorial'
import SEO from '@/components/SEO'
import {
  CONTACT_SERVICE_OPTIONS,
  getContactServiceOption,
  getContactServiceSubmissionValue,
  type ContactServiceId,
} from '@/config/contactServices'
import { BUSINESS, businessReference } from '@/config/seo'
import { getPageOgImage } from '@/config/pageSeo'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'
import {
  calculatePriceEstimate,
  ESTIMATE_SERVICE_CONTACT_IDS,
  formatPrice,
  formatPriceEstimateForSubmission,
  getServicesUrlForEstimate,
  parsePriceEstimateSelection,
  type PriceEstimateSelection,
} from '@/utils/priceEstimate'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const queryString = searchParams.toString()
  const [selectedServiceId, setSelectedServiceId] = useState<
    ContactServiceId | ''
  >('')
  const [estimateSelection, setEstimateSelection] =
    useState<PriceEstimateSelection | null>(null)
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const ogImage = getPageOgImage('contact')

  useEffect(() => {
    const parsed = parsePriceEstimateSelection(
      new URLSearchParams(queryString),
    )

    if (!parsed) return

    setEstimateSelection(parsed)
    setSelectedServiceId(ESTIMATE_SERVICE_CONTACT_IDS[parsed.service])
  }, [queryString])

  const selectedServiceOption = selectedServiceId
    ? getContactServiceOption(selectedServiceId)
    : undefined
  const activeEstimateSelection =
    estimateSelection &&
    selectedServiceId ===
      ESTIMATE_SERVICE_CONTACT_IDS[estimateSelection.service]
      ? estimateSelection
      : null
  const activeEstimate = useMemo(
    () =>
      activeEstimateSelection
        ? calculatePriceEstimate(activeEstimateSelection)
        : null,
    [activeEstimateSelection],
  )
  const estimateSubmission =
    activeEstimateSelection && activeEstimate
      ? formatPriceEstimateForSubmission(
          activeEstimateSelection,
          activeEstimate,
        )
      : ''

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
      service: selectedServiceId
        ? getContactServiceSubmissionValue(selectedServiceId)
        : '',
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
        setSelectedServiceId('')
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
    url: PUBLIC_CANONICAL_URLS.contact,
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
        title="Boka fotograf i Göteborg, Kungälv & Stenungsund | Kontakt"
        description="Boka fotograf eller be om offert för bröllop, porträtt, familjefoto, företagsfoto, produktfoto och webbutveckling i Göteborg, Kungälv och Stenungsund."
        url={PUBLIC_CANONICAL_URLS.contact}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        keywords="boka fotograf, kontakt fotograf, offert fotografering, fotograf göteborg, fotograf kungälv, fotograf stenungsund, familjefotograf göteborg, webbutvecklare kungälv"
        jsonLd={contactJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          {
            name: 'Kontakt',
            url: PUBLIC_CANONICAL_URLS.contact,
          },
        ]}
      />

      <main className="bg-[#f5f5f2] pt-20 text-textPrimary md:pt-24">
        <EditorialSection compact>
          <EditorialIntro
            align="center"
            eyebrow="Kontakt"
            headingLevel="h1"
            title="Boka fotograf eller skicka en förfrågan."
            description="Fyll i formuläret om du vill boka fotograf i Göteborg, Kungälv eller Stenungsund, eller om du vill ha offert på fotografering eller hemsida."
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
                Jag fotograferar bröllop, porträtt, familjer, företag, event och
                produkter. Oavsett om fotograferingen sker vid havet, i
                stadsmiljö, hemma hos er eller på plats hos företaget anpassar
                jag upplägget efter uppdraget, ljuset och platsen.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  { icon: MapPin, text: 'Kungälv, Göteborg & Stenungsund' },
                  { icon: Clock, text: BUSINESS.openingHours },
                  { icon: Phone, text: BUSINESS.phoneDisplay },
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

              {activeEstimateSelection && activeEstimate && (
                <div className="rounded-2xl border border-black/6 bg-[#f8f8f5] p-5 sm:col-span-2">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-textSecondary">
                        Medskickad prisindikation
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-textPrimary">
                        {formatPrice(activeEstimate.total)}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-textPrimary/68">
                        Valen räknas om från aktuella priser. Slutligt pris
                        bekräftas i personlig offert.
                      </p>
                    </div>
                    <LinkButton
                      to={getServicesUrlForEstimate(activeEstimateSelection)}
                      variant="outline"
                      size="md"
                      subVariant="rounded"
                      className="font-semibold"
                    >
                      Ändra prisval
                    </LinkButton>
                  </div>

                  <ul className="mt-5 space-y-2 border-t border-black/8 pt-4 text-sm leading-6 text-textPrimary/72">
                    {activeEstimate.lines.map((line) => (
                      <li
                        key={line.label}
                        className="flex justify-between gap-4"
                      >
                        <span>{line.label}</span>
                        <span className="whitespace-nowrap font-semibold">
                          {formatPrice(line.amount)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {activeEstimate.quoteReasons.length > 0 && (
                    <div className="mt-4 rounded-xl border border-amber-300/60 bg-amber-50 px-4 py-3 text-sm leading-6 text-textPrimary/72">
                      <p className="font-semibold">Behöver bekräftas i offert</p>
                      {activeEstimate.quoteReasons.map((reason) => (
                        <p key={reason}>• {reason}</p>
                      ))}
                    </div>
                  )}

                  <input
                    type="hidden"
                    name="price_estimate"
                    value={estimateSubmission}
                  />
                </div>
              )}

              <fieldset className="sm:col-span-2">
                <legend className={labelClasses}>
                  Vilken tjänst är du intresserad av? *
                </legend>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {CONTACT_SERVICE_OPTIONS.map((service) => (
                    <label
                      key={service.id}
                      htmlFor={service.id}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/6 bg-[#f8f8f5] px-4 py-3 text-sm font-medium text-textPrimary/78 transition hover:border-textPrimary/25"
                    >
                      <input
                        type="radio"
                        id={service.id}
                        name="service_option"
                        value={service.label}
                        checked={selectedServiceId === service.id}
                        onChange={() => setSelectedServiceId(service.id)}
                        required
                        className={radioInputClasses}
                        disabled={isSubmitting}
                      />
                      {service.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {selectedServiceId && (
                <>
                  <div
                    className={
                      selectedServiceOption?.asksForLocation
                        ? undefined
                        : 'sm:col-span-2'
                    }
                  >
                    <label htmlFor="preferred_date" className={labelClasses}>
                      Önskat datum eller tidsperiod
                    </label>
                    <input
                      id="preferred_date"
                      name="preferred_date"
                      type="text"
                      placeholder="Exempel: 14 september eller vecka 42"
                      className={inputClasses}
                      disabled={isSubmitting}
                    />
                  </div>

                  {selectedServiceOption?.asksForLocation && (
                    <div>
                      <label htmlFor="location" className={labelClasses}>
                        Plats eller ort
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Exempel: Kungälv eller hos företaget"
                        className={inputClasses}
                        disabled={isSubmitting}
                      />
                    </div>
                  )}
                </>
              )}

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClasses}>
                  Berätta om din förfrågan *
                </label>
                <p
                  id="message-guidance"
                  className="mb-3 text-sm leading-6 text-textPrimary/62"
                >
                  {selectedServiceOption?.messagePlaceholder ??
                    'Välj en tjänst ovan så visar formuläret vilket underlag som hjälper inför bokning eller offert.'}
                </p>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-describedby="message-guidance"
                  placeholder="Skriv ditt meddelande här..."
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
