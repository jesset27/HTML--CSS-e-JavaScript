function carregar(){
    var msg = window.document.getElementById("msg")

    var img = window.document.getElementById("imagem")
    
    var bom = window.document.getElementById("bom")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12){
        img.src = "./imagens/manha.png"
        document.body.style.background = "#e2cd9f"
        bom.innerHTML = "Bom Dia!!!"
    }
    else if (hora >= 12 && hora < 18){
        img.src = "./imagens/tarde.png"
        document.body.style.background = "#b9846f"
        bom.innerHTML = "Boa Tarde!!!"
    }
    else {
        img.src = "./imagens/noite.png"
        document.body.style.background = "#515154"
        bom.innerHTML = "Boa Noite!!!"
    }
}