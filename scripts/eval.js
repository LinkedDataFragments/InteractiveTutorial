/*! @license ©2015 Ruben Verborgh - Multimedia Lab / iMinds / Ghent University */
(function ($) {
  var $code = $('#code'), $output = $('#output'), $execute = $('#execute'), $triggers = $('button.trigger');

  window.show = function () {
    var result = $('<p>').appendTo($output);
    for (var i = 0; i < arguments.length; i++)
      result.append(JSON.stringify(arguments[i], null, "  "), ' ');
  }

  window.onerror = function (error) {
    $output.append($('<p class="error">').text(error));
  }

  $execute.click(function () {
    $output.empty();
    $triggers.prop('disabled', true).off('click');

    var func, code = 'func=function(){' + $code.val() + '}';
    try { eval(code); }
    catch (error) { throw new Error('Syntax error'); }
    try { func(); }
    catch (error) { onerror(error.message); }
  });

  $triggers.each(function () {
    var $button = $(this), buttonId = $button.attr('id');
    window[buttonId] = function (callback) {
      $button.prop('disabled', false).click(callback);
    };
  });

  $code.on('change keyup', function () {
    location.replace(location.href.replace(/(?:#[^]*)?$/, '#' + encodeURIComponent($code.val())));
  });
  $code.val(decodeURIComponent(location.href.match(/(?:#([^]*))?$/)[1] || ''));
})(jQuery);
