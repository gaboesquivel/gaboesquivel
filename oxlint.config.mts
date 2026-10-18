import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";

const migrationRules = {
  curly: "off",
  "func-style": "off",
  "no-await-in-loop": "off",
  "no-plusplus": "off",
  "no-shadow": "off",
  "no-unused-vars": "off",
  "no-use-before-define": "off",
  "prefer-destructuring": "off",
  "prefer-named-capture-group": "off",
  "require-unicode-regexp": "off",
  "sort-keys": "off",
  "promise/prefer-await-to-callbacks": "off",
  "promise/prefer-await-to-then": "off",
  "unicorn/import-style": "off",
  "unicorn/no-array-sort": "off",
  "unicorn/prefer-number-coercion": "off",
} as const;

export default defineConfig({
  env: core.env,
  extends: [core],
  ignorePatterns: [...core.ignorePatterns, "contracts/**"],
  // Progressive migration: remove a rule as its problems are fixed.
  rules: migrationRules,
});
