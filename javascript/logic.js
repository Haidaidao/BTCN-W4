function ifStringIsNumber(_string) {
    return !(Number.isNaN(Number(_string)))
}

function checkFirstNumber() {
    let firstNumber= document.getElementById("first-number").value;
    if(!ifStringIsNumber(firstNumber)) {

        document.getElementById("text-print-announe").innerHTML=
        `<p>Giá trị ở ô <span class="text-italic">Số thứ nhất</span> không là số</p>`;
    }
}

function checkSecondNumber() {

    let secondNumber= document.getElementById("second-number").value;
    if(!ifStringIsNumber(secondNumber)) {
        document.getElementById("text-print-announe").innerHTML=
        `<p>Giá trị ở ô <span class="text-italic">Số thứ hai</span> không là số</p>`;
    }
}

function checkSelectCalculation() {

    document.getElementById("text-print-announe").innerText="";

    if(document.getElementById("first-number").value=="" || document.getElementById("second-number").value==""
        || !ifStringIsNumber(document.getElementById("first-number").value) 
        || !ifStringIsNumber(document.getElementById("second-number").value)) {

        document.getElementById("text-print-announe").innerText=
        "Chưa điền đủ hai số hợp lệ để tính";
    }

    else if(checkOrderCheckbox()==0)
    document.getElementById("text-print-announe").innerHTML=
        `<p>Bấm nút <span class="text-italic">Tính</span> mà chưa chọn phép tính</p>`;

    else{
        
        calculate(parseFloat(document.getElementById("first-number").value),
           parseFloat(document.getElementById("second-number").value));

    }
}

function checkOrderCheckbox() {

    if(document.getElementById("checkbox-plus").checked==true) return 1;
    else if(document.getElementById("checkbox-minus").checked==true) return 2;
    else if(document.getElementById("checkbox-multiply").checked==true) return 3;
    else if(document.getElementById("checkbox-divide").checked==true) return 4;

    return 0;
}

function calculate() {
    
    if(checkOrderCheckbox()===1) {
        document.getElementById("result").value= 
            (parseFloat(document.getElementById("first-number").value)+ parseFloat(document.getElementById("second-number").value));
    
    }
    else if(checkOrderCheckbox()===2) {
        document.getElementById("result").value= (parseFloat(document.getElementById("first-number").value) - parseFloat(document.getElementById("second-number").value));
    }
    else if(checkOrderCheckbox()===3) {
        document.getElementById("result").value= (parseFloat(document.getElementById("first-number").value) * parseFloat(document.getElementById("second-number").value));
    }
    else if(checkOrderCheckbox()===4) {
        if(parseFloat(document.getElementById("second-number").value)!=0) document.getElementById("result").value= (parseFloat(document.getElementById("first-number").value) / parseFloat(document.getElementById("second-number").value));
        else document.getElementById("result").value="Lỗi chia cho 0";
    }

}



