// สมมติว่าคุณมี Decision Tree ที่สร้างมาแล้ว
// โดย Decision Tree นี้มีโครงสร้างที่สอดคล้องกับเงื่อนไขในการตัดสินใจ

// สมมติว่า decisionTree คือ Decision Tree ที่สร้างไว้
let decisionTree = {
    predict: function(taste, region, type) {
      // ใส่เงื่อนไขตาม Decision Tree ที่มีอยู่เพื่อทำการทำนายเมนูอาหาร
      if (taste === "spicy") {
        if (region === "north") {
          if (type === "soup") {
            return "จอผักกาด";
          } else {
            return "No Matching dish found";
          }
        } else if (region === "south") {
          if (type === "soup") {
            return "ไก่ต้มขมิ้น";
          } else {
            return "No Matching dish found";
          }
        } else if (region === "esan") {
          if (type === "soup") {
            return "ต้มแซ่บ";
          } else {
            return "No Matching Menu Found!!";
          }
        }
      } else {
        return "No Matching dish found";
      }
    }
  };
  