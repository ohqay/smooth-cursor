type Coordinates = { x: number; y: number; getScroll: () => number };

export function applySmoothCursorStyles(
	cursorElement: HTMLSpanElement,
	lastPos: Coordinates,
	currentRect: DOMRect
) {
	const { x: lastX, y: lastY } = lastPos;

	// Current location for the animation
	const currentClientX = currentRect.right; // or left, depending on focusOffset
	const currentClientY = currentRect.y;

	// Calculate distance and angle
	const dx = currentClientX - lastX;
	const dy = lastY - currentClientY;
	const cursorTailAngle = Math.atan2(dx, dy) + Math.PI / 2;
	const cursorDragDistance = Math.sqrt(dx * dx + dy * dy);

	// Update the dimension and position variables for the animation
	cursorElement.style.setProperty(
		"--cursor-drag-width",
		`${cursorDragDistance}px`
	);
	cursorElement.style.setProperty(
		"--cursor-drag-angle",
		`${cursorTailAngle}rad`
	);
	cursorElement.style.setProperty(
		"--cursor-height",
		`${currentRect.height}px`
	);
	cursorElement.style.setProperty("--cursor-x1", `${lastX}px`);
	cursorElement.style.setProperty("--cursor-y1", `${lastY}px`);
	cursorElement.style.setProperty("--cursor-x2", `${currentClientX}px`);
	cursorElement.style.setProperty("--cursor-y2", `${currentClientY}px`);

	// Force re-animation by resetting the animation style
	cursorElement.style.animation = "none";
	// Force reflow
	cursorElement.offsetHeight;
	cursorElement.style.animation = "";
}