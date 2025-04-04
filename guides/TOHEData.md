---
lang: en-US
title: All About Presets
prev: Features
next: TOHEData
contributors: false
---

# <font color=#f0b6d5>Guide to Town of Host: Enhanced - <font color=#aaed3d>TOHEData</font></font>

Presets are different saves of your settings. You can save your favorite settings as presets and load them later. You can also download presets shared by others. 

## <font color=#f0b6d5>Thing</font>

### <font color=#ebd326>Thing EXPLAINED</font>

<details>
<summary><b><font color=#a65a80>Customization</font></b></summary>
<details>
<summary><b><font color=gray>TOHE-DATA Info</font></b></summary>

Open the root directory of game: `...\Among Us\TOHE-DATA\`

There are a few files:

- `BanList.txt`: A list of friendcodes that will be unable to join your lobby.
- `Default_Teamplate.txt`: This is the Default TOHE Template file. If you wish to reset your templates to default, You can use this. (No idea why it says Teamplate.)
- `DenyName.txt`: A list of names that will be filtered out of the game.
- `Moderators.txt`: A list of friendcodes that will receive a nice Moderator tag (editable via `...\Among Us\Language\english.dat`) as well as permissions to moderate your lobby (such as using the commands near the top of the page). Only grant users you trust these permissions! (NOTE: There is a new system to give out VIP/Permissions)
- `template.txt`: You can modify the `welcome` and `onMeeting` messages here. You can also add custom templates here as well following the same format as `welcome` & `onMeeting` use.
- `VIP-List.txt`: A list of friendcodes that will be given a sweet VIP tag (editable via `...\Among Us\Language\english.dat`) as well as permissions to change their name color. (NOTE: There is a new system to give out VIP/Permissions)
- `WhiteList.txt`: A list of friendcodes that will be exempt from blacklisted platforms, along with level requirements.

> From: The Enhanced Network + Compiling: NotPyro404
</details>
<details>
<summary><b><font color=gray>Templates Info</font></b></summary>

Open the root directory of the mod and find the `..\Among Us\TOHE-DATA\template.txt` file.

You can see that there are some words in the file, such as `welcome`, `onMeeting`, and other gibberish.
- `welcome:exampleMessage` - this is the message that will be sent when other players enter your lobby.
- `onMeeting:exampleMessage` - this is the message that will be sent when each meeting starts. 
- `onFirstMeeting:exampleMessage` - this is just like `onMeeting`, but the message sent here will only be sent on the <i>first</i> meeting. Any meetings after will prioritize `onMeeting`. 

You can edit these templates, or add your own on new-lines!

On a new-line, you want to add your trigger word and your message. Such as: `[example]:this is an example template!` <i>(The trigger word being `[example]` and the message being `this is an example template!`. (YOU NEED THE `:`!))</i> You can add as many of these as you want. You can then save the file, boot up the mod, and run `/t [example]` in your chat box to see if it's set up to your liking!

Alternatively, you may also use this [Template Editor](https://ultradragon005.github.io/AmongUs-Utilities/editor.html) put together by one of TOHE's Contributors, [Drakos](https://github.com/Ultradragon005).

<details>
<summary><b><font color=gray>Guide</font></b></summary>

There is a Tutorial at the bottom of the Template Editior's page if you need it. If you do not want to watch it, here's a small guide abounht how to use it.

1. Enter a Title for the template. This title will be displayed at the top of the template when its activated in game. Here's what the title will look like by default:
![image](./images/TemplateTitle.png)
1. Enter in what you want the template to display. You can edit the Font Size & Text Colors, but it is recommended to do it last. (From: Drakos)
2. Enter in the name for this template. This name will also be the trigger word for this template. `[example]:this is an example template!` (`[example]` being the name/trigger word)
3. Click the "Copy as HTML Formatted" to copy your template to your clipboard.
4. Locate `..\Among Us\TOHE-DATA\template.txt` and paste your new template on a new-line.
5. You can then save the file [`[Ctrl] + [S]`], boot up the mod, and run `/t [example]` in your chat box to see if it's set up to your liking!
</details>

If you create copies of the template name on newlines, it will send them in seperate messages. Here's an example from Drakos: 
![image](./images/TemplateNewLines.png)

> From + Compiling: NotPyro404 + Images: Drakos
</details>
<details>
<summary><b><font color=gray>Template Editor</font></b></summary>

Here's a Template Editor which you can use to edit or create templates.<br>
[Template Editor](https://ultradragon005.github.io/AmongUs-Utilities/editor.html)<br>

The Template Editor is only 1 of the many Utilities (Also by Drakos) which are on this [Among Us Utilities](https://ultradragon005.github.io/AmongUs-Utilities/index.html) page. You can find a [Welcome Message Guide](https://ultradragon005.github.io/AmongUs-Utilities/guide.html), [Pixel Art Editor](https://ultradragon005.github.io/AmongUs-Utilities/pixelgrid.html), [Gallery](https://ultradragon005.github.io/AmongUs-Utilities/gallery.html), & also the [Template Editor](https://ultradragon005.github.io/AmongUs-Utilities/editor.html) shown already.<br><br>

> From: Drakos
</details>
<details>
<summary><b><font color=gray>template.dat Info</font></b></summary>

You can edit your `template.dat` to say really anything you want! You can also download custom templates shared by others. If you want to use one, make sure the file is renamed to `english.dat` before using it, if it isn't already. (NOTE: english.dat is only if you are on the English Translation of base game Among Us. If you are using another Translation, please rename the english part to the translation you are using. (ie: `Spanish.dat/SChinese.dat/Latam.dat`/so on.) A list of all base game supported translations can be found on the [Resources](./Resources.html) Page.)<br><br>

Note: You have to put the file in the following directory: `.\Among Us\Language` for it to work. (Make sure your file is a `.dat` file, otherwise it will not work. Paste it alongside the `template.dat` file already in your folder.)<br><br>

You can do a lot with your `template.dat`, for this though, we'll refer to it as `english.dat` for simplicity sake. For starters, you can edit the Host Text, Icon, & Color. I won't go into depth on <i>everything</i> that the `english.dat` can edit, but it's almost every line of text that can be displayed on the screen. Once you get the hang of editing the Host Text, Icon, & Color, you can move down the list to edit anything you really want to (Such as Role Names, Role Descriptions, VIP Text, Moderator Text, and more).<br>
Below is what the default `template.dat` looks like, Versus what the edited `english.dat` I have looks like.<br>
![image](./images/HostTextDefault.png)<br>
Versus what the edited `english.dat` I have looks like.<br>
![image](./images/HostTextEdited.png)<br><br>

Just mess around a little bit, and have fun! Make sure you copy your template as a backup before you try messing with it again, or messing with the mod itself.<br>

For some user submitted translations (not yet supported by Town of Host: Enhanced/Base game Among Us), browse the [Resources](/Resources.html) Page.<br>

> From + Compiling: NotPyro404
</details>
<details>
<summary><b><font color=gray>TOHE-DATA Tag System</font></b></summary>

Open the root directory of game: `...\Among Us\TOHE-DATA\`

There are a few folders, you'll want the `Tags` one.:

This folder holds 4 files (by default), 3 Folders (`MOD_TAGS` + `VIP_TAGS`, + `SPONSOR_TAGS`), & a `Tag_Template.txt` file. You can disregard the 3 folders as those use a seperate system of Tags, the new system utilizes the `Tag_Template.txt` file. When you open the Tag Template, you'll see some lines to fill out, first Copy the Tag Template so things are easier (The mod will automatically generate a new one if you've lost it), then you can fill this out however you want to give a user a Custom Tag. You can leave most of it blank for a default tag (display) or edit the other lines with info for specific permissions. The file explains it clear enough, so use that. Once you've filled out the file, you can rename it to the friendcode of the player you want to have the Tag (Like friendcode#1234) and you're set. If you'd like to sort your friend codes into custom folders, you may, and it will automatically be checked AS LONG AS it's in the Tags directory. (Note: Probably works as long as you don't name the folders any of the following: `MOD_TAGS` + `VIP_TAGS`, + `SPONSOR_TAGS`, so don't.)

> From: The Enhanced Network + Compiling: NotPyro404
</details>
<details>
<summary><b><font color=gray>Valid Variables</font></b></summary>

- `{{ModVersion}}` - Displays the current version of Town of Host: Enhanced.
- `{{AmongUsVersion}}` - Displays the current Among Us version.
- `{{InternalVersion}}` - Displays the source code plugin version.
- `{{Date}}` - Displays the current date.
- `{{Time}}` - Displays the current time.
- `{{PlayerName}}` - Displays the readers username.
- `{{HostName}}` - Displays the hosts username.
- `{{RoomCode}}` - Displays the Room Code.
- `{{Map}}` - Displays the Map that is going to be played.
- `{{KillCooldown}}` - Displays the default Kill Cooldown set in your Among Us settings.
- `{{NumCommonTasks}}` - Displays the amount of Common Tasks per player.
- `{{NumLongTasks}}` - Displays the amount of Long Tasks per player.
- `{{NumShortTasks}}` - Displays the amount of Short Tasks per player.
- `{{NumEmergencyMeetings}}` - Displays the amount of meetings allowed per player.
- `{{DiscussionTime}}` - Displays the time period where you can talk before voting.
- `{{VotingTime}}` - Displays the time period where you vote.
- `{{EmergencyCooldown}}` - Displays the cooldown before you can call a meeting.
- `{{PlayerSpeedMod}}` - Displays the speed of players.
- `{{CrewLightMod}}` - Displays the vision radius of a Crewmate.
- `{{ImpostorLightMod}}` - Displays the vision radius of an Impostor.

> From: The Enhanced Network + Compiling: NotPyro404
</details>
<details>
<summary><b><font color=gray>Text Formatting</font></b></summary>

- `<color=#[hex]>exampleText</color>` Changes the <span style="background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text; color: transparent;"> Color </span> of the text/font.
- `<b>exampleText</b>` Enables <b>Bold</b> for the text/font.
- `<s>exampleText</s>` Enables <s>Strikethrough</s> for the text/font.
- `<u>exampleText</u>` Enables <u>Underline</u> for the text/font.
- `<i>exampleText</i>` Enables <i>Italics</i> for the text/font.
- `<mark>exampleText</mark>` Enables <mark>Highlight</mark> for the text/font.
- `<sup>exampleText</sup>` Enables <sup>Superscript</sup> for the text/font.
- `<sub>exampleText</sub>` Enables <sub>Subscript</sub> for the text/font.
- `<size=[size][%]>exampleText</size>` Sets the <font size=2em>Size</font> of the text/font. (Can type exact text/font sizes or use percentages.)
- `\n` Creates a New Line. (Such as `<br>` or <kbd>Return</kbd>/<kbd>Enter</kbd> would.)

> From: The Enhanced Network + Compiling: NotPyro404
</details>
<details>
<summary><b><font color=gray>Supported Rich Text Tags</font></b></summary>

Here's a full list of Rich Text Tags that you can use for formatting. Some may not work, so keep that in mind. There is a `<font>` tag, that will not work with all fonts, it will only work with the Fonts covered in the next dropdown menu.
[Link to List](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.2/manual/RichTextSupportedTags.html)<br><br>

> From: Unity Technologies
</details>
<details>
<summary><b><font color=gray>Usable Fonts/Symbols</font></b></summary>

Here's a Doc covering Fonts & Symbols that you can use while creating Templates! This Doc also shows some Sprites which are technically other Symbols, as well as some Icons and what exactly they mean when you see them!<br>
[Link to Doc](https://docs.google.com/document/d/e/2PACX-1vQh4sc9RL_Byt3kextqngdaAuGovFO_YaxHITZsIKqcd39mUAc6sQ89sfsSRGZsHUCecfIQiDY2WtQ-/pub)<br><br>

> From: Drakos
</details>
<details>
<summary><b><font color=gray>Original Role Colors (Hex Codes)</font></b></summary>

You can find the <i>original</i> Hex Codes of Town of Host: Enhanced Roles [Here](https://github.com/0xDrMoe/TownofHost-Enhanced/blob/main/Resources/roleColor.json).<br><br>

> From: The Enhanced Network
</details>
</details>