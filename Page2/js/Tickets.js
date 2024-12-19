
//Runs when the page is loaded, set the selected class on any element that has a value from before 
$(function () {

    //------------------------------------------------------------------//
    // New GTM Tracking code
    var validState = true;

    var errorMessageSpan = $("span.error-message.adult-validation-message");
    if (errorMessageSpan.length && errorMessageSpan.html() != '') {
        //console.log('invalid state: ' + errorMessageSpan.html());
        validState = false;
    }

    if (validState) {
        var formData = $("#ticketsForm").serialize();

        //If no data present, the request may have come from the gift page
        if (formData === "") {
            formData = $("#giftForm").serialize();
        }

        //If no data present, the request must have come from the mates rates page
        if (formData === "") {
            formData = $("#matesRatesForm").serialize();
        }

        pushDataLayerEvent('view_item', formData, '', '');
    }
    //------------------------------------------------------------------//

    history.navigationMode = 'compatible';

    $(".amount").each(function (i) {
        var currentValue = parseInt(this.innerText);
        if (currentValue > 0) {
            $(this).addClass('selected');
        }
    });

    $("#VisaHamperCouple input:checkbox").click(function () {

        var $chk = $(this);
        var quantity = $chk.parent().children('.hidden-amount');

        var itemAdded = true;

        if ($chk.is(":checked")) {

            // uncheck all and set quantity to 0
            $("#VisaHamperCouple input:checkbox").prop('checked', false);
            $("#VisaHamperCouple .hidden-amount").each(function () {
                var $this = $(this);
                $this.val(0);
            });

            // check the one we just clicked and set the quantity to 1
            $chk.prop("checked", true);
            quantity.val(1);

            itemAdded = true;
        }
        else {
            $chk.prop("checked", false);
            quantity.val(0);

            itemAdded = false;
        }

        //------------------------------------------------------------------//
        // New GTM Tracking code
        var formData = $("#ticketsForm").serialize();
        var addOnName = GetAddOnTypeDataLayer($chk);

        if (itemAdded) {
            pushDataLayerEvent('add_to_cart', formData, '', addOnName);
        }
        else {
            pushDataLayerEvent('remove_from_cart', formData, '', addOnName);
        }
        //------------------------------------------------------------------//

        LoadShoppingCart();
    });

    $("#VisaHamperFamily input:checkbox").click(function () {

        var $chk = $(this);
        var quantity = $chk.parent().children('.hidden-amount');

        var itemAdded = true;

        if ($chk.is(":checked")) {

            // uncheck all and set quantity to 0
            $("#VisaHamperFamily input:checkbox").prop('checked', false); 
            $("#VisaHamperFamily .hidden-amount").each(function () {
                var $this = $(this);
                $this.val(0);
            });

            // check the one we just clicked and set the quantity to 1
            $chk.prop("checked", true);
            quantity.val(1);

            itemAdded = true;
        }
        else {
            $chk.prop("checked", false);
            quantity.val(0);

            itemAdded = false;
        }

        //------------------------------------------------------------------//
        // New GTM Tracking code
        var formData = $("#ticketsForm").serialize();
        var addOnName = GetAddOnTypeDataLayer($chk);

        if (itemAdded) {
            pushDataLayerEvent('add_to_cart', formData, '', addOnName);
        }
        else {
            pushDataLayerEvent('remove_from_cart', formData, '', addOnName);
        }
        //------------------------------------------------------------------//

        LoadShoppingCart();
    });

    $(".add-amount").click(function () {

        var $this = $(this);
        //console.log($this.parent().parent().children('.amount'));

        var element = $this.parent().parent().children('.amount');
        //console.log(element.text());

        var hiddenElement = $this.parent().parent().children('.hidden-amount');
        //console.log(hiddenElement.val());

        var itemAdded = true;

        var currentValue = parseInt(element.text());

        var myTotalTickets = GetTotalItemsInCart();

        var myTotalBirthdayTickets = GetTotalBirthdayItemsInCart();

        var myTotalVisaTickets = GetTotalVisaItemsInCart();

        //do not add any more items to thebasket if the limit has already been hit
        if (myTotalTickets < 10) {

            if ($this.hasClass('Family1Adult2Child') || $this.hasClass('Family2Adult1Child')) {
                if ((currentValue >= 0) && (currentValue < 10)) {
                    currentValue = currentValue + 1;
                }
            }
            else if ($this.hasClass('Family2Adult2Child')) {
                if ((currentValue >= 0) && (currentValue < 10)) {
                    currentValue = currentValue + 1;
                }
            }
            else if ($this.hasClass('BirthdayAdultTicketSingle') || $this.hasClass('BirthdayChildTicketSingle')) {
                if ((currentValue >= 0) && (currentValue < 1) && myTotalBirthdayTickets < 1) {
                    currentValue = currentValue + 1;
                }
            }
            else if ($this.hasClass('Visa2Adult') || $this.hasClass('Visa2Adult2Child')) {
                if ((currentValue >= 0) && (currentValue < 1) && myTotalVisaTickets < 1) {
                    currentValue = currentValue + 1;
                }
            }
            else {
                if ((currentValue >= 0) && (currentValue < 10)) {
                    currentValue = currentValue + 1;
                }
            }
        }
        else {
            itemAdded = false;
        }

        //console.log(currentValue);
        element.html(currentValue);
        hiddenElement.val(currentValue);

        updateVisaAddOnSections();

        LoadShoppingCart();

        if (currentValue > 0) {
            element.addClass('selected');
        }

        //------------------------------------------------------------------//
        // New GTM Tracking code
        if (itemAdded) {

            var formData = $("#ticketsForm").serialize();

            //If no data present, the request may have come from the gift page
            if (formData === "") {
                formData = $("#giftForm").serialize();
            }

            //If no data present, the request must have come from the mates rates page
            if (formData === "") {
                formData = $("#matesRatesForm").serialize();
            }

            var itemName = GetItemTypeDataLayer($this);
            pushDataLayerEvent('add_to_cart', formData, itemName, '');
        }
        //------------------------------------------------------------------//

        //// Display upsell banner (Family1Adult2Child)
        //var upsell = $('.upsell');
        //if ($this.hasClass('Family1Adult2Child') && (currentValue > 0)) {
        //    upsell.fadeIn(300);

        //    $('html, body').animate({
        //        scrollTop: upsell.offset().top - 100
        //    }, 200);
        //}

    });

    $('.subtract-amount').click(function () {
        var $this = $(this);
        //console.log($this.parent().parent().children('.amount'));

        var element = $this.parent().parent().children('.amount');
        //console.log(element.text());

        var hiddenElement = $this.parent().parent().children('.hidden-amount');

        var itemRemoved = true;

        var currentValue = parseInt(element.text());

        if (currentValue > 0) {
            currentValue = currentValue - 1;
        }
        else {
            itemRemoved = false;
        }

        if (currentValue == 0) {
            element.removeClass('selected');
        }

        element.html(currentValue);
        hiddenElement.val(currentValue);

        updateVisaAddOnSections();

        LoadShoppingCart();

        //console.log(currentValue);
        element.html(currentValue);

        updateStaffTicket();

        //------------------------------------------------------------------//
        // New GTM Tracking code
        if (itemRemoved) {

            var formData = $("#ticketsForm").serialize();

            //If no data present, the request may have come from the gift page
            if (formData === "") {
                formData = $("#giftForm").serialize();
            }

            //If no data present, the request must have come from the mates rates page
            if (formData === "") {
                formData = $("#matesRatesForm").serialize();
            }

            var itemName = GetItemTypeDataLayer($this);
            pushDataLayerEvent('remove_from_cart', formData, itemName, '');
        }
        //------------------------------------------------------------------//

    });

    // Dismiss upsell banner
    $('.upsell .dismiss').click(function () {
        $('.upsell').hide().remove();
    });


    //Toggle the Tooltip showing
    // check if the zoo is dubbo and apply appropriate theme if it is
    var element = $('#concessionInfo');
    var blnDubboZoo = element.hasClass('dubbo');
    var zooTheme = 'taronga'
    if (blnDubboZoo) {
        zooTheme = 'dubbo'
    }

    tippy('.toggletip', {
        content: element.html(),
        allowHTML: true,
        theme: zooTheme,
        trigger: 'click',
        onClickOutside(instance, event) {
            hideOnClick: 'toggle'
        }
    });

    updateStaffTicket();

    updateVisaAddOnSections();

    $("#CartContainer").on("click", ".promo-code-button", PromoCodeButtonClick);

    //------------------------------------------------------------------//
    // New GTM Tracking code
    $('#ticketsForm .button-primary, #giftForm .button-primary, #matesRatesForm .button-primary').click(function () {

        var itemsInCart = true;

        if (GetTotalItemsInCart() == 0) {
            itemsInCart = false;
        }

        if (itemsInCart) {

            var formData = $("#ticketsForm").serialize();

            //If no data present, the request may have come from the gift page
            if (formData === "") {
                formData = $("#giftForm").serialize();
            }

            //If no data present, the request must have come from the mates rates page
            if (formData === "") {
                formData = $("#matesRatesForm").serialize();
            }

            pushDataLayerEvent('view_cart', formData, '', '');
        }
    });
    //------------------------------------------------------------------//

    console.log("document ready!");

});

function updateStaffTicket() {
    var staff = $("#Staff");
    if (staff.length && staff.val().toLowerCase() == "true" && GetTotalAdultIndividualItemsInCart() == 0) {
        $(".add-amount.AdultTicketSingle").click();
    }
}

function GetTotalAdultIndividualItemsInCart() {
    var totalTickets = 0;

    //get the total value of all items selected
    $(".amount").each(function (i) {
        var $this = $(this);

        var currentValue = parseInt(this.innerText);
        if (currentValue > 0) {

            if ($this.hasClass('AdultTicketSingle')) {
                totalTickets += currentValue
            }

        }
    });

    return totalTickets;
}

function GetTotalItemsInCart() {
    var totalTickets = 0;
        
    //get the total value of all items selected
    $(".amount").each(function (i) {
        var $this = $(this);

        var currentValue = parseInt(this.innerText);
        if (currentValue > 0) {

            if ($this.hasClass('Family1Adult2Child') || $this.hasClass('Family2Adult1Child')) {
                totalTickets += currentValue;
            }
            else if ($this.hasClass('Family2Adult2Child')) {
                totalTickets += currentValue;
            }
            else {
                totalTickets += currentValue
            }

        }
    });

    return totalTickets;
}

function GetTotalBirthdayItemsInCart() {
    var totalTickets = 0;

    //get the total value of all items selected
    $(".amount").each(function (i) {
        var $this = $(this);

        var currentValue = parseInt(this.innerText);
        if (currentValue > 0) {

            if ($this.hasClass('BirthdayAdultTicketSingle') || $this.hasClass('BirthdayChildTicketSingle')) {
                totalTickets += currentValue
            }

        }
    });

    return totalTickets;
}

function GetTotalVisaItemsInCart() {
    var totalTickets = 0;
    totalTickets = GetTotalVisaCoupleItemsInCart() + GetTotalVisaFamilyItemsInCart();
    return totalTickets;
}

function GetTotalVisaCoupleItemsInCart() {
    var totalTickets = 0;

    //get the total value of all items selected
    $(".amount").each(function (i) {
        var $this = $(this);

        var currentValue = parseInt(this.innerText);
        if (currentValue > 0) {

            if ($this.hasClass('Visa2Adult')) {
                totalTickets += currentValue
            }

        }
    });

    return totalTickets;
}


function GetTotalVisaFamilyItemsInCart() {
    var totalTickets = 0;

    //get the total value of all items selected
    $(".amount").each(function (i) {
        var $this = $(this);

        var currentValue = parseInt(this.innerText);
        if (currentValue > 0) {

            if ($this.hasClass('Visa2Adult2Child')) {
                totalTickets += currentValue
            }

        }
    });

    return totalTickets;
}


function updateVisaAddOnSections() {

    var visa = $('#Visa');

    if (visa.length && visa.val().toLowerCase() == "true") {

        var coupleSection = $('#VisaHamperCouple');
        var familySection = $('#VisaHamperFamily');

        //show the family hamper section if family ticket is selected.
        if (GetTotalVisaFamilyItemsInCart() > 0) {

            familySection.removeClass("invisible");

            //unselect any items in the couple section
            $("#VisaHamperCouple input:checkbox").each(function () {
                $(this).prop('checked', false);
            });

            //set the quantity to 0 for any items in the couple section
            $("#VisaHamperCouple .hidden-amount").each(function () {
                var $this = $(this);
                $this.val(0);
            });

            //hide the couple section
            if (!coupleSection.hasClass("invisible")) {
                coupleSection.addClass("invisible");
            }
        }
        //otherwise show the couple hamper option
        else {
            coupleSection.removeClass("invisible");

            //unselect any items in the family section
            $("#VisaHamperFamily input:checkbox").each(function () {
                $(this).prop('checked', false);
            });

            //set the quantity to 0 for any items in the couple section
            $("#VisaHamperFamily .hidden-amount").each(function () {
                var $this = $(this);
                $this.val(0);
            });

            //hide the family section
            if (!familySection.hasClass("invisible")) {
                familySection.addClass("invisible");
            }
        }

        //LoadShoppingCart();
    }
}

// Map basket item names to the add/remove controls for adding/removing tickets to/from basket.
// This is used to lookup the item details from the basket when pushing add_to_cart/remove_from_cart datalayer events.
// Doing this mapping here rather than adding a hidden element with the basket item name to the add/remove controls
// sections so there is a single place to look if we want to change the basket item names.
function GetItemTypeDataLayer($this) {

    //console.log('entered GetItemTypeDataLayer');

    var itemName = "Taronga Zoo - Adult";

    //----------------------- Gift Tickets -----------------------//

    if ($this.hasClass('GiftTicket') && $this.hasClass('sydney') && $this.hasClass('AdultTicketSingle')) {
        itemName = "Taronga Zoo - Adult Gift";
    }
    else if ($this.hasClass('GiftTicket') && $this.hasClass('sydney') && $this.hasClass('ChildTicketSingle')) {
        itemName = "Taronga Zoo - Child Gift";
    }
    else if ($this.hasClass('GiftTicket') && $this.hasClass('sydney') && $this.hasClass('ConcessionTicketSingle')) {
        itemName = "Taronga Zoo - Concession Gift";
    }
    else if ($this.hasClass('GiftTicket') && $this.hasClass('sydney') && $this.hasClass('InfantTicketSingle')) {
        itemName = "TZ Child Under 4 FOC";
    }
    else if ($this.hasClass('GiftTicket') && $this.hasClass('sydney') && $this.hasClass('Family1Adult2Child')) {
        itemName = "Family - 1 Adult & 2 Children Gift";
    }
    else if ($this.hasClass('GiftTicket') && $this.hasClass('sydney') && $this.hasClass('Family2Adult1Child')) {
        itemName = "Family - 2 Adults & 1 Child Gift";
    }
    else if ($this.hasClass('GiftTicket') && $this.hasClass('sydney') && $this.hasClass('Family2Adult2Child')) {
        itemName = "Family - 2 Adults & 2 Children Gift";
    }

    //----------------------- Sydney Tickets -----------------------//

    else if ($this.hasClass('sydney') && $this.hasClass('AdultTicketSingle')) {
        itemName = "Taronga Zoo - Adult";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('ChildTicketSingle')) {
        itemName = "Taronga Zoo - Child";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('ConcessionTicketSingle')) {
        itemName = "Taronga Zoo - Concession";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('InfantTicketSingle')) {
        itemName = "TZ - Child Under 4 FOC";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('BirthdayAdultTicketSingle')) {
        itemName = "TZ - Adult Birthday";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('BirthdayChildTicketSingle')) {
        itemName = "TZ - Child Birthday";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('Family1Adult2Child')) {
        itemName = "Family - 1 Adult & 2 Children";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('Family2Adult1Child')) {
        itemName = "Family - 2 Adults & 1 Child";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('Family2Adult2Child')) {
        itemName = "Family - 2 Adults & 2 Children";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('Visa2Adult')) {
        itemName = "Visa Couples Single Day Visit";
    }
    else if ($this.hasClass('sydney') && $this.hasClass('Visa2Adult2Child')) {
        itemName = "Visa Family Single Day Visit";
    }

    //----------------------- Mates Rates Tickets -----------------------//

    else if ($this.hasClass('MatesRatesTicket') && $this.hasClass('dubbo') && $this.hasClass('AdultTicketSingle')) {
        itemName = "TWPZ Mates Rates - Adult";
    }
    else if ($this.hasClass('MatesRatesTicket') && $this.hasClass('dubbo') && $this.hasClass('ChildTicketSingle')) {
        itemName = "TWPZ Mates Rates - Child";
    }
    else if ($this.hasClass('MatesRatesTicket') && $this.hasClass('dubbo') && $this.hasClass('InfantTicketSingle')) {
        itemName = "WPZ Child Under 4 FOC";
    }

    //----------------------- Dubbo Tickets -----------------------//

    else if ($this.hasClass('dubbo') && $this.hasClass('AdultTicketSingle')) {
        itemName = "Taronga Western Plains Zoo - Adult";
    }
    else if ($this.hasClass('dubbo') && $this.hasClass('ChildTicketSingle')) {
        itemName = "Taronga Western Plains Zoo - Child";
    }
    else if ($this.hasClass('dubbo') && $this.hasClass('ConcessionTicketSingle')) {
        itemName = "Taronga Western Plains Zoo - Concession";
    }
    else if ($this.hasClass('dubbo') && $this.hasClass('InfantTicketSingle')) {
        itemName = "TWPZ - Child Under 4 FOC";
    }
    else if ($this.hasClass('dubbo') && $this.hasClass('BirthdayAdultTicketSingle')) {
        itemName = "TWPZ - Adult Birthday";
    }
    else if ($this.hasClass('dubbo') && $this.hasClass('BirthdayChildTicketSingle')) {
        itemName = "TWPZ - Child Birthday";
    }
    else if ($this.hasClass('dubbo') && $this.hasClass('Family1Adult2Child')) {
        itemName = "Family - 1 Adult & 2 Children";
    }
    else if ($this.hasClass('dubbo') && $this.hasClass('Family2Adult1Child')) {
        itemName = "Family - 2 Adults & 1 Child";
    }
    else if ($this.hasClass('dubbo') && $this.hasClass('Family2Adult2Child')) {
        itemName = "Family - 2 Adults & 2 Children";
    }

    console.log('GetItemTypeDataLayer itemName = ' + itemName);

    //console.log('exiting GetItemTypeDataLayer');

    return itemName;
}


function GetAddOnTypeDataLayer($this) {

    //console.log('entered GetAddOnTypeDataLayer');

    var itemName = "Couples Premium Hamper";

    if ($this.hasClass('31700001')) {
        itemName = "Couples Premium Hamper";
    }
    else if ($this.hasClass('31700002')) {
        itemName = "Couples Premium Hamper - Plant Based";
    }
    else if ($this.hasClass('31690001')) {
        itemName = "Family Premium Hamper";
    }
    else if ($this.hasClass('31690002')) {
        itemName = "Family Premium Hamper - Plant Based";
    }

    console.log('GetAddOnTypeDataLayer itemName = ' + itemName);

    //console.log('exiting GetAddOnTypeDataLayer');

    return itemName;
}
