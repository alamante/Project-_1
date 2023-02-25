

$("document").ready(function(){
// Api link   
var apiUrl = 'https://api.api-ninjas.com/v1/dogs?name=';

// Button to clear the search
   $(".btn-clear").click(function(){
      $("input.search").val("").empty();
      $("div.input-here").empty();
      //$(".clear").empty()
   });
// button to initial search
  $(".btn").click(function(){
    $("div.input-here").empty();
// This grabs the input by user and blocks out any space
      var value = $.trim($("input.search").val()).replace(/\s+/g, '');
      var name = value;
      var queryUrl =`${apiUrl}`;

// Ajax function
      $.ajax({
         method: 'GET',
         url:queryUrl + name,
         headers: { 'X-Api-Key': 'JxPA8Uruwc07nDliOv9j1g==Yf9kxgp1GM8VuwhB'},
         contentType: 'application/json'
         }).then(function(data){
            console.log(data);

// forEach loop         
         data.forEach((data)=> {
         titleData = document.createElement("h1"); // creates h1 element
         titleData.innerHTML=data["name"] // adds to the h1 element created
         console.log(data["name"]) // check if its working
         let image = $("<img>");   // creates image element
         image.attr("src", data["image_link"]) // adds attribute and api image link
         innerHTML = image;
         ratings = document.createElement("h1");
         ratings.innerHTML ="Ratings: 1-100"
         unordered = $('<ul>', '</ul>') // creates ul element
         list = $('<li>','</li>')       // creates li element
         list1 = $('<li>','</li>')
         list2 = $('<li>','</li>')
         list3 = $('<li>','</li>')
         list4 = $('<li>','</li>')
         list5 = $('<li>','</li>')
         list6 = $('<li>','</li>')
         list7 = $('<li>','</li>')
         list8 = $('<li>','</li>')
         list9 = $('<li>','</li>')
         list10 = $('<li>','</li>')
         list11 = $('<li>','</li>')
         list12 = $('<li>','</li>')
         list13 = $('<li>','</li>')
         list14 = $('<li>','</li>')
         list15 = $('<li>','</li>')
         list16 = $('<li>','</li>')
         list17 = $('<li>','</li>')
         list18 = $('<li>','</li>')
         list19 = $('<li>','</li>')
         list20 = $('<li>','</li>')
         list.append("<b>Barking:</b>&nbsp&nbsp",data["barking"]) // appends to li element
         list1.append("<b>Drooling:</b>&nbsp&nbsp",data["drooling"])
         list2.append("<b>coat_length:</b>&nbsp&nbsp",data["coat_length"])
         list3.append("<b>energy:</b>",data["energy"])
         list4.append("<b>Good with children:</b>&nbsp&nbsp",data["good_with_children"])
         list5.append("<b>good_with_other_dogs:</b>&nbsp&nbsp",data["good_with_other_dogs"])
         list6.append("<b>good_with_strangers:</b>&nbsp&nbsp",data["good_with_strangers"])
         list7.append("<b>grooming:</b>&nbsp&nbsp",data["grooming"])
         list8.append("<b>max_height_male:</b>",data["max_height_male"])
         list9.append("<b>max_life_expectancy:</b>&nbsp&nbsp",data["max_life_expectancy"])
         list10.append("<b>max_weight_female:</b>&nbsp&nbsp",data["max_weight_female"])
         list11.append("<b>max_weight_male:</b>&nbsp&nbsp",data["max_weight_male"])
         list12.append("<b>min_height_female:</b>&nbsp&nbsp",data["min_height_female"])
         list13.append("<b>min_height_male:</b>&nbsp&nbsp",data["min_height_male"])
         list14.append("<b>min_life_expectancy:</b>&nbsp&nbsp",data["min_life_expectancy"])
         list15.append("<b>min_weight_female:</b>&nbsp&nbsp",data["min_weight_female"])
         list16.append("<b>min_weight_male:</b>&nbsp&nbsp",data["min_weight_male"])
         list17.append("<b>playfulness:</b>&nbsp&nbsp",data["playfulness"])
         list18.append("<b>protectiveness:</b>&nbsp&nbsp",data["protectiveness"])
         list19.append("<b>shedding:</b>&nbsp&nbsp",data["shedding"])
         list20.append("<b>trainability:</b>&nbsp&nbsp",data["trainability"])
         unordered.append(list,list1,list2,list3,list4,list5,list6,
            list7,list8,list9,list10,list11,list12,list13,list14,
            list15,list16,list17,list18,list19,list20)       // appends to ul element
         console.log(list)
        
       var storeData =  $("div.input-here").append(titleData,image,ratings,unordered) // appends all to div element
       localStorage.setItem("name","storeData")
      

         });
         
          
      })
      
})



// Time API

   var city = 'london'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/worldtime?city=' + city,
    headers: { 'X-Api-Key': 'JxPA8Uruwc07nDliOv9j1g==Yf9kxgp1GM8VuwhB'},
    contentType: 'application/json',
    success: function(data) {
        console.log(data);

        $(".date").text(`Date: ${data.date}`)
        $(".time").text(`Time: ${data.hour}:${data.minute}`)  
    }
    
});

    

})



   





