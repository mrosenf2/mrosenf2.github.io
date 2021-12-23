(this["webpackJsonpmrosenf2-github-io"]=this["webpackJsonpmrosenf2-github-io"]||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(13),s=n.n(i),a=(n(19),n(25),n(9)),r=(n(26),n(1));function l(){return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.c,{to:"Home",children:" Home "})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.c,{to:"About",children:" About "})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.c,{to:"Projects",children:" Projects "})}),Object(r.jsx)("li",{className:"contact",children:Object(r.jsx)(a.c,{to:"Contact",children:" Contact "})})]})})}var j=n(2);function d(){return Object(r.jsxs)("div",{className:"page-content",children:[Object(r.jsxs)("div",{className:"text-content",children:[Object(r.jsx)("h1",{children:"Welcome"}),Object(r.jsx)("p",{children:"My name is Matthew D. Rosenfeld."}),Object(r.jsx)("p",{children:"This is a website dedicated to both my professional and personal life. In the future, you will be able to find samples of a variety of my work including my music and engineering endeavors. But in the meantime, as I continue to progress and prepare these items to share on the web, enjoy learning about me, my studies and my interests."})]}),Object(r.jsx)("img",{src:"images/Matt_headshot.jpg",alt:"headshot_not_found"})]})}function h(){return Object(r.jsxs)("div",{className:"page-content",children:[Object(r.jsxs)("div",{className:"text-content",children:[Object(r.jsx)("h1",{children:"About Me:"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:" Hello there. "}),Object(r.jsx)("p",{children:"My name is Matt Rosenfeld. I recently graduated from the University of Maryland, College Park, with a B.S. in electrical engineering and a minor in computer science. I am interested in a wide range of topics related to computer engineering and software development. I hope to continue learning about the enormous world of software development and engineering, having future experiences narrow down my interests into potential career paths."}),Object(r.jsx)("p",{children:'My other interests include music (I have a minor in saxophone performance from UMD) and biking (trail riding and light mountain biking). If you have questions about me, my work, or my other hobbies, my contact information can be found on the <a href="#contact">contact page.</a>'})]})]}),Object(r.jsx)("img",{src:"images/bioheadshot.jpg",alt:"headshot_not_found"})]})}n(28);function A(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("p",{children:"created and maintained by Matthew Rosenfeld"})})}n(29);function O(){return Object(j.h)().project?Object(r.jsx)(j.a,{}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Projects"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsxs)("p",{children:[" ","Summer 2018, I spent six weeks backpacking around South East Asia. I took over 1,000 picures and wanted to build something to interactively share them with people. ",Object(r.jsxs)(a.b,{to:"mapapp",children:[" ","Click here, and I hope you enjoy!"," "]})," "]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("p",{children:[" ",Object(r.jsxs)("a",{href:"https://chrome.google.com/webstore/detail/ref-schedule-sync/pgdajjngmjfhnoghgoddckkikijklaib",target:"_blank",rel:"noreferrer",children:[" ","Ref Schedule Sync"]})]})})]}),Object(r.jsx)("div",{children:Object(r.jsx)("blockquote",{children:" Nothing else to see here. Move along."})})]})}function b(){return Object(r.jsx)("div",{className:"page-content",children:Object(r.jsxs)("div",{className:"text-content",children:[Object(r.jsx)("h1",{children:"Contact Me:"}),Object(r.jsxs)("div",{class:"content",children:[Object(r.jsx)("p",{children:"Thank you for your interest.The best way to reach me is by email at: matthew.rosenfeld22@gmail.com"}),Object(r.jsxs)("p",{children:["You can also find me on ",Object(r.jsx)("a",{href:"https://www.linkedin.com/in/matthew-rosenfeld-00259210a/",children:"LinkedIn"}),", ",Object(r.jsx)("a",{href:"https://www.facebook.com/matt.rosenfeld.58",children:"Facebook"}),", and view my ",Object(r.jsx)("a",{href:"images/resume.pdf",target:"_blank",children:"Resume"})]})]})]})})}var u=n(15),m=n.n(u),p=n(11),x=n(20),f=n(7),g=n(10),J=(n(31),function(e){var t=e.jsonData,n=e.position,c=e.onOpen,i=e.showInfo,s=e.setShowInfo,a=Object(o.useState)(null),l=Object(f.a)(a,2),j=(l[0],l[1]),d=t.geoData,h="http://storage.googleapis.com/app.mrosenfeld.net/mapapp/AsiaPhotos/"+t.title,A=t.photoTakenTime.timestamp,O=Object(r.jsx)("a",{href:h,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:h,style:{height:"250px"}})}),b=Object(r.jsxs)("div",{className:"info-content",children:[O,Object(r.jsx)("p",{children:A}),d.guess&&Object(r.jsx)("div",{children:" Note: Exact location was not recorded"})]}),u=Object(r.jsx)(g.b,{onCloseClick:function(){s(!1)},options:{maxWidth:250},onLoad:function(e){j(e),c(e)},position:n,children:b});return Object(r.jsx)(r.Fragment,{children:i&&Object(r.jsx)("div",{className:"info-window ".concat(i?"info-shown":"info-hidden"),onMouseLeave:function(){console.log("mousout")},children:u})})});function w(e){var t=e.jsonData,n=e.clusterer,c=e.onOpen,i=Object(o.useState)(!1),s=Object(f.a)(i,2),a=s[0],l=s[1],j=t.geoData,d={lat:j.latitude,lng:j.longitude};t.photoTakenTime.timestamp;return Object(r.jsx)(g.c,{clusterer:n,position:d,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAAEXPQLLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8UExURQAAAP8AAFUAAJkAAKoAAJ8AAKIAAJUVAJ0UAJ8QAJsLAJ8LAJkUAJ0UAJ4SAJ0NAKITAJwMAJwQAJoNAKIRAJ8RAJ8MAJwOAJwOAJ4NAJ4PAJ8QAJ0PAJ4OAKAOAJ8OAJ0NAJwNAJ4NAJ0PAJ4NAJ4OAJ4OAJ0OAJ4NAJ8PAJ4PAJ0OAJ4OAJ4OAJ8OAJ4OAJ0OAJ8PAJ4PAKAOAJ4NAJ4OAJ4OAJ8PAJ4OAJ0OAJ4OAJ4OAKEOAJ8OAKAOAJ4OAJ8OAKEOAKEOAJ4OAJ4OAJ8OAJ8OAJ4OAJ8OAKAOAKEOAKIOAKMOAKMPAKQOAKQPAKUOAKUPAKYPAKsPAI1ZqHUAAABHdFJOUwABAwUGCAsMDRAXGBkaHScpLDE6PD1ASEtMV2Jjbm5vc3l5eomOkZWZmpukqKm5u7y/wMLDw8vQ2ODq6+3x9PX19/r7/f3+Zx2Z3gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAZpJREFUKFN1kolW4kAQRcsF933XGQT3ZdxGjY6i4v66000izv//yxTplyEoXA7V91UqyaEbETH6ld/6UdAqYrM61yoTE1p+/NRSKrVym2EzY4aD4le4T/kv0uQql5dh9UdHPhOdCWMfDw8fmYhzYZVajbK4SOlGxQFwFSZlF+daz7EbolLBrdZbFIamGnpXY4opECOm5RzggJZT+vzy00X+cM2p3t9XqRnP+iY8MyhXeFtefsMVo26GGxQZdGFDWvhsv5rtRmJnRWZtwiiyg/jsLMYOo3JqAHPKkBEBETWwDqxTA+PWjlNJmlJyXl4oOVHnM0XKZUrO5CQlZ2CAUmTtppEdXONmjZ1OVp6sXjXvRqfs0wq7BVZjGLvVp9a3ZQ3i1dAucOLRzE+i2oQ/obc59kj26HsJ/DG9zfSdhbue75f++WsHezfNfoHRi0S33qdeTyC5GGW3k6HNul6FqW8MsfOdw1Qn0kOmbiy8GpjXBaZulCIHF337ixYpxyb+emSdjNVcbYzeg/2/+7ReLD0u0Xoxsj1CC4j8A22/PYrsEHQRAAAAAElFTkSuQmCC",title:"click to view image full size",onMouseOver:function(){l(!0)},children:Object(r.jsx)(J,{showInfo:a,position:d,onOpen:c,setShowInfo:l,jsonData:t})})}var v={default:null,hide:[{featureType:"poi.business",stylers:[{visibility:"off"}]}]},y={lat:15.9757,lng:102.6331},k=function(e,t,n){var o=1e6,c=0;return e.forEach((function(e){var i=e.photoTakenTime.timestamp;i!==n&&Math.abs(i-n)<o&&e.geoData.latitude>0&&e.geoData.longitude>0&&(o=Math.abs(i-n),c=t?e.geoData.latitude:e.geoData.longitude)})),c+(1-2*Math.random())/200},M={imagePath:"../clusterimg/m",gridSize:80,maxZoom:14},N={height:"100%",width:"100%"};function E(){var e=Object(g.e)({id:"google-map-script",googleMapsApiKey:"AIzaSyDkW3KVPNek__Vq8Qxnnbhp8iZBzRMXMQM"}),t=e.isLoaded,n=e.loadError,c=Object(o.useState)([]),i=Object(f.a)(c,2),s=i[0],a=i[1],l=function(){var e=Object(x.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://storage.googleapis.com/app.mrosenfeld.net/mapapp/meta.json").then((function(e){return e.json()}));case 3:t=e.sent,console.log(t),(n=Object(p.a)(t.photodata)).forEach((function(e){0==e.geoData.latitude&&(e.geoData.latitude=k(t.photodata,!0,e.photoTakenTime.timestamp),e.geoData.longitude=k(t.photodata,!1,e.photoTakenTime.timestamp),e.geoData.guess=!0)})),a(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){l()}),[]);var j=function(e){console.log(e)},d=Object(r.jsx)("div",{children:"Loading..."}),h=Object(r.jsx)("div",{children:"error!!"}),A=Object(r.jsx)(g.a,{options:{styles:v.hide},mapContainerStyle:N,center:y,zoom:6,children:Object(r.jsx)(g.d,{options:M,children:function(e){return s.map((function(t){return Object(r.jsx)(w,{onOpen:j,jsonData:t,clusterer:e},t.title)}))}})});return n?h:t?A:d}var D=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{index:!0,element:Object(r.jsx)(d,{})}),Object(r.jsx)(j.b,{path:"Home",element:Object(r.jsx)(d,{})}),Object(r.jsx)(j.b,{path:"About",element:Object(r.jsx)(h,{})}),Object(r.jsx)(j.b,{path:"Projects",element:Object(r.jsx)(O,{}),children:Object(r.jsx)(j.b,{path:":project",element:Object(r.jsx)(E,{})})}),Object(r.jsx)(j.b,{path:"Contact",element:Object(r.jsx)(b,{})})]})}),Object(r.jsx)(A,{})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(a.a,{children:Object(r.jsx)(D,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d8e1ffba.chunk.js.map