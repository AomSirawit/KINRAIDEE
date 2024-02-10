function predict() {
  const data = {
    trs: "จอผักกาด",
    tss: "ไก่ต้มขมิ้น",
    tes: "ต้มแซ่บ",
  };

  let taste = document.getElementById("taste").value;
  let region = document.getElementById("region").value;
  let type = document.getElementById("type").value;

  if (taste === "chillies") {
    if (region === "north") {
      if (type === "soup") {
        result = data.trs;
      } else {
        result = "No Matching dish found";
      }
    } else if (region === "south") {
      if (type === "soup") {
        result = data.tss;
      } else {
        result = "No Matching dish found";
      }
    } else if (region === "esan") {
      if (type === "soup") {
        result = data.tes;
      } else {
        result = "No Matching Menu Found!!";
      }
    }
  } else {
    result = "No Matching dish found";
  }

  displayResult(result);
}

function displayResult(result) {
  document.getElementById("result").innerText = result;
}
