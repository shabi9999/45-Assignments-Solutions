var guest_list = ['MOMI', 'YASIR', 'MUNEEB', 'MURTAZA', 'MUSTAFA'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] +
        ',\n\nWe invited you on dinner tommorow.\nThank You\n');
}
//  guest_list.forEach(guest_list => {console.log(`Dear ${guest_list}, Would you like to join me for diner?` );});
var not_present = "YASIR";
var new_guest = "BABAR AZAM";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\n\nWe invited you on dinner tommorow.\nThank You\n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow for dinner."));
