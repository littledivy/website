FILES = $(wildcard *.text)
HTML = $(FILES:.text=.html)
MEDIA = $(wildcard media/*.jpg)
MEDIA_TXT = $(MEDIA:.jpg=.text)

media/%.text: media/%.jpg
	echo "Processing $<"; \
	exiftool -gpslatitude -gpslongitude -n -T -d "%+.6f" $< | awk '{print $$1 ", " $$2}' > $@; \

all: $(HTML) $(MEDIA_TXT)

%.html: %.text style.css
	line=`grep -m 1 '<!--' $<`; \
        if [ -n "$$line" ]; then \
		args=`echo $$line | sed 's/<!--//g' | sed 's/-->//g'`; \
		pandoc $< -f markdown+autolink_bare_uris --lua-filter=diagram.lua -s --highlight-style tango $$args -o $@; \
		exit; \
	fi; \
	pandoc $< --toc -f markdown+autolink_bare_uris -s --highlight-style haddock --css=style.css --lua-filter=diagram.lua -o $@; \
