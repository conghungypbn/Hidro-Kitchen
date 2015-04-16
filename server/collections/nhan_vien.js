NhanVien.allow({
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

NhanVien.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
});

NhanVien.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

NhanVien.before.remove(function(userId, doc) {
	
});

NhanVien.after.insert(function(userId, doc) {
	
});

NhanVien.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

NhanVien.after.remove(function(userId, doc) {
	
});
