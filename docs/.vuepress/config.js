import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  title: "TownOfHost:Enhanced",
  description: "TOHE is the best Host-Only mod for anyone who wants to change their Among Us Experience!",
  locales: {
    '/': {
      lang: "en-US",
    },
    /*'/fr/': {
      lang: "fr-FR"
    },*/
    "/zh/": {
      lang: "zh-CN",
    }
  },
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoAlt: "TOHE Logo",
    externalLinkIcon: false,
    repo: '0xDrMoe/TOHRE-Code',
    editLink: true,
    contributors: false,
    locales: {
      '/': {
        home: "/",
        selectLanguageName: 'English',
        //Uh, is ......`repoLabel` set to `Contribute` appropriate? Would this be misleading to visitors?
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
      /*'/fr/': {
        selectLanguageName: 'Français',
        home: '/translations/fr/',
      },*/
      '/zh/': {
        selectLanguageName: '简体中文',
        home: '/zh/',
        notFound: [
          '你要去哪?',
          '哈?你从哪来的?',
          '你是怎么来到这里的?',
          '这不是您要找的页面。',
          '这地方什么都没有。',
          '不,这里什么都没有。',
          "无论您要找什么，这里都没有。"
        ],
        backToHome: '返回首页',
        toggleColorMode: '切换颜色模式',
        navbar: [
          {
            text: '职业',
            children: [
              {
                text: '全部职业',
                link: '/zh/Roles',
              },
              {
                text: '内鬼职业',
                link: '/zh/options/Settings/Impostors',
              },
              {
                text: '船员职业',
                link: '/zh/options/Settings/Crewmates',
              },
              {
                text: '中立职业',
                link: '/zh/options/Settings/Neutrals',
              },
              {
                text: '附加职业',
                link: '/zh/options/Settings/Addons',
              }
            ]
          },
          {
            text: "设置",
            children: [
              {
                text: '游戏设置',
                link: '/zh/options/Settings/Game',
              },
              {
                text: '系统设置',
                link: '/zh/options/Settings/System',
              },
              {
                text: '模组设置',
                link: '/zh/options/Settings/Mod',
              },
              {
                text: 'Game Modifiers',
                link: '/zh/options/Settings/Modifiers',
              }
            ]
          },
          {
            text: '关于',
            link: '/zh/AboutUs',
          },
          {
            text: '更新日志',
            link: '/zh/Changelogs',
          },
          {
            text: 'Resources',
            link: '/zh/Resources',
          },
          {
            text: 'Install',
            link: '/zh/Install',
          },
          {
            text: 'FAQ',
            link: '/zh/FAQ',
          },
        ],
        sidebar: {
          '/zh/options/Addons/Experimental/': [
            { text: 'Back to Addons', link: '/zh/options/Settings/Addons' },
            { text: 'Glow', link: '/zh/options/Addons/Experimental/Glow' },
            { text: 'Swift', link: '/zh/options/Addons/Impostor/Swift' }
          ],
          '/zh/options/Addons/Harmful/': [
            { text: 'Back to Addons', link: '/zh/options/Settings/Addons' },
            { text: 'Disregarded', link: '/zh/options/Addons/Harmful/Disregarded' },
            { text: 'Fool', link: '/zh/options/Addons/Harmful/Fool' },
            { text: 'Fragile', link: '/zh/options/Addons/Harmful/Fragile' },
            { text: 'Hurried', link: '/zh/options/Addons/Harmful/Hurried' },
            { text: 'Influenced', link: '/zh/options/Addons/Harmful/Influenced' },
            { text: 'Mundane', link: '/zh/options/Addons/Harmful/Mundane' },
            { text: 'Oblivious', link: '/zh/options/Addons/Harmful/Oblivious' },
            { text: 'Rascal', link: '/zh/options/Addons/Harmful/Rascal' },
            { text: 'Statue', link: '/zh/options/Addons/Harmful/Statue' },
            { text: 'Tired', link: '/zh/options/Addons/Harmful/Tired' },
            { text: 'Unlucky', link: '/zh/options/Addons/Harmful/Unlucky' },
            { text: 'Void Ballot', link: '/zh/options/Addons/Harmful/VoidBallot' }
          ],
          '/zh/options/Addons/Helpful/': [
            { text: 'Back to Add-ons', link: '/zh/options/Settings/Addons' },
            { text: 'Autopsy', link: '/zh/options/Addons/Helpful/Autopsy' },
            { text: 'Bait', link: '/zh/options/Addons/Helpful/Bait' },
            { text: 'Beartrap', link: '/zh/options/Addons/Helpful/Beartrap' },
            { text: 'Bewilder', link: '/zh/options/Addons/Helpful/Bewilder' },
            { text: 'Burst', link: '/zh/options/Addons/Helpful/Burst' },
            { text: 'Cyber', link: '/zh/options/Addons/Helpful/Cyber' },
            { text: 'Flash', link: '/zh/options/Addons/Helpful/Flash' },
            { text: 'Lazy', link: '/zh/options/Addons/Helpful/Lazy' },
            { text: 'Loyal', link: '/zh/options/Addons/Helpful/Loyal' },
            { text: 'Lucky', link: '/zh/options/Addons/Helpful/Lucky' },
            { text: 'Necroview', link: '/zh/options/Addons/Helpful/Necroview' },
            { text: 'Nimble', link: '/zh/options/Addons/Helpful/Nimble' },
            { text: 'Overclocked', link: '/zh/options/Addons/Helpful/Overclocked' },
            { text: 'Radar', link: '/zh/options/Addons/Helpful/Radar' },
            { text: 'Seer', link: '/zh/options/Addons/Helpful/Seer' },
            { text: 'Silent', link: '/zh/options/Addons/Helpful/Silent' },
            { text: 'Sleuth', link: '/zh/options/Addons/Helpful/Sleuth' },
            { text: 'Spurt', link: '/zh/options/Addons/Helpful/Spurt' },
            { text: 'Tiebreaker', link: '/zh/options/Addons/Helpful/Tiebreaker' },
            { text: 'Torch', link: '/zh/options/Addons/Helpful/Torch' },
            { text: 'Watcher', link: '/zh/options/Addons/Helpful/Watcher' }
          ],
          '/zh/options/Addons/Impostor/': [
            { text: 'Back to Add-ons', link: '/zh/options/Settings/Addons' },
            { text: 'Circumvent', link: '/zh/options/Addons/Impostor/Circumvent' },
            { text: 'Clumsy', link: '/zh/options/Addons/Impostor/Clumsy' },
            { text: 'Last Impostor', link: '/zh/options/Addons/Impostor/LastImpostor' },
            { text: 'Madmate', link: '/zh/options/Addons/Impostor/Madmate' },
            { text: 'Mare', link: '/zh/options/Addons/Impostor/Mare' },
            { text: 'Mimic', link: '/zh/options/Addons/Impostor/Mimic' },
            { text: 'Stealer', link: '/zh/options/Addons/Impostor/Stealer' },
            { text: 'Tricky', link: '/zh/options/Addons/Impostor/Tricky' },
          ],
          '/zh/options/Addons/Miscellaneous/': [
            { text: 'Back to Add-ons', link: '/zh/options/Settings/Addons' },
            { text: 'Egoist', link: '/zh/options/Addons/Miscellaneous/Egoist' },
            { text: 'Lovers', link: '/zh/options/Addons/Miscellaneous/Lovers' },
            { text: 'Rainbow', link: '/zh/options/Addons/Miscellaneous/Rainbow' },
            { text: 'Reach', link: '/zh/options/Addons/Miscellaneous/Reach' },
            { text: 'Workhorse', link: '/zh/options/Addons/Miscellaneous/Workhorse' },
            { text: 'YouTuber', link: '/zh/options/Addons/Miscellaneous/YouTuber' },
          ],
          '/zh/options/Addons/Mixed/': [
            { text: 'Back to Add-ons', link: '/zh/options/Settings/Addons' },
            { text: 'Antidote', link: '/zh/options/Addons/Mixed/Antidote' },
            { text: 'Avenger', link: '/zh/options/Addons/Mixed/Avenger' },
            { text: 'Aware', link: '/zh/options/Addons/Mixed/Aware' },
            { text: 'Bloodthirst', link: '/zh/options/Addons/Mixed/Bloodthirst' },
            { text: 'Diseased', link: '/zh/options/Addons/Mixed/Diseased' },
            { text: 'Ghoul', link: '/zh/options/Addons/Mixed/Ghoul' },
            { text: 'Gravestone', link: '/zh/options/Addons/Mixed/Gravestone' },
            { text: 'Guesser', link: '/zh/options/Addons/Mixed/Guesser' },
            { text: 'OIIAI', link: '/zh/options/Addons/Mixed/OIIAI' },
            { text: 'Paranoia', link: '/zh/options/Addons/Mixed/Paranoia' },
            { text: 'Stubborn', link: '/zh/options/Addons/Mixed/Stubborn' },
            { text: 'Susceptible', link: '/zh/options/Addons/Mixed/Susceptible' },
          ],
          '/zh/options/Addons/Other/': [
            { text: 'Back to Addons', link: '/zh/options/Settings/Addons' },
            { text: 'Double Shot', link: '/zh/options/Addons/Other/DoubleShot' },
            { text: 'Onbound', link: '/zh/options/Addons/Other/Onbound' },
            { text: 'Rebound', link: '/zh/options/Addons/Other/Rebound' }
          ],
          '/zh/options/Crewmates/Basic/': [
            { text: 'Back to Crewmates', link: '/zh/options/Settings/Crewmates' },
            { text: 'Addict', link: '/zh/options/Crewmates/Basic/Addict' },
            { text: 'Alchemist', link: '/zh/options/Crewmates/Basic/Alchemist' },
            { text: 'Celebrity', link: '/zh/options/Crewmates/Basic/Celebrity' },
            { text: 'Cleanser', link: '/zh/options/Crewmates/Basic/Cleanser' },
            { text: 'Doctor', link: '/zh/options/Crewmates/Basic/Doctor' },
            { text: 'Guess Master', link: '/zh/options/Crewmates/Basic/GuessMaster' },
            { text: 'Lazy Guy', link: '/zh/options/Crewmates/Basic/LazyGuy' },
            {
              text: 'Mini', link: '/zh/options/Crewmates/Basic/Mini', children: [
                { text: 'Evil Mini', link: '/zh/options/Crewmates/Basic/MiniEvil' },
                { text: 'Nice Mini', link: '/zh/options/Crewmates/Basic/MiniNice' }
              ]
            },
            { text: 'Mole', link: '/zh/options/Crewmates/Basic/Mole' },
            { text: 'Randomizer', link: '/zh/options/Crewmates/Basic/Randomizer' },
            { text: 'Super Star', link: '/zh/options/Crewmates/Basic/SuperStar' },
            { text: 'Task Manager', link: '/zh/options/Crewmates/Basic/TaskManager' },
            { text: 'Tracefinder', link: '/zh/options/Crewmates/Basic/Tracefinder' },
            { text: 'Transporter', link: '/zh/options/Crewmates/Basic/Transporter' },
          ],
          '/zh/options/Crewmates/Experimental/': [
            { text: 'Back to Crewmates', link: '/zh/options/Settings/Crewmates' },
          ],
          '/zh/options/Crewmates/Ghost/': [
            { text: 'Back to Crewmates', link: '/zh/options/Settings/Crewmates' },
            { text: 'Ghastly', link: '/zh/options/Crewmates/Ghost/Ghastly' },
            { text: 'Hawk', link: '/zh/options/Crewmates/Ghost/Hawk' },
            { text: 'Warden', link: '/zh/options/Crewmates/Ghost/Warden' },
          ],
          '/zh/options/Crewmates/Killing/': [
            { text: 'Back to Crewmates', link: '/zh/options/Settings/Crewmates' },
            { text: 'Bastion', link: '/zh/options/Crewmates/Killing/Bastion' },
            { text: 'Bodyguard', link: '/zh/options/Crewmates/Killing/Bodyguard' },
            { text: 'Crusader', link: '/zh/options/Crewmates/Killing/Crusader' },
            { text: 'Deceiver', link: '/zh/options/Crewmates/Killing/Deceiver' },
            { text: 'Jailer', link: '/zh/options/Crewmates/Killing/Jailer' },
            { text: 'Judge', link: '/zh/options/Crewmates/Killing/Judge' },
            { text: 'Knight', link: '/zh/options/Crewmates/Killing/Knight' },
            { text: 'Nice Guesser', link: '/zh/options/Crewmates/Killing/NiceGuesser' },
            { text: 'Reverie', link: '/zh/options/Crewmates/Killing/Reverie' },
            { text: 'Retributionist', link: '/zh/options/Crewmates/Killing/Retributionist' },
            { text: 'Sheriff', link: '/zh/options/Crewmates/Killing/Sheriff' },
            { text: 'Veteran', link: '/zh/options/Crewmates/Killing/Veteran' },
            { text: 'Vigilante', link: '/zh/options/Crewmates/Killing/Vigilante' },
          ],
          '/zh/options/Crewmates/Power/': [
            { text: 'Back to Crewmates', link: '/zh/options/Settings/Crewmates' },
            { text: 'Admirer', link: '/zh/options/Crewmates/Power/Admirer' },
            { text: 'Captain', link: '/zh/options/Crewmates/Power/Captain' },
            { text: 'Copycat', link: '/zh/options/Crewmates/Power/Copycat' },
            { text: 'Dictator', link: '/zh/options/Crewmates/Power/Dictator' },
            { text: 'Guardian', link: '/zh/options/Crewmates/Power/Guardian' },
            { text: 'Lookout', link: '/zh/options/Crewmates/Power/Lookout' },
            { text: 'Marshall', link: '/zh/options/Crewmates/Power/Marshall' },
            { text: 'Mayor', link: '/zh/options/Crewmates/Power/Mayor' },
            { text: 'Monarch', link: '/zh/options/Crewmates/Power/Monarch' },
            { text: 'Overseer', link: '/zh/options/Crewmates/Power/Overseer' },
            { text: 'President', link: '/zh/options/Crewmates/Power/President' },
            { text: 'Swapper', link: '/zh/options/Crewmates/Power/Swapper' },
            { text: 'Telecommunication', link: '/zh/options/Crewmates/Power/Telecommunication' },
          ],
          '/zh/options/Crewmates/Support/': [
            { text: 'Back to Crewmates', link: '/zh/options/Settings/Crewmates' },
            { text: 'Benefactor', link: '/zh/options/Crewmates/Support/Benefactor' },
            { text: 'Chameleon', link: '/zh/options/Crewmates/Support/Chameleon' },
            { text: 'Coroner', link: '/zh/options/Crewmates/Support/Coroner' },
            { text: 'Deputy', link: '/zh/options/Crewmates/Support/Deputy' },
            { text: 'Detective', link: '/zh/options/Crewmates/Support/Detective' },
            { text: 'Enigma', link: '/zh/options/Crewmates/Support/Enigma' },
            { text: 'Fortune Teller', link: '/zh/options/Crewmates/Support/FortuneTeller' },
            { text: 'Grenadier', link: '/zh/options/Crewmates/Support/Grenadier' },
            { text: 'Inspector', link: '/zh/options/Crewmates/Support/Inspector' },
            { text: 'Investigator', link: '/zh/options/Crewmates/Support/Investigator' },
            { text: 'Keeper', link: '/zh/options/Crewmates/Support/Keeper' },
            { text: 'Lighter', link: '/zh/options/Crewmates/Support/Lighter' },
            { text: 'Mechanic', link: '/zh/options/Crewmates/Support/Mechanic' },
            { text: 'Medic', link: '/zh/options/Crewmates/Support/Medic' },
            { text: 'Medium', link: '/zh/options/Crewmates/Support/Medium' },
            { text: 'Merchant', link: '/zh/options/Crewmates/Support/Merchant' },
            { text: 'Mortician', link: '/zh/options/Crewmates/Support/Mortician' },
            { text: 'Observer', link: '/zh/options/Crewmates/Support/Observer' },
            { text: 'Oracle', link: '/zh/options/Crewmates/Support/Oracle' },
            { text: 'Pacifist', link: '/zh/options/Crewmates/Support/Pacifist' },
            { text: 'Psychic', link: '/zh/options/Crewmates/Support/Psychic' },
            { text: 'Snitch', link: '/zh/options/Crewmates/Support/Snitch' },
            { text: 'Spiritualist', link: '/zh/options/Crewmates/Support/Spiritualist' },
            { text: 'Spy', link: '/zh/options/Crewmates/Support/Spy' },
            { text: 'Time Manager', link: '/zh/options/Crewmates/Support/TimeManager' },
            { text: 'Time Master', link: '/zh/options/Crewmates/Support/TimeMaster' },
            { text: 'Witness', link: '/zh/options/Crewmates/Support/Witness' },
          ],
          '/zh/options/Crewmates/Vanilla/': [
            { text: 'Back to Crewmates', link: '/zh/options/Settings/Crewmates' },
            { text: 'Crewmate', link: '/zh/options/Crewmates/Vanilla/Crewmate' },
            { text: 'Engineer', link: '/zh/options/Crewmates/Vanilla/Engineer' },
            { text: 'Guardian Angel', link: '/zh/options/Crewmates/Vanilla/GuardianAngel' },
            { text: 'Noisemaker', link: '/zh/options/Crewmates/Vanilla/Noisemaker' },
            { text: 'Scientist', link: '/zh/options/Crewmates/Vanilla/Scientist' },
            { text: 'Tracker', link: '/zh/options/Crewmates/Vanilla/Tracker' },
          ],
          '/zh/options/Impostors/Concealing/': [
            { text: 'Back to Impostors', link: '/zh/options/Settings/Impostors' },
            { text: 'Escapist', link: '/zh/options/Impostors/Concealing/Escapist' },
            { text: 'Lightning', link: '/zh/options/Impostors/Concealing/Lightning' },
            { text: 'Mastermind', link: '/zh/options/Impostors/Concealing/Mastermind' },
            { text: 'Miner', link: '/zh/options/Impostors/Concealing/Miner' },
            { text: 'Puppeteer', link: '/zh/options/Impostors/Concealing/Puppeteer' },
            { text: 'Rift Maker', link: '/zh/options/Impostors/Concealing/RiftMaker' },
            { text: 'Scavenger', link: '/zh/options/Impostors/Concealing/Scavenger' },
            { text: 'Shapemaster', link: '/zh/options/Impostors/Concealing/Shapemaster' },
            { text: 'Soul Catcher', link: '/zh/options/Impostors/Concealing/SoulCatcher' },
            { text: 'Swooper', link: '/zh/options/Impostors/Concealing/Swooper' },
            { text: 'Trickster', link: '/zh/options/Impostors/Concealing/Trickster' },
            { text: 'Undertaker', link: '/zh/options/Impostors/Concealing/Undertaker' },
            {
              text: 'Vampire', link: '/zh/options/Impostors/Concealing/Vampire', children: [
                { text: 'Vampiress', link: '/zh/options/Impostors/Concealing/Vampiress' },
              ]
            },
            { text: 'Warlock', link: '/zh/options/Impostors/Concealing/Warlock' },
            { text: 'Wildling', link: '/zh/options/Impostors/Concealing/Wildling' },
          ],
          '/zh/options/Impostors/Experimental/': [
            { text: 'Back to Impostors', link: '/zh/options/Settings/Impostors' },
            { text: 'Doll Master', link: '/zh/options/Impostors/Experimental/DollMaster' },
          ],
          '/zh/options/Impostors/Ghost/': [
            { text: 'Back to Impostors', link: '/zh/options/Settings/Impostors' },
            { text: 'Bloodmoon', link: '/zh/options/Impostors/Ghost/Bloodmoon' },
            { text: 'Minion', link: '/zh/options/Impostors/Ghost/Minion' },
          ],
          '/zh/options/Impostors/Hindering/': [
            { text: 'Back to Impostors', link: '/zh/options/Settings/Impostors' },
            { text: 'Anonymous', link: '/zh/options/Impostors/Hindering/Anonymous' },
            { text: 'Dazzler', link: '/zh/options/Impostors/Hindering/Dazzler' },
            { text: 'Devourer', link: '/zh/options/Impostors/Hindering/Devourer' },
            { text: 'Disperser', link: '/zh/options/Impostors/Hindering/Disperser' },
            { text: 'Penguin', link: '/zh/options/Impostors/Hindering/Penguin' },
            { text: 'Pitfall', link: '/zh/options/Impostors/Hindering/Pitfall' },
            { text: 'Stealth', link: '/zh/options/Impostors/Hindering/Stealth' },
            { text: 'Twister', link: '/zh/options/Impostors/Hindering/Twister' },
          ],
          '/zh/options/Impostors/Killing/': [
            { text: 'Back to Impostors', link: '/zh/options/Settings/Impostors' },
            {
              text: 'Arrogance', link: '/zh/options/Impostors/Killing/Arrogance', children: [
                { text: 'Bard', link: '/zh/options/Impostors/Killing/Bard' },
              ]
            },
            {
              text: 'Bomber', link: '/zh/options/Impostors/Killing/Bomber', children: [
                { text: 'Nuker', link: '/zh/options/Impostors/Killing/Nuker' },
              ]
            },
            { text: 'Bounty Hunter', link: '/zh/options/Impostors/Killing/BountyHunter' },
            { text: 'Butcher', link: '/zh/options/Impostors/Killing/Butcher' },
            { text: 'Chronomancer', link: '/zh/options/Impostors/Killing/Chronomancer' },
            { text: 'Councillor', link: '/zh/options/Impostors/Killing/Councillor' },
            { text: 'Cursed Wolf', link: '/zh/options/Impostors/Killing/CursedWolf' },
            { text: 'Deathpact', link: '/zh/options/Impostors/Killing/Deathpact' },
            { text: 'Evil Guesser', link: '/zh/options/Impostors/Killing/EvilGuesser' },
            { text: 'Evil Hacker', link: '/zh/options/Impostors/Killing/EvilHacker' },
            { text: 'Evil Tracker', link: '/zh/options/Impostors/Killing/EvilTracker' },
            { text: 'Greedy', link: '/zh/options/Impostors/Killing/Greedy' },
            { text: 'Hangman', link: '/zh/options/Impostors/Killing/Hangman' },
            { text: 'Inhibitor', link: '/zh/options/Impostors/Killing/Inhibitor' },
            { text: 'Instigator', link: '/zh/options/Impostors/Killing/Instigator' },
            { text: 'Killing Machine', link: '/zh/options/Impostors/Killing/KillingMachine' },
            { text: 'Ludopath', link: '/zh/options/Impostors/Killing/Ludopath' },
            { text: 'Lurker', link: '/zh/options/Impostors/Killing/Lurker' },
            { text: 'Mercenary', link: '/zh/options/Impostors/Killing/Mercenary' },
            { text: 'Ninja', link: '/zh/options/Impostors/Killing/Ninja' },
            { text: 'Quick Shooter', link: '/zh/options/Impostors/Killing/QuickShooter' },
            { text: 'Saboteur', link: '/zh/options/Impostors/Killing/Saboteur' },
            { text: 'Sniper', link: '/zh/options/Impostors/Killing/Sniper' },
            { text: 'Trapster', link: '/zh/options/Impostors/Killing/Trapster' },
            { text: 'Underdog', link: '/zh/options/Impostors/Killing/Underdog' },
            { text: 'Witch', link: '/zh/options/Impostors/Killing/Witch' },
            { text: 'Zombie', link: '/zh/options/Impostors/Killing/Zombie' }
          ],
          '/zh/options/Impostors/Madmate/': [
            { text: 'Back to Impostors', link: '/zh/options/Settings/Impostors' },
            { text: 'Crewpostor', link: '/zh/options/Impostors/Madmate/Crewpostor' },
            { text: 'Parasite', link: '/zh/options/Impostors/Madmate/Parasite' },
            { text: 'Refugee', link: '/zh/options/Impostors/Madmate/Refugee' },
          ],
          '/zh/options/Impostors/Support/': [
            { text: 'Back to Impostors', link: '/zh/options/Settings/Impostors' },
            { text: 'Anti Adminer', link: '/zh/options/Impostors/Support/AntiAdminer' },
            { text: 'Blackmailer', link: '/zh/options/Impostors/Support/Blackmailer' },
            { text: 'Camouflager', link: '/zh/options/Impostors/Support/Camouflager' },
            { text: 'Cleaner', link: '/zh/options/Impostors/Support/Cleaner' },
            { text: 'Consigliere', link: '/zh/options/Impostors/Support/Consigliere' },
            { text: 'Fireworker', link: '/zh/options/Impostors/Support/Fireworker' },
            { text: 'Gangster', link: '/zh/options/Impostors/Support/Gangster' },
            { text: 'Godfather', link: '/zh/options/Impostors/Support/Godfather' },
            { text: 'Kamikaze', link: '/zh/options/Impostors/Support/Kamikaze' },
            { text: 'Morphling', link: '/zh/options/Impostors/Support/Morphling' },
            { text: 'Nemesis', link: '/zh/options/Impostors/Support/Nemesis' },
            { text: 'Time Thief', link: '/zh/options/Impostors/Support/TimeThief' },
            { text: 'Vindicator', link: '/zh/options/Impostors/Support/Vindicator' },
            { text: 'Visionary', link: '/zh/options/Impostors/Support/Visionary' },
          ],
          '/zh/options/Impostors/Vanilla/': [
            { text: 'Back to Impostors', link: '/zh/options/Settings/Crewmates' },
            { text: 'Impostor', link: '/zh/options/Impostors/Vanilla/Impostor' },
            { text: 'Phantom', link: '/zh/options/Impostors/Vanilla/Phantom' },
            { text: 'Shapeshifter', link: '/zh/options/Impostors/Vanilla/Shapeshifter' },
          ],
          '/zh/options/Neutrals/Apocalypse': [
            { text: 'Back to Neutrals', link: '/zh/options/Settings/Neutrals' },
            {
              text: 'Baker', link: '/zh/options/Neutrals/Apocalypse/Baker', children: [
                { text: 'Famine', link: '/zh/options/Neutrals/Apocalypse/Famine' },
              ]
            },
            {
              text: 'Berserker', link: '/zh/options/Neutrals/Apocalypse/Berserker', children: [
                { text: 'War', link: '/zh/options/Neutrals/Apocalypse/War' },
              ]
            },
            {
              text: 'Plaguebearer', link: '/zh/options/Neutrals/Apocalypse/Plaguebearer', children: [
                { text: 'Pestilence', link: '/zh/options/Neutrals/Apocalypse/Pestilence' },
              ]
            },
            {
              text: 'Soul Collector', link: '/zh/options/Neutrals/Apocalypse/SoulCollector', children: [
                { text: 'Death', link: '/zh/options/Neutrals/Apocalypse/Death' },
              ]
            },
          ],
          '/zh/options/Neutrals/Benign': [
            { text: 'Back to Neutrals', link: '/zh/options/Settings/Neutrals' },
            { text: 'Amnesiac', link: '/zh/options/Neutrals/Benign/Amnesiac' },
            { text: 'Follower', link: '/zh/options/Neutrals/Benign/Follower' },
            { text: 'Hater', link: '/zh/options/Neutrals/Benign/Hater' },
            { text: 'Lawyer', link: '/zh/options/Neutrals/Benign/Lawyer' },
            { text: 'Maverick', link: '/zh/options/Neutrals/Benign/Maverick' },
            { text: 'Opportunist', link: '/zh/options/Neutrals/Benign/Opportunist' },
            { text: 'Pixie', link: '/zh/options/Neutrals/Benign/Pixie' },
            { text: 'Pursuer', link: '/zh/options/Neutrals/Benign/Pursuer' },
            {
              text: 'Romantic', link: '/zh/options/Neutrals/Benign/Romantic', children: [
                { text: 'Vengeful Romantic', link: '/zh/options/Neutrals/Benign/RomanticVengeful' },
                { text: 'Ruthless Romantic', link: '/zh/options/Neutrals/Benign/RomanticRuthless' },
              ]
            },
            { text: 'Shaman', link: '/zh/options/Neutrals/Benign/Shaman' },
            { text: 'Schrodingers Cat', link: '/zh/options/Neutrals/Benign/SchrodingersCat' },
            { text: 'Taskinator', link: '/zh/options/Neutrals/Benign/Taskinator' },
          ],
          '/zh/options/Neutrals/Chaos': [
            { text: 'Back to Neutrals', link: '/zh/options/Settings/Neutrals' },
            { text: 'Collector', link: '/zh/options/Neutrals/Chaos/Collector' },
            { text: 'Cultist', link: '/zh/options/Neutrals/Chaos/Cultist' },
            { text: 'God', link: '/zh/options/Neutrals/Chaos/God' },
            { text: 'Pirate', link: '/zh/options/Neutrals/Chaos/Pirate' },
            { text: 'Provocateur', link: '/zh/options/Neutrals/Chaos/Provocateur' },
            { text: 'Revolutionist', link: '/zh/options/Neutrals/Chaos/Revolutionist' },
            { text: 'Solsticer', link: '/zh/options/Neutrals/Chaos/Solsticer' },
            { text: 'Specter', link: '/zh/options/Neutrals/Chaos/Specter' },
            { text: 'Terrorist', link: '/zh/options/Neutrals/Chaos/Terrorist' },
            { text: 'Troller', link: '/zh/options/Neutrals/Chaos/Troller' },
            { text: 'Vector', link: '/zh/options/Neutrals/Chaos/Vector' },
            { text: 'Vulture', link: '/zh/options/Neutrals/Chaos/Vulture' },
            { text: 'Workaholic', link: '/zh/options/Neutrals/Chaos/Workaholic' },
          ],
          '/zh/options/Neutrals/Evil/': [
            { text: 'Back to Neutrals', link: '/zh/options/Settings/Neutrals' },
            { text: 'Cursed Soul', link: '/zh/options/Neutrals/Evil/CursedSoul' },
            { text: 'Doomsayer', link: '/zh/options/Neutrals/Evil/Doomsayer' },
            { text: 'Executioner', link: '/zh/options/Neutrals/Evil/Executioner' },
            { text: 'Innocent', link: '/zh/options/Neutrals/Evil/Innocent' },
            {
              text: 'Jester', link: '/zh/options/Neutrals/Evil/Jester', children: [
                { text: 'Sunnyboy', link: '/zh/options/Neutrals/Evil/Sunnyboy' },
              ]
            },
            { text: 'Punching Bag', link: '/zh/options/Neutrals/Evil/PunchingBag' },
            { text: 'Seeker', link: '/zh/options/Neutrals/Evil/Seeker' },
          ],
          '/zh/options/Neutrals/Experimental/': [
            { text: 'Back to Neutrals', link: '/zh/options/Settings/Neutrals' },
            { text: 'Doppelganger', link: '/zh/options/Neutrals/Experimental/Doppelganger' },
            { text: 'Imitator', link: '/zh/options/Neutrals/Experimental/Imitator' },
            { text: 'Quizmaster', link: '/zh/options/Neutrals/Experimental/Quizmaster' },
          ],
          '/zh/options/Neutrals/Killing/': [
            { text: 'Back to Neutrals', link: '/zh/options/Settings/Neutrals' },
            { text: 'Agitator', link: '/zh/options/Neutrals/Killing/Agitator' },
            { text: 'Arsonist', link: '/zh/options/Neutrals/Killing/Arsonist' },
            { text: 'Bandit', link: '/zh/options/Neutrals/Killing/Bandit' },
            { text: 'Blood Knight', link: '/zh/options/Neutrals/Killing/BloodKnight' },
            { text: 'Demon', link: '/zh/options/Neutrals/Killing/Demon' },
            { text: 'Doppelganger', link: '/zh/options/Neutrals/Killing/Doppelganger' },
            { text: 'Glitch', link: '/zh/options/Neutrals/Killing/Glitch' },
            { text: 'Hex Master', link: '/zh/options/Neutrals/Killing/HexMaster' },
            { text: 'Huntsman', link: '/zh/options/Neutrals/Killing/Huntsman' },
            { text: 'Infectious', link: '/zh/options/Neutrals/Killing/Infectious' },
            { text: 'Jackal', link: '/zh/options/Neutrals/Killing/Jackal' },
            { text: 'Jinx', link: '/zh/options/Neutrals/Killing/Jinx' },
            { text: 'Juggernaut', link: '/zh/options/Neutrals/Killing/Juggernaut' },
            { text: 'Medusa', link: '/zh/options/Neutrals/Killing/Medusa' },
            { text: 'Necromancer', link: '/zh/options/Neutrals/Killing/Necromancer' },
            { text: 'Pelican', link: '/zh/options/Neutrals/Killing/Pelican' },
            { text: 'Pickpocket', link: '/zh/options/Neutrals/Killing/Pickpocket' },
            { text: 'Plague Scientist', link: '/zh/options/Neutrals/Killing/PlagueScientist' },
            { text: 'Poisoner', link: '/zh/options/Neutrals/Killing/Poisoner' },
            { text: 'Potion Master', link: '/zh/options/Neutrals/Killing/PotionMaster' },
            { text: 'Pyromaniac', link: '/zh/options/Neutrals/Killing/Pyromaniac' },
            { text: 'Serial Killer', link: '/zh/options/Neutrals/Killing/SerialKiller' },
            { text: 'Shroud', link: '/zh/options/Neutrals/Killing/Shroud' },
            { text: 'Spiritcaller', link: '/zh/options/Neutrals/Killing/Spiritcaller' },
            { text: 'Stalker', link: '/zh/options/Neutrals/Killing/Stalker' },
            { text: 'Traitor', link: '/zh/options/Neutrals/Killing/Traitor' },
            { text: 'Virus', link: '/zh/options/Neutrals/Killing/Virus' },
            { text: 'Werewolf', link: '/zh/options/Neutrals/Killing/Werewolf' },
            { text: 'Wraith', link: '/zh/options/Neutrals/Killing/Wraith' },
          ],
          '/zh/options/Settings/': [
            { text: 'Game Settings', link: '/zh/options/Settings/Game' },
            { text: 'System Settings', link: '/zh/options/Settings/System' },
            { text: 'Mod Settings', link: '/zh/options/Settings/Mod' },
            { text: 'Game Modifiers', link: '/zh/options/Settings/Modifiers' },
            { text: 'Impostors', link: '/zh/options/Settings/Impostors' },
            { text: 'Crewmates', link: '/zh/options/Settings/Crewmates' },
            { text: 'Neutrals', link: '/zh/options/Settings/Neutrals' },
            { text: 'Add-ons', link: '/zh/options/Settings/Addons' },
          ],
        }
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
