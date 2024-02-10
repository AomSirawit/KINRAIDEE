function predict() {
    const MenuData = {
        cns: "",
        cnp: "",
        cnc: "",
        cnf: "",
        css: "",
        csp: "",
        csf: "",
        ces: "",
        cep: "",
        

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
