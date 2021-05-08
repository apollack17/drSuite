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

        "firstName" character varying(255) NOT NULL,
        "lastName" character varying(255) NOT NULL,
        "middleInit" character varying(255),
        dob character varying(255),
        ssn character varying(255),

        "streetAddress" character varying(255) NOT NULL,
        city character varying(255) NOT NULL,
        state character varying(255) NOT NULL,
        zipcode character varying(255) NOT NULL, 

        email character varying(255),
        phone character varying(255),

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
      username character varying(255) NOT NULL UNIQUE,
      password character varying(255) NOT NULL,
      "firstName" character varying(255),
      "lastName" character varying(255),
      "jobCode" character varying(255) 
  );
  
    `);
    await client.query(`
    CREATE TABLE services (
      id SERIAL PRIMARY KEY,
      "serviceName" character varying(255),
      "serviceCode" character varying(255),
      "date" date,
      "timeIn" VARCHAR(255),
      "timeOut" VARCHAR(255),
      "patientServiceId" integer REFERENCES patients(id),
      "providerServiceId" integer REFERENCES providers(id)
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
        firstName: "Stephen",
        lastName: "Doe",
        middleInit: "K",
        dob: "05051955",
        ssn: "2233453933",
        streetAddress: "1333 13th St",
        city: "Pensacola",
        state: "FL",
        zipcode: "32501",
        email: "stephenDoe@gtest.com",
        phone: "2555555467",
        insuranceProviderName: "Blue Horse",
        planId: "00ATEST",
        memberId: "00r232TEST",
        groupId: "003ERTEST",
        policyNumber: "008383844EiTESTj22",
        policyHolderName: "Sarie Doe",
        payerId: "5005test",
        planDate: "05222020"
      },
      {
        firstName: "William",
        lastName: "Doent",
        middleInit: "J",
        dob: "05041995",
        ssn: "555555555",
        streetAddress: "11 Renold St",
        city: "Navarre",
        state: "Fl", 
        zipcode: "32201",
        email: "janeDoe@gtest.com",
        phone: "5555355475",
        insuranceProviderName: "Brown Cow",
        planId: "16ATEST",
        memberId: "44r232TEST",
        groupId: "333ERTEST",
        policyNumber: "118383844EiTESTj22",
        policyHolderName: "Mary Doe",
        payerId: "55test",
        planDate: "01222000"
      },
      {
        firstName: "Zackary",
        lastName: "Doe",
        middleInit: "A",
        dob: "01031995",
        ssn: "0033453933",
        streetAddress: "109 Emanth St",
        city: "St. Pete",
        state: "Fl",
        zipcode: "32891",
        email: "sentinel@ptest.com",
        phone: "5055555467",
        insuranceProviderName: "Blue Sleigh",
        planId: "1600000ATEST",
        memberId: "44r00000232TEST",
        groupId: "0000333ERTEST",
        policyNumber: "00118383844EiTESTj22",
        policyHolderName: "Martty Doe",
        payerId: "0055test",
        planDate: "01221952"
      },
      {
        firstName: "Yolanda",
        lastName: "Anonderson",
        middleInit: "N",
        dob: "06231965",
        ssn: "1033453935",
        streetAddress: "473 Relinth St",
        city: "Tampa",
        state: "Fl",
        zipcode: "32833",
        email: "rent558@qtest.com",
        phone: "5335557334",
        insuranceProviderName: "Blue Sleigh",
        planId: "1900ATEST",
        memberId: "40LL00232TEST",
        groupId: "00TEST",
        policyNumber: "001EiTESTj22",
        policyHolderName: "Pennie Doe",
        payerId: "0test",
        planDate: "11211992"
      },
      {
        firstName: "Samantha",
        lastName: "Anonite",
        middleInit: "W",
        dob: "01031995",
        ssn: "0033453933",
        streetAddress: "866757 N. Pleace Ave",
        city: "Orlanda",
        state: "Fl",
        zipcode: "33736",        
        email: "sentinel@ptest.com",
        phone: "5055555467",
        insuranceProviderName: "Blue Sleigh",
        planId: "1600000ATEST",
        memberId: "44r00000232TEST",
        groupId: "000033g3ERTEST",
        policyNumber: "00118383844EiTESTj22",
        policyHolderName: "Gene Doe",
        payerId: "0665test",
        planDate: "09092000"
      },
      {
        firstName: "Regina",
        lastName: "Doe",
        middleInit: "Y",
        dob: "01031995",
        ssn: "0033453933",
        streetAddress: "76 Round Pl",
        city: "Panama City",
        state: "Fl",
        zipcode: "36546",
        email: "sentinel@ptest.com",
        phone: "(505)555-5467",
        insuranceProviderName: "Blue Sleigh",
        planId: "1600000ATEST",
        memberId: "44r00000232TEST",
        groupId: "0000333ERTEST",
        policyNumber: "00118383844EiTESTj22",
        policyHolderName: "Bennie Doe",
        payerId: "25455test",
        planDate: "01221952"
      },
      {
        firstName: "James",
        lastName: "Doe",
        middleInit: "X",
        dob: "01031995",
        ssn: "0033453933",
        streetAddress: "8123 Testeer Ave",
        city: "Seminole Beach",
        state: "Fl",
        zipcode: "47446",
        email: "sentinel@ptest.com",
        phone: "5055555467",
        insuranceProviderName: "Blue Sleigh",
        planId: "1600000ATEST",
        memberId: "44r00000232TEST",
        groupId: "0000333ERTEST",
        policyNumber: "00118383844EiTESTj22",
        policyHolderName: "Martty Doe",
        payerId: "0055test",
        planDate: "01221952"
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
        username: "gadmin",
        password: "admin",
        firstName: "George",
        lastName: "Carver",
        jobCode: "3B"
      },
      {
        username: "madmin",
        password: "admin",
        firstName: "Micah",
        lastName: "Fenti",
        jobCode: "3B"
      },
      {
        username: "tadmin",
        password: "admin",
        firstName: "Tonya",
        lastName: "Fubu",
        jobCode: "3B"
      },
      {
        username: "oadmin",
        password: "admin",
        firstName: "Oscar",
        lastName: "Wilds",
        jobCode: "2A"
      },
      {
        username: "admin",
        password: "admin",
        firstName: "Aaron",
        lastName: "Pollack",
        jobCode: "1A"
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
        patientServiceId: 2,
        providerServiceId: 1
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 1,
        providerServiceId: 2
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 2,
        providerServiceId: 3
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 2,
        providerServiceId: 4
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 5,
        providerServiceId: 2
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 6,
        providerServiceId: 3
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 6,
        providerServiceId: 3
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 2,
        providerServiceId: 3
      },
      {
        serviceName: "RCheckup",
        serviceCode: 7,
        date: new Date(),
        timeIn: new Date(),
        timeOut: 0,
        patientServiceId: 4,
        providerServiceId: 4
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