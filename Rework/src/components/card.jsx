export const Card = ({ image = '', title = '', description = '' }) => {
  return (
    <div className="max-w-md flex flex-col gap-4 px-6 py-3">
      <img className="w-32" src={image} alt={title} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg">{description}</p>  
    </div>
  )
}