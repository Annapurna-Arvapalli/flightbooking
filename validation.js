 errorMessage = document.getElementsByClassName("error");



// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//     validFormFieldInput();

//  });


function validFormFieldInput()
{
   // let id = (id) => document.getElementById(id).value;
   let Counterror = 0;

   
     let firstname = document.getElementById("name").value;
     if(firstname.length == 0  ){
         //window.alert("first name should not be empty");
         errorMessage[0].innerHTML = "Please enter First Name";
         Counterror++;
     }
     let lastname = document.getElementById("name").value;
     if(lastname.length == 0){
         //window.alert("first name should not be empty");
         errorMessage[1].innerHTML = "Please enter last Name";
         Counterror++;
     }
     let mailid = document.getElementById("email").value;
     if(mailid.length == 0){
         //window.alert("first name should not be empty");
         errorMessage[2].innerHTML = "Please enter email";
         Counterror++;
     }
     let phnum = document.getElementById("phone number").value;
     if(phnum.length == 0){
         //window.alert("first name should not be empty");
         errorMessage[3].innerHTML = "Please enter phone number";
         Counterror++;
     }
     
     if(document.getElementById('tripradio1').checked ){
     }
     else if(document.getElementById('tripradio2').checked){
              
              
          }else
          {
           // window.alert("notfine");
            errorMessage[4].innerHTML = "Please choose radio button for type of trip";
            Counterror++;
          }
    let destcountry = document.getElementById("destinationcountry").value;
    if(destcountry.length == 0){
        
        errorMessage[6].innerHTML = "Destination Country cannot be empty";
        Counterror++;
    }
     let departurecountry = document.getElementById("departurecountry").value;
     if(departurecountry.length == 0){
     errorMessage[5].innerHTML = "Departure Country cannot be empty";
     Counterror++;
     } 
     let p1name=document.getElementById("p1name").value;
     let nlength =p1name.length;
      if(p1name.length == 0)
      {
               errorMessage[9].innerHTML="please enter Passenger1 Full name";
               Counterror++;
      }
     if(p1name.length > 5 && p1name.length > 0){
         window.alert('The length of passenger1,' + p1name + ' name is ' + nlength +' characters which is more than 5 chars');
     }
     let p2name=document.getElementById("pas2num").value;
     if(p2name.length > 5 && p2name.length > 0)
     {
         window.alert('The length of passenger2,' + p2name + ' name is ' + p2name.length +' characters which is more than 5 chars');
     }
     let child1name=document.getElementById("c1name").value;
     
         if(
             child1name.length > 5 && child1name.length > 0){
             window.alert('The length of passenger3,' + child1name + ' name is ' + child1name.length +' characters which is more than 5 chars');

         }
         let depdate=document.getElementById("datepicker1").value;
         if(depdate.length==0){
            errorMessage[7].innerHTML="please  enter Departure date";
            Counterror++;
         }
         let retdate =  document.getElementById("datepicker2").value;
							
      if(document.getElementById("tripradio2").checked){
             if(retdate.length == 0){
                errorMessage[8].innerHTML="please  enter Return date";
                Counterror++;
             }
             
            }
            let passnumber = document.getElementById("p1number").value;
            if(passnumber.length == 0){
                //window.alert("hello");
                errorMessage[10].innerHTML ="Passport Number cannot be empty";
                Counterror++;
            }
            let pexpdate= document.getElementById("datepickerp1").value;
            if(pexpdate.length == 0){

                errorMessage[11].innerHTML ="Passport expiry date cannot be empty";
                Counterror++;
            }
            let acnum= document.getElementById("acnumber").value;
            if(acnum.length == 0)
            {
                errorMessage[12].innerHTML ="Account Number cannot be empty";
                Counterror++;
            }
            let acexpdate = document.getElementById("expdate").value;
            if(acexpdate.length == 0)
            {
                errorMessage[13].innerHTML ="Please enter Expiry Date of your card"
                Counterror++;
            }
            
            let cnum = document.getElementById("CNN").value;
            if(cnum.length == 0)
            {
                errorMessage[14].innerHTML="Please enter CNN";
                Counterror++;
            }
            if(Counterror == 0)
            {
                window.location.href = "thanks1.html";
            }
        }
        
        




        
            

             
    
      

     

    //      window.alert(p1name + "'s age should be number");
    //  }
    //  let p2name=document.getElementById("pas2num").value;

    //  let nlength1 =p2name.length;
    //  if(p2name.length < 5){
    //      window.alert('The length of ' + p2name + ' name is ' + nlength +' characters which is less than 5 chars');
    //  }
    //  let p2age = document.getElementById("p2age").value;
    //  if(typeof p2age == "number"){

    //  }
    //  else{
    //      window.alert(p2name + "'s age should be number");
    //  }
     

    //  if((document.getElementById(tripradio1)).checked == true)
    //  {

    //   window.alert("check");
    //     errorMessage[4].innerHTML = "Please choose radio button for type of trip";
    //  }
     
    
    // if(document.getElementById("oneway").checked && document.getElementById("roundway").checked){
    //    // window.alert("Select either one way or round way");
    // errorMessage[4].innerHTML = "Select either one way or round way"; 
    // }

    // if(!(document.getElementById("oneway").checked) && !(document.getElementById("roundway").checked))
    // {
    //     errorMessage[4].innerHTML = "Please choose radio button for type of trip" ;
    // }
    // if(document.getElementById("Destination Country")=== null ){
    // errorMessage[3].innerHTML = "Please select Destination Country";
    // }
    // else{
    // window.location.href = "payment.html";
    // }

function ShowHideDiv(){
 
    let chkval = document.getElementById("chkYes")

    if (condition) {
        
    }
}
// function valNum(){

//     let adultnumber = (document.getElementById("numoffields")).value;
//    // alert(adultnumber);
//     if(adultnumber === "one" ){
//         alert(adultnumber);
//     document.getElementById("p1name").disabled()= true;


//     }

 


// function showalert(){
//     window.alert("Thanks for booking, Please check your email for ticket");
// }

// // function pnumvalidation()
// // {
// // // const pnum= document.getElementById(number).value;
// // // if(typeof pnum =='string')
// // // {
// // //     window.alert("please enter numbers");
// // // }
// // if(document.getElementById("oneway").checked || document.getElementById("roundway").checked){
// // window.alert("validation working");
// // }
// // else{
// //     window.alert("select type of trip");
// // }
// // }


// //function validfname()
// 					//{
//     				 //let fname = (document.getElementById("name")).value;
// 					// // if(fname === NULL || fname == ''){
// 					// // 	window.alert("enter name");
// 					// // }
// 					// // if(typeof fname =="number"){
 
// 					// 	document.write(typeof fname);
// 					// window.alert("enter string");		
//                     // }
// 					//if(fname.length<5 ){
// 					//	window.prompt("name should be atleast 5 chars");
// 					//}
//                 //}

//                 // //const form = document.getElementById("form");
// // const firstName = document.getElementById("firstname");
// // const lastName = document.getElementById("lastname").value;
// // const email = document.getElementById("email").value;
// // const phoneNumber = document.getElementById("phonenumber").value;

//     // if(fname.length<5){
//     //     errorMessage[1].innerHTML ="Name cannot be less than 5 chars";
//     // }
//     // else{
//     //     window.alert("test again");
//     //  window.location.href = "payment.html";
//     // }

//     // let fName = (document.getElementById("fname")).value;
//     // let lName = (document.getElementById("lname")).value;
// //     let btn = document.querySelector("\css\style.css\form-left-w3l").checked;
// //     if(radbtn != null)
// //     {
// //         document.write("rad btn selected");
// //     }
// //     else{

// //     window.alert("select trip type");
// // }
//     //let eMail = (document.getElementById("email")).value;
//     //let phoneNumber = (document.getElementById("phonenumber")).value;

//     //let name = id("last name");
//    // email = id("email"),
//    // phoneNumber = id("phonenumber"),
//     //departureCountry=id("departurecountry"),
//     //destinationCountry = id("destinationcountry");


// //     if (fName.length < 5 || fName.length == 0 || lName.length < 5 || lName.length == 0 ) {
        
// //         errorMessage[0].innerHTML = "First name can't be empty and can't be less than 5 characters";
// //         errorMessage[1].innerHTML = "Last name can't be empty and can't be less than 5 characters";
// //         //errorMessage[2].innerHTML = "Name cannot be empty or less than 5 characters";
// //         //errorMessage[3].innerHTML = "Name cannot be empty or less than 5 characters";
// //     }
// //   if(btn == null)
// //   {
// //       errorMessage[2].innerHTML="please select type of trip";
// //   }




//     // if((document.getElementById("male").checked) || (document.getElementById("female").checked))
//     // {
        
//     // }
//     // else
//     // {
//     //     errorMessage[2].innerHTML = "Please select your gender to proceed";
//     // }

//     // if (email ===null || email==='') {
        
//     //     errorMessage[4].innerHTML = "Email cannot be empty";
//     // }

//     // if (phoneNumber === null|| phoneNumber===''){        
//     //     errorMessage[5].innerHTML = "Phone Number cannot be empty";
//     // }
//     // if (departureCountry ===null || departureCountry==='') {
        
//     //     errorMessage[6].innerHTML = "Departure Country cannot be empty";
//     // }
//     // if (destinationCountry ===null || destinationCountry==='') {
        
//     //     errorMessage[7].innerHTML = "Destination Country cannot be empty";
//     // }
    

//     // if((document.getElementById("tripTypeChoice1").checked) || (document.getElementById("tripTypeChoice1").checked))
//     // {
        
//     // }
//     // else
//     // {
//     //     errorMessage[0].innerHTML = "Please select either one way or two way";
//     // }

//     // var tripType = document.getElementsByName('Trip Type');
//     // var ischecked_method = false;
//     // const radioButtons = document.querySelectorAll('input[name="Trip Type"]');

    

// }
function jsnumofadults(){

    let selectedValue = (document.getElementById("numoffields")).value;
    
    let adultname =(document.getElementById("pas2num")).value;
              
        if(selectedValue === 'one'){
            document.getElementById("pas2num").disabled = true;
            document.getElementById("p2age").disabled = true;
            document.getElementById("p2mgender").disabled = true;
            document.getElementById("p2fgender").disabled = true;
            document.getElementById("p2number").disabled = true;
            document.getElementById("datepickerp2").disabled = true
        
        }   
      
}
function validnoChild(){
    
    let selectedValue1 = (document.getElementById("numofchild")).value;
    
    if(selectedValue1 ==='zero')
    {
        document.getElementById("c1name").disabled = true;
        document.getElementById("c1age").disabled = true;
        document.getElementById("c1mgender").disabled = true;
        document.getElementById("c1fgender").disabled = true;
        document.getElementById("c1number").disabled = true;
        document.getElementById("datepickerc1").disabled = true
        // document.getElementById("c2name").disabled = true;
        // document.getElementById("c2age").disabled = true;
        // document.getElementById("c2mgender").disabled = true;
        // document.getElementById("c2fgender").disabled = true;
        // document.getElementById("c2number").disabled = true;
        // document.getElementById("datepickerc2").disabled = true
    
    
    }
    // if(selectedValue1 === 'one'){
    //     document.getElementById("c2name").disabled = true;
    //     document.getElementById("c2age").disabled = true;
    //     document.getElementById("c2mgender").disabled = true;
    //     document.getElementById("c2fgender").disabled = true;
    //     document.getElementById("c2number").disabled = true;
    //     document.getElementById("datepickerc2").disabled = true
    
    // }  
     
}