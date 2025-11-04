class Clock {
    constructor() {
        this.container = document.querySelector(".container");

        this.secondDigits = this.container.querySelector(".digits--seconds");
        this.secondDigitsUnits = this.secondDigits.querySelector(".digit--units");
        this.secondDigitsTens = this.secondDigits.querySelector(".digit--tens");

        this.minuteDigits = this.container.querySelector(".digits--minutes");
        this.minuteDigitsUnits = this.minuteDigits.querySelector(".digit--units");
        this.minuteDigitsTens = this.minuteDigits.querySelector(".digit--tens");

        this.hourDigits = this.container.querySelector(".digits--hours");
        this.hourDigitsUnits = this.hourDigits.querySelector(".digit--units");
        this.hourDigitsTens = this.hourDigits.querySelector(".digit--tens");

        this.digitColumns = [
            {
                el: this.secondDigitsUnits,
                totalNumbers: 10
            },
            {
                el: this.secondDigitsTens,
                totalNumbers: 6
            },
            {
                el: this.minuteDigitsUnits,
                totalNumbers: 10
            },
            {
                el: this.minuteDigitsTens,
                totalNumbers: 6
            },
            {
                el: this.hourDigitsUnits,
                totalNumbers: 10
            },
            {
                el: this.hourDigitsTens,
                totalNumbers: 3
            }
        ];

        this.intervalId = null;
        this.numHeight = 40;

        this.init();
        this.bindEvents();
    }

    init() {
        this.digitColumns.forEach((column) => {
            const { el, totalNumbers } = column;
            [...Array(totalNumbers).keys()].forEach((num) => {
                const element = document.createElement("div");
                element.textContent = num;
                element.classList.add("num");
                el.appendChild(element);
            });
        });
    }

    bindEvents() {
        const startButton = document.querySelector(".buttons .start");
        startButton.addEventListener("click", () => {
            if (!this.intervalId) {
                this.intervalId = setInterval(this.update.bind(this), 1000);
                this.update(); // Update immediately when starting
            }
        });

        const stopButton = document.querySelector(".buttons .stop");
        stopButton.addEventListener("click", () => {
            clearInterval(this.intervalId);
            this.intervalId = null;
        });

        // Start the clock automatically
        this.update();
        this.intervalId = setInterval(this.update.bind(this), 1000);
    }

    update() {
        const now = new Date();
        const nowSeconds = `${now.getSeconds() < 10 ? "0" : ""
            }${now.getSeconds().toString()}`;
        const nowMinutes = `${now.getMinutes() < 10 ? "0" : ""
            }${now.getMinutes().toString()}`;
        const nowHours = `${now.getHours() < 10 ? "0" : ""
            }${now.getHours().toString()}`;

        const itemsToUpdate = [
            {
                time: nowSeconds,
                columns: [this.secondDigitsUnits, this.secondDigitsTens]
            },
            {
                time: nowMinutes,
                columns: [this.minuteDigitsUnits, this.minuteDigitsTens]
            },
            {
                time: nowHours,
                columns: [this.hourDigitsUnits, this.hourDigitsTens]
            }
        ];

        itemsToUpdate.forEach((item) => {
            const { time, columns } = item;
            const [unitsColumn, tensColumn] = columns;

            const unitsNum = parseInt(time.charAt(1), 10);
            const tensNum = parseInt(time.charAt(0), 10);

            const unitsOffset = this.numHeight * unitsNum;
            const tensOffset = this.numHeight * tensNum;

            const unitsMarkerEl = unitsColumn.querySelector(".marker");
            const tensMarkerEl = tensColumn.querySelector(".marker");

            // Units Column
            unitsColumn.style.transform = `translateY(-${unitsOffset}px)`;
            unitsMarkerEl.style.transform = `translateY(${unitsOffset}px)`;

            // Tens Column
            tensColumn.style.transform = `translateY(-${tensOffset}px)`;
            tensMarkerEl.style.transform = `translateY(${tensOffset}px)`;
        });
    }
}

new Clock();
