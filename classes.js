//Define a new class
class Event {
    constructor(name, startTime, endTime, location) {
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location;
    }
  }
      //A constructor is a special function that defines how a new instance of the class is created. In the constructor, you can define the specific properties to be included in the newly created instance.

      const lunch = new Event("Lunch", "12:00", "13:00", "Chipotle");
      const lunch2 = new Event("Lunch2", "12:30", "13:00", "Chipotle");


    //   console.log(lunch.startTime);
    //   console.log(lunch2)

      //-----------
      class Event2 {
        constructor(name, attendees, startTime, locationName, address) {
          let guests = null;
          if (attendees.length === 1) {
            guests = attendees[0];
          } else if (attendees.length > 1) {
            guests = `${attendees.length} attendees`;
          }
      
          this.name = guests ? `${name} with ${guests}` : name;
          this.details = { startTime, attendees, groupSize: attendees.length };
          this.location = { name: locationName, address };
        }
      }
      
      const event2 = new Event2("Dinner", ["Sal"], 1830, "Frankie's", "477 Rain St.");

      console.log(event2)