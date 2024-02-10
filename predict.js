function predict() {
    let taste = document.getElementById("taste").value;
    let region = document.getElementById("region").value;
    let type = document.getElementById("type").value;
  
    // เรียกใช้ Decision Tree เพื่อทำการทำนายเมนูอาหาร
    let result = decisionTree.predict(taste, region, type);
  
    displayResult(result);
  }
  
  function displayResult(result) {
    document.getElementById("result").innerText = result;
  }
  