$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  options.url = 'http://localhost:3000/api/v1' + options.url;
})

$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};