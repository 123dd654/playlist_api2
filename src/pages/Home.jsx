import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlaylistItem from '../components/PlaylistItem';

const seoyeonData = [
  {
    "rank": "1",
    "title": "첫 만남은 계획대로 되지 않아",
    "artist": "TWS",
    "imageURL": "https://i.ytimg.com/vi/bKeU99EygzY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAMdut8EB-4C5W5O22qG5wjrpcqag",
    "videoID": "bKeU99EygzY"
},
{
    "rank": "2",
    "title": "이무진 (LEE MU JIN) - '과제곡 (교수님 죄송합니다)' Live Clip",
    "artist": "이무진 LEE MU JIN",
    "imageURL": "https://i.ytimg.com/vi/8-WyRoaQwZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-IVu92rLTrj-4SQbfuJea7xfQ0w",
    "videoID": "8-WyRoaQwZM"
},
{
    "rank": "3",
    "title": "🔥탑건: 매버릭OST| 탑건 해변가 그 노래 : OneRepublic - I Ain’t Worried [가사/해석/번역/lyrics]",
    "artist": "쏘플 soso playlist",
    "imageURL": "https://i.ytimg.com/vi/INak4ORss18/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCVsTignnovIrZLoWhdg7tMLa2gfQ",
    "videoID": "INak4ORss18"
},
{
    "rank": "4",
    "title": "행복해지는 엘리멘탈 OST🔥💦: Lauv - Steal The Show [가사/해석/lyrics]",
    "artist": "때잉",
    "imageURL": "https://i.ytimg.com/vi/AJsvGtGgI6M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBzsOgvjOUcQwJOpRtWXQVC9sIUqg",
    "videoID": "AJsvGtGgI6M"
},
{
    "rank": "5",
    "title": "🌈수많은 사람들의 인생을 바꿔준 가사 : Charlie Puth(찰리 푸스) - Left Right Left [가사/해석/번역/lyrics]",
    "artist": "쏘플 soso playlist",
    "imageURL": "https://i.ytimg.com/vi/1emgue_aRGo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCNSVpwxaK_cWyD9h3EbQCl2E3gLw",
    "videoID": "1emgue_aRGo"
},
{
    "rank": "6",
    "title": "행복하진 않은데, 그렇다고 죽고 싶은 건 아니고🐛 𝙴𝚖 𝙱𝚎𝚒𝚑𝚘𝚕𝚍 - 𝙽𝚞𝚖𝚋 𝙻𝚒𝚝𝚝𝚕𝚎 𝙱𝚞𝚐 [가사/해석/lyrics]",
    "artist": "때잉",
    "imageURL": "https://i.ytimg.com/vi/FbpzrymWpT8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDJOdn1MqQJ2QHnfNz6sarPVa-bhg",
    "videoID": "FbpzrymWpT8"
},
{
    "rank": "7",
    "title": "🐰힘들어도 뭐든 다 해볼거야🦊 : 𝗧𝗿𝘆 𝗘𝘃𝗲𝗿𝘆𝘁𝗵𝗶𝗻𝗴 (ft. Shakira)가사해석",
    "artist": "제이치",
    "imageURL": "https://i.ytimg.com/vi/mipIdvWyGZA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA5iBqMLZxcv9gVCkmaIWLOKtq6sw",
    "videoID": "mipIdvWyGZA"
},
{
    "rank": "8",
    "title": "💌짝사랑 해본 사람만 느끼는 감정 : 딘딘 (DINDIN) - 이러면 안 될 거 아는데 너 앞에만 서면 나락 [가사/해석/lyrics]",
    "artist": "트렌디 TRENDY",
    "imageURL": "https://i.ytimg.com/vi/dLOJR_9xURM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDCLT_k0DD0PSWjmb_O0lHPYbLi0w",
    "videoID": "dLOJR_9xURM"
},
{
    "rank": "9",
    "title": "❤️‍🔥새해마다 꼭 들어줘야 하는 노래 : Panic! At The Disco - High Hopes [가사/해석/번역/lyrics]",
    "artist": "쏘플 soso playlist",
    "imageURL": "https://i.ytimg.com/vi/0V3LwNtZxM4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCgnJhHzzcQD1hghZAeiUt5R0ia0w",
    "videoID": "0V3LwNtZxM4"
},
{
    "rank": "10",
    "title": "💖 자존감 200% 풀충전해주는 노래 | 𝗠𝗲𝗴𝗵𝗮𝗻 𝗧𝗿𝗮𝗶𝗻𝗼𝗿 - 𝗠𝗲 𝗧𝗼𝗼 (한글 가사/해석/자막/lyrics)",
    "artist": "딘또",
    "imageURL": "https://i.ytimg.com/vi/-Xsk0T0z2qo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC-TZF5ij1kPNev1YdXRDMHHRwKGg",
    "videoID": "-Xsk0T0z2qo"
},
{
    "rank": "11",
    "title": "🚨챌린지로 역주행중인 선장의 노래 : Nathan Evans - Wellerman (Sea Shanty) [가사/해석/번역/lyrics]",
    "artist": "쏘플 soso playlist",
    "imageURL": "https://i.ytimg.com/vi/INHZQf_1FAA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAoEb8T7X710IEM2p89yszZz7xEtQ",
    "videoID": "INHZQf_1FAA"
},
{
    "rank": "12",
    "title": "💗요즘 무섭게 떡상중인 노래 : (여자)아이들((G)I-DLE) - Allergy [가사/해석/한국어/lyrics]",
    "artist": "쏘플 soso playlist",
    "imageURL": "https://i.ytimg.com/vi/cDha3p7JY5s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLASFWluBhUZQV0jkeHyatjXARY6Pg",
    "videoID": "cDha3p7JY5s"
},
{
    "rank": "13",
    "title": "📻놀랍게도 작년에 나온 띵곡, 𝑺𝒕𝒆𝒑𝒉𝒆𝒏 𝑺𝒂𝒏𝒄𝒉𝒆𝒛 - 𝑼𝒏𝒕𝒊𝒍 𝑰 𝑭𝒐𝒖𝒏𝒅 𝒀𝒐𝒖 [가사/해석/lyrics]",
    "artist": "때잉",
    "imageURL": "https://i.ytimg.com/vi/vp54er7Zsy4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBs8EuES-DdGTpsY0QlgTajNlhGGw",
    "videoID": "vp54er7Zsy4"
},
{
    "rank": "14",
    "title": "틱톡그노래🔥| 답답한 내 짝사랑 소꿉친구에게: Stacey Ryan - Fall In Love Alone (2022) [가사해석/번역]",
    "artist": "직키(Zickii)",
    "imageURL": "https://i.ytimg.com/vi/Zzj1i1U65w4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCWEPIs8nkV-XbAUCVvzMlvaJM_xw",
    "videoID": "Zzj1i1U65w4"
},
{
    "rank": "15",
    "title": "💥내 자존감에 시동 걸어주는 노래 | Katy Perry (케이티 페리) - Roar (가사/해석/lyrics)",
    "artist": "도플리 ᴅᴏʙʙʏ's ᴘʟᴀʏʟɪsᴛ",
    "imageURL": "https://i.ytimg.com/vi/cMUVtdxWfi4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSNofl0mjqLA0DMaRnWa5byG5X1Q",
    "videoID": "cMUVtdxWfi4"
},
{
    "rank": "16",
    "title": "✨누군가를 진심으로 사랑하게 된다면 : Lukas Graham - Love Someone [가사/해석/번역/lyrics]",
    "artist": "쏘플 soso playlist",
    "imageURL": "https://i.ytimg.com/vi/XiX1EPARpPE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD48gKQUV0K0YCXGuxEfer88SaPtg",
    "videoID": "XiX1EPARpPE"
},
{
    "rank": "17",
    "title": "🔥자존감이 필요할 때 : Avril Lavigne - What The Hell (가사/해석/번역/lyrics)",
    "artist": "쏘플 soso playlist",
    "imageURL": "https://i.ytimg.com/vi/sWUGnIu6SwU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDjebyiqr_tgyTiIQlP38VZ8DTBJg",
    "videoID": "sWUGnIu6SwU"
},
{
    "rank": "18",
    "title": "💙 여름과 하이틴을 동시에 느끼고 싶다면 | One Direction - Kiss You 💋 (한글 가사/해석/자막/lyrics)",
    "artist": "딘또",
    "imageURL": "https://i.ytimg.com/vi/-nPxXDUp818/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWynnkJjjGaMQri_nh_YGMAJSRJg",
    "videoID": "-nPxXDUp818"
},
{
    "rank": "19",
    "title": "🍀시작부터 ㄹㅇ 취향 : 𝗡𝗘𝗜𝗞𝗘𝗗, 𝗠𝗮𝗲 𝗠𝘂𝗹𝗹𝗲𝗿, 𝗣𝗼𝗹𝗼 𝗚 - 𝗕𝗲𝘁𝘁𝗲𝗿 𝗗𝗮𝘆𝘀 [가사/해석/lyrics]",
    "artist": "때잉",
    "imageURL": "https://i.ytimg.com/vi/R9l-bptVxCw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_BEkrVdrN9xbyoJnZVsYCMuDVRA",
    "videoID": "R9l-bptVxCw"
},
{
    "rank": "20",
    "title": "flutter (봄이야)",
    "artist": "경서",
    "imageURL": "https://i.ytimg.com/vi/l-ZJLSMK0ic/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAeJA-z_AGMHl1ZQK6wZdKw4-wHzg",
    "videoID": "MQvGxUB-AlY"
},
{
    "rank": "21",
    "title": "120BPM (첫 키스에 내 심장은 120BPM)",
    "artist": "경서",
    "imageURL": "https://i.ytimg.com/vi/kp-gVJ7XJV4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAVTrCOoKTa4ptRBL-K5Aj6YVjGYQ",
    "videoID": "bqG_Ckci5l0"
},
{
    "rank": "22",
    "title": "Waiting For Love",
    "artist": "Avicii",
    "imageURL": "https://i.ytimg.com/vi/iR1sAex__VA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCGuBDMA0t54uXBk1nTAfM4MH8_Lg",
    "videoID": "cHHLHGNpCSA"
},
{
    "rank": "23",
    "title": "Candy",
    "artist": "SMTOWN",
    "imageURL": "https://i.ytimg.com/vi/zuoSn3ObMz4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcmBKiwI2_tEinLvlIZzXypHMWjw",
    "videoID": "zuoSn3ObMz4"
},
{
    "rank": "24",
    "title": "SEVENTEEN (세븐틴) '음악의 신' Official MV",
    "artist": "HYBE LABELS",
    "imageURL": "https://i.ytimg.com/vi/zSQ48zyWZrY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwg4xredvKF_jVAIhlFhytlFA_Kw",
    "videoID": "zSQ48zyWZrY"
},
{
    "rank": "25",
    "title": "[MV] QWER _ T.B.H(고민중독)",
    "artist": "1theK (원더케이)",
    "imageURL": "https://i.ytimg.com/vi/phsDrsw-tzc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGp8KG3NyuFY8zL4sCpxTCSsM2pA",
    "videoID": "phsDrsw-tzc"
},
{
    "rank": "26",
    "title": "fromis_9 (프로미스나인) 'DM' Official MV",
    "artist": "HYBE LABELS",
    "imageURL": "https://i.ytimg.com/vi/4gXmClk8rKI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrs210c8jcpTUEpz2WHtbgR_ehsw",
    "videoID": "4gXmClk8rKI"
},
{
    "rank": "27",
    "title": "NewJeans (뉴진스) ‘How Sweet’ Performance Video | Coke Studio",
    "artist": "NewJeans",
    "imageURL": "https://i.ytimg.com/vi/Ec0Z1v7jKDQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBi1w9A28tI9qfoo8_aCtKfGn6ZpQ",
    "videoID": "Ec0Z1v7jKDQ"
},
{
    "rank": "28",
    "title": "IVE 아이브 '해야 (HEYA)' MV",
    "artist": "STARSHIP",
    "imageURL": "https://i.ytimg.com/vi/07EzMbVH3QE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDf0_SzwMyAYJvVn6VfvF6fOXpyNA",
    "videoID": "07EzMbVH3QE"
},
{
    "rank": "29",
    "title": "ILLIT (아일릿) 'Lucky Girl Syndrome' Official MV",
    "artist": "HYBE LABELS",
    "imageURL": "https://i.ytimg.com/vi/UCmgGZbfjmk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLArNWolcySqU6S9X-oVI7SmUllXfA",
    "videoID": "UCmgGZbfjmk"
},
{
    "rank": "30",
    "title": "(여자)아이들((G)I-DLE) - '나는 아픈 건 딱 질색이니까(Fate)' LIVE CLIP",
    "artist": "(G)I-DLE (여자)아이들 (Official YouTube Channel)",
    "imageURL": "https://i.ytimg.com/vi/ATK7gAaZTOM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpcGINyJ4TX0JVbwg_JLpis-OqDg",
    "videoID": "ATK7gAaZTOM"
}
];

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const LERP = (x, y, a) => x * (1 - a) + y * a;
    const CLAMP = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
    const INVLERP = (x, y, a) => CLAMP((a - x) / (y - x));
    const RANGE = (x1, y1, x2, y2, a) => LERP(x2, y2, INVLERP(x1, y1, a));

    const VOLUME_TOGGLE = document.querySelector("input");
    const EYES = document.querySelector(".eyes--open");
    const LIMIT = 0.2;

    const TRACKS = {
      CLASSICAL: {
        TRACK: new Audio("https://assets.codepen.io/605876/yakov-golman-forest-classic.mp3"),
        HUE: 40
      },
      INSTRUMENTAL: {
        TRACK: new Audio("https://assets.codepen.io/605876/flex-vector-bord-ready-instrumental.mp3"),
        HUE: 160
      },
      BLUES: {
        TRACK: new Audio("https://assets.codepen.io/605876/lobo-loco-spencer-bluegrass-blues.mp3"),
        HUE: 190
      },
      POP: {
        TRACK: new Audio("https://assets.codepen.io/605876/chad-crouch-rainbow-pop.mp3"),
        HUE: 320
      },
      HIPHOP: {
        TRACK: new Audio("https://assets.codepen.io/605876/yung-kartz-magic-hiphop.mp3"),
        HUE: 280
      },
      JAZZ: {
        TRACK: new Audio("https://assets.codepen.io/605876/kielokaz-story-has-begun-jazz.mp3"),
        HUE: 220
      }
    };

    let currentTrack = TRACKS.INSTRUMENTAL.TRACK;

    const faceSwap = (spinning) => {
      gsap.set(".face", { display: spinning ? "none" : "block" });
      gsap.set(".face--nauseous", { display: spinning ? "block" : "none" });
    };
    let timer;

    for (let genre of Object.keys(TRACKS)) {
      TRACKS[genre].TRACK.loop = true;
      TRACKS[genre].TRACK.muted = true;
      TRACKS[genre].TRACK.volume = 1;
    }

    const toggleMute = () => {
      const MUTE = !TRACKS.CLASSICAL.TRACK.muted;
      for (let genre of Object.keys(TRACKS)) {
        TRACKS[genre].TRACK.muted = MUTE;
      }
    };

    gsap.set(".record", { transformOrigin: "50% 50%" });
    gsap.set(".player-arm", { transformOrigin: "25% 15%", rotate: 25 });
    gsap.to(".player-arm", { duration: 0.5, rotate: 26, repeat: -1, yoyo: true });

    const TL = gsap.timeline({ repeat: -1 })
      .to(".record", { rotate: 360, duration: 1, ease: "none" }, 0)
      .to(".record", { transformOrigin: "49.5% 50%", repeat: 1, yoyo: true, duration: 0.5 }, 0)
      .to(".record__shine", { transformOrigin: "49.5% 50%", repeat: 1, yoyo: true, duration: 0.5 }, 0)
      .to(".record__shine", { rotate: "+=4", repeat: 1, yoyo: true, duration: 0.5, ease: "none" }, 0);

    gsap.set(".record__shine", { transformOrigin: "50% 50%", rotate: 55 });
    gsap.set([".record-player", ".genre-switch"], { display: "block" });

    document.documentElement.scrollTop = 2;

    let speed;

    ScrollTrigger.create({
      trigger: "body",
      start: 1,
      scrub: 0.05,
      end: "bottom bottom",
      onLeaveBack: () => (document.documentElement.scrollTop = document.body.scrollHeight - 2),
      onLeave: () => (document.documentElement.scrollTop = 2),
      onScrubComplete: (self) => {
        speed = 1;
        gsap.to(currentTrack, { playbackRate: 1 });
        if (self.progress === 0) {
          window.scrollTo(0, document.body.scrollHeight);
        }
      },
      onUpdate: ({ getVelocity }) => {
        faceSwap(true);
        if (getVelocity() < 1) {
          speed = Math.max(0.5, Math.min(4, 1 - Math.abs(getVelocity() / 1000)));
        } else {
          speed = Math.max(0.5, Math.min(4, 1 + Math.abs(getVelocity() / 1000)));
        }
        gsap.set(currentTrack, { playbackRate: speed });
        if (timer) timer.kill();
        timer = gsap.delayedCall(0.2, () => faceSwap(false));
      }
    });

    const blink = (EYES) => {
      gsap.set(EYES, { scaleY: 1 });
      if (EYES.BLINK_TL) EYES.BLINK_TL.kill();
      EYES.BLINK_TL = gsap.timeline({
        delay: Math.floor(Math.random() * 5) + 1,
        onComplete: () => blink(EYES)
      });
      EYES.BLINK_TL.to(EYES, {
        duration: 0.05,
        transformOrigin: "50% 50%",
        scaleY: 0,
        yoyo: true,
        repeat: 1
      });
    };
    blink(EYES);

    VOLUME_TOGGLE.addEventListener("input", () => {
      toggleMute();
      currentTrack.play();
    });

    const GENRE_SWITCH = document.querySelector("select");
    GENRE_SWITCH.addEventListener("change", () => {
      currentTrack.pause();
      document.documentElement.style.setProperty("--hue", TRACKS[GENRE_SWITCH.value].HUE);
      currentTrack = TRACKS[GENRE_SWITCH.value].TRACK;
      currentTrack.play();
    });
  }, []);

  return (
    <>
      <div className="record-player-container">
        <div className="record-player-text">
          Your Text Here
        </div>
        <svg className="record-player" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.25 105.25" style={{ width: '200px', height: '200px', overflow: 'visible' }}>
          <g transform="translate(310.848 60.185)">
            <g className="frame">
              <rect className="frame__shine" width="95.25" height="95.25" x="-305.848" y="-55.185" ry="4.276" fillRule="evenodd" />
              <path className="frame__base" d="M-288.915-55.185v95.25h74.04a4.267 4.267 0 004.276-4.276v-86.697a4.267 4.267 0 00-4.276-4.277z" fillRule="evenodd" />
            </g>
            <circle className="record-base" cx="-258.223" cy="-7.56" r="39.688" fillRule="evenodd" fill="red" />
            <g className="knob" transform="matrix(-.10538 .05103 -.05305 -.10674 -308.635 40.311)">
              <ellipse className="knob__base" ry="55.325" rx="56.661" cx="-151.007" cy="79.914" />
              <path className="knob__shine" d="M-94.346 79.914a56.661 55.325 0 01-8.12 28.538l-48.541-28.538z" />
              <circle className="knob__top" r="41.961" cy="79.914" cx="-151.007" />
            </g>
            <g className="record">
              <circle className="record__body" cx="-258.223" cy="-7.56" r="37.688" fillRule="evenodd" />
              <circle className="record__label-base" cx="-258.223" cy="-7.56" r="35.278" fillRule="evenodd" transform="matrix(.45 0 0 .45 -142.022 -4.158)" />
              <circle className="record__label" r="35.278" cy="-7.56" cx="-258.223" fillRule="evenodd" transform="matrix(.39107 0 0 .39107 -157.239 -4.603)" />
              <g className="face">
                <g className="eyes--open">
                  <g transform="translate(86.028 -11.42)">
                    <circle className="eye" r="2.74" cy="2.273" cx="-351.801" />
                    <circle className="pupil" r=".661" cy="1.423" cx="-352.841" />
                  </g>
                  <g transform="translate(101.128 -11.42)">
                    <circle className="eye" cx="-351.801" cy="2.273" r="2.74" />
                    <circle className="pupil" cx="-352.841" cy="1.423" r=".661" />
                  </g>
                </g>
                <g className="mouth">
                  <path className="mouth__opening" d="M-262.187-8.31a3.969 3.969 0 00-.005.094 3.969 3.969 0 003.969 3.969 3.969 3.969 0 003.968-3.969 3.969 3.969 0 00-.003-.094z" />
                  <path className="mouth__tongue" d="M-256.333-6.987a3.969 3.969 0 00-3.616 2.34 3.969 3.969 0 001.726.4 3.969 3.969 0 003.615-2.34 3.969 3.969 0 00-1.725-.4z" />
                </g>
              </g>
              <g className="face--nauseous">
                <path d="M-248.384-7.21l-4.584-1.937 4.584-1.938M-268.063-7.21l4.584-1.937-4.584-1.938" fill="none" strokeWidth=".794" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="-258.223" cy="-6.657" r="1.654" />
              </g>
            </g>
            <g className="record__shine" fill="none" stroke="green" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M-222.921-7.56a35.302 35.302 0 00-10.356-24.946M-293.525-7.56a35.302 35.302 0 0010.355 24.947M-227.206-7.56a31.018 31.018 0 00-9.099-21.919M-289.241-7.56a31.018 31.018 0 009.099 21.92M-231.083-7.56a27.14 27.14 0 00-7.961-19.179M-285.364-7.56a27.14 27.14 0 007.962 19.18M-234.96-7.56A23.263 23.263 0 00-241.784-24M-281.487-7.56a23.263 23.263 0 006.825 16.44M-238.837-7.56a19.386 19.386 0 00-5.687-13.7M-277.61-7.56a19.386 19.386 0 005.687 13.7" strokeWidth="1.7937399999999999" />
            </g>
            <g className="volume">
              <rect className="volume__base" width="5.306" height="16.303" x="-220.864" y="19.441" ry="1.803" strokeWidth=".794" strokeLinecap="round" strokeLinejoin="round" />
              <g className="volume__control">
                <rect className="volume__slider" width="3.742" height="3.274" x="-220.082" y="27.99" ry="0" />
                <path className="volume__indicator" d="M-219.013 29.627h1.604" />
              </g>
              <path className="volume__levels" d="M-224.425 27.592h1.603M-224.425 31.826h1.603M-224.425 23.359h1.603" fill="none" strokeWidth=".265" />
            </g>
            <circle className="knob__indicator" cx="-300.272" cy="24.212" r="1" strokeLinecap="round" strokeLinejoin="round" />
            <g className="branding">
              <rect width="12.851" height="5.895" x="-303.742" y="-49.377" ry="0" />
              <path d="M-301.821-48.388h9.01v1.8h-9.01zM-301.821-46.272h5.001v1.8h-5.001z" />
            </g>
            <g className="player-arm" transform="translate(-65.673 -.472)">
              <circle className="knob__base" r="7.938" cy="-43.412" cx="-156.583" />
              <circle className="knob__top" cx="-156.583" cy="-43.412" r="6.718" />
              <path className="arm" d="M-157.355-46.505s-.332 4.745 0 7.083c1.687 11.87 8.335 22.674 10.023 34.544.93 6.55 0 19.845 0 19.845" fill="none" stroke="#e6e6e6" strokeWidth="1.587" strokeLinecap="round" strokeLinejoin="round" />
              <rect className="player-arm__top" width="8.968" height="4.544" x="-163.226" y="-45.684" ry="1.57" strokeWidth=".6" />
              <path className="player-arm__needle" d="M-148.885 11.77l3.47.175-.76 4.604-2.412-.174z" />
              <rect className="player-arm__counter" ry=".78" y="-48.611" x="-160.573" height="2.362" width="5.953" strokeWidth=".529" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
      <div className="genre-switch">
      <select>
          <option value="BLUES">Sky</option>
          <option value="CLASSICAL">orange</option>
          <option value="HIPHOP">Purple</option>
          <option value="INSTRUMENTAL" selected>Green</option>
          <option value="JAZZ">Blue</option>
          <option value="POP">Pink</option>
        </select>
      </div>
      <input id="volume" type="checkbox" />
      <label htmlFor="volume" title="Toggle sound">
        <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
          <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
        </svg>
        <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
          <path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" />
        </svg>
      </label>
      <div className="playlist">
        {seoyeonData.map((item, index) => (
          <PlaylistItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
