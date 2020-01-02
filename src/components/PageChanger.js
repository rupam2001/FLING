import React, { Component } from "react";
import PageChangerCss from "./PageChangerCss.module.css";

class PageChanger extends Component {
  render() {
    const prevBtn = (
      <button className={PageChangerCss.pageBtn}>Previous page</button>
    );
    const pageNo = (
      <button className={PageChangerCss.pageBtn}>
        {this.props.pageNumber}
      </button>
    );
    const nextBtn = (
      <button className={PageChangerCss.pageBtn}>Next page</button>
    );

    const firstPage = (
      <>
        {pageNo}
        {nextBtn}
      </>
    );
    const middlePage = (
      <>
        {prevBtn}
        {pageNo}
        {nextBtn}
      </>
    );
    const lastPage = (
      <>
        {prevBtn}
        {pageNo}
      </>
    );

    const renderedPage = () => {
      if (this.props.pageNumber == 1) {
        return firstPage;
      } else if (this.props.lastPageNumber == this.props.pageNumber) {
        return lastPage;
      } else {
        return middlePage;
      }
    };

    return renderedPage();
  }
}

export default PageChanger;
