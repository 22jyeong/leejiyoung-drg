// <!-- //+, - 누르면 증감식 -->

window.addEventListener("load", function () {
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const result = document.querySelector("#result");
    const totalcost = document.querySelector(".totalcost");
    const i = 1;

    plus.addEventListener("click", () => {
        i++
        result.textContent = i;
        const totalcostNum = i * 31000;
        totalcost.textContent = totalcostNum.toLocaleString() + "원";
    })

    minus.addEventListener("click", () => {
        if (i > 0) {
            i--
            result.textContent = i;
            const totalcostNum = i * 31000;
            totalcost.textContent = totalcostNum.toLocaleString() + "원";

        } else {
            totalcost.textContent = 0 + "원"
        }
    });
})
