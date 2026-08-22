const API_URL = "https://gold-price-api.parisa-na-65.workers.dev/";

async function updateGoldPrice() {
    const goldPriceToday =
        document.getElementById("goldPriceToday");

    const goldUpdateTime =
        document.getElementById("goldUpdateTime");

    const goldPriceInput =
        document.getElementById("goldPrice");

    try {
        const response = await fetch(
            API_URL + "?t=" + Date.now()
        );

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message);
        }

        const goldPrice = data.buy;

        goldPriceToday.textContent =
            `ราคาทองวันนี้ ${goldPrice.toLocaleString("th-TH")} บาท`;

        goldUpdateTime.textContent =
            `อัปเดตล่าสุด ${data.date} เวลา ${data.time} น.`;

        goldPriceInput.value = goldPrice;

    } catch (error) {
        console.error(error);

        goldPriceToday.textContent =
            "โหลดราคาทองไม่สำเร็จ";

        goldUpdateTime.textContent = "";
    }
}


// โหลดราคาทองเมื่อเปิดเว็บ
updateGoldPrice();


// อัปเดตราคาทุก 1 นาที
setInterval(updateGoldPrice, 60000);
