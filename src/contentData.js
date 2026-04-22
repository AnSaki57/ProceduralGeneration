export const contentData = [
  {
    id: 1,
    heading: "A primer: the game of Carcassonne",
    textContent: "Carcassonne is a simple tile-placement board game where players place tiles to build a medieval landscape. Each tile represents a piece of French geography, with cities, roads, monasteries, and fields. With simple placement rules, a game can lead to the creation of some uniquely beautiful terrain.",
    imageSrc: "https://i.redd.it/the-ultimate-game-of-carcassonne-v0-ckvo8sgt4kgd1.jpg?width=6936&format=pjpg&auto=webp&s=8c1499f99b4a5d3ed954c69b65e67158e650f862",
    caption: "An image of someone's enormous Carcassonne board.",
    funFacts: [
      {
        content: "\nThe carcassonne grids you see on either side of this webpage are procedurally generated, right on your device. Refresh the page, and you'll get a new pattern.",
        yAxis: "150px"
      }
    ]
  },
  {
    id: 2,
    heading: "Rules of Carcassonne",
    // imageSrc: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?auto=format&fit=crop&q=80&w=800",
    textContent: "The core mechanic of Carcassonne revolves around constraint-based placement. You cannot simply put any tile anywhere; the edges must seamlessly connect to the adjacent tiles. If a tile features a road on its left edge, it must be placed next to a tile that has a road on its right edge. This simple rule forces the players to collaborate in building a globally coherent map, mirroring the basic principles of algorithmic procedural generation.",
    // caption: "Roads must match roads, towns for towns, and grass for grass. You can place tiles only beside already placed tiles.",
    multiImages: [
      {
        src: "",
        caption: "Road-edge to road-edge",
      },
      {
        src: "",
        caption: "Grass to grass",
      },
      {
        src: "",
        caption: "Town to town",
      },
      {
        src: "",
        caption: "Watch out! This town has no defensive wall; it stretches into open grass",
      },
      {
        src: "",
        caption: "This tile matches the feature on the right, but not the one to the top of it",
      },
    ],
    funFacts: [
      {
        content: "Look again at the Carcassone grids. If on any 2 tiles meeting, you find a road abruptly ending, or a city meeting open grass without any walls, it means my algorithm has failed. \nSee if you can spot such inconsistencies!",
        yAxis: "200px"
      }
    ],
  },
  {
    id: 3,
    heading: "Random generation and Carcassonne",
    imageSrc: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    textContent: "Enter procedural generation. Why take the pain of placing each tile by hand, when a machine can do it for you?\n Select a random place to place a tile, and go through all the tiles that will match that area. Repeat this through an algorithm, and pretty soon you will get a nice board of your own!",
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
    imageSrc: "https://store-images.s-microsoft.com/image/apps.25403.9007199266261533.7a01194b-e99a-4fe6-8f1a-84cb47cf4f77.dc1106a8-72e6-416b-95da-36ee4bdee044",
    textContent: "Long before modern graphics, early developers needed ways to create replayable content without manually designing hundreds of levels. Enter Rogue and its spiritual successor, NetHack. Released in the 1980s, NetHack generates a completely new, massive dungeon every time you start a game. It uses algorithms to dynamically carve out rooms, connect them with corridors, and scatter loot and monsters, ensuring no two runs are ever the same.",
    caption: "Nethack being played on an emulator. The '@' sign represents the player.",
  },
  {
    id: 5,
    heading: "Nethack's procedural generation system",
    imageSrc: "https://i.imgur.com/fRFKp6N.gif",
    textContent: "NetHack's level generation relies on a technique called 'BSP' (Binary Space Partitioning) or simple room-and-corridor carving. The algorithm divides the grid into smaller sub-regions, places a rectangular room of random dimensions inside each region, and finally uses pathfinding to draw corridors connecting them. This guarantees the dungeon is both randomized and fully traversable.",
    caption: "A simple dungeon layout being built by an algorithm",
  },
  {
    id: 6,
    heading: "Dwarf Fortress: the world's most complex game",
    imageSrc: "https://uploads.golmedia.net/uploads/articles/article_media/20514821711706612753gol1.jpg",
    textContent: "If NetHack laid the groundwork, Dwarf Fortress took procedural generation to its absolute extreme. Tarn Adams' masterpiece doesn't just generate a map; it generates an entire living world. From the geological strata deep underground to the intricate ecosystems of underground flora and fauna, the algorithm simulates millions of years of geological and ecological history before you even spawn your first dwarf.",
    caption: "A 'cavern' in Dwarf Fortress. Almost everything that you see is procedurally generated: the walls of the cave, the trees, the mushrooms.. even the water level is procedurally generated beforehand. Only the Dwarven rooms are made by the player.",
  },
  {
    id: 7,
    heading: "Perlin noise: Procedural generation in DwarFort's 3D world",
    imageSrc: "https://preview.redd.it/my-most-interesting-worldgen-on-steam-yet-v0-wo7h2ve7p48a1.jpg?auto=webp&s=02b11b2c3fd04d4b52a60c45648e345619e41674",
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
    heading: "Growth of an L-system",
    textContent: "An L-system starts with an initial string (the 'axiom') and a set of production rules. For example, a simple rule might be: 'Replace every straight branch with a branch that splits into two smaller branches'. \n\nScroll through the following images to see how this simple recursive rule produces geometric complexity that mimics real saplings.",
    multiImages: [
      {
        src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
        caption: "Iteration 1: A single line becomes a simple Y-shape. Each branch spawns two children branches at +/- 45deg angles."
      },
      {
        src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200",
        caption: "Iteration 3: The rule is applied recursively. The ends of the 'Y' spawn their own smaller Y-shapes, increasing self-similarity."
      },
      {
        src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200",
        caption: "Iteration 7: After just a handful of repetitions, the character string translates into a highly detailed, sprawling 3D tree."
      }
    ]
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
    heading: "Procedural Generation and modern games",
    textContent: "Games nowadays use procedural generation extensively. Take a look at some of the techniques used in some of the most popular games currently available.",
    imageSrc: "",
  },
  {
    id: 19,
    isGameGrid: true,
    games: [
      {
        heading: "Minecraft",
        initialImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
        initialText: "The most famous application of procedural generation. It combines Perlin noise for terrain with complex algorithms for biomes and villages.",
        hoverHeading: "Emergent Ecosystems",
        hoverText: "Minecraft evaluates 'temperature' and 'humidity' maps independently. This intersection creates coherent biomes like deserts and snowy tundras."
      },
      {
        heading: "No Man's Sky",
        initialImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        initialText: "Scaling procedural generation to 18 quintillion planets using a single deterministic seed to define an entire galaxy.",
        hoverHeading: "Alien Biology",
        hoverText: "Creatures are assembled by taking base skeletons and procedurally attaching heads, limbs, and tails based on the planetary seed."
      },
      {
        heading: "Terraria",
        initialImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
        initialText: "A 2D perspective where world generation happens in distinct 'passes'—shaping dirt, carving caves, and populating ores.",
        hoverHeading: "The Multi-Pass Approach",
        hoverText: "The algorithm ensures strict gameplay requirements, like placing Corruption biomes safely away from the player's spawn point."
      },
      {
        heading: "Stardew Valley",
        initialImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1506452815076-2e50cf60411a?auto=format&fit=crop&q=80&w=800",
        initialText: "Combines hand-crafted charm with procedurally generated mines that refresh layouts, rocks, and enemies every single day.",
        hoverHeading: "Infinite Extensibility",
        hoverText: "Because systems rely on rules, modders can easily inject new room templates and monster logic to create thousands of layouts."
      }
    ]
  },
  {
    id: 26,
    heading: "World generation in DwarFort: Civilisations",
    imageSrc: "https://dwarffortresswiki.org/images/a/a5/BasicWorldGen.png",
    textContent: "Procedural generation isn't just for geometry. In Dwarf Fortress, after the physical world is created, the game simulates the passage of time. It spawns historical figures with personality traits, simulates their migrations, tracks their battles, records their marriages, and logs the artifacts they forge. It literally generates the sociopolitical history of a fantasy world.",
    caption: "The world creation menu. You can generate a thousand years of history simulating hundreds of empires, nations, societies, and tribes with enough lore to fill a real-life novel. All of this is procedurally generated, down to the smallest phrase or historical event.",
  },
  {
    id: 27,
    heading: "World generation in DwarFort: Stories and Histories",
    imageSrc: "http://dfst.ru/images/stories/1340788399_rbemtkyvftqvfpsgzdpttmpymebyqgkugbaugegcufsvbokrqv.png",
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