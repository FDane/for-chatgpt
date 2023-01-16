<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
        header("location: index.php");
        exit;
    } else {
        session_destroy();
        header("location: login.php");
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- mobile metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <!-- site metas -->
    <title>Invitation Card</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- bootstrap css -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="site.css">
    <!-- style css -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <!-- Responsive-->
    <link rel="stylesheet" href="css/responsive.css">
    <!-- fevicon -->
    <link rel="icon" href="images/fevicon.png" type="image/gif" />
    <!-- Scrollbar Custom CSS -->
    <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
    <!-- Tweaks for older IEs-->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
    <!-- owl stylesheets -->
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
        media="screen">

    <style>
        .card {
            border: none
        }

        .product {
            background-color: #eee
        }

        .brand {
            font-size: 13px
        }

        .act-price {
            color: #ff7700;
            font-weight: 700
        }

        .dis-price {
            text-decoration: line-through
        }

        .about {
            font-size: 14px
        }

        .color {
            margin-bottom: 10px
        }

        label.radio {
            cursor: pointer
        }

        label.radio input {
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            pointer-events: none
        }

        label.radio span {
            padding: 2px 9px;
            border: 2px solid #ff7700;
            display: inline-block;
            color: #ff7700;
            border-radius: 3px;
            text-transform: uppercase
        }

        label.radio input:checked+span {
            border-color: #ff7700;
            background-color: #ff7700;
            color: #fff
        }

        .btn-danger {
            background-color: #ff7700 !important;
            border-color: #ff7700 !important
        }

        .btn-danger:hover {
            background-color: #ff7700 !important;
            border-color: #ff7700 !important
        }

        .btn-danger:focus {
            box-shadow: none
        }

        .cart i {
            margin-right: 10px
        }
    </style>
</head>

<body>
    <!-- header section start -->
    <div class="header_section">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="logo"><a href="index.html"><img src="images/logo.png"></a></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="services.php">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="templates.php">Templates</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="products.php">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.php">Contact</a>
                        </li>
                    </ul>
                    <div class="profile">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <?php if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
                                    echo $_SESSION["username"];
                                } else {
                                    echo "LOGIN";
                                } ?>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <?php if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) { ?>
                                    <a class="dropdown-item" href="profile.php">View Profile</a>
                                    <a class="dropdown-item" href="edit-profile.html">Order Status</a>
                                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                                        <button class="dropdown-item" type="submit">Logout</button>
                                    </form>
                                <?php } else { ?>
                                    <a class="dropdown-item" href="login.php">Login</a>
                                    <a class="dropdown-item" href="signup.php">Sign up</a>
                                <?php } ?>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- header section end -->
    <br><br><br><br>

    <form action="cart.php?code=001" method="post">
        <div class="container mt-10 mb-10">
            <div class="row d-flex justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="images p-3">
                                    <div class="text-center p-4"> <img id="main-image" src="images/image2.jpg"
                                            width="100%" />
                                    </div>
                                    <div class="thumbnail text-center"> <img onclick="change_image(this)"
                                            src="images/image2.jpg" width="70"> <img onclick="change_image(this)"
                                            src="images/image3.jpg" width="70">
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-6">
                                <div class="product p-4">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <a href="products.php">
                                                <i class="fa fa-long-arrow-left"></i>
                                                <span class="ml-1">Back</span>
                                            </a>
                                        </div>
                                        <a href="cart.php"><i class="fa fa-shopping-cart text-muted"></i></a>
                                    </div>
                                    <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">CARD</span>
                                        <h5 class="text-uppercase">Invitation Card</h5>
                                        <div class="price d-flex flex-row align-items-center"><span class="act-price"
                                                id="price">RM20</span>
                                            <div class="ml-2"> <small class="dis-price" id="disprice">RM59</small>
                                                <span>40%
                                                    OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="about">Shop from a wide range of t-shirt from orianz. Pefect for your
                                        everyday
                                        use, you could pair it with a stylish pair of jeans or trousers complete the
                                        look.
                                    </p>

                                    <div class="sizes mt-5">
                                        <h6 class="text-uppercase"><b>Size of Card</b></h6>
                                        <label class="radio">
                                            <input type="radio" name="size" value="1" checked
                                                onchange="hideOtherOption()" id="size1">
                                            <span>182mm x 139mm</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="size" value="2" onchange="hideOtherOption()"
                                                id="size2">
                                            <span>150mm x 150mm</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="size" value="3" onchange="hideOtherOption()"
                                                id="size3">
                                            <span>210mm x 98mm</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="size" value="4" onchange="hideOtherOption()"
                                                id="size4">
                                            <span>A6</span>
                                        </label>
                                    </div>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h6 class="text-uppercase"><b>Print on Both Sides</b></h6>
                                                <label class="radio">
                                                    <input type="radio" name="print" value="3" checked onchange="hideOtherOption()" id="printboth">
                                                    <span>Full Color Front & Back</span>
                                                </label>
                                            </div>
                                            <div class="col-md-6">
                                                <div id="oneside">
                                                    <h6 class="text-uppercase"><b>Print Only One Side</b></h6>
                                                    <label class="radio">
                                                        <input type="radio" name="print" value="3" onchange="hideOtherOption()" id="printone">
                                                        <span>Full Color Front Only</span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="first">
                                                    <h6 class="text-uppercase"><b>Paper Type</b></h6>
                                                    <div class="dropdown" style="display:inline-block;">
                                                        <button class="btn btn-secondary dropdown-toggle" type="button"
                                                            id="dropdownMenuButton" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false"
                                                            style="background-color: #f88111; color: #fff; border-color: #f88111 ">
                                                            <span>CHOOSE PAPER TYPE</span>
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                                                            style="background-color: white; color: orange;">
                                                            <a class="dropdown-item" href="#"
                                                                onclick="changeButtonText(this); return false;"
                                                                onchange="hideOtherOption()" id="type1" value="Art">Art Card 260gsm</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6" style="display: none;">
                                                <div id="second">
                                                    <h6 class="text-uppercase"><b>Paper Type</b></h6>
                                                    <div class="dropdown" style="display:inline-block;">
                                                        <button class="btn btn-secondary dropdown-toggle" type="button"
                                                            id="dropdownMenuButton2" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false"
                                                            style="background-color: #f88111; color: #fff; border-color: #f88111 ">
                                                            <span>CHOOSE PAPER TYPE</span>
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                                                            style="background-color: white; color: orange;">
                                                            <a class="dropdown-item" href="#"
                                                                onclick="changeButtonText2(this); return false;"
                                                                id="type1" onchange="hideOtherOption()">Art Card 260gsm</a>
                                                            <a class="dropdown-item" href="#"
                                                                onclick="changeButtonText2(this); return false;"
                                                                id="type2" onchange="hideOtherOption()">Color Paper 80gsm</a>
                                                            <a class="dropdown-item" href="#"
                                                                onclick="changeButtonText2(this); return false;"
                                                                id="type3" onchange="hideOtherOption()">Simili 70gsm</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <h6 class="text-uppercase"><b>Envelope</b></h6>
                                                <div class="dropdown" style="display:inline-block;">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                        id="dropdownMenuButton1" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false"
                                                        style="background-color: #f88111; color: #fff; border-color: #f88111 ">
                                                        <span>CHOOSE ENVELOPE</span>
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                                                        style="background-color: white; color: orange;">
                                                        <a class="dropdown-item" href="#"
                                                            onclick="changeButtonText1(this); return false;">With Envelope</a>
                                                        <a class="dropdown-item" href="#"
                                                            onclick="changeButtonText1(this); return false;">Without Envelope</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <h6 class="text-uppercase"><b>Attach your design:</b></h6>
                                        <input class="form-input" type="file" id="formFile">
                                    </div>

                                    <div class="sizes mt-5">
                                        <h6 class="text-uppercase"><b>Quantity</b></h6>
                                        <label class="radio">
                                            <input type="radio" name="price" value="100" onchange="hideOtherOption()"
                                                id="quantity1" style="display: none;">
                                            <span>100</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="price" value="200" onchange="hideOtherOption()"
                                                id="quantity2">
                                            <span>200</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="price" value="400" onchange="hideOtherOption()"
                                                id="quantity3">
                                            <span>400</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="price" value="600" onchange="hideOtherOption()"
                                                id="quantity4">
                                            <span>600</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="price" value="300" onchange="hideOtherOption()"
                                                id="quantity6" style="display: none;">
                                            <span>300</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="price" value="500" onchange="hideOtherOption()"
                                                id="quantity7" style="display: none;">
                                            <span>500</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="price" value="700" onchange="hideOtherOption()"
                                                id="quantity8" style="display: none;">
                                            <span>700</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="price" value="1000" onchange="hideOtherOption()"
                                                id="quantity5">
                                            <span>1000</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="cart mt-4 align-items-center">
                                    <button class="btn btn-danger text-uppercase mr-2 px-4" name="add">Add to
                                        cart</button> <i class="fa fa-heart text-muted"></i> <i
                                        class="fa fa-share-alt text-muted"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </form>

    <br><br>

    <!-- footer section start -->
    <div class="footer_section layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="fooer_logo"><img src="images/footer-logo.png"></div>
                    <p class="footer_lorem_text">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by
                    </p>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <h1 class="customer_text">LET US HELP YOU</h1>
                    <p class="footer_lorem_text">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by
                    </p>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <h1 class="customer_text">INFORMATION</h1>
                    <p class="footer_lorem_text1">About Us<br>
                        Careers<br>
                        Sell on shopee<br>
                        Press & News<br>
                        Competitions<br>
                        Terms & Conditions
                    </p>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <h1 class="customer_text">OUR Design</h1>
                    <p class="footer_lorem_text">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by
                    </p>
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter your email" aria-label="Enter your email"
                    aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"><a href="#">Subscribe</a></span>
                </div>
            </div>
        </div>
    </div>
    <!--  footer section end -->
    <!-- copyright section start -->
    <div class="copyright_section">
        <div class="container">
            <div class="social_icon">
                <ul>
                    <li><a href="#"><img src="images/fb-icon.png"></a></li>
                    <li><a href="#"><img src="images/twitter-icon.png"></a></li>
                    <li><a href="#"><img src="images/instagram-icon.png"></a></li>
                    <li><a href="#"><img src="images/linkedin-icon.png"></a></li>
                </ul>
            </div>
            <p class="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html
                    Templates</a></p>
        </div>
    </div>
    <!-- copyright section end -->
    <!-- Javascript files-->
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
    <script src="js/plugin.js"></script>
    <!-- sidebar -->
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/custom.js"></script>
    <!-- javascript -->
    <script>
        window.onload = function () {
            hideOtherOption();
        }
        function change_image(image) {

            var container = document.getElementById("main-image");

            container.src = image.src;
        }
        document.addEventListener("DOMContentLoaded", function (event) {

        });

        var selectedValue, selectedValue1, selectedValue2;

        function changeButtonText(elem) {
            var button = document.getElementById("dropdownMenuButton");
            button.innerHTML = elem.innerHTML;
            selectedValue = elem.innerHTML;
            hideOtherOption();
        }

        function changeButtonText1(elem) {
            var button = document.getElementById("dropdownMenuButton1");
            button.innerHTML = elem.innerHTML;
            selectedValue1 = elem.innerHTML;
            hideOtherOption();
        }

        function changeButtonText2(elem) {
            var button = document.getElementById("dropdownMenuButton2");
            button.innerHTML = elem.innerHTML;
            selectedValue2 = elem.innerHTML;
            hideOtherOption();
        }

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
    </script>
    <script src="js/owl.carousel.js"></script>
    <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
</body>

</html>
