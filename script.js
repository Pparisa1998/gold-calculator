function calculate() {

    const price = Number(
        document.getElementById("goldPrice").value
    );

    const percent = Number(
        document.getElementById("goldPercent").value
    );

    const weight = Number(
        document.getElementById("goldWeight").value
    );

    const result = document.getElementById("result");

    if (!price || !percent || !weight) {
        result.innerHTML = "กรุณากรอกข้อมูลให้ครบ";
        return;
    }

    const total = price * (percent / 100) * weight;

    result.innerHTML =
        "ผลลัพธ์: " +
        total.toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) +
        " บาท";
}
