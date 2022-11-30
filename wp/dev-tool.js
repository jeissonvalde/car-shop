module.exports = function (mode) {


  if (mode === 'development') {
    return 'source-map';
  }

  return 'inline-source-map';
};