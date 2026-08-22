export default {
  async fetch(request) {

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store"
    };

    try {

      // ดึงข้อมูลจากสมาคมค้าทองคำ
      const response = await fetch(
        "https://classic.goldtraders.or.th/UpdatePriceList.aspx",
        {
          headers: {
            "User-Agent": "Mozilla/5.0"
          }
        }
      );

      const html = await response.text();

      // หาแต่ละแถวในตาราง
      const rows = [
        ...html.matchAll(
          /<tr[^>]*>([\s\S]*?)<\/tr>/gi
        )
      ];

      let goldData = null;

      for (const row of rows) {

        const cells = [
          ...row[1].matchAll(
            /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi
          )
        ].map(cell =>
          cell[1]
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/gi, " ")
            .replace(/&amp;/gi, "&")
            .trim()
        );

        // หาแถวที่ขึ้นต้นด้วยวันที่ เช่น 22/08/2569
        if (
          cells.length >= 6 &&
          /^\d{2}\/\d{2}\/25\d{2}$/.test(cells[0])
        ) {

          goldData = {
            date: cells[0],
            time: cells[1],
            round: cells[2],

            // ราคาทองคำแท่ง รับซื้อ
            buy: Number(
              cells[3].replace(/,/g, "")
            )
          };

          break;
        }
      }

      if (!goldData) {
        throw new Error(
          "ไม่พบข้อมูลราคาทอง"
        );
      }

      return new Response(
        JSON.stringify(goldData),
        {
          status: 200,
          headers: corsHeaders
        }
      );

    } catch (error) {

      return new Response(
        JSON.stringify({
          error: true,
          message: error.message
        }),
        {
          status: 500,
          headers: corsHeaders
        }
      );

    }
  }
};
