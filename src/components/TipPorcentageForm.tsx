const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPorcentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>> //funcion que recibe un numero y no retorna nada
    tip: number
}

export default function TipPorcentageForm({setTip, tip} : TipPorcentageFormProps){
    return(
        <div>
            <h3 className="font-black text-2xl">Propina: </h3>

            <form >
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>

                        <input 
                            type="radio" 
                            name="tip" 
                            id={tipOption.id} 
                            value={tipOption.value} 
                            onChange={(e)=>setTip(+e.target.value)} 
                            checked={tipOption.value === tip} //si el valor del radio es igual al valor de la propina, se marca sino no se marca nada en el radio
                        />
                    </div>
                ))}
                
            </form>
        </div>
    )
}