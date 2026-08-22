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

    // ขั้นที่ 1: ราคาทอง × 0.656
    const pricePerGram = goldPrice * 0.656;

    // ขั้นที่ 2: คำนวณตามเปอร์เซ็นต์
    const priceByPercent =
        pricePerGram * (goldPercent / 100);

    // ขั้นที่ 3: คูณน้ำหนัก
    const priceByWeight =
        priceByPercent * goldWeight;

    // ขั้นที่ 4: เลื่อนจุดทศนิยม 1 ตำแหน่ง
    const total = priceByWeight / 100;

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
