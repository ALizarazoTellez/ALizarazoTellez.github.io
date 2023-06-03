
SHELL := fish

stylelint := npx stylelint

all: lint format

lint: lint-css

lint-css:
	@$(stylelint) "**/*.css" --fix

format: format-html format-css

format-css:
	@find . -type f -name "*.css" -exec css-beautify -q -r -s 2 {} \;

format-html:
	@find . -type f -name "*.html" -exec html-beautify -q -r -s 2 {} \;
