document.addEventListener('DOMContentLoaded', function() {
	malleysCustomCart.datepicker.init();
	malleysCustomCart.textareaMaxLength();
});

const malleysCustomCart = {
	datepicker: {
		disabledDaysOfWeek: [0, 6],       // These are the days of the week that cannot be selected.
		today: moment(),                     // This is the current date.
		maxDays: 120,                        // This is the max number of days that are selectable on the calendar.
		cutoffHour: 0,                      // This is the hour when same-day delivery is no longer allowed.
        leadTimeInDays: 0,                   // This is the number of future days to push out the earliest shipping date.
        dateOverride: moment('12-23-2024'),  // This is a hardset date. If it has passed, the original calendar functionality will be in place.

        // Days must be formatted MM-DD-YYYY
        disabledDays: [
          "05-26-2025",
          "09-01-2025",
          "12-25-2025",
          "01-01-2026",
		  "03-23-2026",
		  "05-15-2026",
		  "05-22-2026",
		  "05-25-2026",
		  "06-05-2026",
		  "06-12-2026",
		  "06-26-2026",
          "07-02-2026",
          "07-03-2026",
          "07-10-2026",
          "07-17-2026",
          "07-24-2026",
          "07-31-2026",
          "08-07-2026",
          "08-14-2026",
          "08-21-2026",
          "08-28-2026",
          "09-04-2026",
		  "09-07-2026",
		  "09-11-2026",
		  "09-18-2026",
		  "09-25-2026",
		  "11-26-2026",
		  "12-25-2026",
		  "12-31-2026"

        ],

		init() {
			const elem = document.querySelector("#ship-date");
			const setValue = elem.dataset.value;
			const setDate = moment(setValue);

			// Set the firstDayAllowed based on the cutoffHour
			let firstDayAllowed = this.today.format("H") >= this.cutoffHour ? moment().add(this.leadTimeInDays + 1, "day") : moment().add(this.leadTimeInDays, "day");

			while (!this.isValidDate(firstDayAllowed)) {
				firstDayAllowed.add(1, "days");
			}

            if(firstDayAllowed.isBefore(this.dateOverride)) {
              firstDayAllowed = this.dateOverride;
            }

			let datepickerOptions = {
				pickLevel: 0,
				daysOfWeekDisabled: this.disabledDaysOfWeek,
				minDate: firstDayAllowed.toDate(),
				maxDate: this.today.add(this.maxDays, "day").toDate(),
				defaultViewDate: firstDayAllowed.toDate(),
				autohide: true,
				datesDisabled: this.disabledDays,
			};

			// console.log(datepickerOptions);

			let datapicker = new Datepicker(elem, datepickerOptions);

			if (setDate.isAfter(firstDayAllowed)) {
				datapicker.setDate(setDate.toDate());
			} else {
				datapicker.setDate(firstDayAllowed.toDate());
			}
		},

		isValidDate(date) {
            //console.log('Disabled day check: ' + this.disabledDays.indexOf(date.format("M-D-YYYY")));
            //console.log('Disabled day of the week check: ' + this.disabledDaysOfWeek.indexOf(date.day()));
          
			if (this.disabledDays.indexOf(date.format("MM-DD-YYYY")) >= 0) {
              //console.log(date.format("MM-DD-YYYY") + ' is in the list of disabled days');
              return false;
            }
          
			if (this.disabledDaysOfWeek.indexOf(date.day()) >= 0) {
              //console.log(date.day() + ' is in the list of disabled day of the week');
              return false;
            }
          
			return true;
		},
	},

	textareaMaxLength() {
		const giftNoteTextarea = document.getElementById("note");
		const maxLength = parseInt(giftNoteTextarea.getAttribute("maxlength"));

		const warningThreshold = Math.ceil(maxLength * 0.5);
		const errorThreshold = Math.ceil(maxLength * 0.9);

		let counterLabel = document.createElement("div");
		counterLabel.className = "character-counter";

		let charactersCurrentCount = document.createElement("span");
		charactersCurrentCount.className = "character-counter__remaining";
		charactersCurrentCount.textContent = 0;

		let charactersMaxLength = document.createElement("span");
		charactersMaxLength.className = "character-counter__maxlength";
		charactersMaxLength.textContent = maxLength;

		counterLabel.append(charactersCurrentCount, charactersMaxLength);

		giftNoteTextarea.after(counterLabel);

		giftNoteTextarea.addEventListener("input", ({ currentTarget: target }) => {
			const maxLength = parseInt(target.getAttribute("maxlength"));
			const currentLength = target.value.length;

			if (currentLength >= errorThreshold) {
				counterLabel.classList.add("character-counter--error");
			} else {
				counterLabel.classList.remove("character-counter--error");
			}

			if (currentLength >= warningThreshold) {
				counterLabel.classList.add("character-counter--warning");
			} else {
				counterLabel.classList.remove("character-counter--warning");
			}

			if (currentLength >= 1) {
				counterLabel.classList.add("character-counter--good");
			} else {
				counterLabel.classList.remove("character-counter--good");
			}

			charactersCurrentCount.textContent = currentLength;
		});
	},
};
