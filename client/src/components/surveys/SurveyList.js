import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, fetchSurvey } from "../../actions/index";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    //这里sort
    return this.props.surveys.reverse().map(survey => {
      const url = "/api/surveys/" + survey._id;
      return (
        <div key={survey._id} className="card darken-1">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>

          {/* 这个url一叫 前端render SingleSurvey 并且Mount时叫actionCreater 从而连接后台返回单个survey信息 */}
          <a href={url}>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.surveys);
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapDispatchToProps(state) {
  return {
    surveys: state.surveys
  };
}

export default connect(
  mapDispatchToProps,
  { fetchSurveys, fetchSurvey }
)(SurveyList);
