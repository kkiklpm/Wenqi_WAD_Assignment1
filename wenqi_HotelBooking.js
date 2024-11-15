const hotels = [
  { name: "Ocean View Resort", country: "Maldives", city: "Goa", stars: 4, price: 200 },
  { name: "Ocean Breeze Hotel", country: "USA", city: "Nassau", stars: 5, price: 350 },
  { name: "Oceanfront Paradise", country: "Australia", city: "Gold Coast", stars: 3, price: 150 },
  { name: "Mountain Escape", country: "Switzerland", city: "Zermatt", stars: 5, price: 400 },
  { name: "Royal Ocean Retreat", country: "India", city: "Goa", stars: 3, price: 120 },
  { name: "City Lights Hotel", country: "USA", city: "New York", stars: 2, price: 100 },
];
// Dummy data for hotels

const bookings = [];

module.exports = {
  // Search hotels by either country or city depends on what the user entered
  CountryOrCity(query) {
    const results = hotels.filter(hotel =>
      hotel.country.toLowerCase() === query.toLowerCase() ||
      hotel.city.toLowerCase() === query.toLowerCase()
      // Filter through the hotel array to find if any of the hotel's city or country matches what the user searched for
    );

    return results.length ? results : `No hotels found in ${query}`;
    // if hotels match the city or country, return the hotels, if not return the message saying that no hotels meeting the requirement were found
  },

  // Search hotels by the number of stars the hotel has
  searchByStars(stars) {
    if (stars < 1 || stars > 5) {
      return "Please enter a valid star rating between 1 and 5.";
      // check if the input star is within 1 to 5, if not, show an error message
    }
    const results = hotels.filter(hotel => hotel.stars === stars);
    // check if any hotel meets the number of stars entered, if yes, display all results, if not, show an error message of no hotels found that match
    return results.length ? results : `No hotels found with ${stars}-star rating.`;
  },

  // Search hotels by price range
  searchByPrice(minPrice, maxPrice) {
    const results = hotels.filter(hotel => hotel.price >= minPrice && hotel.price <= maxPrice);
    // check for hotels within the price range entered by the user, if found, show the hotels, if not, show error message
    return results.length ? results : `No hotels found within the price range ${minPrice} - ${maxPrice}.`;
  },

  // Book a hotel where each booking will have a record of a unique booking id, hotel name, date, and guest name
  bookHotel(hotelName, guestName) {
    const hotel = hotels.find(hotel => hotel.name.toLowerCase() === hotelName.toLowerCase());
    // check if the hotel the user entered is valid, or else display an error message
    if (!hotel) {
      return `No hotel found with the name "${hotelName}"`;
    }

    const bookingId = bookings.length + 1; // make the booking id unique
    const bookedDate = new Date().toISOString().split('T')[0]; // to display the date when the booking is made

    const newBooking = {
      // all the details of the booking
      bookingId,
      hotelName: hotel.name,
      guestName,
      bookedDate,
      status: "Confirmed", // set the default status when booked
    };

    bookings.push(newBooking);

    return `Booking successful! Booking ID: ${bookingId}, Hotel: ${hotel.name}, Guest: ${guestName}, Date: ${bookedDate}`;
    // message to display all the details when the booking was successful
  },

  // Cancel a booking by the guest's name
  cancelBooking(guestName) {
    const booking = bookings.find(booking => booking.guestName.toLowerCase() === guestName.toLowerCase());
    // check if the guest name entered is valid and if they have booked any hotel yet, display an error message if no booking is found under the guest's name
    if (!booking) {
      return `No booking found for Guest: "${guestName}".`;
    }
    // change the booking status to be canceled and display the message of cancellation being successful as well as the details of the booking
    booking.status = "Canceled";
    return `Booking canceled for Hotel: ${booking.hotelName}, Guest: ${booking.guestName}, Date: ${booking.bookedDate}`;
  },

  // Search for the booking status of the guest name entered
  bookingStatus(guestName) {
    const booking = bookings.find(
      (b) => b.guestName.toLowerCase() === guestName.toLowerCase()
    );
    // check if the guest has a booking under their name
    if (!booking) {
      return `No booking found for Guest: "${guestName}".`;
    }
    // display the booking details and the status of it under the guest's name
    return `Booking for Guest: ${booking.guestName}, Hotel: ${booking.hotelName}, Date: ${booking.bookedDate}, Status: ${booking.status}`;
  },
};
