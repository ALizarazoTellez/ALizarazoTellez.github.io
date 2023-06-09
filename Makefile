
SHELL := fish

stylelint := npx stylelint
eslint := npx eslint

all: lint format


lint: lint-css lint-js

lint-css:
	@$(stylelint) "**/*.css" --fix
lint-js:
	@$(eslint) "js/*.js" --fix


format: format-html format-css format-js

format-css:
	@find css -type f -name "*.css" -exec css-beautify -q -r -s 3 {} \;

format-html:
	@find . -type f -name "*.html" -exec html-beautify -q -r -s 3 {} \;

format-js:
	@find js -type f -name "*.js" -exec js-beautify -q -r -s 3 {} \;
