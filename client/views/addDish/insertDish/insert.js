var idNameComponent = "";
var idQuantityComponent= "";
var count = 0;
Template.InsertDish.events({
	"click #insertDish": function(e, t) {
		e.preventDefault();
		Router.go("addDish.insert", {});
	},
	"click #addElement": function(e, t){
		e.preventDefault();
		count ++;
		idNameComponent = "name"+ count;
		idQuantityComponent = "quantity" + count;
		var temp = "<br><br><div class='form-group'><label class='control-label col-sm-2' for="+idNameComponent+"><input type='text' class='form-control' id="+idNameComponent+"></label><div class='col-sm-10'><input type='text' class='form-control' id="+idQuantityComponent+" ></div></div>"
    	document.getElementById("component").innerHTML += temp;
	},

	"submit #form-insertDish": function(e, t) {
		e.preventDefault();
		var name = t.find('#name').value.trim();
		var cost = t.find('#cost').value.trim();
		var components;
		for(var i =0; i<= count; i++){
			var idname = "#name" +i;
			var idquantity = "quantity" +i;
			components[i][0] = t.find(idname).value.trim();
			components[i][1] = t.find(idquantity).value.trim();
		}
		alert("fshg");
	}

});