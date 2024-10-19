import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const ActionButton = () => {



const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
setIsOpen(!isOpen);
};





  return (
    <div style={styles.dropdown}>
      <button  onClick={toggleDropdown} style={styles.button}>
        Actions
      </button>
      {isOpen && (
        <div style={styles.menu}>
          <Link to='/selectEdit' >Edit</Link> <br/>
          <Link to='/' >Deactivate</Link>
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

export default ActionButton;
