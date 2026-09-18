// require('dotenv').config()
export default async function (eleventyConfig) {
    // setup server config & browersync
    eleventyConfig.addPassthroughCopy("src/assets")
    eleventyConfig.addWatchTarget("src/pages");
    eleventyConfig.setBrowserSyncConfig({ notify: true });
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        }
    }
};