wget  \
  https://raw.githubusercontent.com/edwardtufte/tufte-css/gh-pages/tufte.css \
  -O tufte.og.css 
diff tufte.og.css tufte.css > tufte-diff.diff
rm tufte.og.css


