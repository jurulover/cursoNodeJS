let messageList = [
    {
        src: "user",
        message: "mensagem do usuario"
    }
]


function addMessage ({text, src}){

    const messageBox = document.createElement("div")
    messageBox.className = "messageBox"

    const profile = document.createElement("div")
    profile.className = `profile ${src}`

    const icon = document.createElement("img")
    icon.src = src == "user" ? "./icones/profile.svg" : "./icones/iaProfile.svg" 
    profile.appendChild(icon)

    const message = document.createElement("div")
    message.className = "message"

    message.innerText = `${text}`

    messageBox.appendChild(profile)
    messageBox.appendChild(message)

    return messageBox
}

async function requestHandler({text, model}){
    //implementar request para api seqoia
    //tirei a parte da conexão via API por se tratar de algo da empresa do curso. 

    return {text: "Resposta IA", src: "IA"}
}
