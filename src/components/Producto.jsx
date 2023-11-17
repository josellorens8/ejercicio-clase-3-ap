import './Producto.css';

const Producto = (producto) => {
    return (
        <article className='producto'>

            <h2 className='producto__nombre'>{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} width={250}  className='producto__imagen'/>
            <p className='producto__descripcion'>{producto.descripcion}</p>
            <h2 className='producto__precio'>${producto.precio}</h2>
            <h3 className='producto__sku'>SKU: {producto.SKU}</h3>
            <h4 className='producto__cantidad'>Cantidad disponible: {producto.cantidad}</h4>
            
        </article>
    )
  }
  
  export default Producto