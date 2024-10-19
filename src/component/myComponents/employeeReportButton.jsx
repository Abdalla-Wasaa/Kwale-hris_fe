import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DropdownButton = () => {

const [users,setUsers] = useState([])
useEffect(()=>{
axios.get('http://localhost:3001/donor/Donor')
.then(res => setUsers(res.data))
.catch(err=>console.log(err));
},[])

const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
setIsOpen(!isOpen);
};

const exportPDF = () => {
    const doc = new jsPDF();

    doc.text('Donors data', 20, 10);

    // Define the columns and rows
    const columns = ['FirstName', 'LastName', 'Email','Location','Gender'];
    const rows = users.map(user => [user.fname ,user.lname,user.email,user.location,user.gender])

    // Add the table
    doc.autoTable({
      head: [columns],
      body: [rows],
    });

    // Save the PDF
    doc.save('donors.pdf');
  };


const exportToExcel = () => {
const worksheet = XLSX.utils.json_to_sheet(users);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
saveAs(blob, 'data.xlsx');
};


  return (
    <div style={styles.dropdown}>
      <button  onClick={toggleDropdown} style={styles.button}>
        Download Report
      </button>
      {isOpen && (
        <div style={styles.menu}>
            <CSVLink data={users}>Csv File</CSVLink><br/>
            <Link onClick={exportToExcel}> xlsx File</Link><br/>
            <Link onClick={exportPDF}> PDF File</Link>
        </div>
      )}
    </div>
  );
};

const styles = {
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  button: {
    backgroundColor: '#00b35c',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
  menu: {
    display: 'block',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  item: {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
  },
  itemHover: {
    backgroundColor: '#f1f1f1',
  },
};

export default DropdownButton;