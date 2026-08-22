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
