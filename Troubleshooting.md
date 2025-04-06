---
lang: en-US
title: Troubleshooting
contributors: false
---

# <font color=#f0b6d5>Troubleshooting</font>

Are you having issues? You've come to the right place. This is the Troubleshooting page that will help you fix whatever issues you are having!<br>
If your issue is not listed here, or nothing seems to work, join our [Discord](discord.gg/ten) and head to the `#mod-help` channel for further assistance!

<details>
<summary><b><font color=gray>Could not connect to my Among Us account, why?</font></b></summary>

This problem could occur from a few causes:

1. Steam isn't running! Go and turn on the Steam app, wait for it to load, THEN run modded Among Us.

2. `steam_appid.txt` is missing from the modded folder! Copy it from the vanilla Among Us folder, and paste it into your modded folder.
</details>
<details>
<summary><b><font color=gray>Sure is taking a while to sign in, why?</font></b></summary>

This problem could occur from a few causes:

1. Steam is down! Steam goes down for maintenance every Tuesday at around 7:00PM EST. You will not be able to sign in during this maintenance period. (This may also result in getting the `SteamworksAuthFail` error)

2. Console is still starting up! Click nothing and just wait until it clears out. If it doesn't, see the two below.

3. Your PC is Slow/Bad! Slow or Old PCs will just experience this. Nothing we can do about it, This is a vanilla issue.

4. Login just hung up! If this happens, just click "Go Offline" then try signing in again. It should work. If it doesn't, see the three above.
</details>
<details>
<summary><b><font color=gray>After installing the Town of Host: Enhanced, <font color=#996d6d>it is still in vanilla</font>, why?</font></b></summary>

1. This may be caused by your antivirus software identifying the mod as a virus and automatically deleting it. Please try to close the antivirus software and reinstall it.

2. Please make sure that your game path does not contain any non-English, any characters other than English and numbers in the path may cause the mod to fail to load.
</details>
<details>
<summary><b><font color=gray>Why has my <font color=#996d6d>connection to the server been interrupted?</font></font></b></summary>

If you find that other people can play normally, there are two possibilities:

1. Among Us official servers are overloaded, this situation cannot be avoided.

2. It's time for you to replace the accelerator. If a large number of players are reporting this problem, it is because of a bug in the mod, please wait patiently for the fix and update.
</details>
<details>
<summary><b><font color=gray>Why does it say I am <font color=#996d6d>Unable to connect to my Among Us account?</font></font></b></summary>

There are a few possibilities such as having bad network strength, changing your VPN/VPN instability may also cause this problem. Some solutions are to restart the game, restart the VPN, restarting your router, or restarting the computer entirely.
</details>
<details>
<summary><b><font color=gray>Why did I get a pop-up saying <font color=#996d6d>"You have been kicked by room"</font>?</font></b></summary>

This issue may occur because the room prohibits sending certain messages, such as saying "start" or other variants such as "begin". Some other causes could be that you weren't logged in, used banned words, had a banned nickname, have been banned before, or you could just be on a blacklisted device, (Check [System Settings](/options/Settings/System.html)). It may also be caused by EAC anti-cheat. If none of the above is true, then you were probably just kicked out manually by the host, or got vote-kicked by other players. Another reason you may get kicked is just connection issues.
</details>
<details>
<summary><b><font color=gray>Why didn't TOHE load and give the pop-up <font color=#996d6d>"Fatal Error in GC: Collecting from unknown thread"</font>?</font></b></summary>

This can randomly happen due to errors in the code. re-installing TOHE + re-pasting your Vanilla Among Us files will allow you to play again. If this happens constantly, please be patient as Developers are aware of this error. PS: Make sure you copy important files before re-installing (such as files in your Language folder, TOHE-Data folder, etc).
</details>
<details>
<summary><b><font color=gray>Why do I have a notice saying <font color=#996d6d>"Wrong Version of Among Us"</font> at the top of my screen?</font></b></summary>

Make sure you have updated your Among Us game files in your Modded Folder to the latest version. If you have the error afterwards, make sure you are not on any public betas (for Steam Users), or check the [Notice Channel](https://discord.com/channels/1094344790910455908/1096633728350040145) in The Enhanced Network's [Discord](https://discord.gg/ten).
</details>
<details>
<summary><b><font color=gray>Why did I get a pop-up saying <font color=#996d6d>"You have been kicked by Among Us' official anti-cheat"</font>?</font></b></summary>

The official Among Us anti-cheat system often treats mods as cheats and may kick you out of the game. This situation is unavoidable, and all Host-Only mods have this problem. If you still want to enter a lobby to play, you can only contact the host to reopen the lobby.
</details>
<details>
<summary><b><font color=gray>Why does it say <font color=#996d6d>"An unknown error has occurred and your connection to the server has been interrupted"</font>?</font></b></summary>

Unfortunately, this is a disconnection caused by a mod error or server error. If possible, please send the logs in a #bug-report to solve the problem as soon as possible. Of course, this does not rule out your network reasons.
</details>
<details>
<summary><b><font color=gray>The meeting cannot be end normally, and the lower left corner displays an error: <font color=#996d6d>"Please terminate the meeting manually"</font>, what happened?</font></b></summary>

This is due to some bugs in the meeting billing that prevent the meeting from ending normally. Please press <kbd>Shift</kbd> + <kbd>M</kbd> + <kbd>Enter</kbd> to end the meeting forcefully. If possible, please send the log file in #bug-reports so that the developers can solve the problem as soon as possible.
</details>
<details>
<summary><b><font color=gray>Why does the game <font color=#996d6d>end inexplicably?</font></font></b></summary>

The game will end suddenly if there are an equal amount of Impostors alive to Non-Killing players (and the victory condition of a Neutral isn't met), the victory conditions of a Neutral is met, or the Crew is done all of their tasks. Some other possibilities may include:

1. You have turned on the "Ghost ignores tasks" option and all alive players are finished tasks.

2. You have made the punishment of the "Voting Mode" option to be Suicide, which could have killing all players, leaving Impostors or Neutrals alive to take the win.

3. The host or a certain player made a fatal error, and the mod forcibly ended the game to prevent the game from being frozen.

4. None of these, make a `#bug-report` (Include Logs from /dump!)
</details>
<details>
<summary><b><font color=gray>Just after the start, it shows that the host has forced the end of the game, why?</font></b></summary>

It's a protection mechanism, just ignore it and keep playing. The reason this occurs is because, there is a bug with Host-Only mods that fails to assign roles. When the bug occurs in the original Town of Host, the host will not be able to see the start button, and other players will be loaded with an infinite black screen. In this case, everyone can only exit the game. In Town of Host: Enhanced, in order to avoid this situation, it will automatically detect whether other players are stuck in loading, and if detected, the game will be automatically terminated to prevent everyone from being stuck.
</details>
<details>
<summary><b><font color=gray>Most of the screen is black, but I can interact with the GUI and the sound can still be heard, what happened?</font></b></summary>

This is caused by the failure of the client to assign roles, and it is also one of the unavoidable problems of Host-Only mods. Unfortunately, when this happens, you have to quit the game or just wait until the game ends.
</details>
<details>
<summary><b><font color=gray>Why are there are a lot of duplicate roles in the game?</font></b></summary>

This most likely isn't a bug, please make sure the duplicated role has a Maximum of 1 rather than 2-15.
</details>
<details>
<summary><b><font color=gray>Why did I get vanilla roles?</font></b></summary>

There are a few possibilities

1. You might need to turn on the "Disable vanilla roles" option.

2. You may need to enable more roles or allow more players to be the same role.

3. You may come across this message: "There are incompatible roles in your role list, you may experience vanilla roles", which means you have a certain role & its addon form enabled. (This should not occur anymore as of 1.2.1 Alpha 3)

4. Eraser might've erased your role, resetting you to your base role (Impostor/Shapeshifter/Crewmate/Engineer/Scientist are all Base Roles (Base Role =/= Team/Role))

5. You may have killed a player with the [OIIAI](/options/Addons/Mixed/OIIAI.html) Add-on. This is normal in this case, as OIIAI resets their killers role to their base role. (Refer Above) 
</details>
<details>
<summary><b><font color=gray>Why does the game <font color=#996d6d>never</font> end?</font></b></summary>

There are a few possibilities,

1. You have enabled "No Game End" in settings. Please turn it off to play normally.

2. If there is equal amount of Crewmates to Impostors, a Crewmate may have the Paranoia addon (count as 2 people)

3. If Cultist is enabled, you might have "Charmed players count as" set to Cultist. You need to have it set to Nothing (They will not count as an Alive player) or Original Team (They will count as their Original Team), as setting it to Cultist means that Charmed players are counted as another alive Cultist. (they wont have recruiting powers like Cultist but game will treat them like they are Cultist.)

4. Nobody has met their victory condition. (This may be obvious but, Impostors haven't killed everyone, Crewmates haven't finished all tasks/exiled all evil roles, etc)

5. None of these, make a `#bug-report` (Include Logs from /dump!)
</details>