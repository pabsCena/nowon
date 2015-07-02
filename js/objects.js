//Script that contains all the objects used in Nemi

function calendarObject(id, name){
	this.id 	= 	id;
	this.name 	= 	name;
}

function EventObject(id, summary, date, location, description){
	this.id				=	id;
	this.summary		=	summary;
	this.date			=	date;
	this.location		=	location;
	this.description	=	description;
		
}

function EventDateObject(start, end){
	this.start	=	start;
	this.end	=	end;
}

function StartObject(date, time){
	this.date 	=	date;
	this.time 	=	time;
}
 
function EndObject(date, time){
	this.date 	=	date;
	this.time 	=	time;
}

function DescriptionObject(identifier, parameters){
	this.identifier	=	identifier;
	this.parameters	=	parameters;
}
  
function TextParametersObject(text){
	this.text	=	text;
}

function ImageParametersObject(image, usage, url, width, height){
	this.image	=	image;
	this.usage	=	usage;
	this.url	=	url;
	this.width	=	width;
	this.height	=	height;
}
 
function EmailParametersObject(usage, tag, address, title, body){
	this.usage		= 	usage;
	this.tag		=	tag;
	this.address 	=	address;
	this.title		=	title;
	this.body		=	body; 
}

function PhoneParametersObject(usage, tag, type, number){
	this.usage	= 	usage;
	this.tag	=	tag;
	this.type	=	type;
	this.number	=	number;
}

function UrlParametersObject(usage, type, url){
	this.usage	= 	usage;
	this.type	=	type;
	this.url	=	url;
}