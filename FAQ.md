---
lang: en-US
title: Frequently Asked Questions
---

# FAQ

## How to install mod on mobile phones, tablets, and Apple

Only Windows can install mods. If you have no Windows, you don’t need to worry, the Host-only mods such as TOHE, TOH, TOHR, TOHY, SHR, etc. are all compatible with the vanilla. You can find the lobbys of these mods to join and play.

## You have been kicked by room

It may be because the room prohibits sending messages such as forbidden words and reminders to start. Or ban players who are not logged in, have illegal nicknames, have been banned, and have Android systems. It may also be kicked out by EAC anti-cheat. If none of the above is true, you will be kicked out manually by the host or voted anonymously by other players.

## You have been kicked by Among Us official anti-cheating

The official Among Us anti-cheat system often treats mods as cheats and kicks you out of the game. This situation is unavoidable, and all Host-only mods have this problem. If you still want to enter this lobby to play, you can only contact the host to reopen the lobby.

## Your connection to the server has been interrupted

If you find that other people can play normally, there are two possibilities:

1. Among Us official servers are overloaded, this situation cannot be avoided.
2. It's time for you to replace the accelerator.
    If a large number of players are reporting this problem, it is because of a bug in the mod, please wait patiently for the fix and update.

## Unable to connect to your Among Us account

AFK, bad network, or VPN changing or instability may also cause this problem. The solution is to restart the game, restart the VPN or restart the computer.

## An unknown error has occurred and your connection to the server has been interrupted

Unfortunately, this is a disconnection caused by a mod error or server error. If possible, please send the log to dev to solve the problem as soon as possible. Of course this does not rule out your network reasons.

## The mod file is damaged, please restart the game or reinstall the mod

There are two possibilities:

1. There is a problem with your network that causes the mod to fail to check the integrity.
2. The files of the mod or game are deleted or modified artificially or by a program, anti-virus software, etc.
    First, please check whether your network is normal, and then please make sure that your network proxy software is not a global proxy. Then please restart the game, if you still get the same prompt, please try to reinstall the vanilla and reinstall the mod.

## After installing the mod, it is still the vanilla

1. This may be caused by your antivirus software identifying the mod as a virus and automatically deleting it. Please try to close the antivirus software and reinstall it.
2. Please make sure that your game path does not contain any non-english, any characters other than English and numbers in the path may cause the mod to fail to load.

## How to get the log file

You have three methods to get log files:

1. Press <kbd>Ctrl</kbd> + <kbd>F1</kbd> in the game, then you can find the log file on your desktop, the file name starts with `TOHE...`.
2. Send the message "/dump" in the game, then you can find the log file on your desktop, the file name starts with `TOHE...`.
3. Please find your Among Us game directory, enter the `Among Us/BepInEx` folder, and then you will see a file called `LogOutput.log`, this is the log file.

## Test Error Lv.x

Please restart the game.

## The meeting cannot be ended, and the lower left corner displays an error: Please terminate the meeting manually

This is due to some bugs in the conference billing that prevent the conference from ending normally. Please press <kbd>Shift</kbd> + <kbd>M</kbd> + <kbd>Enter</kbd> to end the conference forcefully. If possible, please send the log file to dev to solve the problem as soon as possible.

## I am a Crewmate, but the opening shows that I am a Impostor

In order to be compatible with the vanilla, Host-only mods have to give you a Impostor role so that you can have the kill button. So for players who don't have the mod installed, you will see that you are an Impostor with no teammates. Please refer to the name on your head.

## What are the Host-only mods

H refers to Host, which is a mod that is compatible with the original version. It only needs to be installed by the host, and other players can play without installing the mod. In order to be compatible with the original version, the H-series mods have many functions and roles that cannot be realized. Even if they are realized, the way of realization is very strange. For example, the sheriff is shown as a Impostor, and the instructions of gambling monsters cannot be hidden.

## The game ends inexplicably

Game ends suddenly, If there are still imps alive and the victory conditions of the neutrals are not met. There are two possibilities:

1. You have turned on the option "Ghost ignores tasks", if the only crew who did not complete the tasks dies suddenly, it will be considered a task win for the crew.

2. You have turned on the option "No Voting/Skipping Voting is tantamount to suicide". After the meeting, most players will die, and then the game will be judged to be over.

3. The host or a certain player made a fatal error, and the mod forcibly ended the game to prevent the game from stucking.

## Just after the start, it shows that the host has forced the end of the game

There is a bug in the H-series mod that fails to assign roles. When the bug occurs in the original TOH, the homeowner will not be able to see the start button, and other players will be loaded with an infinite black screen. In this case, everyone can only exit the game. In TOHE, in order to avoid this situation, it will automatically detect whether other players are stuck in loading, and if detected, the game will be automatically terminated to prevent everyone from being stuck. So it's a protection mechanism, just ignore it and keep playing.

## Most of the screen is black, but the sound can be heard and there is a setting button

A situation that may suddenly appear at the beginning or during the game. Most of the screen is black, only the top part of the screen is visible, the sound can be heard, and the setting button can be clicked, and the meeting will not be displayed.

This is caused by the failure of the client to assign roles, and it is also one of the unavoidable problems of the H-series mods. Unfortunately, when this happens, you have to quit the game.

## The role I got is different from the one seen by /m, and the skill doesn't work

This issue will occur if your mod is of a different version than the host, please make sure the host name is not red or yellow before starting the game. If yes, please exit the game and check if there is an update button in the lower left corner of the main menu, if not, please restart the game and check if there is a update button again. If it still doesn't then it's not your problem, it's the host who needs an update.

## There are a lot of duplicate characters in the game without setting

Don't worry, we don't have this kind of bug, so please go to the settings and change the 15 max of this role back to 1 person.

## I got vanilla roles

Turn on the "Disable vanilla roles" option, and enable more roles.

## The game never ends

Please turn off "No Game End" in settings.
