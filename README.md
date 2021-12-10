# Reproduction repo

For a bug with Next.js 12 and @graphql-tool/load-files v6.4.0+

## The bug

When `@graphql-tools/load-files` is set to version `6.3.2`, it works.

When `@graphql-tools/load-files` is set to version `6.4.0` or above, it fails.

## Usage

When changing branches don't forget to remove lock file, node_modules and cache.

```
rm -rf package-lock.json node_modules/ .next && npm i
```

```
npm i
npm run dev
```

JSON output of schema should be visible at http://localhost:3000/api/graphql
