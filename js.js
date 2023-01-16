function hideOtherOption() {
            var price = document.getElementById("price");
            var disprice = document.getElementById("disprice");
            var oneside = document.getElementById("oneside");
            var type1 = document.getElementById("first");
            var type2 = document.getElementById("second");
            var printboth = document.getElementById("printboth");
            var printone = document.getElementById("printone");
            console.log(selectedValue);
            console.log(selectedValue1);
            console.log(selectedValue2);
            var size1 = document.getElementById("size1");
            var size2 = document.getElementById("size2");
            var size3 = document.getElementById("size3");
            var size4 = document.getElementById("size4");

            var quantity1 = document.getElementById("quantity1");
            var quantity2 = document.getElementById("quantity2");
            var quantity3 = document.getElementById("quantity3");
            var quantity4 = document.getElementById("quantity4");
            var quantity5 = document.getElementById("quantity5");
            var quantity6 = document.getElementById("quantity6");
            var quantity7 = document.getElementById("quantity7");
            var quantity8 = document.getElementById("quantity8");

            if (size1.checked || size2.checked || size3.checked) {
                oneside.parentElement.style.display = "none";
                type1.parentElement.style.display = "flex";
                type2.parentElement.style.display = "none";

                quantity2.parentElement.style.display = "inline";
                quantity3.parentElement.style.display = "inline";
                quantity4.parentElement.style.display = "inline";
                quantity1.parentElement.style.display = "none";
                quantity6.parentElement.style.display = "none";
                quantity7.parentElement.style.display = "none";
                quantity8.parentElement.style.display = "none";
            } else {
                oneside.parentElement.style.display = "flex";
                type1.parentElement.style.display = "none";
                type2.parentElement.style.display = "flex";

                quantity2.parentElement.style.display = "none";
                quantity3.parentElement.style.display = "none";
                quantity4.parentElement.style.display = "none";
                quantity1.parentElement.style.display = "inline";
                quantity6.parentElement.style.display = "inline";
                quantity7.parentElement.style.display = "inline";
                quantity8.parentElement.style.display = "inline";
            }

            if (quantity1.checked || quantity6.checked || quantity7.checked || quantity8.checked) {
                size1.parentElement.style.display = "none";
                size2.parentElement.style.display = "none";
                size3.parentElement.style.display = "none";
            } else {
                size1.parentElement.style.display = "inline";
                size2.parentElement.style.display = "inline";
                size3.parentElement.style.display = "inline";
            }


            if (size1.checked && quantity2.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM388.92";
                price.innerHTML = "RM277.80";
            }
            else if (size1.checked && quantity3.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM681.80";
                price.innerHTML = "RM487.00";
            }
            else if (size1.checked && quantity4.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM818.44";
                price.innerHTML = "RM584.60";
            } else if (size1.checked && quantity5.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM1,092.28";
                price.innerHTML = "RM780.20";
            }else if (size1.checked && quantity2.checked) {
                disprice.innerHTML = "RM369.32";
                price.innerHTML = "RM263.80";
            }
            else if (size1.checked && quantity3.checked) {
                disprice.innerHTML = "RM644.40";
                price.innerHTML = "RM459.00";
            }
            else if (size1.checked && quantity4.checked) {
                disprice.innerHTML = "RM760.36";
                price.innerHTML = "RM542.60";
            } else if (size1.checked && quantity5.checked) {
                disprice.innerHTML = "RM994.28";
                price.innerHTML = "RM710.20";
            }else if (size2.checked && quantity2.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM450.80";
                price.innerHTML = "RM322.00";
            }
            else if (size2.checked && quantity3.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM796.18";
                price.innerHTML = "RM568.70";
            }
            else if (size2.checked && quantity4.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM953.68";
                price.innerHTML = "RM681.20";
            } else if (size2.checked && quantity5.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM1,268.40";
                price.innerHTML = "RM906.00";
            }
            else if (size2.checked && quantity2.checked) {
                disprice.innerHTML = "RM432.80";
                price.innerHTML = "RM308.00";
            }
            else if (size2.checked && quantity3.checked) {
                disprice.innerHTML = "RM756.98";
                price.innerHTML = "RM540.70";
            }
            else if (size2.checked && quantity4.checked) {
                disprice.innerHTML = "RM854.88";
                price.innerHTML = "RM639.20";
            } else if (size2.checked && quantity5.checked) {
                disprice.innerHTML = "RM1160.40";
                price.innerHTML = "RM836.00";
            }
            else if (size3.checked && quantity2.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM450.80";
                price.innerHTML = "RM322.00";
            }
            else if (size3.checked && quantity3.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM796.18";
                price.innerHTML = "RM568.70";
            }
            else if (size3.checked && quantity4.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM953.68";
                price.innerHTML = "RM681.20";
            } else if (size3.checked && quantity5.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM1,268.40";
                price.innerHTML = "RM906.00";
            }
            else if (size3.checked && quantity2.checked) {
                disprice.innerHTML = "RM432.80";
                price.innerHTML = "RM308.00";
            }
            else if (size3.checked && quantity3.checked) {
                disprice.innerHTML = "RM756.98";
                price.innerHTML = "RM540.70";
            }
            else if (size3.checked && quantity4.checked) {
                disprice.innerHTML = "RM854.88";
                price.innerHTML = "RM639.20";
            } else if (size3.checked && quantity5.checked) {
                disprice.innerHTML = "RM1160.40";
                price.innerHTML = "RM836.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM105.00";
                price.innerHTML = "RM75.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM114.80";
                price.innerHTML = "RM82.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM140.00";
                price.innerHTML = "RM100.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM149.80";
                price.innerHTML = "RM107.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM264.60";
                price.innerHTML = "RM189.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM294.00";
                price.innerHTML = "RM210.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM369.60";
                price.innerHTML = "RM264.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM399.00";
                price.innerHTML = "RM285.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM399.00";
                price.innerHTML = "RM285.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM448.00";
                price.innerHTML = "RM320.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM574.00";
                price.innerHTML = "RM410.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM623.00";
                price.innerHTML = "RM445.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM490.00";
                price.innerHTML = "RM350.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM558.60";
                price.innerHTML = "RM399.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM735.00";
                price.innerHTML = "RM525.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM803.60";
                price.innerHTML = "RM574.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM672.00";
                price.innerHTML = "RM480.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM770.00";
                price.innerHTML = "RM550.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM980.00";
                price.innerHTML = "RM700.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM1078.00";
                price.innerHTML = "RM770.00";
            }//Simili
            else if (size4.checked && quantity1.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM49.00";
                price.innerHTML = "RM35.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM58.80";
                price.innerHTML = "RM42.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM98.00";
                price.innerHTML = "RM70.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM107.80";
                price.innerHTML = "RM77.00";
            }//300
            else if (size4.checked && quantity6.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM126.00";
                price.innerHTML = "RM90.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM155.40";
                price.innerHTML = "RM111.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM252.00";
                price.innerHTML = "RM180.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM281.40";
                price.innerHTML = "RM201.00";
            }//500
            else if (size4.checked && quantity7.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM140.00";
                price.innerHTML = "RM100.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM189.00";
                price.innerHTML = "RM135.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM280.00";
                price.innerHTML = "RM200.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM329.00";
                price.innerHTML = "RM235.00";
            }//700
            else if (size4.checked && quantity8.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM176.40";
                price.innerHTML = "RM126.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM245.00";
                price.innerHTML = "RM175.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM352.80";
                price.innerHTML = "RM252.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM421.40";
                price.innerHTML = "RM301.00";
            }//1000
            else if (size4.checked && quantity5.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM210.00";
                price.innerHTML = "RM150.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM308.00";
                price.innerHTML = "RM220.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM420.00";
                price.innerHTML = "RM300.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Simili 70gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM518.00";
                price.innerHTML = "RM370.00";
            }//Color Paper
            else if (size4.checked && quantity1.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM63.00";
                price.innerHTML = "RM45.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM72.80";
                price.innerHTML = "RM52.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM112.00";
                price.innerHTML = "RM80.00";
            }else if (size4.checked && quantity1.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM121.80";
                price.innerHTML = "RM87.00";
            }//300
            else if (size4.checked && quantity6.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM126.00";
                price.innerHTML = "RM120.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM168.00";
                price.innerHTML = "RM141.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM294.00";
                price.innerHTML = "RM210.00";
            }else if (size4.checked && quantity6.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM323.40";
                price.innerHTML = "RM231.00";
            }//500
            else if (size4.checked && quantity7.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM210.00";
                price.innerHTML = "RM150.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM259.00";
                price.innerHTML = "RM185.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM350.00";
                price.innerHTML = "RM250.00";
            }else if (size4.checked && quantity7.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM399.00";
                price.innerHTML = "RM285.00";
            }//700
            else if (size4.checked && quantity8.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM274.40";
                price.innerHTML = "RM196.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM343.00";
                price.innerHTML = "RM245.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM451.20";
                price.innerHTML = "RM322.00";
            }else if (size4.checked && quantity8.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM519.40";
                price.innerHTML = "RM371.00";
            }//1000
            else if (size4.checked && quantity5.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM350.00";
                price.innerHTML = "RM250.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM448.00";
                price.innerHTML = "RM320.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM560.00";
                price.innerHTML = "RM400.00";
            }else if (size4.checked && quantity5.checked && selectedValue2 === ("Color Paper 80gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM658.00";
                price.innerHTML = "RM470.00";
            }
            else if (size4.checked && quantity5.checked) {
                disprice.innerHTML = "RM420.00";
                price.innerHTML = "RM300.00";
            } else if (size4.checked && quantity6.checked) {
                disprice.innerHTML = "RM252.00";
                price.innerHTML = "RM180.00";
            } else if (size4.checked && quantity7.checked) {
                disprice.innerHTML = "RM280.00";
                price.innerHTML = "RM200.00";
            } else if (size4.checked && quantity8.checked) {
                disprice.innerHTML = "RM352.80";
                price.innerHTML = "RM252.00";
            } else if (size4.checked && quantity8.checked) {
                disprice.innerHTML = "RM352.80";
                price.innerHTML = "RM252.00";
            }else {
                disprice.innerHTML = "RM0.00";
                price.innerHTML = "RM0.00";
            }
        }
