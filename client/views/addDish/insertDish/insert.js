var idNameComponent = "";
var idQuantityComponent= "";
var count = 0;
var cmtCount = [];
var components = [];

Template.InsertDish.events({
	"click #insertDish": function(e, t) {
		e.preventDefault();
		Router.go("addDish.insert", {});
	},
	"click #addElement": function(e, t){
		e.preventDefault();
		// alert("haha")
		var ten = document.getElementById("tenthucpham").value;
		var khoiluong = document.getElementById("khoiluongthanhphanmoi").value;
		var donvi = document.getElementById("donvi").value;
		if(ten != "" && khoiluong != "" && donvi != ""){
			components[count] = [ten, khoiluong, donvi];
			count++;
			cmtCount[count] = 0;
			var thanhphanmoi =
			"<div style = 'border: 1px solid gray;height: 40px;' id='thanhphan"+ count + "'>"+
				"<span class='tenthucpham col-md-2 h4' id = 'name'"+count+">"+ten+":</span>"+
				"<span class='khoiluong col-md-1 h4' >"+khoiluong+"</span><p class = 'col-md-2 h4'>"+ donvi +
				"</p><input class='fa fa-trash-o' type='button' value='X' onclick='javascript:xoathanhphan(" + count + ");'>"+
			"</div><br>"
			document.getElementById("khungnoidung").innerHTML = thanhphanmoi + document.getElementById("khungnoidung").innerHTML;
			document.getElementById("tenthucpham").value = "";
			document.getElementById("khoiluongthanhphanmoi").value = "";
			document.getElementById("donvi").value = "";
		}
	},

	"submit #form-insertDish": function(e, t) {
		e.preventDefault();
		var name = t.find('#name').value.trim();
		var cost = t.find('#cost').value.trim();
		// alert(components);
		// submit_button.button("loading");
		Meteor.call('addDish', name, cost, components);
	}

});