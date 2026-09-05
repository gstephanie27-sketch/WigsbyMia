# Wigs by Mia Kelly

This folder contains the editable website and publishes directly to
[wigsbymia.com](https://wigsbymia.com).

## Preview the website

Open Terminal in this folder and run:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Keep Terminal open while editing.

## Edit wigs

Wig names, prices, specifications, and image assignments are in:

```text
app/components/HomePage.tsx
```

Wig photos are in:

```text
public/images/products
```

Save changes in VS Code and review them locally before publishing.

## Publish

Run:

```bash
npm run publish
```

This checks the project, builds the finished site, and sends everything to
GitHub automatically. The live site normally updates within a few minutes.

You may add a descriptive publishing note if desired:

```bash
npm run publish -- "Correct Brooke photos"
```
