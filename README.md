# Test-Automation-Practice
Test Automation Practice Repository

## Test Cases

### Test Login form with empty credentials (UC-1)

#### Steps

1. Type any credentials into "Username" and "Password" fields.

2. Clear the inputs.

3. Hit the "Login" button.

4. Check the error messages: "Username is required".


### Test Login form with credentials by passing Username (UC-2)

#### Steps

1. Type any credentials in username.

2. Enter password.

3. Clear the "Password" input.

4. Hit the "Login" button.

5. Check the error messages: "Password is required".


### Test Login form with credentials by passing Username & Password (UC-3)

#### Steps

1. Type credentials in username which are under Accepted username are sections.

2. Enter password as secret sauce.

3. Click on Login and validate the title “Swag Labs” in the dashboard.


## Developer notes


### Node version

for the development of the test cases the following nodejs version was used...

- Nodejs v18.20.4


### ENV file included

The .ENV file included in this repository, containing the login credentials and the URL of the test site, for test parameterization demostration purposes.


### Commit Message Style

The commits in this repository formatted according the standards of the Angular Commit Message Guidelines.

https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type


