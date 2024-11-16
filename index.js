// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Damage", artist: "H.E.R", genre: "R&B" },
    { title: "SOLD OUT", artist: "HARDY", genre: "Rock" },
    { title: "Heartbreak Anniversary", artist: "Giveon", genre: "R&B" },
    { title: "Daylight", artist: "Harry Styles", genre: "Pop" },
    { title: "Lifted", artist: "Sishii", genre: "R&B" }
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // CLEARING THE EXISTING CONTENT.
    const playlistsDiv = document.getElementById("playlists");
    playlistsDiv.innerHTML = "";

    // FOR LOOPING EACH GUARDIAN IN guardians object USING .map
    Object.keys(guardians).map(guardianName => {
        const preferredGenre = guardians[guardianName];

        // FILTER SONGS BY THE GUARDIANS PREFERRED GENRE
        const playlist = songs.filter(song => song.genre === preferredGenre);

        // CREATING A DIV THE GUARDING'S NAME
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");

        // CREATING AND APPENDING THE GUARDIAN'S NAME
        const guardianTitle = document.createElement("h3");
        guardianTitle.textContent = `${guardianName}'s Playlist`;
        playlistDiv.appendChild(guardianTitle);

        // DISPLAYING SONG LIST 
        const songList = document.createElement("ul");

        // LOOPING THROUGH PLAYLIST TO ADD SONGS TO LIST USING .map
        playlist.map(song => {
            const songItem = document.createElement("li");
            songItem.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            songList.appendChild(songItem);
        });

        playlistDiv.appendChild(songList);

        // APPENDING THE WHOLE PLAYLIST
        playlistsDiv.appendChild(playlistDiv);
    }); 

}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


