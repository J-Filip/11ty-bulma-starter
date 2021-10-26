
module.exports = function(eleventyConfig) {
    // assets we want to passthrough
    
eleventyConfig.addPassthroughCopy('./src/main.css');
eleventyConfig.addPassthroughCopy('./src/lib/main.js');
eleventyConfig.addPassthroughCopy('./src/assets');


    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };