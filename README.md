# Hospital-API

# Information about API:
### Theme:
- We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

- Date

# Instructions about SetUp:

First start with downloading the code and and write npm install on code editor, it will install all dependencies on your editor.
You will need a code editor and mongoDB setup on your computer.
We will use postman to check the api is working or not,So download postman on your computer.

1.Now use this **http://localhost:3000/doctors/register** route to register doctor in API and add the info as shown in image below:
<img width="1440" alt="Screenshot 2023-07-21 at 5 53 46 PM" src="https://github.com/nikhil01010/Hospital-API/assets/89354549/6d535ad9-379a-4c7f-a3aa-08491bf08ee9">

2.Use this **http://localhost:3000/doctors/login** to login as a doctor and add info as shown in image below:
<img width="1440" alt="Screenshot 2023-07-21 at 5 53 59 PM" src="https://github.com/nikhil01010/Hospital-API/assets/89354549/6645e681-f281-4278-802b-efbd643787f2">



3.Use this **http://localhost:3000/patients/register** to register patient as shown in image below:
<img width="1440" alt="Screenshot 2023-07-21 at 5 54 22 PM" src="https://github.com/nikhil01010/Hospital-API/assets/89354549/705ab03f-6f0c-4d75-888b-d7fa3cbb9b5b">


4. Use this **http://localhost:3000/patients/:id/create_report** to create report and add status you can see the types of  status in report model:

 <img width="1440" alt="Screenshot 2023-07-21 at 5 54 34 PM" src="https://github.com/nikhil01010/Hospital-API/assets/89354549/2c8ec65c-8bd7-4c27-8e3a-6e7c36384428">


5. Use this **http://localhost:3000/patients/:id/all_reports** to get all the reports as shown below:

<img width="1440" alt="Screenshot 2023-07-21 at 5 55 00 PM" src="https://github.com/nikhil01010/Hospital-API/assets/89354549/944bce95-f7f5-4b03-857b-bc921d9aff72">


6. Use this **http://localhost:3000/reports/:status** to get all reports  of all patients filtered by a specific status as shown in image below:
<img width="1440" alt="Screenshot 2023-07-21 at 5 55 08 PM" src="https://github.com/nikhil01010/Hospital-API/assets/89354549/38f80028-6605-4ed5-996d-77d2369afa4d">


   
