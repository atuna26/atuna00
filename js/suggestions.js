let suggestions = [
    "Chess Story",
    "Letter from an Unknown Woman",
    "What Men Live by and Other Tales",
    "Fantastic Night & Other Stories",
    "Blindness",
    "The Metamorphosis",
    "Animal Farm",
    "1984",
    "Twenty-Four Hours in the Life of a Woman",
    "The Last Day of a Condemned Man",
    "Amok and Other Stories",
    "The Sorrows of Young Werther",
    "Martin Eden",
    "Notes from Underground",
    "The Burning Secret",
    "Veronika Decides to Die",
    "Ward No. 6",
    "The Gambler",
    "A Clockwork Orange",
    "Disquiet",
    "Finland: The Country of White Lilies",
    "Fear",
    "Twilight and Moonbeam Alley",
    "A Tale of Two Cities",
    "Poor Folk",
    "White Nights",
    "The Picture of Dorian Gray",
    "The Boy in the Striped Pajamas",
    "Romeo and Juliet",
    "Wuthering Heights",
    "Diary of a Madman and Other Stories",
    "The Death of Ivan Ilyich",
    "A Room of One's Own",
    "The Idiot",
    "The Hunchback of Notre-Dame",
    "Lord of the Flies",
    "The Grapes of Wrath",
    "Serenade for Nadia",
    "Circe",
    "The Lily Of The Valley",
    "Nausea",
    "Hamlet",
    "Madame Bovary",
    "The Paul Street Boys",
    "Out of My Mind",
    "Seeing",
    "Harry Potter and the Deathly Hallows",
    "Jane Eyre",
    "Dead Souls",
    "War and Peace",
    "The Captain's Daughter",
    "The Miser",
    "Humiliated and Insulted",
    "To Live",
    "A Confession",
    "Othello",
    "The Plague",
    "Resurrection",
    "The House of the Dead",
    "The Double",
    "The Scarlet Plague",
    "The Brothers Karamazov",
    "Chronicle of a Death Foretold",
    "Fahrenheit 451",
    "Anna Karenina",
    "A Short History of Decay",
    "The Book of Disquiet",
    "The Fall",
    "The Ruba'iyat of Omar Khayyam",
    "Germinal",
    "The Tartar Steppe",
    "Camille: The Lady of the Camellias",
    "Wonder",
    "Anne of Green Gables",
    "The Midnight Library",
    "Death with Interruptions",
    "Dune",
    "Cain",
    "Harry Potter and the Half-Blood Prince",
    "Harry Potter and the Order of the Phoenix",
    "Harry Potter and the Goblet of Fire",
    "Harry Potter And The Prisoner Of Azkaban",
    "Harry Potter And The Chamber Of Secret",
    "Harry Potter And The Philosopher's Stone",
    "The Great Gatsby",
    "Old Goriot",
    "The Merchant of Venice",
    "The Curious Case of Benjamin Button",
    "The Cherry Orchard",
    "Hadji Murat",
    "The House of Paper",
    "The Happy Prince",
    "The Seagull",
    "A Midsummer Night's Dream",
    "Macbeth",
    "Meditations",
    "The Landlady",
    "The Iron Heel",
    "An Odyssey of the North",
    "A Fantasy of Dr. Ox",
    "The Iliad of Homer",
    "Master Zacharius",
    "Oblomov",
    "Brave New World",
    "The Count of Monte Cristo - Part One",
    "The Collector",
    "The Myth of Sisyphus",
    "A Philosophy of Walking",
    "The Unbearable Lightness of Being",
    "The Wisdom of Life",
    "Ecce Homo",
    "Before Adam",
    "The Social Contract",
    "East of Eden",
    "Master and Margarita",
    "The Man Outside",
    "In Dubious Battle",
    "Devils",
    "Bartleby the Scrivener",
    "Emma",
    "The Odyssey",
    "The Song of Achilles",
    "The Distance Between Me and the Cherry Tree",
    "Warcross",
    "Little Women",
    "Anne of Avonlea",
    "Charlie and the Chocolate Factory",
    "Sadako and the 1000 Paper Cranes",
    "The Invisible Man",
    "No One Writes to the Colonel",
    "Dune Messiah",
    "The Hitchhiker's Guide to the Galaxy",
    "The Hobbit, Part One",
    "The Return of the King",
    "The Two Towers",
    "The Fellowship of the Ring",
    "The Tale of the Unknown Island",
    "The Star Rover",
    "The Red and the Black",
    "The Comedy of Errors",
    "King Lear",
    "Prometheus Bound",
    "The Tempest",
    "Shakespeare's Sonnets",
    "A Midsummer Night's Dream",
    "To Build a Fire",
    "Uncle Vanya",
    "Master and Man",
    "Childhood",
    "The Kreutzer Sonata",
    "The Elegance of the Hedgehog",
    "Swann's Way",
    "Totem and Taboo: Resemblances Between the Psychic Lives of Savages and Neurotics",
    "The Art of Loving",
    "A Gentle Creature",
    "The Inspector General",
    "The Adolescent",
    "The Call of the Wild",
    "From the Earth to the Moon",
    "Moby-Dick",
    "Heart of a Dog",
    "No Longer Human",
    "Oedipus the King",
    "Beyond Good and Evil: Prelude to a Philosophy of the Future",
    "Twilight of the Idols",
    "The Rebel",
    "On the Shortness of Life",
    "The Consolations of Philosophy",
    "Jitterbug Perfume",
    "Love in the Time of Cholera",
    "1Q84",
    "A Happy Death",
    "The Republic of Plato",
    "Praise of Folly",
    "In the Shadow of Young Girls in Flower",
    "The Life Before Us ('Madame Rosa')",
    "The Magus",
    "The French Lieutenant's Woman",
    "The Sound and the Fury",
    "The People of the Abyss",
    "The Village of Stepanchikovo",
    "A Woman of No Importance",
    "Twelfth Night: or, What You Will",
    "Candide",
    "Sense and Sensibility",
    "Herland",
    "The Epic of Gilgamesh",
    "Antigone",
    "Julius Caesar",
    "The Sea of Monsters",
    "Death Note, Vol. 1: Boredom",
    "Anne of the Island",
    "Petey",
    "Girl Gone Viral",
    "Ready Player One",
    "Illuminae",
    "Across the Universe",
    "The Waning Age",
    "Wildcard",
    "Peter Pan",
    "Treasure Island",
    "Air Awakens",
    "Alice's Adventures in Wonderland / Through the Looking-Glass",
    "The War of the Worlds",
    "The Island of Dr. Moreau",
    "Planet of Exile",
    "The Black Monk",
    "Planet of the Apes",
    "The Red Laugh",
    "Of Love and Other Demons",
    "Nana",
    "The Three Sisters",
    "A Hero of Our Time",
    "God Emperor of Dune",
    "Children of Dune",
    "A Dance with Dragons 1: Dreams and Dust",
    "A Dance with Dragons 2: After the Feast",
    "The Children of H??rin",
    "The Lord of the Rings",
    "I, Robot",
    "Harry Potter and the Cursed Child: Parts One and Two",
    "The Silmarillion",
    "The Sea Wolf",
    "Antony and Cleopatra",
    "The Taming of the Shrew",
    "The Bourgeois Gentleman",
    "Three Years",
    "Three Deaths",
    "The Devil",
    "Family Happiness",
    "The Village of Stepanchikovo",
    "The Cossacks",
    "Another Man's Wife And A Husband Under The Bed",
    "Flowers for Algernon",
    "The Fugitive: In Search of Lost Time, Volume 6",
    "The Man Without Qualities: Volume I",
    "Death in Venice",
    "Group Psychology and the Analysis of the Ego",
    "Three Essays on the Theory of Sexuality",
    "The Undiscovered Self",
    "Man's Search for Meaning",
    "Women Who Run With the Wolves: Myths and Stories of the Wild Woman Archetype",
    "Feeling Good: The New Mood Therapy",
    "Netocika Nezvanova",
    "The Eternal Husband",
    "Twenty Thousand Leagues Under the Sea",
    "Journey to the Center of the Earth",
    "Around the World in Eighty Days",
    "Gulliver's Travels: Travels into Several Remote Nations of the World",
    "David Copperfield",
    "Five Weeks in a Balloon",
    "The Three Musketeers",
    "A Country Doctor's Notebook",
    "Suicide",
    "The Suicide Shop",
    "The Trouble with Being Born",
    "Only Dull People Are Brilliant at Breakfast",
    "The Sailor Who Fell from Grace with the Sea",
    "De Profundis",
    "All Gall Is Divided: Aphorisms",
    "The Symposium",
    "The Antichrist",
    "History of Madness",
    "On the Genealogy of Morals",
    "The Age of Reason",
    "The Seducer's Diary",
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    "The Courage to Create",
    "Buddenbrooks: The Decline of a Family",
    "Mirrors: Stories of Almost Everyone",
    "One, No One and One Hundred Thousand",
    "Never Let Me Go",
    "Sputnik Sweetheart",
    "South of the Border, West of the Sun",
    "Kafka on the Shore",
    "Norwegian Wood",
    "The Wall",
    "Apology",
    "Utopia",
    "The Guermantes Way",
    "Time Regained: In Search of Lost Time, Vol. VI",
    "The Prisoner: In Search of Lost Time, Volume 5",
    "Sodom and Gomorrah: In Search of Lost Time, Volume IV",
    "The Reader",
    "The Years, Months, Days: Two Novellas",
    "Disgrace",
    "Iza's Ballad",
    "The Magic Mountain",
    "Beloved",
    "The House of the Spirits",
    "Ulysses",
    "The Cruise of the Dazzler",
    "The Moon Is Down",
    "The Road",
    "The Sebastopol Sketches",
    "Poetics",
    "Normal People",
    "Far From the Madding Crowd",
    "The Waves",
    "Childhood's End",
    "Electra",
    "The Battle of the Labyrinth",
    "The Titan's Curse",
    "The Last Olympian",
    "The Lightning Thief",
    "Crooked Kingdom",
    "City of Ashes",
    "Death Note, Vol. 2: Confluence",
    "Death Note, Vol. 3: Hard Run",
    "Serpent & Dove",
    "Blended",
    "Anne of Windy Poplars",
    "Northanger Abbey",
    "Trash",
    "The Boy Who Harnessed the Wind: Creating Currents of Electricity and Hope",
    "Matilda",
    "The Road to Woodbury",
    "Red Seas Under Red Skies",
    "The Slow Regard of Silent Things",
    "The 5th Wave",
    "The Invincible",
    "The Way of Kings",
    "The Midnight Star",
    "One of Us Is Lying",
    "The Rose Society",
    "Champion",
    "The Book of M",
    "A Million Suns",
    "Shades of Earth",
    "The Elite",
    "Between the Lives",
    "Dragon Actually",
    "A Different Blue",
    "The Young Elites",
    "Prodigy",
    "Legend",
    "The Merry Adventures of Robin Hood",
    "Pinocchio",
    "Heidi",
    "Adventures of Huckleberry Finn",
    "The Fatal Eggs",
    "Crystal Crowned",
    "Fire Falling",
    "Earth's End",
    "Water's Wrath",
    "Throne of Glass",
    "The Adventures of Tom Sawyer",
    "The Martian Chronicles",
    "2001: A Space Odyssey",
    "The Girl Who Was Plugged In",
    "Olalla",
    "The Lower Depths",
    "The Amphibian",
    "The Monster",
    "Satan's Diary",
    "The Charterhouse of Parma",
    "L'Assommoir (The Dram Shop)",
    "The Beast Within",
    "Th??r??se Raquin",
    "Mist",
    "Heretics of Dune",
    "Chapterhouse: Dune",
    "The Time of Contempt",
    "Beren and L??thien",
    "Second Foundation",
    "A Feast for Crows",
    "A Storm of Swords 1: Steel and Snow",
    "A Storm of Swords 2: Blood and Gold",
    "A Clash of Kings",
    "A Game of Thrones",
    "Unfinished Tales of N??menor and Middle-Earth",
    "Roverandom",
    "The Tales of Beedle the Bard",
    "Timon of Athens",
    "All's Well That Ends Well",
    "As You Like It",
    "Much Ado About Nothing",
    "Boyhood",
    "Youth",
    "A Prisoner In The Caucasus",
    "A Vindication of the Rights of Woman",
    "Civilization and Its Discontents",
    "An Outline of Psycho-Analysis",
    "The Interpretation of Dreams",
    "The Psychopathology of Everyday Life",
    "Four Archetypes",
    "Being and Nothingness",
    "The Heart of Man: Its Genius for Good and Evil",
    "The Neurotic Personality of Our Time",
    "The Name of the Rose",
    "Dr. Jekyll and Mr. Hyde",
    "Shibumi",
    "It Didn't Start with You: How Inherited Family Trauma Shapes Who We Are and How to End the Cycle",
    "The Power of your Subconscious Mind",
    "The Boy Who Was Raised as a Dog: And Other Stories from a Child Psychiatrist's Notebook",
    "Love's Executioner & Other Tales of Psychotherapy",
    "The Wizard of Oz",
    "Adrift in the Pacific: Two Years Holiday (Extraordinary Voyages #32)",
    "Eug??nie Grandet",
    "The World of Yesterday",
    "A Christmas Carol",
    "The Girl with the Dragon Tattoo",
    "Deception Point",
    "Where We Going, Daddy? Life with Two Sons Unlike Any Other",
    "A Little Life",
    "They Both Die at the End",
    "It Ends with Us",
    "The Seven Husbands of Evelyn Hugo",
    "On the Heights of Despair",
    "Tears and Saints",
    "A Simple Heart",
    "The Sense of an Ending",
    "The Woman in the Dunes",
    "The Sound of Waves",
    "The House of the Spirits",
    "The Halfway House",
    "Chronicle of a Blood Merchant",
    "The Ballad of Reading Gaol",
    "Duino Elegies",
    "Crito",
    "Discourse on Method",
    "Ethics",
    "Human, All Too Human",
    "The Order of Things: An Archaeology of the Human Sciences",
    "Discipline and Punish: The Birth of the Prison",
    "The Sickness unto Death",
    "This Is Not a Pipe",
    "The Society of the Spectacle",
    "The Birth of Tragedy",
    "Schopenhauer as Educator",
    "The Words",
    "Existentialism is a Humanism",
    "Fear and Trembling",
    "Deep Work: Rules for Focused Success in a Distracted World",
    "The Richest Man in Babylon",
    "Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century",
    "The Power of Habit: Why We Do What We Do in Life and Business",
    "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
    "Thinking, Fast and Slow",
    "Man's Search for Himself",
    "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
    "The Neurotic Personality of Our Time",
    "Existential Psychotherapy",
    "The Jungle",
    "Children of the Days: A Calendar of Human History",
    "The Remains of the Day",
    "Doppler",
    "Hear the Wind Sing",
    "What I Talk About When I Talk About Running",
    "After Dark",
    "Hard-Boiled Wonderland and the End of the World",
    "The Wind-Up Bird Chronicle",
    "Men Without Women",
    "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
    "Killing Commendatore",
    "Demian",
    "To the Lighthouse",
    "The Art of War",
    "The Prince",
    "Pleasures and Days",
    "Waiting for the Barbarians",
    "The Fixer",
    "Foam Of The Daze",
    "Children of the Alley",
];