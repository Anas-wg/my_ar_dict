import axios from "axios";
import { CoreCompoent } from "../core/coreComponent";
import { DATA } from "../worddata";

export default class WordList extends CoreCompoent {
  constructor() {
    super();
    this.currentPage = 1; // 현재 페이지 번호
    this.itemsPerPage = 10; // 페이지당 항목 수
    this.DATA = [];
    this.totalPages = 0;
    this.isDataLoaded = false;
    this.fetchData();
  }
  
  async fetchData() {
    try {
      console.log("Fetching data..."); // API 호출 시작 로그
      const response = await axios.get("https://768953f5-0085-487e-901f-194a33fe695d.mock.pstmn.io/wordlist");
      console.log(response);
      this.DATA = response.data || [];
      this.totalPages = Math.ceil(this.DATA.length / this.itemsPerPage);
      this.isDataLoaded = true;
      this.render();
    } catch (e) {
      console.error("Err fetching wordlist", e);
    }
  }



  render() {
    if (!this.isDataLoaded) {
      this.el.innerHTML = "<p>Loading data...</p>";
      return;
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    const currentPageData = this.DATA.slice(startIndex, endIndex);
    // console.log(currentPage);
    this.el.innerHTML = /* html */ `
      <ul>
        ${currentPageData
          .map(function (element) {
            return `
              <li id=${element.id} class="unchecked">
                <input type="checkbox" class="unchecked">
                <span class="arabic">${element.single} ${
              element.plural ? "-" + element.plural : ""
            }</span>
                <span class="korean">${element.mean}</span>
              </li>
            `;
          })
          .join("")}
      </ul>
      <div class="buttons">
        <button id="prev">Prev</button>
        <input type="number" id="page-number" value="${this.currentPage}" />
        <button id="next">Next</button>
      </div>
    `;

const inputEls = this.el.querySelectorAll(".unchecked");
inputEls.forEach((element) => {
  element.addEventListener("change", (event) => {
    const listItem = event.target.closest("li");
    if (event.target.checked) {
      listItem.classList.add("checked");
    } else {
      listItem.classList.remove("checked");
    }
  });
});

    const prevButton = this.el.querySelector("#prev");
    const nextButton = this.el.querySelector("#next");
    const pageNumberInput = this.el.querySelector("#page-number");

    prevButton.addEventListener("click", () => {
      this.goToPreviousPage();
    });

    nextButton.addEventListener("click", () => {
      this.goToNextPage();
    });

    pageNumberInput.addEventListener("change", () => {
      const pageNumber = parseInt(pageNumberInput.value);
      this.goToPage(pageNumber);
    });
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.render();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.render();
    }
  }

  goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.render();
    }
  }
}
