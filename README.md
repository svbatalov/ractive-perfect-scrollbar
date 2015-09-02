# ractive-perfect-scrollbar
A wrapper around [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar).

### Motivation
* No need to include CSS from `node_modules`, it is injected automatically
  (which may cause problems if you need significantly changed version of it, but handy otherwise).
* A `MutationObserver`, if supported, is used to update a scrollbar when content changes.
* Scrollbar can be updated manually when necessary.
* Can be used as a CommonJS/RequireJS module or in a `<script>` tag (assumes existing global `Ractive` object).

### Usage
1. `npm install ractive-perfect-scrollbar`
2. In app code:
  ```
	Ractive.components.Scroll = require('ractive-perfect-scrollbar');
  ```
  or put appropriate `<script src='.../dist/index.js'>` tag in your html and replace
	`require()` by `Ractive.components.Scroll = ractivePerfectScrollbar` in your code.
3. Use `<Scroll>` directive in your templates:
```
<style type="text/css">
	.scroll-wrapper {
		position: relative;
		overflow: hidden;
		height: 300px;
	}
</style>

<Scroll class="scroll-wrapper" opts="..." update="{{update_variable}}">
	... SCROLLABLE CONTENT HERE ...
</Scroll>
```

The `opts` attribute allows to configure the perfect-scrollbar instance
(see [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar)).
For example:
```
// in code:
app.set('scrollopts', {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
});

<!-- in template -->
<Scroll opts="{{scrollopts}}">
	...
</Scroll>
```

Or you may pass an object directly within template:
```
<Scroll opts="{minScrollBarLength: 20}">
	...
</Scroll>
```

The `update` attribute may point to a variable, setting which to
`true` forces scrollbar update. The variable is set to `false` automatically afterwards.
You may just do `app.trigger('update_variable')` every time you want to update scrollbar.

### Example
A working example can be found in the `example` directory. Just open `index.html` in browser.

### License
MIT
