![MuonW Mascara](https://raw.githubusercontent.com/muonw/muonw-mascara/v0.1.11/src/data/mascara_200x142.png)

# Mascara

Mascara adds style to MuonW projects using SASS and Svelte.

## Installation

❶ Set the correct node package registry for @muonw packages:

```sh
npm config set @muonw:registry https://node.pkgreg.com/ -L project
```

❷ Install `mascara` and its peer dependencies, `sass` and `svelte`:

```sh
npm i -D @muonw/mascara --save-exact
npm i -D sass@1.62.1
npm i -D svelte@3.59.1
```

❸ In order for icons to appear correctly, the files inside Mascara's `icons` directory need to become accessible from the browser. You can either manually copy them to your assets folder and adjust the font link(s) in the `.css` file(s), or run the following commands to automate this process:

```sh
# Go to the root of your project where node_modules directory exists
cd MyProject
# Set the location of the assets on the filesystem.
# The default value is based on SvelteKit apps. Adjust as needed.
MY_ASSETS_PATH="./static"
# Set the subdirectory where assets can be accessed by web browsers.
# The default value is based on SvelteKit apps.
# Adjust as needed (e.g. "assets" for "https://domain/assets").
MY_ASSETS_PUBLIC_DIR=""

#################################################
# You do NOT need to change the following lines #
#################################################

# Setting the variables
MASCONS_PATH="${MY_ASSETS_PATH}/@muonw/mascara/"
MASCONS_PUBLIC_DIR="${MY_ASSETS_PUBLIC_DIR}/@muonw/mascara/"

# Copying the files
mkdir -p "${MASCONS_PATH}" && cp -r node_modules/@muonw/mascara/icons/ "${MASCONS_PATH}"

# Correcting the font link(s)
find "${MASCONS_PATH}icons/" -type f -name '*.css' -exec sed -i -e "s|\"/@muonw/mascara/icons/|\"${MASCONS_PUBLIC_DIR}icons/|g" {} \;

# Printing the css import path
echo "You can use the statement below to import the css file:"
echo ""
echo "@import '${MASCONS_PATH}icons/mascons';"
echo ""
```

## Usage

In [SvelteKit](https://github.com/sveltejs/kit) projects create a global scss file (e.g. `src/styles/global.scss`) and import it in `src/routes/+layout.svelte`:

```html
<script>
import '../styles/global.scss';
</script>
```

Now, add the following lines in yor global scss file (note that depending on how you completed the installation, you may need to adjust the path to the icons directory):

```scss
@use '@muonw/mascara/styles/index.scss';
@import 'static/@muonw/mascara/icons/mascons';
```

<hr>

License:

https://dev.muonw.com/license/muonw-0/