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
    'click #date8' : function(){//chuyen date thanh date8
        if(pageSession.get("meo8")== "haha"){// chuyen meo nay thanh meo8 va tuong tu voi cac cai duoi
            pageSession.set("meo8", '');    // chuyen meo
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 4-startDate+1;// chuyen so 4 thanh so 8 theo #date va tuong tu voi cai ben duoi
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo8", "haha");// chuyen meo
        }
    },
    'click #date9' : function(){
        if(pageSession.get("meo9")== "haha"){
            pageSession.set("meo9", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo9", "haha");
        }
    },
    'click #date10' : function(){
        if(pageSession.get("meo10")== "haha"){
            pageSession.set("meo10", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo10", "haha");
        }
    },
    'click #date11' : function(){
        if(pageSession.get("meo11")== "haha"){
            pageSession.set("meo11", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo11", "haha");
        }
    },
    'click #date12' : function(){
        if(pageSession.get("meo12")== "haha"){
            pageSession.set("meo12", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo12", "haha");
        }
    },
    'click #date13' : function(){
        if(pageSession.get("meo13")== "haha"){
            pageSession.set("meo13", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo13", "haha");
        }
    },
    'click #date14' : function(){
        if(pageSession.get("meo14")== "haha"){
            pageSession.set("meo14", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo14", "haha");
        }
    },
    'click #date15' : function(){
        if(pageSession.get("meo15")== "haha"){
            pageSession.set("meo15", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo15", "haha");
        }
    },
    'click #date16' : function(){
        if(pageSession.get("meo16")== "haha"){
            pageSession.set("meo16", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo16", "haha");
        }
    },
    'click #date17' : function(){
        if(pageSession.get("meo17")== "haha"){
            pageSession.set("meo17", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo17", "haha");
        }
    },
    'click #date18' : function(){
        if(pageSession.get("meo18")== "haha"){
            pageSession.set("meo18", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo18", "haha");
        }
    },
    'click #date19' : function(){
        if(pageSession.get("meo19")== "haha"){
            pageSession.set("meo19", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo19", "haha");
        }
    },
    'click #date20' : function(){
        if(pageSession.get("meo20")== "haha"){
            pageSession.set("meo20", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo20", "haha");
        }
    },
    'click #date21' : function(){
        if(pageSession.get("meo21")== "haha"){
            pageSession.set("meo21", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo21", "haha");
        }
    },
    'click #date22' : function(){
        if(pageSession.get("meo22")== "haha"){
            pageSession.set("meo22", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo22", "haha");
        }
    },
    'click #date23' : function(){
        if(pageSession.get("meo23")== "haha"){
            pageSession.set("meo23", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo23", "haha");
        }
    },
    'click #date24' : function(){
        if(pageSession.get("meo24")== "haha"){
            pageSession.set("meo24", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo24", "haha");
        }
    },
    'click #date25' : function(){
        if(pageSession.get("meo25")== "haha"){
            pageSession.set("meo25", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo25", "haha");
        }
    },
    'click #date26' : function(){
        if(pageSession.get("meo26")== "haha"){
            pageSession.set("meo26", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo26", "haha");
        }
    },
    'click #date27' : function(){
        if(pageSession.get("meo27")== "haha"){
            pageSession.set("meo27", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo27", "haha");
        }
    },
    'click #date28' : function(){
        if(pageSession.get("meo28")== "haha"){
            pageSession.set("meo28", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo28", "haha");
        }
    },
    'click #date29' : function(){
        if(pageSession.get("meo29")== "haha"){
            pageSession.set("meo29", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo29", "haha");
        }
    },
    'click #date30' : function(){
        if(pageSession.get("meo30")== "haha"){
            pageSession.set("meo30", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo30", "haha");
        }
    },
    'click #date31' : function(){
        if(pageSession.get("meo31")== "haha"){
            pageSession.set("meo31", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo31", "haha");
        }
    },
    'click #date32' : function(){
        if(pageSession.get("meo32")== "haha"){
            pageSession.set("meo32", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo32", "haha");
        }
    },
    'click #date33' : function(){
        if(pageSession.get("meo33")== "haha"){
            pageSession.set("meo33", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo33", "haha");
        }
    },
    'click #date34' : function(){
        if(pageSession.get("meo34")== "haha"){
            pageSession.set("meo34", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo34", "haha");
        }
    },
    'click #date35' : function(){
        if(pageSession.get("meo35")== "haha"){
            pageSession.set("meo35", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo35", "haha");
        }
    },
    'click #date36' : function(){
        if(pageSession.get("meo36")== "haha"){
            pageSession.set("meo36", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo36", "haha");
        }
    },
    'click #date37' : function(){
        if(pageSession.get("meo37")== "haha"){
            pageSession.set("meo37", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo37", "haha");
        }
    },
    'click #date38' : function(){
        if(pageSession.get("meo38")== "haha"){
            pageSession.set("meo38", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo38", "haha");
        }
    },
    'click #date39' : function(){
        if(pageSession.get("meo39")== "haha"){
            pageSession.set("meo39", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo39", "haha");
        }
    },
    'click #date40' : function(){
        if(pageSession.get("meo40")== "haha"){
            pageSession.set("meo40", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo40", "haha");
        }
    },
    'click #date41' : function(){
        if(pageSession.get("meo41")== "haha"){
            pageSession.set("meo41", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
            pageSession.set("meo41", "haha");
        }
    },
    'click #date42' : function(){
        if(pageSession.get("meo42")== "haha"){
            pageSession.set("meo42", '');
        }else{
            var startDate = new Date(year+"/"+month+"/" +1).getDay() + 1;
            var numOfDay = new Date(year,month,0).getDate();
            var day = 3-startDate+1;
            var checkday= (day>0 && day<=numOfDay)?day:0;
            if(checkday!=0)
               pageSession.set("meo42", "haha");
        }
    }
});

// Template.calendar.colortable = function() {
//     return "haha";
// };
