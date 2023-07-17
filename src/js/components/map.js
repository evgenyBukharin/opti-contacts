ymaps.ready(init);
function init() {
	if (document.getElementById("contacts-map") !== null) {
		contactsMap = new ymaps.Map("contacts-map", {
			center: [55.175051, 61.391001],
			zoom: 17,
		});
	} else {
		return;
	}

	const chelyaBinksMark = new ymaps.GeoObject({
		geometry: {
			type: "Point",
			coordinates: [55.175051, 61.391001],
		},
	});

	const EkbMark = new ymaps.GeoObject({
		geometry: {
			type: "Point",
			coordinates: [56.81921890941135, 60.651566054080554],
		},
	});

	const StPetersburgMark = new ymaps.GeoObject({
		geometry: {
			type: "Point",
			coordinates: [59.92901056417907, 30.38784099999998],
		},
	});

	const MoscowMark = new ymaps.GeoObject({
		geometry: {
			type: "Point",
			coordinates: [55.451272, 37.749607],
		},
	});

	const marks = [chelyaBinksMark, EkbMark, StPetersburgMark, MoscowMark];
	const buttons = document.querySelectorAll(".contacts__city");
	let currentBtn = document.querySelector(".contacts__city-active");
	buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			contactsMap.setCenter(marks[btn.getAttribute("data-mark-id")].geometry.getCoordinates());
			currentBtn.classList.toggle("contacts__city-active");
			btn.classList.toggle("contacts__city-active");
			currentBtn = btn;
		});
	});

	contactsMap.geoObjects.add(chelyaBinksMark).add(EkbMark).add(StPetersburgMark).add(MoscowMark);
}
