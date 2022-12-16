
//Source: https://en.touhouwiki.net/wiki/Scarlet_Weather_Rhapsody/Characters
// https://en.touhouwiki.net/wiki/Touhou_Hisoutensoku/Characters

const th06List = [
    {
        name: "Reimu Hakurei",
        url: "https://en.touhouwiki.net/images/d/d8/Th105Reimu.png?20110828125010"
    },
    {
        name: "Marisa Kirisame",
        url: "https://en.touhouwiki.net/images/5/5d/Th105Marisa.png?20110828132821"
    },
    {
        name: "Rumia",
        url: "https://static.wikia.nocookie.net/villains/images/3/34/De_Rumia.png/revision/latest/scale-to-width-down/250?cb=20180330103916"
    },
    {
        name: "Cirno",
        url: "https://en.touhouwiki.net/images/c/cb/Th123Cirno.png?20120707143944"
    },
    {
        name: "Hong Meiling",
        url: "https://en.touhouwiki.net/images/c/c9/Th123Meiling.png?20120707144434"
    },
    {
        name: "Patchouli Knowledge",
        url: "https://en.touhouwiki.net/images/9/99/Th105Patchouli.png?20110828133338"
    },
    {
        name: "Sakuya Izayaoi",
        url: "https://en.touhouwiki.net/images/b/b7/Th105Sakuya.png?20110828192800"
    },
    {
        name: "Remilia Scarlet",
        url: "https://en.touhouwiki.net/images/thumb/e/e7/Th105Remilia.png/275px-Th105Remilia.png"
    },
    {
        name: "Flandre Scarlet",
        url: "https://cdn.discordapp.com/attachments/343105069455114251/1053163529970122852/imgbin_the-embodiment-of-scarlet-devil-wiki-chibi-png.png"
    },

]

const th07List = [
    {
        name: "Letty Whitecock",
        url: "https://static.wikia.nocookie.net/burngoberrietvseries/images/b/bb/Da7884a51985b779.png/revision/latest?cb=20190810195801"
    },
    {
        name: "Chen Kawai",
        url: "https://cdn.discordapp.com/attachments/343105069455114251/1053165142453518376/faabab1eb58f2f5adad93d289670be710fbd3b11r1-376-458v2_00-removebg-preview.png"
    },
    {
        name: "Alice Margatroid",
        url: "https://en.touhouwiki.net/images/f/f0/Th105Alice.png?20101108015920"
    },
    { name: "Kaguya", url: "https://static.wikia.nocookie.net/burngoberrietvseries/images/6/6b/De_Kaguya.png/revision/latest?cb=20191216181240" },
    { name: "Mononobe no Futo", url: "https://en.touhouwiki.net/images/thumb/d/da/Th155Futo.png/165px-Th155Futo.png" },
    { name: "Fujiwara no Mokou", url: "https://en.touhouwiki.net/images/thumb/0/04/Th155Mokou.png/165px-Th155Mokou.png" },
    { name: "Futo2", url: "https://en.touhouwiki.net/images/thumb/f/f5/Th13Futo.png/165px-Th13Futo.png" },
    { name: "Reisen Udongein Inaba", url: "https://en.touhouwiki.net/images/thumb/0/02/Th155Reisen.png/283px-Th155Reisen.png" },
    { name: "Test", url: "https://dictionary.cambridge.org/images/thumb/black_noun_002_03536.jpg?version=5.0.286" }
]

const th08List = [
    { name: "Reimu", url: "https://en.touhouwiki.net/images/thumb/8/81/Th08Reimu.png/118px-Th08Reimu.png" },
    { name: "Flandre Scarlet", url: "https://en.touhouwiki.net/images/b/bd/Th06Flandre.png" },
    { name: "Remilia Scarlet", url: "https://en.touhouwiki.net/images/thumb/5/5a/RemiIN.png/149px-RemiIN.png" },
    { name: "Sakuya Izayaoi", url: "https://en.touhouwiki.net/images/thumb/2/23/SakuyaIN.png/112px-SakuyaIN.png" },
    { name: "Patchouli Knowledge", url: "https://en.touhouwiki.net/images/thumb/9/99/Th105Patchouli.png/165px-Th105Patchouli.png" }
]

const cardBackground = "https://en.touhouwiki.net/images/thumb/b/b9/BLANK_max_185.png/128px-BLANK_max_185.png"

const allList = [].concat(th06List, th07List);


function onLoad() {
    const card_list = document.getElementById("card_container");


    //imageList.sort(() => (Math.random() > 0.5) ? 1 : -1);

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