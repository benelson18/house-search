// Prettier config.

// Please note: sometimes a code editor or eslint restart is required for these
// to take effect. Prettier is included as part of the eslint config, meaning you
// should continue to use eslint and its VS Code plugin.

module.exports = {
  // Include parentheses around a sole arrow function parameter.
  // opts: <'always'|'avoid'>, ex: (x) => x, or x => x
  arrowParens: "always",

  // Print spaces between brackets in object literals.
  bracketSpacing: true,

  // end of line insertion:
  // "lf" – Line Feed only (\n), common on Linux and macOS as well as inside git repos
  // "crlf" - Carriage Return + Line Feed characters (\r\n), common on Windows
  // "cr" - Carriage Return character only (\r), used very rarely
  // "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)
  endOfLine: "lf",

  // Use single quotes instead of double quotes in JSX.
  jsxSingleQuote: false,

  // how many chars on a line before wrapping? (this is a guideline only)
  printWidth: 100,

  // Print semicolons at the ends of statements.
  semi: true,

  // Use single quotes instead of double quotes.
  singleQuote: false,

  // Specify the number of spaces per indentation-level.
  tabWidth: 2,

  // Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
  // opts: <es5|none|all>
  trailingComma: "es5",

  // Indent lines with tabs instead of spaces.
  useTabs: false,
};
