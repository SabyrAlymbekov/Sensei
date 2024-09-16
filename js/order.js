const token = "7356590127:AAGh-4dEV8rzcnV-bB3ouD7OjQVgklq4Qvg"
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`
const chatId ="-4584119608"

const send2 = async (e) => {
    console.log(e)
    e.preventDefault();
    const [first, second, email, phone] = [e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value]
    const text = `Name: ${first} ${second} \nemail: ${email}\nPhone: ${phone}\nform: order`
    await fetch(URL_API, {
        method:'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({chat_id: chatId, text})
    })
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
    e.target[3].value = ''
    e.target[4].value = ''
}

document.querySelector("#form2").addEventListener("submit", send2)