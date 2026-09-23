const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const PREFIX = "!";

client.once("ready", () => {
  console.log(`Bot online: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === `${PREFIX}ping`) {
    message.reply("🏓 Pong!");
  }
});

// حط التوكن بين علامتي التنصيص
client.login("YOUR_BOT_TOKEN_HERE");const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const PREFIX = "!";

client.once("ready", () => {
  console.log(`Bot online: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === `${PREFIX}ping`) {
    message.reply("🏓 Pong!");
  }
});

// حط التوكن بين علامتي التنصيص
client.login("MTU0NDAwMjg5MzAzODg3ODgwMQ.GUn-I6.adsnxd_cXbNV8LP9loKCU_SIFw-an6hLPnWovY");
