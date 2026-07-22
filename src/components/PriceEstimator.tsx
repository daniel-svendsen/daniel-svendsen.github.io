import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import { LinkButton } from '@/components/Button'
import { PRICING } from '@/config/pricing'
import {
  calculatePriceEstimate,
  defaultPriceEstimateSelection,
  ESTIMATE_SERVICE_TITLES,
  formatPrice,
  getContactUrlForEstimate,
  parsePriceEstimateSelection,
  type EstimateService,
  type PriceEstimateSelection,
} from '@/utils/priceEstimate'

const serviceOptions: Array<{ value: EstimateService; label: string }> = [
  { value: 'portrait', label: 'Porträtt' },
  { value: 'family', label: 'Familj' },
  { value: 'wedding', label: 'Bröllop' },
  { value: 'business-portraits', label: 'Företagsporträtt' },
  { value: 'business-activity', label: 'Verksamhetsfoto' },
  { value: 'product', label: 'Produktfoto' },
  { value: 'vehicle', label: 'Bilfoto' },
]

const fieldClasses =
  'block w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-textPrimary outline-none transition focus:border-textPrimary/45 focus:ring-4 focus:ring-textPrimary/8'
const labelClasses = 'mb-2 block text-sm font-semibold text-textPrimary'
const checkboxClasses =
  'h-4 w-4 shrink-0 rounded border-black/20 text-textPrimary focus:ring-textPrimary focus:ring-offset-0'

const toNumber = (value: string, fallback = 0) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

export function PriceEstimator() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const queryString = searchParams.toString()
  const [selection, setSelection] = useState<PriceEstimateSelection>(
    defaultPriceEstimateSelection,
  )

  useEffect(() => {
    const parsed = parsePriceEstimateSelection(
      new URLSearchParams(queryString),
    )
    if (parsed) setSelection(parsed)
  }, [queryString])

  useEffect(() => {
    if (location.hash === '#prisindikator') {
      document.getElementById('prisindikator')?.scrollIntoView({
        block: 'start',
      })
    }
  }, [location.hash])

  const estimate = useMemo(
    () => calculatePriceEstimate(selection),
    [selection],
  )

  const update = <Key extends keyof PriceEstimateSelection>(
    key: Key,
    value: PriceEstimateSelection[Key],
  ) => setSelection((current) => ({ ...current, [key]: value }))

  const extraSessionFields =
    selection.service === 'portrait' || selection.service === 'family'

  return (
    <div id="prisindikator" className="scroll-mt-28">
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-textSecondary">
          Prisindikator
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          Räkna på ett ungefärligt pris
        </h2>
        <p className="mt-4 text-base leading-relaxed text-textSecondary md:text-lg">
          Välj ett upplägg och skicka sedan valen vidare till kontaktformuläret.
          Resultatet är en prisindikation, inte en bindande offert.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-5 md:p-7">
          <div>
            <label htmlFor="estimate-service" className={labelClasses}>
              Vad vill du fotografera?
            </label>
            <select
              id="estimate-service"
              value={selection.service}
              onChange={(event) =>
                update('service', event.target.value as EstimateService)
              }
              className={fieldClasses}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {extraSessionFields && (
              <>
                <div>
                  <label htmlFor="extra-session" className={labelClasses}>
                    Extra fotografering
                  </label>
                  <select
                    id="extra-session"
                    value={selection.extraSessionBlocks}
                    onChange={(event) =>
                      update(
                        'extraSessionBlocks',
                        toNumber(event.target.value),
                      )
                    }
                    className={fieldClasses}
                  >
                    <option value={0}>Ingen</option>
                    <option value={1}>30 minuter</option>
                    <option value={2}>60 minuter</option>
                    <option value={3}>90 minuter</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="extra-images" className={labelClasses}>
                    Extra färdiga bilder
                  </label>
                  <input
                    id="extra-images"
                    type="number"
                    min={0}
                    max={100}
                    value={selection.extraImages}
                    onChange={(event) =>
                      update('extraImages', toNumber(event.target.value))
                    }
                    className={fieldClasses}
                  />
                </div>
              </>
            )}

            {selection.service === 'family' && (
              <label className="flex items-start gap-3 rounded-2xl border border-black/6 bg-white px-4 py-3 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={selection.largeGroup}
                  onChange={(event) =>
                    update('largeGroup', event.target.checked)
                  }
                  className={checkboxClasses}
                />
                <span className="text-sm leading-6 text-textPrimary/78">
                  Fler än 8 personer (+750 kr)
                </span>
              </label>
            )}

            {selection.service === 'wedding' && (
              <>
                <div>
                  <label htmlFor="wedding-package" className={labelClasses}>
                    Bröllopspaket
                  </label>
                  <select
                    id="wedding-package"
                    value={selection.weddingPackage}
                    onChange={(event) =>
                      update(
                        'weddingPackage',
                        event.target.value as PriceEstimateSelection['weddingPackage'],
                      )
                    }
                    className={fieldClasses}
                  >
                    <option value="short">2 timmar · 9 500 kr</option>
                    <option value="half-day">5 timmar · 17 900 kr</option>
                    <option value="full-day">10 timmar · 28 900 kr</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="extra-wedding-hours"
                    className={labelClasses}
                  >
                    Extra timmar
                  </label>
                  <input
                    id="extra-wedding-hours"
                    type="number"
                    min={0}
                    max={12}
                    value={selection.extraWeddingHours}
                    onChange={(event) =>
                      update(
                        'extraWeddingHours',
                        toNumber(event.target.value),
                      )
                    }
                    className={fieldClasses}
                  />
                </div>
                <label className="flex items-start gap-3 rounded-2xl border border-black/6 bg-white px-4 py-3 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={selection.highlightFilm}
                    onChange={(event) =>
                      update('highlightFilm', event.target.checked)
                    }
                    className={checkboxClasses}
                  />
                  <span className="text-sm leading-6 text-textPrimary/78">
                    Highlightfilm som tillägg (+5 000 kr)
                  </span>
                </label>
              </>
            )}

            {selection.service === 'business-portraits' && (
              <>
                <div>
                  <label htmlFor="business-people" className={labelClasses}>
                    Antal personer
                  </label>
                  <input
                    id="business-people"
                    type="number"
                    min={1}
                    max={50}
                    value={selection.businessPeople}
                    onChange={(event) =>
                      update('businessPeople', toNumber(event.target.value, 1))
                    }
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="business-group-images"
                    className={labelClasses}
                  >
                    Extra gruppbilder
                  </label>
                  <input
                    id="business-group-images"
                    type="number"
                    min={0}
                    max={10}
                    value={selection.businessGroupImages}
                    onChange={(event) =>
                      update(
                        'businessGroupImages',
                        toNumber(event.target.value),
                      )
                    }
                    className={fieldClasses}
                  />
                </div>
              </>
            )}

            {selection.service === 'business-activity' && (
              <div className="sm:col-span-2">
                <label htmlFor="activity-hours" className={labelClasses}>
                  Fotograferingstid
                </label>
                <input
                  id="activity-hours"
                  type="number"
                  min={1}
                  max={24}
                  step={1}
                  value={selection.activityHours}
                  onChange={(event) =>
                    update('activityHours', toNumber(event.target.value, 2))
                  }
                  className={fieldClasses}
                />
                <p className="mt-2 text-sm leading-6 text-textPrimary/62">
                  Minsta debitering är två timmar, 4 400 kr.
                </p>
              </div>
            )}

            {selection.service === 'product' && (
              <>
                <div>
                  <label htmlFor="product-images" className={labelClasses}>
                    Antal färdiga bilder
                  </label>
                  <input
                    id="product-images"
                    type="number"
                    min={1}
                    max={500}
                    value={selection.productImages}
                    onChange={(event) =>
                      update('productImages', toNumber(event.target.value, 1))
                    }
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="product-setups" className={labelClasses}>
                    Extra uppställningar
                  </label>
                  <input
                    id="product-setups"
                    type="number"
                    min={0}
                    max={20}
                    value={selection.productSetups}
                    onChange={(event) =>
                      update('productSetups', toNumber(event.target.value))
                    }
                    className={fieldClasses}
                  />
                </div>
                <label className="flex items-start gap-3 rounded-2xl border border-black/6 bg-white px-4 py-3 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={selection.productNeedsQuote}
                    onChange={(event) =>
                      update('productNeedsQuote', event.target.checked)
                    }
                    className={checkboxClasses}
                  />
                  <span className="text-sm leading-6 text-textPrimary/78">
                    Fotografering på plats eller produkt större än 70 × 70 × 70
                    cm
                  </span>
                </label>
              </>
            )}

            {selection.service === 'vehicle' && (
              <>
                <div>
                  <label htmlFor="vehicle-count" className={labelClasses}>
                    Antal fordon
                  </label>
                  <input
                    id="vehicle-count"
                    type="number"
                    min={1}
                    max={20}
                    value={selection.vehicleCount}
                    onChange={(event) =>
                      update('vehicleCount', toNumber(event.target.value, 1))
                    }
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="vehicle-images" className={labelClasses}>
                    Antal färdiga bilder
                  </label>
                  <input
                    id="vehicle-images"
                    type="number"
                    min={1}
                    max={100}
                    value={selection.vehicleImages}
                    onChange={(event) =>
                      update('vehicleImages', toNumber(event.target.value, 1))
                    }
                    className={fieldClasses}
                  />
                </div>
              </>
            )}
          </div>

          <div className="mt-6 border-t border-black/8 pt-6">
            <div>
              <label htmlFor="round-trip-miles" className={labelClasses}>
                Resa utanför Kungälv, total tur och retur i mil
              </label>
              <input
                id="round-trip-miles"
                type="number"
                min={0}
                max={500}
                step={0.1}
                value={selection.roundTripMiles}
                onChange={(event) =>
                  update('roundTripMiles', toNumber(event.target.value))
                }
                className={fieldClasses}
              />
              <p className="mt-2 text-sm leading-6 text-textPrimary/62">
                20 kr/mil för hela sträckan från Kungälv och tillbaka.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              <label className="flex items-start gap-3 rounded-2xl border border-black/6 bg-white px-4 py-3">
                <input
                  type="checkbox"
                  checked={selection.overnight}
                  onChange={(event) => update('overnight', event.target.checked)}
                  className={checkboxClasses}
                />
                <span className="text-sm leading-6 text-textPrimary/78">
                  Uppdraget kan kräva övernattning
                </span>
              </label>
              <label className="flex items-start gap-3 rounded-2xl border border-black/6 bg-white px-4 py-3">
                <input
                  type="checkbox"
                  checked={selection.priorityDelivery}
                  onChange={(event) =>
                    update('priorityDelivery', event.target.checked)
                  }
                  className={checkboxClasses}
                />
                <span className="text-sm leading-6 text-textPrimary/78">
                  Önskemål om prioriterad leverans, om möjligt (+25 %, minst 750
                  kr)
                </span>
              </label>
            </div>
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-black/6 bg-white p-5 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:p-7 lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
            Din prisindikation
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-textPrimary">
            {ESTIMATE_SERVICE_TITLES[selection.service]}
          </h3>

          <dl className="mt-6 space-y-3">
            {estimate.lines.map((line) => (
              <div
                key={line.label}
                className="flex items-start justify-between gap-5 border-b border-black/6 pb-3 text-sm"
              >
                <dt className="leading-6 text-textPrimary/68">{line.label}</dt>
                <dd className="whitespace-nowrap font-semibold text-textPrimary">
                  {formatPrice(line.amount)}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-2xl bg-[#f8f8f5] p-5">
            <p className="text-sm text-textPrimary/62">Ungefärligt pris</p>
            <p className="mt-1 text-3xl font-semibold text-textPrimary">
              {formatPrice(estimate.total)}
            </p>
            <p className="mt-2 text-sm font-medium text-textPrimary/72">
              {PRICING.business.taxNote}
            </p>
          </div>

          {estimate.quoteReasons.length > 0 && (
            <div className="mt-5 rounded-2xl border border-amber-300/60 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-textPrimary">
                Behöver bekräftas i offert
              </p>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-textPrimary/72">
                {estimate.quoteReasons.map((reason) => (
                  <li key={reason}>• {reason}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-5 text-sm leading-6 text-textPrimary/62">
            Prisindikationen är inte bindande. Slutligt upplägg och pris
            bekräftas i personlig offert.
          </p>

          <LinkButton
            to={getContactUrlForEstimate(selection)}
            variant="default"
            size="lg"
            subVariant="rounded"
            className="mt-6 w-full px-5 text-center"
          >
            Skicka valen som offertförfrågan
          </LinkButton>
        </aside>
      </div>
    </div>
  )
}
