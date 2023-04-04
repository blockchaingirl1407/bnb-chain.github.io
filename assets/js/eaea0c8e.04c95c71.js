"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=o,u=m["".concat(i,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(u,s(s({ref:t},c),{},{components:n})):a.createElement(u,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63326:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>l,toc:()=>i,default:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"BNB Smart Chain Full Node",hide_table_of_contents:!1,sidebar_position:2},s="How to Run A Fullnode on BNB Smart Chain",l={unversionedId:"validator/fullnode",id:"validator/fullnode",isDocsHomePage:!1,title:"How to Run A Fullnode on BNB Smart Chain",description:"Fullnodes Functions",source:"@site/docs/validator/fullnode.md",sourceDirName:"validator",slug:"/validator/fullnode",permalink:"/docs/validator/fullnode",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/fullnode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Smart Chain Full Node",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BSC Explorers",permalink:"/docs/BSCexplorers"},next:{title:"BNB Smart Chain Archive Node",permalink:"/docs/archivenode"}},i=[{value:"Fullnodes Functions",id:"fullnodes-functions",children:[],level:2},{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Suggested Requirements",id:"suggested-requirements",children:[],level:2},{value:"Steps to Run a Fullnode",id:"steps-to-run-a-fullnode",children:[{value:"Sync From Snapshot (Recommended)",id:"sync-from-snapshot-recommended",children:[],level:3},{value:"Sync From Genesis Block (Not Recommended)",id:"sync-from-genesis-block-not-recommended",children:[],level:3}],level:2},{value:"Sync Mode",id:"sync-mode",children:[],level:2},{value:"Local Private Network",id:"local-private-network",children:[],level:2},{value:"Node Maintenance",id:"node-maintenance",children:[],level:2},{value:"Upgrade Geth",id:"upgrade-geth",children:[],level:2}],d={toc:i};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-a-fullnode-on-bnb-smart-chain"},"How to Run A Fullnode on BNB Smart Chain"),(0,o.kt)("h2",{id:"fullnodes-functions"},"Fullnodes Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stores the full blockchain history on disk and can answer the data request from the network."),(0,o.kt)("li",{parentName:"ul"},"Receives and validates the new blocks and transactions."),(0,o.kt)("li",{parentName:"ul"},"Verifies the states of every account.")),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("p",null,"We support running a full node on ",(0,o.kt)("strong",{parentName:"p"},"Mac OS X"),", ",(0,o.kt)("strong",{parentName:"p"},"Linux"),", and ",(0,o.kt)("strong",{parentName:"p"},"Windows"),"."),(0,o.kt)("h2",{id:"suggested-requirements"},"Suggested Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X, Linux, or Windows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IMPORTANT")," 2 TB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250 MB/S throughput, read latency <1ms. (if node is started with snap sync, it will need NVMe SSD)"),(0,o.kt)("li",{parentName:"ul"},"16 cores of CPU and 64 GB of memory (RAM)"),(0,o.kt)("li",{parentName:"ul"},"Suggest m5zn.3xlarge instance type on AWS, c2-standard-16 on Google cloud."),(0,o.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of 5 MB/S")),(0,o.kt)("h2",{id:"steps-to-run-a-fullnode"},"Steps to Run a Fullnode"),(0,o.kt)("h3",{id:"sync-from-snapshot-recommended"},"Sync From Snapshot (Recommended)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the pre-build binaries from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bsc/releases/latest"},"release page")," or follow the instructions below")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\nmv geth_linux geth\nchmod -v u+x geth\n\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\nmv geth_mac geth\nchmod -v u+x geth\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Download the config files")),(0,o.kt)("p",null,"Download ",(0,o.kt)("strong",{parentName:"p"},"genesis.json")," and ",(0,o.kt)("strong",{parentName:"p"},"config.toml")," by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Download snapshot")),(0,o.kt)("p",null,"Download latest chaindata snapshot from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-snapshots"},"here"),". Follow the guide to structure your files."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your --datadir flag should point to the folder where the extracted snapshot data is.\nIn our case, we created a new folder named node, and we moved the extracted snapshot data to this folder."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"mv server/data-seed/geth/chaindata node/geth/chaindata\nmv server/data-seed/geth/chaindata node/geth/triecache\n")))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start a full node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you use the version of geth you downloaded with wget above, and not your local installation of geth, which might be the wrong version."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is recommended to run a fast node, which is a full node with the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--tries-verify-mode none")," set if you want high performance and care little about state consistency.\nCheck ",(0,o.kt)("a",{parentName:"p",href:"/docs/BSC-fast-node"},"here")," for full details on running a fast node."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none\n")))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Monitor node status")),(0,o.kt)("p",null,"You can monitor the log from ",(0,o.kt)("strong",{parentName:"p"},"./node/bsc.log")," by default. When your node has started syncing, you should be able to see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t=2022-09-08T13:00:27+0000 lvl=info msg="Imported new chain segment"             blocks=1    txs=177   mgas=17.317   elapsed=31.131ms    mgasps=556.259  number=21,153,429 hash=0x42e6b54ba7106387f0650defc62c9ace3160b427702dab7bd1c5abb83a32d8db dirty="0.00 B"\nt=2022-09-08T13:00:29+0000 lvl=info msg="Imported new chain segment"             blocks=1    txs=251   mgas=39.638   elapsed=68.827ms    mgasps=575.900  number=21,153,430 hash=0xa3397b273b31b013e43487689782f20c03f47525b4cd4107c1715af45a88796e dirty="0.00 B"\nt=2022-09-08T13:00:33+0000 lvl=info msg="Imported new chain segment"             blocks=1    txs=197   mgas=19.364   elapsed=34.663ms    mgasps=558.632  number=21,153,431 hash=0x0c7872b698f28cb5c36a8a3e1e315b1d31bda6109b15467a9735a12380e2ad14 dirty="0.00 B"\n')),(0,o.kt)("h3",{id:"sync-from-genesis-block-not-recommended"},"Sync From Genesis Block (Not Recommended)"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To sync from genesis block, you would need a more powerful hardware. Server should at least have 40k IOPS and be at least an i3/i3en series server. "))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write genesis state locally")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./geth --datadir node init genesis.json\n")),(0,o.kt)("p",null,"You could see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INFO [05-19|14:53:17.468] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/chaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.498] Writing custom genesis block\nINFO [05-19|14:53:17.501] Persisted trie from memory database      nodes=21 size=56.84KiB time=357.915\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.502] Successfully wrote genesis state         database=chaindata hash=7d79cc\u2026fb0d1e\nINFO [05-19|14:53:17.503] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/lightchaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.524] Writing custom genesis block\nINFO [05-19|14:53:17.525] Persisted trie from memory database      nodes=21 size=56.84KiB time=638.396\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.528] Successfully wrote genesis state         database=lightchaindata hash=7d79cc\u2026fb0d1e\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start fullnode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## start a full node\n./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,o.kt)("h2",{id:"sync-mode"},"Sync Mode"),(0,o.kt)("p",null,"There are two sync modes for running a full node: ",(0,o.kt)("strong",{parentName:"p"},"snap")," and ",(0,o.kt)("strong",{parentName:"p"},"full")," which can be specified by flag ",(0,o.kt)("strong",{parentName:"p"},"--syncmode"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"snap")," sync mode is used for initial sync, which will download the latest states rather than execute the blocks from the genesis. When the initial sync is done, it will switch to full sync automatically."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"full")," sync mode can also be used to do initial sync, which will execute all the blocks since genesis. But it is ",(0,o.kt)("strong",{parentName:"p"},"not recommended"),", since the amount of historical data is too large. Instead, you can download a snapshot from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-snapshots"},"official repo")," and start full sync from the snapshot."),(0,o.kt)("p",null,"If the flag ",(0,o.kt)("strong",{parentName:"p"},"--syncmode")," is not provided, the default sync mode will depend on the state of the data folder. It will be ",(0,o.kt)("strong",{parentName:"p"},"snap")," mode if you sync from genesis or ",(0,o.kt)("strong",{parentName:"p"},"full")," mode if you start from a snapshot."),(0,o.kt)("h2",{id:"local-private-network"},"Local Private Network"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node-deploy"},"BSC-Deploy Tools")," to setup a local private network."),(0,o.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/node-maintenance"},"this guide")),(0,o.kt)("h2",{id:"upgrade-geth"},"Upgrade Geth"),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/upgrade-fullnode"},"this guide")))}c.isMDXComponent=!0}}]);