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
    <link rel="icon" href="images/logo.png" type="image/ico">
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
                <div class="logo"><a href="index.php"><img src="images/logo.png"></a></div>
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
                                        <div class="price d-flex flex-row align-items-center">
                                            <span class="act-price" id="price">RM20</span>
                                            <input type="hidden" value="" id="price-input" name="price_input">
                                            <div class="ml-2"> <small class="dis-price" id="disprice">RM59</small>
                                                <span>40%
                                                    OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="about">It's one of the most important days of your life and we understand
                                        if you want everything to be perfect. Get the vibes for your wedding right from
                                        the start with the custom wedding card of your dreams.
                                    </p>
                                    <p style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                                        Perfect for: <br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;• Holiday greetings <br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;• Invitations <br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;• Impressing everyone
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
                                                    <input type="radio" name="print" value="3" checked
                                                        onchange="hideOtherOption()" id="printboth">
                                                    <span>Full Color Front & Back</span>
                                                </label>
                                            </div>
                                            <div class="col-md-6">
                                                <div id="oneside">
                                                    <h6 class="text-uppercase"><b>Print Only One Side</b></h6>
                                                    <label class="radio">
                                                        <input type="radio" name="print" value="3"
                                                            onchange="hideOtherOption()" id="printone">
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
                                                                onchange="hideOtherOption()" id="type1"
                                                                value="Art">ArtCard 260gsm</a>
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
                                                                id="type1" onchange="hideOtherOption()">Art Card
                                                                260gsm</a>
                                                            <a class="dropdown-item" href="#"
                                                                onclick="changeButtonText2(this); return false;"
                                                                id="type2" onchange="hideOtherOption()">Color Paper
                                                                80gsm</a>
                                                            <a class="dropdown-item" href="#"
                                                                onclick="changeButtonText2(this); return false;"
                                                                id="type3" onchange="hideOtherOption()">Simili 70gsm</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-6" id="envelope">
                                                <h6 class="text-uppercase"><b>Envelope</b></h6>
                                                <div class="dropdown" style="display:inline-block;">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                        id="dropdownMenuButton1" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false"
                                                        style="background-color: #f88111; color: #fff; border-color: #f88111 ">
                                                        <span>CHOOSE ENVELOPE</span>
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                                                        style="background-color: white; color:  #ff7700;">
                                                        <a class="dropdown-item" href="#"
                                                            onclick="changeButtonText1(this); return false;">With
                                                            Envelope</a>
                                                        <a class="dropdown-item" href="#"
                                                            onclick="changeButtonText1(this); return false;">Without
                                                            Envelope</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <h6 class="text-uppercase"><b>Attach your design or choose from our <a href="#"
                                                    data-toggle="modal" data-target="#Template"
                                                    style="color: #ff7700;">template</a></b></h6>
                                        <input class="form-input" type="file" id="formFile">
                                    </div>

                                    <div class="sizes mt-5">
                                        <h6 class="text-uppercase"><b>Quantity</b></h6>
                                        <label class="radio">
                                            <input type="radio" name="quantity" value="100" onchange="hideOtherOption()"
                                                id="quantity1" style="display: none;">
                                            <span>100</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="quantity" value="200" onchange="hideOtherOption()"
                                                id="quantity2">
                                            <span>200</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="quantity" value="400" onchange="hideOtherOption()"
                                                id="quantity3">
                                            <span>400</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="quantity" value="600" onchange="hideOtherOption()"
                                                id="quantity4">
                                            <span>600</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="quantity" value="300" onchange="hideOtherOption()"
                                                id="quantity6" style="display: none;">
                                            <span>300</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="quantity" value="500" onchange="hideOtherOption()"
                                                id="quantity7" style="display: none;">
                                            <span>500</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="quantity" value="700" onchange="hideOtherOption()"
                                                id="quantity8" style="display: none;">
                                            <span>700</span>
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="quantity" value="1000"
                                                onchange="hideOtherOption()" id="quantity5">
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
    <!-- modal section start -->
    <div class="modal fade" id="privacyPolicy" tabindex="-1" role="dialog" aria-labelledby="privacyPolicyLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #f88111;">
                    <h5 class="modal-title w-100 text-center">Privacy Policy</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p>
                        EYS takes user privacy very seriously. <b>Please read the following carefully.</b>
                        This privacy policy applies to EYS.
                        This policy covers how EYS treats personal information provided by you to EYS, including
                        information
                        related to
                        your past use of EYS products and services. Personal information is information about you that
                        is
                        personally
                        identifiable including your name, address, email or telephone number or any other information.
                        This policy does not apply to the practices of companies that EYS does not own or control, or to
                        people that EYS does not employ or manage.
                        <br><br>
                        Information collection and use
                        EYS may store personal information upon your registration with us, during your orders and during
                        your
                        visits to
                        our site.
                        Information such as your name, email address, birth date, gender, occupation, and industry is
                        required
                        during
                        registration. For some products and services, we might also ask for your address, telephone
                        number and
                        ID
                        number. <br><br>
                        EYS automatically receives and records information from your computer and browser, including
                        your IP
                        address, EYS cookie information, software and hardware attributes, and the pages you request.
                        EYS uses such information for the following general purposes: to customize the advertising and
                        content
                        you see, fulfil your requests for products and services, improve our services, contact you,
                        conduct
                        research, and provide
                        anonymous reporting.
                        <br><br>
                        <b
                            style="font-size: larger; font-weight: 3000; color: black; align-items: center; text-align: center;">---
                            Information sharing and disclosure ---</b>
                        <br>
                        <br>
                        EYS does not rent, sell, or share personal information about you with other people or
                        non-affiliated
                        companies
                        except upon your request for products or services, with your permission, or under the following
                        circumstances: <br><br>
                        - We provide the information to trusted partners who work on behalf of or with EYS under
                        confidentiality
                        agreements. These companies may use your personal information to help EYS communicate with you
                        about
                        offers from EYS.<br>
                        - We respond to subpoenas, court orders, or legal process, or to establish or exercise our legal
                        rights or to
                        defend against legal claims.<br>
                        - We believe it is necessary to share information in order to investigate, prevent, or take
                        action
                        regarding illegal activities, suspected fraud, situations involving potential threats to the
                        physical
                        safety of any person or violations of EYS's terms.<br>
                        - We transfer information about you if EYS is acquired by or merged with another company. In the
                        event
                        of this, EYS will notify you in advance.<br>
                        - EYS displays targeted advertisements based on personal information. Advertisers (including ad
                        serving
                        companies) may assume that people who interact with, view, or click targeted ads meet the
                        targeting
                        criteria.<br>
                        - EYS does not provide any personal information to the advertiser when you interact with or view
                        a
                        targeted ad. However, by interacting with or viewing an ad you are consenting to the possibility
                        that
                        the advertiser will make
                        the assumption that you meet their requirements.<br>
                        - EYS advertisers include financial service providers (such as banks, insurance agents, stock
                        brokers
                        and
                        mortgage lenders) and non-financial companies (such as stores, airlines, and software
                        companies).<br>
                        - According to your preferences, EYS would show your customer ID under certain circumstances
                        (for
                        example in EYS discussion chat) as well as your personal information on your EYS account
                        information
                        page
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="Disclaimer" tabindex="-1" role="dialog" aria-labelledby="DisclaimerLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #f88111;">
                    <h5 class="modal-title w-100 text-center">Disclaimer Clause</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p>
                        1. EYS makes every effort to ensure that information on our product and services provided by
                        www.eyssolutions.com.my is correct. However, not all errors may not be corrected in time, and
                        EYS will
                        not be responsible
                        errors, omissions or misstatements or misrepresentations whether express or implied.

                        <br><br>
                        2. EYS is not responsible for any accident error omissions, negligence, interruption, errors in
                        transmission or
                        reception, computer virus infection, defamation, contract damage, copyright or intellectual
                        property
                        rights
                        infringement and any loss caused. Which direct or indirect cause by our website information, our
                        services and
                        product.
                        <br><br>
                        3. Once you use by www.eyssolutions.com.my, you are agreeing that means you have to accept
                        unconditionally the exemption clause contained in any EYS products and services from time to
                        time
                        without prior notice to you under the terms of the above may be modify or amendments.
                        <br><br>
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="Payment" tabindex="-1" role="dialog" aria-labelledby="PaymentLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #f88111;">
                    <h5 class="modal-title w-100 text-center">Payment Guide</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>
                        1. Please make full payment when you placing an order.
                        <br><br>
                        2. Our company need maximum two to three working days to confirm the payment on online interbank
                        fund
                        transfer. (Example: Maybank account transfer to our Public Bank account)
                        <br><br>
                        3. For customers who use ATM cash deposit, transfer, or cheque deposit after bank operation
                        hours, our
                        company will need 1 day to confirm the payment.
                        <br><br>
                        4. Customers who made the payment please attached the payment slip.
                        <br><br>
                        5. Customers who made order and didn’t collect the goods within 30 days, our company will not
                        keep the
                        goods, while the deposits and payments will not be refund and will dispose the related goods.
                        <br><br>
                        6. Customers are advised to check the goods quantity and quality immediately after collect the
                        goods,
                        if there is an error, please visit our company within seven days or call/WhatsApp 013-7275315 to
                        contact our staff, after the within period our company will not be accepted.
                        <br><br>
                        7. If customers need to claim any order, our company will only accept reprints and refund
                        related
                        payment, our
                        company will not be responsible for any customer loss.
                        Note: Terms change without prior notice.

                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="Booking" tabindex="-1" role="dialog" aria-labelledby="BookingLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #f88111;">
                    <h5 class="modal-title w-100 text-center">Booking Cancellation and Refund Policy</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <img src="images/booking.jpg" alt="">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="Template" tabindex="-1" role="dialog" aria-labelledby="carouselModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #f88111;">
                    <h5 class="modal-title  w-100 text-center" id="carouselModalLabel" style="color: #eee;">Choose your
                        template...</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-carousel">
                        <div class="owl-carousel owl-2 owl-2-style">
                            <div class="media-29101">
                                <a href="#" onclick="chooseTemplate(event,1); return false;"><img
                                        src="images/image2.jpg" alt="Image" class="img-fluid"></a>
                                <h3><a href="#">Template 1</a></h3>
                            </div>
                            <div class="media-29101">
                                <a href="#" onclick="chooseTemplate(event,2); return false;">
                                    <img src="images/image2.jpg" alt="Image" class="img-fluid"></a>
                                <h3><a href="#">Template 2</a></h3>
                            </div>
                            <div class="media-29101">
                                <a href="#" onclick="chooseTemplate(event,3); return false;"><img
                                        src="images/image2.jpg" alt="Image" class="img-fluid"></a>
                                <h3><a href="#">Template 3</a></h3>
                            </div>
                            <div class="media-29101">
                                <a href="#" onclick="chooseTemplate(event,4); return false;"><img
                                        src="images/image2.jpg" alt="Image" class="img-fluid"></a>
                                <h3><a href="#">Template 4</a></h3>
                            </div>
                            <div class="media-29101">
                                <a href="#" onclick="chooseTemplate(event,5); return false;"><img
                                        src="images/image2.jpg" alt="Image" class="img-fluid"></a>
                                <h3><a href="#">Template 5</a></h3>
                            </div>
                            <div class="media-29101">
                                <a href="#" onclick="chooseTemplate(event,6); return false;"><img
                                        src="images/image2.jpg" alt="Image" class="img-fluid"></a>
                                <h3><a href="#">Template 6</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 text-center" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                        <h2 class="text-uppercase" style="color: #ff7700;"><b>CARD DETAILS</b></h2>
                        <div class="row">
                            <div class="col-md-6 text-center">
                                <h6 class="text-uppercase"><b>groom name</b></h6>
                                <input type="text" name="groomname" id="groomname">
                            </div>
                            <div class="col-md-6 text-center">
                                <div id="oneside">
                                    <h6 class="text-uppercase"><b>bride name</b></h6>
                                    <input type="text" name="bridename" id="bridename">
                                </div>
                            </div>
                        </div>
                        <div class="row" style="padding: 2vh 0;">
                            <div class="col-md-6 text-center">
                                <h6 class="text-uppercase"><b>Address</b></h6>
                                <textarea name="" id="" cols="30" rows="3"></textarea>
                            </div>
                            <div class="col-md-6 text-center">
                                <div id="oneside">
                                    <h6 class="text-uppercase"><b>Notes</b></h6>
                                    <textarea name="" id="" cols="30" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal section end -->
    <!-- copyright section start -->
    <div class="copyright_section">
        <div class="container">
            <div class="social_icon">
                <ul>
                    <li><a href="https://www.facebook.com/eyssolutionss"><img src="images/fb-icon.png"></a></li>
                    <li><a href="https://www.instagram.com/eyssolutions/"><img src="images/instagram-icon.png"></a></li>
                    <li><a href="https://www.youtube.com/@eysstudio6925/featured"><img
                                src="images/youtube-icon.png"></a></li>
                    <li><a href="https://www.tiktok.com/@eyssolutions.printing?lang=en"><img
                                src="images/tiktok-icon.png"></a></li>
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
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
    <script>
        window.onload = function () {
            hideOtherOption();
        }
        var currentImageIndex = 0;
        var images = [
            "images/image2.jpg",
            "images/image3.jpg"
        ];

        function change_image(image) {
            currentImageIndex = images.indexOf(image.src);
            document.getElementById("main-image").src = image.src;
        }

        function chooseTemplate(data, value) {
            console.log(value);
            document.querySelectorAll('.media-29101 img').forEach(img => img.classList.remove('selected'));
            data.target.classList.add('selected');
        }


        $(document).ready(function () {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                loop: true,
                nav: true,
                margin: 10,
                autoplay: false, // disable autoplay
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    960: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                }
            });
            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY > 0) {
                    owl.trigger('next.owl');
                } else {
                    owl.trigger('prev.owl');
                }
                e.preventDefault();
            });
        });

        setInterval(function () {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            document.getElementById("main-image").src = images[currentImageIndex];
        }, 2000);
        document.addEventListener("DOMContentLoaded", function (event) {
            hideOtherOption();
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
            var priceInput = document.getElementById("price-input");
            var oneside = document.getElementById("oneside");
            var type1 = document.getElementById("first");
            var type2 = document.getElementById("second");
            var printboth = document.getElementById("printboth");
            var printone = document.getElementById("printone");

            var size1 = document.getElementById("size1");
            var size2 = document.getElementById("size2");
            var size3 = document.getElementById("size3");
            var size4 = document.getElementById("size4");
            var envelope = document.getElementById("envelope");

            var quantity1 = document.getElementById("quantity1");
            var quantity2 = document.getElementById("quantity2");
            var quantity3 = document.getElementById("quantity3");
            var quantity4 = document.getElementById("quantity4");
            var quantity5 = document.getElementById("quantity5");
            var quantity6 = document.getElementById("quantity6");
            var quantity7 = document.getElementById("quantity7");
            var quantity8 = document.getElementById("quantity8");

            if (selectedValue === ("Art Card 260gsm")) {
                envelope.style.display = "block";
            }

            if (type2.parentElement.style.display === "none") {
                envelope.style.display = "block";
                var button = document.getElementById("dropdownMenuButton");
                if (type1 === "none") {
                    var button = document.getElementById("dropdownMenuButton2");
                    button.innerHTML = "CHOOSE PAPER TYPE";
                    selectedValue2 = "";
                }
            } else {
                if (selectedValue2 === ("Simili 70gsm") || selectedValue2 === ("Color Paper 80gsm")) {
                    envelope.style.display = "none";
                } else {
                    envelope.style.display = "block";
                }
            }


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
                priceInput.value = "RM277.80";
            }
            else if (size1.checked && quantity3.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM681.80";
                price.innerHTML = "RM487.00";
                priceInput.value = "RM487.00";
            }
            else if (size1.checked && quantity4.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM818.44";
                price.innerHTML = "RM584.60";
                priceInput.value = "RM584.60";
            } else if (size1.checked && quantity5.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM1,092.28";
                price.innerHTML = "RM780.20";
                priceInput.value = "RM780.20";
            } else if (size1.checked && quantity2.checked) {
                disprice.innerHTML = "RM369.32";
                price.innerHTML = "RM263.80";
                priceInput.value = "RM263.80";
            }
            else if (size1.checked && quantity3.checked) {
                disprice.innerHTML = "RM644.40";
                price.innerHTML = "RM459.00";
                priceInput.value = "RM459.00";
            }
            else if (size1.checked && quantity4.checked) {
                disprice.innerHTML = "RM760.36";
                price.innerHTML = "RM542.60";
                priceInput.value = "RM542.60";
            } else if (size1.checked && quantity5.checked) {
                disprice.innerHTML = "RM994.28";
                price.innerHTML = "RM710.20";
                priceInput.value = "RM710.20";
            } else if (size2.checked && quantity2.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM450.80";
                price.innerHTML = "RM322.00";
                priceInput.value = "RM322.00";
            }
            else if (size2.checked && quantity3.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM796.18";
                price.innerHTML = "RM568.70";
                priceInput.value = "RM568.70";
            }
            else if (size2.checked && quantity4.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM953.68";
                price.innerHTML = "RM681.20";
                priceInput.value = "RM681.20";
            } else if (size2.checked && quantity5.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM1,268.40";
                price.innerHTML = "RM906.00";
                priceInput.value = "RM906.00";
            }
            else if (size2.checked && quantity2.checked) {
                disprice.innerHTML = "RM432.80";
                price.innerHTML = "RM308.00";
                priceInput.value = "RM308.00";
            }
            else if (size2.checked && quantity3.checked) {
                disprice.innerHTML = "RM756.98";
                price.innerHTML = "RM540.70";
                priceInput.value = "RM540.70";
            }
            else if (size2.checked && quantity4.checked) {
                disprice.innerHTML = "RM854.88";
                price.innerHTML = "RM639.20";
                priceInput.value = "RM639.20";
            } else if (size2.checked && quantity5.checked) {
                disprice.innerHTML = "RM1160.40";
                price.innerHTML = "RM836.00";
                priceInput.value = "RM836.00";
            }
            else if (size3.checked && quantity2.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM450.80";
                price.innerHTML = "RM322.00";
                priceInput.value = "RM322.00";
            }
            else if (size3.checked && quantity3.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM796.18";
                price.innerHTML = "RM568.70";
                priceInput.value = "RM568.70";
            }
            else if (size3.checked && quantity4.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM953.68";
                price.innerHTML = "RM681.20";
                priceInput.value = "RM681.20";
            } else if (size3.checked && quantity5.checked && selectedValue1 === ("With Envelope")) {
                disprice.innerHTML = "RM1,268.40";
                price.innerHTML = "RM906.00";
                priceInput.value = "RM906.00";
            }
            else if (size3.checked && quantity2.checked) {
                disprice.innerHTML = "RM432.80";
                price.innerHTML = "RM308.00";
                priceInput.value = "RM308.00";
            }
            else if (size3.checked && quantity3.checked) {
                disprice.innerHTML = "RM756.98";
                price.innerHTML = "RM540.70";
                priceInput.value = "RM540.70";
            }
            else if (size3.checked && quantity4.checked) {
                disprice.innerHTML = "RM854.88";
                price.innerHTML = "RM639.20";
                priceInput.value = "RM639.20";
            } else if (size3.checked && quantity5.checked) {
                disprice.innerHTML = "RM1160.40";
                price.innerHTML = "RM836.00";
                priceInput.value = "RM836.00";
            } else if (size4.checked && quantity1.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM105.00";
                price.innerHTML = "RM75.00";
                priceInput.value = "RM75.00";
            } else if (size4.checked && quantity1.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM114.80";
                price.innerHTML = "RM82.00";
                priceInput.value = "RM82.00";
            } else if (size4.checked && quantity1.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM140.00";
                price.innerHTML = "RM100.00";
                priceInput.value = "RM100.00";
            } else if (size4.checked && quantity1.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM149.80";
                price.innerHTML = "RM107.00";
                priceInput.value = "RM107.00";
            } else if (size4.checked && quantity6.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM264.60";
                price.innerHTML = "RM189.00";
                priceInput.value = "RM189.00";
            } else if (size4.checked && quantity6.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM294.00";
                price.innerHTML = "RM210.00";
                priceInput.value = "RM210.00";
            } else if (size4.checked && quantity6.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM369.60";
                price.innerHTML = "RM264.00";
                priceInput.value = "RM264.00";
            } else if (size4.checked && quantity6.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM399.00";
                price.innerHTML = "RM285.00";
                priceInput.value = "RM285.00";
            } else if (size4.checked && quantity7.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM399.00";
                price.innerHTML = "RM285.00";
                priceInput.value = "RM285.00";
            } else if (size4.checked && quantity7.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM448.00";
                price.innerHTML = "RM320.00";
                priceInput.value = "RM320.00";
            } else if (size4.checked && quantity7.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM574.00";
                price.innerHTML = "RM410.00";
                priceInput.value = "RM410.00";
            } else if (size4.checked && quantity7.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM623.00";
                price.innerHTML = "RM445.00";
                priceInput.value = "RM445.00";
            } else if (size4.checked && quantity8.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM490.00";
                price.innerHTML = "RM350.00";
                priceInput.value = "RM350.00";
            } else if (size4.checked && quantity8.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM558.60";
                price.innerHTML = "RM399.00";
                priceInput.value = "RM399.00";
            } else if (size4.checked && quantity8.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM735.00";
                price.innerHTML = "RM525.00";
                priceInput.value = "RM525.00";
            } else if (size4.checked && quantity8.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM803.60";
                price.innerHTML = "RM574.00";
                priceInput.value = "RM574.00";
            } else if (size4.checked && quantity5.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printone.checked) {
                disprice.innerHTML = "RM672.00";
                price.innerHTML = "RM480.00";
                priceInput.value = "RM480.00";
            } else if (size4.checked && quantity5.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printone.checked) {
                disprice.innerHTML = "RM770.00";
                price.innerHTML = "RM550.00";
                priceInput.value = "RM550.00";
            } else if (size4.checked && quantity5.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("Without Envelope") && printboth.checked) {
                disprice.innerHTML = "RM980.00";
                price.innerHTML = "RM700.00";
                priceInput.value = "RM700.00";
            } else if (size4.checked && quantity5.checked && selectedValue2 === ("Art Card 260gsm") && selectedValue1 === ("With Envelope") && printboth.checked) {
                disprice.innerHTML = "RM1078.00";
                price.innerHTML = "RM770.00";
                priceInput.value = "RM770.00";
            }//Simili
            else if (size4.checked && quantity1.checked && selectedValue2 === ("Simili 70gsm") && printone.checked) {
                disprice.innerHTML = "RM49.00";
                price.innerHTML = "RM35.00";
                priceInput.value = "RM35.00";
            } else if (size4.checked && quantity1.checked && selectedValue2 === ("Simili 70gsm") && printboth.checked) {
                disprice.innerHTML = "RM98.00";
                price.innerHTML = "RM70.00";
                priceInput.value = "RM70.00";
            }//300
            else if (size4.checked && quantity6.checked && selectedValue2 === ("Simili 70gsm") && printone.checked) {
                disprice.innerHTML = "RM126.00";
                price.innerHTML = "RM90.00";
                priceInput.value = "RM90.00";
            } else if (size4.checked && quantity6.checked && selectedValue2 === ("Simili 70gsm") && printboth.checked) {
                disprice.innerHTML = "RM252.00";
                price.innerHTML = "RM180.00";
                priceInput.value = "RM180.00";
            }//500
            else if (size4.checked && quantity7.checked && selectedValue2 === ("Simili 70gsm") && printone.checked) {
                disprice.innerHTML = "RM140.00";
                price.innerHTML = "RM100.00";
                priceInput.value = "RM100.00";
            } else if (size4.checked && quantity7.checked && selectedValue2 === ("Simili 70gsm") && printboth.checked) {
                disprice.innerHTML = "RM280.00";
                price.innerHTML = "RM200.00";
                priceInput.value = "RM200.00";
            }//700
            else if (size4.checked && quantity8.checked && selectedValue2 === ("Simili 70gsm") && printone.checked) {
                disprice.innerHTML = "RM176.40";
                price.innerHTML = "RM126.00";
                priceInput.value = "RM126.00";
            } else if (size4.checked && quantity8.checked && selectedValue2 === ("Simili 70gsm") && printboth.checked) {
                disprice.innerHTML = "RM352.80";
                price.innerHTML = "RM252.00";
                priceInput.value = "RM252.00";
            }//1000
            else if (size4.checked && quantity5.checked && selectedValue2 === ("Simili 70gsm") && printone.checked) {
                disprice.innerHTML = "RM210.00";
                price.innerHTML = "RM150.00";
                priceInput.value = "RM150.00";
            } else if (size4.checked && quantity5.checked && selectedValue2 === ("Simili 70gsm") && printboth.checked) {
                disprice.innerHTML = "RM420.00";
                price.innerHTML = "RM300.00";
                priceInput.value = "RM300.00";
            }//Color Paper
            else if (size4.checked && quantity1.checked && selectedValue2 === ("Color Paper 80gsm") && printone.checked) {
                disprice.innerHTML = "RM63.00";
                price.innerHTML = "RM45.00";
                priceInput.value = "RM45.00";
            } else if (size4.checked && quantity1.checked && selectedValue2 === ("Color Paper 80gsm") && printboth.checked) {
                disprice.innerHTML = "RM112.00";
                price.innerHTML = "RM80.00";
                priceInput.value = "RM80.00";
            }//300
            else if (size4.checked && quantity6.checked && selectedValue2 === ("Color Paper 80gsm") && printone.checked) {
                disprice.innerHTML = "RM126.00";
                price.innerHTML = "RM120.00";
                priceInput.value = "RM120.00";
            } else if (size4.checked && quantity6.checked && selectedValue2 === ("Color Paper 80gsm") && printboth.checked) {
                disprice.innerHTML = "RM294.00";
                price.innerHTML = "RM210.00";
                priceInput.value = "RM210.00";
            }//500
            else if (size4.checked && quantity7.checked && selectedValue2 === ("Color Paper 80gsm") && printone.checked) {
                disprice.innerHTML = "RM210.00";
                price.innerHTML = "RM150.00";
                priceInput.value = "RM150.00";
            } else if (size4.checked && quantity7.checked && selectedValue2 === ("Color Paper 80gsm") && printboth.checked) {
                disprice.innerHTML = "RM350.00";
                price.innerHTML = "RM250.00";
                priceInput.value = "RM250.00";
            }//700
            else if (size4.checked && quantity8.checked && selectedValue2 === ("Color Paper 80gsm") && printone.checked) {
                disprice.innerHTML = "RM274.40";
                price.innerHTML = "RM196.00";
                priceInput.value = "RM196.00";
            } else if (size4.checked && quantity8.checked && selectedValue2 === ("Color Paper 80gsm") && printboth.checked) {
                disprice.innerHTML = "RM451.20";
                price.innerHTML = "RM322.00";
                priceInput.value = "RM322.00";
            } //1000
            else if (size4.checked && quantity5.checked && selectedValue2 === ("Color Paper 80gsm") && printone.checked) {
                disprice.innerHTML = "RM350.00";
                price.innerHTML = "RM250.00";
                priceInput.value = "RM250.00";
            } else if (size4.checked && quantity5.checked && selectedValue2 === ("Color Paper 80gsm") && printboth.checked) {
                disprice.innerHTML = "RM560.00";
                price.innerHTML = "RM400.00";
                priceInput.value = "RM400.00";
            }
            else if (size4.checked && quantity5.checked) {
                disprice.innerHTML = "RM420.00";
                price.innerHTML = "RM300.00";
                priceInput.value = "RM300.00";
            } else if (size4.checked && quantity6.checked) {
                disprice.innerHTML = "RM252.00";
                price.innerHTML = "RM180.00";
                priceInput.value = "RM180.00";
            } else if (size4.checked && quantity7.checked) {
                disprice.innerHTML = "RM280.00";
                price.innerHTML = "RM200.00";
                priceInput.value = "RM200.00";
            } else if (size4.checked && quantity8.checked) {
                disprice.innerHTML = "RM352.80";
                price.innerHTML = "RM252.00";
                priceInput.value = "RM252.00";
            } else if (size4.checked && quantity8.checked) {
                disprice.innerHTML = "RM352.80";
                price.innerHTML = "RM252.00";
                priceInput.value = "RM252.00";
            } else {
                disprice.innerHTML = "RM0.00";
                price.innerHTML = "RM0.00";
                priceInput.value = "RM0.00";
            }

        }
    </script>
</body>

</html>