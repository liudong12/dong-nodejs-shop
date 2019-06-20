function hbsHelpers(hbs) {
  return hbs.create({
     helpers: {
        liu: function () { return 'ld!'; },
        dong: function () { return 'dong!'; },
        concat: function() {
            var outStr = '';
            for(var arg in arguments){
                if(typeof arguments[arg]!='object'){
                    outStr += arguments[arg];
                }
            }
            return outStr;
        },
        ifCond_absolute_equal: function(v1, v2, options) {
          if(v1 === v2) {
            return options.fn(this);
          }
          return options.inverse(this);
        },
        equal: function(lvalue, rvalue, options) {
            if (arguments.length < 3)
                throw new Error("Handlebars Helper equal needs 2 parameters");
            if( lvalue!=rvalue ) {
                return options.inverse(this);
            } else {
                return options.fn(this);
            }
        },
        compare: function(lvalue, rvalue, options) {
        	// {{#compare unicorns ponies operator="<"}}
        	// I knew it, unicorns are just low-quality ponies!
        	// {{/compare}}

            if (arguments.length < 3)
                throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

            var operator = options.hash.operator || "==";

            var operators = {
                '==':       function(l,r) { return l == r; },
                '===':      function(l,r) { return l === r; },
                '!=':       function(l,r) { return l != r; },
                '<':        function(l,r) { return l < r; },
                '>':        function(l,r) { return l > r; },
                '<=':       function(l,r) { return l <= r; },
                '>=':       function(l,r) { return l >= r; },
                'typeof':   function(l,r) { return typeof l == r; }
            }

            if (!operators[operator])
                throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

            var result = operators[operator](lvalue,rvalue);

            if( result ) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        },
        log: function(something) {
          //{{log someVariable}}
          console.log(something);
        },
        // formatCurrency: function(num) {
        //     num = num.toString().replace(/\$|\,/g,'');
        //     if(isNaN(num))
        //         num = "0";
        //     sign = (num == (num = Math.abs(num)));
        //     num = Math.floor(num*100+0.50000000001);
        //     cents = num%100;
        //     num = Math.floor(num/100).toString();
        //     if(cents<10)
        //     cents = "0" + cents;
        //     for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        //     num = num.substring(0,num.length-(4*i+3))+','+
        //     num.substring(num.length-(4*i+3));
        //     return (((sign)?'':'-') + num + '.' + cents);
        // },
        formatCurrency:function(num){  
            if(!num || isNaN(num)){  
                num ="0.00";  
            }  
            num = num.toString().replace(/\$|\,/g,'');  
            sign =(num ==(num =Math.abs(num)));  
            num =Math.floor(num*100+0.50000000001);  
            cents = num%100;  
            num = Math.floor(num/100).toString();if(cents<10)  
            cents ="0"+ cents;  
            for(var i =0; i <Math.floor((num.length-(1+i))/3); i++){  
               num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));  
            }  
            return(((sign)?'':'-')+ num +'.'+ cents);  
            },  
        ifCond: function (v1, operator, v2, options) {
                return checkCondition(v1, operator, v2)
                            ? options.fn(this)
                            : options.inverse(this);
        },
        getYear: function (num) {
                var date = new Date();
                var year = date.getFullYear();
                return year + num;
        },
        getDate: function (date) {
            var date = new Date(date);
             
            //return console.log(Object.prototype.toString.call(date));  //[object String]
            //var deserialized = new Date(JSON.parse(serialized));
            var dd = date.getDate();
            var mm = date.getMonth()+1; //January is 0!

            var yyyy = date.getFullYear();
            if(dd<10){
                dd='0'+dd;
            } 
            if(mm<10){
                mm='0'+mm;
            } 
            //var todayDate = dd+'/'+mm+'/'+yyyy;
            return mm+'/'+dd+'/'+yyyy;
        },
        decryptPasswordCrypto: function (user) {
            return user.decryptPasswordCrypto(user.password);            
        },
        toLowerCase: function(value) {
            return (value && typeof value === 'string') ? value.toLowerCase() : '';
        },
        toUpperCase: function(value) {
            return (value && typeof value === 'string') ? value.toUpperCase() : '';
        }
    },
    defaultLayout: 'layout', 
    extname: '.hbs'

  });
}

//用于 helper: ifCond 的函数
/*
Here is how one would use it:

{{#ifCond value "===" value2}}
    Values are equal!
{{else}}
    Values are different!
{{/ifCond}}
 */ 
function checkCondition(v1, operator, v2) {
        switch(operator) {
            case '==':
                return (v1 == v2);
            case '===':
                return (v1 === v2);
            case '!==':
                return (v1 !== v2);
            case '<':
                return (v1 < v2);
            case '<=':
                return (v1 <= v2);
            case '>':
                return (v1 > v2);
            case '>=':
                return (v1 >= v2);
            case '&&':
                return (v1 && v2);
            case '||':
                return (v1 || v2);
            default:
                return false;
        }
}

module.exports = hbsHelpers;