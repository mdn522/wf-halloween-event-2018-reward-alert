xhook.after(function(request, response) {
    if (request.url.endsWith('dynamic/minigames/?g=event_step&a=step')) {
        var obj = JSON.parse(response.text);
        if ('prize' in obj && obj.prize.title) {
            alert("You got " + obj.prize.title);
            // DEBUG
            console.log(obj);
        }
    }
});