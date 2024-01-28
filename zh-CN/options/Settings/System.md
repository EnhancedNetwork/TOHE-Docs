---
lang: en-US
title: System Settings
prev: Custom
next: /Roles.html
---

# <font color=#ffc0cb>⚙️ System Settings</font>

***

- <font color=#ffeb04>Preset</font>
  - Swap and choose your saved lobby settings

- <font color=red>Black Screen Prevention (Recommended)</font>
  - <font color=green>ON</font>: Mod will prevent black-screening
  - <font color=red>OFF</font>: Mod will not prevent black-screening

- Enable Gradient Tags <font color=red>(can cause disconnect issues)</font>
  - <font color=green>ON</font>: Gradient Tags can be used.
  - <font color=red>OFF</font>: Gradient Tags cannot be used.

- <font color=#01ff00>Enable use of /kcount command</font>
  - <font color=green>ON</font>: Players can use /kcount to see the amount of killers left
  - <font color=red>OFF</font>: Players cannot use /kcount to see the amount of killers left

- <font color=#01ff00>See ejected roles in meetings</font>
  - <font color=green>ON</font>: Roles of ejected players will be shown to everyone
  - <font color=red>OFF</font>: Roles of ejected players will not be shown to everyone

- Kick players whose level is lower than
  - Set the minimum level required to play
    - Temp Ban low level players
      - <font color=green>ON</font>: Temporarily bans low level players from your lobby
      - <font color=red>OFF</font>: Doesn't temporarily ban low level players from your lobby, kicks them like usual

- Turn on Whitelist to bypass level kick
  - <font color=green>ON</font>: Whitelisted players can join the lobby even if they don't meet lobby requirements
  - <font color=red>OFF</font>: Whitelisted players are ignored, and treated as everyone else is

- Kick Non-PC players
  - <font color=green>ON</font>: Non-PC players cannot play
    - Kick Android players
      - <font color=green>ON</font>: Android players will be kicked from the lobby automatically
      - <font color=red>OFF</font>: Android players will not be kicked from the lobby automatically
    - Kick iOS players
      - <font color=green>ON</font>: iOS players will be kicked from the lobby automatically
      - <font color=red>OFF</font>: iOS players will not be kicked from the lobby automatically
    - Kick Xbox players
      - <font color=green>ON</font>: Xbox players will be kicked from the lobby automatically
      - <font color=red>OFF</font>: Xbox players will not be kicked from the lobby automatically
    - Kick PlayStation players
      - <font color=green>ON</font>: PlayStation players will be kicked from the lobby automatically
      - <font color=red>OFF</font>: PlayStation players will not be kicked from the lobby automatically
    - Kick Nintendo Switch players
      - <font color=green>ON</font>: Nintendo Switch players will be kicked from the lobby automatically
      - <font color=red>OFF</font>: Nintendo Switch players will not be kicked from the lobby automatically
  - <font color=red>OFF</font>: Non-PC players can play

- Kick players without a friend code
  - <font color=green>ON</font>: Players without a registered account cannot play
  - <font color=red>OFF</font>: Players without a registered account can play
    - Temp Ban players without a friend code
      - <font color=green>ON</font>: Temporarily bans players without friend codes from your lobby
      - <font color=red>OFF</font>: Doesn't temporarily ban players without friend codes from your lobby, kicks them like usual

- Apply VIP List
  - <font color=green>ON</font>: Players who are VIPs will be given a VIP Tag in the lobby
  - <font color=red>OFF</font>: There will be no VIP Tag in the lobby

- Apply DenyName List
  - <font color=green>ON</font>: Players using names in the DenyName.txt document cannot play
  - <font color=red>OFF</font>: All names are allowed to play

- Apply BanList
  - <font color=green>ON</font>: Players that have been banned in previous lobbies cannot join new lobbies by the host
  - <font color=red>OFF</font>: Players that have been banned in previous lobbies can rejoin new lobbies by the host

- Apply Moderator List
  - <font color=green>ON</font>: Players that have been added to the Host’s Moderator List will be given Moderator Permissions in the lobby
  - <font color=red>OFF</font>: Players that have been added to the Host’s Moderator List will not be given Moderator Permissions in the lobby
    - Allow moderators to use /say command
      - <font color=green>ON</font>: Moderators can use /say to send a message when dead
      - <font color=red>OFF</font>: Moderators cannot use /say to send a message when dead

- Kick players that say start
  - <font color=green>ON</font>: Players that type “start, Start, begin, etc” will be kicked from the lobby
    - Number of warnings before kick
      - Set how many times a player can say start before they get kicked
    - Block a player after they’re kicked
      - <font color=green>ON</font>: Players that get kicked from spamming Start will be auto-blocked
      - <font color=red>OFF</font>: Players can join even when kicked
  - <font color=red>OFF</font>: Players will be able to say “start, Start, begin, etc” without being kicked

- Temp ban players who keep quitting
  - <font color=green>ON</font>: Players that keep quitting will be blacklisted from joining for some time
  - <font color=red>OFF</font>: Players that keep quitting will not be blacklisted from joining for some time
    - Amount of Quits needed for temp ban
      - Set how many times a player can say quit before they get temp banned

- Minutes to wait before auto-starting
  - Set how many minutes the host has to wait before the game auto-starts

- Force start when Lobby Timer (in minutes) goes below
  - Set the time when the game will auto-start

- Minimum Player Threshold to auto-start
  - Set the minimum amount of players required to auto-start the game

- Initial countdown for auto-starting
  - Set the countdown for auto-starting the game

- Auto Play Again
  - <font color=green>ON</font>: The game will auto-start again after the game ends
  - <font color=red>OFF</font>: The game will not auto-start again after the game ends
    - Delay before re-entering lobby
      - Set how long it will take to re-enter lobby after a round

- <font color=#01ff00>Low Load Mode</font>
  - <font color=green>ON</font>: Mod will use less power for loading things, making it run a bit faster
  - <font color=red>OFF</font>: Mod will use its default power for loading things, making it run a bit slower

- <font color=#0000ff>End the game when a player has a critical error</font>
  - <font color=green>ON</font>: Game will force end once a player gets a game breaking bug
  - <font color=red>OFF</font>: Game will continue as before

- When a cheating player is found
  - You can choose an action to take when a player is found cheating
    - Ban - Adds them to the BanList.txt immediately
    - Kick - Kicks them from the lobby
    - Notify Me - Notify only the host of the cheating player
    - Notify Everyone - Notify everyone of the cheating player

- Display Kill-log
  - <font color=green>ON</font>: Kill-log of the previous round will be displayed once people enter the lobby
  - <font color=red>OFF</font>: Kill-log will not automatically be displayed. (People can still `/l`)

- Display Last Roles
  - <font color=green>ON</font>: Everyone's roles of the previous round will be displayed once people enter the lobby
  - <font color=red>OFF</font>: Roles will not automatically be displayed. (People can still `/l`)

- Auto Display Last Result
  - <font color=green>ON</font>: Last Results of the previous round will be displayed once people enter the lobby
  - <font color=red>OFF</font>: Last Results will not automatically be displayed. (People can still `/l`)

- Suffix
  - Change the Suffix under Host name
  - You can choose between:
    - None - Displays nothing
    - Version - Displays which TOHE update the lobby is using
    - Streaming - Displays that you are Live-Streaming
    - Recording - Displays that you are Recording
    - Room Host - Displays that you are the Host of the Room
    - Original Name - Displays your Among Us Display Name
    - Don’t kill me - Displays the words “Don’t kill me” below your name
    - No phones - Displays “No phones” below your name
    - Auto-Host - Displays “Auto-Host” below your name

- Hide Game Settings
  - <font color=green>ON</font>: Others won't see what roles are enabled/disabled
  - <font color=red>OFF</font>: Others can see what roles are enabled/disabled like usual

- Players can use the `/color` command
  - <font color=green>ON</font>: players can `/color` to change their Bean Color
  - <font color=red>OFF</font>: players cannot change it with the command and have to do it normally

- Player Name Mode
  - This is how the player’s name is displayed in game. You can choose between:
    - Disable - Default player names will be used
    - Color - Display the player’s color
    - Random - Display a random name

- Disable Emoji in names
  - <font color=green>ON</font>: players cannot use emoji in their names
  - <font color=red>OFF</font>: players can use emoji in their names

- Show Role Info to Unmodded Clients Round 1
  - <font color=green>ON</font>: Info about each User's role is sent to them Round 1
  - <font color=red>OFF</font>: Users have to manually type /m to check their role info

- Show Role Descriptions to Unmodded Clients at First Meeting
  - <font color=green>ON</font>: descriptions about each User's role is sent to them on the First Meeting
  - <font color=red>OFF</font>: Users have to manually type /m to check their role description

- <font color=red>No Game End</font>
  - <font color=green>ON</font>: the game cannot end until the host ends it
  - <font color=red>OFF</font>: the game can end normally

- <font color=red>BepInEx Console</font>
  - <font color=green>ON</font>: the console stays open during Hosting
  - <font color=red>OFF</font>: the console minimizes during Hosting

- Role Assigning Algorithm
  - These just change how roles are randomly assigned. You can choose between:
    - Default
    - .NET System Random
    - HashRandom
    - [Xorshift](https://www.programmingalgorithms.com/algorithm/xor-shift/)
    - [MersenneTwister](https://www.programmingalgorithms.com/algorithm/mersenne-twister/)

- <font color=#ffc0cb>Camouflage Appearance</font>
  - Set the appearance of how Camouflage looks when communications are sabotaged
    - Default - Everyone appears grey
    - <font color=#ffff00>Host</font> - Everyone appears as the host's skin
    - <font color=#e3bacd>KARPED1EM</font> - Everyone appears as KARPED1EM's skin (the original creator of the mod)
    - <font color=#f5dbdf>Lauryn</font> - Everyone appears as Lauryn's skin (the project leads girlfriend)
    - <font color=#ff8000>Moe</font> - Everyone appears as Moe's skin (the project lead)
    - <font color=#ec7578>Pyro</font> - Everyone appears as Pyro's skin (the Website Assistant)
    - <font color=#9e2424>ryuk</font> - Everyone appears as ryuk's skin (a lead contributor)
    - <font color=#fffff>Gurge44</font> - Everyone appears as Gurge44's skin (a lead contributor/TOHE+ Dev)
    - <font color=#ec7578>TommyXL</font> - Everyone appears as TommyXL's skin (a lead contributor)

- <font color=cyan>Enable Youtuber Plan</font>
  - <font color=green>ON</font>: Host can use the command `/up [rolename]` to get the specified role on the next game - Requires Permissions
  - <font color=red>OFF</font>: Host cannot use the command `/up [rolename]` to get the specified role on the next game

> From: TOHE
