start:
	deno run -A --watch main.ts

TypFiles := $(wildcard typ/*.typ)
HTMLFiles := $(TypFiles:typ/%.typ=%.html)
PDFFiles := $(TypFiles:typ/%.typ=pdf/%.pdf)

build-pages: $(HTMLFiles) $(PDFFiles)

%.html: typ/%.typ
	pandoc $< -f typst -t html -o $@ --self-contained --css=tufte.css

pdf/%.pdf: $(HTMLFiles)
	wkhtmltopdf $< $@

fmt:
	deno fmt
