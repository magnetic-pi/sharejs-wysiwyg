// Generated by CoffeeScript 1.6.3
(function() {
  var applyChange;

  applyChange = function(doc, oldval, newval) {
    var commonEnd, commonStart;
    if (oldval === newval) {
      console.log('1');
      return;
    }
    commonStart = 0;
    while (oldval.charAt(commonStart) === newval.charAt(commonStart)) {
      console.log('2'); 
      commonStart++;
    }
    commonEnd = 0;
    while (oldval.charAt(oldval.length - 1 - commonEnd) === newval.charAt(newval.length - 1 - commonEnd) && commonEnd + commonStart < oldval.length && commonEnd + commonStart < newval.length) {
      console.log('3'); 
      commonEnd++;
    }
    if (oldval.length !== commonStart + commonEnd) {
      console.log('4'); 
      doc.del(commonStart, oldval.length - commonStart - commonEnd);
    }
    if (newval.length !== commonStart + commonEnd) {
      console.log('5'); 
      return doc.insert(commonStart, newval.slice(commonStart, newval.length - commonEnd));
    }
  };

  window.sharejs.extendDoc('attach_textarea', function(elem) {
    var delete_listener, doc, event, genOp, insert_listener, prevvalue, replaceText, _i, _len, _ref,
      _this = this;
    doc = this;
    elem.value = this.getText();
    prevvalue = elem.value;
    replaceText = function(newText, transformCursor) {
      var newSelection, scrollTop;
      newSelection = [transformCursor(elem.selectionStart), transformCursor(elem.selectionEnd)];
      scrollTop = elem.scrollTop;
      elem.value = newText;
      //The line below adds the elem value to the div in real time
      $('.editor').html(elem.value); 
      if (elem.scrollTop !== scrollTop) {
        elem.scrollTop = scrollTop;
      }
      if (window.document.activeElement === elem) {
        return elem.selectionStart = newSelection[0], elem.selectionEnd = newSelection[1], newSelection;
      }
    };
    this.on('insert', insert_listener = function(pos, text) {
      var transformCursor;
      //$('.editor').val($('#purpose').val());
      transformCursor = function(cursor) {
        if (pos < cursor) {
        console.log('6'); 
          return cursor + text.length;
        } else {
          console.log('7'); 
          return cursor;
        }
      };
      prevvalue = elem.value.replace(/\r\n/g, '\n');
      return replaceText(prevvalue.slice(0, pos) + text + prevvalue.slice(pos), transformCursor);
    });
    this.on('delete', delete_listener = function(pos, text) {
      var transformCursor;
      transformCursor = function(cursor) {
        if (pos < cursor) {
        console.log('8'); 
          return cursor - Math.min(text.length, cursor - pos);
        } else {
        console.log('9'); 
          return cursor;
        }
      };
      prevvalue = elem.value.replace(/\r\n/g, '\n');
      console.log('10'); 
      return replaceText(prevvalue.slice(0, pos) + prevvalue.slice(pos + text.length), transformCursor);
    });
    genOp = function(event) {
      var onNextTick;
      onNextTick = function(fn) {
        console.log('11'); 
        return setTimeout(fn, 0);
      };
      return onNextTick(function() {
        if (elem.value !== prevvalue) {
          prevvalue = elem.value;
          console.log('12'); 
          return applyChange(doc, doc.getText(), elem.value.replace(/\r\n/g, '\n'));
        }
      });
    };

    _ref = ['load', 'select'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      event = _ref[_i];
      //console.log(event);
      if (elem.addEventListener) {
        elem.addEventListener(event, genOp, false);
        console.log('13'); 
        console.log(event);
      } else {
        elem.attachEvent('on' + event, genOp);
        console.log('14'); 
        console.log(event);
      }
    }
    
    //$(elem).on('load select', genOp);
 
    $('.editor').keyup(function () {
     	$(".editor-textarea").val($('.editor').html());
 	    $('.editor-textarea').trigger('keyup');
	    $(elem).on('keyup select', genOp);
        $(elem).on(event, genOp);
	    console.log('18'); 
        console.log(elem.value);
    });

    $(".btn-toolbar").click(function () {
        $(".editor-textarea").val($('.editor').html());
 	    $('.editor-textarea').trigger('keyup');
	    $(elem).on('keyup inserttext click select', genOp);
        $(elem).on(event, genOp);
	    console.log('18'); 
        console.log(elem.value);
    });

    return elem.detach_share = function() {
      var _j, _len1, _ref1, _results;
      _this.removeListener('insert', insert_listener);
      _this.removeListener('delete', delete_listener);
      _ref1 = ['textInput', 'keydown', 'keyup', 'select', 'cut', 'paste'];
      _results = [];
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        event = _ref1[_j];
        if (elem.removeEventListener) {
        console.log('15'); 
          _results.push(elem.removeEventListener(event, genOp, false));
        } else {
        console.log('16'); 
          _results.push(elem.detachEvent('on' + event, genOp));
        }
      }
      console.log('17'); 
      return _results;
    };
  });

}).call(this);