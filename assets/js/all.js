// API文件 - Application Programming Interface應用程式介面
// 串接API：交換資料的過程

// 1. 要拿什麼資料 -> 取的所有AI作品
// 2. 要用什麼 HTTP METHOD 拿資料 -> GET
// 3. 資料欄位的說明
// 4. 資料來源(路由) -> https://2023-engineer-camp.zeabur.app/api/v1/works
// 5. 內容是什麼 -> Query String

// 資料串接
// const apiPath = "https://2023-engineer-camp.zeabur.app";
// const list = document.querySelector("#list");

// const data = {
//   type: "",
//   sort: 0,
//   page: 1,
//   search: "",
// };

// let worksData = [];
// let pagesData = {};
// function getData({ type, sort, page, search }) {
//   // 構建 API URL
//   const apiUrl = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${
//     type ? `type=${type}&` : ""
//   }${search ? `search=${search}` : ""}`;

//   axios.get(apiUrl).then(function (response) {
//     worksData = response.data.ai_works.data; // 存儲從 API 返回的作品數據
//     pagesData = response.data.ai_works.page; // 存儲從 API 返回的分頁數據
//     console.log(response.data);

//     // console.log("worksData", worksData);
//     // console.log("pagesData", pagesData);
//     renderWorks(); // 資料獲取成功後，呼叫渲染作品的函式
//   });
// }

// getData(data); // 初始化時獲取作品資料

// // 渲染作品至畫面
// function renderWorks() {
//   let works = ""; //works = works +`<li>` ; // 用於存儲渲染的作品 HTML 字符串

//   worksData.forEach((item) => {
//     // 使用 += 將獲取的作品 HTML 返回到 works 字符串中
//     works += /*html*/ `<li class="col-4">
//       <div class="card">
//         <div class="card-layer">
//           <img class="card-img" src="${item.imageUrl}" alt="ai image">
//         </div>
//         <div class="card-body">
//           <h4 class="card-title">${item.title}</h4>
//           <p class="card-text">${item.description}</p>
//         </div>
//         <div class="card-body">
//           <p class="card-subtitle">AI 模型</p>
//           <p class="card-text">${item.model}</p>
//         </div>
//         <div class="card-body">
//           <span class="card-text">#${item.type}</span>
//           <a class="card-link" href="${item.link}" target="_blank">
//             <span class="material-icons">
//               share
//             </span>
//           </a>
//         </div>
//       </div>
//     </li>`;
//   });

//   list.innerHTML = works; // 將作品 HTML 字符串渲染到列表元素中
// }
