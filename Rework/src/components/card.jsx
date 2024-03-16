export const Card = (props) => {
  return (
    <div className="max-w-md flex flex-col items-center bg-blue-600 rounded-xl shadow-lg gap-4 px-6 py-3">
      <img className="w-32" src={props.image} alt={props.title} loading="lazy" decoding="async" />
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-lg">{props.description}</p>  
    </div>
  )
}