---
lang: en-US
title: System Settings
prev: Custom
next: ../../Roles
sidebar:
- { text: Custom Settings, link: /options/settings/Custom.html}
- { text: System Settings, link: /options/settings/System.html}
- { text: Game Settings, link: /options/settings/Game.html}
- { text: Game Modifiers, link: /options/settings/Modifiers.html}
- { text: Impostors, link: /options/settings/Impostors.html}
- { text: Crewmates, link: /options/settings/Crewmates.html} 
- { text: Neutrals, link: /options/settings/Neutrals.html}
- { text: Add-ons, link: /options/settings/Addons.html}
- { text: Experimental, link: /options/settings/Experimental.html}
---

# <font color=#ffc0cb>⚙️ System Settings</font>
---

* <font color=#ffeb04>Preset</font>
  * Swap and choose your saved lobby settings
* Kick players whose level is lower than
  * Set the minimum level required to play
* Kick mobile players
  * <font color=green>ON</font>: Mobile players cannot play
  * <font color=red>OFF</font>: Mobile players can play
* Kick players who are not logged in
  * <font color=green>ON</font>: Players without a registered account cannot play
  * <font color=red>OFF</font>: Players without a registered account can play
* Apply DenyName List
  * <font color=green>ON</font>: Players using names in the DenyName.txt document cannot play
  * <font color=red>OFF</font>: All names are allowed to play
* Apply BanList
  * <font color=green>ON</font>: Players that have been banned in previous lobbies cannot join new lobbies by the host
  * <font color=red>OFF</font>: Players that have been banned in previous lobbies can rejoin new lobbies by the hosta
* Apply Moderator List
  * <font color=green>ON</font>: Players that have been added to the Host’s Moderator List will be given Moderator Permissions in the lobby
  * <font color=red>OFF</font>: Players that have been added to the Host’s Moderator List will not be given Moderator Permissions in the lobby
* Kick players that say start
  * <font color=green>ON</font>: Players that type “start, Start, begin, etc” will be kicked from the lobby
  * <font color=red>OFF</font>: Players will be able to say “start, Start, begin, etc” without being kicked
* Number of warnings before kick
  * Can set how many warnings a player gets/how many times a player can say start before they get kicked
* Block a player after they’re kicked
  * <font color=green>ON</font>: Players that get kicked from spamming Start will be auto-blocked
  * <font color=red>OFF</font>: Players can join even when kicked
* Kick players who write banned words
  * <font color=green>ON</font>: Players that type banned words from BanWords.txt will be kicked from the lobby
  * <font color=red>OFF</font>: Players can say anything without being kicked
* Number of warnings for banned words
  * Can set how many warnings a player gets/how many times a player can say banned words before they get kicked
* Block a player after they’re kicked
  * <font color=green>ON</font>: Players that get kicked from spamming banned words will be auto-blocked
  * <font color=red>OFF</font>: Players just get kicked as normal
* Warning to those who write banned words
  * <font color=green>ON</font>: Players who write banned words will receive a warning for typing/sending it
  * <font color=red>OFF</font>: Players don’t receive this warning
* <font color=red>Low Load Mode</font>
  * <font color=green>ON</font>: Mod will use less power for loading things, making it run a bit faster
  * <font color=red>OFF</font>: Mod will use its default power for loading things, making it run a bit slower
* <font color=#0000ff>End the game when a player has a critical error</font>
  * <font color=green>ON</font>: Game will force end once a player gets a game breaking bug
  * <font color=red>OFF</font>: Game will continue as before
* When a cheating player is found
  * You can choose an action to take when a player is found cheating
    * Ban - Adds them to the BanList.txt immediately
    * Kick - Kicks them from the lobby
    * Notify Me - Notify only the host of the cheating player
    * Notify Everyone - Notify everyone of the cheating player
* Display Kill-log
  * <font color=green>ON</font>: Kill-log of the previous round will be displayed once people enter the lobby
  * <font color=red>OFF</font>: Kill-log will not automatically be displayed. (People can still `/l`)
* Display Last Roles
  * <font color=green>ON</font>: Everyone's roles of the previous round will be displayed once people enter the lobby
  * <font color=red>OFF</font>: Roles will not automatically be displayed. (People can still `/l`)
* Auto Display Last Result
  * <font color=green>ON</font>: Last Results of the previous round will be displayed once people enter the lobby
  * <font color=red>OFF</font>: Last Results will not automatically be displayed. (People can still `/l`)
* Suffix
  * Change the Suffix under Host name
  * You can choose between:
    * None - Displays nothing
    * Version - Displays which TOHE update the lobby is using
    * Streaming - Displays that you are Live-Streaming
    * Recording - Displays that you are Recording
    * Room Host - Displays that you are the Host of the Room
    * Original Name - Displays your Among Us Display Name
    * Don’t kill me - Displays the words “Don’t kill me” below your name
    * No phones - Displays “No phones” below your name
* Hide Game Settings
  * <font color=green>ON</font>: you won't see what roles are enabled/disabled
  * <font color=red>OFF</font>: you can see what roles are enabled/disabled like usual
* Enable only custom /n messages
  * <font color=green>ON</font>: you can only use custom /n messages that are created by the host
  * <font color=red>OFF</font>: you can use the default /n messages created by the mod
* Players can use the `/color` command:
  * <font color=green>ON</font>: players can `/color` to change their Bean Color
  * <font color=red>OFF</font>: players cannot change it with the command and have to do it normally
* Player Name Mode
  * This is how the player’s name is displayed in game. You can choose between: 
    * Name - Display the player’s name
    * Color - Display the player’s color
    * Random - Display a random name
* Disable Emoji in names
  * <font color=green>ON</font>: players cannot use emoji in their names
  * <font color=red>OFF</font>: players can use emoji in their names
* Show Role Info to Unmodded Clients Round 1
  * <font color=green>ON</font>: Info about each User's role is sent to them Round 1
  * <font color=red>OFF</font>: Users have to manually type /m to check their role info
* Show Role Descriptions to Unmodded Clients at First Meeting
  * <font color=green>ON</font>: descriptions about each User's role is sent to them on the First Meeting
  * <font color=red>OFF</font>: Users have to manually type /m to check their role description
* <font color=red>No Game End</font>
  * <font color=green>ON</font>: the game cannot end until the host ends it
  * <font color=red>OFF</font>: the game can end normally
* <font color=red>Console</font>
  * <font color=green>ON</font>: the console stays open during Hosting
  * <font color=red>OFF</font>: the console minimizes during Hosting
* Role Assigning Algorithm
  * These just change how roles are randomly assigned. You can choose between:
    * Default
    * .NET System Random
    * HashRandom
    * Xorshift
    * MersenneTwister
* <font color=#ffc0cb>Camouflage Appearance</font>
  * <font color=green>ON</font>: When Comms are sabotaged, everyone will turn into the defined skin (Can mess with code to set to a different outfit) 
  * <font color=red>OFF</font>: Camouflage Comms Sabotage works like it normally would
* <font color=cyan>Enable Youtuber Plan</font>
  * <font color=green>ON</font>: Host can use the command `/up [rolename]` to get the specified role on the next game
  * <font color=red>OFF</font>: Host cannot use the command `/up [rolename]` to get the specified role on the next game

> From: Moe