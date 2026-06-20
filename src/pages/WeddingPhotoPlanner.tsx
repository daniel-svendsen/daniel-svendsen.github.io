import React, { useMemo, useState } from 'react'

import { Button, LinkButton } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

interface PlannerSection {
  title: string
  description: string
  items: string[]
}

const plannerSections: PlannerSection[] = [
  {
    title: 'Innan vigseln',
    description: 'Detaljer och lugna bilder innan dagen drar igång på riktigt.',
    items: [
      'Klädsel, skor och accessoarer',
      'Ringar',
      'Bukett och blommor',
      'Inbjudan eller trycksaker',
      'Förberedelser med familj eller vänner',
      'First look om ni vill ha det',
    ],
  },
  {
    title: 'Vigsel',
    description: 'De viktiga ögonblicken under själva ceremonin.',
    items: [
      'Vigselplatsen innan gästerna kommer',
      'Entré',
      'Ringväxling',
      'Kyss eller avslut',
      'Utgång',
      'Gratulationer efter vigseln',
    ],
  },
  {
    title: 'Familj och gruppbilder',
    description: 'Bilder som ofta går snabbare om grupperna är planerade.',
    items: [
      'Närmaste familj',
      'Föräldrar',
      'Syskon',
      'Barn',
      'Vittnen eller brudfölje',
      'Vänner eller större gruppbild',
    ],
  },
  {
    title: 'Bilder på paret',
    description: 'En stund där ni får fokusera på varandra.',
    items: [
      'Porträtt på paret',
      'Promenadbilder',
      'Bilder med barnen',
      'Golden hour om tiden passar',
      'Närbilder på händer, ringar och bukett',
      'En plats som betyder något för er',
    ],
  },
  {
    title: 'Mingel, middag och fest',
    description: 'Stämningen runt gästerna och detaljerna ni lagt tid på.',
    items: [
      'Gäster som minglar',
      'Dukning',
      'Tal',
      'Tårta',
      'Dans',
      'Kvällsbilder eller festkänsla',
    ],
  },
]

const noteFields = [
  {
    id: 'importantImages',
    label: 'Viktigaste bilderna för oss',
    placeholder: 'Till exempel familjebilder, promenadbilder eller bilder med barnen.',
  },
  {
    id: 'importantPeople',
    label: 'Personer som är viktiga att få med',
    placeholder: 'Skriv namn eller grupper som inte får missas.',
  },
  {
    id: 'places',
    label: 'Platser vi vill använda',
    placeholder: 'Till exempel vigselplats, promenadstråk eller egen favoritplats.',
  },
  {
    id: 'schedule',
    label: 'Tider som är bra att känna till',
    placeholder: 'Vigsel, middag, porträtt, golden hour eller andra hållpunkter.',
  },
  {
    id: 'other',
    label: 'Övriga önskemål',
    placeholder: 'Allt annat som känns viktigt inför fotograferingen.',
  },
]

const plannerFaqs = [
  {
    question: 'Vad ska en checklista för bröllopsfotografering innehålla?',
    answer:
      'Börja med de bilder som är viktigast för er: familj, parbilder, detaljer, vigsel, mingel och personer som inte får missas. Resten kan anpassas efter tid och plats.',
  },
  {
    question: 'Behöver alla par planera en exakt bildlista?',
    answer:
      'Nej, listan behöver inte vara stel. Den är mest ett sätt att fånga era prioriteringar så att fotograferingen kan kännas lugnare på dagen.',
  },
  {
    question: 'Kan checklistan användas för kort vigsel, halvdag och heldag?',
    answer:
      'Ja. Vid en kort vigsel kan ni markera det allra viktigaste, medan halvdag eller heldag ger mer plats för förberedelser, mingel, middag och kvällsbilder.',
  },
  {
    question: 'Hur lång tid tar bröllopsfotografering?',
    answer:
      'Det beror på hur mycket av dagen ni vill dokumentera. En kort vigsel kan ofta fotograferas på några timmar, medan halvdag eller heldag ger mer tid för förberedelser, porträtt, mingel, middag och fest.',
  },
  {
    question: 'När under dagen ska man ta bröllopsbilder?',
    answer:
      'Familjebilder tas ofta direkt efter vigseln när alla är samlade. Parbilder kan tas före vigseln, efter gratulationerna eller under en kort promenad senare på dagen om ljuset och schemat passar.',
  },
]

const checklistTips = [
  {
    title: 'Börja med det viktigaste',
    description:
      'Markera först de bilder ni absolut inte vill missa: familj, parbilder, vigsel, detaljer eller särskilda personer.',
  },
  {
    title: 'Planera tid för porträtt',
    description:
      'Avsätt gärna en lugn stund för parbilder. Det kan vara en first look, en promenad efter vigseln eller några minuter i mjukt kvällsljus.',
  },
  {
    title: 'Håll listan lagom tydlig',
    description:
      'En bra bildlista hjälper fotografen att förstå era prioriteringar utan att dagen behöver kännas styrd av ett schema.',
  },
]

type Notes = Record<string, string>

const buildInitialChecked = () =>
  plannerSections.reduce<Record<string, boolean>>((acc, section) => {
    section.items.forEach((item) => {
      acc[item] = false
    })
    return acc
  }, {})

const buildInitialNotes = () =>
  noteFields.reduce<Notes>((acc, field) => {
    acc[field.id] = ''
    return acc
  }, {})

export default function WeddingPhotoPlanner() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)
  const [checkedItems, setCheckedItems] = useState(buildInitialChecked)
  const [notes, setNotes] = useState(buildInitialNotes)

  const selectedCount = useMemo(
    () => Object.values(checkedItems).filter(Boolean).length,
    [checkedItems],
  )

  const plannerText = useMemo(() => {
    const lines = [
      'Bröllopsplanerare för fotografering',
      '',
      'Valda bilder och moment:',
    ]

    plannerSections.forEach((section) => {
      const selected = section.items.filter((item) => checkedItems[item])

      if (selected.length === 0) {
        return
      }

      lines.push('', section.title)
      selected.forEach((item) => lines.push(`- ${item}`))
    })

    lines.push('', 'Egna anteckningar:')
    noteFields.forEach((field) => {
      const value = notes[field.id]?.trim()
      if (value) {
        lines.push('', field.label, value)
      }
    })

    return lines.join('\n')
  }, [checkedItems, notes])

  const plannerJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Checklista för bröllopsfotografering',
    applicationCategory: 'LifestyleApplication',
    description:
      'Printvänlig checklista för bröllopsfotografering, bildlista och planering av familjebilder, parbilder, vigsel, mingel och detaljer.',
    url: 'https://www.svendsenphotography.com/guider/brollopsplanerare/',
  }

  const hasSelectedItems = selectedCount > 0
  const noteFieldsWithContent = noteFields.filter(
    (field) => notes[field.id]?.trim(),
  )

  const toggleItem = (item: string) => {
    setCheckedItems((current) => ({
      ...current,
      [item]: !current[item],
    }))
  }

  const updateNote = (id: string, value: string) => {
    setNotes((current) => ({
      ...current,
      [id]: value,
    }))
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const blob = new Blob([plannerText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'brollopsplanerare-fotografering.txt'
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleEmail = () => {
    const subject = encodeURIComponent('Bröllopsplanerare för fotografering')
    const body = encodeURIComponent(plannerText)
    window.location.href = `mailto:daniel@svendsenphotography.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <SEO
        title="Checklista för bröllopsfotografering | Skriv ut & planera bilderna"
        description="Kryssa i viktiga bröllopsbilder, skriv egna anteckningar och skriv ut eller ladda ner en enkel checklista för bröllopsfotografering."
        url="https://www.svendsenphotography.com/guider/brollopsplanerare/"
        image={absoluteLogoUrl}
        jsonLd={plannerJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Guider',
            url: 'https://www.svendsenphotography.com/guider/',
          },
          {
            name: 'Checklista för bröllopsfotografering',
            url: 'https://www.svendsenphotography.com/guider/brollopsplanerare/',
          },
        ]}
      />

      <main className="planner-page max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="planner-screen mx-auto mb-8 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:max-w-6xl lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Checklista
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Checklista för bröllopsfotografering
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Kryssa i de bilder och moment som känns viktiga inför
              bröllopsdagen, lägg till egna anteckningar och skriv ut, ladda ner
              eller maila listan inför fotograferingen.
            </p>
            <div className="mt-6 max-w-2xl rounded-2xl border border-black/6 bg-white px-5 py-4 shadow-[0_14px_32px_-28px_rgba(31,41,55,0.32)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-textSecondary">
                Snabbt svar
              </p>
              <p className="mt-2 text-base leading-relaxed text-textPrimary">
                Börja med de bilder ni absolut inte vill missa: familj, parbilder,
                vigsel, detaljer och viktiga personer. Resten kan anpassas efter
                tid och plats.
              </p>
            </div>
          </div>
        </header>

        <section className="planner-screen mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="space-y-6">
            {plannerSections.map((section) => (
              <InfoCard key={section.title} className="bg-white p-6 md:p-8">
                <div className="mb-5">
                  <h2 className="mb-2 text-2xl font-semibold text-textPrimary">
                    {section.title}
                  </h2>
                  <p className="leading-relaxed text-textSecondary">
                    {section.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/6 bg-[#f7f5f2] px-4 py-3 text-sm font-medium leading-relaxed text-textPrimary"
                    >
                      <input
                        type="checkbox"
                        checked={checkedItems[item] ?? false}
                        onChange={() => toggleItem(item)}
                        className="mt-1 h-4 w-4 rounded border-textSecondary accent-textPrimary"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </InfoCard>
            ))}

            <InfoCard className="bg-white p-6 md:p-8">
              <h2 className="mb-5 text-2xl font-semibold text-textPrimary">
                Egna anteckningar
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {noteFields.map((field) => (
                  <label key={field.id} className="block">
                    <span className="mb-2 block text-sm font-semibold text-textPrimary">
                      {field.label}
                    </span>
                    <textarea
                      value={notes[field.id]}
                      onChange={(event) => updateNote(field.id, event.target.value)}
                      placeholder={field.placeholder}
                      rows={3}
                      className="w-full rounded-2xl border border-black/10 bg-[#f7f5f2] px-4 py-3 text-sm leading-relaxed text-textPrimary outline-none transition focus:border-textPrimary"
                    />
                  </label>
                ))}
              </div>
            </InfoCard>
          </div>

          <aside className="h-fit rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] lg:sticky lg:top-24">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Sammanfattning
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-textPrimary">
              {selectedCount} valda moment
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-textSecondary">
              Listan sparas inte på webbplatsen. Den finns bara i er webbläsare
              tills ni skriver ut, laddar ner eller öppnar den i ett mail.
            </p>

            <div className="grid grid-cols-1 gap-3">
              <Button
                type="button"
                size="lg"
                subVariant="rounded"
                onClick={handlePrint}
              >
                Skriv ut
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                subVariant="rounded"
                onClick={handleDownload}
              >
                Ladda ner lista
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                subVariant="rounded"
                onClick={handleEmail}
              >
                Maila listan
              </Button>
            </div>
          </aside>
        </section>

        <section className="planner-print hidden">
          <h1>Bröllopsplanerare för fotografering</h1>
          <p>
            Valda bilder och anteckningar inför bröllopsfotograferingen.
          </p>

          {hasSelectedItems ? (
            plannerSections.map((section) => {
              const selected = section.items.filter((item) => checkedItems[item])

              if (selected.length === 0) {
                return null
              }

              return (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  <ul>
                    {selected.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )
            })
          ) : (
            <p>Inga bildmoment är markerade ännu.</p>
          )}

          <section>
            <h2>Egna anteckningar</h2>
            {noteFieldsWithContent.length > 0 ? (
              noteFieldsWithContent.map((field) => (
                <div key={field.id}>
                  <h3>{field.label}</h3>
                  <p>{notes[field.id]}</p>
                </div>
              ))
            ) : (
              <p>Inga egna anteckningar är ifyllda ännu.</p>
            )}
          </section>
        </section>

        <section className="planner-screen mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.14)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Så använder ni checklistan inför bröllopsdagen
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              En checklista för bröllopsfotografering behöver inte vara en exakt
              bild för bild-plan. Den fungerar bäst som ett enkelt sätt att
              samla era viktigaste önskemål, tider och personer innan dagen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {checklistTips.map((tip) => (
              <InfoCard
                key={tip.title}
                title={tip.title}
                description={tip.description}
                className="bg-custom-beige p-6"
              />
            ))}
          </div>
        </section>

        <section className="planner-screen mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Bra att känna till
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Om ni mailar listan öppnas den i ert eget mailprogram först. Ni kan
              läsa igenom, ändra och skicka när allt känns rätt.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Nedladdningen skapar en vanlig textfil, vilket gör det enkelt att
              spara listan eller klistra in den i ett annat dokument.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                to="/guider/brollopstidslinje/"
                variant="outline"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Se exempel på tidslinje
              </LinkButton>
              <LinkButton
                to="/guider/brollopsbilder-promenad/"
                variant="outline"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Guide om promenadbilder
              </LinkButton>
            </div>
          </div>
        </section>

        <section className="planner-screen mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.14)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Vanliga frågor om bildlistan
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Checklistan är tänkt som ett lugnt stöd inför bröllopsdagen, inte
              som ett schema som måste följas punkt för punkt.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {plannerFaqs.map((faq) => (
              <InfoCard
                key={faq.question}
                title={faq.question}
                description={faq.answer}
                className="bg-custom-beige p-6"
              />
            ))}
          </div>
        </section>

        <CTASection
          className="planner-screen rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Vill ni prata igenom listan?"
          description="När ni har valt vad som känns viktigast kan jag hjälpa er att forma ett upplägg som passar platsen, tempot och dagen."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/guider/', label: 'Till guider', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
