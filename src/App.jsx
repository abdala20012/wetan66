import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const DISPLAY_NAME = "وتين";
const SITE_PASSWORD = "5/5/2001";
const ACQUAINTANCE_DATE = "2024-01-11T00:00:00";
const SPECIAL_DATE = "2026-05-05T00:00:00";
const MUSIC_SRC = "/love.mp3";
const VOICE_SRC = "/voice-message.mp3";
const GIFT_SERIAL = "LOVE-2026-WATEEN";
const PROFILE_IMAGE = "/profile.jpg";

const loveLetter = [
  `يا ${DISPLAY_NAME}، في عيد ميلادك أكتشف من جديد إن وجودك في الحياة هو أجمل هدية ممكن تتوجد.`,
  "كل سنة بتعدي بتزيد من جمالك الداخلي وطيبتك اللي ما فيهاش كلام.",
  "هذه الهدية وُجدت لتحفظ جزءًا صغيرًا من مكانتك الكبيرة في قلبي.",
  "كل عام وأنتِ أجمل وأسعد وأقرب لكل اللي تتمنيه. ♡"
];

const memories = [
  {
    title: "الصورة اللي تبدأ منها الحكاية",
    text: `يا ${DISPLAY_NAME}، دي مش مجرد صورة؛ دي بداية الإحساس الجميل اللي بيخلّي القلب يهدى أول ما يشوفك.`,
    img: "/1.jpg"
  },
  {
    title: "ابتسامة تساوي كتير",
    text: "ابتسامتك في الصورة دي قادرة تغيّر شكل اليوم كله، وتخلّي أي تعب يهون.",
    img: "/2.jpg"
  },
  {
    title: "ملامح قريبة للقلب",
    text: "في صور بتتفرج عليها مرة، وفي صور بتفضل ساكنة جوا القلب مهما الوقت عدى.",
    img: "/3.jpg"
  },
  {
    title: "حضورك المختلف",
    text: `وجودك يا ${DISPLAY_NAME} له طاقة حلوة، كأن المكان كله بينور بطريقة هادية.`,
    img: "/4.jpg"
  },
  {
    title: "لقطة من الدفا",
    text: "الصورة دي فيها إحساس مريح، كأنها لحظة صغيرة اتاخدت من قلب حكاية جميلة.",
    img: "/5.jpg"
  },
  {
    title: "أجمل تفصيلة",
    text: "كل تفصيلة فيكِ لها معنى، وكل صورة ليكِ بتأكد إن الجمال الحقيقي في الروح قبل الشكل.",
    img: "/6.jpg"
  },
  {
    title: "صورة تفتح باب الشوق",
    text: "مجرد ما الصورة تظهر، الشوق يعرف طريقه للقلب من غير ما يستأذن.",
    img: "/7.jpg"
  },
  {
    title: "لحظة تستاهل تتحفظ",
    text: "اللقطة دي تستاهل تفضل موجودة هنا، لأنها شبه الكلام الحلو اللي مش بيتنسي.",
    img: "/8.jpg"
  },
  {
    title: "هدوء يشبهك",
    text: "فيكِ هدوء لطيف يخلي القلب يطمئن، والصورة دي فيها جزء من الإحساس ده.",
    img: "/9.jpg"
  },
  {
    title: "قربك نعمة",
    text: "كل صورة ليكِ بتفكرني إن بعض الأشخاص وجودهم في الحياة نعمة كبيرة.",
    img: "/10.jpg"
  },
  {
    title: "نور وسط الزحمة",
    text: `يا ${DISPLAY_NAME}، حتى وسط الزحمة اسمك وصورتك ليهم مكان خاص لا يشبه أي حد.`,
    img: "/11.jpg"
  },
  {
    title: "لحظة من ألطف اللحظات",
    text: "في بعض الصور إحساس بيعدي على القلب بناعم... وده كان منها.",
    img: "/12.jpg"
  },
  {
    title: "حكاية جوا صورة",
    text: "كل صورة ليكِ فيها حكاية لو القلب يعرف يحكيها هتبقى أجمل من أي كلام.",
    img: "/13.jpg"
  },
  {
    title: "عيون فيها كل شيء",
    text: "ملامحك في الصورة دي بتقول كل اللي ما بيتقالش بالكلام.",
    img: "/14.jpg"
  },
  {
    title: "الصورة الأخيرة وأجمل معنى",
    text: `يا ${DISPLAY_NAME}، الصورة دي مش نهاية الألبوم، دي وعد إن كل اللي جاي أجمل بإذن الله.`,
    img: "/15.jpg"
  }
];

const videos = [
  { title: "لحظة لا تُنسى", text: "فيديو صغير يحمل إحساسًا كبيرًا.", src: "/video1.mp4" },
  { title: "ذكرى متحركة", text: "كل إطار فيه جزء من الحكاية الجميلة.", src: "/video2.mp4" },
  { title: "مقطع من القلب", text: "شوفيه وتذكري إن كل لحظة معكِ كانت تستاهل.", src: "/video3.mp4" }
];

const photosLoveNote = `يا ${DISPLAY_NAME}، جمعت لكِ 15 صورة هنا كأنها ألبوم من القلب. كل صورة لها إحساسها وكلامها، وكل لقطة فيهم بتقول إنكِ مش شخص عادي في الحكاية؛ أنتِ أجمل حضور، وألطف صدفة، وأهدى مكان بيرجع له القلب كل مرة.`;

const timeline = [
  { icon: "♡", title: "بدايتنا", date: "11 يناير 2024", text: "اليوم الذي بدأ فيه كل شيء بيننا." },
  { icon: "✉", title: "أول رسالة", date: "يناير 2024", text: "رسالة بسيطة فتحت بابًا كبيرًا من الحب." },
  { icon: "☕", title: "أول موعد", date: "فبراير 2024", text: "لحظة هادئة ما زالت عالقة في الذاكرة." },
  { icon: "✦", title: "ضحكتك الأولى", date: "لحظة لا تُنسى", text: "حينها عرفت أن قلبي اختار مكانه." },
  { icon: "🎂", title: "عيد ميلادها", date: "5 مايو 2001", text: "يوم جميل أنجب أجمل شخص في الحكاية." },
  { icon: "∞", title: "والقادم أجمل", date: "دائمًا", text: "الكثير من الحكايات الجميلة ما زالت تنتظرنا." }
];

const reasons = [
  { icon: "♡", title: "قلبك الطيب", text: "لأنكِ جميلة من الداخل قبل الخارج." },
  { icon: "✦", title: "روحك المرحة", text: "لأنكِ تجعلين الأيام أخف وأجمل." },
  { icon: "☾", title: "هدوءك", text: "لأن وجودك يشبه الطمأنينة." },
  { icon: "✉", title: "كلامك", text: "لأنه يصل للقلب قبل الأذن." },
  { icon: "❀", title: "اهتمامك", text: "لأن تفاصيلك الصغيرة كبيرة عندي." },
  { icon: "∞", title: "كونكِ أنتِ", text: "لأنكِ ببساطة لا تشبهين أحدًا." }
];

const dailyMessages = [
  "تذكري دائمًا أنكِ لستِ شخصًا عابرًا، أنتِ معنى كامل في القلب.",
  "اليوم أيضًا، أحبك بطريقة أهدأ من الكلام وأصدق من كل الوعود.",
  "وجودك يجعل التفاصيل الصغيرة تبدو كأنها معجزات ناعمة.",
  "كل مرة تفتحين هذه الهدية، هناك قلب يتمنى لكِ يومًا أجمل.",
  "أنتِ الهدية التي لا تحتاج إلى مناسبة كي تُحتفل بها."
];

const moods = [
  { mood: "اشتياق", icon: "☾", message: "عندما تشتاقين، تذكري أن هناك قلبًا يشتاق إليكِ قبل أن تقولي شيئًا." },
  { mood: "فرح", icon: "✦", message: "فرحتكِ أجمل مشهد، وابتسامتكِ تجعل كل شيء حولكِ أرقّ وأجمل." },
  { mood: "زعل", icon: "♡", message: "حتى في لحظات الزعل، أنتِ غالية جدًا، وكل شيء يمكن أن يهدأ إلا مكانتكِ." },
  { mood: "طمأنينة", icon: "❀", message: "اطمئني، أنتِ في مكان آمن داخل قلب يعرف قيمتكِ جيدًا." }
];

const secretMessages = [
  { number: "01", title: "افتحيها عندما تشتاقين", text: "أنا هنا، حتى لو المسافة بيننا طويلة. قلبي يعرف طريقه إليكِ دائمًا." },
  { number: "02", title: "افتحيها عندما تحزنين", text: "لا يوجد حزن يليق بعينيكِ. ابتسامتك تستحق أن تنتصر كل مرة." },
  { number: "03", title: "افتحيها عندما تبتسمين", text: "ابتسامتك ليست شيئًا عاديًا، إنها أجمل سبب يجعل اليوم أخف." }
];

const notes = [
  "هناك أشخاص يمرّون في الحياة، وهناك شخص واحد يجعل الحياة تبدأ من جديد.",
  "كل تفصيلة فيكِ تستحق أن تُكتب بحروف من ذهب.",
  "أحبك بطريقة هادئة، عميقة، لا تحتاج إلى ضجيج كي تُثبت نفسها.",
  "كل يوم معكِ هو نسخة أجمل من الأمس."
];

const themeOptions = [
  { id: "royal", name: "ملكي داكن", hint: "أسود، ذهبي، وردي" },
  { id: "rose", name: "وردي ناعم", hint: "رومانسي وهادئ" },
  { id: "gold", name: "ذهبي فاخر", hint: "فخم وكلاسيكي" }
];

const reactions = [
  { icon: "🥹", label: "اتأثرت" },
  { icon: "😍", label: "حبيتها" },
  { icon: "😭", label: "دمعت" },
  { icon: "💌", label: "هفتحها تاني" }
];

const favoriteDetails = [
  { icon: "❀", label: "لونك المفضل", value: "الوردي الهادئ" },
  { icon: "☕", label: "تفصيلة تشبهك", value: "القهوة والهدوء" },
  { icon: "✦", label: "أجمل صفة", value: "قلبك الطيب" },
  { icon: "♡", label: "اسمك في قلبي", value: "أجمل حكاية" }
];

const quiz = [
  { question: "ما أجمل شيء في الهدية؟", options: ["الرسالة", "الذكريات", "الموسيقى"], response: "الأجمل الحقيقي هو أنكِ أنتِ سبب وجودها." },
  { question: "ماذا أفعل عندما أشتاق؟", options: ["أسمع الأغنية", "أقرأ رسالتك", "أفتح الصور"], response: "أفعل كل ذلك، ثم أكتشف أن الشوق لا يكفيه شيء إلا وجودك." },
  { question: "ما الذي يبقى بعد كل الكلام؟", options: ["وعد", "ذكرى", "حب"], response: "يبقى الحب؛ لأنه أصدق من كل العناوين." }
];

const chapters = [
  { title: "الفصل الأول", label: "البداية", text: "بدأت الحكاية بهدوء، لكن أثرها كان أكبر من كل التوقعات." },
  { title: "الفصل الثاني", label: "القرب", text: "كل حديث صغير جعل المسافة أقل، وكل تفصيلة كشفت معنى أجمل." },
  { title: "الفصل الثالث", label: "الذكريات", text: "لم تكن الذكريات مجرد مواقف، بل أماكن دافئة نعود إليها كلما اشتقنا." },
  { title: "الفصل الرابع", label: "القادم", text: "القادم لا نعرف تفاصيله، لكن يكفي أنه يحملنا معًا في نفس الحكاية." }
];

const surpriseWheel = [
  "اليوم، قلبي يختار أن يقول لكِ: أنتِ أغلى من كل التفاصيل.",
  "رسالة المفاجأة: وجودك يجعل العادي يبدو جميلًا جدًا.",
  "الحظ يقول: ابتسامتكِ تستحق وردة كل يوم.",
  "النتيجة: قلبكِ هو المكان الذي لا أريد مغادرته.",
  "مفاجأة صغيرة: كل مرة أكتب اسمكِ، يبدو الكلام أجمل."
];

const futureDreams = [
  "يوم هادي نمشي فيه من غير خطة.",
  "صورة جديدة نضيفها للذكريات.",
  "مكالمة طويلة تنتهي بابتسامة.",
  "مكان جميل نقول بعده: لازم نرجع هنا تاني.",
  "لحظة بسيطة تبقى من أجمل الحكايات."
];

const compliments = [
  "أنتِ جميلة بطريقة لا تحتاج إلى شرح.",
  "وجودكِ يجعل المكان أهدأ والوقت ألطف.",
  "فيكِ شيء نادر لا يتكرر كثيرًا.",
  "قلبكِ هو أجمل تفصيلة في كل الحكاية.",
  "أنتِ الشخص الذي يجعل الكلام الرومانسي يبدو قليلًا."
];

const coupons = [
  { title: "قسيمة حضن", text: "صالحة في أي وقت تحتاجين فيه للطمأنينة." },
  { title: "قسيمة مكالمة طويلة", text: "صالحة في ليالي الاشتياق والكلام الذي لا ينتهي." },
  { title: "قسيمة خروجة هادئة", text: "صالحة ليوم جميل نترك فيه العالم قليلًا." },
  { title: "قسيمة اعتذار", text: "صالحة عندما يخطئ الكلام ويبقى الحب كما هو." }
];

const receipt = [
  { item: "ضحكة لا تُنسى", qty: "∞", price: "لا تُقدّر" },
  { item: "ذكريات دافئة", qty: "24K", price: "غالية جدًا" },
  { item: "طمأنينة القلب", qty: "كل يوم", price: "أغلى من الذهب" },
  { item: "وجودكِ في حياتي", qty: "مرة واحدة", price: "كل شيء" }
];

const highlights = [
  { icon: "🔐", title: "دخول خاص", text: "كلمة سر تجعل الهدية شخصية ومحمية." },
  { icon: "🎵", title: "موسيقى ورسالة صوتية", text: "صوت ولحن يضيفان إحساسًا حقيقيًا." },
  { icon: "🖼️", title: "ذكريات تفاعلية", text: "صور تحفظ أجمل لحظاتك بطريقة فاخرة." },
  { icon: "💌", title: "رسائل محفوظة", text: "دفتر إحساس وتوقيع وردود فعل محفوظة." },
  { icon: "🎁", title: "مفاجآت كثيرة", text: "صندوق هدية، كارت خدش، وعجلة مفاجآت." },
  { icon: "🏆", title: "شهادة قابلة للطباعة", text: "شهادة حب فاخرة توثّق الهدية." }
];

const storyBookPages = [
  { title: "أول صفحة", text: "هنا بدأت الحكاية بشكل بسيط، لكنها تركت أثرًا كبيرًا في القلب." },
  { title: "صفحة الذكريات", text: "كل لحظة جميلة صارت كأنها سطر محفوظ داخل كتابنا الخاص." },
  { title: "صفحة الوعد", text: "أعدك أن تظل التفاصيل الصغيرة بيننا لها معنى كبير." },
  { title: "صفحة المستقبل", text: "القادم أجمل لأن الحكاية ما زالت تُكتب." }
];

const multiLetters = [
  { title: "افتحيه عند الاشتياق", text: "أنا قريب حتى لو المسافة قالت غير ذلك." },
  { title: "افتحيه عند الزعل", text: "مكانتكِ لا يهزها سوء تفاهم ولا يوم صعب." },
  { title: "افتحيه قبل النوم", text: "نامي وأنتِ تعرفين أنكِ أجمل دعوة في القلب." },
  { title: "افتحيه عند الفرح", text: "ضحكتكِ تستحق أن يحتفل بها العالم." },
  { title: "افتحيه وقت ما تحبي", text: "كل وقت يليق به أن أقول لكِ إنكِ غالية." }
];

const bouquetReasons = ["قلبك", "ضحكتك", "اهتمامك", "كلامك", "وجودك"];
const sweetWords = ["أنتِ أجمل من كل الكلام.", "وجودك نعمة هادئة.", "ابتسامتك تكسب اليوم.", "قلبك نادر جدًا.", "أنتِ المعنى اللطيف وسط الزحمة."];
const filmFrames = ["البداية", "النظرة", "الضحكة", "الذكرى", "القادم"];

const polaroids = [
  { title: "لحظة من قلبي", img: "/12.jpg" },
  { title: "ضحكة لا تتكرر", img: "/13.jpg" },
  { title: "ذكرى دافئة", img: "/14.jpg" },
  { title: "صورة للحكاية", img: "/15.jpg" }
];

function pad(value) {
  return String(value).padStart(2, "0");
}

function safeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors.
  }
}

function getTimeTogether() {
  const start = new Date(ACQUAINTANCE_DATE);
  const now = new Date();
  const diff = Math.max(0, now - start);
  const totalHours = Math.floor(diff / 36e5);
  const totalDays = Math.floor(diff / 864e5);

  return {
    years: Math.floor(totalDays / 365.25),
    months: Math.floor((totalDays % 365.25) / 30.44),
    days: Math.floor((totalDays % 365.25) % 30.44),
    hours: totalHours % 24
  };
}

function getCountdown() {
  const diff = Math.max(0, new Date(SPECIAL_DATE) - new Date());
  return {
    days: Math.floor(diff / 864e5),
    hours: Math.floor((diff / 36e5) % 24),
    minutes: Math.floor((diff / 6e4) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function ImageWithFallback({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="img-fallback"><span>{alt}</span></div>;
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} />;
}

function PremiumCard({ icon, title, text }) {
  return (
    <article className="mini-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function App() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("royal");
  const [cinemaMode, setCinemaMode] = useState(false);
  const [timeTogether, setTimeTogether] = useState(getTimeTogether());
  const [countdown, setCountdown] = useState(getCountdown());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicReady, setMusicReady] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [selectedReaction, setSelectedReaction] = useState(() => safeGet("gift-reaction", ""));
  const [quizIndex, setQuizIndex] = useState(null);
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [sealedLetterOpened, setSealedLetterOpened] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [scratchOpen, setScratchOpen] = useState(false);
  const [wheelMessage, setWheelMessage] = useState(surpriseWheel[0]);
  const [guestNote, setGuestNote] = useState("");
  const [guestNotes, setGuestNotes] = useState(() => safeGet("gift-notes", ["فتحت الهدية وابتسمت ♡"]));
  const [signatureName, setSignatureName] = useState(() => safeGet("gift-signature", ""));
  const [isSigned, setIsSigned] = useState(() => Boolean(safeGet("gift-signature", "")));
  const [visitInfo, setVisitInfo] = useState(() => safeGet("gift-visits", { count: 0, lastOpen: "لم تُفتح بعد" }));
  const [dreamsDone, setDreamsDone] = useState(() => safeGet("gift-dreams", []));
  const [compliment, setCompliment] = useState(compliments[0]);
  const [activeCoupon, setActiveCoupon] = useState(coupons[0]);
  const [loveMeter, setLoveMeter] = useState(88);
  const [copyNotice, setCopyNotice] = useState("");
  const [profileTilt, setProfileTilt] = useState({ x: 0, y: 0, mx: 0, my: 0 });
  const [showEntrance, setShowEntrance] = useState(false);

  const [jewelOpen, setJewelOpen] = useState(false);
  const [bookPage, setBookPage] = useState(0);
  const [bottleOpen, setBottleOpen] = useState(false);
  const [heartUnlocked, setHeartUnlocked] = useState(false);
  const [mirrorVisible, setMirrorVisible] = useState(false);
  const [roseOpen, setRoseOpen] = useState(false);
  const [activeLetter, setActiveLetter] = useState(null);
  const [secretOpen, setSecretOpen] = useState(false);
  const [typedLine, setTypedLine] = useState("");
  const [activeBouquet, setActiveBouquet] = useState(bouquetReasons[0]);
  const [sweetWord, setSweetWord] = useState(sweetWords[0]);
  const [floatingHearts, setFloatingHearts] = useState([]);

  const audioRef = useRef(null);
  const voiceRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        right: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 5 + 2}px`,
        delay: `${Math.random() * 7}s`,
        duration: `${Math.random() * 7 + 6}s`
      })),
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTogether(getTimeTogether());
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 2100);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height <= 0 ? 0 : Math.min(100, Math.max(0, (window.scrollY / height) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => safeSet("gift-notes", guestNotes), [guestNotes]);
  useEffect(() => safeSet("gift-signature", signatureName), [signatureName]);
  useEffect(() => safeSet("gift-reaction", selectedReaction), [selectedReaction]);
  useEffect(() => safeSet("gift-dreams", dreamsDone), [dreamsDone]);

  useEffect(() => {
    const next = {
      count: Number(visitInfo.count || 0) + 1,
      lastOpen: new Date().toLocaleString("ar-EG", { dateStyle: "medium", timeStyle: "short" })
    };
    setVisitInfo(next);
    safeSet("gift-visits", next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const unlock = (event) => {
    event.preventDefault();
    if (password.trim() !== SITE_PASSWORD) {
      setError("كلمة السر غير صحيحة، جرّبي مرة أخرى ♡");
      return;
    }
    setIsUnlocked(true);
    setError("");
    setShowEntrance(true);
    setTimeout(() => setShowEntrance(false), 2400);
    setTimeout(() => {
      document.getElementById("featured-gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 900);
    setTimeout(() => {
      audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }, 350);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const pickRandom = (list, setter) => setter(list[Math.floor(Math.random() * list.length)]);

  const sharePage = async () => {
    const title = `صفحة خاصة جدًا لـ ${DISPLAY_NAME} ♡`;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: title, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopyNotice("تم نسخ الرابط بنجاح ♡");
        setTimeout(() => setCopyNotice(""), 2200);
      }
    } catch {
      setCopyNotice("انسخي الرابط من المتصفح وابعتيه لمن تحبين ♡");
      setTimeout(() => setCopyNotice(""), 2600);
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`فتحت لكِ صفحة خاصة جدًا يا ${DISPLAY_NAME} ♡\n${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const addGuestNote = (event) => {
    event.preventDefault();
    const clean = guestNote.trim();
    if (!clean) return;
    setGuestNotes((current) => [clean, ...current].slice(0, 5));
    setGuestNote("");
  };

  const toggleDream = (dream) => {
    setDreamsDone((current) => (current.includes(dream) ? current.filter((item) => item !== dream) : [...current, dream]));
  };

  const createHeart = (event) => {
    if (!isUnlocked || event.target.closest("button, input, textarea, a, .modal-card")) return;
    const id = Date.now() + Math.random();
    setFloatingHearts((current) => [...current.slice(-12), { id, x: event.clientX, y: event.clientY }]);
    setTimeout(() => setFloatingHearts((current) => current.filter((item) => item.id !== id)), 1300);
  };

  const typeMessage = () => {
    const msg = `أنا لا أكتب لكِ صفحة يا ${DISPLAY_NAME}... أنا أحاول أن أترجم مكانتكِ في قلبي.`;
    setTypedLine("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTypedLine(msg.slice(0, i));
      if (i >= msg.length) clearInterval(interval);
    }, 38);
  };

  const handleProfileMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    setProfileTilt({
      x: Number((-py * 14).toFixed(2)),
      y: Number((px * 18).toFixed(2)),
      mx: Number((px * 22).toFixed(2)),
      my: Number((py * 18).toFixed(2))
    });
  };

  const resetProfileMove = () => {
    setProfileTilt({ x: 0, y: 0, mx: 0, my: 0 });
  };

  const selectedMemoryIndex = selectedMemory ? memories.findIndex((item) => item.img === selectedMemory.img) : -1;

  const showMemoryByOffset = (offset) => {
    if (selectedMemoryIndex < 0) return;
    const nextIndex = (selectedMemoryIndex + offset + memories.length) % memories.length;
    setSelectedMemory(memories[nextIndex]);
  };

  return (
    <main className={`page theme-${theme} ${cinemaMode ? "cinema" : ""}`} dir="rtl" onClick={createHeart}>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="metadata" onCanPlay={() => setMusicReady(true)} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      <audio ref={voiceRef} src={VOICE_SRC} preload="metadata" onCanPlay={() => setVoiceReady(true)} />

      {showIntro && (
        <div className="intro">
          <div className="intro-orbit">♡</div>
          <h2>هدية تُفتح بالقلب</h2>
          <p>لحظات قليلة ويبدأ العالم الخاص...</p>
        </div>
      )}

      {showEntrance && (
        <div className="entrance-overlay">
          <div className="entrance-ring ring-1" />
          <div className="entrance-ring ring-2" />
          <div className="entrance-card profile-cinematic glass">
            <div className="entrance-profile-scene">
              <div className="entrance-profile">
                <ImageWithFallback src={PROFILE_IMAGE} alt={DISPLAY_NAME} />
              </div>
              <div className="entrance-name-3d">{DISPLAY_NAME}</div>
            </div>
            <span>تم فتح العالم الخاص</span>
            <h2>أهلًا يا {DISPLAY_NAME}</h2>
            <p>كل شيء هنا صُمم خصيصًا لكِ، من القلب وحتى آخر تفصيلة.</p>
          </div>
        </div>
      )}

      <div className="progress-top" style={{ width: `${scrollProgress}%` }} />

      {floatingHearts.map((heart) => (
        <span key={heart.id} className="tap-heart" style={{ right: `calc(100vw - ${heart.x}px)`, top: `${heart.y}px` }}>♡</span>
      ))}

      <div className="ambient one" />
      <div className="ambient two" />
      <div className="ambient three" />

      <nav className="navbar">
        <a href="#home">الرئيسية</a>
        <a href="#letter">الرسالة</a>
        <a href="#featured-gallery">الصور</a>
        <a href="#reasons">أسباب أحبك</a>
        <button onClick={toggleMusic}>{isPlaying ? "إيقاف الموسيقى" : "شغل الموسيقى"} ♪</button>
        <button onClick={() => setCinemaMode((value) => !value)}>{cinemaMode ? "الوضع العادي" : "وضع سينمائي"} ◐</button>
      </nav>

      <section id="home" className="hero">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              right: particle.right,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}

        <div className="hero-art glass">
          <div className="moon" />
          <div className="person p1" />
          <div className="person p2" />
          <div className="heart-glow">♡</div>
          <div className="roses"><span /><span /><span /></div>
        </div>

        <div className="hero-text">
          <p className="badge">هدية رقمية فاخرة</p>
          <h1>إلى {DISPLAY_NAME}</h1>
          <p>صفحة خاصة صُممت لكِ بكل الحب، كأنها قطعة من قلبي محفوظة لكِ وحدكِ.</p>
          <div className="divider"><span /><b>♡</b><span /></div>
          <div className="hero-stats">
            <div><b>100%</b><span>مصممة خصيصًا</span></div>
            <div><b>∞</b><span>رسائل محفوظة</span></div>
            <div><b>24K</b><span>لحظات لا تنسى</span></div>
          </div>
        </div>

        <form className="unlock glass" onSubmit={unlock}>
          <div className="unlock-profile-wrap">
            <div className="unlock-profile-frame">
              <ImageWithFallback src={PROFILE_IMAGE} alt={DISPLAY_NAME} />
            </div>
            <div className="profile-name-animated">{DISPLAY_NAME}</div>
            <span className="profile-pill">صورة {DISPLAY_NAME}</span>
            <div className="profile-spark spark-1">✦</div>
            <div className="profile-spark spark-2">♡</div>
            <div className="profile-spark spark-3">✦</div>
          </div>
          <div className="lock">⌘</div>
          <h2>مرحبًا بكِ في عالمي الخاص</h2>
          <p>هذه الهدية محمية بكلمة سر لأنها خُلقت لشخص واحد فقط.</p>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="اكتبي كلمة السر هنا" />
          {error && <small className="error">{error}</small>}
          <button type="submit">دخول إلى عالمي ♡</button>
          <small>كل ما هنا... لكِ وحدكِ</small>
        </form>
      </section>

      <div className={`private ${isUnlocked ? "show" : "locked"}`}>
        {!isUnlocked && (
          <div className="locked-overlay glass">
            <h3>افتحي الهدية أولًا ♡</h3>
            <p>اكتبي كلمة السر بالأعلى لتظهر الرسالة والذكريات.</p>
          </div>
        )}

        <section id="featured-gallery" className="container">
          <div className="photo-story glass">
            <div className="photo-story-head">
              <span className="badge">أول شيء بعد كلمة السر</span>
              <h2>ألبوم صور كبير مخصوص لـ {DISPLAY_NAME}</h2>
              <p>15 صورة بحجم كبير، وكل صورة تحتفظ بلحظة، إحساس، وذكرى جميلة. اضغطي على أي صورة لعرضها بشكل أوضح.</p>
            </div>

            <div className="photo-status-strip">
              <article><b>15</b><span>صورة خاصة</span></article>
              <article><b>VIP</b><span>عرض سينمائي</span></article>
              <article><b>♡</b><span>كلام تحت كل صورة</span></article>
            </div>

            <article className="photo-hero-feature glass" onClick={() => setSelectedMemory(memories[0])}>
              <div className="photo-hero-image">
                <ImageWithFallback src={memories[0].img} alt={memories[0].title} />
                <div className="photo-hero-shine" />
              </div>
              <div className="photo-hero-copy">
                <span>الصورة الأساسية</span>
                <h3>{memories[0].title}</h3>
                <p>{memories[0].text}</p>
                <small>اضغطي على الصورة لعرضها بحجم أكبر ♡</small>
              </div>
            </article>

            <div className="photo-feature-row">
              {memories.slice(1, 4).map((item) => (
                <article key={item.title} className="photo-feature-card glass" onClick={() => setSelectedMemory(item)}>
                  <div className="memory-img"><ImageWithFallback src={item.img} alt={item.title} /></div>
                  <div className="photo-card-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="big-memories-grid">
              {memories.slice(4).map((item, index) => (
                <article key={item.title} className="big-memory-card glass" onClick={() => setSelectedMemory(item)}>
                  <div className="memory-img">
                    <ImageWithFallback src={item.img} alt={item.title} />
                    <span className="photo-number">{String(index + 5).padStart(2, "0")}</span>
                  </div>
                  <div className="photo-card-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mini-photo-rail" aria-label="صور مصغرة">
              {memories.map((item, index) => (
                <button key={`${item.img}-thumb`} onClick={() => setSelectedMemory(item)} aria-label={`فتح الصورة ${index + 1}`}>
                  <ImageWithFallback src={item.img} alt={item.title} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>

            <div className="photo-love-note">
              <span>كلام من القلب</span>
              <h3>وتحت الصور... كلمة تليق بكِ</h3>
              <p>{photosLoveNote}</p>
            </div>

            <div className="photo-final-letter">
              <div className="letter-icon">✉</div>
              <div>
                <span>رسالة صغيرة بعد الألبوم</span>
                <h3>يا {DISPLAY_NAME}، كل صورة هنا اختارت مكانها لأنها شبه إحساس جميل بيننا.</h3>
                <p>كل مرة تشوفي الألبوم ده، افتكري إنكِ مش مجرد اسم مكتوب في الصفحة؛ أنتِ سبب كل تفصيلة حلوة فيها.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="🎬 لحظات متحركة" title="3 فيديوهات خاصة ليكِ" subtitle="كل فيديو يحمل إحساسًا لا تقدر تشيله صورة وحدها." />
          <div className="grid three">
            {videos.map((vid) => (
              <article key={vid.title} className="mini-card" style={{ overflow: "hidden" }}>
                <video
                  src={vid.src}
                  controls
                  style={{ width: "100%", borderRadius: "12px", marginBottom: "0.8rem", background: "#000" }}
                  poster="/profile.jpg"
                />
                <h3>{vid.title}</h3>
                <p>{vid.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="split glass theme-style-panel">
            <div>
              <span className="badge">تغيير الستايل</span>
              <h2>اختاري إحساس الهدية</h2>
              <p>اختاري المود الأقرب لقلبك: ملكي، وردي، أو ذهبي.</p>
            </div>
            <div className="theme-options">
              {themeOptions.map((option) => (
                <button key={option.id} onClick={() => setTheme(option.id)} className={theme === option.id ? "active" : ""}>
                  <span className={`theme-dot ${option.id}`} />
                  <b>{option.name}</b>
                  <small>{option.hint}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="profile-showcase-large glass">
            <div className="profile-showcase-copy">
              <span className="badge">صورتك في قلبي</span>
              <h3>يا {DISPLAY_NAME}... نورك هنا</h3>
              <p>صورتك هنا مش مجرد صورة؛ دي أول ابتسامة بتقابل القلب، وأجمل حضور قبل أي كلام.</p>
            </div>

            <div
              className="profile-showcase-stage parallax-stage"
              onMouseMove={handleProfileMove}
              onMouseLeave={resetProfileMove}
              style={{
                "--tilt-x": `${profileTilt.x}deg`,
                "--tilt-y": `${profileTilt.y}deg`,
                "--move-x": `${profileTilt.mx}px`,
                "--move-y": `${profileTilt.my}px`
              }}
            >
              <span className="showcase-orbit orbit-a" />
              <span className="showcase-orbit orbit-b" />
              <span className="showcase-orbit orbit-c" />
              <span className="showcase-spark spark-a">✦</span>
              <span className="showcase-spark spark-b">♡</span>
              <span className="showcase-spark spark-c">✦</span>

              <div className="profile-showcase-frame profile-tilt-card">
                <div className="profile-showcase-glow" />
                <div className="animated-rose-frame">
                  <span>🌹</span>
                  <span>❀</span>
                  <span>🌹</span>
                  <span>✦</span>
                  <span>❀</span>
                  <span>🌹</span>
                </div>
                <ImageWithFallback src={PROFILE_IMAGE} alt={DISPLAY_NAME} />
              </div>

              <div className="profile-showcase-name">
                <small>أجمل حضور في الحكاية</small>
                <h2>{DISPLAY_NAME}</h2>
                <p>وجودك هو أول تفصيلة بتنوّر المكان، وأهدى معنى في كل الحكاية.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="split glass">
            <div>
              <span className="badge">أثر الزيارة</span>
              <h2>هذه الهدية لا تُفتح صدفة</h2>
              <p>كل مرة تفتحينها، تترك أثرًا صغيرًا محفوظًا على هذا الجهاز.</p>
            </div>
            <div className="visit-grid">
              <article><b>{pad(visitInfo.count)}</b><span>عدد مرات الفتح</span></article>
              <article><b>{visitInfo.lastOpen}</b><span>آخر مرة فُتحت فيها</span></article>
            </div>
          </div>
        </section>

        <section className="container">
          <div className={`sealed-letter glass ${sealedLetterOpened ? "opened" : ""}`}>
            <div className="envelope-wrap">
              <div className="sealed-envelope">
                <div className="env-back" />
                <div className="env-paper">
                  <span>إلى</span>
                  <h2>{DISPLAY_NAME}</h2>
                  <p>هذا الجواب كُتب لكِ وحدكِ، لأن بعض الأشخاص لا تكفيهم الهدايا العادية.</p>
                  <small>مختوم بالمحبة ♡</small>
                </div>
                <div className="env-front" />
                <div className="env-flap" />
                <div className="wax">♡</div>
                <div className="css-rose"><i /><i /><i /><b /></div>
                <div className="env-name">{DISPLAY_NAME}</div>
              </div>
            </div>
            <div>
              <span className="badge">جواب مختوم</span>
              <h2>رسالة عليها وردة واسمك</h2>
              <p>ظرف أنيق، وردة، ختم شمع، واسم الشخص ظاهر على الجواب.</p>
              <button onClick={() => setSealedLetterOpened((value) => !value)}>{sealedLetterOpened ? "إغلاق الجواب" : "فتح الجواب"}</button>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="center-card glass">
            <span className="badge">رسالة اليوم</span>
            <h2>{dailyMessages[new Date().getDate() % dailyMessages.length]}</h2>
            <p>رسالة تتغير مع الأيام، لكنها دائمًا تحمل نفس المعنى: أنتِ غالية جدًا.</p>
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="اختاري إحساسك" title="رسالة تناسب لحظتك" subtitle="كل إحساس له كلمة خاصة." />
          <div className="mood-board glass">
            <div className="vertical-buttons">
              {moods.map((item) => (
                <button key={item.mood} onClick={() => setSelectedMood(item)} className={selectedMood.mood === item.mood ? "active" : ""}>
                  <span>{item.icon}</span>{item.mood}
                </button>
              ))}
            </div>
            <div className="mood-message">
              <span>{selectedMood.icon}</span>
              <h3>{selectedMood.mood}</h3>
              <p>{selectedMood.message}</p>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="center-card glass">
            <span className="badge">رد فعل سريع</span>
            <h2>إحساسك بعد الهدية؟</h2>
            <p>اختاري إحساسك، وسيبقى محفوظًا كل مرة تفتحين الهدية من نفس الجهاز.</p>
            <div className="reaction-grid">
              {reactions.map((reaction) => (
                <button key={reaction.label} onClick={() => setSelectedReaction(reaction.label)} className={selectedReaction === reaction.label ? "active" : ""}>
                  <span>{reaction.icon}</span><b>{reaction.label}</b>
                </button>
              ))}
            </div>
            {selectedReaction && <small>تم حفظ رد فعلك: {selectedReaction} ♡</small>}
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="تفاصيلها" title="أشياء صغيرة تشبهك" subtitle="كل تفصيلة هنا معمولة مخصوص عشان تشبهك." />
          <div className="grid four">
            {favoriteDetails.map((item) => <PremiumCard key={item.label} icon={item.icon} title={item.label} text={item.value} />)}
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="لعبة صغيرة" title="اختاري إجابة من قلبك" subtitle="لا توجد إجابة خطأ هنا." />
          <div className="grid three">
            {quiz.map((item, index) => (
              <article key={item.question} className={`mini-card quiz-card ${quizIndex === index ? "active" : ""}`}>
                <b>{pad(index + 1)}</b>
                <h3>{item.question}</h3>
                <div className="inline-buttons">
                  {item.options.map((option) => <button key={option} onClick={() => setQuizIndex(index)}>{option}</button>)}
                </div>
                {quizIndex === index && <p>{item.response}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="عداد العمر الجميل" title="منذ أن عرفتها في 11 يناير 2024" subtitle="كل رقم هنا ليس وقتًا فقط، بل ذكرى عاشت في داخلي." />
          <div className="time-grid">
            <article><span>السنوات</span><b>{pad(timeTogether.years)}</b></article>
            <article><span>الشهور</span><b>{pad(timeTogether.months)}</b></article>
            <article><span>الأيام</span><b>{pad(timeTogether.days)}</b></article>
            <article><span>الساعات</span><b>{pad(timeTogether.hours)}</b></article>
          </div>
        </section>

        <section id="letter" className="container">
          <div className="letter-block">
            <div className="letter-visual glass">
              <div className="small-envelope"><div className="small-paper">{DISPLAY_NAME}</div><div className="small-seal">♡</div></div>
            </div>
            <div className="letter-text glass">
              <SectionTitle eyebrow="من القلب" title="رسالة لا تشبه الرسائل" />
              {loveLetter.map((line, index) => <p key={line} className={index === loveLetter.length - 1 ? "gold-line" : ""}>{line}</p>)}
            </div>
          </div>
        </section>


        <section className="container">
          <SectionTitle eyebrow="حكايتنا" title="محطات لا تُنسى" subtitle="كل محطة مررنا بها صنعت شيئًا أجمل بيننا." />
          <div className="timeline">
            {timeline.map((item, index) => (
              <article key={item.title} className={`timeline-card glass ${index % 2 === 0 ? "right" : "left"}`}>
                <span>{item.icon}</span>
                <div><h3>{item.title}</h3><b>{item.date}</b><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="فصول الحكاية" title="قصة مرتبة كأنها كتاب" subtitle="كل فصل يحكي إحساسًا مختلفًا من الرحلة." />
          <div className="chapter-block glass">
            <div className="vertical-buttons">
              {chapters.map((chapter) => (
                <button key={chapter.title} onClick={() => setActiveChapter(chapter)} className={activeChapter.title === chapter.title ? "active" : ""}>
                  <span>{chapter.title}</span><b>{chapter.label}</b>
                </button>
              ))}
            </div>
            <div className="chapter-display">
              <span>{activeChapter.title}</span>
              <h3>{activeChapter.label}</h3>
              <p>{activeChapter.text}</p>
            </div>
          </div>
        </section>

        <section id="reasons" className="container">
          <SectionTitle eyebrow="لأنك مختلفة" title="أسباب أحبك" />
          <div className="grid six">
            {reasons.map((item) => <PremiumCard key={item.title} icon={item.icon} title={item.title} text={item.text} />)}
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="رسائل مخفية" title="افتحيها وقت ما تحتاجين" subtitle="ثلاث رسائل صغيرة، كل واحدة منها كتبت لتصل في وقتها." />
          <div className="grid three">
            {secretMessages.map((msg) => (
              <article key={msg.number} className="secret-card glass">
                <div className="secret-front"><b>{msg.number}</b><h3>{msg.title}</h3><span>مرّري هنا ♡</span></div>
                <div className="secret-back"><p>{msg.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="split glass">
            <div className="voice-orb">♪</div>
            <div>
              <span className="badge">رسالة صوتية</span>
              <h2>صوت محفوظ لكِ</h2>
              <p>{voiceReady ? "رسالة صغيرة تسمعينها وقت ما تحبين." : "ضعي ملف voice-message.mp3 داخل public لإضافة رسالة صوتية خاصة."}</p>
            </div>
            <button onClick={() => voiceRef.current?.play()}>تشغيل الرسالة</button>
          </div>
        </section>

        <section className="container">
          <div className="split glass">
            <div><span className="badge">موعد خاص</span><h2>العد التنازلي لعيد ميلادها 🎂</h2><p>5 مايو... يوم يستاهل يتحتفل بيه بأجمل طريقة.</p></div>
            <div className="countdown-grid">
              <article><b>{pad(countdown.days)}</b><span>يوم</span></article>
              <article><b>{pad(countdown.hours)}</b><span>ساعة</span></article>
              <article><b>{pad(countdown.minutes)}</b><span>دقيقة</span></article>
              <article><b>{pad(countdown.seconds)}</b><span>ثانية</span></article>
            </div>
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="كبسولة زمنية" title="نحتفظ بهذا للمستقبل" subtitle="مكان صغير للأمنيات والكلام الذي يستحق أن يبقى." />
          <div className="grid three">
            {["رسالة للمستقبل", "أمنية", "ذكرى محفوظة"].map((title, index) => (
              <PremiumCard key={title} icon="✦" title={title} text={["عندما نقرأ هذه الهدية بعد سنوات، أتمنى أن نبتسم بنفس الحب.", "أن تظل قلوبنا قريبة مهما تغيّرت الأيام.", "كل لحظة جميلة بيننا تستحق أن تعيش هنا للأبد."][index]} />
            ))}
          </div>
        </section>

        <section className="container">
          <div className="split glass">
            <div><span className="badge">وعد مني</span><h2>ليس كلامًا عابرًا</h2><p>بعض الوعود لا تُقال لتُسمع فقط، بل لتبقى ثابتة في القلب.</p></div>
            <div className="list-box">
              {["أعدك أن أبقى سندًا لا يختفي وقت التعب.", "أعدك أن أحب تفاصيلك الصغيرة قبل الكبيرة.", "أعدك أن أختارك في كل مرة وكأنها المرة الأولى.", "أعدك أن تظل هذه الحكاية دافئة مهما مر الوقت."].map((item, i) => <article key={item}><span>{pad(i + 1)}</span><p>{item}</p></article>)}
            </div>
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="نجوم أمنيات" title="أمنيات محفوظة لنا" />
          <div className="grid four">
            {["أتمنى أن نبقى قريبين مهما ابتعدت المسافات.", "أتمنى أن تظل ضحكتكِ سببًا في خفة الأيام.", "أتمنى أن تحمل لنا الأيام القادمة حكايات أجمل.", "أتمنى أن تفتحي هذه الهدية كل مرة وكأنها أول مرة."].map((item, i) => <PremiumCard key={item} icon="✦" title={pad(i + 1)} text={item} />)}
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="كلمات بخط القلب" title="نوتات صغيرة لكِ" />
          <div className="grid four">
            {notes.map((note, index) => (
              <article className="note-card glass" key={note}><span>0{index + 1}</span><p>{note}</p></article>
            ))}
          </div>
        </section>

        <section className="container">
          <div className={`gift-box glass ${giftOpened ? "opened" : ""}`}>
            <div className="gift-visual" onClick={() => setGiftOpened(true)}><div className="gift-lid" /><div className="gift-body" /><span>♡</span></div>
            <div><span className="badge">مفاجأة أخيرة</span><h2>{giftOpened ? "تم فتح الهدية" : "اضغطي على الصندوق"}</h2><p>{giftOpened ? "المفاجأة الحقيقية أنكِ أنتِ الهدية الأجمل." : "صندوق صغير يحمل رسالة أخيرة."}</p>{!giftOpened && <button onClick={() => setGiftOpened(true)}>فتح الهدية</button>}</div>
          </div>
        </section>

        <section className="container">
          <div className={`scratch-card glass ${scratchOpen ? "revealed" : ""}`} onClick={() => setScratchOpen(true)}>
            <div className="scratch-cover"><span>✦</span><h2>كارت خدش سري</h2><p>اضغطي هنا لكشف الرسالة المخفية</p></div>
            <div className="scratch-hidden"><span>♡</span><h2>أنتِ لستِ جزءًا من الحكاية فقط... أنتِ أجمل فصل فيها ♡</h2><button onClick={(event) => { event.stopPropagation(); setScratchOpen(false); }}>إخفاء الرسالة</button></div>
          </div>
        </section>

        <section className="container">
          <div className="wheel-card glass">
            <div className="wheel"><span>♡</span><span>✦</span><span>☾</span><span>❀</span></div>
            <div><span className="badge">عجلة المفاجآت</span><h2>اضغطي وخلي قلبي يختار رسالة</h2><p>{wheelMessage}</p><button onClick={() => pickRandom(surpriseWheel, setWheelMessage)}>اختيار مفاجأة</button></div>
          </div>
        </section>

        <section className="container">
          <div className="guestbook glass">
            <div><span className="badge">دفتر إحساس</span><h2>اكتبي كلمة تفضلي فاكرها</h2><p>دفتر صغير يحفظ إحساسك جوه الهدية.</p><form onSubmit={addGuestNote}><textarea value={guestNote} onChange={(event) => setGuestNote(event.target.value)} placeholder="اكتبي إحساسك هنا..." /><button type="submit">حفظ الرسالة</button></form></div>
            <div className="list-box">{guestNotes.map((note, i) => <article key={`${note}-${i}`}><span>{pad(i + 1)}</span><p>{note}</p></article>)}</div>
          </div>
        </section>

        <section className="container">
          <div className="center-card glass">
            <span className="badge">هذه الهدية ليست النهاية</span>
            <h2>كل مرة تفتحينها، تذكري أن هناك شخصًا يرى وجودك أجمل صدفة وأغلى هدية.</h2>
            <button onClick={sharePage}>مشاركة الهدية</button>
            {copyNotice && <small>{copyNotice}</small>}
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="أحلام قريبة" title="أشياء نعملها سوا" subtitle="قائمة صغيرة تحفظ الأمنيات التي تحققت." />
          <div className="split glass">
            <div><span className="badge">قائمة المستقبل</span><h2>{dreamsDone.length} من {futureDreams.length}</h2><p>اضغطي على أي حلم عند تحقيقه.</p></div>
            <div className="list-buttons">
              {futureDreams.map((dream) => <button key={dream} onClick={() => toggleDream(dream)} className={dreamsDone.includes(dream) ? "done" : ""}><span>{dreamsDone.includes(dream) ? "✓" : "♡"}</span>{dream}</button>)}
            </div>
          </div>
        </section>

        <section className="container">
          <div className="center-card glass">
            <span className="badge">كارت مدح</span>
            <h2>{compliment}</h2>
            <p>كل ضغطة تظهر كلمة مختلفة.</p>
            <button onClick={() => pickRandom(compliments, setCompliment)}>كلمة جديدة</button>
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="محتويات الهدية" title="كل ما يجعلها باقة فاخرة" subtitle="كل تفصيلة هنا معمولة مخصوص عشان تليق بيكي." />
          <div className="grid three">
            {highlights.map((item) => <PremiumCard key={item.title} {...item} />)}
          </div>
        </section>

        <section className="container">
          <div className="split glass">
            <div><span className="badge">بطاقة الهدية</span><h2>باب الهدية محفوظ هنا</h2><p>زر سريع لمشاركة الهدية مع الشخص المقصود.</p></div>
            <div className="link-preview"><span>{window.location.hostname || "gift-page.local"}</span><b>هدية خاصة لـ {DISPLAY_NAME}</b><button onClick={sharePage}>نسخ / مشاركة الرابط</button>{copyNotice && <small>{copyNotice}</small>}</div>
          </div>
        </section>

        <section className="container">
          <div className="receipt glass">
            <SectionTitle eyebrow="فاتورة حب" title="تفاصيل الهدية" subtitle="فاتورة رمزية بتفاصيل لا تُشترى." />
            <div className="receipt-table">
              {receipt.map((row) => <article key={row.item}><b>{row.item}</b><span>{row.qty}</span><em>{row.price}</em></article>)}
              <article className="total"><b>الإجمالي</b><span /><em>أغلى من كل شيء ♡</em></article>
            </div>
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="قسائم خاصة" title="قسائم حب قابلة للاستخدام" />
          <div className="coupon-layout">
            <div className="coupon-preview glass"><span>قسيمة مختارة</span><h2>{activeCoupon.title}</h2><p>{activeCoupon.text}</p><b>صالحة للأبد ♡</b></div>
            <div className="list-buttons">
              {coupons.map((coupon) => <button key={coupon.title} onClick={() => setActiveCoupon(coupon)} className={activeCoupon.title === coupon.title ? "done" : ""}><span>♡</span>{coupon.title}</button>)}
            </div>
          </div>
        </section>

        <section className="container">
          <div className="split glass">
            <div><span className="badge">مؤشر الحب</span><h2>حرّكي المؤشر وشوفي النتيجة</h2><p>مهما تغيّر الرقم، الحب أكبر من القياس.</p></div>
            <div className="meter-box">
              <div className="meter" style={{ "--meter": `${loveMeter * 3.6}deg` }}><b>{loveMeter}%</b><span>حب</span></div>
              <input type="range" min="1" max="100" value={loveMeter} onChange={(event) => setLoveMeter(Number(event.target.value))} />
              <p>{loveMeter > 90 ? "هذا ليس رقمًا... هذا قلب كامل ♡" : loveMeter > 60 ? "كبير جدًا، لكن الحقيقة أكبر." : "حتى أقل رقم هنا مليان حب."}</p>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="certificate glass">
            <span className="badge">شهادة خاصة</span>
            <h2>شهادة حب فاخرة</h2>
            <p>تُمنح هذه الهدية إلى <b>{DISPLAY_NAME}</b> لأنها صاحبة المكان الأجمل في القلب.</p>
            <div className="cert-meta"><span>الرقم: {GIFT_SERIAL}</span><span>التوقيع: W♡</span><span>الحالة: محفوظة للأبد</span></div>
            <button onClick={() => window.print()}>طباعة الشهادة</button>
          </div>
        </section>

        <section className="container">
          <div className="split glass">
            <div><span className="badge">توقيع الهدية</span><h2>اكتبي توقيعك هنا</h2><p>لمسة صغيرة تخلي الهدية أقرب لقلبك ومحفوظة باسمك.</p><form onSubmit={(event) => { event.preventDefault(); if (signatureName.trim()) setIsSigned(true); }}><input value={signatureName} onChange={(event) => { setSignatureName(event.target.value); setIsSigned(false); }} placeholder="مثال: مي ♡" /><button type="submit">اعتماد التوقيع</button></form></div>
            <div className={`signature-preview ${isSigned ? "signed" : ""}`}><span>الختم النهائي</span><h3>{isSigned ? signatureName : "في انتظار التوقيع"}</h3><p>{isSigned ? "تم حفظ التوقيع جوه الهدية ♡" : "اكتبي اسمك ثم اضغطي اعتماد التوقيع."}</p></div>
          </div>
        </section>

        <section className="container">
          <div className="split glass whatsapp">
            <div><span className="badge">مشاركة فورية</span><h2>ابعتي الهدية برسالة جاهزة</h2><p>زر سريع لمشاركة الهدية على واتساب.</p></div>
            <button onClick={shareWhatsApp}>مشاركة على واتساب</button>
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="قائمة مشاعر" title="لكل لحظة لحنها" />
          <div className="grid three">
            {[
              { icon: "☾", title: "لما نشتاق", text: "أغنية هادئة، ضوء خافت، وذكرى تفتح باب القلب." },
              { icon: "✦", title: "لما نفرح", text: "لحن خفيف يشبه الضحكة الأولى في اليوم الجميل." },
              { icon: "♡", title: "لما نهدى", text: "موسيقى دافئة تقول إن كل شيء سيكون بخير." }
            ].map((item) => <PremiumCard key={item.title} {...item} />)}
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="لحننا" title="موسيقى لروحنا" />
          <div className="music-player glass">
            <div className="album"><ImageWithFallback src="/music.jpg" alt="أغنيتنا" /></div>
            <div><h3>أغنيتنا</h3><p>{musicReady ? "اضغطي تشغيل وعيشي اللحظة." : "ضعي ملف love.mp3 داخل public لتعمل الموسيقى."}</p><div className="audio-progress"><span /></div></div>
            <button className="play" onClick={toggleMusic}>{isPlaying ? "❚❚" : "▶"}</button>
          </div>
        </section>

        <section className="container">
          <SectionTitle eyebrow="إضافات ملكية" title="20 فكرة فخمة داخل الهدية" subtitle="كل إضافة هنا معمولة عشان الهدية تليق بيكي ومليانة تفاصيل شخصية." />
          <div className="premium-grid">
            <article className={`premium-card ${jewelOpen ? "opened" : ""}`}><div className="jewel-box" onClick={() => setJewelOpen(!jewelOpen)}><div className="jewel-lid" /><div className="jewel-body" /><b>{DISPLAY_NAME.slice(0, 1)}</b></div><h3>صندوق مجوهرات باسمها</h3><p>{jewelOpen ? `${DISPLAY_NAME}... أنتِ أغلى من كل هدية.` : "اضغطي على الصندوق ليفتح."}</p></article>
            <article className="premium-card"><div className="book" onClick={() => setBookPage((page) => (page + 1) % storyBookPages.length)}><div>{storyBookPages[bookPage].title}</div><div>{storyBookPages[bookPage].text}</div></div><h3>كتاب ذكريات</h3><button onClick={() => setBookPage((page) => (page + 1) % storyBookPages.length)}>قلب الورقة</button></article>
            <article className={`premium-card ${bottleOpen ? "opened" : ""}`}><div className="bottle" onClick={() => setBottleOpen(!bottleOpen)}><span /><b>💌</b></div><h3>زجاجة رسالة</h3><p>{bottleOpen ? "رسالة وصلت لقلبك قبل أي مكان." : "اضغطي على الزجاجة."}</p></article>
            <article className={`premium-card heart-key ${heartUnlocked ? "opened" : ""}`}><div className="heart-key-art"><span>♡</span><button onClick={() => setHeartUnlocked(true)}>🔑</button></div><h3>قفل ومفتاح</h3><p>{heartUnlocked ? "المفتاح الوحيد لهذا القلب هو اسمك." : "اضغطي على المفتاح."}</p></article>
            <article className="premium-card"><div className="necklace"><span>{DISPLAY_NAME}</span></div><h3>سلسلة باسم الشخص</h3><p>اسمك محفور في قلبي.</p></article>
            <article className="premium-card"><div className="ticket"><span>تذكرة سفر</span><b>من: قلبي</b><b>إلى: {DISPLAY_NAME}</b><small>الوجهة: العمر كله</small></div><h3>تذكرة سفر رومانسية</h3></article>
            <article className="premium-card"><div className="invite"><span>دعوة خاصة</span><h4>{DISPLAY_NAME}</h4><p>لحضور قصة حب لا تشبه غيرها.</p></div><h3>بطاقة دعوة خاصة</h3></article>
            <article className="premium-card"><div className="mirror" onClick={() => setMirrorVisible(!mirrorVisible)}><span>{mirrorVisible ? "أجمل ما في المكان هو أنتِ" : "اضغطي على المرآة"}</span></div><h3>مرآة سحرية</h3></article>
            <article className={`premium-card ${roseOpen ? "opened" : ""}`}><div className="bloom" onClick={() => setRoseOpen(!roseOpen)}><i /><i /><i /><i /></div><h3>وردة بتتفتح</h3><p>{roseOpen ? "كل وردة تشبهك قليلًا، لكن لا واحدة تصل لجمالك." : "اضغطي لتفتح الوردة."}</p></article>
            <article className="premium-card"><div className="star-cert"><span>✦</span><h4>نجمة باسم {DISPLAY_NAME}</h4><p>محفوظة في سماء القلب.</p></div><h3>نجمة باسم الشخص</h3></article>
          </div>

          <div className="wide-grid">
            <article className="wide-card glass"><div><span className="badge">أظرف متعددة</span><h3>افتحي الظرف المناسب للحظة</h3><p>{activeLetter ? activeLetter.text : "اختاري ظرفًا من الأظرف الخمسة."}</p></div><div className="mini-buttons">{multiLetters.map((letter) => <button key={letter.title} onClick={() => setActiveLetter(letter)}>✉ {letter.title}</button>)}</div></article>
            <article className="wide-card glass"><div className="clock"><span className="h" /><span className="m" /><b>♡</b></div><div><span className="badge">ساعة ذهبية</span><h3>الوقت معكِ لا يُحسب بالساعات</h3><p>بل بالذكريات التي لا تُنسى.</p></div></article>
            <article className="wide-card glass"><div><span className="badge">فيلمنا الخاص</span><h3>شريط سينما للذكريات</h3></div><div className="film">{filmFrames.map((frame) => <span key={frame}>{frame}</span>)}</div></article>
            <article className="wide-card glass"><div><span className="badge">باقة ورد تفاعلية</span><h3>كل وردة تقول سببًا</h3><p>سبب اليوم: <b>{activeBouquet}</b></p></div><div className="flowers">{bouquetReasons.map((reason) => <button key={reason} onClick={() => setActiveBouquet(reason)}>🌹</button>)}</div></article>
            <article className={`wide-card glass ${secretOpen ? "opened" : ""}`}><div className="secret-box" onClick={() => setSecretOpen(!secretOpen)}>✦</div><div><span className="badge">صندوق أسرار</span><h3>{secretOpen ? "السر ظهر" : "افتحي الصندوق"}</h3><p>{secretOpen ? "السر هو أنني أحبك أكثر مما أقول." : "صندوق صغير لا يفتح إلا لمن يستحق."}</p></div></article>
            <article className="wide-card glass"><div><span className="badge">رسالة تُكتب الآن</span><h3>كأن الكلام يولد أمامك</h3><p>{typedLine || "اضغطي الزر لتبدأ الرسالة."}</p><button onClick={typeMessage}>اكتبي الرسالة</button></div></article>
            <article className="wide-card glass"><div className="royal-seal"><span>خاص بـ</span><b>{DISPLAY_NAME}</b><small>VIP Love Gift</small></div><h3>ختم ملكي باسم الشخص</h3></article>
            <article className="wide-card glass"><div><span className="badge">صندوق صور</span><h3>Polaroid Memories</h3></div><div className="polaroids">{polaroids.map((item, i) => <div key={item.title} style={{ "--r": `${(i - 1.5) * 5}deg` }}><ImageWithFallback src={item.img} alt={item.title} /><span>{item.title}</span></div>)}</div></article>
            <article className="wide-card glass"><div className="moon-scene">☾</div><div><span className="badge">تحت ضوء القمر</span><h3>في كل ليلة هناك دعوة صغيرة</h3><p>أن تبقي بخير، وأن تظل ابتسامتك قريبة من قلبي.</p></div></article>
            <article className="wide-card glass"><div><span className="badge">كلمة حلوة</span><h3>{sweetWord}</h3><p>زر صغير لكل مرة تحتاجين فيها كلمة تطبطب على القلب.</p><button onClick={() => pickRandom(sweetWords, setSweetWord)}>اضغطي لو محتاجة كلمة حلوة</button></div></article>
          </div>
        </section>

        {selectedMemory && (
          <div className="modal" onClick={() => setSelectedMemory(null)}>
            <div className="modal-card photo-modal-card glass" onClick={(event) => event.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedMemory(null)}>×</button>
              <button className="modal-arrow modal-next" onClick={() => showMemoryByOffset(1)}>›</button>
              <button className="modal-arrow modal-prev" onClick={() => showMemoryByOffset(-1)}>‹</button>
              <div className="modal-img"><ImageWithFallback src={selectedMemory.img} alt={selectedMemory.title} /></div>
              <div className="modal-memory-count">{String(selectedMemoryIndex + 1).padStart(2, "0")} / {String(memories.length).padStart(2, "0")}</div>
              <h2>{selectedMemory.title}</h2>
              <p>{selectedMemory.text}</p>
              <small>استخدمي الأسهم للتنقل بين الصور ♡</small>
            </div>
          </div>
        )}

        <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>

        <footer className="footer container">
          <div className="footer-mark">W♡</div>
          <div className="luxury-seal"><span>VIP</span><b>هدية موثقة بالقلب</b></div>
          <div><h2>شكرًا لوجودك في عالمي</h2><p>كل لحظة معكِ هي هدية لا تُقدّر بثمن.</p></div>
          <span className="footer-rose">❀</span>
        </footer>
      </div>
    </main>
  );
}
