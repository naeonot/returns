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
  }
};

const languageSelect=document.querySelector("#language-select");
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
  if(languageSelect) languageSelect.value=selected;
  try{localStorage.setItem("returns-language",selected)}catch(error){}
}
if(languageSelect){
  let savedLanguage="en";
  try{savedLanguage=localStorage.getItem("returns-language")||"en"}catch(error){}
  languageSelect.addEventListener("change",event=>setLanguage(event.target.value));
  setLanguage(savedLanguage);
}
