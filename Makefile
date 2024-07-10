FILES = $(wildcard *.text)
HTML = $(FILES:.text=.html)

all: $(HTML)

%.html: %.text
	pandoc $< -s --highlight-style tango -o $@
