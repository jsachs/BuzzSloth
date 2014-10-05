
var dictionary = [
    "cascade",
    "agile",
    "sexy",
    "robust",
    "deep dive",
    "drill down",
    "pivot",
    "platform",
    "UX",
    "syngergy",
    "disruptive",
    "lean",
    "bring to the table",
    "best of breed",
    "holistic",
    "leverage",
    "paradigm shift",
    "outside the box",
    "streamline",
    "engagement",
    "bandwidth",
    "best practices",
    "ping",
    "offline",
    "circle back",
    "touch base",
    "reach out",
    "mission critical",
    "deck",
    "KPI",
    "SME",
    "back burner",
    "bootstrap",
    "benchmark",
    "big data",
    "convergence",
    "thought leader",
    "low-hanging fruit",
    "silos"
  ];

walk(document.body);

function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{


  for (var i = 0, len = dictionary.length; i < len; i++) {

    var word = dictionary[i].replace(/([[^$.|?*+(){}])/g, '\\$1'); //Create RegExp

    var v = textNode.nodeValue;

    v = v.replace(word, "sloth");
    v = v.replace(capitaliseFirstLetter(word), "Sloth");

    textNode.nodeValue = v;
  }
}

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
