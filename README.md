https://github.com/vitejs/vite/issues/3309

```node
yarn
yarn serve

# visit http://localhost:3000/

yarn link "vite" # with commit https://github.com/vitejs/vite/commit/05fd1e26be1c64c665b5c01161f2e789c1deb6aa
yarn serve

# visit http://localhost:3000/
# see error in browser console
```
