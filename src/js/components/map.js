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

	const chelyaBinksMark = new ymaps.Placemark([55.175051, 61.391001], {
		iconCaption: "ул. Братьев Кашириных, 32",
		balloonContentBody: "ул. Братьев Кашириных, 32",
	});

	const EkbMark = new ymaps.Placemark([56.81921890941135, 60.651566054080554], {
		iconCaption: "ул. Гагарина, 1а",
		balloonContentBody: "ул. Гагарина, 1а",
	});

	const StPetersburgMark = new ymaps.Placemark([59.92901056417907, 30.38784099999998], {
		iconCaption: "Синопская набережная, д. 22, 4-й этаж",
		balloonContentBody: "Синопская набережная, д. 22, 4-й этаж",
	});

	const MoscowMark = new ymaps.Placemark([55.451272, 37.749607], {
		iconCaption: "Сибирский Тракт, д.12 (бизнес-комплекс «Квартал»)",
		balloonContentBody: "Сибирский Тракт, д.12 (бизнес-комплекс «Квартал»)",
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
