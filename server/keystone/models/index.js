/**
 * Require all files in current folder.
 */
require("fs").readdirSync(__dirname).forEach(file => {
  require("./" + file);
});
