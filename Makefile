start:
	deno run -A --watch main.ts

TypFiles := $(wildcard typ/*.typ)
HTMLFiles := $(TypFiles:typ/%.typ=%.html)
PDFFiles := $(TypFiles:typ/%.typ=pdf/%.pdf)

.PHONY: help

help: ## Show this help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9\/_\.-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build-pages: $(HTMLFiles) $(PDFFiles) ## Build the pages

%.html: typ/%.typ
	pandoc $< -f typst -t html -o $@ --self-contained --css=tufte.css \
		--metadata pagetitle="Tufte HTML" \
		-H ./include.html

pdf/%.pdf: $(HTMLFiles)
	wkhtmltopdf $< $@

dev: ## Rebuild on changes
	deno run -A --watch main.ts &
	while true; do \
		make build-pages; \
		inotifywait -qre close_write typ; \
	done

fmt: ## Format the code
	deno fmt
