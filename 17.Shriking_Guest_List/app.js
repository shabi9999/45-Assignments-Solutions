// Q 15 Answer
var guest_list = ["MOMI", "YASIR", "MUNEEB", "MURTAZA", "MUSTAFA"];
// for(let i=0; i<guest_list.length; i++){console.log('Respected Sir/Madam'  + guest_list[i] +
// ',\n\nWe invited you on dinner tommorow.\nThank You\n')}
//  guest_list.forEach(guest_list => {console.log(`Dear ${guest_list}, Would you like to join me for diner?` );});
var not_present = "YASIR";
var new_guest = "BABAR AZAM";
guest_list[1] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Respected Sir/Madam " +
//       guest_list[i] +
//       ",\n\nWe invited you on dinner tommorow.\nThank You\n"
//   );
// }
guest_list.unshift("SHAHEEN", "SARFARAZ", "RIZWAN");
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Respected Sir/Madam " +
//       guest_list[i] +
//       ",\n\nWe invited you on dinner tommorow. we found a big table so we decide to invite 3 more guests.\nThank You\n"
//   );
// }
// Q 17 Answer
console.log('\nunfortunately we can not arrange big table , Only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for diner."));
    for (var i = 0; i < guest_list.length; i++) {
        console.log("Respected Sir/Madam " +
            guest_list[i] +
            ",\nYes you are still invited on tomorrow dinner\nThank You\n");
    }
}
guest_list.splice(0, 2);
console.log(guest_list);
