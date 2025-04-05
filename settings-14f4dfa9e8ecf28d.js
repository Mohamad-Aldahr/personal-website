(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{3036:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});var r=a(7876),t=a(4232),l=a(5448),n=a(6790),i=a(2149);let c={ar:{title:"إعدادات الموقع",profileImage:"صورة الملف الشخصي",uploadImage:"تحميل صورة",changePassword:"تغيير كلمة المرور",currentPassword:"كلمة المرور الحالية",newPassword:"كلمة المرور الجديدة",confirmPassword:"تأكيد كلمة المرور",save:"حفظ",cancel:"إلغاء",passwordError:"كلمة المرور الحالية غير صحيحة",passwordMismatch:"كلمة المرور الجديدة غير متطابقة",passwordSuccess:"تم تغيير كلمة المرور بنجاح",imageSuccess:"تم تحميل الصورة بنجاح",defaultPassword:"admin123",selectImage:"اختر صورة",imagePreview:"معاينة الصورة"},de:{title:"Website-Einstellungen",profileImage:"Profilbild",uploadImage:"Bild hochladen",changePassword:"Passwort \xe4ndern",currentPassword:"Aktuelles Passwort",newPassword:"Neues Passwort",confirmPassword:"Passwort best\xe4tigen",save:"Speichern",cancel:"Abbrechen",passwordError:"Aktuelles Passwort ist falsch",passwordMismatch:"Neue Passw\xf6rter stimmen nicht \xfcberein",passwordSuccess:"Passwort erfolgreich ge\xe4ndert",imageSuccess:"Bild erfolgreich hochgeladen",defaultPassword:"admin123",selectImage:"Bild ausw\xe4hlen",imagePreview:"Bildvorschau"}};function o(){let{language:e,isLoggedIn:s}=(0,t.useContext)(i.LanguageContext),a=c[e],[o,d]=(0,t.useState)(""),[h,u]=(0,t.useState)(""),[m,g]=(0,t.useState)(""),[x,j]=(0,t.useState)(""),[p,w]=(0,t.useState)(""),[f,v]=(0,t.useState)(""),[b,P]=(0,t.useState)(""),[N,S]=(0,t.useState)("");return(0,t.useEffect)(()=>{{let e=localStorage.getItem("profileImage");e&&(v(e),P(e))}},[]),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(l.A,{}),(0,r.jsxs)("main",{className:"main",children:[(0,r.jsx)("h1",{children:a.title}),s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h2",{children:a.profileImage}),N&&(0,r.jsx)("div",{className:"success-message",children:N}),(0,r.jsxs)("div",{className:"image-upload",children:[(0,r.jsx)("input",{type:"file",id:"profile-image",accept:"image/*",onChange:e=>{let s=e.target.files[0];if(!s)return;let a=new FileReader;a.onloadend=()=>{P(a.result)},a.readAsDataURL(s)}}),(0,r.jsx)("label",{htmlFor:"profile-image",className:"btn",children:a.selectImage}),b&&(0,r.jsxs)("div",{className:"image-preview-container",children:[(0,r.jsx)("h3",{children:a.imagePreview}),(0,r.jsx)("img",{src:b,alt:"Profile Preview",className:"image-preview"}),(0,r.jsxs)("div",{className:"form-buttons",children:[(0,r.jsx)("button",{className:"btn",onClick:()=>{b&&(localStorage.setItem("profileImage",b),v(b),S(a.imageSuccess),setTimeout(()=>{S("")},3e3))},children:a.save}),(0,r.jsx)("button",{className:"btn",onClick:()=>{P(f)},children:a.cancel})]})]})]})]}),(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h2",{children:a.changePassword}),x&&(0,r.jsx)("div",{className:"error-message",children:x}),p&&(0,r.jsx)("div",{className:"success-message",children:p}),(0,r.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),o!==a.defaultPassword&&o!==localStorage.getItem("password")){j(a.passwordError),w("");return}if(h!==m){j(a.passwordMismatch),w("");return}localStorage.setItem("password",h),j(""),w(a.passwordSuccess),d(""),u(""),g("")},children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"current-password",children:a.currentPassword}),(0,r.jsx)("input",{type:"password",id:"current-password",value:o,onChange:e=>d(e.target.value),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"new-password",children:a.newPassword}),(0,r.jsx)("input",{type:"password",id:"new-password",value:h,onChange:e=>u(e.target.value),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"confirm-password",children:a.confirmPassword}),(0,r.jsx)("input",{type:"password",id:"confirm-password",value:m,onChange:e=>g(e.target.value),required:!0})]}),(0,r.jsx)("button",{type:"submit",className:"btn",children:a.save})]})]})]}):(0,r.jsx)("p",{children:"يجب تسجيل الدخول للوصول إلى الإعدادات"})]}),(0,r.jsx)(n.A,{})]})}},3100:(e,s,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return a(3036)}])},5448:(e,s,a)=>{"use strict";a.d(s,{A:()=>o});var r=a(7876),t=a(4232),l=a(8230),n=a.n(l),i=a(2149);let c={ar:{home:"الرئيسية",about:"من أنا",articles:"المقالات",projects:"المشاريع",contact:"تواصل معي",login:"تسجيل الدخول",logout:"تسجيل الخروج",language:"اللغة"},de:{home:"Startseite",about:"\xdcber mich",articles:"Artikel",projects:"Projekte",contact:"Kontakt",login:"Anmelden",logout:"Abmelden",language:"Sprache"}};function o(){let{language:e,setLanguage:s,isLoggedIn:a,setIsLoggedIn:l}=(0,t.useContext)(i.LanguageContext),o=c[e];return(0,r.jsxs)("header",{className:"header",children:[(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)(n(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{children:"Personal Website"})})})}),(0,r.jsxs)("nav",{className:"nav",children:[(0,r.jsx)(n(),{href:"/",children:(0,r.jsx)("a",{children:o.home})}),(0,r.jsx)(n(),{href:"/about",children:(0,r.jsx)("a",{children:o.about})}),(0,r.jsx)(n(),{href:"/articles",children:(0,r.jsx)("a",{children:o.articles})}),(0,r.jsx)(n(),{href:"/projects",children:(0,r.jsx)("a",{children:o.projects})}),(0,r.jsx)(n(),{href:"/contact",children:(0,r.jsx)("a",{children:o.contact})}),a?(0,r.jsx)("a",{href:"#",onClick:()=>{localStorage.setItem("isLoggedIn","false"),l(!1)},children:o.logout}):(0,r.jsx)(n(),{href:"/login",children:(0,r.jsx)("a",{children:o.login})}),(0,r.jsx)("button",{onClick:()=>{s("ar"===e?"de":"ar")},className:"btn",children:"ar"===e?"Deutsch":"العربية"})]})]})}},6790:(e,s,a)=>{"use strict";a.d(s,{A:()=>i});var r=a(7876),t=a(4232),l=a(2149);let n={ar:{copyright:"جميع الحقوق محفوظة",year:"٢٠٢٥"},de:{copyright:"Alle Rechte vorbehalten",year:"2025"}};function i(){let{language:e}=(0,t.useContext)(l.LanguageContext),s=n[e];return(0,r.jsx)("footer",{className:"footer",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("p",{children:["\xa9 ",s.year," - ",s.copyright]})})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[230,636,593,792],()=>s(3100)),_N_E=e.O()}]);