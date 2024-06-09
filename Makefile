LateXFiles := $(wildcard *.tex)
HTMLFiles := $(patsubst %.tex,%.html,$(LateXFiles))

.PHONY: help

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9\/_\.-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build-pages: $(HTMLFiles)

%.html: %.tex
	@echo "Building $<"
	sudo docker run -v "$(shell pwd)":/docdir -w /docdir \
  		--user "$(shell id -u):$(shell id -g)" \
		latexml/ar5ivist:2402.29 \
		--source=$< \
		--destination=out/$@


dev: ## Rebuild on changes
	deno run -A --watch main.ts &
	while true; do \
		make build-pages; \
		inotifywait -qre close_write typ; \
	done

start: ## Start the server
	deno run -A main.ts

fmt: ## Format the code
	deno fmt
