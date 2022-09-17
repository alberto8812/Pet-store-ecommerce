
<<<<<<< HEAD
=======

export default function Detail() {
    const [carga, setCarga] = useState(true);
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(getDetails(id)).then(() => setCarga(false))
    }, [dispatch, id])

    const myProduct = useSelector(state => state.details)

    if (carga) {
        return <Loading />;
    }

    return (
        <div>
          
            <div>
                <h1 >{myProduct.name}</h1>
                <ul>
                    <li>
                        <div>
                            <img src={myProduct.image} alt={myProduct.name}/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Price:</h2>
                            <p>{myProduct.price}</p>
                            <h2 className="caracts">Rating:</h2>
                            <p>⭐ {myProduct.rating}</p>
                            <h2 className="caracts">Description:</h2>
                            <p >📌{myProduct.detail}</p>
                            <h2 className="caracts">Stock:</h2>
                            <p>{myProduct.stock}</p>
                            <h2 className="caracts">Genre:</h2>
                            <p>{myProduct.genre.name}</p>
                            <h2 className="caracts">Category:</h2>
                            <p>{myProduct.category.name}</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
>>>>>>> 57bdf7cccf9c325711e2e3faf6eef4ca420a4177
