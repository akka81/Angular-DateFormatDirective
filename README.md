# Angular-DateFormatDirective ![Build Status](https://travis-ci.org/GruppoReti/Angular-DateFormatDirective.svg?branch=master)
###Angular Directive to validate date input formats

this directive acts on text input or on kendo date pickers and validates the format of the inserted data.
It's also possible to configure and validate before and after constraints using others date input controls
It depends on angular and moment.

for a working sample download the full repo and type:

  1. npm install  (to install dependencies including lite-server)
  2. npm start (to start lite server on port 10001)
  3. browse http://localhost:10001 to run the sample

######Download the only directive, ts or js file, if you want to include it in your project.

###Usage Samples:
- Validate a single date with default format (DD/MM/YYYY):

  ```html
  <input type="text" id="sampleData" name="sampleData" ng-model=myDate" dateformat-validation>
  ```
- Validate a single date with a specific format:
 
   ```html
    <input type="text" id="sampleData" name="sampleData" ng-model=myDate" dateformat-validation="DD/MM/YYYY">
  ```
- Validate a single date with kendo (k-format is used):

 ```html
   <input kendo-date-picker="sampleDatePicker" id="sampleDatePicker" name="sampleDate"
                                   ng-model="myDate"
                                   k-format="'dd/MM/yyyy'"
                                   dateformat-validation />
```

the validation error if present is contained id: `FormId.ControlName.$error.dateformatValidation`
for example in all the samples provided the controlName is "sampleData" and if we suppose that the form is named "sampleForm" the error can be checked by testing the boolean:
`sampleForm.sampleData.$error.dateformatValidation`

