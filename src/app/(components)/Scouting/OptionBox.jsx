function OptionBox({ label, value, isSelected, onClick }) {
    const style = {
      padding: '10px',
      margin: '5px 0', // Spacing between boxes
      backgroundColor: isSelected ? 'lightblue' : 'lightgray', // Highlight if selected
      borderRadius: '10px', // Rounded corners
      cursor: 'pointer',
    };
  
    return (
      <div style={style} onClick={() => onClick(value)}>
        {label}
      </div>
    );
  }
  
  export default OptionBox;