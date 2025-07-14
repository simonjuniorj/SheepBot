const {CommandoClient} = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token, discord_owner_id } = require('./config.json');
const { maintenance } = require('./config.json');
Structures.extend('Guild', function(Guild) {class MusicGuild extends Guild {constructor(client, data) {super(client, data); this.musicData = {queue: [],isPlaying: false,isVoice: false,nowPlaying: null,songDispatcher: null,skipTimer: false,loopSong: false,loopQueue: false,volume: 1}; this.triviaData = {isTriviaRunning: false,wasTriviaEndCalled: false,triviaQueue: [],triviaScore: new Map()};}resetMusicDataOnError() {this.musicData.isPlaying = false;this.musicData.isVoice = false;this.musicData.nowPlaying = null;this.musicData.loopSong = false;this.musicData.loopQueue = false;this.musicData.songDispatcher = null;}}return MusicGuild;});
const client = new CommandoClient({commandPrefix: prefix,owner: discord_owner_id});
client.registry.registerDefaultTypes().registerGroups([['music', ':notes: Kategoria Muzyka:'],['info', ':question: Kategoria Info:']]).registerDefaultGroups().registerDefaultCommands({eval: false,prefix: false,commandState: false,help: false,ping: false}).registerCommandsIn(path.join(__dirname, 'commands'));
client.once('ready', () => {
  const currentping = client.ws.ping
  const Guilds = client.guilds.cache.map(guild => guild.name);
  if (maintenance == true) {client.user.setPresence({activity: {name: "@Sheep Bot | On Maintenance ",type: "WATCHING"}})} else {client.user.setPresence({activity: {name: "@Sheep Bot | s?help ",type: "WATCHING"}})}
  console.log(`${client.user.tag} został poprawnie uruchomiony`);
  console.log('Serwery:')
  console.log(' ')
  console.log('- ' + Guilds, 'Połączono!');
});
client.on("message", message => {if(message.content === "s?help" || "s?ping") {if(maintenance == true) {if (message.author.id == !discord_owner_id) {return;}}}});
client.on('error', () => {client.login(token)})
client.on('warn', () => {return;})
client.on('shardError', () => {return;})
client.on('commandError', () => {return;})
client.on('invalidated', () => {return;})
client.on('voiceStateUpdate', async (___, newState, oldState) => {if (newState.member.user.bot && !newState.channelID && newState.guild.musicData.songDispatcher && newState.member.user.id == client.user.id) {newState.guild.musicData.queue.length = 0;newState.guild.musicData.songDispatcher.end();return;}if (newState.member.user.bot && newState.channelID && newState.member.user.id == client.user.id && !newState.selfDeaf) {newState.setSelfDeaf(true);}});
client.login(token);