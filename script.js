document.getElementById('submitButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (nameInput === "") {
        document.getElementById('output').innerText = "Please enter a name.";
        return;
    }

    const khodamList = [
        "oli gardan",
        "sol sepatu",
        "rice cooker",
        "gelas",
        "tisu mejik",
        "ic power",
        "velg traktor",
        "beat karbu",
        "lcd amoled",
        "usb type c",
        "paint remover",
        "spion pcx",
        "ecu juken 5",
        "ban primax sk01",
        "alok",
        "kelly",
        "hayato",
        "speaker",
        "kandang ayam",
        "kursi roda",
        "SOEHARTO",
        "pak tatang",
        "kapal laut",
        "mas vincent",
        "headset blutut",
        "spull aerox",
        "karbu pe 28",
        
    ];

    const randomIndex = Math.floor(Math.random() * khodamList.length);
    const khodamOutput = khodamList[randomIndex];

    document.getElementById('output').innerText = `${nameInput}, khodam anda adalah ${khodamOutput}`;
});
