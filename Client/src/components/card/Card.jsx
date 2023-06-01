import {Link} from "react-router-dom" 
import bots from './bootstrap.min.css';
import anim from './animate.min.css';
import { addFav,removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import {useEffect, useState } from 'react';

 function Card(props) {
   //console.log("props de card "+props);
   const [isFav,setIsFav]=useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);


   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id)
      }else{
         setIsFav(true);
         props.addFav(props)
      }
   }
   return (
      
         <div className="col-12 col-lg-10 mx-auto" style={{width: '200px','--bs-body-color': 'var(--bs-red)',background:' rgba(0,0,0,0.6)',borderRadius: '10',height: '400px'}}>
         {
            isFav ? (
               <button onClick={handleFavorite}  className="btn btn-primary" style={{padding: '8.6px 17px 4.6px 18px',paddingRight: '7px',paddingBottom: '4.6px',fontSize: '11px',paddingTop: '4.6px',paddingLeft: '9px',position: 'absolute',marginBottom: '0px',marginTop: '11px',marginRight: '0',marginLeft: '10px',background: '#b837f4'}}>❤️</button>
            ) : (
               <button onClick={handleFavorite}  className="btn btn-primary" style={{padding: '8.6px 17px 4.6px 18px',paddingRight: '7px',paddingBottom: '4.6px',fontSize: '11px',paddingTop: '4.6px',paddingLeft: '9px',position: 'absolute',marginBottom: '0px',marginTop: '11px',marginRight: '0',marginLeft: '10px',background: '#b837f4'}}>🤍</button>
            )
         }
         <button className="btn btn-primary" style={{padding: '8.6px 17px 4.6px 18px',paddingRight: '7px',paddingBottom: '4.6px',fontSize: '11px',paddingTop: '4.6px',paddingLeft: '9px',position: 'absolute',marginBottom: '0px',marginTop: '11px',marginRight: '0',marginLeft: '160px',background: '#b837f4'}} onClick={() =>props.onClose(props.id)}>X</button>
         
         <img className="img-fluid" style={{width: '200px',height: '246px',boxShadow: '0px 0px 6px 3px var(--bs-pink)',marginTop: '10px'}} src={props.image} alt={props.name} />
        
         
         <div className="text-center"  style={{width: '280px',paddingTop: '10px'}}>
         <h2 className="fw-bold text-success mb-2" data-bss-hover-animate='pulse' style={{width: '200px',fontSize: '16px'}}>{props.name }</h2>
        
         <h4 className="fw-bold" style={{width: '200px',fontSize: '14px',color: 'var(--bs-orange)'}}>{props.gender }</h4>
         
         <h4 className="text-center" style={{width: '200px',fontSize: '12px'}}>{props.species }</h4>
         <h4 className="text-center" style={{width: '200px',fontSize: '12px'}}>{props.gender }</h4>
         <h4 className="text-center" style={{width: '200px',fontSize: '12px'}}>{props.origin.name }</h4>
         </div>
         <Link to={`/detail/${props.id}`} >
         <h4  className="text-center" style={{width: '200px',fontSize: '12px'}}>Detail: {props.name}</h4>
         </Link>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   } 
};

const mapDispatchToProps =(dispatch)=>{
   return{
     addFav:(character) => dispatch(addFav(character)),
      removeFav:(id) => dispatch(removeFav(id))
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(Card);
