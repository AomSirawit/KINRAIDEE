function predict() {
    // Get selected options
    var taste = document.getElementById("taste").value;
    var region = document.getElementById("region").value;
    var type = document.getElementById("type").value;

    // Decision tree to predict food menu
    var result = "";

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
