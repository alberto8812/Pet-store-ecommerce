import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple, } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';

////
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function CardProduct({ id, image, name, price, rating, category, genre }) {
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch()
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // function comprar(e) {
    //     e.preventDefault
    //     console.log('compraste')
    // }
    // function add(e) {
    //     e.preventDefault
    //     console.log('adderiste')
    // }

    return (
        <Card sx={{
            width: 400,
            height: 600,
            padding: "2em",
            margin: "2em",
            backgroundColor: '#aa71bfe0',

        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: purple[800] }} aria-label="recipe">
                        {genre}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Typography
                            fontSize='20px'
                            fontWeight="bold"
                        >${price}</Typography>
                    </IconButton>
                }

                title={<h3>{name}</h3>}
                subheader={<h4>{category}</h4>}
            />

            <CardMedia
                component="img"
                height="50%"
                width='50%'
                image={image ? image : 'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?fit=1200%2C944&ssl=1'}
                alt={name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" fontSize='25px'>
                    <Link to={`/products/detail/${id}`}><span>Details</span></Link>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
                    <ShoppingCartIcon
                        onClick={e => comprar(e)}></ShoppingCartIcon>

                </IconButton>
                <IconButton aria-label="share">
                    <AddShoppingCartIcon
                        onClick={e => add(e)}
                    ></AddShoppingCartIcon>
                </IconButton> */}
                <ExpandMore

                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    {rating} ⭐
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Link to={`/products/detail/${id}`}><span>Details</span></Link>
                </CardContent>
            </Collapse>
        </Card>
    );
}
