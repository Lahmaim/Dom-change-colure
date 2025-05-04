let deleteBtns = document.getElementsByClassName("delete");
for (let i = 0; i < deleteBtns.length; i++) {
    let btn = deleteBtns[i];
    btn.addEventListener("click", function (e) {
        let targetBtn = e.target;
        targetBtn.parentElement.parentElement.parentElement.remove();
        updateTotal();
    });
}

let liked = document.querySelectorAll(".liked");
for (let i = 0; i < liked.length; i++) {
    let like = liked[i];
    like.addEventListener("click", function (e) {
        if (like.style.color == "red") {
            like.style.color = "black";
        } else {
            like.style.color = "red";
        }
    });
}
function updateTotal() {
    let total = 0;
    let listProducts = document.getElementsByClassName("list-products")[0];
    let cards = listProducts.querySelectorAll(".cardBody");

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let prixElement = card.querySelector(".unitPrice");
        let quantityElement = card.querySelector(".quantity");
        
        if (prixElement != null || quantityElement != null) {
            let prix = parseFloat(prixElement.innerHTML);
            let quantity = parseInt(quantityElement.innerHTML);
            total = total + prix * quantity;
        }
    }
    document.querySelector(".total").innerHTML = "$" + total;
}
function incementDicrement() {
    let countersContainer = document.querySelectorAll(".counter");
    for (let i = 0; i < countersContainer.length; i++) {
        let cont = 0;
        let conterCon = countersContainer[i];
        let plusBtn = conterCon.querySelector(".plus");
        let minusBtn = conterCon.querySelector(".minus");
        plusBtn.addEventListener("click", function (e) {
            cont++;
            document.querySelectorAll(".quantity")[i].innerHTML = cont;
            updateTotal();
        });
        minusBtn.addEventListener("click", function (e) {
            if (cont == 0) {
                document.querySelectorAll(".quantity")[i].innerHTML = 0;
            } else {
                cont--;
                document.querySelectorAll(".quantity")[i].innerHTML = cont;
            }
            updateTotal();
        });
    }
}
incementDicrement();
