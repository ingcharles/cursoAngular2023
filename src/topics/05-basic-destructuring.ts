export{}
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song:string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPayer : AudioPlayer = {
    audioVolume: 0.5,
    songDuration: 100,
    song: "Mes" ,
    details: {
        author: "ed sheet",
        year: 2015
    }
}

// const { } = audioPayer;
// console.log('Song',audioPayer.song);
// console.log('Duration',audioPayer.songDuration);
// console.log('Author',audioPayer.details.author);
const song = 'new Song';

const {song:anotherSong, songDuration:duration,details:{author}} = audioPayer;
// const {song:anotherSong, songDuration:duration} = audioPayer;
// const {author:author} = audioPayer.details;
// console.log('Song',anotherSong);
// console.log('Duration',duration);
// console.log('Author',author);

//?-------------------------------------------
// const dbz : string[] = ['Goku', 'Vegeta','Trunks'];
// console.error('Persona 3:', dbz[2]);
// const trunks = dbz[3] || 'No hay personaje';
// // console.error('Persona 3:', dbz[3] || 'No hay personaje');
// console.error('Persona 3:',trunks);
// const [ , ,trunks] : string[] = ['Goku', 'Vegeta','Trunks'];
const [ , ,trunks = 'Not found'] : string[] = ['Goku', 'Vegeta'];
console.error('Persona 3:',trunks);