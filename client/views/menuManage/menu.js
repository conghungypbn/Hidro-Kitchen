var dishChosen = [];
var hahahaha = ["TxCn4GSiotAXjG5eE","fLyRTzzNjhffNHZiD","9NLC9JakrDkLqjJLS"]
// var date = "2015-05-31";
var getMonan = function(){
		
    	return MonAn.find({_id: { $nin: dishChosen}}, {sort: { name: 1, cost: -1}}).fetch();
    }
Template.ManageMenu.rendered = function() {
	
};

Template.ManageMenu.events({
	'click #save': function(e, t){
		var date = t.find('#date').value.trim();
		alert(date);
	},
	'click #date': function(e, t){
		var date = t.find('#date').value.trim();
		// alert(date);

	},
	'click #save2' : function(e, t){
		var date = t.find('#date').value.trim();
		Meteor.call('updateMenu', date, dishChosen);
	}
});

Template.ManageMenu.helpers({
	getToday: function(){
		var now = new Date();
	    var month = (now.getMonth() + 1);               
	    var day = now.getDate();
	    if(month < 10) 
	        month = "0" + month;
	    if(day < 10) 
	        day = "0" + day;
	    var today =  now.getFullYear()+ '-' +  month + '-' + day ;
	    return today;
	},
	hehe: function(){
		var date = t.find('#date').value.trim();
		// alert(date);
	}
});

Template.alldish.helpers({
	getToday: function(){
		var now = new Date();
	    var month = (now.getMonth() + 1);               
	    var day = now.getDate();
	    if(month < 10) 
	        month = "0" + month;
	    if(day < 10) 
	        day = "0" + day;
	    var today =  now.getFullYear()+ '-' +  month + '-' + day ;
	    return today;
	},
	alldish: getMonan
});
Template.alldish.events({
	"click #show" : function(e, t){
		// dishChosen = ["c6yRCXLTnps7bWzTa"];
		// {{alldish}}
		alert("dsfg")
		// var date = t.find('#date').value.trim();
		// alert(date);
		// alert("haah")
	}
});

Template.edish.events({
	// "click": function(e, t){
	// 	e.preventDefault();
	// 	//dishChosen.push(this._id);
	// 	//dishChosen[0] = "9NLC9JakrDkLqjJLS";
	// 	//alert(dishChosen)
	// 	d(){ishChosen.push("TxCn4GSiotAXjG5eE");
	// },
	'click .check': function(e, t) {
		// var date = t.find('#date').value.trim();
		// alert(this._id);
		if ( $(event.target).is(':checked')) {
			 // alert("haha")
			dishChosen.push(this._id);
			// alert(dishChosen)
		} else{
			for(var i =0; i<dishChosen.length; i++){
				if(dishChosen[i]=== this._id){
					dishChosen.splice(i, 1);
				}
			}
			// alert(dishChosen)
			// alert("hehe")
		}	

	}
	  
});

Template.edish.helpers({
	aaa : function(){
		alert("aaa");
	}
});

Template.dishChosen.helpers({
	dishChosentemp: function(){
      return MonAn.find({_id: { $in: dishChosen}}, {sort: { name: 1, cost: -1}}).fetch();
	}	
});

Template.registerHelper("fuck",function(){
  alert("fac")
});

