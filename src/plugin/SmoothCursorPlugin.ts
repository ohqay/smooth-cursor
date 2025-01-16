import { Plugin, MarkdownView } from "obsidian";
import { getCursorDomRect } from "../utils/cursorDomUtils";
import { applySmoothCursorStyles } from "../utils/applyStyles";

type Coordinates = { x: number; y: number; getScroll: () => number };
type MarkdownSubView = { sizerEl: HTMLElement };

export default class SmoothCursorPlugin extends Plugin {
	previousPos: Coordinates = { x: 0, y: 0, getScroll: () => 0 };
	cursorElement: HTMLSpanElement;
	// Use standard events that Document can handle
	cursorUpdateEvents: Array<keyof DocumentEventMap> = ["keyup", "mouseup", "touchend"];

	async updateCursor() {
		// Attempt to find the active Markdown parent container
		const parentElement = ((
			this.app.workspace.getActiveViewOfType(MarkdownView)?.currentMode
		) as unknown as MarkdownSubView)?.sizerEl?.parentElement;

		const selection = document.getSelection();
		if (!parentElement || !selection) {
			return;
		}

		// Attempt to get the DOMRect for the cursor
		const cursorDomRect = getCursorDomRect(selection);
		if (!cursorDomRect) {
			// If we cannot get the cursorRect, do nothing
			return;
		}

		// Current client position
		// Choose `.right` if focusOffset > 0, else `.left`.
		const currentClientX =
			selection.focusOffset > 0 ? cursorDomRect.right : cursorDomRect.left;
		const currentClientY = cursorDomRect.y;

		// Previous position
		const prevX = this.previousPos.x;
		const prevY = this.previousPos.y - this.previousPos.getScroll();

		// If the cursor hasn't moved, bail
		if (prevX === currentClientX && prevY === currentClientY) {
			return;
		}

		// Apply new styles
		applySmoothCursorStyles(this.cursorElement, this.previousPos, cursorDomRect);

		// Update last (previous) position
		this.previousPos.x = currentClientX;
		this.previousPos.getScroll = () => parentElement.scrollTop;
		this.previousPos.y = currentClientY + this.previousPos.getScroll();
	}

	async onload() {
		// Inject the cursor element at the body level
		this.cursorElement = document.body.createSpan({
			cls: "smooth-cursor",
		});

		// Register events to update cursor
		this.cursorUpdateEvents.forEach((ev) =>
			this.registerDomEvent(document, ev, this.updateCursor.bind(this))
		);
	}

	onunload() {
		// Remove the cursor element from DOM
		this.cursorElement?.detach();
	}
}