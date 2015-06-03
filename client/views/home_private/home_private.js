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
    meo8 : function(){
        return pageSession.get("meo8");// chuyen 2 cho meo nay thanh meo3 tuong tu voi cai ben duoi
    },
    meo9 : function(){
        return pageSession.get("meo9");
    },
    meo10 : function(){
        return pageSession.get("meo10");
    },
    meo11 : function(){
        return pageSession.get("meo11");
    },
    meo12 : function(){
        return pageSession.get("meo12");
    },
    meo13 : function(){
        return pageSession.get("meo13");
    },
    meo14 : function(){
        return pageSession.get("meo14");
    },
    meo15 : function(){
        return pageSession.get("meo15");
    },
    meo16 : function(){
        return pageSession.get("meo16");
    },
    meo17 : function(){
        return pageSession.get("meo17");
    },
    meo18 : function(){
        return pageSession.get("meo18");
    },
    meo19 : function(){
        return pageSession.get("meo19");
    },
    meo20 : function(){
        return pageSession.get("meo20");
    },
    meo21 : function(){
        return pageSession.get("meo21");
    },
    meo22 : function(){
        return pageSession.get("meo22");
    },
    meo23 : function(){
        return pageSession.get("meo23");
    },
    meo24 : function(){
        return pageSession.get("meo24");
    },
    meo25 : function(){
        return pageSession.get("meo25");
    },
    meo26 : function(){
        return pageSession.get("meo26");
    },
    meo27 : function(){
        return pageSession.get("meo27");
    },
    meo28 : function(){
        return pageSession.get("meo28");
    },
    meo29 : function(){
        return pageSession.get("meo29");
    },
    meo30 : function(){
        return pageSession.get("meo30");
    },
    meo31 : function(){
        return pageSession.get("meo31");
    },
    meo32 : function(){
        return pageSession.get("meo32");
    },
    meo33 : function(){
        return pageSession.get("meo33");
    },
    meo34 : function(){
        return pageSession.get("meo34");
    },
    meo35 : function(){
        return pageSession.get("meo35");
    },
    meo36 : function(){
        return pageSession.get("meo36");
    },
    meo37 : function(){
        return pageSession.get("meo37");
    },
    meo38 : function(){
        return pageSession.get("meo38");
    },
    meo39 : function(){
        return pageSession.get("meo39");
    },
    meo40 : function(){
        return pageSession.get("meo40");
    },
    meo41 : function(){
        return pageSession.get("meo41");
    },
    meo42 : function(){
        return pageSession.get("meo42");
    },
});
Template.calendar.events({
    'click #date1' : function(){
        var dayIndex = 1;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date2' : function(){
        var dayIndex = 2;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date3' : function(){
        var dayIndex = 3;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date4' : function(){
        var dayIndex = 4;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date5' : function(){
        var dayIndex = 5;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date6' : function(){
        var dayIndex = 6;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date7' : function(){
        var dayIndex = 7;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date8' : function(){
        var dayIndex = 8;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date9' : function(){
        var dayIndex = 9;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date10' : function(){
        var dayIndex = 10;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date11' : function(){
        var dayIndex = 11;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date12' : function(){
        var dayIndex = 12;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date13' : function(){
        var dayIndex = 13;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date14' : function(){
        var dayIndex = 14;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date15' : function(){
        var dayIndex = 15;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date16' : function(){
        var dayIndex = 16;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date17' : function(){
        var dayIndex = 17;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date18' : function(){
        var dayIndex = 18;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date19' : function(){
        var dayIndex = 19;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date20' : function(){
        var dayIndex = 20;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date21' : function(){
        var dayIndex = 21;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date22' : function(){
        var dayIndex = 22;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date23' : function(){
        var dayIndex = 23;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date24' : function(){
        var dayIndex = 24;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date25' : function(){
        var dayIndex = 25;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date26' : function(){
        var dayIndex = 26;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date27' : function(){
        var dayIndex = 27;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date28' : function(){
        var dayIndex = 28;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date29' : function(){
        var dayIndex = 29;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date30' : function(){
        var dayIndex = 30;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date31' : function(){
        var dayIndex = 31;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date32' : function(){
        var dayIndex = 32;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date33' : function(){
        var dayIndex = 33;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date34' : function(){
        var dayIndex = 34;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date35' : function(){
        var dayIndex = 35;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date36' : function(){
        var dayIndex = 36;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date37' : function(){
        var dayIndex = 37;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date38' : function(){
        var dayIndex = 38;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date39' : function(){
        var dayIndex = 39;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date40' : function(){
        var dayIndex = 40;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date41' : function(){
        var dayIndex = 41;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    },
    'click #date42' : function(){
        var dayIndex = 42;
        if(pageSession.get("meo" + dayIndex)== "haha"){
            pageSession.set("meo" + dayIndex, '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = dayIndex-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo" + dayIndex, "haha");
        }
    }
});

// Template.calendar.colortable = function() {
//     return "haha";
// };
