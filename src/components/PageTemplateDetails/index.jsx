import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark;

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">{page.frontmatter.title}</h1>
            <div className="page__body" dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>
        </div>
      </div>
    );
  }
}

PageTemplateDetails.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired
  })
};

export default PageTemplateDetails;
