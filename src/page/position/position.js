import './position.css'

function Position() {
  return (
    <div className='poscontainer'>
      <div className="position_container">
        <span className="posStatic">Static</span>
        <span className="posSticky">Sticky</span>
        <div className="posRelative">
          Relative
          <span className="posAbsolute">Absolute</span>
        </div>
  
        <span className="posFixed">Fixed</span>
      </div>
    </div>
  );
}

export default Position;
