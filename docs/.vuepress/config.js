import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  locales: {
    '/': {
      lang: "en-US",
      title: "TownOfHost:Enhanced",
      description: "TOHE is the best Host-Only mod for anyone who wants to change their Among Us Experience!",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "TownOfHost:Enhanced",
      description: "TOHE is the best Host-Only mod for anyone who wants to change their Among Us Experience!"
    }
  },
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoAlt: "TOHE Logo",
    externalLinkIcon: false,
    repo: '0xDrMoe/TOHRE-Code',
    editLink: true,
    locales: {
      '/': {
        home: "/",
        selectLanguageName: 'English',
        repoLabel: 'Contribute!',
        editLinkText: 'Contribute to this page on GitHub!',
        notFound: [
          'Where are you going?',
          'Huh? How did you end up here?',
          'Honestly, how did you get here?',
          'This is not the page you are looking for.',
          'Nothing to see here.',
          'Nope. Not here.',
          "Whatever you're looking for, it's not here."
        ],
        backToHome: 'Take me back to my safe space please!',
        toggleColorMode: 'Toggle Dark Mode',
        selectLanguageText: 'English',
        navbar: [
          {
            text: 'Roles',
            children: [
              {
                text: 'All Roles',
                link: '/Roles',
              },
              {
                text: 'Impostor Roles',
                link: '/options/Settings/Impostors',
              },
              {
                text: 'Crewmate Roles',
                link: '/options/Settings/Crewmates',
              },
              {
                text: 'Neutral Roles',
                link: '/options/Settings/Neutrals',
              },
              {
                text: 'Add-ons',
                link: '/options/Settings/Addons',
              }
            ]
          },
          {
            text: "Settings",
            children: [
              {
                text: 'Game Settings',
                link: '/options/Settings/Game',
              },
              {
                text: 'System Settings',
                link: '/options/Settings/System',
              },
              {
                text: 'Mod Settings',
                link: '/options/Settings/Mod',
              },
              {
                text: 'Game Modifiers',
                link: '/options/Settings/Modifiers',
              }
            ]
          },
          {
            text: 'About',
            link: '/AboutUs',
          },
          {
            text: 'Changelogs',
            link: '/Changelogs',
          },
          {
            text: 'Resources',
            link: '/Resources',
          },
          {
            text: 'Install',
            link: '/Install',
          },
          {
            text: 'FAQ',
            link: '/FAQ',
          },
        ],
        sidebar: {
          '/options/Addons/Experimental/': [
            { text: 'Back to Addons', link: '/options/Settings/Addons' },
            { text: 'Glow', link: '/options/Addons/Experimental/Glow' },
            { text: 'Swift', link: '/options/Addons/Impostor/Swift' }
          ],
          '/options/Addons/Harmful/': [
            { text: 'Back to Addons', link: '/options/Settings/Addons' },
            { text: 'Disregarded', link: '/options/Addons/Harmful/Disregarded' },
            { text: 'Fool', link: '/options/Addons/Harmful/Fool' },
            { text: 'Fragile', link: '/options/Addons/Harmful/Fragile' },
            { text: 'Hurried', link: '/options/Addons/Harmful/Hurried' },
            { text: 'Influenced', link: '/options/Addons/Harmful/Influenced' },
            { text: 'Mundane', link: '/options/Addons/Harmful/Mundane' },
            { text: 'Oblivious', link: '/options/Addons/Harmful/Oblivious' },
            { text: 'Rascal', link: '/options/Addons/Harmful/Rascal' },
            { text: 'Statue', link: '/options/Addons/Harmful/Statue' },
            { text: 'Tired', link: '/options/Addons/Harmful/Tired' },
            { text: 'Unlucky', link: '/options/Addons/Harmful/Unlucky' },
            { text: 'Void Ballot', link: '/options/Addons/Harmful/VoidBallot' }
          ],
          '/options/Addons/Helpful/': [
            { text: 'Back to Add-ons', link: '/options/Settings/Addons' },
            { text: 'Autopsy', link: '/options/Addons/Helpful/Autopsy' },
            { text: 'Bait', link: '/options/Addons/Helpful/Bait' },
            { text: 'Beartrap', link: '/options/Addons/Helpful/Beartrap' },
            { text: 'Bewilder', link: '/options/Addons/Helpful/Bewilder' },
            { text: 'Burst', link: '/options/Addons/Helpful/Burst' },
            { text: 'Cyber', link: '/options/Addons/Helpful/Cyber' },
            { text: 'Flash', link: '/options/Addons/Helpful/Flash' },
            { text: 'Lazy', link: '/options/Addons/Helpful/Lazy' },
            { text: 'Loyal', link: '/options/Addons/Helpful/Loyal' },
            { text: 'Lucky', link: '/options/Addons/Helpful/Lucky' },
            { text: 'Necroview', link: '/options/Addons/Helpful/Necroview' },
            { text: 'Nimble', link: '/options/Addons/Helpful/Nimble' },
            { text: 'Overclocked', link: '/options/Addons/Helpful/Overclocked' },
            { text: 'Radar', link: '/options/Addons/Helpful/Radar' },
            { text: 'Seer', link: '/options/Addons/Helpful/Seer' },
            { text: 'Silent', link: '/options/Addons/Helpful/Silent' },
            { text: 'Sleuth', link: '/options/Addons/Helpful/Sleuth' },
            { text: 'Spurt', link: '/options/Addons/Helpful/Spurt' },
            { text: 'Tiebreaker', link: '/options/Addons/Helpful/Tiebreaker' },
            { text: 'Torch', link: '/options/Addons/Helpful/Torch' },
            { text: 'Watcher', link: '/options/Addons/Helpful/Watcher' }
          ],
          '/options/Addons/Impostor/': [
            { text: 'Back to Add-ons', link: '/options/Settings/Addons' },
            { text: 'Circumvent', link: '/options/Addons/Impostor/Circumvent' },
            { text: 'Clumsy', link: '/options/Addons/Impostor/Clumsy' },
            { text: 'Last Impostor', link: '/options/Addons/Impostor/LastImpostor' },
            { text: 'Madmate', link: '/options/Addons/Impostor/Madmate' },
            { text: 'Mare', link: '/options/Addons/Impostor/Mare' },
            { text: 'Mimic', link: '/options/Addons/Impostor/Mimic' },
            { text: 'Stealer', link: '/options/Addons/Impostor/Stealer' },
            { text: 'Tricky', link: '/options/Addons/Impostor/Tricky' },
          ],
          '/options/Addons/Miscellaneous/': [
            { text: 'Back to Add-ons', link: '/options/Settings/Addons' },
            { text: 'Egoist', link: '/options/Addons/Miscellaneous/Egoist' },
            { text: 'Lovers', link: '/options/Addons/Miscellaneous/Lovers' },
            { text: 'Rainbow', link: '/options/Addons/Miscellaneous/Rainbow' },
            { text: 'Reach', link: '/options/Addons/Miscellaneous/Reach' },
            { text: 'Workhorse', link: '/options/Addons/Miscellaneous/Workhorse' },
            { text: 'YouTuber', link: '/options/Addons/Miscellaneous/YouTuber' },
          ],
          '/options/Addons/Mixed/': [
            { text: 'Back to Add-ons', link: '/options/Settings/Addons' },
            { text: 'Antidote', link: '/options/Addons/Mixed/Antidote' },
            { text: 'Avenger', link: '/options/Addons/Mixed/Avenger' },
            { text: 'Aware', link: '/options/Addons/Mixed/Aware' },
            { text: 'Bloodthirst', link: '/options/Addons/Mixed/Bloodthirst' },
            { text: 'Diseased', link: '/options/Addons/Mixed/Diseased' },
            { text: 'Ghoul', link: '/options/Addons/Mixed/Ghoul' },
            { text: 'Gravestone', link: '/options/Addons/Mixed/Gravestone' },
            { text: 'Guesser', link: '/options/Addons/Mixed/Guesser' },
            { text: 'OIIAI', link: '/options/Addons/Mixed/OIIAI' },
            { text: 'Paranoia', link: '/options/Addons/Mixed/Paranoia' },
            { text: 'Stubborn', link: '/options/Addons/Mixed/Stubborn' },
            { text: 'Susceptible', link: '/options/Addons/Mixed/Susceptible' },
          ],
          '/options/Addons/Other/': [
            { text: 'Back to Addons', link: '/options/Settings/Addons' },
            { text: 'Double Shot', link: '/options/Addons/Other/DoubleShot' },
            { text: 'Onbound', link: '/options/Addons/Other/Onbound' },
            { text: 'Rebound', link: '/options/Addons/Other/Rebound' }
          ],
          '/options/Crewmates/Basic/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates' },
            { text: 'Addict', link: '/options/Crewmates/Basic/Addict' },
            { text: 'Alchemist', link: '/options/Crewmates/Basic/Alchemist' },
            { text: 'Celebrity', link: '/options/Crewmates/Basic/Celebrity' },
            { text: 'Cleanser', link: '/options/Crewmates/Basic/Cleanser' },
            { text: 'Doctor', link: '/options/Crewmates/Basic/Doctor' },
            { text: 'Guess Master', link: '/options/Crewmates/Basic/GuessMaster' },
            { text: 'Lazy Guy', link: '/options/Crewmates/Basic/LazyGuy' },
            {
              text: 'Mini', link: '/options/Crewmates/Basic/Mini', children: [
                { text: 'Evil Mini', link: '/options/Crewmates/Basic/MiniEvil' },
                { text: 'Nice Mini', link: '/options/Crewmates/Basic/MiniNice' }
              ]
            },
            { text: 'Mole', link: '/options/Crewmates/Basic/Mole' },
            { text: 'Randomizer', link: '/options/Crewmates/Basic/Randomizer' },
            { text: 'Super Star', link: '/options/Crewmates/Basic/SuperStar' },
            { text: 'Task Manager', link: '/options/Crewmates/Basic/TaskManager' },
            { text: 'Tracefinder', link: '/options/Crewmates/Basic/Tracefinder' },
            { text: 'Transporter', link: '/options/Crewmates/Basic/Transporter' },
          ],
          '/options/Crewmates/Experimental/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates' },
          ],
          '/options/Crewmates/Ghost/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates' },
            { text: 'Ghastly', link: '/options/Crewmates/Ghost/Ghastly' },
            { text: 'Hawk', link: '/options/Crewmates/Ghost/Hawk' },
            { text: 'Warden', link: '/options/Crewmates/Ghost/Warden' },
          ],
          '/options/Crewmates/Killing/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates' },
            { text: 'Bastion', link: '/options/Crewmates/Killing/Bastion' },
            { text: 'Bodyguard', link: '/options/Crewmates/Killing/Bodyguard' },
            { text: 'Crusader', link: '/options/Crewmates/Killing/Crusader' },
            { text: 'Deceiver', link: '/options/Crewmates/Killing/Deceiver' },
            { text: 'Jailer', link: '/options/Crewmates/Killing/Jailer' },
            { text: 'Judge', link: '/options/Crewmates/Killing/Judge' },
            { text: 'Knight', link: '/options/Crewmates/Killing/Knight' },
            { text: 'Nice Guesser', link: '/options/Crewmates/Killing/NiceGuesser' },
            { text: 'Reverie', link: '/options/Crewmates/Killing/Reverie' },
            { text: 'Retributionist', link: '/options/Crewmates/Killing/Retributionist' },
            { text: 'Sheriff', link: '/options/Crewmates/Killing/Sheriff' },
            { text: 'Veteran', link: '/options/Crewmates/Killing/Veteran' },
            { text: 'Vigilante', link: '/options/Crewmates/Killing/Vigilante' },
          ],
          '/options/Crewmates/Power/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates' },
            { text: 'Admirer', link: '/options/Crewmates/Power/Admirer' },
            { text: 'Captain', link: '/options/Crewmates/Power/Captain' },
            { text: 'Copycat', link: '/options/Crewmates/Power/Copycat' },
            { text: 'Dictator', link: '/options/Crewmates/Power/Dictator' },
            { text: 'Guardian', link: '/options/Crewmates/Power/Guardian' },
            { text: 'Lookout', link: '/options/Crewmates/Power/Lookout' },
            { text: 'Marshall', link: '/options/Crewmates/Power/Marshall' },
            { text: 'Mayor', link: '/options/Crewmates/Power/Mayor' },
            { text: 'Monarch', link: '/options/Crewmates/Power/Monarch' },
            { text: 'Overseer', link: '/options/Crewmates/Power/Overseer' },
            { text: 'President', link: '/options/Crewmates/Power/President' },
            { text: 'Swapper', link: '/options/Crewmates/Power/Swapper' },
            { text: 'Telecommunication', link: '/options/Crewmates/Power/Telecommunication' },
          ],
          '/options/Crewmates/Support/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates' },
            { text: 'Benefactor', link: '/options/Crewmates/Support/Benefactor' },
            { text: 'Chameleon', link: '/options/Crewmates/Support/Chameleon' },
            { text: 'Coroner', link: '/options/Crewmates/Support/Coroner' },
            { text: 'Deputy', link: '/options/Crewmates/Support/Deputy' },
            { text: 'Detective', link: '/options/Crewmates/Support/Detective' },
            { text: 'Enigma', link: '/options/Crewmates/Support/Enigma' },
            { text: 'Fortune Teller', link: '/options/Crewmates/Support/FortuneTeller' },
            { text: 'Grenadier', link: '/options/Crewmates/Support/Grenadier' },
            { text: 'Inspector', link: '/options/Crewmates/Support/Inspector' },
            { text: 'Investigator', link: '/options/Crewmates/Support/Investigator' },
            { text: 'Keeper', link: '/options/Crewmates/Support/Keeper' },
            { text: 'Lighter', link: '/options/Crewmates/Support/Lighter' },
            { text: 'Mechanic', link: '/options/Crewmates/Support/Mechanic' },
            { text: 'Medic', link: '/options/Crewmates/Support/Medic' },
            { text: 'Medium', link: '/options/Crewmates/Support/Medium' },
            { text: 'Merchant', link: '/options/Crewmates/Support/Merchant' },
            { text: 'Mortician', link: '/options/Crewmates/Support/Mortician' },
            { text: 'Observer', link: '/options/Crewmates/Support/Observer' },
            { text: 'Oracle', link: '/options/Crewmates/Support/Oracle' },
            { text: 'Pacifist', link: '/options/Crewmates/Support/Pacifist' },
            { text: 'Psychic', link: '/options/Crewmates/Support/Psychic' },
            { text: 'Snitch', link: '/options/Crewmates/Support/Snitch' },
            { text: 'Spiritualist', link: '/options/Crewmates/Support/Spiritualist' },
            { text: 'Spy', link: '/options/Crewmates/Support/Spy' },
            { text: 'Time Manager', link: '/options/Crewmates/Support/TimeManager' },
            { text: 'Time Master', link: '/options/Crewmates/Support/TimeMaster' },
            { text: 'Witness', link: '/options/Crewmates/Support/Witness' },
          ],
          '/options/Crewmates/Vanilla/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates' },
            { text: 'Crewmate', link: '/options/Crewmates/Vanilla/Crewmate' },
            { text: 'Engineer', link: '/options/Crewmates/Vanilla/Engineer' },
            { text: 'Guardian Angel', link: '/options/Crewmates/Vanilla/GuardianAngel' },
            { text: 'Noisemaker', link: '/options/Crewmates/Vanilla/Noisemaker' },
            { text: 'Scientist', link: '/options/Crewmates/Vanilla/Scientist' },
            { text: 'Tracker', link: '/options/Crewmates/Vanilla/Tracker' },
          ],
          '/options/Impostors/Concealing/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors' },
            { text: 'Escapist', link: '/options/Impostors/Concealing/Escapist' },
            { text: 'Lightning', link: '/options/Impostors/Concealing/Lightning' },
            { text: 'Mastermind', link: '/options/Impostors/Concealing/Mastermind' },
            { text: 'Miner', link: '/options/Impostors/Concealing/Miner' },
            { text: 'Puppeteer', link: '/options/Impostors/Concealing/Puppeteer' },
            { text: 'Rift Maker', link: '/options/Impostors/Concealing/RiftMaker' },
            { text: 'Scavenger', link: '/options/Impostors/Concealing/Scavenger' },
            { text: 'Shapemaster', link: '/options/Impostors/Concealing/Shapemaster' },
            { text: 'Soul Catcher', link: '/options/Impostors/Concealing/SoulCatcher' },
            { text: 'Swooper', link: '/options/Impostors/Concealing/Swooper' },
            { text: 'Trickster', link: '/options/Impostors/Concealing/Trickster' },
            { text: 'Undertaker', link: '/options/Impostors/Concealing/Undertaker' },
            {
              text: 'Vampire', link: '/options/Impostors/Concealing/Vampire', children: [
                { text: 'Vampiress', link: '/options/Impostors/Concealing/Vampiress' },
              ]
            },
            { text: 'Warlock', link: '/options/Impostors/Concealing/Warlock' },
            { text: 'Wildling', link: '/options/Impostors/Concealing/Wildling' },
          ],
          '/options/Impostors/Experimental/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors' },
            { text: 'Doll Master', link: '/options/Impostors/Experimental/DollMaster' },
          ],
          '/options/Impostors/Ghost/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors' },
            { text: 'Bloodmoon', link: '/options/Impostors/Ghost/Bloodmoon' },
            { text: 'Minion', link: '/options/Impostors/Ghost/Minion' },
          ],
          '/options/Impostors/Hindering/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors' },
            { text: 'Anonymous', link: '/options/Impostors/Hindering/Anonymous' },
            { text: 'Dazzler', link: '/options/Impostors/Hindering/Dazzler' },
            { text: 'Devourer', link: '/options/Impostors/Hindering/Devourer' },
            { text: 'Disperser', link: '/options/Impostors/Hindering/Disperser' },
            { text: 'Penguin', link: '/options/Impostors/Hindering/Penguin' },
            { text: 'Pitfall', link: '/options/Impostors/Hindering/Pitfall' },
            { text: 'Stealth', link: '/options/Impostors/Hindering/Stealth' },
            { text: 'Twister', link: '/options/Impostors/Hindering/Twister' },
          ],
          '/options/Impostors/Killing/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors' },
            {
              text: 'Arrogance', link: '/options/Impostors/Killing/Arrogance', children: [
                { text: 'Bard', link: '/options/Impostors/Killing/Bard' },
              ]
            },
            {
              text: 'Bomber', link: '/options/Impostors/Killing/Bomber', children: [
                { text: 'Nuker', link: '/options/Impostors/Killing/Nuker' },
              ]
            },
            { text: 'Bounty Hunter', link: '/options/Impostors/Killing/BountyHunter' },
            { text: 'Butcher', link: '/options/Impostors/Killing/Butcher' },
            { text: 'Chronomancer', link: '/options/Impostors/Killing/Chronomancer' },
            { text: 'Councillor', link: '/options/Impostors/Killing/Councillor' },
            { text: 'Cursed Wolf', link: '/options/Impostors/Killing/CursedWolf' },
            { text: 'Deathpact', link: '/options/Impostors/Killing/Deathpact' },
            { text: 'Evil Guesser', link: '/options/Impostors/Killing/EvilGuesser' },
            { text: 'Evil Hacker', link: '/options/Impostors/Killing/EvilHacker' },
            { text: 'Evil Tracker', link: '/options/Impostors/Killing/EvilTracker' },
            { text: 'Greedy', link: '/options/Impostors/Killing/Greedy' },
            { text: 'Hangman', link: '/options/Impostors/Killing/Hangman' },
            { text: 'Inhibitor', link: '/options/Impostors/Killing/Inhibitor' },
            { text: 'Instigator', link: '/options/Impostors/Killing/Instigator' },
            { text: 'Killing Machine', link: '/options/Impostors/Killing/KillingMachine' },
            { text: 'Ludopath', link: '/options/Impostors/Killing/Ludopath' },
            { text: 'Lurker', link: '/options/Impostors/Killing/Lurker' },
            { text: 'Mercenary', link: '/options/Impostors/Killing/Mercenary' },
            { text: 'Ninja', link: '/options/Impostors/Killing/Ninja' },
            { text: 'Quick Shooter', link: '/options/Impostors/Killing/QuickShooter' },
            { text: 'Saboteur', link: '/options/Impostors/Killing/Saboteur' },
            { text: 'Sniper', link: '/options/Impostors/Killing/Sniper' },
            { text: 'Trapster', link: '/options/Impostors/Killing/Trapster' },
            { text: 'Underdog', link: '/options/Impostors/Killing/Underdog' },
            { text: 'Witch', link: '/options/Impostors/Killing/Witch' },
            { text: 'Zombie', link: '/options/Impostors/Killing/Zombie' }
          ],
          '/options/Impostors/Madmate/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors' },
            { text: 'Crewpostor', link: '/options/Impostors/Madmate/Crewpostor' },
            { text: 'Parasite', link: '/options/Impostors/Madmate/Parasite' },
            { text: 'Refugee', link: '/options/Impostors/Madmate/Refugee' },
          ],
          '/options/Impostors/Support/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors' },
            { text: 'Anti Adminer', link: '/options/Impostors/Support/AntiAdminer' },
            { text: 'Blackmailer', link: '/options/Impostors/Support/Blackmailer' },
            { text: 'Camouflager', link: '/options/Impostors/Support/Camouflager' },
            { text: 'Cleaner', link: '/options/Impostors/Support/Cleaner' },
            { text: 'Consigliere', link: '/options/Impostors/Support/Consigliere' },
            { text: 'Fireworker', link: '/options/Impostors/Support/Fireworker' },
            { text: 'Gangster', link: '/options/Impostors/Support/Gangster' },
            { text: 'Godfather', link: '/options/Impostors/Support/Godfather' },
            { text: 'Kamikaze', link: '/options/Impostors/Support/Kamikaze' },
            { text: 'Morphling', link: '/options/Impostors/Support/Morphling' },
            { text: 'Nemesis', link: '/options/Impostors/Support/Nemesis' },
            { text: 'Time Thief', link: '/options/Impostors/Support/TimeThief' },
            { text: 'Vindicator', link: '/options/Impostors/Support/Vindicator' },
            { text: 'Visionary', link: '/options/Impostors/Support/Visionary' },
          ],
          '/options/Impostors/Vanilla/': [
            { text: 'Back to Impostors', link: '/options/Settings/Crewmates' },
            { text: 'Impostor', link: '/options/Impostors/Vanilla/Impostor' },
            { text: 'Phantom', link: '/options/Impostors/Vanilla/Phantom' },
            { text: 'Shapeshifter', link: '/options/Impostors/Vanilla/Shapeshifter' },
          ],
          '/options/Neutrals/Apocalypse': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals' },
            {
              text: 'Baker', link: '/options/Neutrals/Apocalypse/Baker', children: [
                { text: 'Famine', link: '/options/Neutrals/Apocalypse/Famine' },
              ]
            },
            {
              text: 'Berserker', link: '/options/Neutrals/Apocalypse/Berserker', children: [
                { text: 'War', link: '/options/Neutrals/Apocalypse/War' },
              ]
            },
            {
              text: 'Plaguebearer', link: '/options/Neutrals/Apocalypse/Plaguebearer', children: [
                { text: 'Pestilence', link: '/options/Neutrals/Apocalypse/Pestilence' },
              ]
            },
            {
              text: 'Soul Collector', link: '/options/Neutrals/Apocalypse/SoulCollector', children: [
                { text: 'Death', link: '/options/Neutrals/Apocalypse/Death' },
              ]
            },
          ],
          '/options/Neutrals/Benign': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals' },
            { text: 'Amnesiac', link: '/options/Neutrals/Benign/Amnesiac' },
            { text: 'Follower', link: '/options/Neutrals/Benign/Follower' },
            { text: 'Hater', link: '/options/Neutrals/Benign/Hater' },
            { text: 'Lawyer', link: '/options/Neutrals/Benign/Lawyer' },
            { text: 'Maverick', link: '/options/Neutrals/Benign/Maverick' },
            { text: 'Opportunist', link: '/options/Neutrals/Benign/Opportunist' },
            { text: 'Pixie', link: '/options/Neutrals/Benign/Pixie' },
            { text: 'Pursuer', link: '/options/Neutrals/Benign/Pursuer' },
            {
              text: 'Romantic', link: '/options/Neutrals/Benign/Romantic', children: [
                { text: 'Vengeful Romantic', link: '/options/Neutrals/Benign/RomanticVengeful' },
                { text: 'Ruthless Romantic', link: '/options/Neutrals/Benign/RomanticRuthless' },
              ]
            },
            { text: 'Shaman', link: '/options/Neutrals/Benign/Shaman' },
            { text: 'Schrodingers Cat', link: '/options/Neutrals/Benign/SchrodingersCat' },
            { text: 'Taskinator', link: '/options/Neutrals/Benign/Taskinator' },
          ],
          '/options/Neutrals/Chaos': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals' },
            { text: 'Collector', link: '/options/Neutrals/Chaos/Collector' },
            { text: 'Cultist', link: '/options/Neutrals/Chaos/Cultist' },
            { text: 'God', link: '/options/Neutrals/Chaos/God' },
            { text: 'Pirate', link: '/options/Neutrals/Chaos/Pirate' },
            { text: 'Provocateur', link: '/options/Neutrals/Chaos/Provocateur' },
            { text: 'Revolutionist', link: '/options/Neutrals/Chaos/Revolutionist' },
            { text: 'Solsticer', link: '/options/Neutrals/Chaos/Solsticer' },
            { text: 'Specter', link: '/options/Neutrals/Chaos/Specter' },
            { text: 'Terrorist', link: '/options/Neutrals/Chaos/Terrorist' },
            { text: 'Troller', link: '/options/Neutrals/Chaos/Troller' },
            { text: 'Vector', link: '/options/Neutrals/Chaos/Vector' },
            { text: 'Vulture', link: '/options/Neutrals/Chaos/Vulture' },
            { text: 'Workaholic', link: '/options/Neutrals/Chaos/Workaholic' },
          ],
          '/options/Neutrals/Evil/': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals' },
            { text: 'Cursed Soul', link: '/options/Neutrals/Evil/CursedSoul' },
            { text: 'Doomsayer', link: '/options/Neutrals/Evil/Doomsayer' },
            { text: 'Executioner', link: '/options/Neutrals/Evil/Executioner' },
            { text: 'Innocent', link: '/options/Neutrals/Evil/Innocent' },
            {
              text: 'Jester', link: '/options/Neutrals/Evil/Jester', children: [
                { text: 'Sunnyboy', link: '/options/Neutrals/Evil/Sunnyboy' },
              ]
            },
            { text: 'Punching Bag', link: '/options/Neutrals/Evil/PunchingBag' },
            { text: 'Seeker', link: '/options/Neutrals/Evil/Seeker' },
          ],
          '/options/Neutrals/Experimental/': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals' },
            { text: 'Doppelganger', link: '/options/Neutrals/Experimental/Doppelganger' },
            { text: 'Imitator', link: '/options/Neutrals/Experimental/Imitator' },
            { text: 'Quizmaster', link: '/options/Neutrals/Experimental/Quizmaster' },
          ],
          '/options/Neutrals/Killing/': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals' },
            { text: 'Agitator', link: '/options/Neutrals/Killing/Agitator' },
            { text: 'Arsonist', link: '/options/Neutrals/Killing/Arsonist' },
            { text: 'Bandit', link: '/options/Neutrals/Killing/Bandit' },
            { text: 'Blood Knight', link: '/options/Neutrals/Killing/BloodKnight' },
            { text: 'Demon', link: '/options/Neutrals/Killing/Demon' },
            { text: 'Doppelganger', link: '/options/Neutrals/Killing/Doppelganger' },
            { text: 'Glitch', link: '/options/Neutrals/Killing/Glitch' },
            { text: 'Hex Master', link: '/options/Neutrals/Killing/HexMaster' },
            { text: 'Huntsman', link: '/options/Neutrals/Killing/Huntsman' },
            { text: 'Infectious', link: '/options/Neutrals/Killing/Infectious' },
            { text: 'Jackal', link: '/options/Neutrals/Killing/Jackal' },
            { text: 'Jinx', link: '/options/Neutrals/Killing/Jinx' },
            { text: 'Juggernaut', link: '/options/Neutrals/Killing/Juggernaut' },
            { text: 'Medusa', link: '/options/Neutrals/Killing/Medusa' },
            { text: 'Necromancer', link: '/options/Neutrals/Killing/Necromancer' },
            { text: 'Pelican', link: '/options/Neutrals/Killing/Pelican' },
            { text: 'Pickpocket', link: '/options/Neutrals/Killing/Pickpocket' },
            { text: 'Plague Scientist', link: '/options/Neutrals/Killing/PlagueScientist' },
            { text: 'Poisoner', link: '/options/Neutrals/Killing/Poisoner' },
            { text: 'Potion Master', link: '/options/Neutrals/Killing/PotionMaster' },
            { text: 'Pyromaniac', link: '/options/Neutrals/Killing/Pyromaniac' },
            { text: 'Serial Killer', link: '/options/Neutrals/Killing/SerialKiller' },
            { text: 'Shroud', link: '/options/Neutrals/Killing/Shroud' },
            { text: 'Spiritcaller', link: '/options/Neutrals/Killing/Spiritcaller' },
            { text: 'Stalker', link: '/options/Neutrals/Killing/Stalker' },
            { text: 'Traitor', link: '/options/Neutrals/Killing/Traitor' },
            { text: 'Virus', link: '/options/Neutrals/Killing/Virus' },
            { text: 'Werewolf', link: '/options/Neutrals/Killing/Werewolf' },
            { text: 'Wraith', link: '/options/Neutrals/Killing/Wraith' },
          ],
          '/options/Settings/': [
            { text: 'Game Settings', link: '/options/Settings/Game' },
            { text: 'System Settings', link: '/options/Settings/System' },
            { text: 'Mod Settings', link: '/options/Settings/Mod' },
            { text: 'Game Modifiers', link: '/options/Settings/Modifiers' },
            { text: 'Impostors', link: '/options/Settings/Impostors' },
            { text: 'Crewmates', link: '/options/Settings/Crewmates' },
            { text: 'Neutrals', link: '/options/Settings/Neutrals' },
            { text: 'Add-ons', link: '/options/Settings/Addons' },
          ],
        }
      },
      '/fr/': {
        selectLanguageName: 'Français',
        home: '/translations/fr/',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        home: '/translations/zh-CN/',
      },
    }
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        'fr': {
          placeholder: 'Rechercher',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
})
