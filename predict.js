function predict() {
    const MenuData = {
        
        // Chillies
            cns: "ต้มยำไก่บ้าน",
            cnp: "น้ำพริกอ่อง",
            cny: "ยำมะเขือ",
            cnf: "ไข่ป่าม , ไส้อั่ว",
    
            css: "แกงส้ม",
            csp: "คั่วกลิ้ง",
            csy: "ยำไตปลา",
            csf: "หมูทอดเครื่อง",
    
            ces: "ต้มแซ่บ , แกงเลียง",
            cep: "อึ่งไข่ผัดเผ็ด",
            cey: "ลาบหมูอีสาน",
            cef: "ลาบทอด",
    
            cms: "ต้มยำกุ้ง",
            cmp: "ผัดกะเพรา",
            cmy: "ยำถั่วพลู",
            cmf: "ทอดมันปลากราย",
    
        // Sweet // mai ped
            wns: "ข้าวซอย",
            wnp: "ผัดเชียงดาผัดไข่",
            wny: "ยำหนัง",
            wnf: "แอ๊บอ่องออ",
    
            wss: "ขนมจีนน้ำยาถั่ว",
            wsp: "ใบเหลียงผัดไข่",
            wsy: "ข้าวยำใต้",
            wsf: "ไก่ทอดหาดใหญ่ + น้ำจิ้มไก่ , หมูโคะ",
    
            wes: "ต้มไข่ผำ",
            wep: "ผัดขิงกุ้งสด",
            wey: "ซุปหน่อไม้ไม่เผ็ด",
            wef: "ดักแด้ทอดกรอบ",
    
            wms: "ต้มจืดเต้าหู้หมูสับ",
            wmp: "ผัดไทย",
            wmy: "หมี่คลุก",
            wmf: "ปลาทับทิมทอด",

    
        }
    // Get selected options
    let taste = document.getElementById("taste").value;
    let region = document.getElementById("region").value;
    let type = document.getElementById("type").value;

    // Decision tree to predict food menu
    let result = "";

    if (taste === "chillies") {
        if (region === "north") {
            if (type === "soup") {
                result = MenuData.cns;
            } else if (type === "puff") {
                result = MenuData.cnp;
            } else if (type === "yum") {
                result = MenuData.cny;
            } else if (type === "fries") {
                result = MenuData.cnf;
            }
        } else if (region === "south") {
            if (type === "soup") {
                result = MenuData.css;
            } else if (type === "puff") {
                result = MenuData.csp;
            } else if (type === "yum") {
                result = MenuData.csy;
            } else if (type === "fries") {
                result = MenuData.csf;
            }
        } else if (region === "esan") {
            if (type === "soup") {
                result = MenuData.ces;
            } else if (type === "puff") {
                result = MenuData.cep;
            } else if (type === "yum") {
                result = MenuData.cey;
            } else if (type === "fries") {
                result = MenuData.cef;
            }
        } else if (region === "mid") {
            if (type === "soup") {
                result = MenuData.cms;
            } else if (type === "puff") {
                result = MenuData.cmf;
            } else if (type === "yum") {
                result = MenuData.cmy;
            } else if (type === "fries") {
                result = MenuData.cmf;
            }
        }
        
    } else if (taste === "sweet") {
        if (region === "north") {
            if (type === "soup") {
                result = MenuData.wns;
            } else if (type === "puff") {
                result = MenuData.wnp;
            } else if (type === "yum") {
                result = MenuData.wny;
            } else if (type === "fries") {
                result = MenuData.wnf;
            }
        } else if (region === "south") {
            if (type === "soup") {
                result = MenuData.wss;
            } else if (type === "puff") {
                result = MenuData.wsp;
            } else if (type === "yum") {
                result = MenuData.wsy;
            } else if (type === "fries") {
                result = MenuData.wsf;
            }
        } else if (region === "esan") {
            if (type === "soup") {
                result = MenuData.wss;
            } else if (type === "puff") {
                result = MenuData.wsp;
            } else if (type === "yum") {
                result = MenuData.wsy;
            } else if (type === "fries") {
                result = MenuData.wsf;
            }
        } else if (region === "mid") {
            if (type === "soup") {
                result = MenuData.wms;
            } else if (type === "puff") {
                result = MenuData.wmp;
            } else if (type === "yum") {
                result = MenuData.wmy;
            } else if (type === "fries") {
                result = MenuData.wmf;
            }
        }

    }

    // Display the predicted menu
    document.getElementById("result").innerHTML = result;
}
