// require in the database adapter functions as you write them (createUser, createActivity...)
// const { } = require('./');
const { createPatient } = require("./patients");
const { createProvider} = require("./providers");
const { createService } = require("./services");
const client = require("./client");

async function dropTables() {
  console.log("Dropping All DS Tables...");
  await client.query(`
        DROP TABLE IF EXISTS patients, providers, services;`);
}
// syntax err near username line 17
async function createTables() {
  console.log("Starting to build DS tables...");
  try {
    await client.query(`
    CREATE TABLE patients (
        id SERIAL PRIMARY KEY,
        name character varying(255) NOT NULL,
        address character varying(255) NOT NULL,
        email character varying(255),
        phone character varying(255),
        dob character varying(255),
        ssn character varying(255),
        "insuranceProviderName" character varying(255),
        "planId" character varying(255),
        "memberId" character varying(255),
        "groupId" character varying(255),
        "policyNumber" character varying(255),
        "policyHolderName" character varying(255),
        "payerId" character varying(255),
        "planDate" character varying(255)
      );
    `);

    await client.query(`
    CREATE TABLE providers (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      name TEXT,
      "jobCode" character varying(500) 
  );
  
    `);
    await client.query(`
    CREATE TABLE services (
      id SERIAL PRIMARY KEY,
      "serviceName" text,
      "serviceCode" text,
      "date" date,
      "timeIn" VARCHAR(255),
      "timeOut" VARCHAR(255),
      "patientServiceId" integer REFERENCES patients(id)
  );
    `);
  } catch (error) {
    throw error;
  }
}
async function createInitialPatients() {
  console.log("Starting to create some test patients...");
  try {
    const patientsToCreate = [
      {
        name: "Stephen Doe",
        address: "1333 13th St, Pensacola Fl, 32501",
        email: "stephenDoe@gtest.com",
        phone: "(255)555-5467",
        dob: "05/05/1955",
        ssn: "2233453933",
        insuranceProviderName: "Blue Horse",
        planId: "00ATEST",
        memberId: "00r232TEST",
        groupId: "003ERTEST",
        policyNumber: "008383844EiTESTj22",
        policyHolderName: "Sarie Doe",
        payerId: "5005test",
        planDate: "05/22/2020"
      },
      {
        name: "Tjane Doe",
        address: "11 Renold St, Navarre Fl, 32201",
        email: "janeDoe@gtest.com",
        phone: "(555)535-5475",
        dob: "05/04/1995",
        ssn: "555555555",
        insuranceProviderName: "Brown Cow",
        planId: "16ATEST",
        memberId: "44r232TEST",
        groupId: "333ERTEST",
        policyNumber: "118383844EiTESTj22",
        policyHolderName: "Mary Doe",
        payerId: "55test",
        planDate: "01/22/2000"
      },
      {
        name: "Marty Doe",
        address: "109 Emanth St, St. Pete Fl, 32891",
        email: "sentinel@ptest.com",
        phone: "(505)555-5467",
        dob: "01/03/1995",
        ssn: "0033453933",
        insuranceProviderName: "Blue Sleigh",
        planId: "1600000ATEST",
        memberId: "44r00000232TEST",
        groupId: "0000333ERTEST",
        policyNumber: "00118383844EiTESTj22",
        policyHolderName: "Martty Doe",
        payerId: "0055test",
        planDate: "01/22/1952"
      },
      {
        name: "Kelly Doe",
        address: "473 Relinth St, Tampa Fl, 32833",
        email: "rent558@qtest.com",
        phone: "(533)555-7334",
        dob: "06/23/1965",
        ssn: "1033453935",
        insuranceProviderName: "Blue Sleigh",
        planId: "1900ATEST",
        memberId: "40LL00232TEST",
        groupId: "00TEST",
        policyNumber: "001EiTESTj22",
        policyHolderName: "Pennie Doe",
        payerId: "0test",
        planDate: "11/21/1992"
      },
      {
        name: "Frankie Doe",
        address: "866757 N. Pleace Ave, Orlanda Fl, 33736",
        email: "sentinel@ptest.com",
        phone: "(505)555-5467",
        dob: "01/03/1995",
        ssn: "0033453933",
        insuranceProviderName: "Blue Sleigh",
        planId: "1600000ATEST",
        memberId: "44r00000232TEST",
        groupId: "0000333ERTEST",
        policyNumber: "00118383844EiTESTj22",
        policyHolderName: "Gene Doe",
        payerId: "0665test",
        planDate: "09/09/2000"
      },
      {
        name: "McKenzie Doe",
        address: "76 Round Pl, Panama City Fl, 36546",
        email: "sentinel@ptest.com",
        phone: "(505)555-5467",
        dob: "01/03/1995",
        ssn: "0033453933",
        insuranceProviderName: "Blue Sleigh",
        planId: "1600000ATEST",
        memberId: "44r00000232TEST",
        groupId: "0000333ERTEST",
        policyNumber: "00118383844EiTESTj22",
        policyHolderName: "Bennie Doe",
        payerId: "25455test",
        planDate: "01/22/1952"
      },
      {
        name: "Zac Doe",
        address: "8123 Testeer Ave, Seminole Beach Fl, 47446",
        email: "sentinel@ptest.com",
        phone: "(505)555-5467",
        dob: "01/03/1995",
        ssn: "0033453933",
        insuranceProviderName: "Blue Sleigh",
        planId: "1600000ATEST",
        memberId: "44r00000232TEST",
        groupId: "0000333ERTEST",
        policyNumber: "00118383844EiTESTj22",
        policyHolderName: "Martty Doe",
        payerId: "0055test",
        planDate: "01/22/1952"
      },
    ];
    const patients = await Promise.all(patientsToCreate.map(createPatient));
    console.log("Patients created:");
    console.log(patients);
    console.log("Finished creating patients!");
  } catch (error) {
    console.error("Error creating patients!");
    throw error;
  }
}
async function createInitialProviders() {
  try {
    console.log("Starting to create providers...");
    const providersToCreate = [
      {
        username: "gcadmin",
        password: "georgecarver",
        name: "George Carver",
        jobCode: "3A"
      },
      {
        username: "fkadmin",
        password: "georgecarver",
        name: "George Carver",
        jobCode: "3A"
      },
      {
        username: "tsadmin",
        password: "georgecarver",
        name: "George Carver",
        jobCode: "3B"
      },
      {
        username: "owadmin",
        password: "oscarwildes",
        name: "Oscar Wilds",
        jobCode: "2A"
      },
      {
        username: "adminAP",
        password: "banana",
        name: "Aaron Test",
        jobCode: "5B"
      }
    ];
    
    const providers = await Promise.all(providersToCreate.map(createProvider));
    console.log("providers created:");
    console.log(providers);
    console.log("Finished creating providers!");
  } catch (error) {
    console.error("Error creating providers!");
    throw error;
  }
}
async function createInitialServices() {
  try {
    console.log("starting to create services");
    const servicesToCreate = [
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 2
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 1
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 2
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 2
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 5
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 6
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 1
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 2
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 4
      }
    ];
    const services = await Promise.all(servicesToCreate.map(createService));
    console.log("services created: ", services);
    console.log("Finished creating services");
  } catch (error) {
    throw error;
  }
}
async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialPatients();
    await createInitialProviders();
    await createInitialServices();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}
module.exports = {
  rebuildDB,
};