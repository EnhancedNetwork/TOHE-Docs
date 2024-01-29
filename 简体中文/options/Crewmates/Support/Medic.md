---
lang: en-US
title: Medic
prev: Mechanic
next: Medium
---

# <font color="#00ff97">🚑 <b>Medic</b></font> <Badge text="Support" type="tip" vertical="middle"/>

***

The Medic can place a shield on the target by pressing the Kill button. The Medic can only give one shield for the whole game. When the Medic dies, the target's shield will be removed. The Medic can also see if someone is trying to break the target's shield.<br>
Depending on the host's settings, the Medic or the target can see if the player has a shield (shown as a<font size="5em" color="#00ff97">「⬤」</font>next to the name).

- Max
  - Set the Maximum amount of Medics that can be in a match
- Who can see the shield
  - Nothing - No one can see the shield
  - Medic+Shielded - The Medic AND the Shielded player can see the shield
  - Medic - Only the Medic can see the shield
  - Shielded - Only the Shielded player can see the shield
- Who can see kill attempt
  - Nothing - No one can see the kill attempt
  - Medic+Shielded - The Medic AND the Shielded player can see the kill attempt
  - Medic - Only the Medic can see the kill attempt
  - Shielded - Only the Shielded player can see the kill attempt
- Shield deactivates when the Medic dies
  - <font color=green>ON</font>: the Shield will disappear when the Medic dies
    - Shield deactivation is visible
      - <font color=green>ON</font>: the Shield will show that it disappeared
        - Immediately - the Shield will disappear immediately when the Medic dies
        - After Meeting - the Shield will disappear after the next Meeting
        - <font color=red>OFF</font> - the Shield will disappear without showing that it disappeared
  - <font color=red>OFF</font>: the Shield will remain even after the Medic dies
- On kill attempt, reset murderer's cooldown to
  - Set the kill cooldown after the shield is attempted to be broken
- Guessing ignores Medic Shield
  - <font color=green>ON</font>: Shield will be ignored when someone tries to guess the Shielded player
  - <font color=red>OFF</font>: Shield will protect the Shielded player from being guessed

:::tip Did You Know?

Medic was reworked as of Canary Build 1 (2.5.1_1), previously it was based on [KARPED1EM](https://github.com/KARPED1EM)'s code, but now it's based on Town of Us Reactivated
:::

> From: ToUR & Coding: [Tommy-XL](https://github.com/Tommy-XL)
