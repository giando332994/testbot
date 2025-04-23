require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Predefined responses based on keywords
const responses = [
  {
    keywords: ['legitbot'],
    replies: [
      "DayshaChad only quotes what Daysha (or her alts) says.\nNever doubt Daysha, she is always right"
    ]
  },
  {
    keywords: ['evil', 'man', 'phone'],
    replies: [
      "The evil man is here we can't be on our phone e allot"
    ]
  },
  {
    keywords: ['favorite'],
    replies: [
      "Nut sure this is. Good time for u to talk dfavorite"
    ]
  },
  {
    keywords: ['ALOOO', 'ALOO', 'ALOOOO', 'ALO', 'alo'],
    replies: [
      "ALLOOOO WAIT….is that the real selena Gomez ?"
    ]
  },
  {
    keywords: ['drift', 'weout'],
    replies: [
      "https://tenor.com/view/drift-manga-gif-26009542",
      "https://tenor.com/view/car-gif-19988492",
      "https://tenor.com/view/cat-drifting-tokyo-drift-gif-11256908757614838093",
      "https://tenor.com/view/toyota-corolla-drifting-drift-japanese-cars-toyota-gif-23514049",
      "https://tenor.com/view/hajwala-saudi-drift-camry-gif-15527164969986384869",
      "https://tenor.com/view/drift-drifting-tandem-tandem-drift-car-gif-26702086"
    ]
  },
  {
    keywords: ['conspiracy', 'conspiracy theory'],
    replies: [
      "THATS ON EVERYTHINGBHERE IS LAB CREATED ALLOOOOOOOO LIKE THE FRIES THE BREAD EVERYTHING    THEY TRY TO KILL US    ERRRRRRR DAYYYYY",
      "They wipe the dates off milk and re stamps them lol",
      "The adrenochrome guggle pizzagate",
      "Cuz these cold in Ohio that the drones brought are colliding with everyone,     Well I\'m. Not a boomer",
      "The recent surge in mysterious drone sightings across the United States has sparked a resurgence of the Project Blue Beam conspiracy theory, which claims the global elites plan to fake an alien invasion",
      "And just a confession daysha will stop with the long conspiracy theories I maybe offended some people I\'m sorry . I may have very strong feelings about that",
      "i was joking nut sure what an astronaugt gets for his fake work",
      "mRNA instructs cells to its messenger …. .to change I have to get the wording of you know how cells work and messenger cells it makes sense I\'m not a rocket science or biologist but it changes … I guggle the correct term think the people passing away has to to do with the mRNA making wayyyyyy too many of these proteins",
      "Because since then it changed their cells dna 🧬 op op op so many people are dragging this week the en if this year would be 5 years they claim lots of people would pass away within 5 years of getting that first thing … :Sadge coworkers mom died and she wasn\'t even sick last week and regional manager also his mom passed away (the one I emailed) he\'s out on bereavement…. PepeHands",
      "Yallll there is more conspiracies Remener the sex traffic  tunnels and the government Making the weather one what\'s the aporoveiation ?",
      "And the airplanes ✈️ that do chemtrails trigger storms … they have admitted to that",
      "And the creating of the pandemic ,, .,.... to make this money because he told them thats is how you control population by creating a pandemis .. before covid we were almost at the peak of what the population should be or something like that ,,,,, it was yuuge and they needed to control population again..... that is why every 14 years or so there is some ridiculous pandemic or like black plauge to control this",
      "Cuz they putting zip ties on tires and when u go to cut them off  they have fentanyl on them",
      "Wait did we ever post Hillary transporting the kids in those huge train cars and they are stuck in there in Canada 🇨🇦\n And now everyone posting that they are screaming"
    ]
  },
  {
    keywords: ['wine', 'mean', 'share'],
    replies: [
      "We share our wine with u and u still mean 🤣 geezeeeee"
    ]
  },
  {
    keywords: ['breakfast', 'sausage'],
    replies: [
      "2 bites I\'m full nope 👎 potatoes will wait 😂",
      "I do t like sweets and meat for breakfast unlesss the sausage accidentally gets in syrup 😂",
      "Is klonk making us breakfast ?",
      "https://tenor.com/view/eggs-flip-breakfast-cooking-gif-9569635",
      "What\'s for breakfast 🍳"
    ]
  },
  {
    keywords: ['show', 'fast'],
    replies: [
      "We'll show fasss"
    ]
  },
  {
    keywords: ['goodmorning', 'gm', 'good morning'],
    replies: [
      "https://tenor.com/view/family-love-support-gif-17342934416851765394",
      "https://tenor.com/view/cat-sleep-tired-cute-gif-15231363",
      "https://tenor.com/view/morning-goodmorning-sunrise-beach-gif-13059723454432855061",
      "https://tenor.com/view/theecards-good-morning-gm-goodmorning-have-a-good-day-gif-15173671151548065674",
      "https://tenor.com/view/good-morning-goodmorning-gm-morning-happy-gif-3123798057584218894",
      "https://tenor.com/view/goodmorning-wake-the-fuck-up-gif-15550364",
      "https://tenor.com/view/good-morning-gif-10503059712898098418",
      "https://tenor.com/view/muppets-muppet-show-swedish-chef-pans-pots-and-pans-gif-4870310107246819553"
    ]
  },
  {
    keywords: ['goodnight', 'gn', 'good night'],
    replies: [
      "https://tenor.com/view/have-a-good-night-have-a-great-evening-have-a-good-evening-cute-goodnight-gif-5395725928804711076",
      "https://tenor.com/view/good-night-night-nite-nite-nite-lay-me-down-to-sleep-gif-16995668",
      "https://tenor.com/view/good-night-bear-teddy-bear-rabbit-bunny-gif-25202269",
      "goodnight guys headed off to bed im off saturday thank gawdddddaaa",
      "https://tenor.com/view/garfield-pillow-bedtime-goodnight-sleep-tight-gif-6320194812773339383",
      "https://tenor.com/view/bedtime-goodnight-going-to-bed-dog-bear-gif-4372798246612572811",
      "https://tenor.com/view/good-night-goodnight-nighty-gif-18281734137392456796",
      "https://tenor.com/view/goodnight-moon-gif-14202440755019416563",
      "https://tenor.com/view/shadow-the-hedgehog-shadow-sonic-sonic-the-hedgehog-goodnight-gif-25968250",
      "https://tenor.com/view/cat-hearts-hug-happy-thank-you-gif-8008570886507194900"
    ]
  },
  {
    keywords: ['remind', 'ugly', 'here'],
    replies: [
      "Reminds of itttsssssss gettingggg ugllyyyyyyyy … in hereeeeeee"
    ]
  },
  {
    keywords: ['tummy', 'tummy ache'],
    replies: [
      "https://tenor.com/view/gunter-adventuretime-sick-penguin-gif-11708179763145014324"
    ]
  },
  {
    keywords: ['chicken', 'broth', 'dringking'],
    replies: [
      "i was poggering a lil dringking chicken broth"
    ]
  },
  {
    keywords: ['soy'],
    replies: [
      "I don\'t touch them   U get them man boobas   If u touch soy"
    ]
  },
  {
    keywords: ['sunday', 'wassup', 'sup'],
    replies: [
      "Sunday knowwssss wassssupppp"
    ]
  },
  {
    keywords: ['tenor'],
    replies: [
      "we added 2 more to tenor they not cominning outting right"
    ]
  },
  {
    keywords: ['high', 'song', 'shit'],
    replies: [
      "Right and if people are getting g high they can give 3 shirs what the song is saying"
    ]
  },
  {
    keywords: ['silly', 'goose', 'sillygoose'],
    replies: [
      "https://tenor.com/view/goose-your-a-silly-goose-gif-14050056",
      "https://tenor.com/view/duck-with-sunglasses-driving-car-gif-15362018975526912371",
      "https://tenor.com/view/duck-ducking-happy-feet-playtime-bath-gif-7785501084240633282"
    ]
  },
  {
    keywords: ['wankji', 'wankge', ':Wankge:'],
    replies: [
      "they were wankged to the crazy house and i willget him to wankge u again back to normal",
      "U spell it  a diff way u wankji in Canada or ?",
      "I tried but my Wankge only last 4 hours how yallslast 8 😂 klonk left me hanging …… and clients not here to Wankge everyone to bedge ",
      "Daysha just wants to Wankge in bed I  dread driving in am ….. burrrrrr",
      "Have all u guys been Wankge ed to the crazy house by client …. He can Wankge you back to normal trust him ...",
      "Illusion someone Wankge illusion make him happy fasssss fasssss he mad Sunday didn\'t invitaaaa him Also to spoon ? 😂"
    ]
  },
  {
    keywords: ['lyrics', 'meaning', 'nas', 'common'],
    replies: [
      "They don't give a shit about real meanings or lyrical an like nas or common",
      "https://tenor.com/view/playboi-carty-fans-worst-music-music-playboi-carti-fans-gif-16328159996012002060"
    ]
  },
  {
    keywords: ['shutup'],
    replies: [
      "So I need everyone to remind me to shut the fuck all day"      
    ]
  },
  {
    keywords: ['fakediet'],
    replies: [
      "Oh making fun of me for trying to eat ealllthyyy today ?? Hookayyyyy u want me to order a booogerrr"
    ]
  },
  {
    keywords: ['headboard', 'head board'],
    replies: [
      "when u sit on a face u face a headboard"
    ]
  },
  {
    keywords: ["mole"],
    replies: [
      "Rellon sorry accusing being a mole illusion and klonk photoshopped a bad joke"
    ]
  },
  {
    keywords: ["toes"],
    replies: [
      "Yeah getting ur toes sucked feels good as fuck !!!!!"
    ]
  },
  {
    keywords: ["espresso"],
    replies: [
      "their is mold in expresso"
    ]
  },
  {
    keywords: ["chocolate"],
    replies: [
      "Someone got the chocolate 🍫 bad things from \nDollar store … it\'s not gonna be a good day …. :POLICE: the ex unconpuluitariessss"
    ]
  },
  {
    keywords: ['fuk'],
    replies: [
      "https://tenor.com/view/cat-fuck-this-give-up-fuck-this-thing-in-particular-gif-16235966",
      "Fuck that cokkk but that man whoaaaa there",
      ",,,,..,.,,,,,,,,,,.,,,,… \nOh I\'m not supposed to me mad about u are I forgot …. My bad"
    ]
  },
  {
    keywords: ['gas'],
    replies: [
      "Day 45858373 of smelling gas is getting on my last nerve … eeeellllpppppp",
      "I\'m still smelling gas ⛽️ and I think that\'s y my tummy still fucked nauseous I\'m not picking up the nausea meds nope 👎 it\'s ready for pick up ….",
      "It\'s crazy and no wonder why I wanna lay in bed if I don\'t smell gas laying in bed 😦 :Sadge:  I really don\'t smell it laying on my back … I need more laying on my back …. Lmao insert joke there",
      "We at store … I keep smelling fucking gas !!!!!",
      "And I hear there\'s a doctor @Legendarism I been smelling exhaust fumes aka natural gas smells for the passed 2 weeks and need a mri is it really a brain tumor ? I\'m really worried had a ct scan they seen something but won\'t tell me till mri PepeHands …….elllllllllppppppppp"
    ]
  },
  {
    keywords: ['sex'],
    replies: [
      "U know payo is wrong u can burn calories by having sexual relations most people sweat when you have relationship and should last up to 2.5 hours lmao 😂"
    ]
  },
  {
    keywords: ['freak'],
    replies: [
      "Wait a secunnnddaaaaaaa I\'m a horny freak ???",
    ]
  },
  {
    keywords: ['alaska'],
    replies: [
      "Maybe we have a warning in rules if ur a fucking snowflake to go to Alaska ??? And not this discord ……",
      "I used Alaska as an example I hope no one in here lives in Alaska"
    ]
  },
  {
    keywords: ['milk'],
    replies: [
      "https://cdn.discordapp.com/attachments/1266050244500656130/1354516634915573781/C0B5D356-0C9A-4062-80C5-3A19EB44065E.jpg?ex=67e5936b&is=67e441eb&hm=7296af0b780d52bc10a575d00c17e99a307ecfab13fcc43caece23a68886fe0e&"
    ]
  },
  {
    keywords: ['fekk'],
    replies: [
      "FEKK givign out free cokcs lol"
    ]
  },
  {
    keywords: ['burritos', 'tacos'],
    replies: [
      "I can\'t say I don\'t \nLike burritos tacos burritos chimmyyy Chingumgas etc … it\'s thundering lightening and about \nTo snow …. ellpppppppppppp @kalonko"
    ]
  },
  {
    keywords: ['buying', 'dick'],
    replies: [
      "I\'m buying shoes and clothes but I\'m getting dick"
    ]
  },
  {
    keywords: ['giveaway'],
    replies: [
      "replace him with one of yall that talk shit about everything and that ur deff not downloading that shit t just to play for 5 min ??",
      "3 clicks but ZERO DOWNLOADS OP OP OP >>....",
      "Turbo u have a hot date and u still didn\'t download monopoly go like u said I was gonna :Sadge: :Sadge: :Sadge:",
      "I should but I want people to be willing to help me… even if turbo still didn\'t download I think … we have 5 people justiii favorite fekkkk dunk …. My mom… thazzittt  thazzzowllll"
    ]
  },
  {
    keywords: ['monkafood', 'monka food'],
    replies: [
      "https://cdn.discordapp.com/attachments/1266050244500656130/1356708647924662474/IMG_5455.jpg?ex=67eede64&is=67ed8ce4&hm=2149d678e9f3e000a0ad70fa3d73550abb986b59dd7dab857288f1f08adf8079&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1357032855988994230/IMG_5509.jpg?ex=67eebad5&is=67ed6955&hm=7041d15c606e65865266afe34c6f66f5f813265a75c61882019338cc7d23624a&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1356710336668897443/IMG_5456.jpg?ex=67eedff6&is=67ed8e76&hm=279087ae39e3c5c49a00ce69d5bd0712ad820297afb6f88a01ce783b076d6a3e&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1355211491133100123/IMG_5218.jpg?ex=67eeb20e&is=67ed608e&hm=f498f75321d08aea4c60467c26d5f9c576c521e9c749be296d79de7e0d0ef0b4&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357149584849109002/IMG_2557.jpg?ex=67ef278b&is=67edd60b&hm=93891e8fcfb805a3e2a1fe8e7af328f680c6e5429de724aa8f0672b1b489957e&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357149645905592530/IMG_2660.jpg?ex=67ef279a&is=67edd61a&hm=015ee5ba4715a4055fd7d2891402a4160351171619c19aa5e052deddceccd954&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357149726692343908/IMG_2125.jpg?ex=67ef27ad&is=67edd62d&hm=a23057f342f29bfabbff134125f06868570b7c55aeef9d72961b8780b34506b2&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357149772477239396/IMG_1066.jpg?ex=67ef27b8&is=67edd638&hm=c45fbd812a31029a4f431195cbba55f7017491fc75aa3e354c033945b00e8420&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357149840928411658/IMG_0638.jpg?ex=67ef27c8&is=67edd648&hm=7a4fa34eef54e740a27c9b9a4dde79cdfe1fa548d5a7992e7e7cda14bbcccee3&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357149940496732270/IMG_2738.jpg?ex=67ef27e0&is=67edd660&hm=c06a042a9a5b851fb23d79e926c27549a5c1d0b1aad544ddc4caa956805e4088&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357151263074160732/IMG_4509.jpg?ex=67ef291b&is=67edd79b&hm=634c2b012386e2da9f0ba3b1c78135afef8a6d3d54897d8ef851333627318e39&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357151699076255795/IMG_3729.jpg?ex=67ef2983&is=67edd803&hm=e702f9a304003f63bd3057bed8561a900e4439d9273fde8296b54f3ab0abef4d&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357151745129840720/IMG_3721.jpg?ex=67ef298e&is=67edd80e&hm=8488de29c537f94efebd901d0822f06670db1b5df56518195b28e7f329db9203&",
      "https://cdn.discordapp.com/attachments/1332760107750002790/1357152064941330492/IMG_1813.jpg?ex=67ef29da&is=67edd85a&hm=a90dae11d1643789cca5e37c21b2b2c0993fa7ca9cfaa8c53b597787c632f4a3&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1357798934969454714/IMG_5649.jpg?ex=67f1844c&is=67f032cc&hm=001df65c98adca67369b9e716e98ad6680983b05734a83d593754d41edd13595&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1357876174474444860/IMG_5672.jpg?ex=67f274fc&is=67f1237c&hm=8996104abb7fe137f022a77cc6655b1c6ac3e373febd8446c921090f8851e14e&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1357875199629988041/IMG_5669.jpg?ex=67f27413&is=67f12293&hm=a4dc954f6b0ffbdbc79296d130a173493a8b336e954e6900cc291ef3765e0966&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1273606861576474737/IMG_0511.jpg?ex=67f267d2&is=67f11652&hm=61602305a9bd814574f1face1a47d424860042651269a9921ede71cbb2ba21c0&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1287852121043238985/IMG_1799.jpg?ex=67f2d040&is=67f17ec0&hm=4caeedb10d66336c344d706bcc4279d0291d00467199d6d85c71861edd4213a8&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1292138112113446993/IMG_2172.jpg?ex=67f295e4&is=67f14464&hm=4d1af4c8831245a8f20f5563540c85a0ffb3f470e9e30e3e3d9710ebf2921f77&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1299368010322022420/IMG_2542.jpg?ex=67f28542&is=67f133c2&hm=da8896dc36cd4b61e7b9094d95ef92a5699eeadabb5a82fd06e539f3831b0710&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1303526993563881533/IMG_2994.jpg?ex=67f27d5d&is=67f12bdd&hm=c2d1f469c0b15f88813fd4ab917d6f7bead2df12d89d51ce3de374884264a74c&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1311781510897995806/IMG_3716.jpg?ex=67f2db3b&is=67f189bb&hm=4aafade31c553518095449b43d8b6764dc2e0785853c0b3c56fed6df6313e747&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1359538256848355549/IMG_5879.jpg?ex=67f7d82b&is=67f686ab&hm=d1943d446049cc2a801d2a2db2a397bb2117b1fe1de5ca2f1fc6c272ebeff45b&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1360053481024786482/IMG_6006.jpg?ex=67fa60c2&is=67f90f42&hm=c22562a51defcc91a8b4767df84c54a56309166fd10ffa63c4b65a7a39aa4575&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1321234446711787623/IMG_0769.jpg?ex=67fae0f7&is=67f98f77&hm=e1d6285cbd09ead9cabc677851f281495e661a062f0bdd912afbb0d419773193&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1321496020168999043/IMG_0783.jpg?ex=67fa8313&is=67f93193&hm=3df1400746a58bda71e381e22b98100f9f7baa29787d0b7d4d2c2e3016f83c93&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1321496106919530506/IMG_0784.jpg?ex=67fa8328&is=67f931a8&hm=f921a802d3150f347ea0519e8e8abaf97ffb75d697cb763bc17ccf3b7d9ee1f3&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1323355422446456965/IMG_0981.jpg?ex=67faaf47&is=67f95dc7&hm=ab992746633d6a895bfb5e0c0977fc679a89464439e359a38dc3b5e147b53493&",
      "https://cdn.discordapp.com/attachments/1266050244500656130/1364314680088068157/IMG_6587.jpg?ex=6809e14f&is=68088fcf&hm=5670fde473cd8bb6f77d8f9831c7ef922b95db71cb66a8a0912aa60582a40a56&"
 
    ]
  },
];

// Default responses when no keywords match
const defaultResponses = [
  "Right and if people are getting g high they can give 3 shirs what the song is saying",
  "Sunday knowwssss wassssupppp",
  "We'll show fasss",
  "Reminds of itttsssssss gettingggg ugllyyyyyyyy … in hereeeeeee",
  "This is bullshittyyyyyyyyy",
  "⛳️",
  ":christmas_tree: ",
  "The evil man is here we can't be on our phone e allot",
  "The him asking illlusionnnnnnnn if it's really me",
  "https://tenor.com/view/duck-with-sunglasses-driving-car-gif-15362018975526912371",
  "https://tenor.com/view/south-park-eric-cartman-god-fucking-damnit-god-damn-it-pissed-gif-5412135",
  "🤨 Hmm monka ohhh no n hahahahaha MokATOS 🤣  👍. Utttt ohhhhhhhhh my tummy … pancakes 🥞",
  "🤨 Hmm monka ohhh no n hahahahaha MokATOS 🤣  👍",
  "I ran out of collffeseeeeee coffee",
  "ohh now i clicked wrong thing, i see penises",
  "i was joking nut sure what an astronaugt gets for his fake work",
  "Fuck that cokkk but that man whoaaaa there",
  "I\'m Freezing my balllllssss offfffff in here",
  "FEKK givign out free cokcs lol",
  "https://tenor.com/view/chicken-cluck-caw-heihei-gif-12652868522842709939",
  "aka KLONK why u trollin me I asked   where is the recipe on HOW TO MAKE THE LIL FAVOR >>>>>> hahahah its a joke ,,,,, hollyy hellaaaaaaaa........................",
  "So I need everyone to remind me to shut the fuck all day",
  "Wait a secunnnddaaaaaaa I\'m a horny freak ???",
  "No 100% I\'m right man is not god ………. As per always I\'m kinda right this time",
  "forgive me for i have sinned i had a cream stick",
  "Dont effin @ me !!!!!!! For bull crap",
  "The holly helll clip has 87 views lol thats seccond in place as funnies to the Gasoline one though damnit LMAO the gasoline one has 301 views prob cuz i posted it on fukin Twitter poggers THATS the one he should put on tik tok damnit cuz its funny as fuk ,,,, LMAO ASMR only has 33 views wtf thats bullshyte",
  "And I\'m so pissed right now I might go straight to room and go to bedge cuz I dont want to hear shittahhhhh from the Mum !! \nAbout the touching of shit …",
  "Why does payo hate girls so much but he likes to look at their cleavage on stream ? Calls \nthem \nMilfs I\'m \nCurious . Calling woman obayseeee is not effing nice ..",
  "I can\'t say I don\'t \nLike burritos tacos burritos chimmyyy Chingumgas etc … it\'s thundering lightening and about \nTo snow …. ellpppppppppppp @kalonko",
  "She just \nGot a big forehead like a 5 head … tbh",
  "I just placed order for LamacCompoundaaaaa shottaaaa\nLa\'macCompoundaaa La shottt"
];

// Function to get a response based on the prompt
function getResponse(prompt) {
  // Convert prompt to lowercase for case-insensiti ve matching
  const lowercasePrompt = prompt.toLowerCase();
  
  // Look for matching keywords
  for (const category of responses) {
    for (const keyword of category.keywords) {
      if (lowercasePrompt.includes(keyword)) {
        // Return a random response from the matching category
        const randomIndex = Math.floor(Math.random() * category.replies.length);
        return category.replies[randomIndex];
      }
    }
  }
  
  // If no keywords matched, return a random default response
  const randomIndex = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[randomIndex];
}


client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Messaggio di benvenuto quando il bot viene aggiunto a un nuovo server
client.on('guildCreate', async guild => {
  try {
    // Cerca di trovare un canale adatto per inviare il messaggio di benvenuto
    const channel = guild.channels.cache.find(
      channel => 
        channel.type === 0 && // 0 è il tipo per canali di testo
        channel.permissionsFor(guild.members.me).has('SendMessages')
    );

    if (channel) {
      await channel.send(
        "Hello everyone! I'm Daysha, your new bot! 👋\n" +
        "You can interact with me in two ways:\n" +
        "1️⃣ Use the command `!daysha` followed by your message\n" +
        "2️⃣ Mention me with @Daysha followed by your message\n\n" +
        "I'm here to entertain you, don't hesitate to chat with me! 😊"
      );
    }
  } catch (error) {
    console.error('Error on sending the Welcome message:', error);
  }
});



client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!emoji') {
    const emoji = '<:dayshachad:1352742582068842526>'; // Sostituisci con il tuo ID
    message.channel.send(`${emoji}`);
}


  // Listen for the command "!daysha"
  if (message.content.startsWith('!daysha')) {
    const prompt = message.content.slice(7).trim();
    if (!prompt) {
      return message.channel.send("Please provide a prompt after the command, e.g., `!daysha hello?`");
    }

    // Use our predefined responses instead of API call
    const reply = getResponse(prompt);
    message.channel.send(reply);
  }

  // Opzione 2: Rispondi quando il bot viene menzionato
  else if (message.mentions.has(client.user)) {
    // Estrai il messaggio dopo la menzione del bot
    const mentionRegex = new RegExp(`<@!?${client.user.id}>`);
    const prompt = message.content.replace(mentionRegex, '').trim();
    
    if (!prompt) {
      return message.reply("Please provide a prompt after the command, e.g., `@daysha hello?`");
    }
    
    const reply = getResponse(prompt);
    message.reply(reply);
  }
});

client.login(process.env.DISCORD_TOKEN);

