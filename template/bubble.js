window.templates = window.templates || {};
window.templates.bubbles =  '<div class="left">' +
               '<div class="chart scatter-export"></div>' +
               '<input type=range min=0 max=1000 value=0 step=1 id="timer">' +
               '<button id="play">Play</button>' +
           '</div>'+
           '<div class="right">'+
               '<select name="bar-one-select" id="bar-one-select">'+
                   '<option value="x" selected>X Value</option>'+
                   '<option value="y">Y Value</option>'+
                   '<option value="z">Z Value</option>'+
               '</select>'+
               '<div class="chart bar-graph-x"></div>'+
               '<div class="chart bar-graph-y"></div>'+
           '</div>' ;