(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[691],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},51:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"desktop-migration-guide",title:"Migration Guide (JS)",slug:"/desktop-migration-guide"},s=void 0,l={unversionedId:"desktop-migration-guide",id:"desktop-migration-guide",isDocsHomePage:!1,title:"Migration Guide (JS)",description:"This guide will help you migrate your Desktop front-end code to run experiments with Nimbus, while still being able to use preferences for default and user-override values",source:"@site/docs/desktop-migration-guide.md",sourceDirName:".",slug:"/desktop-migration-guide",permalink:"/desktop-migration-guide",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/desktop-migration-guide.md",version:"current",frontMatter:{id:"desktop-migration-guide",title:"Migration Guide (JS)",slug:"/desktop-migration-guide"},sidebar:"sidebar",previous:{title:"Nimbus Feature API (JS)",permalink:"/desktop-feature-api"},next:{title:"Desktop Rollouts",permalink:"/desktop-rollouts"}},u=[{value:"An illustrative example (about:myself)",id:"an-illustrative-example-aboutmyself",children:[]},{value:"Step 1: Add a new feature to the manifest",id:"step-1-add-a-new-feature-to-the-manifest",children:[]},{value:"Step 2: Update your feature code",id:"step-2-update-your-feature-code",children:[]},{value:"Step 3: Run tests",id:"step-3-run-tests",children:[]},{value:"Links",id:"links",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will help you migrate your Desktop front-end code to run experiments with Nimbus, while still being able to use preferences for default and user-override values"),(0,i.kt)("p",null,"Prerequisites: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your experimental variables are already instrumented with Firefox preferences"),(0,i.kt)("li",{parentName:"ul"},"You don't use the ",(0,i.kt)("inlineCode",{parentName:"li"},"user branch")," of each pref for anything other than actual user-defined values or testing (see docs on ",(0,i.kt)("a",{parentName:"li",href:"/desktop-feature-api#configuration-sources"},"order of precedence")),(0,i.kt)("li",{parentName:"ul"},"Your code can import a ",(0,i.kt)("inlineCode",{parentName:"li"},"jsm"))),(0,i.kt)("h3",{id:"an-illustrative-example-aboutmyself"},"An illustrative example (about:myself)"),(0,i.kt)("p",null,"For the purposes of this guide, we will be migrating an imaginary about page (",(0,i.kt)("inlineCode",{parentName:"p"},"about:myself"),"), which uses the following preferences defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pref("browser.aboutmyself.enabled", true);\npref("browser.aboutmyself.bgcolor", "#FE8DAE");\n')),(0,i.kt)("h2",{id:"step-1-add-a-new-feature-to-the-manifest"},"Step 1: Add a new feature to the manifest"),(0,i.kt)("p",null,"First, you will need to register a new feature in ",(0,i.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/source/toolkit/components/nimbus/FeatureManifest.js"},"FeatureManifest.js"),". In this case, we're creating one called ",(0,i.kt)("inlineCode",{parentName:"p"},"aboutmyself"),"."),(0,i.kt)("p",null,"Each preference is registered as a ",(0,i.kt)("inlineCode",{parentName:"p"},"variable"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const FeatureManifest = {\n  aboutmyself: {\n    description: "A page that shows personal browsing stats.",\n    variables: {\n      enabled: {\n        type: "boolean",\n        fallbackPref: "browser.aboutmyself.enabled",\n      }\n      bgColor: {\n        type: "string",\n        fallbackPref: "browser.aboutmyself.bgcolor",\n      },\n    },\n  },\n};\n\n')),(0,i.kt)("h2",{id:"step-2-update-your-feature-code"},"Step 2: Update your feature code"),(0,i.kt)("p",null,"First, you will need to import ",(0,i.kt)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'XPCOMUtils.defineLazyModuleGetters(this, {\n  NimbusFeatures: "resource://nimbus/ExperimentAPI.jsm",\n});\n')),(0,i.kt)("p",null,"Then anywhere in your code that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Services.prefs")," to get experiment-defined values, use ",(0,i.kt)("inlineCode",{parentName:"p"},"NimbusFeatures")," instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'element.style.backgroundColor = Services.prefs.getBoolPref("browser.aboutmyself.bgColor");\n')),(0,i.kt)("p",null,"becomes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'element.style.backgroundColor = NimbusFeatures.aboutmyself.getVariable("bgColor");\n')),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/desktop-feature-api#api-reference-guide"},"API reference docs")," for more details, including listening to changes."),(0,i.kt)("h2",{id:"step-3-run-tests"},"Step 3: Run tests"),(0,i.kt)("p",null,"If you've configured fallback preferences your tests should pass as written, but we recommend also reading ",(0,i.kt)("a",{parentName:"p",href:"/desktop-frontend-testing"},"Testing Guide")," to add experiment-specific tests."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://phabricator.services.mozilla.com/D118760"},"PR Example of a switch from prefs to NimbusFeatures")," (This is slightly outdated)")))}d.isMDXComponent=!0}}]);