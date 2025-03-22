/*
require('dotenv').config();


// Import the discord.js module
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance with necessary intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // This intent is required to read message content
  ],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for new messages
client.on('messageCreate', message => {
  // Ignore messages from bots to prevent loops
  if (message.author.bot) return;

  // Check if the message content matches a specific command (e.g., "!hello")
  if (message.content === '!hello') {
    // Send a reply in the same channel
    message.channel.send('Hello there!');
  }
});

// Log in to Discord with your bot token
client.login(process.env.DISCORD_BOT_TOKEN); 
*/
/*
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Function to call Hugging Face's inference API with GPT-Neo
async function getGPTNeoResponse(prompt) {
  try {
    const response = await axios.post(
      //'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-125M',
      //'https://api-inference.huggingface.co/models/distilgpt2',
      'https://api-inference.huggingface.co/models/microsoft/Phi-4-mini-instruct',
      { inputs: prompt },
      {
        headers: {
          'Authorization': `Bearer ${process.env.HF_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    // Depending on the model response format, extract the generated text.
    return response.data[0].generated_text;
  } catch (error) {
    console.error('Error calling Hugging Face API:', error);
    return "I'm sorry, something went wrong.";
  }
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Listen for the command "!ask"
  if (message.content.startsWith('!ask')) {
    const prompt = message.content.slice(4).trim();
    if (!prompt) {
      return message.channel.send("Please provide a prompt after the command, e.g., `!ask What is AI?`");
    }

    message.channel.send("Let me think...");

    const reply = await getGPTNeoResponse(prompt);
    message.channel.send(reply);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
*/
require("dotenv").config();
const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Discord bot is running!');
});


app.listen(port,  () => {
  console.log(`Web server running at http://0.0.0.0:${port}`);
});
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
    keywords: ['evil', 'man', 'phone'],
    replies: [
      "The evil man is here we can't be on our phone e allot"
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
      "https://tenor.com/view/car-gif-19988492"
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
      "https://tenor.com/view/good-morning-gif-10503059712898098418"
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
      "https://tenor.com/view/shadow-the-hedgehog-shadow-sonic-sonic-the-hedgehog-goodnight-gif-25968250"
    ]
  },
  {
    keywords: ['remind', 'ugly', 'here'],
    replies: [
      "Reminds of itttsssssss gettingggg ugllyyyyyyyy … in hereeeeeee"
    ]
  },
  {
    keywords: ['chicken', 'broth', 'dringking'],
    replies: [
      "i was poggering a lil dringking chicken broth"
    ]
  },
  {
    keywords: ['sunday', 'wassup', 'sup'],
    replies: [
      "Sunday knowwssss wassssupppp"
    ]
  },
  {
    keywords: ['tenor', 'add', 'more'],
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
      "https://tenor.com/view/duck-with-sunglasses-driving-car-gif-15362018975526912371"
    ]
  },
  {
    keywords: ['wankji', 'wankge', ':Wankge:'],
    replies: [
      "U spell it  a diff way u wankji in Canada or ?",
      "I tried but my Wankge only last 4 hours how yallslast 8 😂 klonk left me hanging …… and clients not here to Wankge everyone to bedge ",
      "Daysha just wants to Wankge in bed I  dread driving in am ….. burrrrrr",
      "Have all u guys been Wankge ed to the crazy house by client …. He can Wankge you back to normal trust him ..."
    ]
  },
  {
    keywords: ['lyrics', 'meaning', 'nas', 'common'],
    replies: [
      "They don't give a shit about real meanings or lyrical an like nas or common"
    ]
  }
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
  "i was joking nut sure what an astronaugt gets for his fake work"
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

