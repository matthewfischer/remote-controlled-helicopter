walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

//	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea') {
//		return;
//	}

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
	var v = textNode.nodeValue;

	v = v.replace(/\bvia drone\b/gi, "via some guy flying a drone");
	v = v.replace(/\bwith a drone\b/gi, "with some guy flying a drone");
	v = v.replace(/\bby a drone\b/gi, "by some guy flying a drone");
	v = v.replace(/\bby drone\b/gi, "by some guy flying a drone");
	v = v.replace(/\bdrone\b/g, "remote control helicopter");
	v = v.replace(/\bDrone\b/g, "Remote control helicopter");
	v = v.replace(/\bdrones\b/g, "remote control helicopters");
	v = v.replace(/\bDrones\b/g, "Remote control helicopters");
    
	
	textNode.nodeValue = v;
}
