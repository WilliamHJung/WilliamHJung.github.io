
$(function(){
	$('.type-it').typeIt({
     speed: 100,
     autoStart: false
	})

.tiType('Technologist, ')
.tiPause(700)
.tiType('Musi')
.tiPause(700)
.tiDelete(4)
.tiType('Artist Edu')
.tiDelete(4)
.tiSettings({speed: 150})
.tiType(', Educator')
.tiPause(750)
.tiSettings({speed: 70})
.tiType('...');

})

/* Basic Example below  */
/**
$(function(){
$('.type-it').typeIt({
     strings: ['This is my string!']
	})
})
 */