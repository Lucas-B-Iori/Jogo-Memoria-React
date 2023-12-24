export default function Card({ row, rowIndex, handleClick, isVerifing }) {
    return (
        <div className="card">
            {row.map((col, colIndex) => {
                let htmlItem = 
                <button 
                    disabled={col.isVisible || isVerifing}
                    key={colIndex} 
                    onClick={(event) => handleClick(event, rowIndex, colIndex)}
                >
                    {col.value}
                </button>
                if(col.isVisible) {
                    htmlItem = 
                    <img 
                        className={col.isVisible ? "" : "invisible"}
                        src={col.value} 
                        alt="" 
                    />
                }
                return (
                    <div key={colIndex}>
                        {htmlItem}
                    </div>
                )
            })}
        </div>
    )
}