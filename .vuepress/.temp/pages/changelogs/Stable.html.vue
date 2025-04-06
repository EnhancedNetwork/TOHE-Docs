<template><div><h2 id="all-stable-releases-changelogs" tabindex="-1"><a class="header-anchor" href="#all-stable-releases-changelogs"><span><font color=#f0b6d5>All Stable Releases/Changelogs:</font></span></a></h2>
<p>To access Stable Builds, you can visit TEN's <a href="https://discord.gg/ten" target="_blank" rel="noopener noreferrer">Discord Server</a> and download the latest release in #tohe-release, or go straight to our Releases on <a href="github.com/EnhancedNetwork/TownofHost-Enhanced/releases/latest">GitHub</a>!</p>
<p><b><font color=#cf4e8f>Latest Release</font></b><br>
<b><font color=#d395b4>Previous Release</font></b></p>
<hr>
<font size=3em>
<details>
<summary><b><font color=#cf4e8f>v2.2.0</font></b></summary>
<h1 id="important-notes" tabindex="-1"><a class="header-anchor" href="#important-notes"><span>Important Notes</span></a></h1>
<p>We've received a definitive update from the developers at Innersloth regarding the Rate Limit anti-cheat measures.<br>
Innersloth has decided to temporarily relax these measures, with plans to reinstate them on April 4th. This will give modders ample time to adapt to the changes in the anti-cheat strategy. We're actively working with the team to ensure a smooth transition.<br>
During this period, we'll be rolling out several test builds to assess the situation and prepare for the eventual reactivation of the anti-cheat measures.<br>
Please keep in mind that, due to the limitations of the game protocol, we cannot guarantee a fully stable experience on official servers once the Rate Limit anti-cheat measures are reinstated.<br>
Innersloth recommends that modders who cannot adapt to these changes consider moving to Modded Regions. These regions may offer a more consistent and stable experience than the official servers, making them an ideal alternative for many players.<br>
When playing on InnerSloth official servers, please be aware that the Rate Limit anti-cheat system may cause compatibility issues with most mods, leading to unexpected in-game problems that wouldn't occur on modded regions. There's also a small chance the anti-cheat system could flag you.<br>
If you experience any of these issues, feel free to submit a bug report through our Discord, and we'll do our best to resolve it.<br>
Once Innersloth reactivates its Rate Limit anti-cheat, Rate Limit Bypasses will be automatically enforced.<br>
Remember, this may cause unexpected issues on official servers, such as unhidden messages from guessers, delayed player name updates, packet loss resulting in missed updates, occasional black screens after meetings, and very slow loading times. If you continue to play with this option enabled, please be aware that the server may become unstable, and there is a slight chance of being flagged by the anti-cheat system. We will do our best to address these issues, but please understand that some may be beyond our control.<br></p>
<p><b>Credits</b><br>
Thanks to @NikoCat233 @MargaretTheFool @Tommy-XL @PEPPERcula @NotPyro404 @Impostor4291 @ApeMV @Laikrai @Pietrodjaowjao @ApeMV @Bri1101 @Reborn5537 @Limeau for making this release possible<br>
Thanks to our translators for their hard work in bringing the mod to everyone<br>
Thanks to our testers and players for finding bugs and providing helpful feedback<br>
Thanks to everyone who keeps supporting the mod and helps us move further forward!<br></p>
<p><b>Major Mod Functions Changes:</b><br></p>
<ul>
<li>New Tag System @MargaretTheFool and @NotPyro404<br>
<ul>
<li>You can now create a friendcode.txt file from Tag_Template.txt in TOHE-Data/Tags to assign tags and permissions to a player<br></li>
</ul>
</li>
<li>New chat spam system (enable in Mod Settings -&gt; Guess Mode) @NikoCat233<br>
<ul>
<li>It is much faster and more stable than previous spam<br></li>
</ul>
</li>
<li>Add option NonCrewRandomCommonTasks @NikoCat233 <br>
<ul>
<li>Non-crew players can have random different common tasks apart from the crew<br></li>
<li>Managed by options in mod settings<br></li>
</ul>
</li>
<li>/r role and /bt role now support multiple languages (enabled by mod settings/cross-language option) @NikoCat233 <br></li>
<li>RemoveIncompatibleAddOns @MargaretTheFool &amp; @Impostor4291 &amp; @NikoCat233 &amp; @Tommy-XL <br>
<ul>
<li>When add-ons or roles are changed mid-game, the game will check whether existing add-ons are compatible with the new ones and remove the incompatible ones<br></li>
<li>Managed by options in add-on tabs<br></li>
</ul>
</li>
<li>Bring back the Old Option Shower @NikoCat233<br></li>
<li>Crowded Mod now included in TOHE<br>
<ul>
<li>TOHE is now incompatible with CrowdedMod since we included all its features (Modded Servers Only)<br></li>
<li>You can now set imposter number to 0<br></li>
</ul>
</li>
<li>New Tasks Assign System<br>
<ul>
<li>TOHE now ultimately assigns tasks apart from InnerSloth's system<br></li>
<li>Role conversion mid-game will now reset tasks<br></li>
</ul>
</li>
<li>Ported Custom Net Object System from MoreGameModes @Ultradragon005<br></li>
<li>Intro Screen Improvements<br>
<ul>
<li>Traitor now sees impostors on the intro screen<br></li>
<li>Apocalypse Intro Screen by @margaretthefool<br></li>
<li>Lover and Egoist IntroCutscene by @PEPPERcula<br></li>
<li>Impostor and Madmate see each other on Intro<br></li>
<li>Changed Intro sound for some roles by @PEPPERcula<br></li>
</ul>
</li>
<li>Role conversion log (displayed along with Kill log)<br>
<ul>
<li>Will only display Main Role changes for players in the kill log<br></li>
</ul>
</li>
<li>Prevent dead players from knowing roles immediately after death<br>
<ul>
<li>Will know when the meeting starts<br></li>
<li>Prevent Nemesis and Retributionist from seeing roles before the &quot;skill used up&quot; option<br></li>
</ul>
</li>
<li>New command: /start for moderators to start a game @laikrai <br></li>
<li>Critical Error Manager @Tommy-XL <br></li>
<li>Hash API System<br>
<ul>
<li>Now the mod calculates its file hash and uses that to interact with Enhanced API<br></li>
</ul>
</li>
</ul>
<p><b>Major Role Changes:</b><br></p>
<ul>
<li>Coven Roles are now back! @MargaretTheFool <br>
<ul>
<li>You can find a detailed document by <a href="https://docs.google.com/document/d/1KaBjn6qk5NqUC7Ax7uQxXY1C9wsswWH__rBdzrZCd1I/edit?usp=sharing" target="_blank" rel="noopener noreferrer">clicking here</a> or on the <a href="https://tohe.weareten.ca/" target="_blank" rel="noopener noreferrer">Website</a>!<br></li>
</ul>
</li>
<li>Chief Of Police (CoP) Returns<br></li>
<li>CoP can recruit anyone as Sheriff<br>
<ul>
<li>CoP may commit suicide depending on the setting upon an incorrect recruit<br></li>
</ul>
</li>
<li>New Experimental Role: Shocker by @laikrai <br></li>
<li>New Role AbyssBringer (ported from EHR)<br>
<ul>
<li>BlackHole will freeze for 3 seconds after meeting<br></li>
</ul>
</li>
<li>New role Revenant by @LimeAU<br></li>
<li>Reworked Jackal<br>
<ul>
<li>Jackal can now convert anyone into SideKick<br></li>
<li>Sidekick can now turn into Jackal after Jackal's death<br></li>
</ul>
</li>
<li>Reworked Amnesiac<br>
<ul>
<li>Can now turn into any role<br></li>
<li>Cannot vent after changing role depending on the can vent setting<br></li>
</ul>
</li>
<li>Rework Deputy<br>
<ul>
<li>Handcuffed players now have to use the kill button on others to break the handcuff<br></li>
</ul>
</li>
<li>Baker's role block ability is reworked to reset kill cooldown @margaretthefool (Niko doubts whether it works)<br></li>
<li>Improve Admired interactions for some roles @Impostor4291<br>
<ul>
<li>For example, admired time thief will now add meeting time, and gangster/godfather are recruiting correctly (Hopefully, Niko didn't check the code carefully)<br></li>
</ul>
</li>
<li>Cultist is now a Neutral killing role @impostor4291<br></li>
<li>Troller is now a Neutral Benign role @impostor4291<br></li>
<li>Engineer-based roles with 1-second vent duration now can't move in the vent (like jester)<br></li>
<li>New Option: Dictator use /vote command to expel players @hinhinarrrrrr<br></li>
</ul>
<p><b>Minor Role Changes</b><br></p>
<ul>
<li>Double Agent now can kill when it's the only imp alive @Impostor4291<br></li>
<li>Changed the ability button text for some roles @PEPPERcula<br></li>
<li>Fix Role Description for DollMaster and ChiefOfPolice by @Impostor4291<br></li>
<li>Add target mark for Seeker<br></li>
<li>Add note for vent for Altruist<br></li>
<li>CopyCat now can't copy Baker<br></li>
<li>Added some new options for Berserker, PlagueBearer, Soul Collector by @ApeMV<br></li>
<li>Scavenger now has its death reason by @ApeMV<br></li>
<li>Add kill notification for guardian<br></li>
<li>Opportunist can vent option by @PEPPERcula<br></li>
<li>Pestilence can kill guesser option by @ApeMV<br></li>
<li>Baker now uses the shapeshift button to transform by @MargaretTheFool <br></li>
<li>Lawyer is now a Single Role to avoid unknown bugs<br></li>
<li>MasterMind now is an experimental role since it causes some bugs<br></li>
<li>Added Evil Mini cannot be guessed before turning 18 option<br></li>
<li>Add Legacy option for Traitor and Parasite (Can Shapeshift) by @PEPPERcula<br></li>
<li>Other Minor changes that are missed from this list<br></li>
</ul>
<p><b>Improvements</b><br></p>
<ul>
<li>New Option For Low Load: Delay Update Names @Tommy-XL<br>
<ul>
<li>Previously, names for vanilla clients would update every second. This seemed unnecessary, so we added this option to only update names for vanilla when necessary<br></li>
<li>If you have any issues with name updates, please turn off this option and send us a report or open an Issue!<br></li>
</ul>
</li>
<li>New option: Change first kill cool down @Tommy-XL<br>
<ul>
<li>This means now you can decide whether to reset a killer's KCD to normal or set a shared KCD on game start<br></li>
</ul>
</li>
<li>Added new win Condition for Quizmaster @Bri1101<br></li>
<li>Added more role fallbacks for Lawyer and Executioner when their target would die @Bri1101<br></li>
<li>Added new Chief of Police (COP) Settings @Reborn5537<br></li>
<li>New Option: Eraser can guess an Erased player<br></li>
<li>New Jackal Recruit Options @laikrai<br></li>
<li>Update some strings for consistency and error fixes @NikoCat233 &amp; @PEPPERcula <br></li>
<li>Add Some Crew Roles For Copycat @Tommy-XL<br></li>
<li>Improve Godfather's add-on assignment @impostor4291<br></li>
<li>Disperser, Escapist, Soul Catcher, Miner, Quick Shooter use unshapeshifter @impostor4291 &amp; @Bri1101</li>
<li>More Custom Buttons @PEPPERcula<br>
<ul>
<li>18 images added or updated to the mod<br></li>
</ul>
</li>
</ul>
<p><b>Silent Tweaks:</b><br></p>
<ul>
<li>Send failed error on failed murder attempts @NikoCat233<br></li>
<li>Improve code performance @Tommy-XL<br></li>
<li>Improve AntiBlackout @Tommy-XL<br></li>
<li>Repo is now set to use utf-8 crlf as encoding. @NikoCat233<br></li>
</ul>
<p><b>Other Bug Fixes and Improvements</b><br></p>
<ul>
<li>Fixed bug when role name for modded players hide in Mushroom Spore<br></li>
<li>Fixed Cursed Soul stole the win of Workaholic setting<br></li>
<li>Fixed Cursed Soul setting &quot;know role&quot; not work<br></li>
<li>Fixed Quizmaster stole the win of Terrorist setting<br></li>
<li>Fixed some errors in the logs<br></li>
<li>Now Schrodingers Cat can't get Cyber<br></li>
<li>Solsticer and Workaholic won't be Executioner's target @impostor4291 and @Tommy-XL <br></li>
<li>Solsticer can't be Bounty Hunter or Huntsman's target @Bri1101<br></li>
<li>Fixed CN_Template @Reborn5537 <br></li>
<li>Fix Horse Mode and Long Neck Mode by @PEPPERcula<br></li>
<li>Madmate impostors can get the last impostor @impostor4291<br></li>
<li>Auto start added after a specific time on modded regions @NikoCat233 <br></li>
<li>Fixed error ending the game when a player disconnects due to an error on modded regions @NikoCat233<br></li>
<li>Delayed the check of the closest vent and serialized close vent @Tommy-XL <br></li>
<li>Fixed additional winners sometimes being missed from final winners @impostor4291<br>
<ul>
<li>Bounty Hunter and Huntsman can no longer target friendly team members (e.g., their lover or romantic partner)<br></li>
</ul>
</li>
<li>Fixed an issue where a modded client Lawyer/Executioner may have tasks @NikoCat233<br></li>
<li>Fixed a bug where the Mechanic was unable to open all doors on The Fungle @NikoCat233<br></li>
<li>Fixed a bug where Godfather would work on dead players @MargaretTheFool <br></li>
<li>Fixed a bug where Torch would be assigned an incorrect Vision Multiplier @impostor4291<br></li>
<li>Fixed a bug where players were able to kill immediately after a meeting @Tommy-XL<br></li>
<li>Fixed Overseer interactions with Trickstar and Illusionist @impostor4291<br></li>
<li>Fix a bug where the Moon Dancer would cause null reference errors @NikoCat233<br></li>
<li>Adjusted roles such as Jester, Jackal, and Sidekick to prevent them from getting ghost roles @Tommy-XL<br></li>
<li>Fixed a bug where modded clients would play shield animations despite &quot;Disable Shield Animations&quot; being off @Tommy-XL<br></li>
<li>Fixed a bug where Madmate Psychic would not see all Neutrals in red names @Bri1101<br></li>
<li>Fixed a bug where the guesser was unable to guess roles instead of being unable to guess players based on their faction @impostor4291<br></li>
<li>Fixed a bug where the Security Camera ran despite the player being exiled @Tommy-XL<br></li>
<li>Fixed Mad/Recruit/Enchanted Amnesiac being able to report bodies after killing @Bri1101<br></li>
<li>Fixed Jackal and Police Chief being able to recruit Neutral Apocalypse @Reborn5537<br></li>
<li>Our future official releases will include obfuscation on specific methods and functions. <br>
<ul>
<li>Obfuscation aims to protect our official builds from malicious tampering.<br></li>
</ul>
</li>
<li>Language folder is now changed to TOHE\Language<br></li>
<li>Rebased RoleBase to include targeting Custom Roles in it<br></li>
<li>Included latest Custom Region files in the mod<br></li>
<li>Added backup API URL in an attempt to ease connection issues in certain countries and regions<br></li>
<li>Improved multiple typos and strings by @MargaretTheFool @PEPPERcula @Impostor4291 @Laikrai<br></li>
<li>Fixed Random Spawn leads to a ban on anti-cheat regions<br></li>
<li>Fixed double spy seeing each other's orange name<br></li>
<li>Fixed rebirth vote-out on Solsticer and Mini<br></li>
<li>Fix Host DoomSayer can infinite guess<br></li>
<li>Fix changing gamemode sometimes showing HideNSeek<br></li>
<li>Fixed the bug where Arsonist may not be able to douse someone (maybe)<br></li>
<li>Fixed Consigliere not being able to guess specific roles<br></li>
<li>Fixed Kamikaze mod clients not seeing icons<br></li>
<li>Fixed some roles, allowing misguess to be ignored<br></li>
<li>Fix stealer add-on displaying wrong vote number on display<br></li>
<li>Fix sending chat bug causing blackmailer false spam<br></li>
<li>Possibly fixed vanilla clients still seeing the modded name on meeting after a player has left the game<br></li>
<li>Fixed Quick Shooter may bug sometimes<br></li>
<li>Maybe Fixed Error Spam when a modded client disconnected from the game during a meeting or other necessary period<br></li>
<li>Fix Maverick kill number not syncing<br></li>
<li>Recoded Seeker<br></li>
<li>Fix Converted Jailer from losing all their executions<br></li>
<li>Mod Updater now uses Dispatcher<br></li>
<li>Other bug fixes that Niko randomly missed, deleted from this list, or are included in other changes<br></li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v2.1.1</font></b></summary>
<p>= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Baker not showing roles to non-host modded players<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed mass kicking from lobbies against non-host modded players<br></p>
</details>
<details>
<summary><b><font color=#d395b4>v2.1.0</font></b></summary>
<p>= <font color=#de6707><b>KNOWN BUG</b></font>: (Maybe fixed now) Servers may be unstable as the protocol requires fixing on Innersloth's side<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Doppelganger, Swift, &amp; Imitator are working, but are unstable<br></p>
<ul>
<li>
<font color=green><b>NEW ROLES/ADDONS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Possessor (Imposter Ghost Role, idea &amp; coded: D1GQ)  <br>
+ <font color=green><b>NEW</b></font>: Sloth (Addon Harmful, Idea &amp; Coded: Pyro) (mostly code borrowed from Flash)<br>
+ <font color=green><b>NEW</b></font>: Yin Yanger (Impostor Killing, idea &amp; coded: Drakos)<br>
+ <font color=green><b>NEW</b></font>: Troller (Neutral Chaos, idea: dx7405, coded: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Altruist (Crewmate Support, ported: TOHR, coded: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Ventguard (Crewmate Support, ported: EHR, coded by: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Evader (Addon Helpful, idea: Lime, coded: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Rebirth (Addon Helpful, idea &amp; coded: Drakos)<br>
+ <font color=green><b>NEW</b></font>: Eavesdropper (Addon Helpful, idea by: Crosspost Del Slay, coded: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Spurt (Addon Helpful, idea by: .thediamondstar)<br>
+ <font color=green><b>NEW</b></font>: Prohibited (Addon Harmful, by: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: New Neutral Team (Faction): Neutral Apocalypse (Can be sets min/max Neutral Apocalypse) (Coded by: Marg)<br>
+ <font color=green><b>NEW</b></font>: New role: Baker (Coded by: Marg)<br>
+ <font color=green><b>NEW</b></font>: Berserker and PlagueBearer now moved to Neutral Apocalypse (Reworked by: Marg)<br>
+ <font color=green><b>NEW</b></font>: Soul Collector reworked (Reworked by: Marg)<br></p>
<ul>
<li>
<font color=green><b>NEW SETTINGS/FEATURES</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Added disabling use vent for vanilla (ported from MoreGamemodes, by TommyXL &amp; NikoCat) (When a player does not have access to vents, they will never be able to use it)<br>
+ <font color=green><b>NEW</b></font>: More fixes for AntiBlackOut (By TommyXL &amp; Drakos) (Note: This will not completely fix black screen issues, but the more players there are in the game, the less chance of black screen occurrences. To do this, we use revives and base role changes during exile, so that dead players will be alive for a couple of seconds, but will become dead again)<br>
+ <font color=green><b>NEW</b></font>: Added support role basic changer mid-game (By TommyXL &amp; Drakos) (CopyCat now support role basis changes. Executioner and Lawyer also change role basic after target dead)<br>
+ <font color=green><b>NEW</b></font>: TextBoxPatch (Ported: EHR, coded: TommyXL) (Allows you to write any characters into the chat)<br>
+ <font color=green><b>NEW</b></font>: Improved Region Menu (coded: D1GQ)<br>
+ <font color=green><b>NEW</b></font>: Added custom label ID for modded (Ported: EHR, coded: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Jester: &quot;Can't Move In Vents&quot; (Setting, coded: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Random spawn: Active On Round One (Setting, coded: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Added warning message about enabled setting &quot;No Game End&quot; (Warning only host when he presses the start button)<br>
+ <font color=green><b>NEW</b></font>: Disable Shapeshift menu for some Reject Shapeshift roles (By: Drakos) (For Pitfall, Bomber, Undertaker, Maybe will used for some more roles)<br>
+ <font color=green><b>NEW</b></font>: Return Ability Votes (By: Drakos) (For Cleanser, Eraser, Fortune teller, Keeper, Oracle, Godfather. First Vote will cancel (Vote Skip) or use the ability, second is normal vote)<br>
+ <font color=green><b>NEW</b></font>: Added &quot;/vote&quot; command (By: Drakos) (Can be disabled in setting)<br>
+ <font color=green><b>NEW</b></font>: Death reason display improved (ported from EHR).<br>
+ <font color=green><b>NEW</b></font>: Added role info in setting menu (By: Drakos)<br>
+ <font color=green><b>NEW</b></font>: Added search bar in settings (By: Drakos)<br>
+ <font color=green><b>NEW</b></font>: Addon Base (Port From EHR) (By: Drakos) (The settings are now sorted alphabetically)<br>
+ <font color=green><b>NEW</b></font>: Changed warning message about the API (By: Drakos)<br>
+ <font color=green><b>NEW</b></font>: Jester: Reveal Upon Eject (Setting, by: TheDiamondStar)<br>
+ <font color=green><b>NEW</b></font>: Executioner: Reveal Target Upon Ejection (Setting, by: TheDiamondStar)<br>
+ <font color=green><b>NEW</b></font>: Judge: Max trials per game (Setting, by: hinhinarrrrrr)<br>
+ <font color=green><b>NEW</b></font>: Improved menu for role description in settings<br>
+ <font color=green><b>NEW</b></font>: Setting: Apocalypse can see each other's Add-ons<br>
+ <font color=green><b>NEW</b></font>: Settings: &quot;Halloween Decorations&quot; and &quot;Birthday Decoration&quot; (only for modded)<br>
+ <font color=green><b>NEW</b></font>: Modded players now will see changes in TOHE settings<br>
+ <font color=green><b>NEW</b></font>: Added custom image &quot;Timer&quot; for Mercenary, Bounty Hunter and Penguin: Thanks @that_one_missing_pixel (Pixel)<br></p>
<ul>
<li>
<font color=#1376f0><b>BUG FIXES/CHANGES</b></font><br></li>
</ul>
<p>= <font color=#1376f0><b>BUG FIX</b></font>: Phantom Desync: Phantom now plays the invisibility animation instead of teleporting to a random vent for desync roles.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed issues with Veteran killing Taskinator, Killing Machine calling meetings, and the Jailed message not showing during the game.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Resolved issues with FFA meetings getting stuck and Fortune Teller showing roles during FFA.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed speed bug when Bandit steals the Statue.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Resolved Haunt Menu showing &quot;NotAssigned&quot; in Hide &amp; Seek mode.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Corrected issues with Doomsayer not using Impostor Vision and various bugs with Psychic.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Taskinator triggering Schrodinger's Cat ability.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Corrected Innocent win conditions with Impostor when the setting is enabled.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed player spawn issues at the start and after meetings.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Resolved full role and add-on display when a player is exiled.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Blackmail not working for non-host modded players.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Resolved issues where Deceiver could kill Serial Killer, and where Deceiver could kill dead players.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Corrected several bugs related to Stalker, Enigma, and Madmate Impostor Vision.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed issues with Medium messages showing after Medium is dead.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Resolved bug where Hangman could kill Nice Mini.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Corrected Huntsman minimum kill cooldown.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Bloodmoon not working for modded clients and corrected missing strings for Blackmailer.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed issues where Overseer would show Med Scanner after a meeting.<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Inhibitor and Saboteur now use sabotage sounds in the intro.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Resolved issues where Aware did not work after an Overseer check and Merchant could assign converted add-ons.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bugs with Hater being unable to kill, Crewpostor killing Solsticer, and Impostor Vision not working for Doppelganger.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Resolved modded client issues with calling RpcSetName at the end of the game.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed win condition conflicts between Terrorist and Workaholic.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Corrected Necroview interaction with Admired and Madmate roles.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Resolved bugs with Judge for modded clients.<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Gangster and Admirer can no longer get the Egoist role.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bugs with Minus and Plus buttons in settings, ensuring they are always active.<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Intro Scene optimizations for smoother game start.<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed numerous typos across roles and settings.<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Jester can no longer receive the Susceptible role.<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Added notify message about game end when RpcEndGame is not received by certain clients.<br></p>
</details>
<details>
<summary><b><font color=#d395b4>v2.0.3</font></b></summary>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>= <font color=#de6707><b>KNOWN BUG</b></font>: (Maybe fixed now) Servers may be unstable as the protocol requires fixing on Innersloth's side<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Doppelganger, Swift, &amp; Imitator are working, but are unstable<br></p>
</div>
<ul>
<li>
<p>By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a><br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when the host changed his nickname to his own when he was killed by Doppelganger (hopefully) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when F1 shows role settings<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Veteran kills Taskinator<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed (hopefully) the last color question for Quizmaster<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Killing Machine can call a meeting<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Jailed message not shown<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Set 300 CD for Nemesis if they cannot use the kill button<br></p>
</li>
<li>
<p>By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a><br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Changed warning message about Api Error Connection<br></p>
</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v2.0.2</font></b></summary>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>= <font color=#de6707><b>KNOWN BUG</b></font>: Servers may be unstable as the protocol requires fixing on Innersloth's side<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Doppelganger, Swift, &amp; Imitator are working, but are unstable<br></p>
</div>
<p>= <font color=#1376f0><b>BUG FIX</b></font>: Fixed broken Auto Start<br></p>
</details>
<details>
<summary><b><font color=#d395b4>v2.0.1</font></b></summary>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>= <font color=#de6707><b>KNOWN BUG</b></font>: Servers may be unstable as the protocol requires fixing on Innersloth's side<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Doppelganger, Swift, &amp; Imitator are working, but are unstable<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Modded clients have some problems, so it is  temporarily recommended that only the host has the mod installed, and players to join on Vanilla.<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Black screen after meeting for vanilla players (This is not fixable at this time as it's an issue with Vanilla, not TOHE)<br></p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Extra Info</p>
<p>= <font color=#ece218><b>NOTICE</b></font>: Support latest version Among Us v2024.6.18 (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>, <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>, <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>, <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
= <font color=#ece218><b>NOTICE</b></font>: New Settings UI (Base ported from <a href="https://github.com/Yumenopai/TownOfHost_Y" target="_blank" rel="noopener noreferrer">TOH-Y</a>)<br></p>
</div>
<ul>
<li>
<p>By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a><br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when after guessing, Judge, etc. the meeting status was not checked<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Pelican ended the game when eaten players returned<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Avenger when they try to kill Necromancer<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Bodyguard/Crusader when they killed Bodyguard/Crusader, Taskinator and Veteran<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed &quot;Quizmaster.None&quot;<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed missed string &quot;*MayorHideVote&quot; for Vindicator<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Madmate assign Neutrals (Does not apply to Admirer)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Camouflage did not disappear after Camouflager was erased<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Probably fixed the bug when Kamikaze killed players during exile<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Probably fixed bug when in-game result displayed randomized nicknames<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Auto Start always stes ans saved 0 kill cooldown<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Other small fixes that occurred in certain cases<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Swift can no longer get Tricky and vice versa<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Remove unnecessary parenthesis for Lighter<br></p>
</li>
<li>
<p>By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a><br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Fortune Teller shows &quot;INVALID:NotAssigned&quot;<br></p>
</li>
</ul>
<p><b>Special thanks for help developing this version:</b>
<a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>, <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>, <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>, <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>, <a href="https://github.com/D1GQ" target="_blank" rel="noopener noreferrer"><strong>D1GQ</strong></a>, <a href="https://github.com/ryuk2098" target="_blank" rel="noopener noreferrer"><strong>ryuk</strong></a>, <a href="https://github.com/MargaretTheFool" target="_blank" rel="noopener noreferrer"><strong>Marg</strong></a>, <a href="https://github.com/0xDrMoe" target="_blank" rel="noopener noreferrer"><strong>Moe</strong></a>, <a href="#"><strong>WaterPanda</strong></a>, <a href="https://github.com/LezaiYa" target="_blank" rel="noopener noreferrer"><strong>乐崽吖</strong></a>, <a href="https://www.youtube.com/@200iqguy" target="_blank" rel="noopener noreferrer"><strong>Gurge44</strong></a>, <a href="https://sites.google.com/view/notpyro404" target="_blank" rel="noopener noreferrer"><strong>NotPyro404</strong></a>, <a href="https://github.com/GameTechGuides" target="_blank" rel="noopener noreferrer"><strong>GameTechGuides</strong></a></p>
</details>
<details>
<summary><b><font color=#d395b4>v2.0.0</font></b></summary>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>= <font color=#de6707><b>KNOWN BUG</b></font>: Servers may be unstable as the protocol requires fixing on Innersloth's side<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Doppelganger, Swift, &amp; Imitator are working, but are unstable<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Modded clients have some problems, so it is  temporarily recommended that only the host has the mod installed, and players to join on Vanilla.<br>
= <font color=#de6707><b>KNOWN BUG</b></font>: Black screen after meeting for vanilla players (This is not fixable at this time as it's an issue with Vanilla, not TOHE)<br></p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Extra Info</p>
<p>= <font color=#ece218><b>NOTICE</b></font>: Support latest version Among Us v2024.6.18 (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>, <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>, <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>, <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
= <font color=#ece218><b>NOTICE</b></font>: New Settings UI (Base ported from <a href="https://github.com/Yumenopai/TownOfHost_Y" target="_blank" rel="noopener noreferrer">TOH-Y</a>)<br></p>
</div>
<ul>
<li>
<font color=green><b>NEW ROLES/ADDONS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: <RouteLink to="/changelogs/options/Impostors/Killing/EvilHacker.html">Evil Hacker</RouteLink> (Impostor Killing - Ported from <a href="https://github.com/tukasa0001/TownOfHost" target="_blank" rel="noopener noreferrer">TOH</a>)<br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/changelogs/options/Impostors/Experimental/DollMaster.html">Doll Master</RouteLink> (Experimental Impostor - By <a href="https://github.com/D1GQ" target="_blank" rel="noopener noreferrer"><strong>D1GQ</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/changelogs/options/Addons/Helpful/Radar.html">Radar</RouteLink> (Helpful Add-On - By <a href="https://github.com/ryuk2098" target="_blank" rel="noopener noreferrer"><strong>ryuk</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/changelogs/options/Addons/Experimental/Glow.html">Glow</RouteLink> (Experimental Add-On -By <a href="https://github.com/ryuk2098" target="_blank" rel="noopener noreferrer"><strong>ryuk</strong></a>)<br></p>
<ul>
<li>
<font color=#e08709><b>IMPROVED ROLES</b></font><br></li>
</ul>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: <RouteLink to="/changelogs/options/Impostors/Killing/Ninja.html">Ninja</RouteLink> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: <RouteLink to="/changelogs/options/Impostors/Killing/Chronomancer.html">Chronomancer</RouteLink> (By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: <RouteLink to="/changelogs/options/Impostors/Killing/Councillor.html">Councillor</RouteLink> (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: <RouteLink to="/options/Neutrals/Killing/Plaguebearer.html">Plague Bearer</RouteLink> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: <RouteLink to="/options/Neutrals/Benign/SchrodingersCat.html">Schrodinger's Cat</RouteLink> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: <RouteLink to="/options/Addons/Impostor/Tricky.html">Tricky</RouteLink> (By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br></p>
<ul>
<li>
<font color=#12edaf><b>GHOST ROLES RETURNED</b></font><br></li>
</ul>
<p>+ <font color=#12edaf><b>RETURNED</b></font>: <RouteLink to="/options/Crewmates/Ghost/Ghastly.html">Ghastly</RouteLink> (Crewmate Ghost - By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
+ <font color=#12edaf><b>RETURNED</b></font>: <RouteLink to="/options/Crewmates/Ghost/Hawk.html">Hawk</RouteLink> (Crewmate Ghost - By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
+ <font color=#12edaf><b>RETURNED</b></font>: <RouteLink to="/options/Crewmates/Ghost/Warden.html">Warden</RouteLink> (Crewmate Ghost - By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
+ <font color=#12edaf><b>RETURNED</b></font>: <RouteLink to="/options/Impostors/Ghost/Bloodmoon.html">Bloodmoon</RouteLink> (Impostor Ghost - By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
+ <font color=#12edaf><b>RETURNED</b></font>: <RouteLink to="/options/Impostors/Ghost/Minion.html">Minion</RouteLink> (Impostor Ghost - By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
+ <font color=#12edaf><b>RETURNED</b></font>: <RouteLink to="/options/Crewmates/Vanilla/GuardianAngel.html">Guardian Angel</RouteLink> (Support Vanilla Role - By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br></p>
<ul>
<li>
<font color=green><b>NEW COMMANDS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: <code v-pre>/poll</code> (By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <code v-pre>/8ball</code> (By <a href="https://github.com/MargaretTheFool" target="_blank" rel="noopener noreferrer"><strong>Marg</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <code v-pre>/me</code> (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <code v-pre>/icon</code> (By <a href="#"><strong>WaterPanda</strong></a>)<br></p>
<ul>
<li>
<font color=green><b>NEW SETTINGS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Client Setting: <code v-pre>Disable Lobby Music</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Amnesiac: <code v-pre>Has Arrows pointing toward bodies</code> (By <a href="https://github.com/ryuk2098" target="_blank" rel="noopener noreferrer"><strong>ryuk</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Engineer: <code v-pre>Vent Cooldown</code> and <code v-pre>Max Time In Vents</code> (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Councillor: <code v-pre>Show Trial as Councillor Murder</code> (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Councillor: <code v-pre>Suicide when judge Impostors Team Wrongly</code> (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Councillor: <code v-pre>Can Murder Snitch with All Tasks Done</code> (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <code v-pre>Instant Auto-Start</code> (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <code v-pre>Everyone Can See Death Reason</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <code v-pre>Hide All Tags (for AutoMuteUs)</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Pickpocket, Stealer and Paranoia: <code v-pre>Hide Additional Vote(s)</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Monarch: <code v-pre>Hide additional vote for Knighted players</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Maverick: <code v-pre>Minimum number of kills to win</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: YouTuber: <code v-pre>The Killer Wins with YouTuber</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: <code v-pre>Disable Task Win If All Crews Are Dead</code> (Ported from <a href="https://github.com/Gurge44/EndlessHostRoles" target="_blank" rel="noopener noreferrer">EHR</a>)<br>
+ <font color=green><b>NEW</b></font>: <code v-pre>Disable Task Win If All Crews Are Converted</code> (Ported from <a href="https://github.com/Gurge44/EndlessHostRoles" target="_blank" rel="noopener noreferrer">EHR</a>)<br></p>
<ul>
<li>
<font color=#e08709><b>NEW/IMPROVED FEATURES</b></font><br></li>
</ul>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: Some roles based on Shapeshift will never play the Shapeshift animation (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Lobby timer displayed for vanilla players (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Modded players can see the host during meetings (Online Only - By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Vanilla players can see the roles of the winning players at game end (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Real death reason displayed for players who left the game after death (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved role and add-on assign (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved Auto-Updater (By <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Horse Mode returned (By <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved API Connection loading (By <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Automatically ban spoofed friend codes (Can be disabled in settings - By <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Re-added colors to kill log and last roles commands (By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: TOHE Dropship Decorations (Can be disabled in client settings - By <a href="https://github.com/D1GQ" target="_blank" rel="noopener noreferrer"><strong>D1GQ</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Vanilla player based on impostor show real team in intro scene (By <a href="https://github.com/D1GQ" target="_blank" rel="noopener noreferrer"><strong>D1GQ</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved showing role info for vanilla players (By <a href="https://github.com/D1GQ" target="_blank" rel="noopener noreferrer"><strong>D1GQ</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: EAC improvements (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Added custom sounds for Eraser and Oiiai after erased role (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Region Menu paging behavior (From TONX - By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br></p>
<ul>
<li>
<font color=#F6BE00><b>SOME CHANGES/IMPROVEMENTS</b></font><br></li>
</ul>
<p>= <font color=#F6BE00><b>CHANGE</b></font>: Penguin's victim can no longer vent (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Enigma max name length increased from 8 to 10 (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Eraser can't guess erased players (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Block Punching Bag guessing if a player tries to guess it again (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Optimized Fortune Teller (By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Version display size reduced by 70% (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Lobby timer in <code v-pre>template.txt</code> (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Added Server Name in ping tracker (By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Updated background images: Main Menu now features art winners (By <a href="https://github.com/ryuk2098" target="_blank" rel="noopener noreferrer"><strong>ryuk</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Changed role name size for modded and vanilla (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Hide report button for Killing Machine (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
- <font color=red><b>REMOVED</b></font>: Client Settings: <code v-pre>Small Screen Mode</code> and <code v-pre>Enable it if you use AutoMuteUs</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
Added <code v-pre>F3</code> and <code v-pre>F4</code> to show role and add-ons settings, respectively (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Changed Kamikaze symbol (By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
+ <font color=green><b>NEW</b></font>: Added icon for Jailer (By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: When Mayor use portable button it shows as a button pressed (By <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Allow players to be banned by only using the first name in <code v-pre>BanList.txt</code> (By <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Updated Ability button text for Seeker, Coroner, Romantic, and Werewolf (By <a href="https://github.com/MargaretTheFool" target="_blank" rel="noopener noreferrer"><strong>Marg</strong></a>)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Moved Double Shot and Rebound to <code v-pre>Game Modifiers</code> (By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>)<br>
+ <font color=#12edaf><b>RENAMED</b></font>: Masochist renamed to <RouteLink to="/options/Neutrals/Evil/PunchingBag.html">Punching Bag</RouteLink> (By <a href="#"><strong>WaterPanda</strong></a>)<br>
+ <font color=#12edaf><b>RENAMED</b></font>: Bloodlust renamed to <RouteLink to="/options/Addons/Mixed/Bloodthirst.html">Bloodthirst</RouteLink> (By <a href="#"><strong>WaterPanda</strong></a>)<br>
+ <font color=#12edaf><b>RENAMED</b></font>: Schizophrenic renamed to <RouteLink to="/options/Addons/Mixed/Paranoia.html">Paranoia</RouteLink> (By <a href="#"><strong>WaterPanda</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: All instances of <code v-pre>tohre.dev</code> updated to <code v-pre>weareten.ca</code> (By <a href="https://sites.google.com/view/notpyro404" target="_blank" rel="noopener noreferrer"><strong>NotPyro404</strong></a>)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: All instances of <code v-pre>ko-fi.com/tohe</code> updated to <code v-pre>weareten.ca/tohe/</code> (By <a href="https://sites.google.com/view/notpyro404" target="_blank" rel="noopener noreferrer"><strong>NotPyro404</strong></a>)<br><br></p>
<p><b>Special thanks for help developing this version:</b>
<a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a>, <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer"><strong>Drakos</strong></a>, <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>, <a href="https://github.com/Pietrodjaowjao" target="_blank" rel="noopener noreferrer"><strong>Pietro</strong></a>, <a href="https://github.com/D1GQ" target="_blank" rel="noopener noreferrer"><strong>D1GQ</strong></a>, <a href="https://github.com/ryuk2098" target="_blank" rel="noopener noreferrer"><strong>ryuk</strong></a>, <a href="https://github.com/MargaretTheFool" target="_blank" rel="noopener noreferrer"><strong>Marg</strong></a>, <a href="https://github.com/0xDrMoe" target="_blank" rel="noopener noreferrer"><strong>Moe</strong></a>, <a href="#"><strong>WaterPanda</strong></a>, <a href="https://github.com/LezaiYa" target="_blank" rel="noopener noreferrer"><strong>乐崽吖</strong></a>, <a href="https://www.youtube.com/@200iqguy" target="_blank" rel="noopener noreferrer"><strong>Gurge44</strong></a>, <a href="https://sites.google.com/view/notpyro404" target="_blank" rel="noopener noreferrer"><strong>NotPyro404</strong></a>, <a href="https://github.com/GameTechGuides" target="_blank" rel="noopener noreferrer"><strong>GameTechGuides</strong></a>.<br></p>
<ul>
<li>Check out all of our translators on our <a href="https://tohe.weareten.ca/AboutUs.html" target="_blank" rel="noopener noreferrer"><strong>Website</strong></a><br></li>
</ul>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/v1.6.0...v2.0.0" target="_blank" rel="noopener noreferrer"><strong>Full v2.0.0 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.6.0</font></b></summary>
<ul>
<li>
<font color=green><b>NEW ADDONS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Statue (Harmful Addon - By: Drakos, Idea: spong)<br></p>
<ul>
<li>
<font color=green><b>COLLABORATIVE CHANGES</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: New function for Shapeshift roles: Reject-ShapeShift (By: NikoCat223 - Created the base code, and TommyXL - Helped) (All roles that can use shapeshift will no longer play the shapeshift animation) (This function can be adjusted using the setting «Disable Shapeshift Animations» (The Sniper has a separate setting)) (Note: In the next version it may be changed, for example: some roles will have Shapeshift disabled by default and some roles will add a setting with «Disable Shapeshift Animation»)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved code base for all add-ons (By: Drakos - Created the base code, and TommyXL - Partially helped)<br></p>
<ul>
<li>
<font color=green><b>NEW SETTINGS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Disable VoteKick System (By: Pietro)<br>
+ <font color=green><b>NEW</b></font>: Impostors can see each other's Add-ons (By: TommyXL)<br>
+ <font color=green><b>NEW</b></font>: Players can use «/tpin» and «/tpout» commands (By: ryuk)<br>
+ <font color=green><b>NEW</b></font>: Players can play mini-games (By: ryuk)<br>
+ <font color=green><b>NEW</b></font>: Client setting: «Dark Theme» (By: TommyXL - Ported From EHR - Works only for modded players)<br></p>
<ul>
<li>
<font color=green><b>NEW FEATURES</b></font><br></li>
</ul>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved announcement patch (By: ryuk - Ported from TOH-Y)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Added «dlekS ehT» in Map Picker Menu (By: TommyXL - Thanks Submerged source code)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved role spawns (By: TommyXL - Ported from EHR) (Now for each role, you can set the chance of appearance from 0% to 100%)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved Role Summary (By: TommyXL - Ported From EHR)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Revert to old Kill logs (By: ryuk) (The kill log and end summary will also automatically remove HTML tags if the length is too long (even with setting off). This is done because if the message is too big, it will not be sent to some players)<br></p>
<ul>
<li>
<font color=#F6BE00><b>SOME CHANGES/IMPROVEMENTS</b></font><br></li>
</ul>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: We will now use «Mini.RegionInstall» to add modded servers<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Now backgrounds are set in randomly (By: ryuk - from art competitions)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: If a user fails dbconnect on first login, it will be turned to offline mode and forced to re-login (By: NikoCat223)<br>
- <font color=red><b>REMOVED</b></font>: Client Setting «Old Role Summary» removed (By: TommyXL)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Modded players now will show the player role in the Haunt Menu instead of the base role (By: TommyXL)<br>
- <font color=red><b>REMOVED</b></font>: Unused strings were removed (By: ryuk - Thanks to kevoutings for providing all the unused strings)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Now vanilla roles and Amnesiac always will be shown in Guesser UI (By: TommyXL)<br></p>
<ul>
<li>
<font color=#1376f0><b>BUG FIXES</b></font><br></li>
</ul>
<p>= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Mod Updater (By: Pietro and NikoCat223)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Progress text and target mark for Pirate (By: ryuk)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Removed Overtired from enabled addons list (By: ryuk)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Shapeshifted Hangman ignores the alerted veteran (By: ryuk)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when «FixedUpdate» for roles working in the lobby (By: TommyXL)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Possibly fixed bug when settings sometimes are not loading (By: TommyXL)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixes for Copycat turning into Retributionist and reverting into Copycat (By: Moe)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Susceptible making role visible to others (By: Drakos)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed some visual bugs with Modded clients (By: NikoCat223)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Bomber and Nuker were banned by EAC after shapeshifting (By: NikoCat223)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Solsticer is no longer a member of any team (By: NikoCat223)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Penguin victim cannot kill (By: NikoCat223)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Pelican cannot eat grabbing penguin (By: NikoCat223)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when the GM gets stuck outside the map on the Airship (By: TommyXL)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed presets in Hide &amp; Seek (By: TommyXL)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed errors in Double Trigger (By: TommyXL)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed some invalid strings for Quiz Master (By: TommyXL)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Mole not working on fungle (By: ryuk)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Remove ejected from Tricky random death reason (By: ryuk)<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Imitator having vanilla cooldown (By: ryuk)<br></p>
<ul>
<li>
<font color=#8708c7><b>TRANSLATIONS</b></font></li>
</ul>
<p>+ <font color=#009b3a><b>Brazilian (Portuguese Brazil)</b></font>: (Dx7405)<br>
+ <font color=#1e448b><b>Dutch</b></font>: (apemv, madmazel_)<br>
+ <font color=#002654><b>French</b></font>: (FuroYT, KevOut, Klaomi, Sansationnelle, Space Monkey)<br>
+ <font color=#009344><b>Italian</b></font>: (alot, Baphojack, Mattix606)<br>
+ <font color=#bd0029><b>Japanese</b></font>: (Sunnyboi)<br>
+ <font color=#009b3a><b>Latam (Latin American)</b></font>: (CreepPower)<br>
+ <font color=#0036a7><b>Russian</b></font>: (TommyXL, Shoulder Devil, chill_ultimated, Nevermore59)<br>
+ <font color=#de2910><b>Simplified Chinese</b></font>: (CrewCyan, LezaiYa, NikoCat223)<br>
+ <font color=#ffc400><b>Spanish</b></font>: (Dawson, Sunnyboi, thewhiskas27, xxSShadow)<br>
+ <font color=#de2910><b>Traditional Chinese</b></font>: (FlyFlyTurtle, Hinharrrrr, netherdragontw, Pomelo_)<br></p>
<ul>
<li>Check out all of our translators on our <a href="https://tohe.weareten.ca/AboutUs.html" target="_blank" rel="noopener noreferrer"><strong>Website</strong></a></li>
</ul>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/v1.5.0...v1.6.0" target="_blank" rel="noopener noreferrer"><strong>Full v1.6.0 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.5.0</font></b></summary>
<ul>
<li>
<font color=green><b>NEW ROLES</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Rift Maker (Support Impostor - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Penguin (Hindering Impostor - Coded by dev TOH and Ported from EHR - By: Drakos) <br>
+ <font color=green><b>NEW</b></font>: Stealth (Hindering Impostor - Coded by dev TOH and Ported from EHR - By: Drakos) <br>
+ <font color=green><b>NEW</b></font>: Plague Scientist (Neutral Killer - Coded by dev TOH and Ported from EHR - By: Drakos) <br>
+ <font color=green><b>NEW</b></font>: Schrodinger's Cat (Neutral Benign - Coded by dev TOH - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Quizmaster (Experimental role - By: Furo) <br></p>
<ul>
<li>
<font color=green><b>NEW ADDONS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Susceptible (Helpful Addon - By: Drakos) <br>
+ <font color=green><b>NEW</b></font>: Tired (Helpful Addon - By: Drakos) <br>
+ <font color=green><b>NEW</b></font>: Tricky (Impostor Add-on - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Rainbow (Miscellaneous Addon - Coded by dev TOH-Y - By: NikoCat223 and LezaiYa) <br></p>
<ul>
<li>
<font color=#12edaf><b>REWORKED/IMPROVED ROLES</b></font><br></li>
</ul>
<p>= <font color=#F6BE00><b>REWORK</b></font>: Killing Machine (Reworked - By: ryuk) <br>
= <font color=#F6BE00><b>REWORK</b></font>: Investigator (Reworked - By: ryuk) <br>
= <font color=#F6BE00><b>REBASED</b></font>: Swapper (Rebased - By: NikoCat223) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Copycat (Improved - By: ryuk) <br></p>
<ul>
<li>
<font color=red><b>REMOVALS</b></font><br></li>
</ul>
<p>- <font color=red><b>REMOVED</b></font>: Luckey (Сrewmate Role - By: ryuk) <br>
- <font color=red><b>REMOVED</b></font>: Witch (Neutral Killer - By: TommyXL) <br>
- <font color=red><b>REMOVED</b></font>: Repairman (Common Addon - By: TommyXL) <br></p>
<ul>
<li>
<font color=#F6BE00><b>PERFORMANCE/CODE IMPROVEMENTS</b></font><br></li>
</ul>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: «FixedUpdate» in code now work async (By: TommyXL) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Optimize Ping Tracker Update (By: TommyXL) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved Code In «CheckMurder» (By: TommyXL) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved Code When Players Complete Task (By: TommyXL) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Сode improvements in «HasKillButton» (By: ryuk) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Сode improvements in «DivinatorCheck.Result» for Fortune Teller (By: ryuk) <br></p>
<ul>
<li>
<font color=green><b>NEW FEATURES</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Support Added For Vanilla Hide &amp; Seek (By: TommyXL) <br>
+ <font color=green><b>NEW</b></font>: Added Random Skins &amp; Colors in Camouflage (By: TommyXL) <br>
+ <font color=green><b>NEW</b></font>: Black screen (Anti Blackout) protection system has been improved (By: TommyXL) <br>
+ <font color=green><b>NEW</b></font>: Add-ons assign was recoded (By: TommyXL) <br></p>
<ul>
<li>
<font color=green><b>NEW SETTINGS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Show Only Enabled Roles In Guesser UI (By: TommyXL) <br>
+ <font color=green><b>NEW</b></font>: Only allow whitelisted players to join lobbies (By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Hide «Host♥» text (By: Pietro) <br>
+ <font color=green><b>NEW</b></font>: Players can use the «/rn» command (By: Marg) <br>
+ <font color=green><b>NEW</b></font>: Copycat: «Can copy team changing addon» (By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Fortune Teller: «Show random active roles in Fortune Teller hints» (By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Alchemist: «Potion Of Speed» (Ported from EHR - By: Drakos) <br>
+ <font color=green><b>NEW</b></font>: Doppelganger: «Can vent» and «Has imp vision» (By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Bandit: «Steal cooldown» (different from kill cooldown - By: ryuk) <br></p>
<ul>
<li>
<font color=#F6BE00><b>CHANGES</b></font><br></li>
</ul>
<p>= <font color=#F6BE00><b>CHANGE</b></font>: Display sorted role names for all langs in guesser UI (By: ryuk) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Preset 5 will be used to sync with host's setting for modded client (By: TommyXL) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Ported code «Vent.CanUse» from TOH (By: TommyXL) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Some roles have been removed from Experimental (By: ryuk) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Make «/rand» inclusive (By: Marg) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Prevent bans from InnerSloth servers if not modded host (By: Pietro) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Warn when «/dump» is used (By: Pietro) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Translate API tags, if translation available (By: Pietro) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Updated several roles' names internally to be consistent and not spaghetti code (By: Moe) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Add-ons with a spawn chance greater than or equal to 90% have higher priority (By: TommyXL) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Added delay teleport after meeting (By: TommyXL) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Roles using abilities using vents will now spawn on the Dleks (dlekS ehT) map (By: TommyXL) <br></p>
<ul>
<li>
<font color=#1376f0><b>BUG FIXES</b></font><br></li>
</ul>
<p>= <font color=#1376f0><b>BUG FIX</b></font>: Fixed vents on Dleks map for modded players (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Provocateur now cannot get Bait (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Kamikaze now cannot get Swift (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Evil Tracker now cannot get Seer (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Bard did not work (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Tracker error In logs (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Burst error when game end (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed other errors In logs (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed check game end (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Alchemist &amp; Bloodlust could kill after end meeting (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Possibly fixed bug when sometimes non-modded player does not teleport (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Save Presets (Coded by dev TOH - By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Disconnect At Game End (Coded by dev TOH - By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed spam LateTask about Mole on exit vent (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug where Evil Tracker «Can See Kill Flash» option sometimes does not work (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when some roles can be stuck in vent during comms sabotage (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed some strings (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed errors in logs when Modded Client left the game (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Merchant checks Add-ons limit (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when President skips meeting and someone will be ejected (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when the player's name was not cleared during end of the meeting when a player left the game (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Swooper &amp; Chameleon &amp; Wraith &amp; Alchemist teleport in vent after meeting (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Cleanser issues (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Inspector seeing Rascal as Crew and Impostor (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Time Master works incorrectly (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Disperser teleport players when they were in vent (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Huntsman not colored names targets at the beginning of the game (for vanilla - By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Pyromaniac not showing the douse on vanilla (for vanilla - By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Impostor ghosts didn't see the sabotage button (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when the reason for the end win was sometimes displayed incorrectly (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when the add-on had a 100% chance of spawning but would sometimes not spawn in the game (By: TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Some fixes for Romantics (By: TommyXL and ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Undertaker for modded clients (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Copycat copying taskinator will give benefactor if Copycat can copy crew variant (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fix copycat copying enigma doesn't give clue (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed inspector doesn't give madmate as imp team (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed telecommunication not working when copycat copies (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Bug where Jackal recruits Copycat and Copycat's role resets after meeting (By: ryuk and Moe) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when shield animation banning modded clients (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed instigator using vanilla kill cooldown (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Councillor per meeting limit (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Exclude Solsticer from Seeker's target (By: NikoCat223) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed when Solsticer can be murdered (By: NikoCat223) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug that sometimes caused the game to crash after version check (By: NikoCat223) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Mini can misguess to death (By: NikoCat223) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Vulture body amount not showing correctly for mod clients (By: NikoCat223) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when the host did not choose a spawn location on Airship for a long time and EAC banned players who tried to cause sabotage (By: NikoCat223) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug when Nice Mini can be killed by Warlock, Puppeteer, Shroud and can be target for anonymous (By: NikoCat223 and LezaiYa) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed the bug that prevented the game from ending when Mini was exiled (By: LezaiYa) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bug where «/gno» and «/rand» gave same result (By: Marg) <br></p>
<ul>
<li>
<font color=#8708c7><b>TRANSLATIONS</b></font></li>
</ul>
<p>+ <font color=#009b3a><b>Brazilian (Portuguese Brazil)</b></font>: (By: Dx7405) <br>
+ <font color=#1e448b><b>Dutch</b></font>: (By: apemv, madmazel_) <br>
+ <font color=#002654><b>French</b></font>: (By: FuroYT, KevOut, Klaomi, Sansationnelle) <br>
+ <font color=#009344><b>Italian</b></font>: (By: alot, Baphojack, Mattix606) <br>
+ <font color=#bd0029><b>Japanese</b></font>: (By: Sunnyboi) <br>
+ <font color=#009b3a><b>Latam (Latin American)</b></font>: (By: CreepPower) <br>
+ <font color=#0036a7><b>Russian</b></font>: (By: TommyXL, Shoulder Devil (MogekoNik), chill_ultimated, Nevermore59) <br>
+ <font color=#de2910><b>Simplified Chinese</b></font>: (By: CrewCyan, LezaiYa, NikoCat223) <br>
+ <font color=#ffc400><b>Spanish</b></font> (By: Dawson, Sunnyboi, thewhiskas27, xxSShadow) <br>
+ <font color=#de2910><b>Traditional Chinese</b></font>: (By: FlyFlyTurtle, Hinharrrrr, netherdragontw, Pomelo_)<br></p>
<ul>
<li>Check out all of our translators on our <a href="https://tohe.weareten.ca/AboutUs.html" target="_blank" rel="noopener noreferrer"><strong>Website</strong></a></li>
</ul>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/v1.4.0...v1.5.0" target="_blank" rel="noopener noreferrer"><strong>Full v1.5.0 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.4.0</font></b></summary>
<ul>
<li>
<font color=green><b>ADDITIONS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Benefactor (Support Crewmate - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Keeper (Support Crewmate - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Captain (Power Crewmate - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Mole (Basic Crewmate - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Guess Master (Basic Crewmate - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: Kamikaze (Support Impostor - By: Drakos) <br>
+ <font color=green><b>NEW</b></font>: Solsticer (Experimental Neutral - By: NikoCat223) <br>
+ <font color=green><b>NEW</b></font>: Flash (Helpful Addon - By: TommyXL) <br>
+ <font color=green><b>NEW</b></font>: Silent (Helpful Addon - By: NikoCat223) <br>
+ <font color=green><b>NEW</b></font>: Mundane (Harmful Addon - By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: dlekS ehT !paM weN (Thanks sleepyut (@Galster-dev on GitHub) and TommyXL) <br>
+ <font color=green><b>NEW</b></font>: New Gamemode: FFA from EHR (By: ryuk, Special Thanks: Gurge44) <br>
+ <font color=green><b>NEW</b></font>: Added chat commands /tpin, /tpout - TP players in and out of ship in lobby (By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: New Setting: Prevent /quit due to malicious use (By: Furo) <br>
+ <font color=green><b>NEW</b></font>: New Setting: Change Decontamination Time (Very Cool! Try this! By: TommyXL) <br>
+ <font color=green><b>NEW</b></font>: Returned Setting: Remove Pets At Dead Players (By: ryuk) <br>
+ <font color=green><b>NEW</b></font>: New Region: Modded South America - MSA (By: Pietro) <br>
+ <font color=green><b>NEW</b></font>: New Region: Modded Chinese - Multiple (By: NikoCat223) <br>
+ <font color=green><b>NEW</b></font>: New Button: Update! Now update the mod automatically! (By: Pietro) <br>
+ <font color=green><b>NEW</b></font>: Added Skill Icons: Vulture, Pursuer and Cleaner (By: LeziYa) <br></p>
<ul>
<li>
<font color=#F6BE00><b>CHANGES/IMPROVEMENTS</b></font><br></li>
</ul>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: Updated Log Readability (By: TommyXL) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Enhanced Anti-Cheat (EAC) now done by API (By: ryuk &amp; Moe) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Removed Unnecessary roles from Guesser GUIs (By: NikoCat223) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: System now sends message after clearing - Very Useful! (By: ryuk) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Fool (Addon) now incompatible with Repairman (Addon) to avoid issues (By: ryuk) <br>
= <font color=#32CD32><b>TYPO</b></font>: Typos that have been corrected. <br>Enigma Typo (By: Plaguer) <br></p>
<ul>
<li>
<font color=#1376f0><b>BUG FIXES</b></font><br></li>
</ul>
<p>= <font color=#1376f0><b>BUG FIX</b></font>: Alchemist invalid string fix (By: Drakos) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Votes now return if a player dies mid-round or disconnects (By: NikoCat223, ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Multiple Bug Fixes (By: NikoCat233, LezaiYa) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Prevent-MM-Mass-Shapeshift - Set Cheating Player Notification to &quot;Notify&quot; (By: NikoCat223) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fix Workaholic getting Onbound, Rebound and Double Shot when Anti-Guess Enabled (By: ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Several Other Misc Fixes (by: Several Contributors/Devs)</p>
<ul>
<li>
<font color=#8708c7><b>TRANSLATIONS</b></font></li>
</ul>
<p>+ <font color=#009b3a><b>Brazilian (Portuguese Brazil)</b></font>: (By: Dx7405) <br>
+ <font color=#1e448b><b>Dutch</b></font>: (By: apemv, madmazel_) <br>
+ <font color=#002654><b>French</b></font>: (By: FuroYT, KevOut, Klaomi, Sansationnelle) <br>
+ <font color=#009344><b>Italian</b></font>: (By: alot, Baphojack, Mattix606) <br>
+ <font color=#bd0029><b>Japanese</b></font>: (By: Sunnyboi) <br>
+ <font color=#009b3a><b>Latam (Latin American)</b></font>: (By: CreepPower) <br>
+ <font color=#0036a7><b>Russian</b></font>: (By: chill_ultimated, Nevermore59, Shoulder Devil, TommyXL) <br>
+ <font color=#de2910><b>Simplified Chinese</b></font>: (By: CrewCyan, Hinharrrrr, LezaiYa, NikoCat223) <br>
+ <font color=#ffc400><b>Spanish</b></font> (By: Dawson, Sunnyboi, thewhiskas27, xxSShadow) <br>
+ <font color=#de2910><b>Traditional Chinese</b></font>: (By: FlyFlyTurtle, Hinharrrrr, netherdragontw, Pomelo_)<br></p>
<ul>
<li>Check out all of our translators on our <a href="https://tohe.weareten.ca/AboutUs.html" target="_blank" rel="noopener noreferrer"><strong>Website</strong></a></li>
</ul>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/v1.3.0...v1.4.0" target="_blank" rel="noopener noreferrer"><strong>Full v1.4.0 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.3.0</font></b></summary>
<ul>
<li>
<p>By <a href="https://github.com/NetherDragonTw" target="_blank" rel="noopener noreferrer"><strong>NetherDragonTw</strong></a><br>
+ <font color=green><b>NEW</b></font>: Added anti-spam feature on Lava Chat (Fixed by: ryuk)<br></p>
</li>
<li>
<p>By <a href="https://github.com/ryuk2098" target="_blank" rel="noopener noreferrer"><strong>ryuk</strong></a><br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/options/Neutrals/Benign/Pixie.html">Pixie</RouteLink> (Benign Neutral - Idea: Azanthiel)<br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/options/Neutrals/Benign/Taskinator.html">Taskinator</RouteLink> (Benign Neutral - Idea: Dx)<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Converted Reverie can kill anyone without repercussions<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Egoist Count as Converted Neutral<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Cyber and Doppelganger incompatibility<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Role colors now modifiable via RoleColor.dat<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Vector and Unlucky no longer compatible<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Death Reason Inconsistency<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Double IDs for roles that get them<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed settings overrides and resets (Must play one or two games)<br></p>
</li>
</ul>
<ul>
<li>By <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a><br>
+ <font color=green><b>NEW</b></font>: Added New Camouflage Skins<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved Codebase Significantly<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved Sync Settings<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Mare and Stalker anti-spawn on The Fungle<br></li>
</ul>
<ul>
<li>
<p>By <a href="https://github.com/lars-wu" target="_blank" rel="noopener noreferrer"><strong>lars-wu (papercut)</strong></a><br>
+ <font color=green><b>NEW</b></font>: Support Crewmate Role: <RouteLink to="/options/Crewmates/Support/Enigma.html">Enigma</RouteLink> <br>
+ <font color=green><b>NEW</b></font>: Killing Impostor Role: <RouteLink to="/options/Impostors/Killing/Instigator.html">Instigator</RouteLink> <br></p>
</li>
<li>
<p>By <a href="https://github.com/LezaiYa" target="_blank" rel="noopener noreferrer"><strong>LezaiYa</strong></a> <br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/options/Crewmates/Basic/Randomizer.html">Randomizer</RouteLink> (Basic Crewmate - Idea: Night)<br></p>
</li>
<li>
<p>By <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a><br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/options/Addons/Harmful/Influenced.html">Influenced</RouteLink> (Harmful Addon - Idea: spong)<br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/options/Addons/Harmful/Hurried.html">Hurried</RouteLink> (Harmful Addon - Idea: Pyro)<br>
+ <font color=green><b>NEW</b></font>: <RouteLink to="/options/Experimental/Addon/OiiaiCat.html">Oiiai Cat (Oiiai)</RouteLink> (Experimental Addon)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved Ban System<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Vulture now can not eat cleaned/medusa bodies<br>
= <font color=#F6BE00><b>CHANGE</b></font>: Removed Incompatible Role Assignment<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed /death by host showing to all players<br></p>
</li>
<li>
<p>By <a href="https://github.com/LezaiYa" target="_blank" rel="noopener noreferrer"><strong>LezaiYa</strong></a> &amp; <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a> <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Count grow up time in meeting (for Mini)<br></p>
</li>
<li>
<p>By <a href="https://github.com/ryuk2098" target="_blank" rel="noopener noreferrer"><strong>ryuk</strong></a>, <a href="https://github.com/NikoCat233" target="_blank" rel="noopener noreferrer"><strong>NikoCat223</strong></a>, &amp; <a href="https://github.com/Tommy-XL" target="_blank" rel="noopener noreferrer"><strong>TommyXL</strong></a><br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed several roles, addons, teleport bugs<br></p>
</li>
<li>
<p>By <a href="https://github.com/FuroYT" target="_blank" rel="noopener noreferrer"><strong>FuroYT</strong></a> <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Updated Dev Tags<br></p>
</li>
<li>
<font color=#8708c7><b>NEW TRANSLATIONS</b></font>: Added support for more Languages!<br></li>
</ul>
<p>+ <font color=#002654><b>French</b></font> by <a href="#"><strong>KevOut</strong></a>, <a href="#"><strong>Sansationnelle</strong></a>, <a href="#"><strong>KlÃ©mi</strong></a>, &amp; <a href="#"><strong>FuroYT</strong></a>.<br>
+ <font color=#bd0029><b>Japanese</b></font> by <a href="#"><strong>Sunnyboi</strong></a>.<br>
+ <font color=#009b3a><b>Latam (Latin American)</b></font> by <a href="#"><strong>CreepPower</strong></a>.<br>
+ <font color=#009344><b>Italian</b></font> by <a href="#"><strong>Mattix606</strong></a>, <a href="#"><strong>Baphojack</strong></a>, &amp; <a href="#"><strong>reallyalot</strong></a>.<br>
+ <font color=#ffc400><b>Spanish</b></font> by <a href="#"><strong>xxSShadow</strong></a>(New Translator), <a href="#"><strong>Sunnyboi</strong></a>, <a href="#"><strong>Dawson</strong></a>, &amp; <a href="#"><strong>thewhiskas</strong></a>.<br>
+ <font color=#de2910><b>Traditional Chinese</b></font> by <a href="#"><strong>Pomelo_</strong></a>(New Translator), <a href="#"><strong>FlyFlyTurtle</strong></a>(New Translator), <a href="#"><strong>NikoCat223</strong></a>, &amp; <a href="#"><strong>NetherDragonTw</strong></a>.<br></p>
<ul>
<li>Check out all of our translators on our <a href="https://tohe.weareten.ca/AboutUs.html" target="_blank" rel="noopener noreferrer"><strong>Website</strong></a></li>
</ul>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/v1.2.0...v1.3.0" target="_blank" rel="noopener noreferrer"><strong>Full v1.3.0 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.2.0</font></b></summary>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: The Fungle Fully Supported!<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Several Bug Fixes<br>
= <font color=#dc4585><b>THE</b></font> <font color=#fe5ca8><b>FUNGLE</b></font>: Fun and all! Let's get ready to enter The Fungle 🌲<br></p>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/v1.1.1...v1.2.0" target="_blank" rel="noopener noreferrer"><strong>Full v1.2.0 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.1.1</font></b></summary>
<p>= <font color=#1376f0><b>BUG FIX</b></font>: Fixed bugs with (Evil) Mini not being judgeable or revenged<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Swapper and several bugs within it, staying experimental<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Berserker not able to die and spamming errors<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Mad Nice Mini issues<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed a conflict with Tiebreaker and Void Ballot<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved overkiller in PlayerControls<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Reworked End Game Checks (again) to optimize it<br></p>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/v1.1.0...v1.1.1" target="_blank" rel="noopener noreferrer"><strong>Full v1.1.1 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.1.0</font></b></summary>
<ul>
<li>
<font color=green><b>ADDITIONS</b></font><br></li>
</ul>
<p>+ <font color=green><b>NEW</b></font>: Ported President (from SLE by ryuk, originally coded by SolarFlare) <br>
+ <font color=green><b>NEW</b></font>: Ported Spy (from EHR by LezaiYa, Originally coded by Gurge44) <br>
+ <font color=green><b>NEW</b></font>: Added double click to kill setting for infectious (by ryuk) <br>
+ <font color=green><b>NEW</b></font>: Added 2 lobby games /rps and /coinflip for ppl who die to early (lol) (by ryuk) <br>
+ <font color=green><b>NEW</b></font>: Ported Rebound from SLE (by ryuk) (originally coded by SolarFlare) <br>
+ <font color=green><b>NEW</b></font>: Ported Vigilante from SLE (Mercenary) with a small change (by ryuk) (originally coded by SolarFlare) <br>
+ <font color=green><b>NEW</b></font>: Pyromaniac color changed <br>
+ <font color=green><b>NEW</b></font>: New setting for Crewpostor (lunge on kill) AND kill after each x tasks completion (by ryuk) <br>
+ <font color=green><b>NEW</b></font>: New setting for Deceiver (loses ability usage on wrongful deceive) (by ryuk) <br>
+ <font color=green><b>NEW</b></font>: New ryuk Camo Skin (by ryuk) <br>
+ <font color=green><b>NEW</b></font>: Bewilder setting killer can get bewilder's vision (by ryuk) <br>
+ <font color=green><b>NEW</b></font>: Added Jailer to Fortune Teller list (by Moe) <br>
+ <font color=green><b>NEW</b></font>: Added a new setting for Deathpact (Players in active Deathpact can call meeting) (by lars-wu) <br>
+ <font color=green><b>NEW</b></font>: Added Default_Template.txt (It's so people can check if there are any changes that have been done in auto generated template.txt) (by ryuk) <br>
+ <font color=green><b>NEW</b></font>: Added a new setting for Corone (Inform killer about being tracked) (by lars-wu) <br>
+ <font color=green><b>NEW</b></font>: Added new setting for Twister (Hide who the players swap places with) (by lars-wu) <br>
+ <font color=green><b>NEW</b></font>: Made Mini unable to be recruited and special kill (by LezaiYa) <br>
+ <font color=green><b>NEW</b></font>: New merchant to sell only enabled addons setting (by ryuk) <br></p>
<ul>
<li>
<font color=red><b>REMOVALS</b></font><br></li>
</ul>
<p>- <font color=red><b>REMOVED</b></font>: Glow (by ryuk) <br>
- <font color=red><b>REMOVED</b></font>: Occultist until rework (by ryuk) <br>
- <font color=red><b>REMOVED</b></font>: Sunglasses (by ryuk) <br>
- <font color=red><b>REMOVED</b></font>: Removed Coven roles in code (Shade, Coven Leader, Ritualist, Banshee) (by TommyXL) <br></p>
<ul>
<li>
<font color=#F6BE00><b>CHANGES</b></font><br></li>
</ul>
<p>= <font color=#F6BE00><b>CHANGE</b></font>: Inspector now uses /cmp and /compare instead of /cp (ask Moe why) (by ryuk) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Arsonist will be snitch's target if it can continue the game (by ryuk) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Admirer moved to experimental (neutrals can win with og team, this shouldn't be the case anymore as we have tested it, but we're keeping it here in case) (by ryuk, and possibly fixed by Niko) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Added increase and Max kill cooldown setting. Reverie misfires and dies with target after reaching Max cooldown <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Updated Whitelist (You can add nicknames for keeping track of friend codes (friendcode#1234, nickname)) (by TommyXL) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Updated Fragile (Fragile will no longer show themselves as killer if they die.) (by ryuk) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Reorganized Options and fixed to adjust to renaming (by Moe) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Updated default template message for all languages (by ryuk, TommyXL, Dopzy, Dawson, lezaiYa, netherdragontw) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Renamed Cultivator to Berserker in code, should be unchanged on client side, this is to check for code optimation later (by Moe) <br>
= <font color=#F6BE00><b>CHANGE</b></font>: Heads/tails for coinflip now translatable in &lt;&gt;.dat (by PHGaming) <br></p>
<ul>
<li>
<font color=#1376f0><b>BUG FIXES</b></font><br></li>
</ul>
<p>= <font color=#1376f0><b>BUG FIX</b></font>: Hater no longer ignores shields <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed huntsman (by ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed wrong win screen and Huntsman now shows everyone as target (instead of showing no one) if not enough targets alive <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed /death for hosts (by TommyXL) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed wrong name on bait reveal and /id when using color name mode (by ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed spy for Modded clients (by ryuk) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fix Copycat and admirer interaction (by NikoCat233) <br>
Updated en_US.json for some neutral killers (by Moe) <br>
= <font color=#1376f0><b>BUG FIX</b></font>: Tracefinder fix, it can no longer see arrows when no on was dead (by TommyXL) <br></p>
<ul>
<li>
<font color=#12edaf><b>REWORKS</b></font><br></li>
</ul>
<p>+ <font color=#12edaf><b>REWORK</b></font>: Reworked Reverie (by ryuk, Idea by Pyro, Original Idea/Code by TronAndRey) <br>
+ <font color=#12edaf><b>REWORK</b></font>: Reworked Hater (by NikoCat233) <br></p>
<ul>
<li>
<font color=#e08709><b>IMPROVEMENTS</b></font><br></li>
</ul>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: Renamed Agent back to Evil Tracker AND Disruptor To Anti Adminer (by TommyXL) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Hater improvements (by Gurge44) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Improved Amnesiac, Imitator (by NickoCat233) <br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Reworked chat spamming system to be a little more optimized (by ryuk) <br></p>
<ul>
<li>
<font color=#8708c7><b>TRANSLATIONS</b></font>: Added support for more Translations!<br></li>
</ul>
<p>+ <font color=#009b3a><b>Portuguese (Brazil)</b></font> by <a href="#"><strong>Reginaldoo</strong></a>, <a href="#"><strong>Dopzy</strong></a>, &amp; <a href="#"><strong>Arc</strong></a> <br></p>
<ul>
<li>
<font size=2em color=#fdf08e><b>NOTES</b></font><br></li>
</ul>
<p>= Language.dat (English.dat) updates automatically now. <br>
= New variables for template file = {{HostName}} (host's name), ({{PlayerName}} is for any player.) <br>
= Several Misc Bug Fixes and code enhancements by TommyXL, ryuk, Moe and Gurge44<br></p>
<ul>
<li>Check out all of our translators on our <a href="https://tohe.weareten.ca/AboutUs.html" target="_blank" rel="noopener noreferrer"><strong>Website</strong></a></li>
</ul>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/v1.0.1...v1.1.0" target="_blank" rel="noopener noreferrer"><strong>Full v1.1.0 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.0.1</font></b></summary>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: Removed spray of TheSkullCreeper and replaced it <a href="https://github.com/0xDrMoe/TownofHost-Enhanced/pull/6" target="_blank" rel="noopener noreferrer">#6</a><br>
+ <font color=green><b>NEW</b></font>: Added an updated clue in Fortune Teller <a href="https://github.com/0xDrMoe/TownofHost-Enhanced/pull/5" target="_blank" rel="noopener noreferrer">#5</a><br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed templates and VIP List not generating <a href="https://github.com/0xDrMoe/TownofHost-Enhanced/pull/5" target="_blank" rel="noopener noreferrer">#5</a> <a href="https://github.com/0xDrMoe/TownofHost-Enhanced/pull/6" target="_blank" rel="noopener noreferrer">#6</a><br>
+ <font color=green><b>NEW</b></font>: A new tease...for a new role...? (try /r President)<br></p>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/compare/Release...v1.0.1" target="_blank" rel="noopener noreferrer"><strong>Full v1.0.1 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
<details>
<summary><b><font color=#d395b4>v1.0.0</font></b></summary>
<p>= <font color=#e08709><b>IMPROVEMENT</b></font>: Removed all association with TheSkullCreeper, credit is still provided in README<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Renamed Jailor to Jailer (you're welcome, ryuk)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Updated default templates to include all appropriate strings/variables<br>
= <font color=#1376f0><b>BUG FIX</b></font>: Fixed Bandit Text String<br></p>
<ul>
<li><a href="https://github.com/0xDrMoe/TownofHost-Enhanced/commits/Release" target="_blank" rel="noopener noreferrer"><strong>Full v1.0.0 Changelog</strong></a> or support us on our <a href="https://weareten.ca/TOHE/" target="_blank" rel="noopener noreferrer">Website</a> to get access to early features!</li>
</ul>
</details>
</font></div></template>


