
$(document).ready(function () {	
	refreshTable();
	setInterval(blinkText, 1000);
	setInterval(refreshTable, 1000 * 60 * 1);
});

/*******************************************************************************
 * 
 * @returns {undefined}
 */
function refreshTable() {
	try {
		var vvofe_nodata	= '<?php echo _("vvofe_nodata"); ?>';
		var vvo_stopID		= "<?php echo getConfigValue('vvo_stopID'); ?>";
		var vvo_stopName	= "<?php echo getConfigValue('vvo_stopName'); ?>";
    var vvo_mot_defs	= $.parseJSON('<?php echo getConfigValue("vvo_mot_defs"); ?>');
		var vvo_mot				= $.parseJSON('<?php echo getConfigValue("vvo_mot"); ?>');
		var vvo_state			= $.parseJSON('<?php echo getConfigValue("vvo_state"); ?>');
	} catch (e) {
		$("#vvo_table tbody").html('');
		$("#vvo_table").append('<tr><td colspan="100%" style="text-align:left;"><?php echo _("vvofe_config_hint"); ?></td></tr>');
		return;
	}
	$('#vvo_subtitle').html("<?php echo _('vvofe_station'); ?>:&nbsp;" + vvo_stopName);

	$.ajax({
		method: "POST",
		url: "https://webapi.vvo-online.de/dm",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: JSON.stringify({
			stopid: vvo_stopID,
			mot: vvo_mot
		}),
	})
		.done(function (data, textStatus, jqXHR) {
			if (data.Departures !== undefined) {
				$("#vvo_table tbody").html('');
				data.Departures.forEach(
					function (departure, index, array) {
						$("#vvo_table").append('<tr id="' + departure.Id + '"></tr>');
						$("#vvo_table tr:last").append('<td>' + departure.LineName  + '</td>');
						$("#vvo_table tr:last").append('<td>' + departure.Direction + '</td>');

						var mScheduledTime = moment(departure.ScheduledTime);
						var mRealTime	= moment(departure.RealTime);
						var mDuration = moment.duration(mRealTime.diff(mScheduledTime));

						$("#vvo_table tr:last").append("<td>" + mScheduledTime.format('HH:mm') + "</td>");

						if (vvo_state) {
							if (departure.State == 'InTime') {
								var depState = '';
							} else if (departure.State == 'Delayed') {
								var depState = '<span class="blink">' + moment.utc(mDuration.as('milliseconds')).format('m') + 'min</span> <?php echo _("vvofe_delayed") ?>';
							} else {
								var depState = '';
							}
							$("#vvo_table tr:last").append('<td>' + depState + '</td>');
						}
					}
				);
			} else {
				if ($("#vvo_table tbody tr").length === 0) {
					$("#vvo_table").append('<tr><td colspan="100%" style="text-align:left;">' + vvofe_nodata + '</td></tr>');
				}
			}
		})
		.fail(function (data, textStatus, jqXHR) {
			//$('#fail').html(JSON.stringify(data));
		})
		.always(function (data, textStatus, jqXHR) {
			//$('#always').html(JSON.stringify(data));
		});
}

/*******************************************************************************
 * der Blinker für die Verspätungen
 */
function blinkText() {
	$('.blink').fadeOut(500);
	$('.blink').fadeIn(500);
}