# Export presentation to PDF
Set the following in `node_module/spectacle-renderer/lib/index.js`, line 70, to get it exported according to your best-fit screen resolution

```js
page.pdf({
  path: output,
  printBackground: true,
  landscape: false,  // false actually makes it landscape
  width: "1920px",   // screen width
  height: "1200px"   // screen height
})
```
https://github.com/FormidableLabs/spectacle-renderer/issues/8
https://github.com/FormidableLabs/spectacle-renderer/issues/16
