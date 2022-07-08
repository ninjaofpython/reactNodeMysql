import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [dateSearched, setDateSearched] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [url, setUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [jobSearchSiteId, setJobSearchSiteId] = useState(0);
  const [outComeId, setOutComeId] = useState(0);
  const [jobList, setJobList] = useState([]);

  const addJob = () => {
    Axios.post('http://localhost:3001/create', {
      dateSearched: dateSearched,
      jobTitle: jobTitle,
      email: email,
      companyName: companyName,
      url: url,
      phone: phone,
      jobSearchSiteId: jobSearchSiteId,
      outComeId: outComeId,
      jobList: jobList
    }).then(() => {
      setJobList([...jobList, {
        dateSearched: dateSearched,
        jobTitle: jobTitle,
        email: email,
        companyName: companyName,
        url: url,
        phone: phone,
        jobSearchSiteId: jobSearchSiteId,
        outComeId: outComeId
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
        <input type="text" onChange={(event) => {
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
        <label>URL:</label>
        <input type="text" onChange={(event) => {
          setUrl(event.target.value);
        }} />
        <label>Phone:</label>
        <input type="text" onChange={(event) => {
          setPhone(event.target.value)
        }} />
        <label>Job Seach Site ID: e.g. Craigslist '1', Monster '2', </label>
        <input type="number" onChange={(event) => {
          setJobSearchSiteId(event.target.value)
        }} />
        <label>Outcome ID:</label>
        <input type="number" onChange={(event) => {
          setOutComeId(event.target.value)
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
            <h3>URL: {val.url}</h3>
            <h3>Phone: {val.phone}</h3>
            <h3>Job Search Site ID: {val.jobSearchSiteId}</h3>
            <h3>Outcome ID: {val.outComeId}</h3>
          </div>
        })}
      </div>
    </div>
  );
}


export default App;
