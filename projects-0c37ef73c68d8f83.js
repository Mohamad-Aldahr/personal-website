(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{3879:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var i=n(7876),r=n(4232),s=n(5448),l=n(6790),a=n(2149);let c={ar:{title:"المشاريع",addProject:"إضافة مشروع جديد",projectTitle:"عنوان المشروع",projectDescription:"وصف المشروع",projectLink:"رابط المشروع",projectDate:"تاريخ المشروع",save:"حفظ",cancel:"إلغاء",edit:"تعديل",delete:"حذف",noProjects:"لا توجد مشاريع حالياً. قم بإضافة مشروع جديد.",confirmDelete:"هل أنت متأكد من حذف هذا المشروع؟",visitProject:"زيارة المشروع"},de:{title:"Projekte",addProject:"Neues Projekt hinzuf\xfcgen",projectTitle:"Projekttitel",projectDescription:"Projektbeschreibung",projectLink:"Projektlink",projectDate:"Projektdatum",save:"Speichern",cancel:"Abbrechen",edit:"Bearbeiten",delete:"L\xf6schen",noProjects:"Keine Projekte vorhanden. F\xfcgen Sie ein neues Projekt hinzu.",confirmDelete:"Sind Sie sicher, dass Sie dieses Projekt l\xf6schen m\xf6chten?",visitProject:"Projekt besuchen"}};function o(){let{language:e,isLoggedIn:t}=(0,r.useContext)(a.LanguageContext),n=c[e],[o,d]=(0,r.useState)([]),[j,h]=(0,r.useState)(!1),[u,p]=(0,r.useState)(null),[x,g]=(0,r.useState)({title:"",description:"",link:"",date:new Date().toISOString().split("T")[0]});(0,r.useEffect)(()=>{{let e=localStorage.getItem("projects");e&&d(JSON.parse(e))}},[]),(0,r.useEffect)(()=>{o.length>0&&localStorage.setItem("projects",JSON.stringify(o))},[o]);let m=e=>{if(window.confirm(n.confirmDelete)){let t=o.filter(t=>t.id!==e);d(t),0===t.length&&localStorage.removeItem("projects")}},k=e=>{g({title:e.title,description:e.description,link:e.link,date:e.date}),p(e.id),h(!1)},f=o.filter(t=>!t.language||t.language===e);return(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(s.A,{}),(0,i.jsxs)("main",{className:"main",children:[(0,i.jsx)("h1",{children:n.title}),t&&!j&&!u&&(0,i.jsx)("button",{className:"btn",onClick:()=>h(!0),children:n.addProject}),t&&(j||u)&&(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("h2",{children:u?n.edit:n.addProject}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:n.projectTitle}),(0,i.jsx)("input",{type:"text",value:x.title,onChange:e=>g({...x,title:e.target.value})})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:n.projectDescription}),(0,i.jsx)("textarea",{rows:"5",value:x.description,onChange:e=>g({...x,description:e.target.value})})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:n.projectLink}),(0,i.jsx)("input",{type:"url",value:x.link,onChange:e=>g({...x,link:e.target.value})})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:n.projectDate}),(0,i.jsx)("input",{type:"date",value:x.date,onChange:e=>g({...x,date:e.target.value})})]}),(0,i.jsxs)("div",{className:"form-buttons",children:[(0,i.jsx)("button",{className:"btn",onClick:u?()=>{x.title&&x.description&&(d(o.map(e=>e.id===u?{...e,...x}:e)),g({title:"",description:"",link:"",date:new Date().toISOString().split("T")[0]}),p(null))}:()=>{x.title&&x.description&&(d([{id:Date.now(),...x,language:e},...o]),g({title:"",description:"",link:"",date:new Date().toISOString().split("T")[0]}),h(!1))},children:n.save}),(0,i.jsx)("button",{className:"btn",onClick:()=>{g({title:"",description:"",link:"",date:new Date().toISOString().split("T")[0]}),h(!1),p(null)},children:n.cancel})]})]}),0===f.length?(0,i.jsx)("p",{children:n.noProjects}):(0,i.jsx)("div",{className:"projects-grid",children:f.map(e=>(0,i.jsxs)("div",{className:"card project-card",children:[(0,i.jsx)("h2",{children:e.title}),(0,i.jsx)("p",{className:"date",children:e.date}),(0,i.jsx)("div",{className:"content",children:e.description.split("\n").map((e,t)=>(0,i.jsx)("p",{children:e},t))}),e.link&&(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"btn",children:n.visitProject}),t&&(0,i.jsxs)("div",{className:"project-actions",children:[(0,i.jsx)("button",{className:"btn",onClick:()=>k(e),children:n.edit}),(0,i.jsx)("button",{className:"btn",onClick:()=>m(e.id),children:n.delete})]})]},e.id))})]}),(0,i.jsx)(l.A,{})]})}},5448:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var i=n(7876),r=n(4232),s=n(8230),l=n.n(s),a=n(2149);let c={ar:{home:"الرئيسية",about:"من أنا",articles:"المقالات",projects:"المشاريع",contact:"تواصل معي",login:"تسجيل الدخول",logout:"تسجيل الخروج",language:"اللغة"},de:{home:"Startseite",about:"\xdcber mich",articles:"Artikel",projects:"Projekte",contact:"Kontakt",login:"Anmelden",logout:"Abmelden",language:"Sprache"}};function o(){let{language:e,setLanguage:t,isLoggedIn:n,setIsLoggedIn:s}=(0,r.useContext)(a.LanguageContext),o=c[e];return(0,i.jsxs)("header",{className:"header",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)("h1",{children:"Personal Website"})})})}),(0,i.jsxs)("nav",{className:"nav",children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)("a",{children:o.home})}),(0,i.jsx)(l(),{href:"/about",children:(0,i.jsx)("a",{children:o.about})}),(0,i.jsx)(l(),{href:"/articles",children:(0,i.jsx)("a",{children:o.articles})}),(0,i.jsx)(l(),{href:"/projects",children:(0,i.jsx)("a",{children:o.projects})}),(0,i.jsx)(l(),{href:"/contact",children:(0,i.jsx)("a",{children:o.contact})}),n?(0,i.jsx)("a",{href:"#",onClick:()=>{localStorage.setItem("isLoggedIn","false"),s(!1)},children:o.logout}):(0,i.jsx)(l(),{href:"/login",children:(0,i.jsx)("a",{children:o.login})}),(0,i.jsx)("button",{onClick:()=>{t("ar"===e?"de":"ar")},className:"btn",children:"ar"===e?"Deutsch":"العربية"})]})]})}},6104:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(3879)}])},6790:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var i=n(7876),r=n(4232),s=n(2149);let l={ar:{copyright:"جميع الحقوق محفوظة",year:"٢٠٢٥"},de:{copyright:"Alle Rechte vorbehalten",year:"2025"}};function a(){let{language:e}=(0,r.useContext)(s.LanguageContext),t=l[e];return(0,i.jsx)("footer",{className:"footer",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("p",{children:["\xa9 ",t.year," - ",t.copyright]})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[230,636,593,792],()=>t(6104)),_N_E=e.O()}]);