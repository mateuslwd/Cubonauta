import './form.css'

interface Props{
    formula: string
    selected: number
}

function Formula({formula, selected}: Props){
    var arr = formula.split(' ')
    return (
        <div className="form_Card">
            
            {arr.map((movement, index) => (
                <span className={index == selected ? 'selected' : ''} key={index}>{movement}</span>
            ))}

        </div>
    )
}

export default Formula