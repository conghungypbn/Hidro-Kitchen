var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;


var pageSession = new ReactiveDict();

Template.HomePrivate.rendered = function() {
  
};

Template.HomePrivate.events({

});

Template.HomePrivate.helpers({
});

Template.calendar.helpers({
    getDay : function(o){
        var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
        var numOfDay = new Date(year,month,0).getDate();
        var day = o-startDate+1;
        return (day>0 && day<=numOfDay)?day:"";
    },
    getMonth : function(){
        return month + "-" + year;
    },
    meo1 : function(){
        return pageSession.get("meo1");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
    meo : function(){
        return pageSession.get("meo");
    },
});
Template.calendar.events({
    'click #date2' : function(){
        if(pageSession.get("meo1")== "haha"){
            pageSession.set("meo1", '');    
        }else{
            pageSession.set("meo1", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            pageSession.set("meo", "haha");
        }
    },
});

// Template.calendar.colortable = function() {
//     return "haha";
// };