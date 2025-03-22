// Fil: src/data/recipeIngredients.ts

export interface Ingredient {
  name: string
  allergens: string[]
  // Vill du ha flera alternativ? Använd alternativ?: Ingredient[]
  alternative?: Ingredient
}

/**
 * Stor lista av ingredienser, med allergener och eventuella ersättningsprodukter.
 * Kategorier: protein, mejeri, grönsaker, frukter, kryddor, gryn, övrigt
 * Utökad med nya val (asiatiska, mexikanska, medelhav) i passande kategorier.
 */
export const recipeIngredients = {
  //--- PROTEIN ---//
  protein: [
    { name: 'Kyckling', allergens: [] },
    { name: 'Nötfärs', allergens: [] },
    { name: 'Fläskfilé', allergens: [] },
    { name: 'Korv', allergens: [] },
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
      alternative: { name: 'Quorn', allergens: [] },
    },
    {
      name: 'Halloumi',
      allergens: ['Laktos'],
      alternative: { name: 'Tofu', allergens: [] },
    },
    { name: 'Kikärtor', allergens: [] },
    { name: 'Röda linser', allergens: [] },

    // Nya (asiatiska/mexikanska) proteiner
    { name: 'Edamame', allergens: ['Soja'] },
    { name: 'Tofuskinn (Yuba)', allergens: ['Soja'] },
    { name: 'Svarta bönor', allergens: [] },
    { name: 'Refried beans', allergens: [] },
  ],

  //--- MEJERI ---//
  mejeri: [
    {
      name: 'Mjölk',
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri mjölk', allergens: [] },
    },
    {
      name: 'Grädde',
      allergens: ['Laktos'],
      alternative: { name: 'Havregrädde', allergens: ['Gluten'] },
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
      name: 'Kvarg',
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri kvarg', allergens: [] },
    },

    // Nya (mexikanska/medelhav)
    {
      name: 'Queso Fresco',
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri Queso', allergens: [] },
    },
    {
      name: 'Fetaost',
      allergens: ['Laktos'],
      alternative: { name: 'Laktosfri feta', allergens: [] },
    },
    {
      name: 'Mozzarella',
      allergens: ['Laktos'],
      alternative: { name: 'Vegansk mozzarella', allergens: [] },
    },
  ],

  //--- GRÖNSAKER ---//
  grönsaker: [
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
    { name: 'Jalapeños', allergens: [] },
    { name: 'Oliver', allergens: [] },
    { name: 'Soltorkade tomater', allergens: [] },
  ],

  //--- FRUKTER ---//
  frukter: [
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
  kryddor: [
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
    { name: 'Tacokrydda', allergens: [] },
    { name: 'Koriander', allergens: [] },
    { name: 'Basilika', allergens: [] },
  ],

  //--- GRYN ---//
  gryn: [
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
      allergens: ['Gluten'],
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
  övrigt: [
    { name: 'Olivolja', allergens: [] },
    {
      name: 'Sojasås',
      allergens: ['Gluten'],
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
      allergens: ['Soja'],
      alternative: { name: 'Miso (glutenfri)', allergens: ['Soja'] },
    },
    { name: 'Sriracha', allergens: [] },
    {
      name: 'Kimchi',
      allergens: ['Fisk'],
      alternative: { name: 'Vegansk kimchi', allergens: [] },
    },
    { name: 'Chipotlepasta', allergens: [] },
    { name: 'Salsa', allergens: [] },
    { name: 'Tacosås', allergens: [] },
    { name: 'Guacamole', allergens: [] },
    { name: 'Tapenade', allergens: [] },
    { name: 'Ajvar', allergens: [] },
    {
      name: 'Pesto',
      allergens: ['Nötter'],
      alternative: { name: 'Pesto utan nötter', allergens: [] },
    },
  ],
}
