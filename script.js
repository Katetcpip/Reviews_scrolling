let rews = [{
        id: 1,
        title: "Больше всего мне нравится, что нет никакой рекламы, которой в последнее время грешит Сабвей Сёрферс. Очень нравится, 5/5, единственное, что бесило, что некоторые уровни практически непроходимые.",
        authors: "Kim Taehyung",
        image: "https://static.asiachan.com/V.%28Kim.Taehyung%29.full.222160.jpg"
    },
    {
        id: 2,
        title: 'Нереально дёргается танк, невозможно играть. Вот такой переход от " картошки", в .овнёшку! Надеюсь со временем починят, и она будет нормально играться. А пока-удалил! Чего и вам советую!',
        authors: "Park Jimin",
        image: "https://i.pinimg.com/originals/fc/65/03/fc6503587169f38ce8e569a099fc74bb.jpg"
    },
    {
        id: 3,
        title: "Время и зараза никого не щадят, но мы пытаемся повлиять на ход истории! Игра из далекого 2005г, но до сих пор интересная - тут всё шикарно и продумано до мелочей",
        authors: "Kim Namjoon",
        image: "https://i.pinimg.com/originals/72/86/02/7286029749ef3d8c6d359e2415d8ded6.jpg"
    },
    {
        id: 4,
        title: "Отзыв от игрока с двухлетним стажем.<br> Я могу очень долго рассуждать на тему геншина, ведь он занимает особое место в моей жизни. Но достаточно, чтобы вы поняли - это разносторонняя игра. Удачи вам в крутках <3 ",
        authors: "Jeon JungKook",
        image: "https://avatars.dzeninfra.ru/get-zen_doc/5233324/pub_60dd14dd53a79f06f932a322_60dd185620b1021e4fb6ee06/scale_1200"
    }
]

const reviews = document.getElementById("reviews")
let buttonId = 1

const random = document.getElementById("buttonRand")

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

function buttonRand() {
    buttonId = randomNumber(1, 5)
    renewRews(buttonId)
}

random.addEventListener("click", buttonRand)

function renewRews(buttonId) {
    reviews.innerHTML = ""
    reviews.innerHTML += `
<div class="authors">
<p class="author main">${rews[buttonId - 1].authors}</p>
</div>

<img class="image" src="${rews[buttonId - 1].image}">
 <p class="title">${rews[buttonId - 1].title}</p>

<div class="buttons">
<button onclick='buttonPrev()' class="button"><<</button>
<button onclick='buttonNext()' class="button">>></button>
</div>

        `
}

function buttonNext() {
    if (buttonId < 4) buttonId += 1
    else buttonId = 1
    renewRews(buttonId)
}

function buttonPrev() {
    if (buttonId > 1) buttonId -= 1
    else buttonId = 4
    renewRews(buttonId)
}

renewRews(buttonId)