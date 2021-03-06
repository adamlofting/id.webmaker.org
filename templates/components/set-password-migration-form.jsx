var React = require('react');
var validators = require('../lib/validatorset');
var Form = require('./form/form.jsx');
var IconText = require('./icontext.jsx');

var fields = [
  {
    'password': {
      'placeholder': 'Enter your new password',
      'type': 'text',
      'validator': 'username',
      'errorMessage': 'Invalid username'
    }
  }
];

var fieldsValidators = validators.getValidatorSet(fields);

var SetPasswordMigration = React.createClass({
  render: function() {
    return (
      <div className="migrateKeyContainer">
        <IconText
          iconClass="emailSentIcon fa fa-lock"
          className="emailSent arrow_box"
          headerClass="emailSentHeader"
          header="Set your password">
            <p>Please create a password for your account.</p>
        </IconText>
        <div className="migrateKey innerForm">
          <Form ref="userform" fields={fields} validators={fieldsValidators} />
          <button onClick={this.processFormData} className="btn btn-awsm">Continue</button>
        </div>
      </div>
    );
  },
  processFormData: function() {
    var form = this.refs.userform;
    form.processFormData(this.props.submitForm);
  }
});

module.exports = SetPasswordMigration;
