import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render(_dirname + "/views/index.ejs");
});
app.get("/signup", (req, res) => {
    res.render(_dirname + "/views/sign.ejs");
});
app.get("/home", (req, res) => {
    res.render(_dirname + "/views/index.ejs");
});
app.post("/home", (req, res) => {
    var uname = req.body["uname"];
    var psw = req.body["psw"];
    var remember = req.body["remember"];
    var name = req.body["name"];
    var dob = req.body["dob"];
    console.log(req.body);
    res.render(_dirname + "/views/home.ejs",
        {
            username: uname,
            password: psw,
            remember_me: remember,
            name: name,
            dob: dob,
        });
});
app.post("/search", (req, res) => {
    var search = req.body["search"];
    res.render(_dirname + "/views/search.ejs",
        {
            search: search,
            songId: ["shape_of_you", "levitating", "heat_waves", "despacito", "calm_down", "apna_time_ayega", "saware", "excuses", "with_you"],
            songName: ["shape of you", "levitating", "heat waves", "despacito", "calm down", "apna time ayega", "saware", "excuses", "with you"],
            author: ["Ed Shreen", "Dua Lipa", "Glass Animals", "Luis Fonsi", "rema & Salena Gomez", "Divine", "Arijit Singh", "AP Dhillon", "AP Dhillon"],
            songPath: ["/song_covers/shape_of_you.jpg", "/song_covers/levitating.jpg", "/song_covers/heat_waves.jpg", "/song_covers/despacito.jpg", "/song_covers/calm_down.jpg", "/song_covers/apna_time_ayega.jpg", "/song_covers/saware.jpg", "/song_covers/excuses.jpeg", "/song_covers/with_you.jpg"],
            songFile: { shape_of_you: "/songs/shape_of_you.mp3", levitating: "/songs/levitating.mp3", heat_waves: "/songs/heat_waves.mp3", despacito: "/songs/despacito.mp3", calm_down: "/songs/calm_down.mp3", apna_time_ayega: "/songs/apna_time_ayega.mp3", saware: "/songs/saware.mp3", excuses: "/songs/excuses.mp3", with_you: "/songs/with_you.mp3" },
            songImgFile: { shape_of_you:"/song_covers/shape_of_you.jpg" , levitating:"/song_covers/levitating.jpg" , heat_waves:"/song_covers/heat_waves.jpg" , despacito:"/song_covers/despacito.jpg" , calm_down:"/song_covers/calm_down.jpg" , apna_time_ayega:"/song_covers/apna_time_ayega.jpg" , saware:"/song_covers/saware.jpg" , excuses:"/song_covers/excuses.jpeg" , with_you:"/song_covers/with_you.jpg" },
            audioFile : ["/songs/shape_of_you.mp3","/songs/levitating.mp3","/songs/heat_waves.mp3","/songs/despacito.mp3","/songs/calm_down.mp3","/songs/apna_time_ayega.mp3","/songs/saware.mp3","/songs/excuses.mp3","/songs/with_you.mp3"] 
        });

});
app.listen(port, () => {
    console.log(`The server is running on port:${port}`);
});