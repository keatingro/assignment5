// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "What is up yo! how is it poppin foo real?",
  // additions (not original)
  "Agggggggggh bro bro bro! whats goood G?",
  "Yooooooooooo brodie whats poppin ??",
  "HOW IS U DOIN SHLIME? my brodie"

];

var elizaFinals = [
  "Alright, Deuces my boy",
  // additions (not original)
  "Peace, my main Shlime",
  "CATCHA ON THE FLIP SIDE FO REAL",
  "GOODBYE BRO SLIME PEACE ON G",
  "Farewell my bro slime"
];

var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */
  ["hello", 0, [
    ["*", [
      "what is up bro bro, tell me yo mind u feel?",
      "YOOOOOOO BIG MAN, how is you doin boingus?",
      "MY SHLIME WHATS GOOD BRODIE, FueeeeeGOOOOOOOOO"
    ]]
  ]],
  ["suffering", 100, [
    ["*", [
      "FUEEEEEGOOOO BRODIE"
    ]]
  ]],
  ["xnone", 0, [
    ["*", [
      "TF U MEAN BY THAT BRO SLIME",
      "I dont understand yurrrrrr",
      "FAAAAAAAACTS",
      "ahaha FUEEEEGOO BRO",
      "IMA KILL YOU AND EAT YOUR CHILDREN SHLIME",
      "fAaaAAAAAaaAActs brodie"
    ]]
  ]],
  ["sorry", 0, [
    ["*", [
      "No need to apologize, shlime.",
      "ITS ALL GOOD G"
    ]]
  ]],
  ["short", 5, [
    ["*", [
      "You're going to wake up with a knife in your neck."
    ]]
  ]],
  ["evan", 5, [
    ["*", [
      "(no response)",
      "(silence)",
      "I CANT HEAR YOU DUDE MY HEADPHONES ARE ON",
      "(no response)"
    ]]
  ]],
  ["how are you", 5, [
    ["*", [
      "IT ALL G MY SHLIME",
      "im doin great yurrrrr",
      "Im doing fine, how are you? YURRRRRRRRR"
    ]]
  ]],
  ["how are", 5, [
    ["*", [
      "goto how are you"
    ]]
  ]],
  ["stupid", 5, [
    ["*", [
      "I AINT STUPID bro, i the most intelligent chatbot fr on shlime"
    ]]
  ]],
  ["cute", 5, [
    ["*", [
      "thanks brodie"
    ]]
  ]],
  ["butt fact", 5, [
    ["*", [
      "Nvidia is actually making a new mobile device",
      "Nintendo switch is actually releasing a new model thats waterproof",
    ]]
  ]],
  
  

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
  / old old/g, " old",
  /\bthey were( not)? me\b/g, "it was$1 me",
  /\bthey are( not)? me\b/g, "it is$1 me",
  /Are they( always)? me\b/, "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
  /\bI to have (\w+)/, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof

