FILES = $(wildcard *.text)
HTML = $(FILES:.text=.html)
MEDIA = $(wildcard media/*.jpg)
MEDIA_TXT = $(MEDIA:.jpg=.text)

media/%.text: media/%.jpg
	echo "Processing $<"; \
	exiftool -gpslatitude -gpslongitude -n -T -d "%+.6f" $< | awk '{print $$1 ", " $$2}' > $@; \

all: $(HTML) $(MEDIA_TXT)

%.html: %.text
	pandoc $< -s --highlight-style tango --css=style.css -o $@
