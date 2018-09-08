var str = ''
Array.from(document.getElementsByTagName('tbody')[1].getElementsByTagName('tr')).forEach(function(i) {
			str += i.getElementsByClassName('left')[0].innerText
			tableText = i.getElementsByClassName('center')
			for (i in tableText)
				if (tableText[i].innerText)
					if (tableText[i].innerText.includes('/') && tableText[i].innerText != "N/A")
						str += ",="+tableText[i].innerText
			str += '\n'
		})
if (confirm("Click OK to Copy to Clipboard\nClick Cancel To Download")) {
	var copy = document.createElement("textarea")
	document.querySelector("body").appendChild(copy)
	copy.value = str.replace(new RegExp(',', 'g'), '\t')
	copy.select()
	document.execCommand("Copy");
} else {
	var link = document.createElement('a');
	link.setAttribute('href', encodeURI('data:text/csv;charset=utf-8,' + str));
	link.setAttribute('download', 'export.csv');
	link.click();
}
