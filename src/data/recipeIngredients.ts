// Fil: src/data/recipeIngredients.ts
// Justera sökväg och mappstruktur enligt ditt projekt

export interface Ingredient {
  name: string
  allergens: string[]
  // Vill du ha flera alternativ? Byt ut mot: alternatives?: Ingredient[]
  alternative?: Ingredient
}

/**
 * Stor lista av ingredienser, med allergener och ev. ersättningsprodukter.
 * Kategorier: protein, dairy, vegetables, fruits, spices, grains, other
 * Utökad med många nya val (asiatiska, mexikanska, medelhav) i passande kategorier.
 */
export const recipeIngredients = {
  //--- PROTEIN ---//
  protein: [
    { name: 'Kyckling', allergens: [] },
    { name: 'Nötfärs', allergens: [] }, // Man tål nötfärs även om man är nötallergiker
    { name: 'Fläskfilé', allergens: [] },
    { name: 'Korv', allergens: [] }, // ev. laktos/gluten beroende på sort
    { name: 'Bacon', allergens: [] },
    {
      name: 'Lax',
      allergens: ['Fisk'],
      alternative: { name: 'Tofu', allergens: [] },
    },
    {
      name: 'Räkor',
      allergens: ['Skaldjur'],
      alternative: { name: 'Bönor', allergens: [] },
    },
    {
      name: 'Tonfisk',
      allergens: ['Fisk'],
      alternative: {
        name: 'Quorn',
        allergens: [], // justera om din Quorn innehåller ägg
      },
    },
    {
      name: 'Halloumi',
      allergens: ['Laktos'],
      alternative: { name: 'Tofu', allergens: [] },
    },
    { name: 'Kikärtor', allergens: [] },
    { name: 'Röda linser', allergens: [] },

    // Nya (asiatiska/mexikanska) proteiner
    {
      name: 'Edamame',
      allergens: ['Soja'],
    },
    {
      name: 'Tofuskinn (Yuba)',
      allergens: ['Soja'],
    },
    {
      name: 'Svarta bönor', // mexikanskt
      allergens: [],
    },
    {
      name: 'Refried beans', // mexikanskt
      allergens: [],
    },
  ],

  //--- MEJERI ---//
  dairy: [
    {
      name: 'Mjölk',
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri mjölk', allergens: [] },
    },
    {
      name: 'Grädde',
      allergens: ['Laktos'],
      alternative: {
        name: 'Havregrädde',
        allergens: ['Gluten'], // kan vara kontaminerad
      },
    },
    {
      name: 'Smör',
      allergens: ['Laktos'],
      alternative: { name: 'Mjölkfritt margarin', allergens: [] },
    },
    {
      name: 'Ost',
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri ost', allergens: [] },
    },
    {
      name: 'Créme Fraiche',
      allergens: ['Laktos'],
      alternative: { name: 'Soyabaserad Fraiche', allergens: [] },
    },
    {
      name: 'Mjölkchoklad',
      allergens: ['Laktos'], // ev. spår av nötter
      alternative: {
        name: 'Mörk choklad (vegansk)',
        allergens: [],
      },
    },
    {
      name: 'Kvarg',
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri kvarg', allergens: [] },
    },

    // Nya (mexikanska/medelhav)
    {
      name: 'Queso Fresco', // mexikanskt
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri Queso', allergens: [] },
    },
    {
      name: 'Fetaost', // medelhav
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri feta', allergens: [] },
    },
    {
      name: 'Mozzarella', // medelhav
      allergens: ['Laktos'],
      alternative: { name: 'Vegansk mozzarella', allergens: [] },
    },
  ],

  //--- GRÖNSAKER ---//
  vegetables: [
    { name: 'Tomat', allergens: [] },
    { name: 'Gurka', allergens: [] },
    { name: 'Lök', allergens: [] },
    { name: 'Paprika', allergens: [] },
    { name: 'Sallad', allergens: [] },
    { name: 'Morot', allergens: [] },
    { name: 'Broccoli', allergens: [] },
    { name: 'Blomkål', allergens: [] },
    { name: 'Majs', allergens: [] },
    {
      name: 'Selleri',
      allergens: ['Selleri'],
      alternative: { name: 'Zucchini', allergens: [] },
    },
    { name: 'Rödbetor', allergens: [] },
    { name: 'Sparris', allergens: [] },
    { name: 'Champinjoner', allergens: [] },
    { name: 'Fänkål', allergens: [] },
    { name: 'Ruccola', allergens: [] },

    // Nya (mexikanska/medelhav)
    { name: 'Jalapeños', allergens: [] }, // mexikanskt
    { name: 'Oliver', allergens: [] }, // medelhav
    {
      name: 'Soltorkade tomater',
      allergens: [],
    },
  ],

  //--- FRUKTER ---//
  fruits: [
    { name: 'Äpple', allergens: [] },
    { name: 'Banan', allergens: [] },
    { name: 'Apelsin', allergens: [] },
    { name: 'Avokado', allergens: [] },
    { name: 'Citron', allergens: [] },
    { name: 'Päron', allergens: [] },
    { name: 'Vindruvor', allergens: [] },
    { name: 'Mango', allergens: [] },
    { name: 'Ananas', allergens: [] },
    { name: 'Kiwi', allergens: [] },
  ],

  //--- KRYDDOR ---//
  spices: [
    { name: 'Salt', allergens: [] },
    { name: 'Peppar', allergens: [] },
    { name: 'Oregano', allergens: [] },
    { name: 'Paprikapulver', allergens: [] },
    { name: 'Vitlökspulver', allergens: [] },
    { name: 'Curry', allergens: [] },
    { name: 'Kanel', allergens: [] },
    {
      name: 'Senapspulver',
      allergens: ['Senap'],
      alternative: { name: 'Pepparrotspulver', allergens: [] },
    },
    { name: 'Chiliflakes', allergens: [] },
    { name: 'Ingefära', allergens: [] },
    { name: 'Gurkmeja', allergens: [] },
    { name: 'Herbes de Provence', allergens: [] },
    { name: 'Rökt paprika', allergens: [] },

    // Nya
    {
      name: 'Tacokrydda', // mexikanskt
      allergens: [],
    },
    {
      name: 'Koriander', // mexikanskt men räknas ofta som ört
      allergens: [],
    },
    {
      name: 'Basilika', // medelhav
      allergens: [],
    },
  ],

  //--- GRYN & BRÖD ---//
  grains: [
    {
      name: 'Pasta',
      allergens: ['Gluten'],
      alternative: { name: 'Glutenfri pasta', allergens: [] },
    },
    { name: 'Ris', allergens: [] },
    {
      name: 'Bröd',
      allergens: ['Gluten'],
      alternative: { name: 'Glutenfritt bröd', allergens: [] },
    },
    {
      name: 'Idéalmjöl',
      allergens: ['Gluten'],
      alternative: { name: 'Glutenfritt mjöl', allergens: [] },
    },
    {
      name: 'Couscous',
      allergens: ['Gluten'],
      alternative: {
        name: 'Bulgur (kan också innehålla gluten)',
        allergens: ['Gluten'],
      },
    },
    {
      name: 'Havregryn',
      allergens: ['Gluten'], // om ej garanterat GF
      alternative: { name: 'Ren havre (GF-märkt)', allergens: [] },
    },
    { name: 'Quinoa', allergens: [] },
    {
      name: 'Matvete',
      allergens: ['Gluten'],
      alternative: { name: 'Hirs', allergens: [] },
    },
    { name: 'Polenta', allergens: [] },

    // Nya
    {
      name: 'Ramen (vete)',
      allergens: ['Gluten'],
      alternative: { name: 'Risnudlar', allergens: [] },
    },
    {
      name: 'Vetetortilla',
      allergens: ['Gluten'],
      alternative: { name: 'Majstortilla', allergens: [] },
    },
  ],

  //--- ÖVRIGT ---//
  other: [
    { name: 'Olivolja', allergens: [] },
    {
      name: 'Sojasås',
      allergens: ['Gluten'], // om ej GF
      alternative: { name: 'Tamari', allergens: [] },
    },
    { name: 'Kokosmjölk', allergens: [] },
    { name: 'Potatis', allergens: [] },
    {
      name: 'Jordnötter',
      allergens: ['Nötter'],
      alternative: { name: 'Solrosfrön', allergens: [] },
    },
    {
      name: 'Mandel',
      allergens: ['Nötter'],
      alternative: { name: 'Kokosflingor', allergens: [] },
    },
    {
      name: 'Ägg',
      allergens: ['Ägg'],
      alternative: { name: 'No-egg replacer', allergens: [] },
    },
    { name: 'Ketchup', allergens: [] },
    {
      name: 'Majonnäs',
      allergens: ['Ägg'],
      alternative: { name: 'Vegansk majonnäs', allergens: [] },
    },

    // Asiatiska
    { name: 'Sesamolja', allergens: [] },
    {
      name: 'Fisksås',
      allergens: ['Fisk'],
      alternative: {
        name: 'Vegansk fisksås (baserad på alger)',
        allergens: [],
      },
    },
    { name: 'Mirin', allergens: [] },
    {
      name: 'Miso',
      allergens: ['Soja'], // ev. gluten (kornmiso)
      alternative: {
        name: 'Miso (glutenfri)',
        allergens: ['Soja'],
      },
    },
    { name: 'Sriracha', allergens: [] },
    {
      name: 'Kimchi',
      allergens: ['Fisk'], // vanlig kimchi har fisksås
      alternative: { name: 'Vegansk kimchi', allergens: [] },
    },
    {
      name: 'Chipotlepasta', // mexikanskt
      allergens: [],
    },
    { name: 'Salsa', allergens: [] }, // mexikanskt
    { name: 'Tacosås', allergens: [] }, // mexikanskt
    { name: 'Guacamole', allergens: [] }, // mexikanskt
    {
      name: 'Tapenade', // medelhav
      allergens: [],
    },
    {
      name: 'Ajvar', // medelhav
      allergens: [],
    },
    {
      name: 'Pesto', // medelhav
      allergens: ['Nötter'], // pinjenötter
      alternative: {
        name: 'Pesto utan nötter',
        allergens: [],
      },
    },
  ],
}
