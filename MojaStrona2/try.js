        const ad1 = document.getElementById("ad1");
		const ad2 = document.getElementById("ad2");
		const ad3 = document.getElementById("ad3");
        const ad4 = document.getElementById("ad4");

		let currentAd = 1;

		setInterval(() => {
			if (currentAd === 1) {
				ad1.style.display = "none";
				ad2.style.display = "block";
				currentAd = 2;
			} else if (currentAd === 2) {
				ad2.style.display = "none";
				ad3.style.display = "block";
				currentAd = 3;
			} else if (currentAd === 3) {
				ad3.style.display = "none";
				ad4.style.display = "block";
				currentAd = 4;
			} else if (currentAd === 4) {
				ad4.style.display = "none";
				ad1.style.display = "block";
				currentAd = 1;
			}
		}, 3000);