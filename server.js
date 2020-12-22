const dbConfig = require('./config/db.config')
const db = require("./models");




// give access to the models
const Airport = db.airport;
const Flight = db.flight;
const Passenger = db.passenger;
const Terminal = db.terminal;



// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });



  // create a new instance of airport model 
const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})


//save the new airport model 
airport.save()


//show me whats saved in that model
console.log("Airport saved", airport)





///////////////  FLIGHT 1

  // create a new instance of FLIGHT MODEL
  const flight1 = new Flight({
    from: "CDG France",
    to: "JFK New-York",
    airline: "American Airline"
  })


  //save the new FLIGHT MODEL
flight1.save()

//confirm it worked:
console.log("flight saved", flight1)



///////////// FLIGHT 2:


  // create a new instance  to be added to the FLIGHT MODEL
  const flight2 = new Flight({
    from: "Heathrow UK",
    to: "JFK New-York",
    airline: "British Airways"
  })


  //save the new FLIGHT MODEL
flight2.save()

//confirm it worked:
console.log("flight2 saved", flight2)




//////////////  AIRPORT

const airport2 = new Airport({
	name: "JFK",
	country: "US",
	opened: "1990"
})


//save the new airport model 
airport2.save()


//show me whats saved in that model
console.log("Airport2 saved", airport2)





//////////////  TERMINAL

const terminal1 = new Terminal({
	name: "airport1",
	flights: "flight1, flight2",
	capacity: "234324"
})


//save the new airport model 
terminal1.save()


//show me whats saved in that model
console.log("terminal1 saved", terminal1)
