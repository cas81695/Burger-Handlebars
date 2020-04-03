$(function() {
	$(".change-devoured").on("click", function(event) {
		var id = $(this).data("id");
		var newDevoured = $(this).data("newdevoured");

		var newDevouredState = {
			devoured: newDevoured
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevouredState
		}).then(
			function() {
				console.log("changed devoured to", newDevoured);
				location.reload();
			}
		);
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#br").val().trim(),
			devoured: $("[name=devoured]:checked").val()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});


	$(".delete-burger").on("click", function(event) {
		var id = $(this).data("id");
		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
		}).then(
			function() {
				console.log("deleted burger", id);
				location.reload();
			}
		);
	});
});