$('#result_hit').hide();
/*
 *
 */
$(function () {
  $("#vvo_stopName").autocomplete({
    source: function (request, response) {
      $.ajax({
        method: "POST",
        url: "https://webapi.vvo-online.de/tr/pointfinder",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
          limit: 20,
          query: request.term,
          stopsOnly: true,
        })
      })
        .done(function (data, textStatus, jqXHR) {
          if (data.PointStatus === 'List') {
            $('#result_hit').show();
            $('#result_count').html(data.Points.length);
            var list = {};
            for (var i = 0; i < data.Points.length; i++) {
              var point = data.Points[i];
              var arrPointItems = point.split('|');

              if ($.isNumeric(arrPointItems[0]) === true) {
                var objPoint = new Object();
                objPoint.id = arrPointItems[0];
                objPoint.label = arrPointItems[3] + (arrPointItems[2].length !== 0 ? ', ' + arrPointItems[2] : '');
                list[i] = objPoint;
              }
            }
            response(list);
          } else {
            // PointStatus NotIdentified
          }
        }) // end done
        .fail(function (data, textStatus, jqXHR) {
          $('#vvo_message').html('Es ist ein Fehler aufgetreten');
        })
        .always(function (data, textStatus, jqXHR) {
        });
    },
    minLength: 3,
    select: function (event, ui) {
      $.post('setConfigValueAjax.php', {'key': 'vvo_stopID', 'value': ui.item.id});
      $.post('setConfigValueAjax.php', {'key': 'vvo_stopName', 'value': ui.item.value})
        .done(function () {
          $('#ok').show(30, function () {
            $(this).hide('slow');
          });
        });
    }
  });
});

/*******************************************************************************
 * wird aufgerufen, wenn man den Save-Button klickt
 */
$('#vvo__edit').click(function () {
  SetConfigValue('vvo_stopName');
  $.post('setConfigValueAjax.php', {key: 'vvo_mot', value: JSON.stringify(GetCheckBoxes())});
  SetConfigValue('vvo_state');

  $('#ok').show(30, function () {
    $(this).hide('slow');
  });
});

/*
 *
 * @returns {Array}
 */
function GetCheckBoxes() {
  var vvo_mot_defs = $.parseJSON('<?php echo getConfigValue("vvo_mot_defs"); ?>');
  return arr = $.map($("input[id^='vvo_']:checkbox:checked"), function (e, i) {
    return vvo_mot_defs[e.id];
  });
}

/*
 *
 */
function SetConfigValue(strKey) {
  var iType = $('#' + strKey).attr('type');
  var postValue = '';

  switch (iType) {
    case 'checkbox':
      postValue = $('#' + strKey).is(':checked');
      break;
    default:
      postValue = $('#' + strKey).val();
  }
  $.post('setConfigValueAjax.php', {key: strKey, value: postValue});
}

/*******************************************************************************
 *	erzeugt den wackelden Stift, wenn das Modul noch nicht konfiguriert wurde
 */
function animateInfoPencil() {
  var vvo_stopName = '<?php echo getConfigValue("vvo_stopName"); ?>';
  if (vvo_stopName.length < 1) {
    $('.module__edit[data-open="gr-modal-vvo"]').animateRotate(0, 20, 100, 'linear',
      function () {
        $('.module__edit[data-open="gr-modal-vvo"]').animateRotate(20, 0, 100, 'linear',
          function () {
            $('.module__edit[data-open="gr-modal-vvo"]').animateRotate(0, 20, 100, 'linear',
              function () {
                $('.module__edit[data-open="gr-modal-vvo"]').animateRotate(20, 0, 100, 'linear');
              }
            );
          }
        );
      }
    );
  }
}

setInterval(function () {
  animateInfoPencil();
}, 1500);
