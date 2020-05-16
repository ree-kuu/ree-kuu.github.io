$(function() {

	// выключить Button если хоть один Textarea пустой

	$('input[type=button]').attr('disabled', true);
	
	$('input[type="text"],textarea').on('keyup', function () {
		var head_value = $('textarea#add-task-head').val();
		var desc_value = $('textarea#add-task-desc').val();
		if (head_value != '' && desc_value != '') {
			$('input[type=button]').attr('disabled', false);
			$('input[type=button]').css('background-color', '#2174fd');
		} else {
			$('input[type=button]').attr('disabled', true);
		}
	});

	// добавить новую задачу

	$('input[type=button]').click(function() {
		var l1 = '<div class="todo-task">';
		var l2 = '<div class="task-header">';
		var l3 = $('textarea#add-task-head').val();
		var l4 = '</div>';
		var l5 = '<div class="task-delete"></div>';
		var l6 = '<div class="task-collapse"></div>';
		var l7 = '<div class="task-description">';
		var l8 = $('textarea#add-task-desc').val();
		var l9 = '</div></div>';
		$('#task-list').append(l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9);
	});

	// свернуть описание задачи

	$('#task-list').on('click', '.task-collapse', function() {
		$($(this).next()).toggle();
		});

	// удалить задачу

	$('#task-list').on('click', '.task-delete', function() {
		$($(this).parent()).remove();
		});

	// $('#staticParent').on('click', '.dynamicElement', function() {
	//     // Do something on an existent or future .dynamicElement

});