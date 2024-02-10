function predict() {
    const MenuData = {
        
        // Chillies
            cns: "ต้มยำไก่บ้าน",
            cnp: "น้ำพริกอ่อง",
            cny: "แกงฮังเล",
            cnf: "ไข่ป่าม",
    
            css: "แกงส้ม",
            csp: "คั่วกลิ้ง",
            csy: "แกงไตปลา",
            csf: "หมูทอดเครื่อง",
    
            ces: "ต้มแซ่บ , แกงเลียง",
            cep: "อึ่งไข่ผัดเผ็ด",
            cey: "แกงอ่อม",
            cef: "ลาบทอด",
    
            cms: "",
            cmp: "",
            cmy: "",
            cmf: "",
    
        // Sweet
            wns: "",
            wnp: "",
            wny: "",
            wnf: "",
    
            wss: "",
            wsp: "",
            wsy: "",
            wsf: "",
    
            wes: "",
            wep: "",
            wey: "",
            wef: "",
    
            wms: "",
            wmp: "",
            wmy: "",
            wmf: "",
    

        // Spice
            pns: "",
            pnp: "",
            pny: "",
            pnf: "",
    
            pss: "",
            psp: "",
            psy: "",
            psf: "",
    
            pes: "",
            pep: "",
            pey: "",
            pef: "",
    
            pms: "",
            pmp: "",
            pmy: "",
            pmf: "",
    
    
        // Zab
            zns: "",
            znp: "",
            zny: "",
            znf: "",
    
            zss: "",
            zsp: "",
            zsy: "",
            zsf: "",
    
            zes: "",
            zep: "",
            zey: "",
            zef: "",
    
            zms: "",
            zmp: "",
            zmy: "",
            zmf: "",
    
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
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "south") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "esan") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "mid") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        }
        
    } else if (taste === "sweet") {
        if (region === "north") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "south") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "esan") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "mid") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        }

    } else if (taste === "spices") {
        if (region === "north") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "south") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "esan") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "mid") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        }

    } else if (taste === "zab") {
        if (region === "north") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "south") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "esan") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        } else if (region === "mid") {
            if (type === "soup") {
                result = "Tom Yum Soup";
            } else if (type === "puff") {
                result = "Stir-Fried Basil Chicken";
            } else if (type === "curry") {
                result = "Green Curry";
            } else if (type === "fries") {
                result = "Deep-Fried Chicken Wings";
            }
        }
    }

    // Display the predicted menu
    document.getElementById("result").innerHTML = result;
}
