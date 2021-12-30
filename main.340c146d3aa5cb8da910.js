"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{2178:function(e,n,r){r.d(n,{q:function(){return _}});var t=r(2737),a=r(4246),_=function(e){var n=e.className,r=t.wl.useUserName(),_=t.wl.useImage();return(0,a.jsx)("img",{alt:r,className:n||void 0,src:_})}},2737:function(e,n,r){r.d(n,{Sj:function(){return l},Lt:function(){return o},xI:function(){return s},wl:function(){return f}});var t=r(1549),a=r(9041),_=r(8722),c=r(4703),i=r(946),s=(0,t.yM)(),o=(0,t.GW)((function(){return i.WY({url:"user",method:"get"}).then((function(e){return e.user}))})),p=(0,t.GW)(i.o4),l=(0,t.nu)(o.doneData,{bio:"",createdAt:"",email:"",id:null,image:"",token:null,updatedAt:"",username:""}).reset(s),d=l.map((function(e){return e.username})),u=l.map((function(e){return e.image})),m=l.map((function(e){return e.token})),g=m.map(Boolean);(0,_.t)({store:d,key:"visitor-username"}),(0,_.t)({store:u,key:"visitor-image"}),(0,t.eH)({from:(0,t.lo)({source:m,filter:Boolean}),to:p}),(0,_.t)({store:m,key:c.A});var f={useIsAuthorized:function(){return(0,a.oR)(g)},useUserName:function(){return(0,a.oR)(d)},useImage:function(){return(0,a.oR)(u)},useVisitor:function(){return(0,a.oR)(l)}}},6466:function(e,n,r){var t=r(7378),a=r(1542),_=r(9635),c=r(335),i=r(2737),s=r(4703),o=r(4123),p=r(8715),l=r(6666),d=r(5664),u=r(9848),m=r(3947),g=r(7765),f=r(4246);function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,a,_=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(_.push(t.value),!n||_.length!==n);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw a}}return _}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return v(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var b=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(978)]).then(r.bind(r,1978))})),O=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(890)]).then(r.bind(r,5890))})),k=(0,t.lazy)((function(){return r.e(247).then(r.bind(r,7247))})),E=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(148)]).then(r.bind(r,6148))})),R=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(531)]).then(r.bind(r,5531))})),x=(0,t.lazy)((function(){return r.e(169).then(r.bind(r,169))})),T=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(146)]).then(r.bind(r,146))})),N=(0,t.lazy)((function(){return r.e(771).then(r.bind(r,8771))})),D=function(){var e=h((0,t.useState)(!1),2),n=e[0],r=e[1],a=(0,t.useCallback)((function(){return r((function(e){return!e}))}),[]);return(0,f.jsx)(p.ErrorBoundary,{fallbackRender:j,resetKeys:[n],onReset:a,children:(0,f.jsx)(t.Suspense,{fallback:(0,f.jsx)(u.$,{}),children:(0,f.jsxs)(_.rs,{children:[(0,f.jsx)(_.AW,{path:l.Z.LOGIN,children:(0,f.jsx)(b,{})}),(0,f.jsx)(_.AW,{path:l.Z.REGISTRATION,children:(0,f.jsx)(O,{})}),(0,f.jsx)(_.AW,{exact:!0,path:[l.Z.ROOT,l.Z.GLOBAL_FEED,l.Z.YOUR_FEED,l.Z.FEED_BY_TAG],children:(0,f.jsx)(k,{})}),(0,f.jsx)(d.M,{path:[l.Z.EDITOR,l.Z.EDITOR_SLUG],children:(0,f.jsx)(E,{})}),(0,f.jsx)(d.M,{path:l.Z.SETTINGS,children:(0,f.jsx)(R,{})}),(0,f.jsx)(d.M,{path:l.Z.PROFILE,children:(0,f.jsx)(x,{})}),(0,f.jsx)(_.AW,{path:l.Z.ARTICLE_SLUG,children:(0,f.jsx)(T,{})}),(0,f.jsx)(_.AW,{path:"*",children:(0,f.jsx)(N,{})})]})})})};function j(e){var n=e.error,r=e.resetErrorBoundary;return(0,f.jsxs)(m.T,{children:[(0,f.jsx)("p",{children:"Something went wrong:"}),(0,f.jsx)("pre",{children:n.message})," ",(0,f.jsx)(g.z,{onClick:function(){r()},children:"Try again"})]})}var I=r(1650),y=function(e){var n=e.className,r=void 0===n?"":n,t=e.children;return(0,f.jsx)("header",{className:"navbar navbar-light ".concat(r),children:(0,f.jsx)(I.W,{children:t})})},A=r(4289),w=function(e){var n=e.title;return(0,f.jsx)(A.rU,{className:"navbar-brand",to:l.Z.ROOT,children:n.toLowerCase()})},L=r(2178),U=r(3128),P=function(e){var n=e.children,r=i.wl.useUserName();return(0,f.jsxs)(A.OL,{exact:!0,className:"nav-link",to:"/@".concat(r),children:[n,r]})},H=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(U.L,{children:(0,f.jsx)(A.OL,{exact:!0,className:"nav-link",to:l.Z.ROOT,children:"Home"})}),(0,f.jsx)(U.L,{children:(0,f.jsxs)(A.OL,{exact:!0,className:"nav-link",to:l.Z.EDITOR,children:[(0,f.jsx)("i",{className:"ion-compose"})," New Post"]})}),(0,f.jsx)(U.L,{children:(0,f.jsxs)(A.OL,{exact:!0,className:"nav-link",to:l.Z.SETTINGS,children:[(0,f.jsx)("i",{className:"ion-gear-a"})," Settings"]})}),(0,f.jsx)(U.L,{children:(0,f.jsx)(P,{children:(0,f.jsx)(L.q,{className:"user-pic"})})})]})},S=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(U.L,{children:(0,f.jsx)(A.OL,{exact:!0,className:"nav-link",to:l.Z.ROOT,children:"Home"})}),(0,f.jsx)(U.L,{children:(0,f.jsx)(A.OL,{exact:!0,className:"nav-link",to:l.Z.LOGIN,children:"Sign In"})}),(0,f.jsx)(U.L,{children:(0,f.jsx)(A.OL,{exact:!0,className:"nav-link",to:l.Z.REGISTRATION,children:"Sign Up"})})]})},G=function(){return i.wl.useIsAuthorized()?(0,f.jsx)(H,{}):(0,f.jsx)(S,{})},B=function(){var e=i.wl.useIsAuthorized();return(0,t.useEffect)((function(){e&&i.Lt()}),[e]),(0,f.jsx)(_.F0,{history:o.m8,children:(0,f.jsxs)(c.Fz,{ReactRouterRoute:_.AW,children:[(0,f.jsxs)(y,{children:[(0,f.jsx)(w,{title:s.i}),(0,f.jsx)("ul",{className:"nav navbar-nav pull-xs-right",children:(0,f.jsx)(G,{})})]}),(0,f.jsx)(D,{})]})})};(0,a.render)((0,f.jsx)(t.StrictMode,{children:(0,f.jsx)(B,{})}),document.getElementById("root"))},4703:function(e,n,r){r.d(n,{i:function(){return t},A:function(){return a}});var t="Conduit",a="jwt"},946:function(e,n,r){r.d(n,{o4:function(){return c},WY:function(){return i}});var t,a=r(4206),_=r.n(a)().create({baseURL:null!==(t={npm_package_dependencies_effector_storage:"^4.5.0",npm_package_devDependencies_identity_obj_proxy:"^3.0.0",npm_package_devDependencies__types_node:"^17.0.5",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",npm_package_devDependencies__types_react_router_dom:"^5.3.2",USER:"runner",npm_package_devDependencies_webpack_cli:"^4.9.1",npm_package_devDependencies_jest:"^27.4.5",npm_package_devDependencies__testing_library_jest_dom:"^5.16.1",npm_config_version_commit_hooks:"true",npm_config_user_agent:"yarn/1.22.17 npm/? node/v16.13.1 linux x64",CI:"true",npm_config_bin_links:"true",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_289e8499-6aed-4a39-813f-d9112ba925c9",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/16.13.1/x64/bin/node",npm_package_dependencies_effector_react:"^22.0.6",npm_package_devDependencies_file_loader:"^6.2.0",npm_config_init_version:"1.0.0",JAVA_HOME_8_X64:"/usr/lib/jvm/adoptopenjdk-8-hotspot-amd64",SHLVL:"1",npm_package_dependencies_react_hook_form:"^7.22.3",npm_package_dependencies_markdown_to_jsx:"^7.1.5",HOME:"/home/runner",npm_package_dependencies_effector:"^22.1.2",npm_package_devDependencies__typescript_eslint_parser:"^5.8.1",npm_package_browserslist_production_0:">0.2%",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_dependencies_patronum:"^1.1.0",npm_package_devDependencies_eslint_plugin_import_helpers:"^1.2.0",npm_package_devDependencies_eslint_config_prettier:"^8.3.0",npm_package_devDependencies__testing_library_react_hooks:"^7.0.2",npm_package_browserslist_production_1:"not dead",JAVA_HOME_11_X64:"/usr/lib/jvm/adoptopenjdk-11-hotspot-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GRAALVM_11_ROOT:"/usr/local/graalvm/graalvm-ce-java11-21.3.0",GITHUB_REPOSITORY_OWNER:"mg901",npm_package_browserslist_production_2:"not op_mini all",npm_config_init_license:"MIT",GRADLE_HOME:"/usr/share/gradle-7.3.2",HOMEBREW_PREFIX:"/home/linuxbrew/.linuxbrew",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/23.1.7779620",GITHUB_RETENTION_DAYS:"90",YARN_WRAP_OUTPUT:"false",npm_package_devDependencies_terser_webpack_plugin:"^5.3.0",npm_package_devDependencies_onchange:"^7.1.0",npm_config_version_tag_prefix:"v",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu20",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_package_devDependencies_rimraf:"^3.0.2",npm_package_devDependencies_favicons_webpack_plugin:"^5.0.2",npm_package_devDependencies_husky:"^7.0.4",npm_package_devDependencies_eslint_plugin_react_hooks:"^4.3.0",npm_package_devDependencies_css_minimizer_webpack_plugin:"^3.3.1",npm_package_devDependencies__types_marked:"^4.0.1",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",npm_package_description:"[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](http://realworld.io)",npm_package_dependencies_react_router_dom:"^5.3.0",npm_package_devDependencies_typescript:"^4.5.4",npm_package_devDependencies_babel_loader:"^8.2.3",npm_package_scripts_predeploy:"npm run build",NVM_DIR:"/home/runner/.nvm",npm_package_readmeFilename:"README.md",npm_package_devDependencies__types_react_dom:"^17.0.11",npm_package_devDependencies__types_history:"^4.7.9",npm_package_devDependencies__babel_preset_env:"^7.16.5",npm_package_homepage:"https://mg901.github.io/effector-react-realworld-example-app",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",ImageVersion:"20211219.1",npm_package_devDependencies_prettier:"^2.5.1",npm_package_devDependencies__babel_plugin_transform_runtime:"^7.16.5",npm_package_sideEffects_0:"*.css",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",SWIFT_PATH:"/usr/share/swift/usr/bin",npm_package_devDependencies_eslint_plugin_import:"^2.25.3",npm_package_devDependencies__types_react_router:"^5.1.17",npm_package_devDependencies__babel_preset_typescript:"^7.16.5",npm_package_scripts_clean:"cross-env rimraf build",RUNNER_USER:"runner",CHROMEWEBDRIVER:"/usr/local/share/chrome_driver",JOURNAL_STREAM:"8:22779",GITHUB_WORKFLOW:"github pages",_:"/usr/local/bin/yarn",npm_package_devDependencies__types_jest:"^27.0.3",npm_package_devDependencies__commitlint_config_conventional:"^16.0.0",npm_package_devDependencies__babel_preset_react:"^7.16.5",GOROOT_1_15_X64:"/opt/hostedtoolcache/go/1.15.15/x64",npm_package_devDependencies__typescript_eslint_eslint_plugin:"^5.8.1",npm_package_scripts_lint:"cross-env eslint . --ext .js,.jsx,.ts,.tsx --fix.",npm_package_scripts_prepare:"husky install",npm_config_registry:"https://registry.yarnpkg.com",GITHUB_RUN_ID:"1639150464",GOROOT_1_16_X64:"/opt/hostedtoolcache/go/1.16.12/x64",npm_package_devDependencies__babel_core:"^7.16.5",GOROOT_1_17_X64:"/opt/hostedtoolcache/go/1.17.5/x64",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_BASE_REF:"",ImageOS:"ubuntu20",npm_package_devDependencies_html_webpack_plugin:"^5.5.0",npm_package_scripts_start:"cross-env NODE_ENV=development webpack-dev-server",npm_config_ignore_scripts:"",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_package_dependencies_axios:"^0.24.0",npm_package_devDependencies_eslint_import_resolver_babel_module:"^5.3.1",npm_package_browserslist_development_0:"last 1 chrome version",PATH:"/tmp/yarn--1640908700611-0.38402265561874316:/home/runner/work/effector-react-realworld-example-app/effector-react-realworld-example-app/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/opt/hostedtoolcache/node/16.13.1/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/16.13.1/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/16.13.1/x64/bin/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/16.13.1/x64/bin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",NODE:"/opt/hostedtoolcache/node/16.13.1/x64/bin/node",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_7c4aa7a1-9ea3-4f60-9ff4-d8adbcdffad6",INVOCATION_ID:"e51374655c79414ca7a304737b3cbc93",HOMEBREW_CELLAR:"/home/linuxbrew/.linuxbrew/Cellar",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",npm_package_devDependencies_size_limit:"^7.0.5",npm_package_browserslist_development_1:"last 1 firefox version",npm_package_scripts_lint_file:"cross-env eslint . --ext .js,.jsx,.ts,.tsx --fix",npm_package_name:"effector-react-realworld-example-app",GITHUB_ACTION:"__run_5",GITHUB_RUN_NUMBER:"1074",RUNNER_ARCH:"X64",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",npm_package_devDependencies_eslint_plugin_jsx_a11y:"^6.5.1",npm_package_browserslist_development_2:"last 1 safari version",npm_package_devDependencies_webpack_merge:"^5.8.0",npm_package_devDependencies_eslint_config_airbnb:"^19.0.4",npm_package_devDependencies_cz_conventional_changelog:"^3.3.0",npm_package_devDependencies__commitlint_cli:"^16.0.1",npm_package_size_limit_0_limit:"129kb",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",npm_package_dependencies_react_dom:"^17.0.2",npm_package_dependencies_history:"4.10.1",npm_package_devDependencies_webpack:"^5.65.0",npm_package_devDependencies_react_test_renderer:"^17.0.2",npm_package_devDependencies_react_polymorphic_types:"^2.0.0",npm_package_devDependencies_eslint:"^8.5.0",npm_package_scripts_pretty:"cross-env prettier --write '**/*.{j,t}{s,sx}'",CONDA:"/usr/share/miniconda",RUNNER_NAME:"Hosted Agent",XDG_CONFIG_HOME:"/home/runner/.config",GITHUB_REF_NAME:"master",GITHUB_REPOSITORY:"mg901/effector-react-realworld-example-app",npm_lifecycle_script:"npm run clean && NODE_ENV=production webpack",npm_package_devDependencies_dotenv:"^10.0.0",npm_package_devDependencies_copy_webpack_plugin:"^10.2.0",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk-bundle",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_package_dependencies_react_router:"^5.2.1",npm_package_devDependencies_webpack_dev_server:"^4.7.2",npm_package_size_limit_0_path:"build/*.js",npm_package_scripts_test:"cross-env jest",npm_config_version_git_message:"v%s",GITHUB_ACTIONS:"true",STATS_KEEPALIVE:"false",npm_lifecycle_event:"build",npm_package_devDependencies_node_static:"^0.7.11",npm_package_devDependencies_jest_environment_jsdom:"^27.4.4",npm_package_devDependencies_commitizen:"^4.2.4",npm_package_devDependencies__types_react:"^17.0.37",npm_package_devDependencies__testing_library_react:"^12.1.2",npm_package_version:"1.0.0",GITHUB_REF_PROTECTED:"false",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["build"]}',npm_package_devDependencies_lint_staged:"^12.1.3",npm_package_scripts_build:"npm run clean && NODE_ENV=production webpack",GITHUB_WORKSPACE:"/home/runner/work/effector-react-realworld-example-app/effector-react-realworld-example-app",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"e080170f66e849d69990a090719aca0a672329cf",GITHUB_RUN_ATTEMPT:"1",npm_package_devDependencies_query_string:"^7.0.1",npm_package_scripts_pretty_watch:"cross-env onchange '**/*.{j,t}{s,sx}' -- prettier --write {{changed}}",npm_config_version_git_tag:"true",npm_config_version_git_sign:"",GITHUB_REF:"refs/heads/master",GITHUB_ACTOR:"mg901",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_package_dependencies_clsx:"^1.1.1",npm_package_devDependencies_favicons:"^6.2.2",npm_package_devDependencies_eslint_plugin_react:"^7.28.0",npm_package_scripts_typecheck:"cross-env tsc",npm_package_license:"MIT",npm_config_strict_ssl:"true",LEIN_HOME:"/usr/local/lib/lein",npm_package_devDependencies_eslint_plugin_prettier:"^4.0.0",npm_package_scripts_test_watch:"cross-env jest --watch",npm_package_scripts_commit:"cross-env git-cz",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_289e8499-6aed-4a39-813f-d9112ba925c9",JAVA_HOME:"/usr/lib/jvm/adoptopenjdk-11-hotspot-amd64",PWD:"/home/runner/work/effector-react-realworld-example-app/effector-react-realworld-example-app",RUNNER_WORKSPACE:"/home/runner/work/effector-react-realworld-example-app",npm_execpath:"/usr/local/lib/node_modules/yarn/bin/yarn.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.9.8-standalone.jar",npm_package_devDependencies_css_loader:"^6.5.1",HOMEBREW_REPOSITORY:"/home/linuxbrew/.linuxbrew/Homebrew",npm_package_dependencies_use_query_params:"^1.2.3",npm_package_devDependencies_cross_env:"^7.0.3",npm_config_save_prefix:"^",npm_config_ignore_optional:"",npm_config_scripts_prepend_node_path:"true",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",npm_package_devDependencies_mini_css_extract_plugin:"^2.4.5",npm_package_scripts_preview:"npx serve -s build",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",npm_package_scripts_typecheck_watch:"yarn typecheck -- --watch",NODE_ENV:"production",INIT_CWD:"/home/runner/work/effector-react-realworld-example-app/effector-react-realworld-example-app",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk-bundle",npm_package_dependencies_react:"^17.0.2",npm_package_devDependencies_eslint_plugin_effector:"^0.5.2",npm_package_devDependencies_babel_plugin_module_resolver:"^4.1.0",npm_package_devDependencies__size_limit_preset_app:"^7.0.5"}.API_ROOT)&&void 0!==t?t:"https://api.realworld.io/api/"});_.interceptors.response.use((function(e){return e}),(function(e){var n;return 401===(null===(n=e.response)||void 0===n?void 0:n.status)&&window.location.assign("/login"),Promise.reject(e)}));var c=function(e){_.defaults.headers.common.Authorization="Token ".concat(e)},i=function(e){return _.request({url:e.url,method:e.method,data:null==e?void 0:e.data}).then((function(e){return e.data})).catch((function(e){var n;return null===(n=e.response)||void 0===n?void 0:n.data}))}},4123:function(e,n,r){r.d(n,{m8:function(){return a}});var t=r(1549),a=(0,r(2534).lX)({basename:"/effector-react-realworld-example-app"}),_=(0,t.yM)(),c=(0,t.nu)(_,a.location);c.map((function(e){return e.pathname})),c.map((function(e){return e.search}));a.listen((function(e){_(e)}))},6666:function(e,n,r){var t;r.d(n,{Z:function(){return t}}),function(e){e.ROOT="/",e.HOME="/home",e.YOUR_FEED="/your-feed",e.GLOBAL_FEED="/global-feed",e.FEED_BY_TAG="/feed-by-tag",e.LOGIN="/login",e.REGISTRATION="/registration",e.SETTINGS="/settings",e.EDITOR="/editor",e.EDITOR_SLUG="/editor/:slug",e.PROFILE="/@:username",e.ARTICLE_SLUG="/article/:slug"}(t||(t={}))},5664:function(e,n,r){r.d(n,{M:function(){return o}});var t=r(9635),a=r(2737),_=r(6666),c=r(4246);function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var o=function(e){return a.wl.useIsAuthorized()?(0,c.jsx)(t.AW,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},e)):(0,c.jsx)(t.l_,{to:{pathname:_.Z.LOGIN}})}},7765:function(e,n,r){r.d(n,{z:function(){return l}});var t=r(7378),a=r(8944),_=r(4246),c=["type","size","className","children"];function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},_=Object.keys(e);for(t=0;t<_.length;t++)r=_[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(t=0;t<_.length;t++)r=_[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=(0,t.memo)((0,t.forwardRef)((function(e,n){var r=e.type,t=void 0===r?"button":r,i=e.size,o=void 0===i?"":i,l=e.className,d=void 0===l?"":l,u=e.children,m=p(e,c),g=(0,a.Z)("btn",{"btn-sm":"sm"===o,"btn-lg":"lg"===o});return(0,_.jsx)("button",s(s({className:"".concat(g," ").concat(d),ref:n,type:t},m),{},{children:u}))})));l.displayName="Button"},1650:function(e,n,r){r.d(n,{W:function(){return a}});var t=r(4246),a=function(e){var n=e.className,r=void 0===n?"":n,a=e.children;return(0,t.jsx)("div",{className:"container ".concat(r),children:a})}},3128:function(e,n,r){r.d(n,{L:function(){return _}});var t=r(7378),a=r(4246),_=(0,t.memo)((function(e){var n=e.children;return(0,a.jsx)("li",{className:"nav-item",children:n})}));_.displayName="NavItem"},3947:function(e,n,r){r.d(n,{T:function(){return _}});var t=r(1650),a=r(4246),_=function(e){var n=e.children;return(0,a.jsx)(t.W,{className:"page",children:n})};_.displayName="Page"},9848:function(e,n,r){r.d(n,{$:function(){return _}});var t=r(7378),a=r(4246),_=(0,t.forwardRef)((function(e,n){var r=e.show;return void 0===r||r?(0,a.jsx)("div",{className:"spinner-border text-success",ref:n,children:(0,a.jsx)("span",{className:"sr-only"})}):null}))}},function(e){e.O(0,[216],(function(){return n=6466,e(e.s=n);var n}));e.O()}]);