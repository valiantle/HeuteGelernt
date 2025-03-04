let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProd() {
    localStorage.setItem("products", JSON.stringify(products));
}

document.getElementById("subBut").addEventListener("click", function(e) {
    e.preventDefault();

    let prodName = document.getElementById("inName").value;
    let prodPrice = document.getElementById("inPrice").value;
    let prodInfo = document.getElementById("inInfo").value;

    const newProd = {
        name: prodName,
        price: parseFloat(prodPrice),
        info: prodInfo
    }
    products.push(newProd);
    console.table(products);
    saveProd()
})