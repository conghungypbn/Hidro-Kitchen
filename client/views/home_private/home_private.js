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
    meo2 : function(){
        return pageSession.get("meo2");
    },
    meo3 : function(){
        return pageSession.get("meo3");
    },
    meo4 : function(){
        return pageSession.get("meo4");
    },
    meo5 : function(){
        return pageSession.get("meo5");
    },
    meo6 : function(){
        return pageSession.get("meo6");
    },
    meo7 : function(){
        return pageSession.get("meo7");
    },
    meo : function(){
        return pageSession.get("meo");// chuyen 2 cho meo nay thanh meo3 tuong tu voi cai ben duoi
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
    'click #date1' : function(){
        if(pageSession.get("meo1")== "haha"){
            pageSession.set("meo1", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 1-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo1", "haha");
        }
    },
    'click #date2' : function(){
        if(pageSession.get("meo2")== "haha"){
            pageSession.set("meo2", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 2-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo2", "haha");
        }
    },
    'click #date3' : function(){
        if(pageSession.get("meo3")== "haha"){
            pageSession.set("meo3", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo3", "haha");
        }
    },
    'click #date4' : function(){//chuyen date thanh date4
        if(pageSession.get("meo4")== "haha"){// chuyen meo nay thanh meo4 va tuong tu voi cac cai duoi
            pageSession.set("meo4", '');    // chuyen meo
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 4-startDate+1;// chuyen so 3 thanh so 4 theo #date va tuong tu voi cai ben duoi
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo4", "haha");// chuyen meo
        }
    },
    'click #date5' : function(){
        if(pageSession.get("meo5")== "haha"){
            pageSession.set("meo5", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 5-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo5", "haha");
        }
    },
    'click #date6' : function(){
        if(pageSession.get("meo6")== "haha"){
            pageSession.set("meo6", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 6-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo6", "haha");
        }
    },
    'click #date7' : function(){
        if(pageSession.get("meo7")== "haha"){
            pageSession.set("meo7", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 7-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo7", "haha");
        }
    },
    'click #date4' : function(){//chuyen date thanh date8
        if(pageSession.get("meo4")== "haha"){// chuyen meo nay thanh meo8 va tuong tu voi cac cai duoi
            pageSession.set("meo4", '');    // chuyen meo
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 4-startDate+1;// chuyen so 4 thanh so 8 theo #date va tuong tu voi cai ben duoi
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo4", "haha");// chuyen meo
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
    'click #date' : function(){
        if(pageSession.get("meo")== "haha"){
            pageSession.set("meo", '');    
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo", "haha");
        }
    },
});

// Template.calendar.colortable = function() {
//     return "haha";
// };