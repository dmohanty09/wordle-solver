import '../App.css';

function CharList(props) {
  const handleInput = (e, index, wchars, setWchars) => {
    let cval = e.target.value;
    let newHash;
    if (cval === '') {
      newHash = {wc: cval,color: 'white', index: index};
    }else {
      newHash = {wc: cval,color: 'green', index: index};
    }
    let newArr = [...wchars];
    newArr[index] = newHash;
    setWchars(newArr);
  }
  return (
    <ul>
       {props.wchars.map((wchar, index) =>
          <input key={wchar.index}
                  onChange={(e) => handleInput(e, wchar.index, props.wchars, props.setWchars)}
                  defaultValue={wchar.wc}
                  maxLength="1"
                  className='CharInput'
                  style={{backgroundColor: wchar.color}}/>)}
    </ul>
  );
}

export default CharList;
