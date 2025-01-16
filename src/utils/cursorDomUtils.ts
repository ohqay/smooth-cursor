export function getCursorDomRect(selection: Selection): DOMRect | null {
	if (!selection.focusNode) {
		return null;
	}

	// Attempt to create a range for the cursor position
	const cursorRange = document.createRange();
	const offset = selection.focusOffset;

	// If offset is zero, check if we can at least set range to [0,1] safely
	try {
		if (offset === 0) {
			cursorRange.setStart(selection.focusNode, 0);
			cursorRange.setEnd(selection.focusNode, 1);
		} else {
			// offset might be larger than node length, so we wrap in a try
			cursorRange.setStart(selection.focusNode, offset - 1);
			cursorRange.setEnd(selection.focusNode, offset);
		}
	} catch (e) {
		// If we fail due to out-of-bound ranges or other issues, just return
		return null;
	}

	const cursorDOMRects = cursorRange.getClientRects();
	if (!cursorDOMRects.length) {
		return null;
	}

	// We pick the last rect to get the rightmost boundary in the text node
	return cursorDOMRects.item(cursorDOMRects.length - 1) ?? null;
}