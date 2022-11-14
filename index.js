function getData(){
    let fullName = document.getElementById("name").value;
    let variant = document.getElementById("var").value;
    let group = document.getElementById("group").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let IdCard = document.getElementById("id-card").value;
    let validated = true;
    let result = "";
    console.log('123')
    let fullNameReg = /[А-ЯІЇЄҐ][а-яіїє]+[а-яіїєґ]\s\p{Lu}\.\p{Lu}\./u
    let variantReg = /\d/g
    let groupReg = /^\p{L}\p{L}-\d\d$/u
    let phoneNumberReg = /\p{Ps}\d\d\d\p{Pe}-\d\d\d-\d\d-\d\d/u
    let IdCardReg = /\p{Lu}\p{Lu}\s№\d\d\d\d\d\d/u
    if (fullName.match(fullNameReg)){
        console.log(fullName)
    }else {
        alert("Неправильно введено ПІБ (Приклад: Бебрик В.Б. ")
        validated = false;
    }
    if (group.match(groupReg)){
        console.log(group)
    }else {
        alert("Неправильно введено групу (Приклад: ІК-03 ")
        validated = false;
    }
    if (phoneNumber.match(phoneNumberReg)){
        console.log(phoneNumber)
    }else {
        alert("Неправильно введено номер телефона (Приклад: (096)-223-28-32 ")
        validated = false;
    }
    if (variant.match(variantReg)){
        console.log(variant)
    } else {
        alert("Неправильно введено варіант (Приклад: 33 ")
        validated = false;
    }
    if (IdCard.match(IdCardReg)){
        console.log(IdCard)
    } else {
        alert("Неправильно введено ID картку (Приклад: МЛ №123456 ")
        validated = false;
    }
    if (validated){
        result = "ПІБ: " + fullName + "<br/>" + "Група: " + group + "<br/>" + "Номер телефону: " + phoneNumber + "<br/>" + "Варіант: " + variant + "<br/>" + "Номер ID картки: " + IdCard
        document.getElementById("result").innerHTML = result;
    }
}
function changeColorToRandom(id){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(id).style.backgroundColor = "#" + randomColor;
}
function changeColor(id){
        document.getElementById(id).style.backgroundColor = document.getElementById('color-pal').value;
}
function changeRowColor(){
    for (let Id = 1; Id <= 6; Id++) {
        changeColor(Id)
    }
}