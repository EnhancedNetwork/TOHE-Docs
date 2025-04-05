---
lang: en-US
title: All About Templates
prev: TOHEData
next: Tags
contributors: false
---

# <font color=#f0b6d5>Guide to Town of Host: Enhanced - <font color=#3ded54>Templates</font></font>

This is for template.txt, NOT template.dat, you can learn about that on the prior page.

Open the root directory of the mod and find the `..\Among Us\TOHE-DATA\template.txt` file to get started!
You can see that there are some words in the file, such as `welcome`, `onMeeting`, and other gibberish.
- `welcome:exampleMessage` - this is the message that will be sent when other players enter your lobby.
- `onMeeting:exampleMessage` - this is the message that will be sent when each meeting starts. 
- `onFirstMeeting:exampleMessage` - this is just like `onMeeting`, but the message sent here will only be sent on the <i>first</i> meeting. Any meetings after will prioritize `onMeeting`. 

You can edit these templates, or add your own on new-lines!

To add your own templates, you can either follow the text below, or use the Template Editor.<br>
On a new-line, you want to add your trigger word and your message. Such as: `example:this is an example template!` <i>(The trigger word being `example` and the message being `this is an example template!`. (YOU NEED THE `:`!))</i> You can add as many of these as you want. You can then save the file, boot up the mod, and run `/t example` in your chat box to see if it's set up to your liking!<br>
If you create copies of the trigger word on new-lines, it will send them in seperate messages. Here's an example:<br>
![image](./images/TemplateNewLines.png)

Alternatively, you may also use this [Template Editor](https://ultradragon005.github.io/AmongUs-Utilities/editor.html) put together by one of TOHE's Contributors, [Drakos](https://github.com/Ultradragon005).<br>

<details>
<summary><b><font color=gray>Template Editor Guide</font></b></summary>

There is a Tutorial at the bottom of the Template Editor's page if you need it. If you do not want to watch it, here's a small guide about how to use it.

1. Enter a Title for the template. This title will be displayed at the top of the template when it's activated in game. Here's what the title will look like by default:
![image](./images/TemplateTitle.png)
1. Enter in what you want the template to display. You can edit the Font Size & Text Colors, but it is recommended to do it last. (From: Drakos)
2. Enter in the name for this template. This name will also be the trigger word for this template. `[example]:this is an example template!` (`[example]` being the name/trigger word)
3. Click the "Copy as HTML Formatted" to copy your template to your clipboard.
4. Locate `..\Among Us\TOHE-DATA\template.txt` and paste your new template on a new-line.
5. You can then save the file [`[Ctrl] + [S]`], boot up the mod, and run `/t [example]` in your chat box to see if it's set up to your liking!
</details>

The Template Editor is only 1 of the many Utilities by Drakos which are on this [Among Us Utilities](https://ultradragon005.github.io/AmongUs-Utilities/index.html) page. You can find a [Welcome Message Guide](https://ultradragon005.github.io/AmongUs-Utilities/guide.html), [Pixel Art Editor](https://ultradragon005.github.io/AmongUs-Utilities/pixelgrid.html), & [Gallery](https://ultradragon005.github.io/AmongUs-Utilities/gallery.html).

You can visit [Resources](/Resources.html) to view Variables, Text Formatting Tags, Usable Fonts/Symbols, & more that will assist you in customizing your <b><i>best</i></b> lobbies!

### Now that you've how Templates work, let's understand Tags, and how to use them!