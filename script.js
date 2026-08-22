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

    /* ขั้นที่ 1: ราคาทอง × 0.656 */
    const pricePerGram = goldPrice * 0.656;

    /* ขั้นที่ 2: คำนวณตามเปอร์เซ็นต์ทอง */
    const priceByPercent =
        pricePerGram * (goldPercent / 100);

    /* ขั้นที่ 3: คูณน้ำหนักทอง */
    const priceByWeight =
        priceByPercent * goldWeight;

    /* ขั้นที่ 4: หาร 10 */
    const total = priceByWeight / 10;

    /* แสดงกล่องผลลัพธ์ */
    result.classList.add("show");

    /* แสดงผลลัพธ์ */
    result.innerHTML = `
        <div>
            ราคาต่อกรัม:
            ${pricePerGram.toLocaleString("th-TH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} บาท
        </div>

        <br>

        <strong>
            ราคาสุดท้าย:
            ${total.toLocaleString("th-TH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} บาท
        </strong>
    `;
}
