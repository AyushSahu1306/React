const Shimmer=()=>{
    const shimmerCards = [];
  
    for (let i = 0; i < 15; i++) {
      shimmerCards.push(<div key={i} className="shimmer-card"></div>);
    }
  
    return (
        <div className="shimmer-container">
           {shimmerCards}
        </div>
        
    )
}

export default Shimmer;