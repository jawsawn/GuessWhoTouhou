
//Source1: https://en.touhouwiki.net/wiki/Scarlet_Weather_Rhapsody/Characters
//Source2: https://en.touhouwiki.net/wiki/Touhou_Hisoutensoku/Characters
//Source3: https://danbooru.donmai.us/posts/1466766?q=dairi+wriggle_nightbug
//Source4: https://en.touhouwiki.net/wiki/Phantasmagoria_of_Flower_View/Characters
//Bicubic Resising

const th06List = [
    {
        name: "Reimu Hakurei",
        url: "./src/imgs/reimu.png"
    },
    {
        name: "Marisa Kirisame",
        url: "./src/imgs/marisa.png"
    },
    {
        name: "Rumia",
        url: "https://cdn.discordapp.com/attachments/343105069455114251/1053168396457484338/De_Rumia.png"
    },
    {
        name: "Cirno",
        url: "https://en.touhouwiki.net/images/c/cb/Th123Cirno.png?20120707143944"
    },
    {
        name: "Meiling Hong",
        url: "https://en.touhouwiki.net/images/c/c9/Th123Meiling.png?20120707144434"
    },
    {
        name: "Patchouli Knowledge",
        url: "https://en.touhouwiki.net/images/9/99/Th105Patchouli.png?20110828133338"
    },
    {
        name: "Sakuya Izayoi",
        url: "https://en.touhouwiki.net/images/b/b7/Th105Sakuya.png?20110828192800"
    },
    {
        name: "Remilia Scarlet",
        url: "https://en.touhouwiki.net/images/thumb/e/e7/Th105Remilia.png/275px-Th105Remilia.png"
    },
    {
        name: "Flandre Scarlet",
        url: "./src/imgs/flan.png"
    }
]

const th07List = [
    {
        name: "Letty Whiterock",
        url: "https://media.discordapp.net/attachments/343105069455114251/1053168600241934396/latest.png?width=360&height=540"
    },
    {
        name: "Chen",
        url: "https://cdn.discordapp.com/attachments/343105069455114251/1053165142453518376/faabab1eb58f2f5adad93d289670be710fbd3b11r1-376-458v2_00-removebg-preview.png"
    },
    {
        name: "Alice Margatroid",
        url: "https://en.touhouwiki.net/images/f/f0/Th105Alice.png?20101108015920"
    },
    {
        name: "Youmu Konpaku",
        url: "https://en.touhouwiki.net/images/7/72/Th105Youmu.png?20110828224316"
    },
    {
        name: "Yuyuko Saigyouji",
        url: "https://en.touhouwiki.net/images/0/09/Th105Yuyuko.png?20110828225132"
    },
    {
        name: "Lyrica Prismriver",
        url: "https://en.touhouwiki.net/images/b/bb/Th09LyricaPrismriver.png?20110830222815"
    },
    {
        name: "Merlin Prismriver",
        url: "https://en.touhouwiki.net/images/c/ca/Th09MerlinPrismriver.png?20110830222906"
    },
    {
        name: "Lunasa Prismriver",
        url: "https://en.touhouwiki.net/images/d/da/Th09LunasaPrismriver.png?20110830222753"
    },
    {
        name: "Ran Yakumo",
        url: "./src/imgs/ran.png"
    },
    {
        name: "Yukari Yakumo",
        url: "https://en.touhouwiki.net/images/1/14/Th105Yukari.png?20110828224739"
    }
]

const th08List = [
    {
        name: "Wriggle Nightbug",
        url: "./src/imgs/wriggle.png"
    },
    {
        name: "Mystia Lorelei",
        url: "https://en.touhouwiki.net/images/c/c3/Th09MystiaLorelei.png?20110830222944"
    },
    {
        name: "Keine Kamishirasawa",
        url: "./src/imgs/keine.png"
    },
    {
        name: "Tewi Inaba",
        url: "./src/imgs/tewi.png"
    },
    {
        name: "Reisen Udongein Inaba",
        url: "https://en.touhouwiki.net/images/9/92/Th105Reisen.png?20110828135911"
    },
    {
        name: "Eirin Yagokoro",
        url: "./src/imgs/eirin.png"
    },
    {
        name: "Kaguya Houraisan",
        url: "./src/imgs/kaguya.png"
    },
    {
        name: "Fujiwara no Mokou",
        url: "./src/imgs/mokou.png"
    }
]

const allList = [].concat(th06List, th07List, th08List);


function onLoad() {
    const card_list = document.getElementById("card_container");


    allList.sort(() => (Math.random() > 0.5) ? 1 : -1);

    for (let index = 0; index < 24; index++) {
        let li = document.createElement("div");
        let text = document.createElement("p");
        let img = document.createElement('img');
        li.onclick = handleOnClickCard;
        li.className = "card";
        img.setAttribute('draggable', false);

        try {
            text.innerText = allList[index].name;
        } catch (error) {
            text.innerText = "null";
        }

        try {
            img.src = allList[index].url;
        } catch (error) {
            img.src = allList[0].url;
        }





        li.appendChild(img);
        li.appendChild(text);
        card_list.appendChild(li);

    }

}

function handleOnClickCard() {
    if (this.className == "card")
        this.className = "closed_card";
    else
        this.className = "card";
}