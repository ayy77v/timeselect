import { Template } from 'meteor/templating';
import { Ddays } from '../api/ddays.js';
 
import './body.html';

Template.all.events({
  'click button': function(event) {
  	event.preventDefault();
  	 const amonth = event.target.a.value;
  	 const aday = event.target.b.value;
     const ahour = event.target.c.value;
     const aminute = event.target.d.value;
     const bmonth = event.target.e.value;
     const bday = event.target.f.value;
     const bhour = event.target.g.value;
     const bminute = event.target.h.value;

      Ddays.insert({
      amonth,
      aday,
      ahour,
      aminute,
      bmonth,
      bday,
      bhour,
      bminute,
      createdAt: new Date(), 

    });


	target.a.value='1',
	target.b.value='1',
	target.c.value='0',
	target.d.value='00',
	target.e.value='1',
	target.f.value='1',
	target.g.value='0',
	target.h.value='00';
},


});

Template.show.helpers({
  ddays() {
    // Show newest tasks at the top
    return Ddays.find({}, { sort: { createdAt: -1 } });
  },
});
