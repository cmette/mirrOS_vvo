<?php 
	# MOTs = mean of transportation, können hier definiert oder ergänzt werden
	# die vordefinierten MOTs entstammen der API-Doc unter
	# Quelle: https://github.com/kiliankoe/vvo/blob/master/documentation/webapi.md
		
	if(is_null(getConfigValue('vvo_mot_defs'))) {
		$vvo_mot_defs = ["vvo_tram" => "Tram", "vvo_citybus" => "CityBus", "vvo_intercitybus" => "IntercityBus", "vvo_suburbanrailway" => "SuburbanRailway", "vvo_train" => "Train", "vvo_cableway" => "Cableway", "vvo_ferry" => "Ferry", "vvo_hailedsharedtaxi" => "HailedSharedTaxi"];
		setConfigValue('vvo_mot_defs', json_encode($vvo_mot_defs));
	} else {
		$vvo_mot_defs = json_decode(getConfigValue('vvo_mot_defs'),JSON_OBJECT_AS_ARRAY);
	}
	
	$vvo_stopName	= getConfigValue('vvo_stopName');
	$vvo_mot			= json_decode(getConfigValue('vvo_mot'),JSON_OBJECT_AS_ARRAY);
	$vvo_state		= boolval(getConfigValue('vvo_state'));
	
?>

<div class="ui-widget">
	<div>
		<h6>
			<?php echo _('vvo_stopName'); ?>
			<span style="float:right;">
				<span id="result_count"></span>
				<span id="result_hit"><?php echo _('vvo_hit'); ?></span>
			</span>
		</h6>
		<input type="text" id="vvo_stopName" value="<?php echo $vvo_stopName; ?>"/>
	</div>
	
	<div id="mot" class="framed">
		<h6><?php echo _('vvo_mot'); ?></h6>
		<?php foreach ($vvo_mot_defs as $key => $value) { ?>
		<div class="w50">
			<input type="checkbox" id="<?php echo $key; ?>" <?php if(in_array($value,$vvo_mot)) { echo 'checked="checked"'; }  ?> />
			<label for="<?php echo $key; ?>"><?php echo _($key); ?></label>
		</div>
		<?php } ?>
		<div style="clear:both;"></div>
	</div>
	
	<div class="framed">
		<h6><?php echo _('vvo_options'); ?></h6>
		<div class="">
			<input type="checkbox" id="vvo_state" <?php if($vvo_state) { echo 'checked="checked"'; }  ?> />
			<label for="vvo_state"><?php echo _('vvo_state'); ?></label>
		</div>
		
		<div style="clear:both;"></div>
	</div>
	
	<div id="vvo_message"></div> 
</div>

<div class="block__add" id="vvo__edit">
	<button class="vvo__edit--button" href="#">
		<span><?php echo _('save'); ?></span>
	</button>
</div>
