function FilterList(props) {
	return (
		<div className="WordList">
        	{props.filterList.map((word) =>
                <div key={word}>{word}</div>)}
      	</div>
	)
}

export default FilterList;