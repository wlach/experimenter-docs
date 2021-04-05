(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(97)),s={id:"jetstream",title:"Jetstream overview"},o={unversionedId:"jetstream/jetstream",id:"jetstream/jetstream",isDocsHomePage:!1,title:"Jetstream overview",description:"[Jetstream] is an analysis framework for experiments.",source:"@site/docs/jetstream/jetstream.md",slug:"/jetstream/jetstream",permalink:"/experimenter-docs/jetstream/jetstream",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/jetstream.md",version:"current",sidebar:"sidebar",previous:{title:"Root Page",permalink:"/experimenter-docs/experiment-owners"},next:{title:"Metrics",permalink:"/experimenter-docs/jetstream/metrics"}},l=[{value:"Analysis paradigm",id:"analysis-paradigm",children:[]},{value:"Datasets",id:"datasets",children:[]}],c={toc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://github.com/mozilla/jetstream"},"Jetstream"))," is an analysis framework for experiments.\nJetstream aggregates and summarizes product telemetry,\nusing the experiment definitions in Experimenter,\nto produce the datasets that drive the results dashboards."),Object(i.b)("p",null,"Most investigation owners will not interact with Jetstream directly.\nJetstream computes a default set of statistics for every experiment.\nInvestigation owners can add additional ",Object(i.b)("a",{parentName:"p",href:"/experimenter-docs/jetstream/metrics"},"metrics")," to a results dashboard by choosing\n",Object(i.b)("a",{parentName:"p",href:"/experimenter-docs/jetstream/outcomes"},"outcome"),"s in Experimenter while designing an experiment."),Object(i.b)("p",null,"Data scientists can extend Jetstream with new outcomes by contributing\n",Object(i.b)("a",{parentName:"p",href:"/experimenter-docs/jetstream/outcomes"},"outcome")," definitions\nto the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream-config"},"jetstream-config")," repository."),Object(i.b)("p",null,"Data scientists can also ask Jetstream to evaluate custom metrics for a particular experiment\nby contributing ",Object(i.b)("a",{parentName:"p",href:"/experimenter-docs/jetstream/configuration"},"experiment configurations"),"\nto jetstream-config."),Object(i.b)("p",null,"Jetstream is not a monitoring platform,\nwhich means that Jetstream does not emit real-time results.\nThe first interesting results will usually be available\na week after the enrollment period ends.\nTypically, that means results will begin to appear\ntwo weeks after the day the experiment launches."),Object(i.b)("h2",{id:"analysis-paradigm"},"Analysis paradigm"),Object(i.b)("p",null,"Experiments are analyzed using the concept of analysis windows. Analysis\nwindows describe an interval marked from each client\u2019s day of\nenrollment. The \u201cday 0\u201d analysis window aggregates data from the days\nthat each client enrolled in the experiment. Because the intervals are\ndemarcated from enrollment, they are not calendar dates; for some\nclients in an experiment, day 0 could be a Tuesday, and for others a\nSaturday."),Object(i.b)("p",null,"The week 0 analysis window aggregates data from each client\u2019s days 0\nthrough 6, the week 1 window aggregates data from days 7 through 13, and\nso on."),Object(i.b)("p",null,"Clients are given a fixed amount of time, specified in Experimenter and\noften a week long, to enroll. Final day 0 results are available for\nreporting at the end of the enrollment period, after the last eligible\nclient has enrolled, and week 0 results are available a week after the\nenrollment period closes. Results for each window are published as soon\nas complete data is available for all enrolled clients."),Object(i.b)("p",null,'The "overall" window, published after the experiment has ended, is a\nwindow beginning on each client\u2019s day 0 that spans the longest period\nfor which all clients have complete data.'),Object(i.b)("h2",{id:"datasets"},"Datasets"),Object(i.b)("p",null,"The datasets that back the Experimenter results dashboards\nare available in BigQuery.\n",Object(i.b)("a",{parentName:"p",href:"https://docs.telemetry.mozilla.org/datasets/jetstream.html"},"Technical documentation"),"\nis available in the Mozilla data docs."))}m.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),m=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,b=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(b,o(o({ref:t},c),{},{components:n})):a.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);