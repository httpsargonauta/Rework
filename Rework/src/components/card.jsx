export const Card = (props) => {
    return (
      <div className="max-w-xl flex flex-col items-center bg-tertiary rounded-xl shadow-lg gap-4 px-12 py-4">
        <img className="w-32" src={props.image} alt={props.title} loading="lazy" decoding="async" />
        <h2 className={`text-2xl font-bold ${props.titleColor}`}>{props.title}</h2>
        <p className="text-lg text-white">{props.description}</p>  
      </div>
    )
  }