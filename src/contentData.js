import RoadRoad from './assets/imgs/RoadRoad.png';
import GrassGrass from './assets/imgs/GrassGrass.png';
import TownTown from './assets/imgs/TownTown.png';
import HalfMatch from './assets/imgs/HalfMatch.png';
import OpenTown from './assets/imgs/OpenTown.png';
import TownSimResch from './assets/imgs/TownSimResch.png';

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
    textContent: "The core mechanic of Carcassonne revolves around constraint-based placement. You cannot simply put any tile anywhere; the edges must seamlessly connect to the adjacent tiles. If a tile features a road on its left edge, it must be placed next to a tile that has a road on its right edge. This simple rule forces the players to collaborate in building a globally coherent map, mirroring the basic principles of algorithmic procedural generation.",
    multiImages: [
      {
        src: RoadRoad,
        caption: "Road-edge to road-edge",
      },
      {
        src: GrassGrass,
        caption: "Grass to grass",
      },
      {
        src: TownTown,
        caption: "Town to town",
      },
      {
        src: OpenTown,
        caption: "Watch out! This town in the middle has no defensive wall; it stretches into open grass",
      },
      {
        src: HalfMatch,
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
    imageSrc: "https://i0.wp.com/www.myboardgameguides.com/wp-content/uploads/2024/04/Carcassonne-Block2.jpg?ssl=1",
    textContent: "Enter procedural generation. Why take the pain of placing each tile by hand, when a machine can do it for you?\n Select a random place to place a tile, and go through all the tiles that will match that area. Repeat this through an algorithm, and pretty soon you will get a nice board of your own!",
    caption: "Note that in the following empty space, there are multiple types of tiles that could be placed legally. However, among the 4, only the highlighted tile is the correct choice.",
    // funFacts: [
    //   {
    //     content: "We've had one fun fact, all right.",
    //     yAxis: "300px"
    //   },
    //   {
    //     content: "What about second fun fact?",
    //     yAxis: "600px"
    //   }
    // ],
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
    textContent: "Perlin noise is a type of gradient noise. Instead of returning completely independent random values for every coordinate (which results in harsh, jagged static), it calculates smooth transitions between random gradients. This means that points close to each other will have similar values, creating natural-looking continuous curves.",
    multiImages: [
      {
        src: "https://digitalfreepen.com/images/2017/whitenoise.png",
        caption: "Random b/w white noise. This is widely used as the starting point in techniques like Perlin Noise.",
      },
      {
        src: "https://miro.medium.com/v2/resize:fit:4096/1*vs239SecVBaB4HvLsZ8O5Q.png",
        caption: "A b/w simulation of perlin noise. Notice how the darker regions overlap smoothly with the lighter regions",
      },
      {
        src: "https://i.sstatic.net/OBLSB.png",
        caption: "Mountains and valleys generated by Perlin noise. Larger values at certain points are converted into greater heights, and vice versa.",
      },
    ]
  },
  {
    id: 9,
    heading: "Trees in computer graphics: introducing L-systems",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dragon_trees.jpg",
    textContent: "While Perlin Noise is perfect for terrain, it struggles to generate structured, branching objects like plants and trees. For botany, we turn to Lindenmayer systems (L-systems), a formal grammar introduced in 1968 by biologist Aristid Lindenmayer. L-systems model the growth processes of plant development using recursive string rewriting.",
    caption: "Some organic-looking trees generated from different L-system rules",
  },
  {
    id: 10,
    heading: "",
    imageSrc: "https://josauder.github.io/procedural_city_generation/_images/splitup.png",
    textContent: "Beyond just generating beautiful forests, L-systems are incredibly versatile. Because they excel at modeling branching structures, developers use variations of L-systems to procedurally generate city street networks, vascular systems, river tributaries, and even complex architectural fractals.",
    caption: "Procedural road networks simulating organic city growth. City blocks are highlighted in multicolour."
  },
  {
    id: 11,
    heading: "",
    textContent: "",
    imageSrc: "https://miro.medium.com/v2/resize:fit:1400/0*04dqfSuaHj6E8mNH.gif",
    caption: "A more abstract algorithm that grows like a city or a plague on a 2D square grid",
  },
  {
    id: 12,
    heading: "Growth of an L-system",
    textContent: "An L-system starts with an initial string (the 'axiom') and a set of production rules. For example, a simple rule might be: 'Replace every straight branch with a branch that splits into two smaller branches'. \n\nScroll through the following images to see how this simple recursive rule produces geometric complexity that mimics real saplings.",
    multiImages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Graftal0.png/250px-Graftal0.png",
        caption: "Iteration 1: We start off with a small stem...",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Graftal1.png/250px-Graftal1.png",
        caption: "Iteration 2: A single line becomes a simple Y-shape. Each branch spawns two children branches at +/- 45deg angles."
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Graftal2.png/250px-Graftal2.png",
        caption: "Iteration 3: The rule is applied recursively. The ends of the 'Y' spawn their own smaller Y-shapes, increasing self-similarity."
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Graftal3.png/250px-Graftal3.png",
        caption: "Iteration 4: Another rule.",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Graftal7.png/250px-Graftal7.png",
        caption: "Iteration 7: After just a handful of repetitions, the character string translates into a highly detailed, sprawling tree."
      },
      {
        src: "https://cgjennings.ca/articles/l-systems/y-tree.png",
        caption: "You can take it as long as you want, and get a full-on fractal!",
      },
    ]
  },
  {
    id: 13,
    heading: "Cellular Automata in Cave Generation",
    imageSrc: "https://www.jeremykun.com/img/2012/caveexample1.gif",
    textContent: "Another fascinating technique is Cellular Automata. Originally popularized by Conway's Game of Life, developers have repurposed it to generate organic-looking cave systems. By starting with a grid of random noise and applying a rule like 'if a cell is surrounded by walls, it becomes a wall', the noise beautifully coalesces into smooth cavernous structures after a few smoothing steps.",
    caption: "A grid showing cave generation using cellular automata. Applying simple rules on the grid can give rise to complex, emergent (oftentimes chaotic) patterns like this"
  },
  {
    id: 14,
    heading: "Cellular automata: complexity from simplicity",
    imageSrc: "https://cdn.sanity.io/images/vgvol637/production/a0ed9ad54b55c627900a60f2285f2ba97df23c56-4250x2750.png?w=800",
    textContent: "The beauty of Cellular Automata lies in its emergent complexity. You don't program the final shape of the cave; you only program the localized rules for how a single square behaves based on its immediate neighbors. This localized simplicity scales up to create macro-structures that feel incredibly natural and remarkably complex.",
    caption: "Complex evolution of a system derived from 8 simple rules. The ruleset takes up just 3 bytes (0.003KB) and yet results in this chaotic pattern that's hard to predict.",
  },
  {
    id: 15,
    heading: "Procedural Generation and modern games",
    textContent: "Games nowadays use procedural generation extensively. Take a look at some of the techniques used in some of the most popular games currently available.",
    imageSrc: "",
  },
  {
    id: 16,
    isGameGrid: true,
    games: [
      {
        heading: "Minecraft",
        initialImage: "https://external-preview.redd.it/taking-procedural-world-generation-to-the-next-level-v0-j97nA3LzIbIStR-aFBvBtZ1QrgJ9EFFUaEpKMXklli0.jpg?auto=webp&s=e71cda3a0e287321cb5cdea592669c2a5502f04a",
        hoverImage: "https://substackcdn.com/image/fetch/$s_!pH9J!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d267e61-1367-4eb7-aa81-50ff3dad3e82_760x547.png",
        initialText: "The most famous application of procedural generation. It combines Perlin noise for terrain with complex algorithms for biomes and villages.",
        hoverHeading: "Emergent Ecosystems",
        hoverText: "Minecraft evaluates 'temperature' and 'humidity' maps independently. This intersection creates coherent biomes like deserts and snowy tundras."
      },
      {
        heading: "No Man's Sky",
        initialImage: "https://media.telefonicatech.com/telefonicatech/uploads/2021/1/153770_no-mans-sky-videogame.jpg",
        hoverImage: "https://www.rollingstone.com/wp-content/uploads/2018/06/no-mans-land-82d7c41c-9669-4b88-888b-04cc73105069.jpg",
        initialText: "Scaling procedural generation to 18 quintillion planets using a single deterministic seed to define an entire galaxy.",
        hoverHeading: "Alien Biology",
        hoverText: "Creatures are assembled by taking base skeletons and procedurally attaching heads, limbs, and tails based on the planetary seed."
      },
      {
        heading: "Terraria",
        initialImage: "https://i.redd.it/p0t8f4d56m051.png",
        hoverImage: "https://forum.godotengine.org/uploads/default/original/2X/0/082ddef006d8bf46480ed47dc81a0ae7bbc4c958.png",
        initialText: "A 2D perspective where world generation happens in distinct 'passes'—shaping dirt, carving caves, and populating ores.",
        hoverHeading: "The Multi-Pass Approach",
        hoverText: "The algorithm ensures strict gameplay requirements, like placing Corruption biomes safely away from the player's spawn point."
      },
      {
        heading: "Stardew Valley",
        initialImage: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/stardew-valley/1/1f/Skull_Cavern.png",
        hoverImage: "https://i.ytimg.com/vi/zAH-A418Hl8/maxresdefault.jpg",
        initialText: "Combines hand-crafted charm with procedurally generated mines that refresh layouts, rocks, and enemies every single day.",
        hoverHeading: "Infinite Extensibility",
        hoverText: "Because systems rely on rules, modders can easily inject new room templates and monster logic to create thousands of layouts."
      }
    ]
  },
  {
    id: 17,
    heading: "World generation in DwarFort: Civilisations",
    imageSrc: "https://dwarffortresswiki.org/images/a/a5/BasicWorldGen.png",
    textContent: "Procedural generation isn't just for geometry. In Dwarf Fortress, after the physical world is created, the game simulates the passage of time. It spawns historical figures with personality traits, simulates their migrations, tracks their battles, records their marriages, and logs the artifacts they forge. It literally generates the sociopolitical history of a fantasy world.",
    caption: "The world creation menu. You can generate a thousand years of history simulating hundreds of empires, nations, societies, and tribes with enough lore to fill a real-life novel. All of this is procedurally generated, down to the smallest phrase or historical event.",
  },
  {
    id: 18,
    heading: "World generation in DwarFort: Stories and Histories",
    textContent: "Because all these generated elements interlock—the dwarf, the artifact, the monster that stole it, the cave where it hides—the game acts as an endless story engine. Players aren't just reading a pre-written script; they are navigating a dynamic narrative web woven entirely by mathematical algorithms.",
    multiImages: [
      {
        src: "http://dfst.ru/images/stories/1340788399_rbemtkyvftqvfpsgzdpttmpymebyqgkugbaugegcufsvbokrqv.png",
        caption: "A long, complex gameplay-story that has clearly been going on for some time.",
      },
      {
        src: "https://fivegallonideas.com/wp-content/uploads/sites/2/2013/04/timdenee_oilfurnace_3.jpg",
        caption: "An infographic made by someone about the story of a Dwarven fortress called OilFurnace (the name is procedurally generated!)",
      },
    ],
    imageSrc: "http://dfst.ru/images/stories/1340788399_rbemtkyvftqvfpsgzdpttmpymebyqgkugbaugegcufsvbokrqv.png",
    caption: "A long, complex gameplay-story that has clearly been going on for some time.",
  },
  {
    id: 19,
    heading: "Beyond gaming: A society simulation",
    imageSrc: TownSimResch,
    textContent: "These techniques are now stepping out of entertainment and into academia. Modern sociologists and economists use complex procedural simulations, similar to those in Dwarf Fortress, to model everything from traffic flow and disease spread to the emergent behavior of automated stock market trading bots. The game engines of today are becoming the predictive models of tomorrow.",
    caption: "The framework for the society simulator discussed in the paper.",
  },
  {
    id: 20,
    heading: "To summarise..",
    textContent: "Procedural generation fundamentally changes how we create digital content. It shifts the role of the creator from 'architect' to 'god'. Instead of meticulously placing every single brick, the designer writes the rules of physics, plants a seed, and watches an entire universe grow on its own.",
    imageSrc: "https://pbs.twimg.com/media/EmbK4CmU4AE00rF?format=jpg&name=small",
    caption: "A cool-looking dungeon algorithm someone made on Twitter.",
  },
  {
    id: 21,
    heading: "In conclusion..",
    textContent: "As computing power increases, the algorithms driving these generations will only become more sophisticated. From creating endless galaxies in video games to modeling the complex webs of human society, procedural generation stands as one of the most powerful intersections between pure mathematics and boundless creativity.",
    imageSrc: "https://cdn.matthewjamestaylor.com/img/kidney-shaped-tree-fractal.jpg",
    caption: "An interesting tree made from an L-system",
  },
];