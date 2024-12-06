let produit = document.getElementsByClassName("box")
for (let i = 0; i < produit.length; i++) {
  let bntPlus = produit[i].children[4].children[2]
  let bntMoins = produit[i].children[4].children[0]
  let nombre = produit[i].children[4].children[1]
  let prixTotal = produit[i].children[3].children[1]
  let prixunitaire = produit[i].children[2].children[1]
  let qty = parseInt(nombre.innerText)
  let prixUnit = parseInt(prixunitaire.innerText)
  let bntlike = produit[i].children[5].children[0].children[0]
  let bntremove = produit[i].children[5].children[1].children[0]
  console.log();
  let box = produit[i]
  if (box) {

    bntremove.addEventListener("click", function () {
      box.remove();
    })
  }

  bntlike.addEventListener("click", function () {
    if (bntlike.style.color == "red") {
      bntlike.style.color = "black"
    }
    else {
      bntlike.style.color = "red"
    }
  })

  bntPlus.addEventListener("click", function () {
    qty++
    nombre.innerText = qty
    prixTotal.innerText = prixUnit * qty
    somme()
  })
  bntMoins.addEventListener("click", function () {
    if (qty > 0)
      qty--;
    nombre.innerText = qty
    prixTotal.innerText = prixUnit * qty
  somme()
  })
}

let tota1 = document.getElementById('tyu')
function somme() {
    let sum = 0;
    let tota = document.getElementsByClassName("price")
    for (let index = 0; index < tota.length; index++) {
        let totalUnit = parseInt(tota[index].innerText)
        console.log(totalUnit);
        sum = sum + totalUnit

    }
    tota1.innerHTML=sum
}