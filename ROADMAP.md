# Roadmap

Kort strategi för att göra hemsidan bättre på det som faktiskt spelar roll: fler relevanta förfrågningar, starkare förtroende, bättre lokal synlighet och enklare underhåll.

## Princip

Prioritera förbättringar som gör sidan tydligare, mer förtroendeingivande eller lättare att hitta för rätt kunder. Nya sidor ska bara skapas när de fyller en tydlig lucka, har lokalt eller kundnära innehåll och kan kopplas naturligt till bokningsflödet.

## Fokusområden

### 1. Konvertering och förtroende

- Förtydliga vägen från startsida, tjänstsidor, guider och case till kontakt.
- Se över CTA:er så de känns naturliga, återkommer på rätt platser och leder till nästa rimliga steg.
- Visa process, leverans, bildurval och förväntningar så kunden förstår vad som händer före, under och efter fotograferingen.
- Placera recensioner/testimonials där de stärker beslutet att höra av sig, särskilt på tjänstsidor och nära kontaktflödet.
- Förbättra kontaktcopy och formulärflöde om det finns friktion eller otydlighet.

### 2. Lokal synlighet

- Prioritera Google Business Profile, recensioner och lokal konsekvens före att skapa många nya sidor.
- Använd Search Console för att hitta befintliga sidor med impressions men låg CTR, svag position eller otydlig sökintention.
- Förbättra befintliga lokala sidor och case innan nya landningssidor byggs.
- Skapa nya lokala sidor bara när det finns en tydlig lucka, till exempel Göteborg-case, porträtt/företagscase eller en lokal guide med verkligt underlag.
- Fortsätt hålla copy lokal, konkret och bilddriven i stället för generisk SEO-text.

### 3. Bild- och innehållskvalitet

- Använd egna bilder mer systematiskt med bra filnamn, alt-text och lokal kontext.
- Uppdatera befintliga guider och case med tydligare interna länkar, bättre bildurval och starkare koppling till relevant tjänst.
- Lägg till nya case först när det finns egna bilder, tydlig plats, tydligt upplägg och tillräckligt unikt innehåll.
- Utvärdera bröllopsplaneraren innan fler verktyg byggs. Förbättra den bara om den hjälper kunden eller driver kontakt.
- Använd AI för research, struktur och korrektur, men låt publicerad copy bygga på egen erfarenhet, lokalkännedom och riktiga uppdrag.

### 4. Engelska språkversioner

Mål: nå engelsktalande kunder utan att försvaga den svenska lokala SEO:n.

- Bygg engelska sidor som ett kontrollerat `/en/`-lager med egna URL:er.
- Börja med de publika sidor som kan driva förfrågningar: startsida, tjänster, bröllop, porträtt, kontakt och FAQ.
- Lämna admin, kundgallerier och `/work` utanför v1 om det inte finns ett tydligt behov.
- Skriv engelsk copy för målgruppen, inte ord-för-ord-översättningar. Prioritera naturliga söktermer som `wedding photographer in Gothenburg`, `portrait photographer in Gothenburg`, `photographer in Kungälv` och `Swedish west coast`.
- Lägg copy i typade språkfiler per sida, till exempel `src/content/sv/home.ts` och `src/content/en/home.ts`, i stället för en stor JSON-fil.
- Ge varje språkversion egna SEO-fält: title, description, canonical URL, Open Graph-copy och structured data där det är relevant.
- Lägg till `hreflang` mellan svenska och engelska motsvarigheter, inklusive själv-refererande länkar och gärna `x-default`.
- Lägg till en diskret språkväxlare i header/footer som behåller motsvarande sida när den finns, till exempel `/weddings/` till `/en/weddings/`.
- Uppdatera sitemap/prerender så engelska URL:er byggs, indexeras och kan kontrolleras i Search Console.
- Verifiera att engelska sidor inte får blandad svensk/engelsk copy i synliga rubriker, nav, metadata eller delningspreview.

Föreslagen etappindelning:

1. Teknisk grund: locale-typning, route-hjälpare, språkväxlare, SEO/hreflang-stöd och sitemap/prerender-stöd.
2. v1-innehåll: `/en/`, `/en/services/`, `/en/weddings/`, `/en/portraits/`, `/en/contact/` och `/en/faq/`.
3. Lokal SEO-förstärkning: engelska case- och landningssidor för Göteborg, Kungälv, Stenungsund och västkusten om de har tillräckligt unikt innehåll.
4. Uppföljning: kontrollera Search Console, indexering, impressions och vilka engelska söktermer som faktiskt ger synlighet.

### 5. Teknisk SEO och drift

- Behåll tydliga metadata, canonical-URL:er, Open Graph-data, breadcrumbs och strukturerad data på publika sidor.
- När en ny indexerbar route läggs till ska den finnas i route-listorna och i prerender/sitemap-flödet.
- Verifiera att `dist/sitemap.xml` bara innehåller avsedda publika routes efter `npm run build`.
- Håll `/work`, `/admin`, `/galleri/*`, `/app-shell` och 404 utanför indexering.
- Använd PDF eller nya tekniska exportflöden bara när det finns ett konkret kundbehov.

## Nästa steg

1. Gå igenom befintliga tjänstsidor, guider och case med fokus på CTA, internlänkning och förtroendesign.
2. Kontrollera Search Console för sidor med impressions men låg CTR eller svag position.
3. Prioritera nästa innehållsinsats utifrån faktisk lucka: Göteborg-case, porträtt/företagscase, lokal guide eller ingen ny sida alls.
4. Sätt en enkel rutin för recensioner efter avslutat uppdrag.
5. Besluta om engelska språkversioner ska byggas som nästa större SEO-spår och börja i så fall med teknisk grund plus startsida.
