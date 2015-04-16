LichAn.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fields, modifier) {
		return true;
	},

	remove: function (userId, doc) {
		return true;
	}
});

LichAn.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
});

LichAn.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

LichAn.before.remove(function(userId, doc) {
	
});

LichAn.after.insert(function(userId, doc) {
	
});

LichAn.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

LichAn.after.remove(function(userId, doc) {
	
});
