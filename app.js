const hotel = require('./wenqi_HotelBooking');

console.log("\nSearch hotels based on stars");//search hotel base on stars rating
console.table(hotel.searchByStars(3));
console.log("Error message when invalid star number is entered");
console.table(hotel.searchByStars(9));//error message when star number is not valid

console.log("\nSearch hotels base on country or city");//search base on country or city entered
console.table(hotel.CountryOrCity("USA"));
console.table(hotel.CountryOrCity("Goa"));
console.log("\nNo hotels found in the city or country");
console.table(hotel.CountryOrCity("Sinagpore"));//error message when country or city entered have no hotels found

console.log("\nBooking hotel");//booking hotel using hotel name and guest name
console.log(hotel.bookHotel("North View", "Mike"));//error message when hotel name is not found
console.log(hotel.bookHotel("Mountain Escape", "Alice"));
console.log(hotel.bookHotel("Royal Ocean Retreat", "Jake"));

console.log("\nCancel booking base on name");//cancel booking base on name
console.log(hotel.cancelBooking("Alice"));

console.log("\nCancel booking where no booking found");
console.log(hotel.cancelBooking("Bob"));//error message where no booking is found under the guest's name

console.log("\nStatus of booking for confirmed");
console.log(hotel.bookingStatus("Jake"));//status of booking confirmed

console.log("\nStatus of booking for canceled");
console.log(hotel.bookingStatus("Alice"));//status of booking cancelled

console.log("\nStatus of booking when custoemr not found");
console.log(hotel.bookingStatus("Bob"));//guest not found with a booking record under his name 

console.log("\nSearch by price range");//search hotel base on price range
console.log("Range 100-200");
console.table(hotel.searchByPrice(100, 200));
console.log("Range 300-400");
console.table(hotel.searchByPrice(300, 400));
console.log("Range 500-600");
console.log(hotel.searchByPrice(500, 600));
