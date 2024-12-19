var cartUrl = $("#cartUrl").val();
var animalEncounterUrl = $("#animalEncounterUrl").val();
var dataLayerEventUrl = $("#dataLayerEventUrl").val();
var securePayUrl = $("#securePayUrl").val();
var promoCodeUrl = $("#promoCodeUrl").val();
var checkSoldOutDaysUrl = $("#checkSoldOutDaysUrl").val();
var checkSoldOutDaysChangeDateUrl = $("#checkSoldOutDaysChangeDateUrl").val();
var reCaptchaVerifyUrl = $("#reCaptchaVerifyUrl").val();
var captureFailAttemptUrl = $("#captureFailAttemptUrl").val();
var threeDSCardVerifyUrl = $("#threeDSCardVerifyUrl").val();
var getStateDataUrl = $("#getStateDataUrl").val();

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$(function () {

    history.navigationMode = 'compatible';
    $(".previous-page").on('click', function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        window.history.back();
    });

    var checkedValue = $('#ExpressPost:checked').val();
    //console.log(checkedValue);

    if (checkedValue) {
        //console.log('entered address container');
        var addressContainer = $('#Address-Container');
        addressContainer.toggleClass('invisible');
    }
    
    $("#ExpressPost").click(function () {
        LoadShoppingCart();

        //Display additional container for address info
        var addressContainer = $('#Address-Container');

        addressContainer.toggleClass('invisible');
    });

    //var btnPromoCodeButton = document.getElementById("PromoCodeButton");
    //if (btnPromoCodeButton) {
    //    btnPromoCodeButton.addEventListener("click", function (event) {
    //        console.log('PromoCodeButton Clicked')
    //        event.preventDefault();
    //        ApplyPromoCode('Code'); return false;
    //    });
    //}

    //var btnPromoCodeButton = document.getElementById("PromoCodeButton");
    //if (btnPromoCodeButton) {
    //    btnPromoCodeButton.addEventListener("click", PromoCodeButtonClick);
    //}

    //$("#PromoCodeButton").click(function () {
    //    console.log('PromoCodeButton Clicked')
    //    event.preventDefault();
    //    ApplyPromoCode('Code'); return false;
    //});

    //$("#PromoCodeButton").click(PromoCodeButtonClick);

    // Above gets lost on _Cart partial view reload (on LoadShoppingCart() call).
    // Need to use a delegated event handler on element that is present at time the delegated event handler is attached.
    // This means it can process events from descendant elements that are added to the document at a later time. For e.g.
    // $("#CartContainer").on("click", ".promo-code-button", PromoCodeButtonClick);
    // Add to javascript on ready in pages that include _Cart partial view, i.e. tickets, bookingdate, extras, payment

    console.log("document ready!");
});

function PromoCodeButtonClick(event) {
    console.log('PromoCodeButton Clicked')
    event.preventDefault();
    ApplyPromoCode('Code'); return false;
}

// Will send a postback to the controller which will attempt to get a promo code from the rest API and apply it to the basket items
// The total will then be updated.
function ApplyPromoCode(codeType) {

    console.log('Entered ApplyPromoCode');

    //sets the model value for the code type
    //this determines if it's a CC bin number change or a code that has been entered
    $("#CodeType").val(codeType);

    var button = $("#PromoCodeButton");
    button.attr('disabled', 'disabled');

    LoadShoppingCart();

}

function LoadShoppingCart() {

    //Grab the data from the Tickets Page
    var formData = $("#ticketsForm").serialize();

    //If no data present, the request may have come from the gift page
    if (formData === "") {
        formData = $("#giftForm").serialize();
    }

    //If no data present, the request may have come from the mates rates page
    if (formData === "") {
        formData = $("#matesRatesForm").serialize();
    }

    //If no data present, the request may have come from the booking date page
    if (formData === "") {
        formData = $("#bookingDateForm").serialize();
    }

    //If no data present, the request may have come from the extras page
    if (formData === "") {
        formData = $("#extrasForm").serialize();
    }

    //If no data present, the request must have come from the payment page
    if (formData === "") {
        formData = $("#paymentForm").serialize();
    }

    //console.log(formData);

    $.ajax({
        type: "POST",
        url: cartUrl,
        data: formData,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "html",
        success: function (response) {
            if (response != null) {

                //console.log(response);

                //Find the ID of CartContainer and update the HTML
                $("#CartContainer").html(response);

            }
            else {
                alert("Cart - Something went wrong");
            }
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }
    });

}


function ApplyPaymentMethod(paymentMethod) {

    //console.log('ApplyPaymentMethod ' + paymentMethod);

    var button = $("#paymentSubmit");

    if (paymentMethod === 'Card') {
        button.html('Submit Payment');
        location.reload();
    }
    else {
        button.html('Continue to Zip');
        $("#BinCode").val('');
        $("#CardType").val('');
        ApplyPromoCode('Code');
    }

    //If no data present, the request must have come from the payment page
    formData = $("#paymentForm").serialize();

    $.ajax({
        type: "POST",
        url: securePayUrl,
        data: formData,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "html",
        success: function (response) {
            if (response != null) {
                //Find the ID of CartContainer and update the HTML
                $("#PaymentGatewayContainer").html(response);

            }
            else {
                alert("PaymentGatewayContainer - Something went wrong");
            }
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }
    });
}


function pushDataLayerEvent(event, formData, itemName, addOnName) {

    // New GTM Tracking code

    console.log('pushDataLayerEvent: event = ' + event);
    //console.log(formData);

    $.ajax({
        type: "POST",
        url: dataLayerEventUrl,
        data: formData + "&eventToPush=" + encodeURIComponent(event) + "&itemName=" + encodeURIComponent(itemName) + "&addOnName=" + encodeURIComponent(addOnName),
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response != null) {

                //console.log(response);
                //console.log(JSON.stringify(response));
                console.log(JSON.stringify(response, null, 2));

                dataLayer.push(response);

            }
            else {
                console.log('itemList - Something went wrong');
            }
        },
        failure: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });

}