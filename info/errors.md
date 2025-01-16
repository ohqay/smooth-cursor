Please figure out what's causing these errors and properly fix them!

- SmoothCursorPlugin.ts ~/WebstormProjects/smooth-cursor/src/plugin 4 problems
  - ESLint: 'Notice' is defined but never used. (@typescript-eslint/no-unused-vars) :1
  - TS2769: No overload matches this call.... :63
  - Unused import specifier Notice :1
  - TS6133: 'Notice' is declared but its value is never read. :1
- SmoothCursorPlugin.ts ~/WebstormProjects/smooth-cursor/src/plugin 1 problem
  - TS2769: No overload matches this call. Overload 1 of 3, '(el: Window, type: keyof WindowEventMap, callback: (this: HTMLElement, ev: Event | KeyboardEvent | UIEvent | MouseEvent | TouchEvent | ... 22 more ... | StorageEvent) => any, options?: boolean | ... 1 more ... I undefined): void', gave the following error. Argument of type 'string' is not assignable to parameter of type 'keyof WindowEventMap'. Overload 2 of 3, '(el: Document, type: keyof DocumentEventMap, callback: (this: HTMLElement, ev: Event | KeyboardEvent | UIEvent I MouseEvent | ... 14 more ... | ClipboardEvent) => any, options?: boolean | ... 1 more ... | undefined): void', gave the following error. Argument of type 'Window & typeof globalThis' is not assignable to parameter of type 'Document'. Type 'Window & typeof globalThis' is missing the following properties from type 'Document': alinkColor, all, anchors, applets, and 163 Overload 3 of 3, '(el: HTMLElement, type: keyof HTMLElementEventMap, callback: (this: HTMLElement, ev: Event | KeyboardEvent | UIEvent I MouseEvent | ... 14 more ... | ClipboardEvent) => any, options?: boolean | ... 1 more ... I undefined): void', gave the following error. Argument of type 'Window & typeof globalThis' is not assignable to parameter of type 'HTMLElement'. Type 'Window & typeof globalThis' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 220 more.
- styles.css ~/WebstormProjects/smooth-cursor/src 8 problems
  - Cannot resolve '--cursor-x2' custom property :8
  - Cannot resolve '--cursor-y2' custom property :8
  - Cannot resolve '--cursor-drag-width' custom property :17
  - Cannot resolve '--cursor-drag-angle' custom property :20
  - Cannot resolve '--cursor-x1' custom property :29
  - Cannot resolve '--cursor-y1' custom property :29
  - Cannot resolve '--cursor-x2' custom property :39
  - Cannot resolve '--cursor-y2' custom property :39
- index.ts ~/WebstormProjects/smooth-cursor/src 1 problem
  - Unused default export :3
