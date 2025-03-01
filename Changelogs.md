---
lang: en-US
title: Changelogs
sidebarDepth: 1
sidebar:
- { text: Latest Changelog, link: /Changelogs.html}
- { text: Changelogs Tags, link: /changelogs/Tags.html}
- { text: All Stable Changelogs, link: /changelogs/Stable.html}
- { text: All Beta Changelogs, link: /changelogs/Beta.html}
- { text: All Alpha Changelogs, link: /changelogs/Alpha.html}
contributors: false
---

## <font size=5em><b>Latest Changelogs:</b></font><br>
(Only the Latest Changes to Mod/Site will be displayed.)

<font size=3em>
<details>
<summary><b><font color=#a65a80>TOHE v2.2.0 Changelogs</font></b></summary>

<b><font color=#cf4e8f>v2.2.0 Stable Release</font></b>

# Important Notes
We've received a definitive update from the developers at Innersloth regarding the Rate Limit anti-cheat measures.<br>
Innersloth has decided to temporarily relax these measures, with plans to reinstate them on April 4th. This will give modders ample time to adapt to the changes in the anti-cheat strategy. We're actively working with the team to ensure a smooth transition.<br>
During this period, we'll be rolling out several test builds to assess the situation and prepare for the eventual reactivation of the anti-cheat measures.<br>
Please keep in mind that, due to the limitations of the game protocol, we cannot guarantee a fully stable experience on official servers once the Rate Limit anti-cheat measures are reinstated.<br>
Innersloth recommends that modders who cannot adapt to these changes consider moving to Modded Regions. These regions may offer a more consistent and stable experience than the official servers, making them an ideal alternative for many players.<br>
When playing on InnerSloth official servers, please be aware that the Rate Limit anti-cheat system may cause compatibility issues with most mods, leading to unexpected in-game problems that wouldn't occur on modded regions. There's also a small chance the anti-cheat system could flag you.<br>
If you experience any of these issues, feel free to submit a bug report through our Discord, and we'll do our best to resolve it.<br>
Once Innersloth reactivates its Rate Limit anti-cheat, Rate Limit Bypasses will be automatically enforced.<br>
Remember, this may cause unexpected issues on official servers, such as unhidden messages from guessers, delayed player name updates, packet loss resulting in missed updates, occasional black screens after meetings, and very slow loading times. If you continue to play with this option enabled, please be aware that the server may become unstable, and there is a slight chance of being flagged by the anti-cheat system. We will do our best to address these issues, but please understand that some may be beyond our control.<br>

### Credits 
Thanks to @NikoCat233 @MargaretTheFool @Tommy-XL @PEPPERcula @NotPyro404 @Impostor4291 @ApeMV @Laikrai @Pietrodjaowjao @ApeMV @Bri1101 @Reborn5537 @Limeau for making this release possible<br>
Thanks to our translators for their hard work in bringing the mod to everyone<br>
Thanks to our testers and players for finding bugs and providing helpful feedback<br>
Thanks to everyone who keeps supporting the mod and helps us move further forward!<br>

## Major Mod Functions Changes:
- New Tag System @MargaretTheFool and @NotPyro404<br>
  - You can now create a friendcode.txt file from Tag_Template.txt in TOHE-Data/Tags to assign tags and permissions to a player<br>
- New chat spam system (enable in Mod Settings -> Guess Mode) @NikoCat233<br>
  - It is much faster and more stable than previous spam<br>
- Add option NonCrewRandomCommonTasks @NikoCat233 <br>
  - Non-crew players can have random different common tasks apart from the crew<br>
  - Managed by options in mod settings<br>
- /r role and /bt role now support multiple languages (enabled by mod settings/cross-language option) @NikoCat233 <br>
- RemoveIncompatibleAddOns @MargaretTheFool & @Impostor4291 & @NikoCat233 & @Tommy-XL <br>
  - When add-ons or roles are changed mid-game, the game will check whether existing add-ons are compatible with the new ones and remove the incompatible ones<br>
  - Managed by options in add-on tabs<br>
- Bring back the Old Option Shower @NikoCat233<br>
- Crowded Mod now included in TOHE<br>
  - TOHE is now incompatible with CrowdedMod since we included all its features (Modded Servers Only)<br>
  - You can now set imposter number to 0<br>
- New Tasks Assign System<br>
  - TOHE now ultimately assigns tasks apart from InnerSloth's system<br>
  - Role conversion mid-game will now reset tasks<br>
- Ported Custom Net Object System from MoreGameModes @Ultradragon005<br>
- Intro Screen Improvements<br>
  - Traitor now sees impostors on the intro screen<br>
  - Apocalypse Intro Screen by @margaretthefool<br>
  - Lover and Egoist IntroCutscene by @PEPPERcula<br>
  - Impostor and Madmate see each other on Intro<br>
  - Changed Intro sound for some roles by @PEPPERcula<br>
- Role conversion log (displayed along with Kill log)<br>
  - Will only display Main Role changes for players in the kill log<br>
- Prevent dead players from knowing roles immediately after death<br>
  - Will know when the meeting starts<br>
  - Prevent Nemesis and Retributionist from seeing roles before the "skill used up" option<br>
- New command: /start for moderators to start a game @laikrai <br>
- Critical Error Manager @Tommy-XL <br>
- Hash API System<br>
  - Now the mod calculates its file hash and uses that to interact with Enhanced API<br>

## Major Role Changes:<br>
- Coven Roles are now back! @MargaretTheFool <br>
  - You can find a detailed document by [clicking here](https://docs.google.com/document/d/1KaBjn6qk5NqUC7Ax7uQxXY1C9wsswWH__rBdzrZCd1I/edit?usp=sharing) or on the [Website](https://tohe.weareten.ca/)!<br>
- Chief Of Police (CoP) Returns<br>
- CoP can recruit anyone as Sheriff<br>
  - CoP may commit suicide depending on the setting upon an incorrect recruit<br>
- New Experimental Role: Shocker by @laikrai <br>
- New Role AbyssBringer (ported from EHR)<br>
  - BlackHole will freeze for 3 seconds after meeting<br>
- New role Revenant by @LimeAU<br>
- Reworked Jackal<br>
  - Jackal can now convert anyone into SideKick<br>
  - Sidekick can now turn into Jackal after Jackal's death<br>
- Reworked Amnesiac<br>
  - Can now turn into any role<br>
  - Cannot vent after changing role depending on the can vent setting<br>
- Rework Deputy<br>
  - Handcuffed players now have to use the kill button on others to break the handcuff<br>
- Baker's role block ability is reworked to reset kill cooldown @margaretthefool (Niko doubts whether it works)<br>
- Improve Admired interactions for some roles @Impostor4291<br>
  - For example, admired time thief will now add meeting time, and gangster/godfather are recruiting correctly (Hopefully, Niko didn't check the code carefully)<br>
- Cultist is now a Neutral killing role @impostor4291<br>
- Troller is now a Neutral Benign role @impostor4291<br>
- Engineer-based roles with 1-second vent duration now can't move in the vent (like jester)<br>
- New Option: Dictator use /vote command to expel players @hinhinarrrrrr<br>

## Minor Role Changes<br>
- Double Agent now can kill when it's the only imp alive @Impostor4291<br>
- Changed the ability button text for some roles @PEPPERcula<br>
- Fix Role Description for DollMaster and ChiefOfPolice by @Impostor4291<br>
- Add target mark for Seeker<br>
- Add note for vent for Altruist<br>
- CopyCat now can't copy Baker<br>
- Added some new options for Berserker, PlagueBearer, Soul Collector by @ApeMV<br>
- Scavenger now has its death reason by @ApeMV<br>
- Add kill notification for guardian<br>
- Opportunist can vent option by @PEPPERcula<br>
- Pestilence can kill guesser option by @ApeMV<br>
- Baker now uses the shapeshift button to transform by @MargaretTheFool <br>
- Lawyer is now a Single Role to avoid unknown bugs<br>
- MasterMind now is an experimental role since it causes some bugs<br>
- Added Evil Mini cannot be guessed before turning 18 option<br>
- Add Legacy option for Traitor and Parasite (Can Shapeshift) by @PEPPERcula<br>
- Other Minor changes that are missed from this list<br>

## Improvements<br>
- New Option For Low Load: Delay Update Names @Tommy-XL<br>
  - Previously, names for vanilla clients would update every second. This seemed unnecessary, so we added this option to only update names for vanilla when necessary<br>
  - If you have any issues with name updates, please turn off this option and send us a report or open an Issue!<br>
- New option: Change first kill cool down @Tommy-XL<br>
  - This means now you can decide whether to reset a killer's KCD to normal or set a shared KCD on game start<br>
- Added new win Condition for Quizmaster @Bri1101<br>
- Added more role fallbacks for Lawyer and Executioner when their target would die @Bri1101<br>
- Added new Chief of Police (COP) Settings @Reborn5537<br>
- New Option: Eraser can guess an Erased player<br>
- New Jackal Recruit Options @laikrai<br>
- Update some strings for consistency and error fixes @NikoCat233 & @PEPPERcula <br>
- Add Some Crew Roles For Copycat @Tommy-XL<br>
- Improve Godfather's add-on assignment @impostor4291<br>
- Disperser, Escapist, Soul Catcher, Miner, Quick Shooter use unshapeshifter @impostor4291 & @Bri1101
- More Custom Buttons @PEPPERcula<br>
  - 18 images added or updated to the mod<br>

## Silent Tweaks:<br>
- Send failed error on failed murder attempts @NikoCat233<br>
- Improve code performance @Tommy-XL<br>
- Improve AntiBlackout @Tommy-XL<br>
- Repo is now set to use utf-8 crlf as encoding. @NikoCat233<br>

## Other Bug Fixes and Improvements<br>
- Fixed bug when role name for modded players hide in Mushroom Spore<br>
- Fixed Cursed Soul stole the win of Workaholic setting<br>
- Fixed Cursed Soul setting "know role" not work<br>
- Fixed Quizmaster stole the win of Terrorist setting<br>
- Fixed some errors in the logs<br>
- Now Schrodingers Cat can't get Cyber<br>
- Solsticer and Workaholic won't be Executioner's target @impostor4291 and @Tommy-XL <br>
- Solsticer can't be Bounty Hunter or Huntsman's target @Bri1101<br>
- Fixed CN_Template @Reborn5537 <br>
- Fix Horse Mode and Long Neck Mode by @PEPPERcula<br>
- Madmate impostors can get the last impostor @impostor4291<br>
- Auto start added after a specific time on modded regions @NikoCat233 <br>
- Fixed error ending the game when a player disconnects due to an error on modded regions @NikoCat233<br>
- Delayed the check of the closest vent and serialized close vent @Tommy-XL <br>
- Fixed additional winners sometimes being missed from final winners @impostor4291<br>
  - Bounty Hunter and Huntsman can no longer target friendly team members (e.g., their lover or romantic partner)<br>
- Fixed an issue where a modded client Lawyer/Executioner may have tasks @NikoCat233<br>
- Fixed a bug where the Mechanic was unable to open all doors on The Fungle @NikoCat233<br>
- Fixed a bug where Godfather would work on dead players @MargaretTheFool <br>
- Fixed a bug where Torch would be assigned an incorrect Vision Multiplier @impostor4291<br>
- Fixed a bug where players were able to kill immediately after a meeting @Tommy-XL<br>
- Fixed Overseer interactions with Trickstar and Illusionist @impostor4291<br>
- Fix a bug where the Moon Dancer would cause null reference errors @NikoCat233<br>
- Adjusted roles such as Jester, Jackal, and Sidekick to prevent them from getting ghost roles @Tommy-XL<br>
- Fixed a bug where modded clients would play shield animations despite "Disable Shield Animations" being off @Tommy-XL<br>
- Fixed a bug where Madmate Psychic would not see all Neutrals in red names @Bri1101<br>
- Fixed a bug where the guesser was unable to guess roles instead of being unable to guess players based on their faction @impostor4291<br>
- Fixed a bug where the Security Camera ran despite the player being exiled @Tommy-XL<br>
- Fixed Mad/Recruit/Enchanted Amnesiac being able to report bodies after killing @Bri1101<br>
- Fixed Jackal and Police Chief being able to recruit Neutral Apocalypse @Reborn5537<br>
- Our future official releases will include obfuscation on specific methods and functions. <br>
  - Obfuscation aims to protect our official builds from malicious tampering.<br>
- Language folder is now changed to TOHE\Language<br>
- Rebased RoleBase to include targeting Custom Roles in it<br>
- Included latest Custom Region files in the mod<br>
- Added backup API URL in an attempt to ease connection issues in certain countries and regions<br>
- Improved multiple typos and strings by @MargaretTheFool @PEPPERcula @Impostor4291 @Laikrai<br>
- Fixed Random Spawn leads to a ban on anti-cheat regions<br>
- Fixed double spy seeing each other's orange name<br>
- Fixed rebirth vote-out on Solsticer and Mini<br>
- Fix Host DoomSayer can infinite guess<br>
- Fix changing gamemode sometimes showing HideNSeek<br>
- Fixed the bug where Arsonist may not be able to douse someone (maybe)<br>
- Fixed Consigliere not being able to guess specific roles<br>
- Fixed Kamikaze mod clients not seeing icons<br>
- Fixed some roles, allowing misguess to be ignored<br>
- Fix stealer add-on displaying wrong vote number on display<br>
- Fix sending chat bug causing blackmailer false spam<br>
- Possibly fixed vanilla clients still seeing the modded name on meeting after a player has left the game<br>
- Fixed Quick Shooter may bug sometimes<br>
- Maybe Fixed Error Spam when a modded client disconnected from the game during a meeting or other necessary period<br>
- Fix Maverick kill number not syncing<br>
- Recoded Seeker<br>
- Fix Converted Jailer from losing all their executions<br>
- Mod Updater now uses Dispatcher<br>
- Other bug fixes that Niko randomly missed, deleted from this list, or are included in other changes<br>
</details>
<br>
<details>
<summary><b><font color=#5ea692>Site Changelogs/Updates</font></b></summary>

* By [**Pyro**](https://sites.google.com/view/notpyro404)<br>
= <font color=#ece218><b>NOTICE</b></font>: If there are any other issues, or you simply have feedback, open a forum in `#website-feedback`! Thank you!<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: **Heavy** FAQ Rework. (Sorted into various categories + Includes Installation Guides.)<br>
\- <font color=red><b>REMOVED</b></font>: _Remove Install.md (Refer Above)_<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: **Heavy** Resources Rework. (Sorted into various categories + Includes User-Submitted Presets + Translations.)<br>
\- <font color=red><b>REMOVED</b></font>: _Remove Presets.md (Refer Above)_<br>
\- <font color=red><b>REMOVED</b></font>: _Remove Translations.md (Refer Above)_<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Reformat Causes of Death List on Resources Page (To be Cleaner/Compact)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: **Quizmaster Questions + Answers** Displayed on Resources Page (Answers will be hidden by default)<br>
= <font color=#ece218><b>NOTICE</b></font>: Prepared for Coven Faction.<br>
= <font color=#ece218><b>NOTICE</b></font>: Add Unofficial Lore Theory Batches 1 through 7.<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Recount all Roles/Addons (Sub-Faction Totals, Faction Totals, & Full Total)<br>
</details>
</font>