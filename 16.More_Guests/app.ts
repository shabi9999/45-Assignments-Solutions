let guest_list: string[] = ["MOMI", "YASIR", "MUNEEB", "MURTAZA", "MUSTAFA"];
// for(let i=0; i<guest_list.length; i++){console.log('Respected Sir/Madam'  + guest_list[i] +
// ',\n\nWe invited you on dinner tommorow.\nThank You\n')}
//  guest_list.forEach(guest_list => {console.log(`Dear ${guest_list}, Would you like to join me for diner?` );});
let not_present: string = "YASIR";
let new_guest: string = "BABAR AZAM";
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected Sir/Madam " +
      guest_list[i] +
      ",\n\nWe invited you on dinner tommorow.\nThank You\n"
  );
}
console.log(`Mr. ${not_present} will not coming tomorrow for dinner.`);

guest_list.unshift("SHAHEEN", "SARFARAZ", "RIZWAN");
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected Sir/Madam " +
      guest_list[i] +
      ",\n\nWe invited you on dinner tommorow. we found a big table so we decide to invite 3 more guests.\nThank You\n"
  );
}
