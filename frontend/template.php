<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">

<h2 class="module__title">
	<?php echo _('vvo_title'); ?>
	<span style="font-size: 0.5em;" id="vvo_subtitle"></span>
</h2>

<?php 
	$vvo_state = filter_var(getConfigValue("vvo_state"), FILTER_VALIDATE_BOOLEAN); 
?>

<table id="vvo_table" width="100%">
	 <thead>
		 <tr>
			 <th><?php echo _('vvofe_line'); ?></th>
			 <th><?php echo _('vvofe_direction'); ?></th>
			 <th><?php echo _('vvofe_time'); ?></th>
			 <?php if($vvo_state) {;
				 echo '<th>'._('vvofe_state').'</th>';
			 } ?>
		 </tr>
	 </thead>
</table>