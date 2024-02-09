function predict() {

    let taste = document.getElementById("taste").value;
    let region = document.getElementById("region").value;
    let type = document.getElementById("type").value;

    //teste
    if (taste === "chillies" && region === "north" && type === "soup")  {
        displayResult("จอผักกาด");
        return;
    }
    else
    {
        displayResult("No Matching dish found");
    }

    if (taste === "chillies" && region === "south" && type === "soup")  {
        displayResult("ไก่ต้มขมิ้น");
        return;
    }
    else
    {
        displayResult("No Matching dish found");
    }

    if (taste === "chillies" && region === "esan" && type === "soup")  {
        displayResult("ต้มแซ่บ");
        return;
    }
    else
    {
        displayResult("No Matching Menu Found!!");
    }
}

function displayResult(result) {
    document.getElementById("result").innerText = result;
}