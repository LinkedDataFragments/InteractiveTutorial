# Fetch a default representation of a Triple Pattern Fragment
curl 'http://fragments.dbpedia.org/2015/en'

# Fetch a Turtle representation of a Triple Pattern Fragment
curl -H 'Accept: text/turtle' 'http://fragments.dbpedia.org/2015/en'

# Fetch a TriG representation of a Triple Pattern Fragment
curl -H 'Accept: application/trig' 'http://fragments.dbpedia.org/2015/en'



# Some handy shortcuts
alias curtle='curl -H "Accept: text/turtle"'
alias curltrig='curl -H "Accept: application/trig"'
alias curltriples='curl -H "Accept: application/n-triples"'
alias curlquads='curl -H "Accept: application/n-quads"'
alias curlson='curl -H "Accept: application/json"'
alias curld='curl -H "Accept: application/ld+json"'

curtle   'http://fragments.dbpedia.org/2015/en'
curltrig 'http://fragments.dbpedia.org/2015/en'
