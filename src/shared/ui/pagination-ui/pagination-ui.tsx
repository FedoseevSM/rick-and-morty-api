import "./pagination-ui.scss"

export const PaginationUI = ({ handleChangeNext, handleChangePrev, currentPage, pages }) => {
    return (
        <div className="pagination-ui">
            {currentPage > 1  && <button className="pagination-ui__button" onClick={handleChangePrev} type="button">Prev</button>}
            {currentPage === 1  && <button className="pagination-ui__button pagination-ui__button--not-allowed " disabled type="button">Prev</button>}
            <p>Page: {currentPage} from {pages}</p>
            {currentPage === pages && <button className="pagination-ui__button pagination-ui__button--not-allowed " disabled type="button">Next</button>}
            {currentPage < pages && <button className="pagination-ui__button" onClick={handleChangeNext} type="button">Next</button>}
        </div>
    )
}