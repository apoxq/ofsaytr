const teamsData = {
    superlig: [
        "1-Galatasaray",
        "2-Fenerbahçe",
        "3-Beşiktaş",
        "4-Trabzonspor",
        "5-Başakşehir"
    ],
    laliga: [
        "1-Real Madrid",
        "2-Barcelona",
        "3-Atletico Madrid",
        "4-Sevilla",
        "5-Real Sociedad"
    ],
    premier: [
        "1-Manchester City",
        "2-Liverpool",
        "3-Arsenal",
        "4-Chelsea",
        "5-Manchester United"
    ]
};

function showTeams(league) {

    const grid = document.getElementById("teamGrid");
    const buttons = document.querySelectorAll(".league-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    grid.innerHTML = "";

    teamsData[league].forEach(team => {
        grid.innerHTML += `
            <div class="team-card">
                <h3>${team}</h3>
            </div>
        `;
    });
}

// FIKSTUR VERISI

const fixtureData = {
    superlig: [
        { teams: "Galatasaray vs Fenerbahçe", date: "20 Şubat - 20:00" },
        { teams: "Beşiktaş vs Trabzonspor", date: "22 Şubat - 19:00" },
        { teams: "Başakşehir vs Kasımpaşa", date: "23 Şubat - 18:00" }
    ],
    laliga: [
        { teams: "Real Madrid vs Barcelona", date: "21 Şubat - 22:00" },
        { teams: "Atletico Madrid vs Sevilla", date: "23 Şubat - 21:00" },
        { teams: "Valencia vs Villarreal", date: "24 Şubat - 20:00" }
    ],
    premier: [
        { teams: "Manchester City vs Liverpool", date: "20 Şubat - 21:30" },
        { teams: "Arsenal vs Chelsea", date: "22 Şubat - 18:00" },
        { teams: "Manchester United vs Tottenham", date: "24 Şubat - 19:30" }
    ]
};

function showMatches(league) {

    const list = document.getElementById("fixtureList");
    const buttons = document.querySelectorAll(".league-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    list.innerHTML = "";

    fixtureData[league].forEach(match => {
        list.innerHTML += `
            <div class="match-card">
                <div class="match-teams">${match.teams}</div>
                <div class="match-date">${match.date}</div>
            </div>
        `;
    });
}

if (document.getElementById("fixtureList")) {
    showMatches("superlig");
}

if (document.getElementById("teamGrid")) {
    showTeams("superlig");
}