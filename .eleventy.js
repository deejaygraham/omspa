export default function(config) {
	config.addPassthroughCopy({ "./src/content/css/": "/css" });
	config.addPassthroughCopy({ "./src/content/img/": "/img" });
	
	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src/content',
			includes: "../_includes",
      		layouts: "../_includes/layouts",
			output: '_site',
		},
	}
}
