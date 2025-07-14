# SheepBot V1
> Outdated and Retired from service in 13 june 2022!

[![image](https://img.shields.io/badge/language-javascript-yellow)](https://www.javascript.com/)
[![image](https://img.shields.io/badge/node-%3E%3D%2012.0.0-blue)](https://nodejs.org/)

*Im a simple Discord bot, written in Javascript, using Discord.js v12 library and Discord.js-commando framework*
*I service as a public Music bot, with free and simple commands, avaliable to everyone, to play music, while playing some game in vc*

**Feel free to use that repository as a reference, base for future Discord Bots!**


## Self-Hosting
### Installing the dependencies

> Firstly you need to install all the dependencies from **npm**, you can do this writing
`npm i`
> and everything should install as normal

### Setup

> Make a **config.json** file in the root directory of the project and add:
```
{
    "invite": "false", //Stands for, to make your bot easly invitable
    "prefix": "s?", //Here you set your prefix for commands (yeah, this bot uses chat input command system)
    "discord_owner_id": "<discord_owner_id_here>", //Here put your main Owner Discord account ID, to execute Owner only commands (needed)
    "token": "<paste_your_discord_token_here>", //Here you put your Discord Bot Token (needed)
    "youtubeAPI": "<youtube_api_here>", //To make the music to work, you need to get your YoutubeAPI key. You can do this from https://console.cloud.google.com/apis/dashboard
    "maintenance": false //This blocks other users (non owner) to executing any commands, helpful if you need to perform an maintenance
}
```

Note: When setting `"invite": true` remember to enable the Public Bot option in the [Discord Developer Portal](https://discordapp.com/developers/applications/)

I run the bot on a Ubuntu 18.04 environment so it might not work as intended on other operating systems(although it should), if you need a guide on how to install node.js on ubuntu I will link one in the resources down below.

Also, no matter what operating system you have, make sure [python 2.7](https://www.python.org/downloads/) is installed. **Discord.js now requires Node version greater than or equal to 12.0.0** .

If you are not cloning this repo, make sure your dependencies versions are the same as this repo's.

### Commands

> Music related:

| Command                | Aliases               | Description                                                                                                               | Usage                                                             |
| :--------------------: | :-------------------: | :------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------- |
| s?join                 | j/connect/summon      | Allows user to join their vc. Useful, if bot is on other channel than yours.                                              | !join/j/connect/summon                                            |
| s?play                 | p                     | Play any song or playlist from youtube.                                                                                   | !play darude sandstorm                                            |
| s?create-playlist      | ⸻⸻⸻           | Creates empty playlist for user.                                                                                          | !create-playlist EDM                                              |
| s?delete-playlist      | ⸻⸻⸻           | Delete a playlist from your saved playlists                                                                               | !delete-playlist EDM                                              |
| s?display-playlist     | ⸻⸻⸻           | Display a saved playlist                                                                                                  | !display-playlist EDM                                             |
| s?my-playlists         | mps/mpy               | List your saved playlists                                                                                                 | !my-playlists                                                     |
| s?remove-from-playlist | ⸻⸻⸻           | Remove a song from a saved playlist using its index                                                                       | !remove-from-playlist EDM 5                                       |
| s?save-to-playlist     | ⸻⸻⸻           | Save a song or a playlist to a saved playlist                                                                             | !save-to-playlist EDM https://www.youtube.com/watch?v=dQw4w9WgXcQ |
| s?pause                | pause-song/hold       | Pause the current playing song                                                                                            | !pause                                                            |
| s?resume               | continue              | Resume the current paused song                                                                                            | !resume                                                           |
| s?disconnect           | leave/dis/quit        | Leaves voice channel if in one                                                                                            | !leave                                                            |
| s?remove               | ⸻⸻⸻           | Remove a specific song from queue by its number in queue                                                                  | !remove 4                                                         |
| s?queue                | q                     | Display the song queue                                                                                                    | !queue                                                            |
| s?shuffle              | ⸻⸻⸻           | Shuffle the song queue                                                                                                    | !shuffle                                                          |
| s?skip                 | s/next                | Skip the current playing song                                                                                             | !skip                                                             |
| s?skipall              | skip-all              | Skip all songs in queue                                                                                                   | !skipall                                                          |
| s?skipto               | ⸻⸻⸻           | Skip to a specific song in the queue, provide the song number as an argument                                              | !skipto 5                                                         |
| s?volume               | vl/v/vol              | Adjust song volume                                                                                                        | !volume 80                                                        |
| s?loop                 | repeat                | Loop the currently playing song                                                                                           | !loop 5                                                           |
| s?loopqueue            | loop-queue/queue-loop | Loop the queue                                                                                                            | !loopqueue 2                                                      |
| s?now-playing          | np/now-playing        | Display the current playing song with a playback bar                                                                      | !now-playing                                                      |
| s?move                 | mv/m                  | Move song to a desired position in queue                                                                                  | !move 8 1                                                         |

> Info

| Command           | Description                                                                                                                                                        | Usage                                                                        |
| :---------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| !about            | Displays basic information, about bot and its creators                                                                                                             | !about                                                                         |
| !help             | Displays help command, with useful info about commands and usage                                                                                                   | !help                                                                         |

### Resources

[How to get a Youtube API key](https://developers.google.com/youtube/v3/getting-started)

[Get a Genius API key here](https://genius.com/api-clients/new)

[Installing node.js on debian](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9)

[Installing node.js on Windows](https://treehouse.github.io/installation-guides/windows/node-windows.html)

### Contributing

Fork it and submit a pull request!
Anyone is welcome to suggest new features and improve code quality!

## Support
> Because it is my first and outdated/retired project, Im not going to provide any support in a near future!
