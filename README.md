# Fallout Map

This adds tracking of visited locations to the map provided by [Digital_Utopia](http://digital-utopia.org).

Currently supported maps:

- [Fallout 4](http://www.digital-utopia.org/fallout4/) (`fallout4.htm`)

## Caveats

This is just a quick hack, so there are some caveats:

- Marking a location will now show up immediately – the page has to be reloaded.
- The tracked locations are barely visible.

## Persistence

All tracked locations are stored in your browser, more precicely in [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage). This data might be removed when you clean your browser's history.

In order to migrate your progress to another machine or simply to back it up, see the commands below.

### Export

Open the developer console in your browser and issue the following command:

```javascript
localStorage.toSource().replace(/(^\(|\)$|")/g, '').replace(/'/g, '"')
```

Save the file, e.g., as `fallout4.json`. Note that if you copy the string from your browser's console, there are still some escaped quotes `\"` in the string. You might need to unescape them manually, e.g, by issuing (where `pbpaste` simply returns the contents of your clipboard (macOS)):

```sh
pbpaste | sed 's/\\\"/"/g' > fallout4.json
```

### Import

In Firefox you might need to allow pasting by entering `'allow pasting'` into the console.

Copy the content of the file `fallout4.json` and assign it to the variable `json`:

```javascript
var json = '…'
var locations = JSON.parse(json)
for (var property in locations) {
    if (locations.hasOwnProperty(property)) {
        localStorage.setItem(property, locations[property])
    }
}
```

Then reload the page in order to see the tracked locations.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/FroZnShiva/fomap/master/screenshot.jpg)
