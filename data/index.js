/* import * as XLSX from 'xlsx';

const readXlsxFile = (file) => {
	return new Promise((resolve, reject) => {
	  const reader = new FileReader();
	  reader.onload = (e) => {
		const data = new Uint8Array(e.target.result);
		const workbook = XLSX.read(data, { type: 'array' });
		const worksheet = workbook.Sheets[workbook.SheetNames[0]];
		const json = XLSX.utils.sheet_to_json();
		resolve(json);
	  };
	  reader.onerror = (error) => reject(error);
	  reader.readAsworksheetArrayBuffer(file);
	});
  }; */


export let PLAYLIST = [

    /* 00 LIST Club Urbano */
	{
		index: "0",
		type: "playlist",
		title: "Club Urbano",
		link: "urbano",
		playlistBg: "rgb(95, 74, 255)",
		imgUrl:	"https://mix-tape.web.app/image/set/urbano.jpg",
		hoverColor: "rgb(95, 74, 255)",
		artist: "Ali Bhtty – Urban music",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Club Urbano 01",
				songimg: "https://mix-tape.web.app/image/set/urbano/urbano01.jpg",
				songArtist: "Ali Bhtty",
				link: "https://dl.dropbox.com/scl/fi/hxmbva1tpo9ecwv2iqzdw/Club-Urbano-01.m4a?rlkey=n4t40ot0gtqo80u9ow9e6srde&dl=1", /* https://dl.dropbox.com/s/qnogflgjdoyvc77/Ep.%20015%20House%20Sause%20-%20Ali%20Bhtty.m4a */
				trackTime: "23:37",
			},
		],
	},

	/* 01 LIST Radioshow  🅰🅱🅲🅳🅴🅵🅶🅷🅸🅵🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉 */
	{
		index: "1",
		type: "playlist",
		title: "Radioshow",
		link: "radioshow",
		playlistBg: "rgb(0, 179, 255)",
		imgUrl:	"https://mix-tape.web.app/image/set/selection.jpg",
		hoverColor: "rgb(0, 179, 255)",
		artist: "Ali Bhtty - Bass music",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Ep.015 House Sauce",
				songimg: "https://mix-tape.web.app/image/set/radioshow/015.jpg",
				songArtist: "Ali Bhtty",
				link: "https://dl.dropbox.com/s/qnogflgjdoyvc77/Ep.%20015%20House%20Sause%20-%20Ali%20Bhtty.m4a", /* https://changarrito.es/assets/mus/ab/Ep.015-House-Sause-Ali-Bhtty.m4a */
				trackTime: "16:00",
			},
			{
				index: "2",
				songName: "Ep.014 BCN City Vibes",
				songimg: "https://mix-tape.web.app/image/set/radioshow/014.jpg",
				songArtist: "Ali Bhtty",
				link: "https://dl.dropbox.com/s/azpd0pjc7ozif0n/Ep.%20014%20BCN%20City%20Vibes%20-%20Ali%20Bhtty.m4a", /* https://changarrito.es/assets/mus/ab/Ep.014-BCN-City-Vibes-Ali-Bhtty.m4a */
				trackTime: "16:31",
			},
			{
				index: "3",
				songName: "Ep.013 Cy-BORED",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/013.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://dl.dropbox.com/s/iw7it2twnpkxsm7/Ep.%20013%20Cy-bored%20-%20Ali%20Bhtty.m4a", /* https://changarrito.es/assets/mus/ab/Ep.013-Cy-bored-Ali-Bhtty.m4a */
				trackTime: "14:55",
			},
			{
				index: "4",
				songName: "Ep.012 Turn It Up",
				songimg: "https://mix-tape.web.app/image/set/radioshow/012.jpg",
				songArtist: "Ali Bhtty",
				link: "https://dl.dropbox.com/s/v36xlhw8ichvr4l/Ep.%20012%20Turn%20It%20Up%20-%20Ali%20Bhtty.m4a", /* https://changarrito.es/assets/mus/ab/Ep.012-Turn-It-Up-Ali-Bhtty.m4a */
				trackTime: "16:34",
			},
			{
				index: "5",
				songName: "Ep.011 Blackouts",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/011.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://dl.dropbox.com/s/bjffl4j12uqng34/Ep.%20011%20Blackouts%20-%20Ali%20Bhtty.m4a", /* https://changarrito.es/assets/mus/ab/Ep.011-Blackouts-Ali-Bhtty.m4a */
				trackTime: "19:09",
			},
			{
				index: "6",
				songName: "Ep.010 Wild Therapy",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/010.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://dl.dropbox.com/s/ll7ex466kzwpt77/Ep.%20010%20Wild%20Therapy%20-%20Ali%20Bhtty.m4a",  /* https://changarrito.es/assets/mus/ab/Ep.010-Wild-Therapy-Ali-Bhtty.m4a */
				trackTime: "32:03",
			},
			{
				index: "7",
				songName: "Ep.009 Hard EDM & Rock",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/009.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://changarrito.es/assets/mus/ab/Ep.009-Hard-EDM&Rock-Ali-Bhtty.m4a",
				trackTime: "34:41",
			},
			{
				index: "8",
				songName: "Ep.008 Reggaeton 2021",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/008.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://changarrito.es/assets/mus/ab/Ep.008-Reggaeton-2021-Ali-Bhtty.m4a",
				trackTime: "32:59",
			},
			{
				index: "9",
				songName: "🅴 Ep.007 Altering Reality",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/007.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://dl.dropbox.com/s/tp5aon8i5g91lwp/Ep.%20007%20Altering%20Reality%20-%20Ali%20Bhtty.m4a", /*  https://changarrito.es/assets/mus/ab/Ep.007-Altering-Reality-Ali-Bhtty.m4a */
				trackTime: "39:31",
			},
			{
				index: "10",
				songName: "Ep.006 YHLQMDLG Sesion",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/006.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://dl.dropbox.com/s/4f1he8ymqai22xf/Ep.%20006%20YHLQMDLG%20Bad%20Bunny%20-%20Ali%20Bhtty.m4a", /* https://changarrito.es/assets/mus/ab/Ep.006-YHLQMDLG-Bad-Bunny-Ali-Bhtty.m4a */
				trackTime: "34:31",
			},
			{
				index: "11",
				songName: "Ep.005 Salsatón",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/005.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://changarrito.es/assets/mus/ab/Ep.005-Salsaton-Ali-Bhtty.m4a",
				trackTime: "34:41",
			},
			{
				index: "12",
				songName: "Ep.004 ElectroPOP",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/004.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://changarrito.es/assets/mus/ab/Ep.004-ElectroPOP-Ali-Bhtty.m4a",
				trackTime: "32:59",
			},
			{
				index: "13",
				songName: "Ep.003 Progressive",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/003.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://changarrito.es/assets/mus/ab/Ep.003-Progressive-Ali-Bhtty.m4a",
				trackTime: "34:41",
			},
			{
				index: "14",
				songName: "🅴 Ep.002 Reggaeton Old School",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/002.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://changarrito.es/assets/mus/ab/Ep.002-Reggaeton-Old-School-Ali-Bhtty.m4a",
				trackTime: "32:59",
			},
			{
				index: "15",
				songName: "Ep.001 Dirty House",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/001.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://changarrito.es/assets/mus/ab/Ep.001-Dirty-House-Ali-Bhtty.m4a",
				trackTime: "34:41",
			},
			{
				index: "16",
				songName: "🅴 Ep.000 Bounce Drop",
				songimg:
					"https://mix-tape.web.app/image/set/radioshow/000.jpg",
				songArtist: "Ali Bhtty",
				link:
					"https://changarrito.es/assets/mus/ab/Ep.000-Bounce-Drop-Ali-Bhtty.m4a",
				trackTime: "32:59",
			},
		],
	},

	/* 02 LIST Collection */
	{
		index: "2",
		type: "playlist",
		title: "Mixtape Collection",
		link: "colección",
		playlistBg: "rgb(255, 94, 77)",
		imgUrl: "https://mix-tape.web.app/image/set/alibhtty.jpg",
		hoverColor: "rgb(255, 94, 77)",
		artist: "Electronic 4ever – Bass music",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		playlistBg: "rgb(255, 94, 77)",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Turn On The Lights",
				songimg: "https://mix-tape.web.app/image/disco/turn-on.jpg",
				songArtist: "Fred Again, Knock2",
				link: "https://dl.dropbox.com/s/mje86h2ubhxk6e0/Fred%20again%20-%20Turn%20On%20The%20Lights%20again%20%28Knock2%20Remix%29.mp3?dl=1",
				trackTime: "3:27",
			},
			{
				index: "2",
				songName: "Nowhere (Odd Mob Remix)",
				songimg: "https://mix-tape.web.app/image/disco/nowhere.jpg",
				songArtist: "Otosan",
				link: "https://dl.dropbox.com/s/qfbat76durimxuf/Otosan%20-%20Nowhere%20%28Odd%20Mob%20Remix%29.mp3?dl=1",
				trackTime: "4:25",
			},
			{
				index: "3",
				songName: "Right Now (Ali Bhtty Remix)",
				songimg: "https://mix-tape.web.app/image/disco/right-now.jpg",
				songArtist: "Ali Bhtty ft. Wxlfgvng!",
				link: "https://dl.dropbox.com/s/rd2tfbwmr5dc1iv/Right%20Now%20-%20Wxlfgvng%20%28Ali%20Bhtty%20Remix%29.mp3",
				trackTime: "3:15",
			},
		],
	},

	/* 03 LIST Top Spain */
	{
		index: "3",
		type: "playlist",
		title: "Top España",
		link: "top-spain",
		playlistBg: "rgb(255, 94, 77)",
		imgUrl: "https://mix-tape.web.app/image/listas/top-spain/top-spain.jpg",
		hoverColor: "rgb(255, 94, 77)",
		artist: "Lo más sonado en España.",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Supernova",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/supernova.jpg",
				songArtist: "Saiko",
				link: "https://dl.dropbox.com/s/1ylcet7f4j8rnnu/01%20-%20Saiko%20-%20Supernova.mp3",
				trackTime: "3:10",
			},
			{
				index: "2",
				songName: "EL TONTO",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/eltonto.jpg",
				songArtist: "Lola Indigo, Quevedo",
				link: "https://dl.dropbox.com/s/r8wy0gfgssuocbg/02%20-%20Lola%20Indigo%20-%20EL%20TONTO.mp3",
				trackTime: "3:07",
			},
			{
				index: "3",
				songName: "BESO",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/rr.jpg",
				songArtist: "ROSALÍA, Rauw Alejandro",
				link: "https://dl.dropbox.com/s/u5aayd0vfql75c2/09%20-%20ROSAL%C3%8DA%20-%20BESO.mp3",
				trackTime: "3:14",
			},
			{
				index: "4",
				songName: "El Merengue",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/elmerengue.jpg",
				songArtist: "Marshmello, Manuel Turizo",
				link: "https://dl.dropbox.com/s/2qwxgs35w5k9l1z/05%20-%20Marshmello%20-%20El%20Merengue.mp3",
				trackTime: "3:09",
			},
			{
				index: "5",
				songName: "Mami Chula",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/mamichula.jpg",
				songArtist: "Jhayco, Quevedo",
				link: "https://dl.dropbox.com/s/zjxhswzy6ck0dg4/04%20-%20Jhayco%20-%20Mami%20Chula.mp3",
				trackTime: "3:40",
			},
			{
				index: "6",
				songName: "Classy 101",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/classy101.jpg",
				songArtist: "Feid, Young Miko",
				link: "https://dl.dropbox.com/s/u0g4193fpm4glk8/22%20-%20Feid%20-%20Classy%20101.mp3",
				trackTime: "3:15",
			},
			{
				index: "7",
				songName: "Nochentera",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/nochentera.jpg",
				songArtist: "Vicco",
				link: "https://dl.dropbox.com/s/dt2i8yalciizreq/15%20-%20Vicco%20-%20Nochentera.mp3",
				trackTime: "3:22",
			},
			{
				index: "8",
				songName: "TQG",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/tqg.jpg",
				songArtist: "KAROL G, Shakira",
				link: "https://dl.dropbox.com/s/f4lyxqvnd9l3hjo/KAROL%20G%20-%20TQG.mp3",
				trackTime: "3:17",
			},
			{
				index: "9",
				songName: "Clavaito",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/clavaito.jpg",
				songArtist: "Chanel, Abraham Mateo",
				link: "https://dl.dropbox.com/s/q2zsfkcqm4dq7q1/Chanel%20-%20Clavaito.mp3",
				trackTime: "2:42",
			},
			{
				index: "10",
				songName: "Yandel 150",
				songimg: "https://mix-tape.web.app/image/listas/top-spain/yandel150.jpg",
				songArtist: "Yandel, Feid",
				link: "https://dl.dropbox.com/s/03d5tfgoo88np7r/04%20-%20Yandel%20-%20Yandel%20150.mp3",
				trackTime: "3:36",
			},
		],
	},

	/* 04 LIST Top Perú */
	{
		index: "4",
		type: "playlist",
		title: "Top Perú",
		link: "top-peru",
		playlistBg: "rgb(255, 193, 130)",
		imgUrl: "https://mix-tape.web.app/image/listas/top-peru/top-peru.jpg",
		hoverColor: "rgb(255, 193, 130)",
		artist: "Lo más sonado en Perú.",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "un x100to",
				songimg:
					"https://mix-tape.web.app/image/listas/top-peru/unx100to.jpg",
				songArtist: "Grupo Frontera, Bad Bunny",
				link:
					"https://dl.dropbox.com/s/iqe2em66cmpx1xf/01%20-%20Grupo%20Frontera%20-%20un%20x100to.mp3",
				trackTime: "3:15",
			},
			{
				index: "2",
				songName: "Classy 101",
				songimg:
					"https://mix-tape.web.app/image/listas/top-spain/classy101.jpg",
				songArtist: "Feid, Young Miko",
				link:
					"https://dl.dropbox.com/s/u0g4193fpm4glk8/22%20-%20Feid%20-%20Classy%20101.mp3",
				trackTime: "3:16",
			},
			{
				index: "3",
				songName: "La Bebe (Remix)",
				songimg:
					"https://mix-tape.web.app/image/listas/top-peru/la-bebe-remix.jpg",
				songArtist: "Yng Lvcas",
				link:
					"https://dl.dropbox.com/s/n82pcl4q5t1eju9/02%20-%20Yng%20Lvcas%20-%20La%20Bebe%20%28Remix%29.mp3",
				trackTime: "3:54",
			},
			{
				index: "4",
				songName: "Ella Baila Sola",
				songimg:
					"https://mix-tape.web.app/image/listas/top-peru/ella-baila-sola.jpg",
				songArtist: "Eslabon Armado",
				link:
					"https://dl.dropbox.com/s/rgm74ru74zgwkyw/Eslabon%20Armado%20-%20Ella%20Baila%20Sola.mp3",
				trackTime: "2:46",
			},
			{
				index: "5",
				songName: "Yandel 150",
				songimg:
					"https://mix-tape.web.app/image/listas/top-spain/yandel150.jpg",
				songArtist: "Yandel, Feid",
				link:
					"https://dl.dropbox.com/s/03d5tfgoo88np7r/04%20-%20Yandel%20-%20Yandel%20150.mp3",
				trackTime: "3:36",
			},
			{
				index: "6",
				songName: "TQG",
				songimg:
					"https://mix-tape.web.app/image/listas/top-spain/tqg.jpg",
				songArtist: "KAROL G, Shakira",
				link:
					"https://dl.dropbox.com/s/f4lyxqvnd9l3hjo/KAROL%20G%20-%20TQG.mp3",
				trackTime: "3:18",
			},
			{
				index: "7",
				songName: "Feliz Cumpleaños Ferxxo",
				songimg:
					"https://mix-tape.web.app/image/listas/top-peru/feliz-cumpleaños-ferxxo.jpg",
				songArtist: "Feid",
				link:
					"https://dl.dropbox.com/s/83ffl896q5yd8rr/Feid%20-%20Feliz%20Cumplea%C3%B1os%20Ferxxo.mp3",
				trackTime: "2:36",
			},
			{
				index: "8",
				songName: "CHORRITO PA LAS ANIMAS",
				songimg:
					"https://mix-tape.web.app/image/listas/top-peru/chorrito-pa-las-animas.jpg",
				songArtist: "Feid",
				link:
					"https://dl.dropbox.com/s/dukj5fhdzx4obh6/Feid%20-%20CHORRITO%20PA%20LAS%20ANIMAS.mp3",
				trackTime: "2:48",
			},
			{
				index: "9",
				songName: "Hey Mor",
				songimg:
					"https://mix-tape.web.app/image/listas/top-peru/hey-mor.jpg",
				songArtist: "Ozuna",
				link:
					"https://dl.dropbox.com/s/4ch011sf1dpw5fx/Ozuna%20-%20Hey%20Mor.mp3",
				trackTime: "3:17",
			},
			{
				index: "10",
				songName: "Rara Vez",
				songimg:
					"https://mix-tape.web.app/image/listas/top-peru/rara-vez.jpg",
				songArtist: "Taiu",
				link:
					"https://dl.dropbox.com/s/q8yy6n2ii7stoxe/14%20-%20Taiu%20-%20Rara%20Vez.mp3",
				trackTime: "2:09",
			},
		],
	},

	/* 05 LIST Knock2 */
	{
		index: "5",
		type: "playlist",
		title: "En bucle",
		link: "favoritos",
		playlistBg: "rgb(255, 102, 0)",
		imgUrl:	"https://mix-tape.web.app/image/set/knock2.jpg",
		hoverColor: "rgb(255, 102, 0)",
		artist: "lo más sonado",
		artistImgUrl: "https://mix-tape.web.app/image/djs/knock2/knock2.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Turn On The Lights",
				songimg: "https://mix-tape.web.app/image/disco/turn-on.jpg",
				songArtist: "Fred Again, Knock2",
				link: "https://dl.dropbox.com/s/mje86h2ubhxk6e0/Fred%20again%20-%20Turn%20On%20The%20Lights%20again%20%28Knock2%20Remix%29.mp3",
				trackTime: "3:27",
			},
			{
				index: "2",
				songName: "Calling (Ali Bhtty Remix)",
				songimg: "https://mix-tape.web.app/image/disco/calling.jpg",
				songArtist: "Jalen ft. Ali Bhtty",
				link: "https://dl.dropbox.com/s/67upkqw2hpgdz5w/Calling%20-%20Jalen%20%28Ali%20Bhtty%20Remix%29.mp3",
				trackTime: "4:12",
			},
		],
	},

	/* 06 LIST Mood2 - demotapes */
	{
		index: "6",
		type: "playlist",
		title: "Mood 2",
		link: "mood2",
		playlistBg: "rgb(255, 171, 38)",
		imgUrl:	"https://mix-tape.web.app/image/set/demotapes-bg.jpg", /* https://dailymix-images.scdn.co/v2/img/04cd9bccf59e8061f13e779d1001975a60fb837a/2/tr/default */
		hoverColor: "rgb(255, 171, 38)",
		artist:	"En tu peak.",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "demotapes with friends mix",
				songimg: "https://mix-tape.web.app/image/set/demotapes.jpg",
				songArtist: "demotapes",
				link: "https://drive.google.com/uc?id=1EjpaONlLnfvQ589iN2nATSvWDz_75_vb&export=download",
				trackTime: "19:56",
			},
		],
	},

	/* 07 LIST Remixes */
	{
		index: "7",
		type: "playlist",
		title: "Remixes",
		link: "remixes",
		playlistBg: "rgb(249, 255, 168)",
		imgUrl:	"https://mix-tape.web.app/image/set/remixes.jpg",
		hoverColor: "rgb(249, 255, 168)",
		artist:	"Invitados",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Turn On The Lights",
				songimg: "https://mix-tape.web.app/image/disco/turn-on.jpg",
				songArtist: "Fred Again, Knock2",
				link: "https://dl.dropbox.com/s/mje86h2ubhxk6e0/Fred%20again%20-%20Turn%20On%20The%20Lights%20again%20%28Knock2%20Remix%29.mp3?dl=1",
				trackTime: "3:27",
			},
			{
				index: "2",
				songName: "Embrace",
				songimg: "https://mix-tape.web.app/image/disco/mith-1x1.jpg",
				songArtist: "Ali Bhtty",
				link: "https://dl.dropbox.com/s/vy8kcd79brun966/Mith%20-%20Ali%20Bhtty.m4a",
				trackTime: "2:48",
			},
			{
				index: "3",
				songName: "Calling",
				songimg: "https://mix-tape.web.app/image/disco/calling.jpg",
				songArtist: "Jalen, Ali Bhtty",
				link: "https://dl.dropbox.com/s/e4y32w713qjcekj/1-01%20Calling%202%20%28feat.%20Ali%20Bhtty%29.m4a",
				trackTime: "4:12",
			},
		],
	},

	/* 8 ALBUM Calling */
	{
		index: "8",
		type: "album",
		title: "Calling",
		link: "calling",
		playlistBg: "rgb(255, 102, 0)",
		imgUrl:	"https://mix-tape.web.app/image/set/calling.jpg",
		hoverColor: "rgb(255, 102, 0)",
		artist: "Jalen ft. Ali Bhtty",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Calling (Ali Bhtty Remix)",
				songimg: "https://mix-tape.web.app/image/disco/calling.jpg",
				songArtist: "Jalen ft. Ali Bhtty",
				link: "https://dl.dropbox.com/s/e4y32w713qjcekj/1-01%20Calling%202%20%28feat.%20Ali%20Bhtty%29.m4a",
				trackTime: "4:12",
			},
			{
				index: "2",
				songName: "Calling",
				songimg: "https://mix-tape.web.app/image/disco/calling-o.jpg",
				songArtist: "Jalen",
				link: "https://dl.dropbox.com/s/p6c083jsb53ow3k/1-01%20CALLING.m4a",
				trackTime: "2:55",
			},
		],
	},

	/* 9 ALBUM Cage Script */
	{
		index: "9",
		type: "album",
		title: "Cage Script",
		link: "cage-script",
		playlistBg: "rgb(136, 157, 207)",
		imgUrl:	"https://mix-tape.web.app/image/set/cage-script.jpg",
		hoverColor: "rgb(136, 157, 207)",
		artist: "k?d – Future EDM",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Be Mine",
				songimg: "https://mix-tape.web.app/image/disco/cage-script.jpg",
				songArtist: "K?d",
				link: "https://dl.dropbox.com/s/bsxoax5xyoqcnfj/09%20-%20BE%20MINE.mp3",
				trackTime: "0:30",
			},
			{
				index: "2",
				songName: "Three in the morning",
				songimg: "https://mix-tape.web.app/image/disco/cage-script.jpg",
				songArtist: "K?d",
				link: "https://dl.dropbox.com/s/7okhtbw1ach604z/04%20-%20THREE%20IN%20THE%20MORNING.mp3",
				trackTime: "2:51",
			},
			{
				index: "3",
				songName: "Home Player",
				songimg: "https://mix-tape.web.app/image/disco/cage-script.jpg",
				songArtist: "K?d",
				link: "https://dl.dropbox.com/s/bxdbj90s18qoz0g/10%20-%20HOME%20PRAYER.mp3",
				trackTime: "3:41",
			},
		],
	},

	/* 10 PODCAST Embrace */
	{
		index: "10",
		type: "podcast",
		title: "Embrace",
		link: "podcasts",
		playlistBg: "rgb(96, 162, 191)",
		imgUrl:	"https://mix-tape.web.app/image/set/mith.jpg",
		hoverColor: "rgb(96, 162, 191)",
		artist: "Ali Bhtty",
		artist: "Tu mood del día",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Embrace",
				songimg:
					"https://mix-tape.web.app/image/podcast/mith-1x1.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/Mith-Ali-Bhtty.m4a",
				trackTime: "2:48",
			},
		],
	},

	/* 11 LIST */
	{
		index: "11",
		type: "playlist",
		title: " demo1 ",
		link: " ",
		playlistBg: "rgb(255, 102, 0)",
		imgUrl:	" ",
		hoverColor: "rgb(255, 102, 0)",
		artist: "Jalen ft. Ali Bhtty",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: " ",
				songimg: " ",
				songArtist: "Jalen ft. Ali Bhtty",
				link: " ",
				trackTime: " ",
			},
		],
	},

	/* 12 LIST */
	{
		index: "12",
		type: "playlist",
		title: " demo2 ",
		link: " ",
		playlistBg: "rgb(255, 102, 0)",
		imgUrl:	" ",
		hoverColor: "rgb(255, 102, 0)",
		artist: "Jalen ft. Ali Bhtty",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: " ",
				songimg: " ",
				songArtist: "Jalen ft. Ali Bhtty",
				link: " ",
				trackTime: " ",
			},
		],
	},

	/* 13 LIST */
	{
		index: "13",
		type: "playlist",
		title: " demo3 ",
		link: " ",
		playlistBg: "rgb(255, 102, 0)",
		imgUrl:	" ",
		hoverColor: "rgb(255, 102, 0)",
		artist: "Jalen ft. Ali Bhtty",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: " ",
				songimg: " ",
				songArtist: "Jalen ft. Ali Bhtty",
				link: " ",
				trackTime: " ",
			},
		],
	},

	/* 14 LIST */
	{
		index: "14",
		type: "playlist",
		title: " demo4 ",
		link: " ",
		playlistBg: "rgb(255, 102, 0)",
		imgUrl:	" ",
		hoverColor: "rgb(255, 102, 0)",
		artist: "Jalen ft. Ali Bhtty",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: " ",
				songimg: " ",
				songArtist: "Jalen ft. Ali Bhtty",
				link: " ",
				trackTime: " ",
			},
		],
	},

	/* 15 LIST */
	{
		index: "15",
		type: "playlist",
		title: " demo5 ",
		link: " ",
		playlistBg: "rgb(255, 102, 0)",
		imgUrl:	" ",
		hoverColor: "rgb(255, 102, 0)",
		artist: "Jalen ft. Ali Bhtty",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: " ",
				songimg: " ",
				songArtist: "Jalen ft. Ali Bhtty",
				link: " ",
				trackTime: " ",
			},
		],
	},




/* ===================== */
    /* ======== DJS ======== */
        /* ===================== */
	/* 16 DJS Boombox Cartel */
	{
		index: "16",
		type: "djs",
		title: "Boombox Cartel",
		link: "boxcar",
		playlistBg: "rgb(252, 227, 0)",
		imgUrl: "https://mix-tape.web.app/image/djs/boombox-cartel/boombox-cartel.jpg",
		hoverColor: "rgb(252, 227, 0)",
		artist: "BOXCAR",
		artistImgUrl: "https://mix-tape.web.app/image/djs/boombox-cartel/boombox-cartel.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "🅴 TAKING OVER",
				songimg: "https://mix-tape.web.app/image/djs/boombox-cartel/set/taking-over.jpg",
				songArtist: "Bombox Cartel",
				link: "https://dl.dropbox.com/s/nokuxvpxr75bzni/BOX%20CAR%20-%20TAKING%20OVER.mp3",
				trackTime: "4:19",
			},
			{
				index: "2",
				songName: "JELLYFISH JAM",
				songimg: "https://mix-tape.web.app/image/djs/boombox-cartel/set/jellyfish-jam.jpg",
				songArtist: "Bombox Cartel",
				link: "https://dl.dropbox.com/s/m0356hu0tt31nf8/BOX%20CAR%20-%20JELLYFISH%20JAM.mp3",
				trackTime: "3:11",
			},
			{
				index: "3",
				songName: "ANY OTHER WAY",
				songimg: "https://mix-tape.web.app/image/djs/boombox-cartel/set/any-other-way.jpg",
				songArtist: "Bombox Cartel",
				link: "https://dl.dropbox.com/s/nuhpmwb24ddt0tg/BOX%20CAR%20-%20ANY%20OTHER%20WAY.mp3",
				trackTime: "5:58",
			},
			{
				index: "4",
				songName: "Dancing With Fire",
				songimg: "https://mix-tape.web.app/image/djs/boombox-cartel/set/dancing-with-fire.jpg",
				songArtist: "Bombox Cartel ft. Stalking Gia",
				link: "https://dl.dropbox.com/s/3febkyk0c3j6omz/Boombox%20Cartel%20-%20Dancing%20With%20Fire%20%28feat.%20Stalking%20Gia%29.mp3",
				trackTime: "3:51",
			},
		],
	},

	/* 17 DJS alibhtty */
	{
		index: "17",
		type: "djs",
		title: "Ali Bhtty",
		link: "alibhtty",
		playlistBg: "rgb(0, 179, 255)",
		imgUrl:	"https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		hoverColor: "rgb(0, 179, 255)",
		artist: "4B",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "https://mix-tape.web.app/image/image/app/list.jpg",
		downloadData: [
			{
				index: "1",
				songName: "Ep.013 Cy-BORED – ID",
				songimg: "https://mix-tape.web.app/image/set/radioshow/013.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.013-Cy-bored-Ali-Bhtty.m4a",
				trackTime: "14:55",
			},
		],
		playlistData: [
			{
				index: "1",
				songName: "Ep.015 House Sauce",
				songimg: "https://mix-tape.web.app/image/set/radioshow/015.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.015-House-Sause-Ali-Bhtty.m4a", /* https://dl.dropbox.com/s/qnogflgjdoyvc77/Ep.%20015%20House%20Sause%20-%20Ali%20Bhtty.m4a */
				trackTime: "16:00",
			},
			{
				index: "2",
				songName: "Ep.014 BCN City Vibes",
				songimg: "https://mix-tape.web.app/image/set/radioshow/014.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.014-BCN-City-Vibes-Ali-Bhtty.m4a", /* https://dl.dropbox.com/s/azpd0pjc7ozif0n/Ep.%20014%20BCN%20City%20Vibes%20-%20Ali%20Bhtty.m4a */
				trackTime: "16:31",
			},
			{
				index: "3",
				songName: "Ep.013 Cy-BORED",
				songimg: "https://mix-tape.web.app/image/set/radioshow/013.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.013-Cy-bored-Ali-Bhtty.m4a", /* https://dl.dropbox.com/s/iw7it2twnpkxsm7/Ep.%20013%20Cy-bored%20-%20Ali%20Bhtty.m4a */
				trackTime: "14:55",
			},
			{
				index: "4",
				songName: "Ep.012 Turn It Up",
				songimg: "https://mix-tape.web.app/image/set/radioshow/012.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.012-Turn-It-Up-Ali-Bhtty.m4a", /* https://dl.dropbox.com/s/v36xlhw8ichvr4l/Ep.%20012%20Turn%20It%20Up%20-%20Ali%20Bhtty.m4a */
				trackTime: "16:34",
			},
			{
				index: "5",
				songName: "Ep.011 Blackouts",
				songimg: "https://mix-tape.web.app/image/set/radioshow/011.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.011-Blackouts-Ali-Bhtty.m4a", /* https://dl.dropbox.com/s/bjffl4j12uqng34/Ep.%20011%20Blackouts%20-%20Ali%20Bhtty.m4a */
				trackTime: "19:09",
			},
			{
				index: "6",
				songName: "Ep.010 Wild Therapy",
				songimg: "https://mix-tape.web.app/image/set/radioshow/010.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.010-Wild-Therapy-Ali-Bhtty.m4a",  /* https://dl.dropbox.com/s/ll7ex466kzwpt77/Ep.%20010%20Wild%20Therapy%20-%20Ali%20Bhtty.m4a */
				trackTime: "32:03",
			},
			{
				index: "7",
				songName: "Ep.009 Hard EDM & Rock",
				songimg: "https://mix-tape.web.app/image/set/radioshow/009.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.009-Hard-EDM&Rock-Ali-Bhtty.m4a",
				trackTime: "34:41",
			},
			{
				index: "8",
				songName: "Ep.008 Reggaeton 2021",
				songimg: "https://mix-tape.web.app/image/set/radioshow/008.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.008-Reggaeton-2021-Ali-Bhtty.m4a",
				trackTime: "32:59",
			},
			{
				index: "9",
				songName: "🅴 Ep.007 Altering Reality",
				songimg: "https://mix-tape.web.app/image/set/radioshow/007.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.007-Altering-Reality-Ali-Bhtty.m4a", /*  https://dl.dropbox.com/s/tp5aon8i5g91lwp/Ep.%20007%20Altering%20Reality%20-%20Ali%20Bhtty.m4a */
				trackTime: "39:31",
			},
			{
				index: "10",
				songName: "Ep.006 YHLQMDLG Sesion",
				songimg: "https://mix-tape.web.app/image/set/radioshow/006.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.006-YHLQMDLG-Bad-Bunny-Ali-Bhtty.m4a", /* https://dl.dropbox.com/s/4f1he8ymqai22xf/Ep.%20006%20YHLQMDLG%20Bad%20Bunny%20-%20Ali%20Bhtty.m4a */
				trackTime: "34:31",
			},
			{
				index: "11",
				songName: "Ep.005 Salsatón",
				songimg: "https://mix-tape.web.app/image/set/radioshow/005.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.005-Salsaton-Ali-Bhtty.m4a",
				trackTime: "34:41",
			},
			{
				index: "12",
				songName: "Ep.004 ElectroPOP",
				songimg: "https://mix-tape.web.app/image/set/radioshow/004.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.004-ElectroPOP-Ali-Bhtty.m4a",
				trackTime: "32:59",
			},
			{
				index: "13",
				songName: "Ep.003 Progressive",
				songimg: "https://mix-tape.web.app/image/set/radioshow/003.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.003-Progressive-Ali-Bhtty.m4a",
				trackTime: "34:41",
			},
			{
				index: "14",
				songName: "🅴 Ep.002 Reggaeton Old School",
				songimg: "https://mix-tape.web.app/image/set/radioshow/002.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.002-Reggaeton-Old-School-Ali-Bhtty.m4a",
				trackTime: "32:59",
			},
			{
				index: "15",
				songName: "Ep.001 Dirty House",
				songimg: "https://mix-tape.web.app/image/set/radioshow/001.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.001-Dirty-House-Ali-Bhtty.m4a",
				trackTime: "34:41",
			},
			{
				index: "16",
				songName: "🅴 Ep.000 Bounce Drop",
				songimg: "https://mix-tape.web.app/image/set/radioshow/000.jpg",
				songArtist: "Ali Bhtty",
				link: "https://changarrito.es/assets/mus/ab/Ep.000-Bounce-Drop-Ali-Bhtty.m4a",
				trackTime: "32:59",
			},
		],
	},

	/* 18 DJS Knock2 */
	{
		index: "18",
		type: "djs",
		title: "Knock2",
		link: "knock2",
		playlistBg: "rgb(255, 102, 0)",
		imgUrl:	"https://mix-tape.web.app/image/djs/knock2/knock2.jpg",
		hoverColor: "rgb(255, 102, 0)",
		artist: "nolimit",
		artistImgUrl: "https://mix-tape.web.app/image/djs/knock2/knock2.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Rock Ur World (feat. fussy)",
				songimg: "https://mix-tape.web.app/image/djs/knock2/room202.jpg",
				songArtist: "Knock2",
				link: "https://dl.dropbox.com/s/nvb50fsku1ytvf3/1-06%20Rock%20Ur%20World%20%28feat.%20fussy%29.m4a",
				trackTime: "04:41",
			},
		],
	},

	/* 19 DJS Dj Romer */
	{
		index: "19",
		type: "djs",
		title: "DJ ROMER",
		link: "djromer",
		playlistBg: "rgb(90, 230, 97)",
		imgUrl:	"https://mix-tape.web.app/image/djs/djromer/djromer.jpg",
		hoverColor: "rgb(90, 230, 97)",
		artist: "NASA COMPILATION",
		artistImgUrl: "https://mix-tape.web.app/image/djs/djromer/djromer.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "🅴 THE ROOM LIVE 02",
				songimg: "https://mix-tape.web.app/image/djs/djromer/sets/the-room-live-02.jpg",
				songArtist: "DJ ROMER",
				link: "https://changarrito.es/assets/mus/the-room-live-02.m4a",
				trackTime: "47:42",
			},
			{
				index: "2",
				songName: "THE ROOM LIVE 01",
				songimg: "https://mix-tape.web.app/image/djs/djromer/sets/the-room-live-01.jpg",
				songArtist: "DJ ROMER",
				link: "https://changarrito.es/assets/mus/the-room-live-01.m4a",
				trackTime: "57:05",
			},
		],
	},

	/* 16 DJS CBRG */
	{
		index: "20",
		type: "djs",
		title: "CBRG",
		link: "cyborg",
		playlistBg: "rgb(64, 74, 173)",
		imgUrl:	"https://mix-tape.web.app/image/app/cyborg.jpg",
		hoverColor: "rgb(64, 74, 173)",
		artist: "Electronic 4ever.",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Nowhere (Odd Mob Remix)",
				songimg: "https://mix-tape.web.app/image/disco/nowhere.jpg",
				songArtist: "Otosan",
				link: "https://dl.dropbox.com/s/qfbat76durimxuf/Otosan%20-%20Nowhere%20%28Odd%20Mob%20Remix%29.mp3?dl=1",
				trackTime: "4:25",
			},
			{
				index: "2",
				songName: "Right Now (Ali Bhtty Remix)",
				songimg: "https://mix-tape.web.app/image/disco/right-now.jpg",
				songArtist: "Ali Bhtty ft. Wxlfgvng!",
				link: "https://dl.dropbox.com/s/rd2tfbwmr5dc1iv/Right%20Now%20-%20Wxlfgvng%20%28Ali%20Bhtty%20Remix%29.mp3?dl=1",
				trackTime: "3:15",
			},
		],
	},

	/* 17 DJS Demotapes */
	{
		index: "21",
		type: "djs",
		title: "demotapes",
		link: "demotapes",
		playlistBg: "rgb(255, 171, 38)",
		imgUrl: "https://mix-tape.web.app/image/djs/demotapes/demotapes.jpg",
		hoverColor: "rgb(255, 171, 38)",
		artist: "bitbird",
		artistImgUrl: "https://mix-tape.web.app/image/djs/alibhtty/alibhtty.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "demotapes with friends mix",
				songimg: "https://mix-tape.web.app/image/set/demotapes-bg.jpg",
				songArtist: "demotapes",
				link: "https://drive.google.com/uc?id=1EjpaONlLnfvQ589iN2nATSvWDz_75_vb&export=download",
				trackTime: "19:56",
			},
		],
	},

	/* 18 DJS Camoufly */
	{
		index: "22",
		type: "djs",
		title: "Camoufly",
		link: "camoufly",
		playlistBg: "rgb(155, 207, 153)",
		imgUrl:	"https://mix-tape.web.app/image/djs/camoufly/camoufly.jpg",
		hoverColor: "rgb(155, 207, 153)",
		artist: "fly",
		artistImgUrl: "https://mix-tape.web.app/image/djs/camoufly/camoufly.jpg",
		artistBio: "Follow",
		artistDownload: "Descargar",
		bannerUno: "",
		downloadData: [],
		playlistData: [
			{
				index: "1",
				songName: "Glittertape 8",
				songimg: "https://mix-tape.web.app/image/set/glittertape.jpg",
				songArtist: "Camoufly",
				link: "https://dl.dropbox.com/scl/fi/txvrpznvxejs7bnlz96rs/glittertape-8.mp3?rlkey=w0irveeok4okv18z8z8u004q9&dl=1",
				trackTime: "29:42",
			},
		],
	},
];



export const MUSICLINKS = [
	{
		link:
			"https://dl.dropbox.com/s/nvb50fsku1ytvf3/1-06%20Rock%20Ur%20World%20%28feat.%20fussy%29.m4a",
	},
];


export const SEARCHCARDS = [
	{
		bgcolor: 'rgb(160, 195, 210)',
		imgurl: 'https://mix-tape.web.app/image/set/mood3.jpg',  /* https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg */
		title: 'Lo más top para tu día',
	},
	{
		bgcolor: 'rgb(75, 145, 125)',
		imgurl: 'https://mix-tape.web.app/image/set/demotapes.jpg', /* https://t.scdn.co/images/4b7472015a274eadbc00119f5141e548.jpeg */
		title: 'Invtado',
	},
	{
		bgcolor: 'rgb(111, 111, 111)',
		imgurl: 'https://mix-tape.web.app/image/set/min-car.jpg', /* https://t.scdn.co/images/ffbc60a80ba64554ac09130827c43d06.jpeg */
		title: 'De colección',
	},
	{
		bgcolor: 'rgb(235, 30, 50)',
		imgurl: 'https://mix-tape.web.app/image/set/remixes.jpg',  /* https://t.scdn.co/images/31c85ae6fec34a16927ef28a7a88e97b.jpeg */
		title: 'En la casa',
	},
	{
		bgcolor: 'rgb(195, 240, 200)',
		imgurl: 'https://mix-tape.web.app/image/set/mood2.jpg',  /* https://t.scdn.co/images/d355f48a90b64c25b6e004179a596e51.jpeg */
		title: ' ',
	},
]