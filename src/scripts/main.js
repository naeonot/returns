import "../styles/main.css";
import "../styles/responsive.css";
import "../styles/dummy.css";
import "./dummy.js";
import { getCurrentYear } from "./utils.js";

const year=document.querySelector("#year");
if(year) year.textContent=getCurrentYear();

const translations = {
  en: {
    navDownload:"Download",navSupport:"Support",navSignup:"Sign up",
    heroEyebrow:"A new chapter is taking shape",heroTitle:"The story isn’t over.",heroIntro:"Step into the world of Returns. Something is taking shape, and we can’t wait to show you what’s next.",heroStatus:"RETURNS — IN DEVELOPMENT",
    previewEyebrow:"A glimpse into Returns",previewTitle:"There’s more beneath the surface.",previewIntro:"Every corner has a story. Every silence has a reason. Take a first look at the world we’re building.",
    cardOneTitle:"A world to get lost in.",cardOneText:"An atmosphere shaped by shadows, secrets, and the things left unsaid.",cardTwoTitle:"Nothing is ordinary.",cardTwoText:"Look closer. The smallest details might matter more than you think.",cardThreeTitle:"Some things stay unknown.",cardThreeText:"We’re keeping a few secrets for the right moment. Stay close.",
    signalEyebrow:"Transmission / 001",signalTitle:"The wait is part of the story.",signalText:"Returns is currently in development. We’re taking our time to make something worth remembering. More details will be shared when the time is right.",signalStatus:"STATUS: IN PROGRESS",
    newsletterTitle:"Stay in the loop.",newsletterText:"Get the latest news, updates, and announcements from the world of Returns.",emailPlaceholder:"Enter your email",joinButton:"Join",
    footerStudio:"An independent game by <a href=\"https://naeo.vercel.app\"><strong> NAEO </strong></a>",footerSocial:"Social",footerFeatures:"Features",footerAbout:"About",footerBlog:"Blog",footerCommunity:"Community",footerSupport:"Support",footerDonate:"Donate",footerFaq:"FAQ",footerContact:"Contact",footerLegal:"Legal",footerPrivacy:"Privacy Policy",footerTerms:"Terms of Service",footerCookies:"Cookies",rightsReserved:"All rights reserved"
  },
  hi: {
    navDownload:"डाउनलोड",navSupport:"सहायता",navSignup:"साइन अप",
    heroEyebrow:"एक नया अध्याय आकार ले रहा है",heroTitle:"कहानी अभी खत्म नहीं हुई।",heroIntro:"Returns की दुनिया में कदम रखें। कुछ नया आकार ले रहा है और हम आपको आगे की झलक दिखाने के लिए उत्साहित हैं।",heroStatus:"RETURNS — विकास जारी है",
    previewEyebrow:"Returns की एक झलक",previewTitle:"सतह के नीचे और भी बहुत कुछ है।",previewIntro:"हर कोने की अपनी कहानी है। हर खामोशी की एक वजह है। उस दुनिया की पहली झलक देखें जिसे हम बना रहे हैं।",
    cardOneTitle:"एक ऐसी दुनिया जिसमें खो जाएँ।",cardOneText:"परछाइयों, रहस्यों और अनकही बातों से बना एक माहौल।",cardTwoTitle:"यहाँ कुछ भी आम नहीं।",cardTwoText:"गौर से देखें। छोटी-से-छोटी बातें भी आपकी सोच से ज़्यादा मायने रख सकती हैं।",cardThreeTitle:"कुछ बातें अनजान ही रहती हैं।",cardThreeText:"हमने सही वक्त के लिए कुछ राज़ संभालकर रखे हैं। जुड़े रहें।",
    signalEyebrow:"संदेश / 001",signalTitle:"इंतज़ार भी कहानी का हिस्सा है।",signalText:"Returns अभी विकास के चरण में है। हम कुछ ऐसा बनाने के लिए समय ले रहे हैं जिसे याद रखा जाए। सही समय आने पर और जानकारी साझा की जाएगी।",signalStatus:"स्थिति: काम जारी है",
    newsletterTitle:"हमसे जुड़े रहें।",newsletterText:"Returns की दुनिया से ताज़ा खबरें, अपडेट और घोषणाएँ पाएँ।",emailPlaceholder:"अपना ईमेल दर्ज करें",joinButton:"जुड़ें",
    footerStudio:"NAEO द्वारा बनाया गया एक स्वतंत्र गेम",footerSocial:"सोशल",footerFeatures:"विशेषताएँ",footerAbout:"परिचय",footerBlog:"ब्लॉग",footerCommunity:"कम्युनिटी",footerSupport:"सहायता",footerDonate:"दान करें",footerFaq:"सामान्य प्रश्न",footerContact:"संपर्क",footerLegal:"कानूनी",footerPrivacy:"गोपनीयता नीति",footerTerms:"सेवा की शर्तें",footerCookies:"कुकीज़",rightsReserved:"सर्वाधिकार सुरक्षित",backHome:"← Returns पर वापस जाएँ",aboutTitle:"Returns के बारे में",aboutText:"Returns, NAEO द्वारा बनाया जा रहा एक स्वतंत्र गेम है। अधिक जानकारी जल्द आएगी।",contactTitle:"संपर्क",contactText:"संपर्क की जानकारी जल्द यहाँ प्रकाशित की जाएगी।"
  },
  bn: {
    navDownload:"ডাউনলোড",navSupport:"সহায়তা",navSignup:"সাইন আপ",
    heroEyebrow:"একটি নতুন অধ্যায়ের শুরু হচ্ছে",heroTitle:"গল্পটি এখনও শেষ হয়নি।",heroIntro:"Returns-এর জগতে পা রাখুন। নতুন কিছু তৈরি হচ্ছে, আর সামনে কী আসছে তা দেখানোর জন্য আমরা অধীর আগ্রহে অপেক্ষা করছি।",heroStatus:"RETURNS — নির্মাণাধীন",
    previewEyebrow:"Returns-এর এক ঝলক",previewTitle:"পৃষ্ঠের নিচে আরও অনেক কিছু আছে।",previewIntro:"প্রতিটি কোণের নিজস্ব গল্প আছে। প্রতিটি নীরবতার পেছনে কারণ আছে। আমরা যে জগৎ তৈরি করছি, তার প্রথম ঝলক দেখুন।",
    cardOneTitle:"হারিয়ে যাওয়ার মতো এক জগৎ।",cardOneText:"ছায়া, রহস্য আর না-বলা কথায় গড়ে ওঠা এক পরিবেশ।",cardTwoTitle:"কিছুই সাধারণ নয়।",cardTwoText:"আরও মন দিয়ে দেখুন। ক্ষুদ্রতম বিষয়ও আপনার ধারণার চেয়ে বেশি গুরুত্বপূর্ণ হতে পারে।",cardThreeTitle:"কিছু রহস্য অজানাই থাকে।",cardThreeText:"সঠিক সময়ের জন্য আমরা কিছু রহস্য রেখে দিয়েছি। সঙ্গে থাকুন।",
    signalEyebrow:"বার্তা / ০০১",signalTitle:"অপেক্ষাটাও গল্পের অংশ।",signalText:"Returns বর্তমানে নির্মাণাধীন। মনে রাখার মতো কিছু তৈরি করতে আমরা সময় নিচ্ছি। সঠিক সময়ে আরও তথ্য জানানো হবে।",signalStatus:"অবস্থা: কাজ চলছে",
    newsletterTitle:"খবরের সঙ্গে থাকুন।",newsletterText:"Returns-এর জগৎ থেকে সর্বশেষ খবর, আপডেট ও ঘোষণা পান।",emailPlaceholder:"আপনার ইমেইল লিখুন",joinButton:"যোগ দিন",
    footerStudio:"NAEO-এর তৈরি একটি স্বতন্ত্র গেম",footerSocial:"সামাজিক মাধ্যম",footerFeatures:"বৈশিষ্ট্য",footerAbout:"পরিচিতি",footerBlog:"ব্লগ",footerCommunity:"কমিউনিটি",footerSupport:"সহায়তা",footerDonate:"অনুদান",footerFaq:"প্রশ্নোত্তর",footerContact:"যোগাযোগ",footerLegal:"আইনি",footerPrivacy:"গোপনীয়তা নীতি",footerTerms:"পরিষেবার শর্তাবলি",footerCookies:"কুকি",rightsReserved:"সর্বস্বত্ব সংরক্ষিত",
    backHome:"← Returns-এ ফিরে যান",aboutTitle:"Returns সম্পর্কে",aboutText:"Returns হলো NAEO-এর তৈরি একটি স্বতন্ত্র গেম। আরও তথ্য শীঘ্রই আসছে।",contactTitle:"যোগাযোগ",contactText:"যোগাযোগের তথ্য শীঘ্রই এখানে প্রকাশ করা হবে।"
  },
  ta: {
    navDownload:"பதிவிறக்கம்",navSupport:"ஆதரவு",navSignup:"பதிவு செய்க",
    heroEyebrow:"ஒரு புதிய அத்தியாயம் உருவாகிறது",heroTitle:"கதை இன்னும் முடியவில்லை.",heroIntro:"Returns உலகிற்குள் நுழையுங்கள். ஏதோ ஒன்று உருவாகிக் கொண்டிருக்கிறது; அடுத்து என்ன என்பதை உங்களுக்குக் காட்ட நாங்கள் ஆவலாக உள்ளோம்.",heroStatus:"RETURNS — உருவாக்கத்தில் உள்ளது",
    previewEyebrow:"Returns பற்றிய ஒரு பார்வை",previewTitle:"மேற்பரப்புக்குக் கீழே இன்னும் நிறைய இருக்கிறது.",previewIntro:"ஒவ்வொரு மூலைக்கும் ஒரு கதை உண்டு. ஒவ்வொரு மௌனத்திற்கும் ஒரு காரணம் உண்டு. நாங்கள் உருவாக்கும் உலகை முதலில் பாருங்கள்.",
    cardOneTitle:"தொலைந்து போகத் தூண்டும் ஓர் உலகம்.",cardOneText:"நிழல்கள், ரகசியங்கள், சொல்லப்படாத விஷயங்கள் நிறைந்த சூழல்.",cardTwoTitle:"எதுவும் சாதாரணமானதல்ல.",cardTwoText:"கூர்ந்து கவனியுங்கள். மிகச் சிறிய விவரங்கள்கூட நீங்கள் நினைப்பதைவிட முக்கியமாக இருக்கலாம்.",cardThreeTitle:"சில விஷயங்கள் மர்மமாகவே இருக்கும்.",cardThreeText:"சரியான தருணத்திற்காக சில ரகசியங்களை வைத்திருக்கிறோம். தொடர்ந்து இணைந்திருங்கள்.",
    signalEyebrow:"செய்தி / 001",signalTitle:"காத்திருப்பதும் கதையின் ஒரு பகுதி.",signalText:"Returns தற்போது உருவாக்கத்தில் உள்ளது. நினைவில் நிற்கும் ஒன்றை உருவாக்க நாங்கள் நேரம் எடுத்துக்கொள்கிறோம். சரியான நேரத்தில் கூடுதல் விவரங்கள் பகிரப்படும்.",signalStatus:"நிலை: பணி நடைபெறுகிறது",
    newsletterTitle:"எங்களுடன் இணைந்திருங்கள்.",newsletterText:"Returns உலகின் சமீபத்திய செய்திகள், புதுப்பிப்புகள் மற்றும் அறிவிப்புகளைப் பெறுங்கள்.",emailPlaceholder:"உங்கள் மின்னஞ்சலை உள்ளிடவும்",joinButton:"இணைக",
    footerStudio:"NAEO உருவாக்கும் சுயாதீன விளையாட்டு",footerSocial:"சமூக வலைத்தளம்",footerFeatures:"அம்சங்கள்",footerAbout:"எங்களைப் பற்றி",footerBlog:"வலைப்பதிவு",footerCommunity:"சமூகம்",footerSupport:"ஆதரவு",footerDonate:"நன்கொடை",footerFaq:"கேள்விகள்",footerContact:"தொடர்பு",footerLegal:"சட்டம்",footerPrivacy:"தனியுரிமைக் கொள்கை",footerTerms:"சேவை விதிமுறைகள்",footerCookies:"குக்கீகள்",rightsReserved:"அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    backHome:"← Returns முகப்புக்குத் திரும்பு",aboutTitle:"Returns பற்றி",aboutText:"Returns என்பது NAEO உருவாக்கும் ஒரு சுயாதீன விளையாட்டு. மேலும் விவரங்கள் விரைவில் வரும்.",contactTitle:"தொடர்பு",contactText:"தொடர்பு விவரங்கள் விரைவில் இங்கே வெளியிடப்படும்."
  },
  es: {
    navDownload:"Descargar",navSupport:"Soporte",navSignup:"Registrarse",
    heroEyebrow:"Un nuevo capítulo está tomando forma",heroTitle:"La historia aún no ha terminado.",heroIntro:"Adéntrate en el mundo de Returns. Algo está tomando forma y estamos deseando mostrarte lo que viene.",heroStatus:"RETURNS — EN DESARROLLO",
    previewEyebrow:"Un vistazo a Returns",previewTitle:"Hay mucho más bajo la superficie.",previewIntro:"Cada rincón tiene una historia. Cada silencio tiene un motivo. Descubre por primera vez el mundo que estamos creando.",
    cardOneTitle:"Un mundo en el que perderse.",cardOneText:"Una atmósfera hecha de sombras, secretos y cosas que nunca se dijeron.",cardTwoTitle:"Nada es ordinario.",cardTwoText:"Mira más de cerca. Los detalles más pequeños pueden importar más de lo que imaginas.",cardThreeTitle:"Algunas cosas siguen siendo un misterio.",cardThreeText:"Guardamos algunos secretos para el momento adecuado. Sigue cerca.",
    signalEyebrow:"Transmisión / 001",signalTitle:"La espera también forma parte de la historia.",signalText:"Returns está actualmente en desarrollo. Nos estamos tomando el tiempo necesario para crear algo que merezca ser recordado. Compartiremos más detalles cuando llegue el momento.",signalStatus:"ESTADO: EN PROCESO",
    newsletterTitle:"Mantente al tanto.",newsletterText:"Recibe las últimas noticias, novedades y anuncios del mundo de Returns.",emailPlaceholder:"Introduce tu correo electrónico",joinButton:"Unirme",
    footerStudio:"Un juego independiente de NAEO",footerSocial:"Redes sociales",footerFeatures:"Secciones",footerAbout:"Acerca de",footerBlog:"Blog",footerCommunity:"Comunidad",footerSupport:"Soporte",footerDonate:"Donar",footerFaq:"Preguntas frecuentes",footerContact:"Contacto",footerLegal:"Legal",footerPrivacy:"Política de privacidad",footerTerms:"Términos del servicio",footerCookies:"Cookies",rightsReserved:"Todos los derechos reservados",
    backHome:"← Volver a Returns",aboutTitle:"Acerca de Returns",aboutText:"Returns es un juego independiente creado por NAEO. Pronto habrá más información.",contactTitle:"Contacto",contactText:"Los datos de contacto se publicarán aquí próximamente."
  }
};

const languageTrigger=document.querySelector("#language-trigger");
const languageMenu=document.querySelector("#language-menu");
const languageCurrent=document.querySelector("#language-current");
const languageOptions=languageMenu ? [...languageMenu.querySelectorAll("[data-language]")] : [];
function setLanguage(language){
  const selected=translations[language] ? language : "en";
  document.documentElement.lang=selected;
  document.querySelectorAll("[data-i18n]").forEach(element=>{
    const value=translations[selected][element.dataset.i18n];
    if(value!==undefined) element.innerHTML=value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element=>{
    const value=translations[selected][element.dataset.i18nPlaceholder];
    if(value!==undefined) element.placeholder=value;
  });
  if(languageCurrent) languageCurrent.textContent=({en:"English",hi:"हिन्दी",bn:"বাংলা",ta:"தமிழ்",es:"Español"})[selected];
  languageOptions.forEach(option=>option.setAttribute("aria-current",option.dataset.language===selected ? "true" : "false"));
  try{localStorage.setItem("returns-language",selected)}catch(error){}
}
let savedLanguage="en";
try{savedLanguage=localStorage.getItem("returns-language")||"en"}catch(error){}
if(languageTrigger && languageMenu){
  languageTrigger.addEventListener("click",()=>{
    const open=languageTrigger.getAttribute("aria-expanded")==="true";
    languageTrigger.setAttribute("aria-expanded",String(!open));
    languageMenu.hidden=open;
  });
  languageOptions.forEach(option=>option.addEventListener("click",()=>{
    setLanguage(option.dataset.language);
    languageMenu.hidden=true;
    languageTrigger.setAttribute("aria-expanded","false");
  }));
  document.addEventListener("click",event=>{
    if(!event.target.closest(".language-picker")){
      languageMenu.hidden=true;
      languageTrigger.setAttribute("aria-expanded","false");
    }
  });
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"){
      languageMenu.hidden=true;
      languageTrigger.setAttribute("aria-expanded","false");
      languageTrigger.focus();
    }
  });
}
setLanguage(savedLanguage);


// Newsletter: show a small confirmation tick for a valid email address.
const newsletterEmail=document.querySelector("#newsletter-email");
const newsletterJoin=document.querySelector("#newsletter-join");
if(newsletterEmail && newsletterJoin){
  newsletterJoin.addEventListener("click",()=>{
    if(!newsletterEmail.checkValidity() || !newsletterEmail.value.trim()){
      newsletterEmail.reportValidity();
      return;
    }
    newsletterJoin.classList.add("newsletter-success");
    newsletterJoin.innerHTML='<svg class="newsletter-check" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7"></path></svg>';
    newsletterJoin.setAttribute("aria-label","Email looks valid");
    newsletterJoin.disabled=true;
  });
}
