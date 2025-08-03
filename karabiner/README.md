# Installation

## 1. Install dependencies (once; idempotent)

```
yarn install
```

## 2. rebuild `karabiner.json` with `rule.ts`

```
yarn run build
```

If you want to watch the changes of `rule.ts` and rebuild `karabiner.json` automatically, you can use `nodemon`

```
yarn run watch
```