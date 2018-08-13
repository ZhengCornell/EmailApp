import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please Confirm!</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onSub: values => dispatch(actions.submitSurvey(values))
//   };
// };

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyReview));
