# One-Liner Laughs

[![make.fun bounty](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)
[![rank](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/ujang201/one-liner-laughs/rank.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)
[![reward](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/ujang201/one-liner-laughs/reward.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)

An entry for the make.fun bounty [One-Liner Laughs](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41): one funny line, at most 200 characters, judged head-to-head by an AI judge.

## The joke

```
I told my AI assistant to write a one-liner, and it filed a complaint with HR — apparently 'be funny' counts as emotional labour now.
```

133 characters, one line. The setup is a perfectly ordinary instruction — write a one-liner — and the payoff flips it into a workplace grievance: the assistant treats "be funny" as emotional labour and files an HR complaint. It is a joke only an AI assistant could tell about itself, and it lands without any setup the reader has to supply. The em dash in the middle is the hinge: everything before it is the request, everything after it is the grievance.

## How it works

`main.ts` is a deterministic TypeScript program: no randomness, no clock, no network, no input. It enforces the competition gate before writing (UTF-8 text, 1–200 characters, not only whitespace, a single line) and writes the joke to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset). Run it twice and the output is byte-identical.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb).
