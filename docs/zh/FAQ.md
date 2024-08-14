---
lang: en-US
title: Frequently Asked Questions
contributors: false
---

# FAQ

<font size=4em>
<details>
<summary><b><font color=#d395b4>How can I Install TOHE?</font></b></summary>

Visit the [Install](/Install.html) page! This guides you through installing TOHE on etiher Steam, Epic, or Xbox App, and also shows you how to install Alpha & Beta Builds.
</details>
<br>
<details>
<summary><b><font color=#d395b4>How can I install TOHE on phones, tablets, and consoles?</font></b></summary>

You can only install mods on PC/Computer. You must have the Steam, Epic, Xbox App, or Itch versions of Among Us to download mods. If you have no PC/Computer, you don’t need to worry as, even if you don't have/can't get the mod, you can still join Host-Only mods (such as TOHE, TOH, PL, etc) as long as you have Among Us on any device! You can find the lobbies of these mods to join and play as long as you are on the right game version.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why didn't TOHE load and give the pop-up "Fatal Error in GC: Collecting from unknown thread"?</font></b></summary>

This can randomly happen due to errors in the code. re-installing TOHE + re-pasting your Vanilla Among Us files will allow you to play again. If this happens constantly, please be patient as Developers are aware of this error. PS: Make sure you copy important files before re-installing (such as files in your Language folder, TOHE-Data folder, etc).
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why did I get a pop-up saying "You have been kicked by room"?</font></b></summary>

This issue may occur because the room prohibits sending certain messages, such as saying "start" or other variants such as "begin". Some other causes could be that you weren't logged in, used banned words, had a banned nickname, have been banned before, or you could just be on a blacklisted device, (Check [System Settings](/options/Settings/System.html)). It may also be caused by EAC anti-cheat. If none of the above is true, then you were probably just kicked out manually by the host, or got vote-kicked by other players. Another reason you may get kicked is just connection issues.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why did I get a pop-up saying "You have been kicked by Among Us' official anti-cheat"?</font></b></summary>

The official Among Us anti-cheat system often treats mods as cheats and may kick you out of the game. This situation is unavoidable, and all Host-Only mods have this problem. If you still want to enter a lobby to play, you can only contact the host to reopen the lobby.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why has my connection to the server been interrupted?</font></b></summary>

If you find that other people can play normally, there are two possibilities:

1. Among Us official servers are overloaded, this situation cannot be avoided.

2. It's time for you to replace the accelerator. If a large number of players are reporting this problem, it is because of a bug in the mod, please wait patiently for the fix and update.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why does it say I am Unable to connect to my Among Us account?</font></b></summary>

There are a few possiblities such as having bad network strength, changing your VPN/VPN instability may also cause this problem. Some solutions are to restart the game, restart the VPN, restarting your router, or restarting the computer entirely.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why does it say "An unknown error has occurred and your connection to the server has been interrupted"?</font></b></summary>

Unfortunately, this is a disconnection caused by a mod error or server error. If possible, please send the logs in a #bug-report to solve the problem as soon as possible. Of course, this does not rule out your network reasons.
</details>
<br>
<details>
<summary><b><font color=#d395b4>After installing the TOHE, it is still in vanilla, why?</font></b></summary>

1. This may be caused by your antivirus software identifying the mod as a virus and automatically deleting it. Please try to close the antivirus software and reinstall it.

2. Please make sure that your game path does not contain any non-English, any characters other than English and numbers in the path may cause the mod to fail to load.
</details>
<br>
<details>
<summary><b><font color=#d395b4>How do I get the log file?</font></b></summary>

You have three methods to get log files:

1. Press <kbd>Ctrl</kbd> + <kbd>F1</kbd> in the game, then you can find the log file on your desktop, the file name starts with `TOHE...`.

2. Send the message "/dump" in the game, then you can find the log file on your desktop, the file name starts with `TOHE...`.

3. Please find your Among Us game directory, enter the `Among Us/BepInEx` folder, and then you will see a file called `LogOutput.log`, this is the log file.
</details>
<br>
<details>
<summary><b><font color=#d395b4>The meeting cannot be end normally, and the lower left corner displays an error: Please terminate the meeting manually, what happened?</font></b></summary>

This is due to some bugs in the meeting billing that prevent the meeting from ending normally. Please press <kbd>Shift</kbd> + <kbd>M</kbd> + <kbd>Enter</kbd> to end the meeting forcefully. If possible, please send the log file to the devs so that they can solve the problem as soon as possible.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why does the role reveal at the start of the game show that I am one role/team, but in game I am a different role/team?</font></b></summary>

In order to be compatible with vanilla, Host-only mods have to give you a Impostor base so that you can have the kill button. (Or for some roles, such as Crewpostor, you are an Impostor but your base is Engineer so that you can do Tasks to kill.) So for players who don't have the mod installed, you will see that you are an Impostor with no teammates. The initial team you are on is your role base. Please look at the bottom of your screen on the Role Reveal screen, or above your name in game to see what your actual role/team is.
</details>
<br>
<details>
<summary><b><font color=#d395b4>What are Host-Only mods?</font></b></summary>

Host-Only mods are mods that are compatible with vanilla clients, meaning it only needs to be installed by the host and other players can still play without installing the mod.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why does the game end inexplicably?</font></b></summary>

The game will end suddenly if there are an equal amount of Impostors alive to Non-Killing players (and the victory condition of a Neutral isn't met), the victory conditions of a Neutral is met, or the Crew is done all of their tasks. Some other possibilities may include:

1. You have turned on the "Ghost ignores tasks" option and all alive players are finished tasks.

2. You have made the punishment of the "Voting Mode" option to be Suicide, which could have killing all players, leaving Impostors or Neutrals alive to take the win.

3. The host or a certain player made a fatal error, and the mod forcibly ended the game to prevent the game from being frozen.

4. None of these, make a `#bug-report` (Include Logs from /dump!)
</details>
<br>
<details>
<summary><b><font color=#d395b4>Just after the start, it shows that the host has forced the end of the game, why?</font></b></summary>

It's a protection mechanism, just ignore it and keep playing. The reason this occurs is because, there is a bug with Host-Only mods that fails to assign roles. When the bug occurs in the original Town of Host, the host will not be able to see the start button, and other players will be loaded with an infinite black screen. In this case, everyone can only exit the game. In Town of Host: Enhanced, in order to avoid this situation, it will automatically detect whether other players are stuck in loading, and if detected, the game will be automatically terminated to prevent everyone from being stuck.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Most of the screen is black, but I can interact with the GUI and the sound can still be heard, what happened?</font></b></summary>

This is caused by the failure of the client to assign roles, and it is also one of the unavoidable problems of Host-Only mods. Unfortunately, when this happens, you have to quit the game or just wait until the game ends.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why are there are a lot of duplicate roles in the game?</font></b></summary>

This most likely isn't a bug, please make sure the duplicated role has a Maximum of 1 rather than 2-15.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why did I get vanilla roles?</font></b></summary>

There are a few posibilities

1. You might need to turn on the "Disable vanilla roles" option.

2. You may need to enable more roles or allow more players to be the same role.

3. You may come accross this message: "There are incompatible roles in your role list, you may experience vanilla roles", which means you have a certain role & it's addon form enabled, (You can find info on what roles/addons are incompatible on these pages: [Crewmate](/options/Crewmates/Vanilla/Crewmate.html) | [Engineer](/options/Crewmates/Vanilla/Engineer.html) | [Scientist](/options/Crewmates/Vanilla/Scientist.html)) (This should not occur anymore as of 1.2.1 Alpha 3)

4. Eraser might've erased your role, resetting you to your base role (Impostor/Shapeshifter/Crewmate/Engineer/Scientist are all Base Roles (Base Role =/= Team/Role))

5. You may have killed a player with the [OIIAI](/options/Addons/Mixed/OIIAI.html) Add-on. This is normal in this case, as OIIAI resets their killers role to their base role. (Refer Above) 
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why does the game never end?</font></b></summary>

There are a few possibilities,

1. You have enabled "No Game End" in settings. Please turn it off to play normally.

2. If there is equal amount of Crewmates to Impostors, a Crewmate may have the Scizophrenic addon (count as 2 people)

3. If Cultist is enabled, you might have "Charmed players count as" set to Cultist. You need to have it set to Nothing (They will not count as an Alive player) or Original Team (They will count as their Original Team), as setting it to Cultist means that Charmed players are counted as another alive Cultist. (they wont have recruiting powers like Cultist but game will treat them like they are Cultist.)

4. Nobody has met their victory condition. (This may be obvious but, Impostors haven't killed everyone, Crewmates haven't finished all tasks/exiled all evil roles, etc)

5. None of these, make a `#bug-report` (Include Logs from /dump!)
</details>
<br>
<details>
<summary><b><font color=#d395b4>What is Game Master/GM?</font></b></summary>

The Game Master is an observer role.<br>
Their presence has no effect on the game, and all players know who the Game Master is. The Game Master role will be assigned to the host, who will automatically become a ghost at the start of the game.<br>
(Note: You can enable this in the Settings Gear. If you want to play normally, disable in again in the Settings Gear)
</details>
<br>
<details>
<summary><b><font color=#d395b4>How can I access Beta & Alpha Builds?</font></b></summary>

1. Anybody can get Beta Access by visiting `#beta-builds` in the TOHE Discord.

2. Become a Contributor, Tester, or Sponsor (Insider+) for Alpha Access.<br>
Read near the bottom of the [Install](/Install.html) page.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Why can't I post in #role-ideas in the TOHE Discord?</font></b></summary>

Role Ideas are currently locked to Sponsors, Nitro Boosters, & Contributors. This is so that the Developers/Contributors of TOHE can catch up on role ideas. The channel will open back up at a later date, but there's not a specific time.
</details>
<br>
<details>
<summary><b><font color=#d395b4>Can you use the Submerged mod with TOHE?</font></b></summary>

While this is technically possible, we don't recommend it as Submerged still requires all players to have it installed to play. If you do want to attempt this, we can say that the host would need Town of Host: Enhanced (TOHE) installed (as it's intended for only the host to install), as well as having Submerged installed. All of the people in your lobby could join normally but they would need the Submerged mod installed. (This applies to any custom Among Us map, Submerged is used in the example however, as it's one of the most popular)
</details>
</font>