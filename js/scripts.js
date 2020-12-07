(function(){
    var data =[
        {
            id: 1,
            image: "images/wings.jpeg",
            name: "Traditional Wings Combo",
            description: "6 TRADITIONAL CHICKEN WINGS / 6 BONELESS WINGS / HANDSPUN IN CHOICE OF SAUCE OR DRY SEASONING / NATURAL-CUT FRENCH FRIES / SLAW?",
            price: 12.99,
            calories: 1600,
            vegan: false
        },
        {
            id: 2,
            image: "images/salad1.jpeg",
            name: "Buffalo Wedge Salad",
            description: "HAND-BREADED CHICKEN TENDER / WEDGED LETTUCE / BACON / TOMATOES / MEDIUM BUFFALO SAUCE / BLEU CHEESE DRESSING / BLEU CHEESE CRUMBLES / GREEN ONIONS",
            price: 12.99,
            calories: 1400,
            vegan: true
        },
        {
            id:3,
            image: "images/buffalo_ranch_chicken_wrap.jpeg",
            name: "Chicken Wrap",
            description: "HAND-BREADED CHICKEN TENDER / MEDIUM BUFFALO SAUCE / RANCH / CHEDDAR-JACK CHEESE / SHREDDED ICEBERG LETTUCE / TOMATOES / FLOUR TORTILLA / HOUSE-MADE TORTILLA CHIPS & SALSA",
            price: 12.99,
            calories: 800,
            vegan: false
        },

        {
            id: 4,
            image: "images/allamericancheese.jpeg",
            name: "Bacon Cheese Burger",
            description: "DOUBLE PATTY / HAND-SMASHED / SEA SALT / COARSE BLACK PEPPER / AMERICAN CHEESE / SHREDDED ICEBERG LETTUCE / TOMATO / PICKLES / MUSTARD / MAYO / CHALLAH BUN / NATURAL-CUT FRENCH FRIES",
            price: 12.99,
            calories: 1600,
            vegan: false
        },
        {
            id: 5,
            image: "images/salad2.jpeg",
            name: "Chopped Cobb Salad",
            description: "DICED GRILLED CHICKEN / ROMAINE LETTUCE / TOMATOES / BACON / HARD-BOILED EGG / RANCH DRESSING / BLEU CHEESE CRUMBLES / GREEN ONIONS / BUFFALO SEASONING / EVERYTHING SEASONING",
            price: 12.99,
            calories: 1600,
            vegan: true
        },
    ];

    var menuContainer = document.getElementById("menu-container");

    function loadContent(){

        //create elements
        for (var i = 0; i < data.length; i++) {

            var menuItemID = "item-container-" + data[i].id;
            var menuItemEl = document.createElement("div");
            menuItemEl.setAttribute("class", "menu-item-container");
            menuItemEl.setAttribute("id", menuItemID);

            var itemImageEl = document.createElement("div");
            itemImageEl.setAttribute("class","item-image");

            var itemDescriptionEl = document.createElement("div");
            itemDescriptionEl.setAttribute("class", "item-name-description");

            var itemDetailsEl = document.createElement("div");
            itemDetailsEl.setAttribute("class","item-details");

            var img = document.createElement("img");
            img.src = data[i].image;
            var itemName = document.createElement("h2");
            itemName.setAttribute("class", "menu-item-name");
            itemName.setAttribute("id", data[i].id)
            var itemNameText = document.createTextNode(data[i].name);
            var itemDescription = document.createElement("p");
            itemDescription.setAttribute("class", "menu-item-description");
            itemDescription.setAttribute("id", "description-" + data[i].id);
            var itemDescriptionText = document.createTextNode(data[i].description);
            var itemCalories = document.createElement("p");
            itemCalories.setAttribute("class","calories");
            var itemCaloriesText = document.createTextNode(data[i].calories);
            var itemPrice = document.createElement("p");
            itemPrice.setAttribute("class","price");
            var itemPriceText = document.createTextNode(data[i].price);
            var itemVeganEl = document.createElement("p");
            itemVeganEl.setAttribute("class", "vegan visible");

            //add elements
            itemPrice.appendChild(itemPriceText);
            itemCalories.appendChild(itemCaloriesText);
            itemDetailsEl.appendChild(itemPrice);
            itemDetailsEl.appendChild(itemCalories);

            // add if statement for vegan/vegetarian--------

            if(data[i].vegan === true){

               itemVeganEl.innerHTML ='<i class="fa fa-leaf" aria-hidden="true"></i>&nbsp vegetarian';
                itemDetailsEl.appendChild(itemVeganEl);
            }

            itemDescription.appendChild(itemDescriptionText);
            itemName.appendChild(itemNameText);
            itemDescriptionEl.appendChild(itemName);
            itemDescriptionEl.appendChild(itemDescription);
            itemDescriptionEl.appendChild(itemDetailsEl);
            itemImageEl.appendChild(img);
            menuItemEl.appendChild(itemImageEl);
            menuItemEl.appendChild(itemDescriptionEl);
            menuContainer.appendChild(menuItemEl);
        
        }
    }

    loadContent();

    $(function(){
            var $itemName = $('.menu-item-name');
            //var $itemDescription =$('.menu-item-description');
            $itemName.on('mouseenter', function()
            { 
                var id = $(this).attr('id');
                var $itemDescription = $("#description-" + id);
                $itemDescription.delay(500).show(300).fadeIn();
            });

            $itemName.on('mouseleave', function()
            {
                var id = $(this).attr('id');
                var $itemDescription = $("#description-" + id);
                $itemDescription.hide(200).fadeOut();
                
            });
        });
    
}());