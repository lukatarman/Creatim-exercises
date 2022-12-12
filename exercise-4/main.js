// 4. Popravi spodnjo kodo, da bo funkciji možno verižiti (single-statement):

// 	var object = {
// 		alert : function(txt){
// 			alert(txt);
// 		},
// 		confirm : function(txt){
// 			confirm(txt);
// 		}
// 	}

// 	object.alert("Warning: you are about to delete this item!");
// 	object.confirm("Are you sure?");

var object = {
  alert: function (txt) {
    alert(txt);
    return this;
  },
  confirm: function (txt) {
    confirm(txt);
    return this;
  },
};

object.alert("Warning: you are about to delete this item!").confirm("Are you sure?");
