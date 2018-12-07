
const WebSocket = require('ws');
//var wsUri = "wss://echo.websocket.org/";
var wsUri = "wss://s.altnet.rippletest.net:51233/";

//console.log(process.argv);
//console.log(process.argv[2]);

var command = process.argv[2];

init();

function init()
{
	testWebSocket();
}

function testWebSocket()
{
	websocket = new WebSocket(wsUri);
	websocket.onopen = function(evt) { onOpen(evt) };
	websocket.onclose = function(evt) { onClose(evt) };
	websocket.onmessage = function(evt) { onMessage(evt) };
	websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt)
{
	writeToScreen("CONNECTED");
	doSend(command);
}

function onClose(evt)
{
	writeToScreen("DISCONNECTED");
}

function onMessage(evt)
{
	writeToScreen('RESPONSE: ' + evt.data);
	websocket.close();
}

function onError(evt)
{
	writeToScreen('ERROR: ' + evt.data);
}

function doSend(message)
{
	writeToScreen("SENT: " + message);
	websocket.send(message);
}

function writeToScreen(message)
{
	console.log(message);
}

