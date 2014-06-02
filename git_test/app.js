
// function loadXMLDoc() {
//   var xmlhttp;

//   if (window.XMLHttpRequest) {

//     xmlhttp = new XMLHttpRequest();
//   } else {
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//   }

//   xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == XMLHttpRequest.DONE) {
//       if (xmlhttp.status == 200) {
//         document.getElementById("theDiv").innerHTML = xmlhttp.responseText;
//       }
//       else if(xmlhttp.status == 400) {
//         alert('There was an error 400')
//       }
//       else {
//         alert('something else other than 200 was returned')
//       }
//     }
//   }

//   xmlhttp.open("GET", "https://api.github.com/users/ajkim/repos", true);
//   xmlhttp.send();
// }

// function listAll(data) {
//   for(var i = 0; i < data.length; i++) {
//     console.log(data[i].name);
//     return data[i].pushed_at;
//     return data[i].description;
//   }
// }

// listAll(loadXMLDoc());

function makeCall() {

  $.ajax({
    url: "https://api.github.com/users/ajkim/repos",
    context: document.getElementById('theDiv'),
    success: function(returndata)
    {
        $.each(returndata, function(index, value){

          // console.log("Repo: " + value.name);

          // var newdiv = document.createElement('div');
          // // newdiv.addClass("repo_" + this.name);
          // newdiv.appendChild(document.createTextNode("REPO: " + this.name + " has " + this.size + " commits" 
          //   + " and was last pushed at " + this.pushed_at));

          // document.body.appendChild(newdiv);

 
          // $('<span class="repo ' + index + '"> <a href="' + value.url + '"> REPO: ' + value.name + " has " + value.size +
          //  " commits" + " and was last pushed at " + value.pushed_at + '</a></span>').appendTo('theDiv');

          $(this).append('<span class="repo ' + index + '"> <a href="' + value.url + '"> REPO: ' + value.name + " has " + value.size +
           " commits" + " and was last pushed at " + value.pushed_at + '</a></span>');
          console.log(this);


        }.bind(this));
    }
  });

}



$(function(){
  makeCall()

});

// $(function(){

//   // var $the_list = $('#theDiv');

//   // $.ajax({
//   //     url: '/',
//   //     method: 'GET',
//   //     dataType: 'json'
//   // })
//   // .done(function(data){
//   //   console.log(data)
//   // })
//   $.ajax({
//     url: "https://api.github.com/users/ajkim/repos",
//     method: 'GET',
//     dataType: 'json',
//     success: function(returndata)
//     {
//         $('#theDiv').html(returndata);
//     }
//   });

// });







