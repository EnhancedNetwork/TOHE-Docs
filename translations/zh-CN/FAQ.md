---
lang: zh-CN
title: 經常問的問題
contributors: false
---

# 常见问题

<details>
<summary><b><font color=#d395b4>如何安装模组</font></b></summary>

造訪[安裝] (/Install.html) 頁面！這將引導您在 Steam 或 Epic 上安裝 TOHE，並且還向您展示如何安裝 Dev 和 Canary Builds(測試版)。
</details>
<details>
<summary><b><font color=#d395b4>如何在手机、平板电脑和IOS上安装mod</font></b></summary>

只有Windows操作系统可以安装Mod。如果你没有Windows，你不必担心，只有主机的mod，如TOHE、TOH、TOHR、TOHY、SHR等都与原版兼容。你可以找到这些mod的大厅加入并玩耍。
</details>
<details>
<summary><b><font color=#d395b4>你被踢出了房间</font></b></summary>

这可能是因为房间禁止发送诸如禁止使用的词汇或语句和开始提醒之类的信息。或者禁止未登录、有非法昵称、使用安卓版Among Us的玩家进入。它也可能会被反作弊踢出。如果以上情况都不是，那么你就是被主持人手动踢出或被其他玩家匿名投票踢出。
</details>
<details>
<summary><b><font color=#d395b4>你被Among Us的官方反作弊系统踢了</font></b></summary>

官方的“Among Us”反作弊系统经常将mod视为作弊系统，并将你踢出游戏。这种情况是不可避免的，所有仅限主机的mod都有这个问题。如果你仍然想进入这个大厅玩，你只能联系主持人重新打开大厅。
</details>
<details>
<summary><b><font color=#d395b4>您与服务器的连接已中断</font></b></summary>

如果你发现其他人可以正常游玩，有两种可能性：

1. 在Among Us官方服务器过载的情况下，这种情况是无法避免的。
2. 是你更换加速器的时候了。如果大量玩家报告这个问题，那是因为mod中的一个错误，请耐心等待修复和更新。
</details>
<details>
<summary><b><font color=#d395b4>无法连接到您的“Among Us”帐户</font></b></summary>

AFK、不良好的网络或VPN节点更改或不稳定也可能导致此问题。解决方案是重新启动游戏、重新启动VPN或重新启动计算机。
</details>
<details>
<summary><b><font color=#d395b4>发生未知错误，您与服务器的连接已中断</font></b></summary>

不幸的是，这是由mod错误或服务器错误导致的断开连接。如果可能的话，请将日志发送给dev以尽快解决问题。当然，这并不排除你的网络原因。
</details>
<details>
<summary><b><font color=#d395b4>安装mod后，它仍然是原版</font></b></summary>

1. 这可能是由于您的防病毒软件将mod识别为病毒并自动删除所致。请尝试关闭防病毒软件并重新安装。
2. 请确保您的游戏路径中不包含任何非英语字符，路径中除英语和数字以外的任何字符都可能导致mod加载失败。
</details>
<details>
<summary><b><font color=#d395b4>如何获取日志文件</font></b></summary>

你有三种方法可以获取日志文件：

1. 在游戏中按Ctrl+F1，然后您可以在桌面上找到日志文件，文件名以 TOHE 开头。
2. .在游戏中发送消息“/dump”，然后你可以在桌面上找到日志文件，文件名以 TOHE 开头
3. 请找到你的“Among Us”游戏目录，输入 Among Us/BepInEx 文件夹，然后你会看到一个名为 LogOutput.log 的文件，这就是日志文件。
</details>
<details>
<summary><b><font color=#d395b4>会议无法结束，左下角显示错误：请手动终止会议</font></b></summary>

这是由于会议计算中的一些错误导致会议无法正常结束。请按Shift+M+Enter以强制结束会议。如果可能的话，请将日志文件发送给dev以尽快解决问题。
</details>
<details>
<summary><b><font color=#d395b4>我是一名船员，但公布阵营时显示我是一个内鬼</font></b></summary>

为了与原版兼容，仅限主机的mod必须给你一个内鬼角色，这样你就可以拥有击杀按钮。所以对于那些没有安装mod的玩家，你会发现你是一个没有队友的内鬼。请参考你头上的职业名称。
</details>
<details>
<summary><b><font color=#d395b4>什么是仅限主机的mod</font></b></summary>

H表示主机，这是一个与原版兼容的mod。它只需要由主机安装，其他玩家可以在不安装mod的情况下玩。为了与原始版本兼容，H系列mod有许多无法实现的功能和角色。即使它们被实现了，实现的方式也是非常奇怪的。例如，警长被显示为内鬼，赌怪的指示无法隐藏。
</details>
<details>
<summary><b><font color=#d395b4>游戏莫名奇妙地结束了</font></b></summary>

游戏突然结束，如果仍然有内鬼活着，而中立阵营的胜利条件没有得到满足。有两种可能性：

1. 你已经打开了“幽灵忽略任务”选项，如果唯一没有完成任务的船员突然死亡，这将被视为船员的任务胜利。

2. 您已打开“不投票/跳过投票等于自杀”选项。会议结束后，大多数玩家将死亡，然后游戏将被判断为结束。

3. 主机或某个玩家触犯了一个致命的错误，mod强行结束了游戏，以防止游戏发生错误。

4. 没有这些，做一个#bug报告（包括来自/dump的日志！）
</details>
<details>
<summary><b><font color=#d395b4>游戏刚开始，就显示房主强行结束了游戏</font></b></summary>

H系列mod中有一个错误，无法分配角色。当错误出现在原始TOH中时，房主将无法看到启动按钮，其他玩家将被加载无限黑屏。在这种情况下，每个人都只能退出游戏。在TOHE中，为了避免这种情况，它会自动检测其他玩家是否被卡在加载中，如果被检测到，游戏将自动终止，以防止所有人被卡住。所以这是一种保护机制，忽略它，继续玩吧。也可能是房主使用快捷键结束了游戏。
</details>
<details>
<summary><b><font color=#d395b4>大部分螢幕是黑色的，但我可以與 GUI 交互，並且仍然可以聽到聲音，發生了什麼？</font></b></summary>

這是客戶端指派角色失敗造成的，也是Host-Only mods無法避免的問題之一。不幸的是，當發生這種情況時，您必須退出遊戲或只是等到遊戲結束。
</details>
<details>
<summary><b><font color=#d395b4>游戏中有很多没有设置的重复角色</font></b></summary>

别担心，我们没有这种错误，所以请转到设置，将这个角色的15人上限改回1人。
</details>
<details>
<summary><b><font color=#d395b4>我得到了原版角色</font></b></summary>

有几种可能性

1. 您可能需要打开 "禁用原版角色 "选项。

2. 您可能需要启用更多角色或允许更多玩家担任相同角色。

3. 您可能会遇到以下信息 "您的角色列表中存在不兼容的角色，您可能会体验到原版角色"，这意味着您启用了某个角色及其附加职业，（您可以在这些页面上找到关于哪些角色/附加组件不兼容的信息： [船员](/options/Crewmates/Vanilla/Crewmate.html) | [工程师](/options/Crewmates/Vanilla/Engineer.html) | [科学家](/options/Crewmates/Vanilla/Scientist.html) （从 1.2.1 dev 3 版本开始，这种情况应该不会再发生）。

4. 抹除者可能擦除了您的角色，将您重置为基础角色（冒牌货/移形换影/队友/工程师/科学家都是基础角色（基础角色 =/= 团队/角色））。

5. 您可能使用 [OIIAI](/options/Addons/Mixed/OIIAI.html) 附加職業殺死一名玩家。在這種情況下這是正常的，因為 OIIAI 將他們的殺手角色重置為基礎職業。 （參考上文）
</details>
<details>
<summary><b><font color=#d395b4>游戏永远不会结束</font></b></summary>

有几种可能性，

1. 您已在设置中启用“无游戏结束”。请关闭它以正常游玩。

2. 如果船员数量与内鬼数量相等，一名船员可能是双重人格（按2人计算）

3. 如果启用了神秘者，你可能会将“魅惑玩家计数”设置为神秘者。你需要将其设置为没有（他们不会被视为活着的玩家）或原始团队（他们将被视为他们的原始团队），因为将其设置成神秘者意味着魅惑玩家被视为另一个活着的神秘者。（他们不会像邪教那样拥有招募能力，但游戏会像对待邪教一样对待他们。）

4. 没有人达到他们获胜的条件。（这可能很明显，但内鬼并没有杀死所有人，船员并没有完成所有任务/放逐所有邪恶角色，等等）

5. 没有这些，做一个#bug报告（包括来自/dump的日志！）
</details>
<details>
<summary><b><font color=#d395b4>管理员是什么？</font></b></summary>

管理员是一个观察者角色<br>

他们的出现对游戏没有影响，所有玩家都知道管理员是谁。管理员的角色将分配给主机，主机将在游戏开始时自动变成鬼魂<br>

（注意：您可以在设置中启用此功能。如果您想正常游玩，请在设置再次禁用）
</details>
<details>
<summary><b><font color=#d395b4>如何访问测试/开发版本</font></b></summary>

1. 任何人都可以透過造訪 TOHE Discord 中的「#canary-builds」來獲得 Canary Access(測試版)。

2.成为测试<i>和</i>开发访问的参与者、测试者或赞助商（Insider+）<br>

阅读[Install]（/Install.html）页面底部附近的内容。
</details>
<details>
<summary><b><font color=#d395b4>為什麼我無法在 TOHE Discord 中的 #role-ideas(職業意見) 中發布？</font></b></summary>

職業意見目前僅限贊助商(sponsor)+貢獻者(contributor)。這樣 TOHE 的開發者/貢獻者就可以跟上職業意見。該頻道將在稍後重新開放，但沒有具體時間。
</details>
<details>
<summary><b><font color=#d395b4>您可以將 Submerged 模組與 TOHE 一起使用嗎？</font></b></summary>

雖然這在技術上是可行的，但我們不建議這樣做，因為《Submerged》仍然需要所有玩家安裝它才能玩。如果您確實想嘗試此操作，我們可以說主機需要安裝 Town of Host：Enhanced (TOHE)（因為它僅供主機安裝），並且需要安裝 Submerged。您大廳中的所有人員都可以正常加入，但他們需要安裝 Submerged 模組。 （這適用於任何自訂Among Us的地圖，但範例中使用了“Submerged”，因為它是最受歡迎的地圖之一）
</details>