// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("footer", function(company, description) {
    return `<div class="footer">
      <div class="footer_img">${company}</div>
      <div class="footer_description">${description}</div>
    </div>`;
  });

};

