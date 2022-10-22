function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, function(l) {
    return l.toUpperCase();
  });
}

titleCase("I'm a little tea pot");