

const Paginacion = (props) => {

    
    const paginas = ()=>{
        const datos=[];
        for(var i=0; i<props.total; i++){
            var pagina = i+1;
            datos.push(<a onClick={()=>props.onChangePagina(pagina)} className={props.pagina === pagina ? "active" : ""}>{pagina}</a>)
        }
        return datos
    }

    return (
        <>
            <div className="topbar-filter">
                <div className="pagination2">
                    <span>Página {props.pagina} de {props.total}:</span>
                    {paginas()}
                    
                </div>
            </div>
        </>
    )

}
export default Paginacion;