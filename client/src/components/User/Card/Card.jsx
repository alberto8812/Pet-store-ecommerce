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
import { useDispatch, useSelector } from 'react-redux';
import './Card.css';
import { addToFav, removeFromFav } from '../../../redux/actions';
import { useState } from "react";


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


export default function CardProduct({ id, image, name, price, reviews, category, genre }) {
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch()
    const products = useSelector(state => state.products);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function handleFav(itemId){
        const heart = document.getElementById(id);
        if(heart.classList.contains('bi-heart-fill')) {
            dispatch(removeFromFav(itemId))
            heart.className = 'bi bi-heart';
        }
        else {
            dispatch(addToFav(itemId))
            heart.className = 'bi bi-heart-fill';
        }
    }; 


    function rankingProm(){
        let promedy = 3
        if(reviews.length){
            
            promedy += reviews.reduce((total,review)=>total=parseInt(total)+parseInt(review.punctuation===null?0:review.punctuation),0)
        }
        return promedy/(reviews.length+1)
    }
    
    return (
        <Card sx={{
            width: 300,
            height: 400,
            padding: "1em",
            margin: "3em",
            backgroundColor: '#aa71bfe0',

        }}
        className="card-div">
            <CardHeader
                avatar={
                    
                    <Avatar sx={{ bgcolor: purple[700], fontSize:16, margin:-2 }} aria-label="recipe" >
                        {genre}
                    </Avatar>
                }

                title={<h3 className='title-card'>{name}</h3>}
                subheader={<h4 className='title-card'>{category}</h4>}
            />

            <Link to={`/products/detail/${id}`}><CardMedia
                component="img"
                className='img-card'
                // height="110px"
                // width='auto'
                image={image ? image : 'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?fit=1200%2C944&ssl=1'}
                alt={name}
            />
            <Typography
                fontSize='20px'
                fontWeight="bold"
            >        ${price}
            </Typography>
            </Link>

            <CardActions disableSpacing className='container-favs-stars'>            
                <ExpandMore
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >

                    {rankingProm()} ???
                <button onClick={() => handleFav(id)} type='button' className='btn-fav' id='favItem'><i id={id} class="bi bi-heart"></i></button>                    
                </ExpandMore>

            </CardActions>
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Link to={`/products/detail/${id}`}><span>Details</span></Link>
                </CardContent>
            </Collapse> */}
        </Card>
    );
}
  //