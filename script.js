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
function calculate() {
    const goldPrice = Number(
        document.getElementById("goldPrice").value
    );

    const goldPercent = Number(
        document.getElementById("goldPercent").value
    );

    const goldWeight = Number(
        document.getElementById("goldWeight").value
    );

    const result = document.getElementById("result");

    /* ถ้ากรอกข้อมูลไม่ครบ ให้ซ่อนผลลัพธ์ */
    if (!goldPrice || !goldPercent || !goldWeight) {
        result.classList.remove("show");
        result.innerHTML = "";
        return;
    }

    /* คำนวณราคาทอง */
    const total =
        goldPrice *
        0.656 *
        (goldPercent / 100) *
        goldWeight /
        10;

    /* แสดงกล่องผลลัพธ์ */
    result.classList.add("show");

    /* แสดงเฉพาะราคาสุดท้าย */
    result.innerHTML = `
        <strong>
            ราคาสุดท้าย:
            ${total.toLocaleString("th-TH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} บาท
        </strong>
    `;
}


// อัปเดตราคาทุก 1 นาที
setInterval(updateGoldPrice, 60000);
