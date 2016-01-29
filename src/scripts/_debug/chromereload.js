var livereloadSocket = new WebSocket("ws://localhost:35730/livereload");

livereloadSocket.onerror = function (error)
{
	console.log("reload connection got error" + JSON.stringify(error));
};

livereloadSocket.onmessage = function (e)
{
	if (e.data)
	{
		var data = JSON.parse(e.data);

		if (data && data.command === "reload")
		{
			chrome.runtime.reload();
		}
	}
};