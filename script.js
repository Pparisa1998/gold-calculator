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

    // ตรวจสอบว่ากรอกข้อมูลครบ
    if (!goldPrice || !goldPercent || !goldWeight) {
        result.innerHTML = "กรุณากรอกข้อมูลให้ครบ";
        return;
    }

    // ราคาทองต่อกรัม
    const pricePerGram = goldPrice * 0.656;

    // คำนวณราคาสุดท้าย
    const total =
        pricePerGram *
        (goldPercent / 100) *
        goldWeight;

    result.innerHTML = `
        ราคาทองต่อกรัม: ${pricePerGram.toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })} บาท
        <br><br>
        <strong>
            ราคาสุดท้าย: ${total.toLocaleString("th-TH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} บาท
        </strong>
    `;
}
