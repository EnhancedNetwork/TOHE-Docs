<template><div><h1 id="guide-to-town-of-host-enhanced-templates" tabindex="-1"><a class="header-anchor" href="#guide-to-town-of-host-enhanced-templates"><span><font color=#f0b6d5>Guide to Town of Host: Enhanced - <font color=#3ded54>Templates</font></font></span></a></h1>
<p>This is for template.txt, NOT template.dat, you can learn about that on the prior page.</p>
<p>Open the root directory of the mod and find the <code v-pre>..\Among Us\TOHE-DATA\template.txt</code> file to get started!
You can see that there are some words in the file, such as <code v-pre>welcome</code>, <code v-pre>onMeeting</code>, and other gibberish.</p>
<ul>
<li><code v-pre>welcome:exampleMessage</code> - this is the message that will be sent when other players enter your lobby.</li>
<li><code v-pre>onMeeting:exampleMessage</code> - this is the message that will be sent when each meeting starts.</li>
<li><code v-pre>onFirstMeeting:exampleMessage</code> - this is just like <code v-pre>onMeeting</code>, but the message sent here will only be sent on the <i>first</i> meeting. Any meetings after will prioritize <code v-pre>onMeeting</code>.</li>
</ul>
<p>You can edit these templates, or add your own on new-lines!</p>
<p>To add your own templates, you can either follow the text below, or use the Template Editor.<br>
On a new-line, you want to add your trigger word and your message. Such as: <code v-pre>example:this is an example template!</code> <i>(The trigger word being <code v-pre>example</code> and the message being <code v-pre>this is an example template!</code>. (YOU NEED THE <code v-pre>:</code>!))</i> You can add as many of these as you want. You can then save the file, boot up the mod, and run <code v-pre>/t example</code> in your chat box to see if it's set up to your liking!<br>
If you create copies of the trigger word on new-lines, it will send them in seperate messages. Here's an example:<br>
<img src="@source/images/TemplateNewLines.png" alt="image"></p>
<p>Alternatively, you may also use this <a href="https://ultradragon005.github.io/AmongUs-Utilities/editor.html" target="_blank" rel="noopener noreferrer">Template Editor<ExternalLinkIcon/></a> put together by one of TOHE's Contributors, <a href="https://github.com/Ultradragon005" target="_blank" rel="noopener noreferrer">Drakos<ExternalLinkIcon/></a>.<br></p>
<details>
<summary><b><font color=gray>Template Editor Guide</font></b></summary>
<p>There is a Tutorial at the bottom of the Template Editor's page if you need it. If you do not want to watch it, here's a small guide about how to use it.</p>
<ol>
<li>Enter a Title for the template. This title will be displayed at the top of the template when it's activated in game. Here's what the title will look like by default:
<img src="@source/images/TemplateTitle.png" alt="image"></li>
<li>Enter in what you want the template to display. You can edit the Font Size &amp; Text Colors, but it is recommended to do it last. (From: Drakos)</li>
<li>Enter in the name for this template. This name will also be the trigger word for this template. <code v-pre>[example]:this is an example template!</code> (<code v-pre>[example]</code> being the name/trigger word)</li>
<li>Click the &quot;Copy as HTML Formatted&quot; to copy your template to your clipboard.</li>
<li>Locate <code v-pre>..\Among Us\TOHE-DATA\template.txt</code> and paste your new template on a new-line.</li>
<li>You can then save the file [<code v-pre>[Ctrl] + [S]</code>], boot up the mod, and run <code v-pre>/t [example]</code> in your chat box to see if it's set up to your liking!</li>
</ol>
</details>
<p>The Template Editor is only 1 of the many Utilities by Drakos which are on this <a href="https://ultradragon005.github.io/AmongUs-Utilities/index.html" target="_blank" rel="noopener noreferrer">Among Us Utilities<ExternalLinkIcon/></a> page. You can find a <a href="https://ultradragon005.github.io/AmongUs-Utilities/guide.html" target="_blank" rel="noopener noreferrer">Welcome Message Guide<ExternalLinkIcon/></a>, <a href="https://ultradragon005.github.io/AmongUs-Utilities/pixelgrid.html" target="_blank" rel="noopener noreferrer">Pixel Art Editor<ExternalLinkIcon/></a>, &amp; <a href="https://ultradragon005.github.io/AmongUs-Utilities/gallery.html" target="_blank" rel="noopener noreferrer">Gallery<ExternalLinkIcon/></a>.</p>
<p>You can visit <RouteLink to="/Resources.html">Resources</RouteLink> to view Variables, Text Formatting Tags, Usable Fonts/Symbols, &amp; more that will assist you in customizing your <b><i>best</i></b> lobbies!</p>
<h3 id="now-that-you-ve-how-templates-work-let-s-understand-tags-and-how-to-use-them" tabindex="-1"><a class="header-anchor" href="#now-that-you-ve-how-templates-work-let-s-understand-tags-and-how-to-use-them"><span>Now that you've how Templates work, let's understand Tags, and how to use them!</span></a></h3>
</div></template>


