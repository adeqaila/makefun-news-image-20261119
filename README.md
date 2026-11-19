[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![Rank](https://make.fun/badge/news-image-20261119/adeqaila/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![Reward](https://make.fun/badge/news-image-20261119/adeqaila/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

# The World in One Day — Thursday, 19 November 2026

Entry for the make.fun bounty
[news-image-20261119](https://make.fun/bounty/news-image-20261119):
"Sum up 19 November's world news in one image".

A 1024×1024 newspaper front page — masthead dated
**THURSDAY, 19 NOVEMBER 2026**, 36 numbered stories across 6 continents
in one day: 3 heroes, 9 panels, a region bar, a "DAY IN NUMBERS" stat
strip, a world map with numbered pins, a numbered ALSO list, a DATE CHECK
box, and a BY THE CLOCK strip. All text and all pictures are drawn by
the build script with PIL (flat vector-style "original drawings"), so no
garbled text can appear in the image.

## The day's news (numbered 1–36)

**Heroes:**
1. **Trump, Xi and Putin meet in Shenzhen.** First three-way meeting of
   the three nuclear powers, on the sidelines of APEC.
2. **GTA VI goes on sale around the world.** Rockstar's game unlocks at
   midnight in each market, New Zealand first. Metacritic 99.
3. **World court rules on Myanmar genocide case.** The ICJ reads its
   judgment in The Gambia v. Myanmar at 10:00 in The Hague.

**Panels 4–12:** Voyager 1 is one light-day from Earth (NASA confirms
today); Cyclone Akvan bears down on eastern India (seven Andhra
districts on red alert); three tankers ablaze east of Hormuz; Jeffries
set to be first Black House Speaker; Islam set to be largest faith by
2035 (Pew); Australia sanctions Israeli settlers; LPG tanker sunk off
Bulgaria; Modi meets the Prince and Princess of Wales; US senators warn
AI cyber threats outpace defences.

**Also on Thursday 19 November (13–36):** APEC leaders meet on day two
in Shenzhen; Xi and Trump hold a bilateral on AI chips; EU proposes a
€45bn loan for Ukraine in 2027; Russia fires 141 drones on Ukraine;
UK inflation climbs to 3.6%; Bangladesh protests shut 30 garment
factories; Ethiopia and Eritrea mass troops on the border; Board of
Peace warns the Gaza truce may fail; Peltola wins the Alaska Senate
seat 56–44; Ted Lieu elected House Democratic Caucus chair; Walmart
reports Q3 results; Nvidia stops H200 chip sales to China; Fed minutes
point to more rate hikes; oil falls (Brent $92.61); Somalia accuses UAE
of secret bases; Iraq jails six Frenchmen for ISIL ties; India and
Japan review defence ties in Tokyo; US proposes tougher rules for green
cards; NSA classified network suffers outage; Deutsche Bank's $582m in
Epstein deals; atmospheric river brings floods to California; AUS v ENG,
3rd ODI: Ben Duckett scores 133; Minister Mélenchon could win French
presidency; cocaine, millions of pills seized in Libya.

Follow-ups first reported on 16–18 Nov are labelled with their date
wherever they appear, and the DATE CHECK box on the page names what was
deliberately left out: Anthropic's IPO (18 Nov), the Qeshm strike
(17 Nov), the Quad summit in Manila (17 Nov), Nvidia's earnings
(17 Nov). Jeffries' nomination vote (251–11) and the Modi–Wales
meeting took place on 18 Nov in Washington and New Delhi; GTA VI first
unlocked in New Zealand at 11:00 UTC 18 Nov, but its release day is
19 Nov in every market.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — byte-identical on every run
```

`main.ts` (Node 22, standard library only, no network) copies
`entry.png` to the output directory after checking the 1 MiB gate.
It clears only the *contents* of the output directory, never the
directory itself, so it is safe under the grader's mounted `/output`.

## Files

- `entry.png` — the front page (JPEG, 1024×1024, 403.604 bytes)
- `main.ts` — the entry program
- `LICENSE` — MIT

Build details, sources, and the variant tournaments are in
`../BUILD-REPORT.md` and `../GRIND-REPORT.md`.
