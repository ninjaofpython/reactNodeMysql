import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [dateSearched, setDateSearched] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [personContacted, setPersonContacted] = useState('');
  const [url, setUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [jobSearchSiteId, setJobSearchSiteId] = useState(0);
  const [typeOfWorkApplied, setTypeOfWorkApplied] = useState('');
  const [outcomeId, setOutcomeId] = useState(0);
  const [reportToEddId, setReportToEddId] = useState(0);
  const [jobList, setJobList] = useState([]);

  const addJob = () => {
    Axios.post('http://localhost:3001/create', {
      dateSearched: dateSearched,
      jobTitle: jobTitle,
      email: email,
      companyName: companyName,
      companyAddress: companyAddress,
      personContacted: personContacted,
      url: url,
      phone: phone,
      jobSearchSiteId: jobSearchSiteId,
      typeOfWorkApplied: typeOfWorkApplied,
      outcomeId: outcomeId,
      reportToEddId: reportToEddId,
      jobList: jobList
    }).then(() => {
      setJobList([...jobList, {
        dateSearched: dateSearched,
        jobTitle: jobTitle,
        email: email,
        companyName: companyName,
        companyAddress: companyAddress,
        personContacted: personContacted,
        url: url,
        phone: phone,
        jobSearchSiteId: jobSearchSiteId,
        typeOfWorkApplied: typeOfWorkApplied,
        outcomeId: outcomeId,
        reportToEddId: reportToEddId
      },
      ])
    })
  }

  const getJobs = () => {
    Axios.get('http://localhost:3001/jobs').then((response) => {
      setJobList(response.data)
    })

  }

  return (
    <div className="App">
      <div className="job_information">
        <label>Date Searched:</label>
        <input type={"date"} onChange={(event) => {
          setDateSearched(event.target.value)
        }} />
        <label>Job Title:</label>
        <input type="text" onChange={(event) => {
          setJobTitle(event.target.value);
        }} />
        <label>Email:</label>
        <input type="text" onChange={(event) => {
          setEmail(event.target.value);
        }} />
        <label>Company Name:</label>
        <input type="text" onChange={(event) => {
          setCompanyName(event.target.value);
        }} />
        <label>Company Address:</label>
        <input type="text" onChange={(event) => {
          setCompanyAddress(event.target.value);
        }} />
        <label>Person Contacted</label>
        <input type="text" onChange={(event) => {
          setPersonContacted(event.target.value);
        }} />
        <label>URL:</label>
        <input type="text" onChange={(event) => {
          setUrl(event.target.value);
        }} />
        <label>Phone:</label>
        <input type="text" onChange={(event) => {
          setPhone(event.target.value)
        }} />
        <label>Job Seach Site ID: e.g. Craigslist '1', Calijobs '2', Calijob Dept '3', Indeed.com '4' </label>
        <input type="number" onChange={(event) => {
          setJobSearchSiteId(event.target.value)
        }} />
        <label>Type of Work Applied For 'IT'</label>
        <input type="text" onChange={(event) => {
          setTypeOfWorkApplied(event.target.value)
        }} />
        <label>Outcome ID: e.g. Awaiting Reply '1', Responsed '2', Interview '3', Denied Interview '4'</label>
        <input type="number" onChange={(event) => {
          setOutcomeId(event.target.value)
        }} />
        <label>Report to Edd: Yes '1' No '2'</label>
        <input type="number" onChange={(event) => {
          setReportToEddId(event.target.value)
        }} />
        <button onClick={addJob}>Add Job</button>
      </div>
      <div className="jobs">
        <button onClick={getJobs}>Show Jobs</button>
        {jobList.map((val, key) => {
          return <div className="job">
            <h3>Date Searched: {val.dateSearched}</h3>
            <h3>Job Title: {val.jobTitle}</h3>
            <h3>Email: {val.email}</h3>
            <h3>Company Name: {val.companyName}</h3>
            <h3>Company Address: {val.companyAddress}</h3>
            <h3>Person Contacted: {val.personContacted}</h3>
            <h3>URL: {val.url}</h3>
            <h3>Phone: {val.phone}</h3>
            <h3>Job Search Site ID: {val.jobSearchSiteId}</h3>
            <h3>Type of work applied for: {val.typeOfWorkApplied}</h3>
            <h3>Outcome ID: {val.outcomeId}</h3>
          </div>
        })}
      </div>
    </div>
  );
}


export default App;
