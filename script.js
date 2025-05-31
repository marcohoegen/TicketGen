function Generate() {
    var name = document.getElementById("name").value;
    var dateVal = new Date(document.getElementById("dateVal").value);
    var timeSlot = document.getElementById("interval").value; 
    var rand = Math.floor(Math.random() * 6) + 1;
    var weekday = dateVal.getDay();
    var weekdayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

    const newWindow = window.open();
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width; initial-scale=1.0;">
            <title>Bestätigung</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <div class="mticket">
            <div class="unihead">Hochschulsport der Universität Jena</div>
            <div class="headb">MobileTicket</div><img class="mobilecode"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAyAQMAAAA9evRUAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGElEQVQYlWNYHNtrtEpgYc4ChlHWCGEBAJWkz21BAgzyAAAAAElFTkSuQmCC"
                alt="MobilCode">
            <div class="unihead2">Teilnehmer*in</div>
            <div class="headb">${name}</div>
            <div>S-EAH | 50934-00${rand}</div>
            <div class="unihead2">Angebot</div>
            <div class="heada">Streetballanlage (Vermietung) </div>
            <div class="unihead2">gültig</div>${weekdayNames[weekday]}&nbsp;${timeSlot}<div>20.04.2025</div>
            <div class="unihead2">&nbsp;</div>
        </div>
    `);
    newWindow.document.close();
}