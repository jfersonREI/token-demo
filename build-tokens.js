import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  source: ["tokens/**/*.json"],
  log: "verbose",
  platforms: {
    css: {
      transformGroup: "css",
      prefix: "rds",
      buildPath: "src/styles/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      prefix: "rds",
      buildPath: "src/styles/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: "js",
      prefix: "rds",
      buildPath: "src/styles/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});

try {
  await sd.buildAllPlatforms();
  console.log("Style Dictionary build completed successfully.");
} catch (error) {
  console.error("Style Dictionary build failed:", error);
  process.exit(1);
}
