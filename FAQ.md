---
lang: en-US
title: Frequently Asked Questions
---

# FAQ

## How to install mod on mobile phones, tablets, and Apple

You can only install mods on PC/Computer. If you have no PC/Computer, you don’t need to worry as, even if you don't have/can't get the mod, you can still join Host-Only mods (such as TOHE, TOH, PL, etc) as long as you have Among Us on any device! You can find the lobbies of these mods to join and play as long as you are on the right game version.

## You have been kicked by room

This issue may occur because the room prohibits sending certain messages, such as saying "start" or other variants such as "begin". Some other causes could be that you weren't logged in, used banned words, had a banned nickname, have been banned before, or you could just be on a blacklisted device, (Check [System Settings](/options/Settings/System.html)). It may also be caused by EAC anti-cheat. If none of the above is true, then you were probably just kicked out manually by the host, or got vote-kicked by other players. Another reason you may get kicked is just connection issues.

## You have been kicked by Among Us' official anti-cheat

The official Among Us anti-cheat system often treats mods as cheats and may kick you out of the game. This situation is unavoidable, and all Host-Only mods have this problem. If you still want to enter a lobby to play, you can only contact the host to reopen the lobby.

## Your connection to the server has been interrupted

If you find that other people can play normally, there are two possibilities:

1. Among Us official servers are overloaded, this situation cannot be avoided.

2. It's time for you to replace the accelerator. If a large number of players are reporting this problem, it is because of a bug in the mod, please wait patiently for the fix and update.

## Unable to connect to your Among Us account

There are a few possiblities such as having bad network strength, changing your VPN/VPN instability may also cause this problem. Some solutions are to restart the game, restart the VPN, restarting your router, or restarting the computer entirely.

## An unknown error has occurred and your connection to the server has been interrupted

Unfortunately, this is a disconnection caused by a mod error or server error. If possible, please send the log to dev to solve the problem as soon as possible. Of course, this does not rule out your network reasons.

## The mod file is damaged, please restart the game or reinstall the mod

There are two possibilities:

1. There is a problem with your network that causes the mod to fail to check the integrity.

2. The files of the mod or game are deleted or modified artificially or by a program, anti-virus software, etc.
    First, please check whether your network is normal, and then please make sure that your network proxy software is not a global proxy. After that, please restart the game. If you still get the same prompt, please try to reinstall your vanilla Among Us files aswell as the mod files.

## After installing the mod, it is still in vanilla

1. This may be caused by your antivirus software identifying the mod as a virus and automatically deleting it. Please try to close the antivirus software and reinstall it.

2. Please make sure that your game path does not contain any non-English, any characters other than English and numbers in the path may cause the mod to fail to load.

## How to get the log file

You have three methods to get log files:

1. Press <kbd>Ctrl</kbd> + <kbd>F1</kbd> in the game, then you can find the log file on your desktop, the file name starts with `TOHE...`.

2. Send the message "/dump" in the game, then you can find the log file on your desktop, the file name starts with `TOHE...`.

3. Please find your Among Us game directory, enter the `Among Us/BepInEx` folder, and then you will see a file called `LogOutput.log`, this is the log file.

## Test Error Lv.x

Please restart the game.

## The meeting cannot be end normally, and the lower left corner displays an error: Please terminate the meeting manually

This is due to some bugs in the meeting billing that prevent the meeting from ending normally. Please press <kbd>Shift</kbd> + <kbd>M</kbd> + <kbd>Enter</kbd> to end the meeting forcefully. If possible, please send the log file to the devs so that they can solve the problem as soon as possible.

## The opening shows that I am one role/team, but in game I am a different role/team

In order to be compatible with vanilla, Host-only mods have to give you a Impostor base so that you can have the kill button. (Or for some roles, such as Crewpostor, you are an Impostor but your base is Engineer so that you can do Tasks to kill.) So for players who don't have the mod installed, you will see that you are an Impostor with no teammates. The initial team you are on is your role base. Please look at the bottom of your screen on the Role Reveal screen, or above your name in game to see what your actual role/team is.

## What are the Host-Only mods

Host-Only mods are mods that are compatible with vanilla clients, meaning it only needs to be installed by the host and other players can still play without installing the mod.

## The game ends inexplicably

The game will end suddenly if there are an equal amount of Impostors alive to Non-Killing players (and the victory condition of a Neutral isn't met), the victory conditions of a Neutral is met, or the Crew is done all of their tasks. Some other possibilities may include:

1. You have turned on the "Ghost ignores tasks" option and all alive players are finished tasks.

2. You have made the punishment of the "Voting Mode" option to be Suicide, which could have killing all players, leaving Impostors or Neutrals alive to take the win.

3. The host or a certain player made a fatal error, and the mod forcibly ended the game to prevent the game from being freezing.

4. None of these, make a #bug-report (Include Logs from /dump!)

## Just after the start, it shows that the host has forced the end of the game

It's a protection mechanism, just ignore it and keep playing. The reason this occurs is because, there is a bug with Host-Only mods that fails to assign roles. When the bug occurs in the original Town of Host, the host will not be able to see the start button, and other players will be loaded with an infinite black screen. In this case, everyone can only exit the game. In Town of Host: Enhanced, in order to avoid this situation, it will automatically detect whether other players are stuck in loading, and if detected, the game will be automatically terminated to prevent everyone from being stuck.

## Most of the screen is black, but I can interact with the GUI and the sound can still be heard

This is caused by the failure of the client to assign roles, and it is also one of the unavoidable problems of Host-Only mods. Unfortunately, when this happens, you have to quit the game or just wait until the game ends.

## There are a lot of duplicate roles in the game

This most likely isn't a bug, please make sure the duplicated role has a Maximum of 1 rather than 2-15.

## I got vanilla roles

There are a few posibilities

1. You might need to turn on the "Disable vanilla roles" option.

2. You may need to enable more roles or allow more players to be the same role.

3. You may come accross this message: "There are incompatible roles in your role list, you may experience vanilla roles", which means you have a certain role & it's addon form enabled, (You can find info on what roles/addons are incompatible on these pages: [Crewmate](/options/Crewmates/Vanilla/Crewmate.html) | [Engineer](/options/Crewmates/Vanilla/Engineer.html) | [Scientist](/options/Crewmates/Vanilla/Scientist.html)) (This should not occur anymore as of 1.2.1 dev 3)

4. Eraser might've erased your role, resetting you to your base role (Impostor/Shapeshifter/Crewmate/Engineer/Scientist are all Base Roles (Base Role =/= Team/Role))

## The game never ends

There are a few possibilities,

1. You have enabled "No Game End" in settings. Please turn it off to play normally.

2. If there is equal amount of Crewmates to Impostors, a Crewmate may have the Scizophrenic addon (count as 2 people)

3. If Cultist is enabled, you might have "Charmed players count as" set to Cultist. You need to have it set to Nothing (They will not count as an Alive player) or Original Team (They will count as their Original Team), as setting it to Cultist means that Charmed players are counted as another alive Cultist. (they wont have recruiting powers like Cultist but game will treat them like they are Cultist.)

4. Nobody has met their victory condition. (This may be obvious but, Impostors haven't killed everyone, Crewmates haven't finished all tasks/exiled all evil roles, etc)

5. None of these, make a #bug-report (Include Logs from /dump!)

## What is Game Master/GM?

The Game Master is an observer role.<br>
Their presence has no effect on the game, and all players know who the Game Master is. The Game Master role will be assigned to the host, who will automatically become a ghost at the start of the game.<br>
(Note: You can enable this in the Settings Gear. If you want to play normally, disable in again in the Settings Gear)

## How can I access Canary & Dev Builds

1. Become a Translator, Sponsor (Initiate+), or Nitro Booster for Canary Access.

2. Become a Contributor, Tester, or Sponsor (Insider+) for Canary <i>and</i> Dev Access.<br>
Read near the bottom of the [Install/Get Started](/GetStarted.html) page.