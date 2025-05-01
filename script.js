const langToggleBtn = document.getElementById("lang-toggle");
const translations = {
ru: {
aboutTitle: "Обо мне",
aboutText: `Меня зовут Наталья Ли, и я решила сменить карьеру, чтобы последовать за своей мечтой стать разработчиком программного обеспечения. За время работы в сфере торговли (владела сетью магазинов косметики) я развила навыки управления проектами, анализа данных и отношений с сотрудниками, клиентами, которые ценны для моей новой роли в технологической отрасли. Мой переход в ИТ обусловлен глубоким интересом к программированию и технологиям. Я прошла обучение по разработке интерфейса, уделяя особое внимание HTML, CSS, JS и React, и успешно совмещаю свои новые знания с опытом на предыдущей работе. Я стремлюсь к постоянному росту и совершенствованию навыков, что помогает мне эффективно применять их в разработке программного обеспечения. Я увлечена вкладом в развитие технологий и созданием инновационных решений. Я готова к новым вызовам и возможностям, которые открывает карьера в ИТ.`,
skillsTitle: "Навыки",
codeTitle: "Пример кода",
footer: "© 2025 Наталья Ли",
langBtn: "EN",
left: {
contacts: "Контакты",
languages: "Языки",
native: "Русский — родной",
english: "Английский — чтение технической литературы",
soft: "Личные качества",
softList: [
"Внимание к деталям",
"Творческий подход",
"Аналитические навыки",
"Командный игрок",
"Стремление к самосовершенствованию",
"Ответственность",
"Адаптивность и гибкость",
"Коммуникативные навыки"
],
hobby: "Хобби",
hobbyText: "Бег",
hobbyText2: "Пилатес",
projects: "Проекты",
education: "Образование"
}
},
en: {
aboutTitle: "About Me",
aboutText: `My name is Natalia Li, and I decided to change my career to pursue my dream of becoming a software developer. During my time working in the retail industry (I owned a chain of cosmetics stores), I developed skills in project management, data analysis, and relationships with employees and clients, which are valuable for my new role in the tech industry. My transition to IT is driven by a deep interest in programming and technology. I completed a course in front-end development, focusing on HTML, CSS, JS, and React, and I successfully combine these new skills with my previous work experience. I am committed to continuous growth and skill improvement, which helps me apply them effectively in software development. I am passionate about contributing to technology development and creating innovative solutions. I am ready for the new challenges and opportunities that a career in IT presents.`,
skillsTitle: "Skills",
codeTitle: "Code Example",
footer: "© 2025 Natalia Li",
langBtn: "RU",
left: {
contacts: "Contacts",
languages: "Languages",
native: "Russian — Native",
english: "English — Technical reading",
soft: "Soft Skills",
softList: [
"Attention to detail",
"Creative approach",
"Analytical skills",
"Team player",
"Striving for self-improvement",
"Responsibility",
"Adaptability and flexibility",
"Communication skills"
],
hobby: "Hobbies",
hobbyText: "Running",
hobbyText2: "Pilates",
projects: "Projects",
education: "Education"
}
}
};
function updateLanguage(lang) {
const translation = translations[lang];
document.getElementById("about-title").textContent = translation.aboutTitle;
document.getElementById("about-text").textContent = translation.aboutText;
document.getElementById("skills-title").textContent = translation.skillsTitle;
document.getElementById("code-title").textContent = translation.codeTitle;
document.getElementById("footer-text").textContent = translation.footer;
document.getElementById("lang-toggle").textContent = translation.langBtn;
document.getElementById("contacts-title").textContent = translation.left.contacts;
document.getElementById("languages-title").textContent = translation.left.languages;
document.getElementById("lang-native").textContent = translation.left.native;
document.getElementById("lang-english").textContent = translation.left.english;
document.getElementById("soft-title").textContent = translation.left.soft;
document.getElementById("hobby-title").textContent = translation.left.hobby;
document.getElementById("hobby-text").textContent = translation.left.hobbyText;
document.getElementById("hobby-text2").textContent = translation.left.hobbyText2;
document.getElementById("projects-title").textContent = translation.left.projects;
document.getElementById("education-title").textContent = translation.left.education;
const softList = document.getElementById("soft-list");
softList.innerHTML = "";
translation.left.softList.forEach(item => {
const li = document.createElement("li");
li.textContent = item;
softList.appendChild(li);
});
}
langToggleBtn.addEventListener("click", () => {
const currentLang = langToggleBtn.textContent === "EN" ? "en" : "ru";
updateLanguage(currentLang);
localStorage.setItem('lang', currentLang); 
});
const savedLang = localStorage.getItem('lang') || 'ru';
updateLanguage(savedLang);
