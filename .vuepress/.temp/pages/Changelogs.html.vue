<template><div><h2 id="latest-changelogs" tabindex="-1"><a class="header-anchor" href="#latest-changelogs"><span><font size=5em><b>Latest Changelogs:</b></font><br></span></a></h2>
<p>(Only the Latest Changes to Mod/Site will be displayed.)</p>
<font size=3em>
<details>
<summary><b><font color=#a65a80>TOHE v2.2.0 Changelogs</font></b></summary>
<p><b><font color=#cf4e8f>v2.2.0 Stable Release</font></b></p>
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
<h3 id="credits" tabindex="-1"><a class="header-anchor" href="#credits"><span>Credits</span></a></h3>
<p>Thanks to @NikoCat233 @MargaretTheFool @Tommy-XL @PEPPERcula @NotPyro404 @Impostor4291 @ApeMV @Laikrai @Pietrodjaowjao @ApeMV @Bri1101 @Reborn5537 @Limeau for making this release possible<br>
Thanks to our translators for their hard work in bringing the mod to everyone<br>
Thanks to our testers and players for finding bugs and providing helpful feedback<br>
Thanks to everyone who keeps supporting the mod and helps us move further forward!<br></p>
<h2 id="major-mod-functions-changes" tabindex="-1"><a class="header-anchor" href="#major-mod-functions-changes"><span>Major Mod Functions Changes:</span></a></h2>
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
<h2 id="major-role-changes" tabindex="-1"><a class="header-anchor" href="#major-role-changes"><span>Major Role Changes:<br></span></a></h2>
<ul>
<li>Coven Roles are now back! @MargaretTheFool <br>
<ul>
<li>You can find a detailed document by <a href="https://docs.google.com/document/d/1KaBjn6qk5NqUC7Ax7uQxXY1C9wsswWH__rBdzrZCd1I/edit?usp=sharing" target="_blank" rel="noopener noreferrer">clicking here<ExternalLinkIcon/></a> or on the <a href="https://tohe.weareten.ca/" target="_blank" rel="noopener noreferrer">Website<ExternalLinkIcon/></a>!<br></li>
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
<h2 id="minor-role-changes" tabindex="-1"><a class="header-anchor" href="#minor-role-changes"><span>Minor Role Changes<br></span></a></h2>
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
<h2 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements"><span>Improvements<br></span></a></h2>
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
<h2 id="silent-tweaks" tabindex="-1"><a class="header-anchor" href="#silent-tweaks"><span>Silent Tweaks:<br></span></a></h2>
<ul>
<li>Send failed error on failed murder attempts @NikoCat233<br></li>
<li>Improve code performance @Tommy-XL<br></li>
<li>Improve AntiBlackout @Tommy-XL<br></li>
<li>Repo is now set to use utf-8 crlf as encoding. @NikoCat233<br></li>
</ul>
<h2 id="other-bug-fixes-and-improvements" tabindex="-1"><a class="header-anchor" href="#other-bug-fixes-and-improvements"><span>Other Bug Fixes and Improvements<br></span></a></h2>
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
<br>
<details>
<summary><b><font color=#5ea692>Site Changelogs/Updates</font></b></summary>
<ul>
<li>By <a href="https://sites.google.com/view/notpyro404" target="_blank" rel="noopener noreferrer"><strong>Pyro</strong><ExternalLinkIcon/></a><br>
= <font color=#ece218><b>NOTICE</b></font>: If there are any other issues, or you simply have feedback, open a forum in <code v-pre>#website-feedback</code>! Thank you!<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: <strong>Heavy</strong> FAQ Rework. (Sorted into various categories + Includes Installation Guides.)<br>
- <font color=red><b>REMOVED</b></font>: <em>Remove Install.md (Refer Above)</em><br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: <strong>Heavy</strong> Resources Rework. (Sorted into various categories + Includes User-Submitted Presets + Translations.)<br>
- <font color=red><b>REMOVED</b></font>: <em>Remove Presets.md (Refer Above)</em><br>
- <font color=red><b>REMOVED</b></font>: <em>Remove Translations.md (Refer Above)</em><br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Reformat Causes of Death List on Resources Page (To be Cleaner/Compact)<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: <strong>Quizmaster Questions + Answers</strong> Displayed on Resources Page (Answers will be hidden by default)<br>
= <font color=#ece218><b>NOTICE</b></font>: Prepared for Coven Faction.<br>
= <font color=#ece218><b>NOTICE</b></font>: Add Unofficial Lore Theory Batches 1 through 7.<br>
= <font color=#e08709><b>IMPROVEMENT</b></font>: Recount all Roles/Addons (Sub-Faction Totals, Faction Totals, &amp; Full Total)<br></li>
</ul>
</details>
</font></div></template>


