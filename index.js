
const th06List = [ 
    { name: "Reimu", url: "https://en.touhouwiki.net/images/thumb/8/81/Th08Reimu.png/118px-Th08Reimu.png" },
    { name: "Flandre Scarlet", url: "https://en.touhouwiki.net/images/b/bd/Th06Flandre.png" },
    { name: "Remilia Scarlet", url: "https://en.touhouwiki.net/images/thumb/5/5a/RemiIN.png/149px-RemiIN.png" },
    { name: "Sakuya Izayaoi", url: "https://en.touhouwiki.net/images/thumb/2/23/SakuyaIN.png/112px-SakuyaIN.png" },
    { name: "Patchouli Knowledge", url: "https://en.touhouwiki.net/images/thumb/9/99/Th105Patchouli.png/165px-Th105Patchouli.png" }
]

const th07List = [ 
    { name: "Kaguya", url: "https://en.touhouwiki.net/images/thumb/d/d3/Th08Kaguya.png/165px-Th08Kaguya.png" },
    { name: "Mononobe no Futo", url: "https://en.touhouwiki.net/images/thumb/d/da/Th155Futo.png/165px-Th155Futo.png" },
    { name: "Fujiwara no Mokou", url: "https://en.touhouwiki.net/images/thumb/0/04/Th155Mokou.png/165px-Th155Mokou.png" },
    { name: "Futo2", url: "https://en.touhouwiki.net/images/thumb/f/f5/Th13Futo.png/165px-Th13Futo.png" },
    { name: "Reisen Udongein Inaba", url: "https://en.touhouwiki.net/images/thumb/0/02/Th155Reisen.png/283px-Th155Reisen.png" }
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
        let span = document.createElement("p");
        let img = document.createElement('img');
        li.onclick = handleOnClickCard;
        li.className = "card";
        img.setAttribute('draggable', false);

        try {
            span.innerText = allList[index].name;
        } catch (error) {
            span.innerText = "null";
        }

        try {
            img.src = allList[index].url;
        } catch (error) {
            img.src = allList[0].url;
        }





        li.appendChild(img);
        li.appendChild(span);
        card_list.appendChild(li);

    }

}

function handleOnClickCard() {
    if (this.className == "card")
        this.className = "closed_card";
    else
        this.className = "card";
}