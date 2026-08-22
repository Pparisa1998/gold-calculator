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

    if (!goldPrice || !goldPercent || !goldWeight) {
        result.innerHTML = "กรุณากรอกข้อมูลให้ครบ";
        return;
    }

    // ราคาทอง × 0.656
    const pricePerGram = goldPrice * 0.656;

    // คำนวณราคาสุดท้าย
    const total =
        pricePerGram *
        (goldPercent / 100) *
        goldWeight /
        10;

    result.innerHTML = `
        <div>ราคาต่อกรัม: ${pricePerGram.toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })} บาท</div>

        <br>

        <strong>
            ผลลัพธ์: ${total.toLocaleString("th-TH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} บาท
        </strong>
    `;
}
