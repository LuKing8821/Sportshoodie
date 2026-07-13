export type BaseballHoodieProduct = {
  slug: string;
  name: string;
  category: string;
  collection: string;
  image: string;
  gallery: string[];
  summary: string;
  fabric: string[];
  colors: string[];
  style: string;
  useCases: string[];
  advantages: string[];
  customization: string[];
  seoKeywords: string[];
};

const basePath = "/products/baseball-hoodies";

export const baseballHoodieProducts: BaseballHoodieProduct[] = [
  {
    slug: "custom-baseball-team-full-zip-hoodie",
    name: "Custom Baseball Team Full-Zip Hoodie",
    category: "Full-Zip Team Hoodie",
    collection: "Baseball Teamwear",
    image: `${basePath}/red-black-baseball-team-zip-hoodie.jpg`,
    gallery: [`${basePath}/red-black-baseball-team-zip-hoodie.jpg`, `${basePath}/baseball-player-grey-training-hoodie.jpg`],
    summary:
      "A high-impact full-zip baseball hoodie for clubs, school teams, travel teams, and event crews that need front and back custom graphics.",
    fabric: ["280-340 gsm performance fleece", "Polyester-cotton blend option", "Brushed inner face", "Rib cuff and hem"],
    colors: ["Red / black / white", "Team color matching", "Contrast sleeve panels", "Custom stripe color"],
    style: "Full-zip hooded jacket with contrast shoulder panels, sleeve blocking, welt pockets, rib hem, and printable front and back zones.",
    useCases: ["Baseball team travel wear", "Dugout warm-up hoodie", "Tournament merchandise", "Sports club staff uniform"],
    advantages: ["Strong sponsor logo visibility", "Easy on and off over uniforms", "Durable zipper construction", "Suitable for repeat team orders"],
    customization: ["Team logo", "Player name and number", "Sponsor marks", "Sleeve stripe", "Woven label", "Retail packaging"],
    seoKeywords: ["custom baseball hoodie", "baseball team hoodie", "full zip team hoodie", "custom sports team hoodie"],
  },
  {
    slug: "navy-target-graphic-performance-zip-hoodie",
    name: "Navy Target Graphic Performance Zip Hoodie",
    category: "Graphic Full-Zip Hoodie",
    collection: "Performance Graphics",
    image: `${basePath}/navy-target-graphic-zip-hoodie.jpg`,
    gallery: [`${basePath}/navy-target-graphic-zip-hoodie.jpg`, `${basePath}/red-softball-batter-hoodie.jpg`],
    summary:
      "A bold all-over graphic hoodie for teams and fan programs that want a memorable pattern with large decoration areas.",
    fabric: ["260-320 gsm interlock or fleece", "Smooth outer face for sublimation", "Soft brushed backing option", "Quick-dry polyester option"],
    colors: ["Navy / white", "Royal / silver", "Black / white", "Custom target pattern colors"],
    style: "Full-zip hooded silhouette with large target artwork across front and back, contrast sleeves, drawcord hood, and side pockets.",
    useCases: ["Club merchandise", "Baseball fan apparel", "Training day outer layer", "Limited-edition team drop"],
    advantages: ["Large graphic storytelling area", "Good for sublimation print", "Recognizable from a distance", "Works for fan retail programs"],
    customization: ["All-over print", "Chest badge", "Back graphic", "Neck label", "Hangtag", "Size-sorted cartons"],
    seoKeywords: ["custom printed hoodie", "sublimation baseball hoodie", "graphic team hoodie", "sports hoodie manufacturer"],
  },
  {
    slug: "city-number-pullover-baseball-hoodie",
    name: "City Number Pullover Baseball Hoodie",
    category: "Pullover Team Hoodie",
    collection: "Baseball Teamwear",
    image: `${basePath}/black-cyan-city-number-pullover-hoodie.jpg`,
    gallery: [`${basePath}/black-cyan-city-number-pullover-hoodie.jpg`, `${basePath}/purple-street-baseball-hoodie-03.jpg`],
    summary:
      "A pullover baseball hoodie with city lettering, player number, contrast sleeves, and strong front/back team identity.",
    fabric: ["300-360 gsm cotton-touch fleece", "Cotton-poly blend", "Warm brushed inner", "Rib cuff and hem"],
    colors: ["Black / cyan / magenta", "Team primary and accent colors", "Contrast hood lining", "Custom drawcord color"],
    style: "Pullover hoodie with kangaroo pocket, contrast raglan sleeves, front city lettering, and large back number placement.",
    useCases: ["Team warm-up hoodie", "School baseball teamwear", "College club merchandise", "Player travel hoodie"],
    advantages: ["Classic teamwear look", "Comfortable pullover fit", "Strong player-number placement", "Good for embroidery or applique"],
    customization: ["City name", "Team logo", "Player number", "Applique lettering", "Embroidery", "Color-block panels"],
    seoKeywords: ["custom team hoodie", "baseball pullover hoodie", "personalized sports hoodie", "club hoodie manufacturer"],
  },
  {
    slug: "lightweight-baseball-training-pullover-hoodie",
    name: "Lightweight Baseball Training Pullover Hoodie",
    category: "Training Pullover Hoodie",
    collection: "Training & Practice",
    image: `${basePath}/silver-lightweight-training-pullover-hoodie.jpg`,
    gallery: [`${basePath}/silver-lightweight-training-pullover-hoodie.jpg`, `${basePath}/baseball-player-grey-training-hoodie.jpg`],
    summary:
      "A cleaner training hoodie for practice, travel, and active team programs that prefer a lighter performance look.",
    fabric: ["240-300 gsm performance knit", "Moisture-wicking polyester option", "Light brushed fleece option", "Stretch panel option"],
    colors: ["Silver / black / red", "White / navy", "Grey / team accent", "Custom contrast inserts"],
    style: "Pullover hooded training top with front pouch pocket, chest logo zone, sleeve inserts, and streamlined color blocking.",
    useCases: ["Baseball practice", "Gym warm-up", "Coach uniform", "Team travel and recovery"],
    advantages: ["Lightweight athletic profile", "Easy team branding", "Comfortable for repeated wear", "Balanced cost for bulk orders"],
    customization: ["Chest logo", "Sleeve stripe", "Back sponsor print", "Performance fabric upgrade", "Custom size chart", "Care label"],
    seoKeywords: ["custom training hoodie", "custom gym hoodie", "baseball practice hoodie", "performance hoodie manufacturer"],
  },
  {
    slug: "rider-full-zip-sports-hoodie",
    name: "Rider Full-Zip Sports Hoodie",
    category: "Full-Zip Sports Hoodie",
    collection: "Bold Team Graphics",
    image: `${basePath}/black-magenta-rider-full-zip-sports-hoodie.jpg`,
    gallery: [`${basePath}/black-magenta-rider-full-zip-sports-hoodie.jpg`, `${basePath}/purple-street-baseball-hoodie-01.jpg`],
    summary:
      "A bold full-zip sports hoodie for baseball teams, racing-style teams, and youth clubs that want strong vertical branding.",
    fabric: ["280-340 gsm fleece or interlock", "Smooth print-ready surface", "Soft inner fleece", "Rib cuff and hem"],
    colors: ["Black / magenta / blue", "Black / red / white", "Team tri-color program", "Custom sleeve color"],
    style: "Full-zip hoodie with asymmetric color panels, vertical logo placement, front pockets, and large back branding zone.",
    useCases: ["Travel team hoodie", "Sports club merchandise", "Fan apparel", "Event staff outerwear"],
    advantages: ["Modern graphic impact", "Strong front and back logo areas", "Good for youth team retail", "Flexible panel color planning"],
    customization: ["Vertical team mark", "Back logo", "Sponsor panel", "Custom zipper pull", "Woven badge", "Hangtag"],
    seoKeywords: ["custom sports hoodie", "full zip sports hoodie", "custom teamwear hoodie", "sports club hoodie"],
  },
  {
    slug: "blue-red-team-full-zip-baseball-hoodie",
    name: "Blue Red Team Full-Zip Baseball Hoodie",
    category: "Full-Zip Team Hoodie",
    collection: "Classic Team Colors",
    image: `${basePath}/blue-red-team-full-zip-hoodie.jpg`,
    gallery: [`${basePath}/blue-red-team-full-zip-hoodie.jpg`, `${basePath}/red-softball-batter-hoodie.jpg`],
    summary:
      "A classic red and blue full-zip hoodie designed for teams that need strong color blocking without overloading the artwork.",
    fabric: ["280-340 gsm cotton-poly fleece", "Smooth outer face", "Brushed inner layer", "Rib collar, cuff, and hem"],
    colors: ["Navy / red / white", "Royal / red", "Black / red", "Custom team palette"],
    style: "Full-zip hoodie with structured color-block body, contrast sleeves, hood, side pockets, and clean logo placement.",
    useCases: ["Baseball club uniform", "Tournament travel wear", "School team hoodie", "Coaching staff apparel"],
    advantages: ["Classic team color story", "Works across youth and adult sizes", "Easy sponsor placement", "Repeatable bulk production"],
    customization: ["Chest logo", "Back team name", "Sleeve number", "Contrast piping", "Custom label", "Carton sorting"],
    seoKeywords: ["baseball club hoodie", "custom full zip hoodie", "teamwear supplier", "custom sportswear manufacturer"],
  },
  {
    slug: "purple-eagles-club-pullover-hoodie",
    name: "Purple Eagles Club Pullover Hoodie",
    category: "Pullover Club Hoodie",
    collection: "Fan & Club Merchandise",
    image: `${basePath}/purple-eagles-club-pullover-hoodie.jpg`,
    gallery: [`${basePath}/purple-eagles-club-pullover-hoodie.jpg`, `${basePath}/purple-street-baseball-hoodie-04.jpg`],
    summary:
      "A premium pullover hoodie for clubs and fan groups that need rich color, large back decoration, and retail-friendly details.",
    fabric: ["320-380 gsm premium fleece", "Cotton-touch outer face", "Warm brushed inner", "Rib cuff and hem"],
    colors: ["Deep purple / magenta / cyan", "Black / purple", "Team accent colorways", "Custom hood lining"],
    style: "Pullover hoodie with kangaroo pocket, contrast hood, sleeve bands, chest number, and large back club logo.",
    useCases: ["Fan merchandise", "College club hoodie", "Baseball team booster shop", "Retail capsule drop"],
    advantages: ["Premium retail feeling", "Large back graphic", "Good for embroidery and applique", "Strong color identity"],
    customization: ["Club logo", "Chest number", "Back mascot mark", "Sleeve band color", "Woven label", "Retail polybag"],
    seoKeywords: ["custom club hoodie", "fan merchandise hoodie", "private label hoodie", "custom embroidered hoodie"],
  },
  {
    slug: "boston-vintage-number-baseball-hoodie",
    name: "Boston Vintage Number Baseball Hoodie",
    category: "Vintage Pullover Hoodie",
    collection: "Heritage Teamwear",
    image: `${basePath}/boston-vintage-number-pullover-hoodie.jpg`,
    gallery: [`${basePath}/boston-vintage-number-pullover-hoodie.jpg`, `${basePath}/baseball-player-grey-training-hoodie.jpg`],
    summary:
      "A heritage-inspired baseball hoodie with collegiate lettering, contrast sleeves, and oversized back number placement.",
    fabric: ["300-360 gsm brushed fleece", "Cotton-poly blend", "Optional heavyweight fleece", "Rib cuff and waistband"],
    colors: ["Black / burgundy / teal", "Black / grey", "Team heritage colors", "Custom rib stripe"],
    style: "Pullover hoodie with varsity-style lettering, contrast raglan sleeves, kangaroo pocket, and large back number.",
    useCases: ["School team hoodie", "Alumni merchandise", "Baseball lifestyle apparel", "Heritage club collection"],
    advantages: ["Vintage athletic look", "Strong number customization", "Comfortable daily wear", "Good for school and college programs"],
    customization: ["Chenille or applique lettering", "Back number", "Sleeve color", "Custom rib", "Neck label", "Hangtag"],
    seoKeywords: ["custom school hoodie", "varsity hoodie", "baseball lifestyle hoodie", "college spirit hoodie"],
  },
  {
    slug: "cotton-fleece-baseball-lifestyle-hoodie",
    name: "Cotton Fleece Baseball Lifestyle Hoodie",
    category: "Lifestyle Pullover Hoodie",
    collection: "Everyday Baseball",
    image: `${basePath}/purple-street-baseball-hoodie-02.jpg`,
    gallery: [
      `${basePath}/purple-street-baseball-hoodie-01.jpg`,
      `${basePath}/purple-street-baseball-hoodie-02.jpg`,
      `${basePath}/purple-street-baseball-hoodie-03.jpg`,
      `${basePath}/purple-street-baseball-hoodie-04.jpg`,
    ],
    summary:
      "A soft cotton-touch pullover hoodie for baseball communities, streetwear drops, gym brands, and casual team merchandise.",
    fabric: ["300-380 gsm cotton-touch fleece", "80/20 cotton-poly option", "Soft brushed inner", "Optional organic cotton blend"],
    colors: ["Purple", "Grey", "Black", "Red", "Custom Pantone-matched color"],
    style: "Relaxed pullover hoodie with drawcord hood, kangaroo pocket, rib cuff, rib hem, and clean decoration zones.",
    useCases: ["Baseball lifestyle apparel", "Gym and fitness merchandise", "Corporate sports day hoodie", "Community event hoodie"],
    advantages: ["Comfort-first everyday fit", "Broad unisex appeal", "Works for print and embroidery", "Easy to expand into color programs"],
    customization: ["Chest print", "Sleeve embroidery", "Back graphic", "Private label", "Hangtag", "Gift packaging"],
    seoKeywords: ["custom pullover hoodie", "baseball hoodie", "custom gym hoodie", "private label hoodie manufacturer"],
  },
  {
    slug: "brown-varsity-baseball-jacket",
    name: "Brown Varsity Baseball Jacket",
    category: "Baseball Jacket",
    collection: "Varsity Jackets",
    image: `${basePath}/brown-varsity-baseball-jacket.jpg`,
    gallery: [`${basePath}/brown-varsity-baseball-jacket.jpg`, `${basePath}/purple-street-baseball-hoodie-01.jpg`],
    summary:
      "A varsity-style baseball jacket for youth teams, schools, clubs, and promotional programs that want a zip jacket option alongside hoodies.",
    fabric: ["280-340 gsm fleece or interlock", "Rib collar, cuff, and hem", "Contrast shoulder panels", "Optional brushed inner"],
    colors: ["Brown / white", "Navy / white", "Black / red", "Custom varsity colorway"],
    style: "Zip-front baseball jacket with rib collar, welt pockets, shoulder contrast panels, and rib stripe details.",
    useCases: ["School baseball jacket", "Club merchandise", "Youth team uniform", "Promotional outerwear"],
    advantages: ["Classic varsity shape", "Easy logo placement", "Good companion to hoodie programs", "Youth and adult sizing available"],
    customization: ["Chest patch", "Back embroidery", "Sleeve number", "Rib stripe colors", "Custom zipper", "Private label"],
    seoKeywords: ["custom baseball jacket", "varsity baseball jacket", "team jacket manufacturer", "custom teamwear jacket"],
  },
];

export const baseballHoodieCategories = [
  "Full-Zip Team Hoodie",
  "Pullover Team Hoodie",
  "Training Pullover Hoodie",
  "Lifestyle Pullover Hoodie",
  "Baseball Jacket",
] as const;

export function getBaseballHoodieProduct(slug: string) {
  return baseballHoodieProducts.find((product) => product.slug === slug);
}
