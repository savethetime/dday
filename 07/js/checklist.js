let itemList = [];

let addBtn = document.querySelector("#add"); //#add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener("click", addList);  //addBtn클릭하면 addList 함수 실행

function addList() {
    let item = document.querySelector("#item").value; //텍스트 필드내용 가져옴
    if (item != null) {
        itemList.push(item);  //itemList변수 끝에 item 변숫값 추가
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList() {
    let list = "<ul>";
    for (let i=0; i<itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";

        document.querySelector("#itemList").innerHTML = list;

        let remove = document.querySelectorAll(".close");

        for (let i=0; i< remove.length; i++) {
            remove[i].addEventListener("click", removeList);
        }
    }

    function removeList() {
        let id = this.getAttribute("id");
        itemList.splice(id, 1);
        showList();
    }
