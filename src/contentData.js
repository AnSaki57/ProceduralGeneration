export const contentData = [
  {
    id: 1,
    heading: "A primer: the game of Carcassonne",
    imageSrc: "https://images.unsplash.com/photo-1611891487122-207579d67d98?auto=format&fit=crop&q=80&w=800",
    textContent: "Carcassonne is a classic tile-placement board game where players draw and place tiles to build a medieval landscape. Each tile represents a piece of southern French geography, complete with cities, roads, cloisters, and fields. The elegance of Carcassonne lies in how complex, organic, and entirely unique maps emerge from simple placement rules.",
    caption: "An image of someone's Carcassonne board.",
    funFacts: [
      {
        content: "\nThe carcassonne grids you see on either side of this webpage are procedurally generated, right on your device.",
        yAxis: "150px"
      }
    ]
  },
  {
    id: 2,
    heading: "Rules of Carcassonne",
    imageSrc: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?auto=format&fit=crop&q=80&w=800",
    textContent: "The core mechanic of Carcassonne revolves around constraint-based placement. You cannot simply put any tile anywhere; the edges must seamlessly connect to the adjacent tiles. If a tile features a road on its left edge, it must be placed next to a tile that has a road on its right edge. This simple rule forces the players to collaborate in building a globally coherent map, mirroring the basic principles of algorithmic procedural generation.",
    caption: "Roads must match roads, towns for towns, and grass for grass. You can place tiles only beside already placed tiles.",
    funFacts: [
      {
        content: "Look again at the Carcassone grids. If on any 2 tiles meeting, you find a road abruptly ending, or a city meeting open grass without any walls, it means my algorithm has failed. See if you can spot such inconsistencies!",
        yAxis: "500px"
      }
    ]
  },
  {
    id: 3,
    heading: "Random generation and Carcassonne",
    imageSrc: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    textContent: "When we automate the placement of these tiles using software, we enter the realm of procedural generation. An algorithm can quickly scan the board, determine all legal moves for a given coordinate by checking its neighbors, and randomly select a valid tile from the pool. While random, the output is constrained by the ruleset, creating layouts that are chaotic yet structurally sound.",
    caption: "Note that in the following empty space, there are multiple types of tiles that could be placed legally.",
    funFacts: [
      {
        content: "We've had one fun fact, all right.",
        yAxis: "300px"
      },
      {
        content: "What about second fun fact?",
        yAxis: "600px"
      }
    ]
  },
  {
    id: 4,
    heading: "Nethack: the first \"Procedurally Generated\" Game",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    textContent: "Long before modern graphics, early developers needed ways to create replayable content without manually designing hundreds of levels. Enter Rogue and its spiritual successor, NetHack. Released in the 1980s, NetHack generates a completely new, massive dungeon every time you start a game. It uses algorithms to dynamically carve out rooms, connect them with corridors, and scatter loot and monsters, ensuring no two runs are ever the same.",
    caption: "Nethack being played on a terminal. The '@' sign represents the player.",
  },
  {
    id: 5,
    heading: "Nethack's procedural generation system",
    imageSrc: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800",
    textContent: "NetHack's level generation relies on a technique called 'BSP' (Binary Space Partitioning) or simple room-and-corridor carving. The algorithm divides the grid into smaller sub-regions, places a rectangular room of random dimensions inside each region, and finally uses pathfinding to draw corridors connecting them. This guarantees the dungeon is both randomized and fully traversable.",
    caption: "A simple dungeon layout",
  },
  {
    id: 6,
    heading: "Dwarf Fortress: the world's most complex game",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    textContent: "If NetHack laid the groundwork, Dwarf Fortress took procedural generation to its absolute extreme. Tarn Adams' masterpiece doesn't just generate a map; it generates an entire living world. From the geological strata deep underground to the intricate ecosystems of underground flora and fauna, the algorithm simulates millions of years of geological and ecological history before you even spawn your first dwarf.",
    caption: "A 'cavern' in Dwarf Fortress. Almost everything that you see is procedurally generated: the walls of the cave, the trees, the mushrooms.. even the water level is procedurally generated beforehand. Only the Dwarven rooms are made by the player.",
  },
  {
    id: 7,
    heading: "Perlin noise: Procedural generation in DwarFort's 3D world",
    imageSrc: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    textContent: "To create realistic natural landscapes, simple randomness isn't enough. Pure randomness looks like TV static. To generate the sweeping continents, oceans, and mountain ranges of Dwarf Fortress, the game relies heavily on gradient noise functions, the most famous of which is Perlin Noise, developed by Ken Perlin in 1983.",
    caption: "A randomly-generated world in Dwarf Fortress. The shape of this continent (and the islands beside it) are all generated through complex geometric functions that control properties like size, shape, roughness, texture (grasslands, mountains, rivers), and so much more.",
  },
  {
    id: 8,
    heading: "What can Perlin Noise do?",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    textContent: "Perlin noise is a type of gradient noise. Instead of returning completely independent random values for every coordinate (which results in harsh, jagged static), it calculates smooth transitions between random gradients. This means that points close to each other will have similar values, creating natural-looking continuous curves.",
    caption: "Random b/w white noise. This is widely used as the starting point in techniques like Perlin Noise.",
  },
  {
    id: 9,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=800",
    textContent: "By sampling this noise across two dimensions, we obtain a grayscale heightmap. The smooth, cloud-like transitions of the noise represent gradual changes in altitude, temperature, or moisture. It completely solves the problem of generating coherent organic terrain that looks like it belongs in nature.",
    caption: "A b/w simulation of perlin noise. Notice how the darker regions overlap smoothly with the lighter regions",
  },
  {
    id: 10,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=800",
    textContent: "When this 2D heightmap is translated into 3D geometry, the magic happens. The white spots peak into snowy mountaintops, the dark spots sink into deep ocean trenches, and the grey regions slope into rolling hills and plains. Layering multiple frequencies of noise (called 'octaves') allows developers to add both large-scale continents and fine-grained rocky details.",
    caption: "Mountains and valleys generated by Perlin noise. Larger values at certain points are converted into greater heights, and vice versa.",
  },
  {
    id: 11,
    heading: "Trees in computer graphics: introducing L-systems",
    imageSrc: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
    textContent: "While Perlin Noise is perfect for terrain, it struggles to generate structured, branching objects like plants and trees. For botany, we turn to Lindenmayer systems (L-systems), a formal grammar introduced in 1968 by biologist Aristid Lindenmayer. L-systems model the growth processes of plant development using recursive string rewriting.",
    caption: "Some organic-looking trees generated from different L-system rules",
  },
  {
    id: 12,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800",
    textContent: "Beyond just generating beautiful forests, L-systems are incredibly versatile. Because they excel at modeling branching structures, developers use variations of L-systems to procedurally generate city street networks, vascular systems, river tributaries, and even complex architectural fractals.",
    caption: "Procedural road networks simulating organic city growth."
  },
  {
    id: 13,
    heading: "Rules of a simple L-system",
    imageSrc: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800",
    textContent: "An L-system starts with an initial string (the 'axiom') and a set of production rules. For example, a simple rule might be: 'Replace every straight branch with a branch that splits into two smaller branches'. In the first iteration, a single line becomes a Y-shape.",
    caption: "A simple stem with 2 branches and 4 sub-branches. Each branch spawns two children branches at +45deg and -45deg angles to the main, with half the length of the parent.",
  },
  {
    id: 14,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800",
    textContent: "When the rule is applied recursively to the new string, the ends of the 'Y' spawn their own smaller Y-shapes. This iterative expansion quickly produces geometrically complex, self-similar fractals that mathematically mimic how a real sapling sprouts its offshoots.",
    caption: "Continuation of the pattern to another level",
  },
  {
    id: 15,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
    textContent: "After just a handful of iterations (usually around 5 to 7), the simple character string translates into a highly detailed, sprawling 3D tree. By slightly randomizing the angles and lengths during rendering, developers can spawn entire forests where no two trees are exactly alike, despite following the exact same genetic rule.",
    caption: "7 Levels of the fractal-like tree",
  },
  {
    id: 16,
    heading: "Cellular Automata in Cave Generation",
    imageSrc: "https://images.unsplash.com/photo-1498637841888-108c6b723fcb?auto=format&fit=crop&q=80&w=800",
    textContent: "Another fascinating technique is Cellular Automata. Originally popularized by Conway's Game of Life, developers have repurposed it to generate organic-looking cave systems. By starting with a grid of random noise and applying a rule like 'if a cell is surrounded by walls, it becomes a wall', the noise beautifully coalesces into smooth cavernous structures after a few smoothing steps.",
    caption: "A grid showing cave generation using cellular automata."
  },
  {
    id: 17,
    heading: "Cellular automata: complexity from simplicity",
    imageSrc: "https://images.unsplash.com/photo-1633511090164-b4bf7db1c305?auto=format&fit=crop&q=80&w=800",
    textContent: "The beauty of Cellular Automata lies in its emergent complexity. You don't program the final shape of the cave; you only program the localized rules for how a single square behaves based on its immediate neighbors. This localized simplicity scales up to create macro-structures that feel incredibly natural and remarkably complex.",
    caption: "Complex evolution of a system derived from 8 simple rules. The ruleset takes up just 3 bytes (0.003KB) and yet results in this chaotic pattern that's hard to predict.",
  },
  {
    id: 18,
    heading: "Procedural Generation in media: Minecraft",
    imageSrc: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800",
    textContent: "Minecraft is arguably the most famous application of procedural generation in history. It combines 3D Perlin noise for terrain height, biome temperature/moisture maps to determine surface blocks, and structured algorithms for spawning villages, trees, and strongholds. The result is a practically infinite sandbox that feels meticulously hand-crafted.",
    caption: "A standard scenery from Minecraft. Even the placement of the houses in the village (and the village on the map) is decided at random by the machine, but following some base rules. Except the blue sky, everything you see is procedurally generated.",
  },
  {
    id: 19,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
    textContent: "To ensure the world makes logical sense, Minecraft uses a multi-layered procedural approach. It evaluates 'temperature' and 'humidity' noise maps independently. Where high temperature overlaps with low humidity, a desert biome spawns. Where temperature is low, snow falls. This intersection of different procedural systems creates emergent ecological storytelling.",
    caption: "A top view of some Minecraft terrain. The procedural generation engine makes sure biomes are internally consistent",
  },
  {
    id: 20,
    heading: "Procedural Generation in media: No man's sky",
    imageSrc: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800",
    textContent: "No Man's Sky scaled procedural generation to an unprecedented galactic level. Instead of generating one world, its algorithm generates a universe of 18 quintillion planets. The game relies on a single deterministic seed, meaning the mathematics dictate exactly where every star is, and exactly what its planets look like, without storing any of it on a hard drive.",
    caption: "A poster for the game",
  },
  {
    id: 21,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    textContent: "Everything from the terrain, the sky color, the weather patterns, and the alien creatures are mathematically constructed. The creatures are assembled by taking base skeletal models and procedurally attaching different heads, limbs, and tails based on the planetary seed, resulting in an endless variety of bizarre alien life.",
    caption: "A bunch of biomes you could end up encountering in the various planets of the game",
  },
  {
    id: 22,
    heading: "Procedural Generation in media: Terraria",
    imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    textContent: "Terraria applies these concepts to a 2D side-scrolling perspective. Its world generation happens entirely during the loading screen before a new game begins. It runs through multiple distinct 'passes'—first shaping the dirt, then carving the caves, then populating ores, and finally decorating the surface with flora and fauna.",
    caption: "Some of the procedurally generated terrain of Terraria. The trees are intelligently spawned where there is greater incidence of sunlight.",
  },
  {
    id: 23,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    textContent: "This multi-pass approach allows the algorithm to ensure strict gameplay requirements are met. It checks that enough essential resources have spawned, ensures that the Corruption/Crimson biomes are placed securely away from the player's starting spawn, and constructs the sprawling underground jungle with deliberate boundaries.",
    caption: "A very zoomed-out image of a randomly-generated world in Terraria. Some features are chosen quite deliberately, like the diagonal bands of biomes in the middle, and the line of magma underneath. Some other features are more random, like the numerous spots in every biome where a second biome appears.",
  },
  {
    id: 24,
    heading: "Procedural Generation in media: Stardew valley",
    imageSrc: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    textContent: "Even largely hand-crafted games lean on procedural generation for endless replayability. In Stardew Valley, the main town is meticulously hand-drawn, but the dangerous mines are procedurally generated each day. The algorithm drops rocks, ores, and enemies into a preset room template, providing a fresh layout every time the player descends.",
    caption: "A cave in Stardew Valley. Even such a hand-crafted world generates the cave rocks at random - simply because the human effort is not worth it.",
  },
  {
    id: 25,
    heading: "",
    imageSrc: "https://images.unsplash.com/photo-1506452815076-2e50cf60411a?auto=format&fit=crop&q=80&w=800",
    textContent: "Because procedural systems rely on rules rather than static assets, they are highly extensible. Modders can easily inject new room templates, new ore types, or new monster spawn logic into the generator, instantly creating thousands of new possible floor layouts without drawing them by hand.",
    caption: "This expansion mod would not have been possible without procedural generation.",
  },
  {
    id: 26,
    heading: "World generation in DwarFort: Civilisations",
    imageSrc: "https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?auto=format&fit=crop&q=80&w=800",
    textContent: "Procedural generation isn't just for geometry. In Dwarf Fortress, after the physical world is created, the game simulates the passage of time. It spawns historical figures with personality traits, simulates their migrations, tracks their battles, records their marriages, and logs the artifacts they forge. It literally generates the sociopolitical history of a fantasy world.",
    caption: "The world creation menu. You can generate a thousand years of history simulating hundreds of empires, nations, societies, and tribes with enough lore to fill a real-life novel. All of this is procedurally generated, down to the smallest phrase or historical event.",
  },
  {
    id: 27,
    heading: "World generation in DwarFort: Stories and Histories",
    imageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80&w=800",
    textContent: "Because all these generated elements interlock—the dwarf, the artifact, the monster that stole it, the cave where it hides—the game acts as an endless story engine. Players aren't just reading a pre-written script; they are navigating a dynamic narrative web woven entirely by mathematical algorithms.",
    caption: "A long, complex gameplay-story that has clearly been going on for some time.",
  },
  {
    id: 28,
    heading: "Beyond gaming: A society simulation",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    textContent: "These techniques are now stepping out of entertainment and into academia. Modern sociologists and economists use complex procedural simulations, similar to those in Dwarf Fortress, to model everything from traffic flow and disease spread to the emergent behavior of automated stock market trading bots. The game engines of today are becoming the predictive models of tomorrow.",
    caption: "The framework for the society simulator discussed in the paper.",
  },
  {
    id: 29,
    heading: "To summarise..",
    imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    textContent: "Procedural generation fundamentally changes how we create digital content. It shifts the role of the creator from 'architect' to 'god'. Instead of meticulously placing every single brick, the designer writes the rules of physics, plants a seed, and watches an entire universe grow on its own.",
    caption: "",
  },
  {
    id: 30,
    heading: "In conclusion..",
    imageSrc: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    textContent: "As computing power increases, the algorithms driving these generations will only become more sophisticated. From creating endless galaxies in video games to modeling the complex webs of human society, procedural generation stands as one of the most powerful intersections between pure mathematics and boundless creativity.",
    caption: "",
  },
];