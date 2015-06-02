Template.AddDish.rendered = function() {
	
};

Template.AddDish.events({
	
});

Template.AddDish.helpers({
	isAdmin: function(){
    if(Meteor.user().profile.accountType ==='Admin')
      return true;
    return false;
  }
});

Template.manageDish.events({
	"click #insertDish": function(e, t){
		e.preventDefault();
		Router.go("addDish.insert", {});
	},
});


Template.dishList.helpers({
	 dishs: function(){
      return MonAn.find({}, {sort: { name: 1, cost: -1}}).fetch();
    }
});