// ==================== WORD DATABASE - 12 CATEGORIES ====================
const WORDS_DB = {
    objects: { name: "Objects", icon: "fa-cube", words: [
        { word: "SMARTPHONE", hint: "Touch screen, calls, apps" },
        { word: "LAPTOP", hint: "Portable computer, keyboard" },
        { word: "BACKPACK", hint: "Carry books, school, zipper" },
        { word: "UMBRELLA", hint: "Rain, protects, open/close" },
        { word: "WRISTWATCH", hint: "Time, strap, analog or digital" },
        { word: "GLASSES", hint: "Vision, frames, lenses" },
        { word: "KEYBOARD", hint: "Type, keys, QWERTY" },
        { word: "MOUSE", hint: "Computer, click, scroll" },
        { word: "HEADPHONES", hint: "Listen music, ear cups" },
        { word: "FRIDGE", hint: "Cold, food storage, kitchen" },
        { word: "MICROWAVE", hint: "Heat food, popcorn, oven" },
        { word: "TOASTER", hint: "Bread, brown, breakfast" },
        { word: "BLENDER", hint: "Smoothie, mix, crush ice" },
        { word: "VACUUM", hint: "Clean floor, suck, dust" },
        { word: "LAMP", hint: "Light, bulb, desk" },
        { word: "MIRROR", hint: "Reflection, glass, wall" },
        { word: "SOFA", hint: "Sit, couch, living room" },
        { word: "BED", hint: "Sleep, mattress, pillow" },
        { word: "TABLE", hint: "Eat, desk, four legs" },
        { word: "CHAIR", hint: "Sit, seat, backrest" },
        { word: "BOOK", hint: "Read, pages, story" },
        { word: "PEN", hint: "Write, ink, stationery" },
        { word: "NOTEBOOK", hint: "Paper, notes, spiral" },
        { word: "SCISSORS", hint: "Cut, paper, blades" },
        { word: "TAPE", hint: "Sticky, roll, adhesive" },
        { word: "TOOTHBRUSH", hint: "Teeth, clean, bristles" }
    ]},
    
    vehicles: { name: "Vehicles", icon: "fa-car", words: [
        { word: "TESLA", hint: "Electric car, Elon Musk, Autopilot" },
        { word: "FERRARI", hint: "Sports car, red, fast" },
        { word: "LAMBORGHINI", hint: "Luxury supercar, Italian" },
        { word: "MUSTANG", hint: "Ford muscle car, horse logo" },
        { word: "CAMARO", hint: "Chevy sports car, Transformers Bumblebee" },
        { word: "JEEP", hint: "Off-road, rugged, Wrangler" },
        { word: "PICKUP TRUCK", hint: "Cargo bed, hauling, Ford F-150" },
        { word: "MOTORCYCLE", hint: "Two wheels, helmet, Harley" },
        { word: "BICYCLE", hint: "Pedal, two wheels, ride" },
        { word: "SCOOTER", hint: "Electric, kick, small wheels" },
        { word: "BOAT", hint: "Water, sail, engine" },
        { word: "YACHT", hint: "Luxury boat, rich, cruise" },
        { word: "SUBMARINE", hint: "Underwater, periscope, Navy" },
        { word: "HELICOPTER", hint: "Rotors, fly, chopper" },
        { word: "AIRPLANE", hint: "Fly, wings, jet" },
        { word: "JET", hint: "Fast plane, fighter, private" },
        { word: "SPACESHIP", hint: "Rocket, astronaut, NASA" },
        { word: "TRAIN", hint: "Railway, locomotive, track" },
        { word: "SUBWAY", hint: "Underground train, metro" },
        { word: "TRAM", hint: "Street car, rails, city" },
        { word: "BUS", hint: "Public transport, school bus" },
        { word: "SCHOOL BUS", hint: "Yellow, kids, stop sign" },
        { word: "AMBULANCE", hint: "Emergency, siren, hospital" },
        { word: "FIRE TRUCK", hint: "Red, ladder, siren, fire" },
        { word: "POLICE CAR", hint: "Law enforcement, siren, chase" },
        { word: "TAXI", hint: "Yellow cab, meter, ride" },
        { word: "BULLDOZER", hint: "Construction, push dirt, heavy" }
    ]},
    
    games: { name: "Games", icon: "fa-gamepad", words: [
        { word: "MINECRAFT", hint: "Blocks, creepers, crafting" },
        { word: "FORTNITE", hint: "Battle royale, building, Victory Royale" },
        { word: "AMONG US", hint: "Imposter, sus, sabotaging" },
        { word: "CALL OF DUTY", hint: "FPS, Modern Warfare, Nuke" },
        { word: "GRAND THEFT AUTO", hint: "Steal cars, Vice City, Rockstar" },
        { word: "THE LEGEND OF ZELDA", hint: "Link, Hyrule, Master Sword" },
        { word: "SUPER MARIO BROS", hint: "Mushroom, Luigi, Bowser" },
        { word: "POKEMON GO", hint: "Catch, evolve, Pokeball" },
        { word: "FIFA", hint: "Soccer, Ultimate Team, Goal" },
        { word: "ROCKET LEAGUE", hint: "Cars playing soccer, boost" },
        { word: "VALORANT", hint: "Tactical shooter, agents, spike" },
        { word: "LEAGUE OF LEGENDS", hint: "MOBA, Rift, pentakill" },
        { word: "DOTA 2", hint: "Ancient, creeps, Roshan" },
        { word: "COUNTER-STRIKE", hint: "Terrorists, bomb defuse, skins" },
        { word: "OVERWATCH", hint: "Heroes, payload, Nano Boost" },
        { word: "APEX LEGENDS", hint: "Battle royale, legends, revive" },
        { word: "PUBG", hint: "Chicken dinner, battlegrounds" },
        { word: "MINI MILITIA", hint: "Doodle army, dual guns" },
        { word: "CLASH OF CLANS", hint: "Builder, Barbarian, clan war" },
        { word: "BRAWL STARS", hint: "3v3, gems, Starr drop" },
        { word: "SUBWAY SURFERS", hint: "Train, running, coins" },
        { word: "TEMPLE RUN", hint: "Endless runner, monkey" },
        { word: "CANDY CRUSH", hint: "Match three, candies, soda" },
        { word: "ANGRY BIRDS", hint: "Slingshot, pigs, Red" },
        { word: "CUT THE ROPE", hint: "Om Nom, candy, physics" },
        { word: "PLANTS VS ZOMBIES", hint: "Pea shooter, lawn, brains" }
    ]},
    
    music: { name: "Music", icon: "fa-music", words: [
        { word: "TAYLOR SWIFT", hint: "Shake It Off, Swifties, Eras Tour" },
        { word: "BAD BUNNY", hint: "Reggaeton, Puerto Rico, YHLQMDLG" },
        { word: "ED SHEERAN", hint: "Shape of You, ginger, loop pedal" },
        { word: "BEYONCE", hint: "Queen B, Formation, Destiny's Child" },
        { word: "DRAKE", hint: "Hotline Bling, Degrassi, Certified Lover" },
        { word: "THE WEEKND", hint: "Blinding Lights, Starboy, Abel" },
        { word: "BILLIE EILISH", hint: "Bad Guy, green hair, brother" },
        { word: "BRUNO MARS", hint: "Uptown Funk, Grenade, Silk Sonic" },
        { word: "ADELE", hint: "Hello, Rolling in the Deep, soul" },
        { word: "EMINEM", hint: "Rap God, Lose Yourself, Slim Shady" },
        { word: "BTS", hint: "K-pop, ARMY, Dynamite" },
        { word: "SHAKIRA", hint: "Hips Don't Lie, Waka Waka" },
        { word: "RIHANNA", hint: "Umbrella, Fenty, Diamonds" },
        { word: "KANYE WEST", hint: "Ye, Donda, Yeezy" },
        { word: "POST MALONE", hint: "Sunflower, tattoos, Circles" },
        { word: "DUA LIPA", hint: "Levitating, New Rules, disco" },
        { word: "OLIVIA RODRIGO", hint: "Drivers License, Sour, Guts" },
        { word: "HARRY STYLES", hint: "Watermelon Sugar, One Direction" },
        { word: "ARIANA GRANDE", hint: "Thank U Next, ponytail" },
        { word: "JUSTIN BIEBER", hint: "Baby, Purpose, Yummy" },
        { word: "MICHAEL JACKSON", hint: "Thriller, moonwalk, Beat It" },
        { word: "QUEEN", hint: "Freddie Mercury, Bohemian Rhapsody" },
        { word: "NIRVANA", hint: "Kurt Cobain, Smells Like Teen Spirit" },
        { word: "METALLICA", hint: "Heavy metal, Master of Puppets" },
        { word: "BEATLES", hint: "Liverpool, Let It Be, John Lennon" }
    ]},
    
    tvshows: { name: "TV Shows", icon: "fa-tv", words: [
        { word: "GAME OF THRONES", hint: "Winter is coming, dragons, Jon Snow" },
        { word: "BREAKING BAD", hint: "Walter White, meth, Heisenberg" },
        { word: "STRANGER THINGS", hint: "Eleven, Demogorgon, Upside Down" },
        { word: "THE OFFICE", hint: "Dunder Mifflin, Jim, Dwight" },
        { word: "FRIENDS", hint: "Central Perk, Rachel, Ross" },
        { word: "HOW I MET YOUR MOTHER", hint: "Ted, Barney, legend" },
        { word: "THE BIG BANG THEORY", hint: "Sheldon, physics, Bazinga" },
        { word: "MONEY HEIST", hint: "La Casa de Papel, Dalí mask" },
        { word: "SQUID GAME", hint: "Red Light Green Light, shapes" },
        { word: "WEDNESDAY", hint: "Addams Family, dance, Nevermore" },
        { word: "THE MANDALORIAN", hint: "Baby Yoda, Star Wars, bounty hunter" },
        { word: "THE WALKING DEAD", hint: "Zombies, Rick Grimes, Alexandria" },
        { word: "SUPERNATURAL", hint: "Winchesters, demons, Impala" },
        { word: "THE SIMPSONS", hint: "Homer, yellow, D'oh" },
        { word: "FAMILY GUY", hint: "Peter Griffin, Stewie, Lois" },
        { word: "SOUTH PARK", hint: "Cartman, Kenny, Colorado" },
        { word: "SPONGEBOB", hint: "Bikini Bottom, Krabby Patty" },
        { word: "PEAKY BLINDERS", hint: "Thomas Shelby, razor caps, Birmingham" },
        { word: "THE CROWN", hint: "Queen Elizabeth, royal family, Netflix" },
        { word: "MIRACULOUS", hint: "Ladybug, Cat Noir, Paris" },
        { word: "AVATAR LAST AIRBENDER", hint: "Aang, Zuko, elements" },
        { word: "THE BOYS", hint: "Homelander, superheroes, Butcher" },
        { word: "LUCIFER", hint: "Devil, detective, Amenadiel" },
        { word: "VICTORIOUS", hint: "Tori Vega, Hollywood Arts" }
    ]},
    
    cartoons: { name: "Cartoons", icon: "fa-dragon", words: [
        { word: "TOM AND JERRY", hint: "Cat and mouse, chasing, cheese" },
        { word: "SCOOBY-DOO", hint: "Mystery gang, Great Dane, Velma" },
        { word: "THE POWERPUFF GIRLS", hint: "Blossom, Bubbles, Buttercup" },
        { word: "POKEMON", hint: "Ash, Pikachu, Gotta catch 'em all" },
        { word: "DRAGON BALL Z", hint: "Goku, Super Saiyan, Kamehameha" },
        { word: "NARUTO", hint: "Ninja, Rasengan, Hokage" },
        { word: "ONE PIECE", hint: "Luffy, pirate, treasure" },
        { word: "DEATH NOTE", hint: "Light, Ryuk, notebook" },
        { word: "ATTACK ON TITAN", hint: "Eren, colossal titan, wall" },
        { word: "DEMON SLAYER", hint: "Tanjiro, Nezuko, breathing" },
        { word: "MY LITTLE PONY", hint: "Rainbow Dash, Twilight Sparkle" },
        { word: "ADVENTURE TIME", hint: "Finn, Jake, Land of Ooo" },
        { word: "REGULAR SHOW", hint: "Mordecai, Rigby, park" },
        { word: "THE AMAZING WORLD OF GUMBALL", hint: "Blue cat, Darwin, Elmore" },
        { word: "STEVEN UNIVERSE", hint: "Crystal gems, fusion" },
        { word: "BEN 10", hint: "Omnitrix, alien transformation" },
        { word: "TOTALLY SPIES", hint: "Clover, Sam, Alex, espionage" },
        { word: "THE FAIRLY ODDPARENTS", hint: "Cosmo, Wanda, Timmy" },
        { word: "JIMMY NEUTRON", hint: "Boy genius, Sheen, Carl" },
        { word: "DORA THE EXPLORER", hint: "Backpack, Map, Swiper" },
        { word: "BLUEY", hint: "Heeler family, Bingo, Australia" },
        { word: "PAW PATROL", hint: "Chase, Marshall, Adventure Bay" },
        { word: "PEPPA PIG", hint: "Muddy puddles, George, daddy pig" },
        { word: "MICKEY MOUSE CLUBHOUSE", hint: "Hot dog, Minnie, Donald" }
    ]},
    
    movies: { name: "Movies", icon: "fa-film", words: [
        { word: "AVENGERS", hint: "Iron Man, Thanos, snap" },
        { word: "STRANGER THINGS", hint: "Eleven, Demogorgon, upside down" },
        { word: "ANGRY BIRDS", hint: "Slingshot, pigs, Red" },
        { word: "TOY STORY", hint: "Woody, Buzz Lightyear, Andy" },
        { word: "FROZEN", hint: "Elsa, Let it go, Olaf" },
        { word: "SHREK", hint: "Ogre, Donkey, Fiona" },
        { word: "HARRY POTTER", hint: "Wizard, Hogwarts, Voldemort" },
        { word: "THE LION KING", hint: "Simba, Hakuna Matata, Mufasa" },
        { word: "FINDING NEMO", hint: "Clownfish, Dory, ocean" },
        { word: "DESPICABLE ME", hint: "Gru, Minions, bananas" },
        { word: "MINIONS", hint: "Yellow, goggles, gibberish" },
        { word: "SPIDER-MAN", hint: "Web, Peter Parker, upside down kiss" },
        { word: "BATMAN", hint: "Dark Knight, Gotham, Joker" },
        { word: "SUPER MARIO", hint: "Plumber, Mushroom, Princess Peach" },
        { word: "SONIC", hint: "Hedgehog, fast, rings" },
        { word: "POKEMON", hint: "Pikachu, Gotta catch 'em all" },
        { word: "DORA THE EXPLORER", hint: "Backpack, Map, Swiper" },
        { word: "PAW PATROL", hint: "Chase, Marshall, adventure bay" },
        { word: "BLUEY", hint: "Blue heeler, Bingo, Australia" },
        { word: "CINDERELLA", hint: "Glass slipper, pumpkin carriage" },
        { word: "SNOW WHITE", hint: "Apple, seven dwarfs" },
        { word: "BEAUTY AND THE BEAST", hint: "Rose, Belle, teapot" },
        { word: "ALADDIN", hint: "Genie, magic lamp, Jasmine" },
        { word: "MOANA", hint: "Ocean, Maui, Hei Hei" },
        { word: "ENCANTO", hint: "Mirabel, Bruno, we don't talk about" },
        { word: "COCO", hint: "Guitar, Day of Dead, Miguel" },
        { word: "INSIDE OUT", hint: "Joy, Sadness, emotions" },
        { word: "UP", hint: "Balloons, old man, Russell" },
        { word: "WRECK-IT RALPH", hint: "Arcade, bad guy, Vanellope" },
        { word: "KUNG FU PANDA", hint: "Po, dragon warrior, noodles" }
    ]},
    
    animals: { name: "Animals", icon: "fa-paw", words: [
        { word: "PIKACHU", hint: "Electric mouse, Pokemon, Ash" },
        { word: "CHARIZARD", hint: "Fire dragon, Pokemon final form" },
        { word: "EEVEE", hint: "Evolution Pokemon, cute" },
        { word: "SCROOGE MCDUCK", hint: "Rich duck, money bin, Huey" },
        { word: "DONALD DUCK", hint: "Angry duck, sailor shirt" },
        { word: "MICKEY MOUSE", hint: "Disney, Minnie, ears" },
        { word: "PLUTO", hint: "Mickey's dog, puppy" },
        { word: "GOOFY", hint: "Tall dog, clumsy" },
        { word: "SIMBA", hint: "Lion cub, King, Hakuna Matata" },
        { word: "BAMBI", hint: "Deer, Thumper, forest" },
        { word: "DUMBO", hint: "Flying elephant, big ears" },
        { word: "BENJI", hint: "Famous movie dog" },
        { word: "LASSIE", hint: "Rough collie, brave dog" },
        { word: "AIR BUD", hint: "Golden retriever, basketball" },
        { word: "BEETHOVEN", hint: "Saint Bernard, messy dog" },
        { word: "GARFIELD", hint: "Fat cat, lasagna, Monday" },
        { word: "TOM (TOM AND JERRY)", hint: "Cat, chasing mouse" },
        { word: "JERRY (TOM AND JERRY)", hint: "Smart mouse, cheese" },
        { word: "SCOOBY-DOO", hint: "Great Dane, mystery gang" },
        { word: "SPONGEBOB's GARY", hint: "Snail, meow, pet" },
        { word: "PUSHEEN", hint: "Grumpy cat, internet famous" },
        { word: "GRUMPY CAT", hint: "Famous grumpy face cat" },
        { word: "LUCKY (101 DALMATIANS)", hint: "Dalmatian, spots" },
        { word: "BOLT", hint: "Super dog, white fur" },
        { word: "BUDDY (ELF)", hint: "Dog in Christmas movie" }
    ]},
    
    tech: { name: "Technology", icon: "fa-microchip", words: [
        { word: "FACEBOOK", hint: "Meta, like button, Zuckerberg" },
        { word: "INSTAGRAM", hint: "Photos, stories, reels" },
        { word: "TIKTOK", hint: "Short videos, dancing, viral" },
        { word: "YOUTUBE", hint: "Video, subscribe, creator" },
        { word: "WHATSAPP", hint: "Green app, messaging, Meta" },
        { word: "NETFLIX", hint: "Streaming, binge watch, chill" },
        { word: "DISNEY+", hint: "Marvel, Star Wars, Disney" },
        { word: "AMAZON PRIME", hint: "Shopping, fast delivery, Alexa" },
        { word: "SPOTIFY", hint: "Music, podcast, playlist" },
        { word: "GOOGLE", hint: "Search, Chrome, Android" },
        { word: "CHATGPT", hint: "AI, chatbot, OpenAI" },
        { word: "IPHONE", hint: "Apple, smartphone, iOS" },
        { word: "ANDROID", hint: "Google, phone, robot" },
        { word: "SAMSUNG", hint: "Galaxy, Korean tech giant" },
        { word: "XBOX", hint: "Microsoft, gaming, Halo" },
        { word: "PLAYSTATION", hint: "Sony, gaming, PlayStation" },
        { word: "NINTENDO SWITCH", hint: "Mario, Zelda, handheld" },
        { word: "WII", hint: "Motion control, Nintendo, bowling" },
        { word: "TESLA", hint: "Elon Musk, electric car" },
        { word: "UBER", hint: "Ride sharing, taxi app" },
        { word: "AIRBNB", hint: "Rent house, vacation rental" },
        { word: "ZOOM", hint: "Video call, remote work" },
        { word: "MICROSOFT TEAMS", hint: "Work chat, video meeting" },
        { word: "SNAPCHAT", hint: "Disappearing photos, filters" },
        { word: "TWITTER", hint: "X, tweets, Elon Musk" },
        { word: "REDDIT", hint: "Forums, upvote, community" },
        { word: "PINTEREST", hint: "Ideas, boards, crafts" },
        { word: "LINKEDIN", hint: "Jobs, professional network" }
    ]},
    
    food: { name: "Food", icon: "fa-utensils", words: [
        { word: "MCDONALD'S", hint: "Golden arches, Big Mac, fries" },
        { word: "BURGER KING", hint: "Whopper, flame grilled" },
        { word: "KFC", hint: "Finger lickin', fried chicken" },
        { word: "PIZZA HUT", hint: "Pizza, stuffed crust, cheese" },
        { word: "DOMINO'S", hint: "Pizza delivery, 30 minutes" },
        { word: "STARBUCKS", hint: "Coffee, Frappuccino, Pumpkin spice" },
        { word: "DUNKIN'", hint: "Donuts, coffee, America runs on" },
        { word: "SUBWAY", hint: "Sandwich, footlong, eat fresh" },
        { word: "TACO BELL", hint: "Mexican, crunchy taco, nachos" },
        { word: "CHIPOTLE", hint: "Burrito bowl, guac, fast casual" },
        { word: "WENDY'S", hint: "Square burger, Frosty" },
        { word: "FIVE GUYS", hint: "Burger, peanut oil, free peanuts" },
        { word: "SHAKE SHACK", hint: "ShackBurger, crinkle fries" },
        { word: "POPEYES", hint: "Chicken sandwich, Louisiana" },
        { word: "CHICK-FIL-A", hint: "Chicken sandwich, cows, Sunday closed" },
        { word: "OLIVE GARDEN", hint: "Breadsticks, pasta, endless soup" },
        { word: "RED LOBSTER", hint: "Seafood, cheddar biscuits" },
        { word: "DENNY'S", hint: "Breakfast all day, grand slam" },
        { word: "IHOP", hint: "Pancakes, breakfast, rooty tooty" },
        { word: "PANDA EXPRESS", hint: "Orange chicken, Chinese fast food" },
        { word: "IN-N-OUT", hint: "Double double, animal style" },
        { word: "WHATABURGER", hint: "Texas burger, patty melt" },
        { word: "Sonic", hint: "Drive-in, slushies, tots" },
        { word: "DAIRY QUEEN", hint: "Blizzard, soft serve, ice cream" },
        { word: "BASKIN ROBBINS", hint: "31 flavors, ice cream cake" }
    ]},
    
    sports: { name: "Sports", icon: "fa-futbol", words: [
        { word: "FIFA", hint: "Soccer video game, World Cup" },
        { word: "MADDEN NFL", hint: "Football game, John Madden" },
        { word: "NBA 2K", hint: "Basketball video game" },
        { word: "OLYMPICS", hint: "Gold medal, every 4 years" },
        { word: "WORLD CUP", hint: "Soccer trophy, nations" },
        { word: "SUPER BOWL", hint: "NFL final, halftime show" },
        { word: "LEBRON JAMES", hint: "King James, basketball legend" },
        { word: "MESSI", hint: "Soccer GOAT, Argentina" },
        { word: "RONALDO", hint: "CR7, soccer star, SIUUU" },
        { word: "MICHAEL JORDAN", hint: "Air Jordan, Bulls, 23" },
        { word: "KOBE BRYANT", hint: "Black Mamba, Lakers, 24" },
        { word: "STEPH CURRY", hint: "Three pointer, Warriors" },
        { word: "SERENA WILLIAMS", hint: "Tennis queen, 23 slams" },
        { word: "TIGER WOODS", hint: "Golf legend, Masters" },
        { word: "TOM BRADY", hint: "Quarterback, 7 Super Bowls" },
        { word: "PELE", hint: "Brazilian soccer king" },
        { word: "WIMBLEDON", hint: "Tennis, strawberries, white" },
        { word: "NBA", hint: "Basketball league, USA" },
        { word: "NFL", hint: "American football, Patriots" },
        { word: "MLB", hint: "Baseball, Yankees, Dodgers" },
        { word: "PREMIER LEAGUE", hint: "English soccer, Arsenal" },
        { word: "FORMULA 1", hint: "F1, fast cars, Hamilton" },
        { word: "UFC", hint: "Fighting, octagon, McGregor" },
        { word: "TOUR DE FRANCE", hint: "Bicycle race, yellow jersey" }
    ]},
    
    travel: { name: "Travel", icon: "fa-plane", words: [
        { word: "DISNEYLAND", hint: "Happiest place, castle, Disney" },
        { word: "DISNEY WORLD", hint: "Florida, Magic Kingdom, Epcot" },
        { word: "UNIVERSAL STUDIOS", hint: "Harry Potter, Jurassic Park" },
        { word: "PARIS", hint: "Eiffel Tower, croissant, France" },
        { word: "LONDON", hint: "Big Ben, double decker, tea" },
        { word: "NEW YORK", hint: "Statue of Liberty, Times Square" },
        { word: "TOKYO", hint: "Sushi, anime, DisneySea" },
        { word: "ROME", hint: "Colosseum, pizza, Vatican" },
        { word: "BARCELONA", hint: "Sagrada Familia, Messi" },
        { word: "DUBAI", hint: "Burj Khalifa, desert, luxury" },
        { word: "SYDNEY", hint: "Opera House, koala, beach" },
        { word: "LAS VEGAS", hint: "Casino, strip, shows" },
        { word: "HAWAII", hint: "Volcano, luau, surf" },
        { word: "BALI", hint: "Tropical, temples, rice terraces" },
        { word: "MALDIVES", hint: "Overwater bungalows, snorkel" },
        { word: "SANTORINI", hint: "White buildings, blue domes" },
        { word: "MACHU PICCHU", hint: "Inca ruins, Peru, mountains" },
        { word: "GRAND CANYON", hint: "Arizona, hiking, Colorado river" },
        { word: "NIAGARA FALLS", hint: "Waterfall, Canada, boat tour" },
        { word: "EGYPT", hint: "Pyramids, Sphinx, Nile river" },
        { word: "THAILAND", hint: "Elephants, Bangkok, pad thai" },
        { word: "SWITZERLAND", hint: "Alps, chocolate, yodel" }
    ]}
};

// Game state
let currentGame = {
    category: null,
    players: [],
    wordObj: null,
    imposterIndex: null,
    revealed: [],
    votes: [],
    hasVoted: [],
    currentRevealIdx: 0
};

// ============ DOM Elements ============
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCategorySelection();
    initSetupModal();
    initGameModal();
    initSocialLinks();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = { home: document.getElementById('homePage'), howto: document.getElementById('howtoPage'), support: document.getElementById('supportPage') };
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    window.switchPage = (pageId) => {
        Object.values(pages).forEach(p => p?.classList.remove('active'));
        if (pages[pageId]) pages[pageId].classList.add('active');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) link.classList.add('active');
        });
        navMenu?.classList.remove('active');
    };

    navLinks.forEach(link => link.addEventListener('click', () => switchPage(link.getAttribute('data-page'))));
    if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
}

function initCategorySelection() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    const playBtn = document.getElementById('playBtn');
    window.selectedCategory = null;
    
    categoriesGrid.innerHTML = '';
    const categoryOrder = ['objects', 'vehicles', 'games', 'music', 'tvshows', 'cartoons', 'movies', 'animals', 'tech', 'food', 'sports', 'travel'];
    
    categoryOrder.forEach(key => {
        const cat = WORDS_DB[key];
        if (cat) {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.setAttribute('data-category', key);
            card.innerHTML = `
                <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
                <span class="category-name">${cat.name}</span>
                <span class="category-count">${cat.words.length} words</span>
            `;
            card.addEventListener('click', () => {
                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                window.selectedCategory = key;
                const hint = document.querySelector('.play-hint');
                if (hint) hint.textContent = `ready to play • ${cat.name}`;
            });
            categoriesGrid.appendChild(card);
        }
    });
    
    if (playBtn) playBtn.addEventListener('click', () => openSetupModal());
}

// ============ Player Setup Modal ============
let currentPlayers = [];

function loadSavedPlayers() {
    const saved = localStorage.getItem('imposter_players');
    if (saved) { try { const p = JSON.parse(saved); if (p.length >= 3) { currentPlayers = p.slice(0,100); return; } } catch(e) {} }
    currentPlayers = ['Player 1', 'Player 2', 'Player 3'];
}

function savePlayers() { localStorage.setItem('imposter_players', JSON.stringify(currentPlayers)); }

function renderPlayerInputs() {
    const panel = document.getElementById('playerNamesPanel');
    if (!panel) return;
    panel.innerHTML = '';
    currentPlayers.forEach((name, idx) => {
        const row = document.createElement('div');
        row.className = 'player-name-row';
        row.innerHTML = `
            <div class="player-number">${idx+1}</div>
            <input type="text" value="${escapeHtml(name)}" data-index="${idx}" class="player-name-input">
            ${idx >= 3 ? `<button class="remove-player-btn" data-index="${idx}"><i class="fas fa-trash-alt"></i></button>` : ''}
        `;
        panel.appendChild(row);
    });
    document.getElementById('playerCountDisplay').innerText = currentPlayers.length;
    document.querySelectorAll('.player-name-input').forEach(inp => inp.addEventListener('change', (e) => { const i = parseInt(inp.dataset.index); if (inp.value.trim()) currentPlayers[i] = inp.value.trim(); savePlayers(); }));
    document.querySelectorAll('.remove-player-btn').forEach(btn => btn.addEventListener('click', (e) => { const i = parseInt(btn.dataset.index); if (currentPlayers.length > 3) { currentPlayers.splice(i,1); savePlayers(); renderPlayerInputs(); } }));
}

function openSetupModal() {
    if (!window.selectedCategory) { alert('Please select a category first!'); return; }
    loadSavedPlayers();
    renderPlayerInputs();
    document.getElementById('setupModal').classList.add('active');
}

function closeSetupModal() { document.getElementById('setupModal').classList.remove('active'); }

function initSetupModal() {
    const setupModal = document.getElementById('setupModal');
    
    document.getElementById('closeModalBtn')?.addEventListener('click', closeSetupModal);
    document.getElementById('addPlayerBtn')?.addEventListener('click', () => { if (currentPlayers.length < 100) { currentPlayers.push(`Player ${currentPlayers.length+1}`); savePlayers(); renderPlayerInputs(); } else alert('Maximum 100 players!'); });
    document.getElementById('startGameModalBtn')?.addEventListener('click', () => { closeSetupModal(); startGame(); });
    
    setupModal.addEventListener('click', (e) => { e.stopPropagation(); });
}

// ============ GAME LOGIC ============
function startGame() {
    const categoryData = WORDS_DB[window.selectedCategory];
    const words = categoryData.words;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    const imposterIdx = Math.floor(Math.random() * currentPlayers.length);
    
    currentGame = {
        category: window.selectedCategory,
        players: [...currentPlayers],
        wordObj: randomWord,
        imposterIndex: imposterIdx,
        revealed: new Array(currentPlayers.length).fill(false),
        votes: new Array(currentPlayers.length).fill(0),
        hasVoted: new Array(currentPlayers.length).fill(false),
        currentRevealIdx: 0
    };
    
    document.getElementById('totalRevealPlayers').innerText = currentGame.players.length;
    document.getElementById('currentRevealIdx').innerText = 1;
    document.getElementById('revealPhase').classList.add('active');
    document.getElementById('votingPhase').classList.remove('active');
    document.getElementById('nextPlayerRevealBtn').disabled = true;
    document.getElementById('finishRevealBtn').disabled = true;
    
    renderFlipCard();
    document.getElementById('gameModal').classList.add('active');
}

function renderFlipCard() {
    const container = document.getElementById('flipCardContainer');
    const idx = currentGame.currentRevealIdx;
    const player = currentGame.players[idx];
    const isImposter = (idx === currentGame.imposterIndex);
    
    container.innerHTML = `
        <div class="flip-card" id="activeFlipCard">
            <div class="flip-card-inner">
                <div class="flip-front">
                    <i class="fas fa-question-circle"></i>
                    <p>${escapeHtml(player)}</p>
                    <small style="margin-top:20px;">tap & hold to reveal</small>
                </div>
                <div class="flip-back">
                    ${isImposter ? 
                        `<i class="fas fa-mask" style="font-size:2rem"></i>
                         <div class="imposter-text">🃟 YOU ARE THE IMPOSTER</div>
                         <div class="hint-text">🔍 Hint: ${escapeHtml(currentGame.wordObj.hint)}</div>` :
                        `<i class="fas fa-eye" style="font-size:2rem"></i>
                         <div class="secret-word">${escapeHtml(currentGame.wordObj.word)}</div>
                         <div class="hint-text">📖 keep this secret</div>`
                    }
                </div>
            </div>
        </div>
    `;
    
    const card = document.getElementById('activeFlipCard');
    let holdTimer = null;
    
    const startHold = () => { holdTimer = setTimeout(() => { if (!currentGame.revealed[idx]) { card.classList.add('flipped'); currentGame.revealed[idx] = true; updateRevealButtons(); } }, 200); };
    const endHold = () => { if (holdTimer) clearTimeout(holdTimer); if (card.classList.contains('flipped')) card.classList.remove('flipped'); };
    
    card.addEventListener('mousedown', startHold);
    card.addEventListener('mouseup', endHold);
    card.addEventListener('mouseleave', endHold);
    card.addEventListener('touchstart', startHold, {passive: false});
    card.addEventListener('touchend', endHold);
    
    container.classList.remove('enter-right');
    void container.offsetWidth;
    container.classList.add('enter-right');
}

function updateRevealButtons() {
    const currentIdx = currentGame.currentRevealIdx;
    const nextBtn = document.getElementById('nextPlayerRevealBtn');
    const finishBtn = document.getElementById('finishRevealBtn');
    
    nextBtn.disabled = !currentGame.revealed[currentIdx];
    const allRevealed = currentGame.revealed.every(r => r === true);
    finishBtn.disabled = !allRevealed;
}

function nextPlayer() {
    if (currentGame.currentRevealIdx + 1 < currentGame.players.length) {
        const container = document.getElementById('flipCardContainer');
        
        container.classList.remove('enter-right');
        container.classList.add('exit-left');
        
        setTimeout(() => {
            currentGame.currentRevealIdx++;
            document.getElementById('currentRevealIdx').innerText = currentGame.currentRevealIdx + 1;
            document.getElementById('nextPlayerRevealBtn').disabled = true;
            
            container.classList.remove('exit-left');
            renderFlipCard();
        }, 250);
    }
}

function finishReveal() {
    document.getElementById('revealPhase').classList.remove('active');
    document.getElementById('votingPhase').classList.add('active');
    renderVotingUI();
}

// ============ FIXED VOTING SYSTEM - Each player votes exactly once ============
function renderVotingUI() {
    const container = document.getElementById('votingList');
    container.innerHTML = '';
    
    // Reset votes and tracking
    currentGame.votes = new Array(currentGame.players.length).fill(0);
    currentGame.hasVoted = new Array(currentGame.players.length).fill(false);
    
    // Add instruction
    const instruction = document.createElement('div');
    instruction.className = 'voting-instruction';
    instruction.innerHTML = '<i class="fas fa-info-circle"></i> Each player clicks ONCE on who they think is the imposter';
    container.appendChild(instruction);
    
    // Create vote cards for each suspect
    currentGame.players.forEach((player, idx) => {
        const voteCard = document.createElement('div');
        voteCard.className = 'vote-card';
        voteCard.dataset.idx = idx;
        voteCard.innerHTML = `
            <span class="voter-name"><i class="fas fa-user"></i> ${escapeHtml(player)}</span>
            <div class="vote-stats">
                <div class="vote-progress"><div class="vote-fill" id="voteFill-${idx}" style="width:0%"></div></div>
                <span class="vote-count" id="voteCount-${idx}">0</span>
            </div>
        `;
        
        voteCard.addEventListener('click', () => {
            const votedCount = currentGame.hasVoted.filter(v => v === true).length;
            const totalPlayers = currentGame.players.length;
            
            if (votedCount >= totalPlayers) {
                showVotingToast('All players have already voted! Click "Reveal Imposter"', '#FF8888');
                return;
            }
            
            const nextVoterIndex = currentGame.hasVoted.findIndex(v => v === false);
            if (nextVoterIndex !== -1) {
                const voterName = currentGame.players[nextVoterIndex];
                currentGame.hasVoted[nextVoterIndex] = true;
                currentGame.votes[idx]++;
                updateVoteDisplay();
                
                showVotingToast(`${voterName} voted for ${escapeHtml(player)}`, '#FFE87C');
                
                voteCard.style.transform = 'scale(0.98)';
                setTimeout(() => { voteCard.style.transform = ''; }, 150);
                
                const allVoted = currentGame.hasVoted.every(v => v === true);
                if (allVoted) {
                    setTimeout(() => {
                        showVotingToast('✅ All votes cast! Click "Reveal Imposter" to see the result', '#00AA00');
                    }, 300);
                }
            }
        });
        container.appendChild(voteCard);
    });
    
    // Add cool vote count display
    const voteCountDisplay = document.createElement('div');
    voteCountDisplay.className = 'vote-count-display';
    voteCountDisplay.id = 'voteCountDisplay';
    voteCountDisplay.innerHTML = `<i class="fas fa-chart-simple"></i> 🗳️ VOTES CAST: 0 / ${currentGame.players.length} 🗳️`;
    container.appendChild(voteCountDisplay);
}

function updateVoteDisplay() {
    const totalVotes = currentGame.votes.reduce((a,b) => a+b, 0);
    
    currentGame.votes.forEach((count, idx) => {
        const percent = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
        const fill = document.getElementById(`voteFill-${idx}`);
        const countSpan = document.getElementById(`voteCount-${idx}`);
        if (fill) fill.style.width = `${percent}%`;
        if (countSpan) countSpan.innerText = count;
    });
    
    const voteCountDisplay = document.getElementById('voteCountDisplay');
    if (voteCountDisplay) {
        const votedCount = currentGame.hasVoted.filter(v => v === true).length;
        voteCountDisplay.innerHTML = `<i class="fas fa-chart-simple"></i> 🗳️ VOTES CAST: ${votedCount} / ${currentGame.players.length} 🗳️`;
        
        if (votedCount === currentGame.players.length) {
            voteCountDisplay.classList.add('complete');
        } else {
            voteCountDisplay.classList.remove('complete');
        }
    }
}

function showVotingToast(message, color) {
    let toast = document.getElementById('votingToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'votingToast';
        toast.className = 'voting-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toast.style.backgroundColor = '#000000';
    toast.style.color = color || '#FFE87C';
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function revealVerdict() {
    // Check if all votes have been cast
    const totalVotesCast = currentGame.hasVoted.filter(v => v === true).length;
    if (totalVotesCast < currentGame.players.length) {
        showVotingToast(`⚠️ ${currentGame.players.length - totalVotesCast} player(s) haven't voted yet!`, '#FF8888');
        return;
    }
    
    let maxVotes = -1;
    let accusedIdx = 0;
    currentGame.votes.forEach((votes, idx) => { 
        if (votes > maxVotes) { 
            maxVotes = votes; 
            accusedIdx = idx; 
        } 
    });
    const wasCorrect = (accusedIdx === currentGame.imposterIndex);
    showResult(accusedIdx, wasCorrect);
}

function showResult(accusedIdx, wasCorrect) {
    document.getElementById('gameModal').classList.remove('active');
    const imposterName = currentGame.players[currentGame.imposterIndex];
    const accusedName = currentGame.players[accusedIdx];
    
    const resultTitle = document.getElementById('resultTitle');
    const resultBody = document.getElementById('resultBody');
    const resultHeader = document.getElementById('resultHeader');
    const resultCard = document.querySelector('.result-card');
    
    // Remove previous classes
    resultCard.classList.remove('win', 'loss');
    
    if (wasCorrect) {
        resultCard.classList.add('win');
        resultTitle.innerText = '🎭 IMPOSTER CAUGHT! 🎭';
        resultHeader.style.background = 'linear-gradient(135deg, #006400 0%, #00AA00 50%, #006400 100%)';
        resultBody.innerHTML = `
            <div style="text-align:center">
                <i class="fas fa-check-circle" style="font-size:3rem; color:#00AA00; margin-bottom:1rem"></i>
                <p>The crew voted out <strong style="color:#006400">${escapeHtml(accusedName)}</strong>!</p>
                <div class="result-word">🔍 ${escapeHtml(currentGame.wordObj.word)} 🔍</div>
                <p>The real imposter was <strong style="color:#006400">${escapeHtml(imposterName)}</strong>.</p>
                <p style="font-size:1.5rem; margin-top:0.5rem">🏆 CREW VICTORY! 🏆</p>
            </div>
        `;
    } else {
        resultCard.classList.add('loss');
        resultTitle.innerText = '😈 IMPOSTER WINS! 😈';
        resultHeader.style.background = 'linear-gradient(135deg, #4a0000 0%, #8B0000 50%, #4a0000 100%)';
        resultBody.innerHTML = `
            <div style="text-align:center">
                <i class="fas fa-skull-crossbones" style="font-size:3rem; color:#8B0000; margin-bottom:1rem"></i>
                <p>The crew accused <strong style="color:#8B0000">${escapeHtml(accusedName)}</strong>... but they were innocent!</p>
                <div class="result-word">🔍 The secret word was: ${escapeHtml(currentGame.wordObj.word)} 🔍</div>
                <p>The imposter <strong style="color:#8B0000">${escapeHtml(imposterName)}</strong> fooled everyone.</p>
                <p style="font-size:1.5rem; margin-top:0.5rem">💀 IMPOSTER VICTORY! 💀</p>
            </div>
        `;
    }
    document.getElementById('resultModal').classList.add('active');
}

function playAgain() {
    document.getElementById('resultModal').classList.remove('active');
    openSetupModal();
}

function endGame() {
    document.getElementById('resultModal').classList.remove('active');
    switchPage('home');
}

function initGameModal() {
    const gameModal = document.getElementById('gameModal');
    const resultModal = document.getElementById('resultModal');
    
    const closeGameBtn = document.getElementById('closeGameBtn');
    if (closeGameBtn) {
        closeGameBtn.addEventListener('click', () => {
            if (confirm('Exit game? Your progress will be lost.')) {
                gameModal.classList.remove('active');
            }
        });
    }
    
    const closeVotingBtn = document.getElementById('closeVotingBtn');
    if (closeVotingBtn) {
        closeVotingBtn.addEventListener('click', () => {
            if (confirm('Exit game? Your progress will be lost.')) {
                gameModal.classList.remove('active');
            }
        });
    }
    
    document.getElementById('nextPlayerRevealBtn')?.addEventListener('click', () => nextPlayer());
    document.getElementById('finishRevealBtn')?.addEventListener('click', () => finishReveal());
    document.getElementById('revealVerdictBtn')?.addEventListener('click', () => revealVerdict());
    document.getElementById('playAgainBtn')?.addEventListener('click', () => playAgain());
    document.getElementById('endGameBtn')?.addEventListener('click', () => endGame());
    
    gameModal.addEventListener('click', (e) => { e.stopPropagation(); });
    resultModal.addEventListener('click', (e) => { e.stopPropagation(); });
}

function initSocialLinks() {
    // Your social links
    const instaLink = document.getElementById('instaLink');
    const tiktokLink = document.getElementById('tiktokLink');
    const githubLink = document.getElementById('githubLink');
    
    if (instaLink) instaLink.addEventListener('click', (e) => { e.preventDefault(); window.open('https://instagram.com/_arsu.x', '_blank'); });
    if (tiktokLink) tiktokLink.addEventListener('click', (e) => { e.preventDefault(); window.open('https://tiktok.com/@my.ville', '_blank'); });
    if (githubLink) githubLink.addEventListener('click', (e) => { e.preventDefault(); window.open('https://github.com/Arfadh-Subhan', '_blank'); });
    
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent('Play IMPOSTER - the ultimate bluffing party game! 🎭');
    document.getElementById('shareTwitter')?.addEventListener('click', () => window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank'));
    document.getElementById('shareWhatsapp')?.addEventListener('click', () => window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, '_blank'));
    document.getElementById('shareTelegram')?.addEventListener('click', () => window.open(`https://t.me/share/url?url=${shareUrl}&text=${shareText}`, '_blank'));
}

function escapeHtml(str) { return String(str).replace(/[&<>]/g, (m) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;' }[m])); }
