/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var Mymodel = Backbone.Model.extend({
	  promtcolor : () => {
	    var cssColor = prompt("Please enter a Css Color");
	    this.set({color : cssColor});
	  }
	});
	var sidebar = new Mymodel();
	sidebar.on('change:color', (model,color) => {
	  console.log(model);
	  console.log("gabo");
	  console.log(color);
	});
	var myFirstCol = Backbone.Collection.extend({
	  model : Mymodel
	});
	var CssColors = new myFirstCol();
	CssColors.on('add',(param1) => {
	  console.log(param1.get('color'));
	});
	sidebar.promtcolor();

	CssColors.add([{color:'gray'},{color:'black'},{color:'blue'}]);
	var emptyObj ={};
	var emptyListener = {};
	Object.assign(emptyObj,Backbone.Events);
	Object.assign(emptyListener,Backbone.Events);

	console.log(emptyObj);

	setTimeout(()=>{
	  for (var i = 0;i<= 10;i++) {
	    console.log(i);
	    emptyObj.trigger("seJodio","HHHHHHHHHH");
	    if(i===3)
	      emptyListener.stopListening(emptyObj);
	  }},3000);

	/*emptyObj.bind("seJodio",(param)=>{
	  console.log(param);
	});*/
	/*
	  emptyObj.once("seJodio",(msn)=>{
	    console.log(msn);
	  }); 
	  */

	emptyListener.listenTo(emptyObj,"seJodio",(msn)=>{
	  console.log(msn);
	}); 


	/*emptyObj.on("change",(el)=>{console.log(el)}); */

	emptyObj.gabo="fds";


/***/ }
/******/ ]);