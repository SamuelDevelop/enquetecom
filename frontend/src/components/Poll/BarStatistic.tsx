type Props = {
    total: number,
    parcial: number
    color: string
}

function BarStatistic({total, parcial, color} : Props){
    const barWidth = (parcial + 1) / total * 100;

    return(
        <div 
            style={{width={`${barWidth}%`} color={color}}}
        >
            {barWidth}%
        </div>
    )
}

export default BarStatistic;