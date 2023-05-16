# API-Automation-with-GitHub-action-and-Notifications-System-with-Discord


This GitHub repository showcases an exciting implementation of Postman Collection Automation for API tests, providing a reliable and efficient solution for ensuring the quality and reliability of your endpoints. With the powerful combination of Newman and GitHub Actions, this automation setup enables seamless integration and scheduled test runs at a specific time every day.

By leveraging this automation solution, your API tests are executed effortlessly, offering valuable insights into the health and performance of your APIs. The test results are captured in comprehensive HTML reports, delivering a detailed overview of the test execution and facilitating easy analysis of the findings.

To enhance the workflow, a real-time notification system has been integrated with Discord. Immediate alerts are triggered whenever an assertion fails during the test execution, enabling prompt identification and resolution of any issues that may arise. This ensures the maintenance of the highest standards of API functionality and reliability.

In this repository, you will find the code implementation and configuration files necessary to set up and replicate this Postman Collection Automation for your API testing. The repository is designed to be easily accessible, allowing you to explore the implementation details, provide feedback, and make suggestions for further enhancements.


## Author

- [@Jamil-kawsher1](https://www.github.com/Jamil-kawsher1)
## Automation Video









## How to run this project In Local enviroment

- Clone This project
- Hit the following command
```bash
  npm i
```
- create .env file and  write the  the following in .env file
```bash
  DISCORD_URL=YOUR_DISCORD_WEBHOOK_URL
```
- Finally to run In Local enviroment Hit this command in Vs code Terminal
```bash
  node ./report.js
```


## How to modify or change The collection
- Export and Save Your desired collection from postman in json format
- Then Copy It in Collection folder
- Then Open report.js file and modify collection name
![image](https://github.com/Jamil-kawsher1/API-Automation-with-GitHub-action-and-Discord/assets/42008531/a87702f5-e3c3-4a57-9bf6-13420a4f4e74)

## How to Configure It with Github action/CI CD
= Complete   Local enveroment modification first 
- Open Cloned Repo in File explorer and delete .git folder
- Create new Repository and push the code 
-  Configure Discord_URL env in github settings

## Tools and Tech
- VS Code
- Node JS 
- Newman
- axios
- Web hooks











