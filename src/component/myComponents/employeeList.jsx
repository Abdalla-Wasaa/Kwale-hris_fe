import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const EmployeeList = () => {

const [employees,setEmployees] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:4000/getEmployees')
    .then(res => {
        console.log(res);
        setEmployees(res?.data)
    })
    .catch(err=>console.log(err));
},[])

const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
setIsOpen(!isOpen);
};

const exportPDF = () => {
    const doc = new jsPDF();

    doc.text('Employees data', 20, 10);

    // Define the columns and rows
    const columns = [
        { header: 'Payroll Number', dataKey: 'payrollId' },
        { header: 'First Name', dataKey: 'fname' },
        { header: 'Last Name', dataKey: 'lname' },
        { header: 'Surname Name', dataKey: 'surname' },
        { header: 'Email', dataKey: 'email' },
        { header: 'Phone Number', dataKey: 'phoneNumber' },
        { header: 'Gender', dataKey: 'gender' }
    ];

    const rows = employees.map(employee => ({
        payrollId: employee.payrollId,
        fname: employee.fname,
        lname: employee.lname,
        surname: employee.surname,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        gender: employee.gender
    }));

    // Add the table
    doc.autoTable({
        columns: columns,
        body: rows,
        margin: { top: 20 }, // Adjust margin if needed
        styles: {
            fontSize: 10,
            cellPadding: 2,
            valign: 'middle', // Vertical alignment
            halign: 'center'  // Horizontal alignment
        },
        columnStyles: {
            // Specific column styles
            0: { halign: 'center' }, // Align first column center
            1: { halign: 'left' },   // Align second column left
            // Add more column styles as needed
        },
        headStyles: {
            fillColor: [41, 128, 185], // Header background color
            textColor: [255, 255, 255] // Header text color
        }
    });

    // Save the PDF
    doc.save('employees.pdf');
};



const exportToExcel = () => {
const worksheet = XLSX.utils.json_to_sheet(employees);
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
            <CSVLink data={employees}>Csv File</CSVLink><br/>
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

export default EmployeeList;