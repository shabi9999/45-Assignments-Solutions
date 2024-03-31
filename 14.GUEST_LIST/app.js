var guest_list = ['MOMI', 'YASIR', 'MUNEEB', 'MURTAZA', 'MUSTAFA'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] +
        ',\n\nWe invited you on dinner tommorow.\nThank You\n');
}
;
guest_list.forEach(function (guest_list) { console.log("Dear ".concat(guest_list, ", Would you like to join me for diner?")); });
