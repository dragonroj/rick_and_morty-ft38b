import bots from './bootstrap.min.css';
import anim from './animate.min.css';
export default function Card(props) {
   return (
      <div className="row pt-5">
         <div className="col-12 col-lg-10 mx-auto" style={{width: '200px','--bs-body-color': 'var(--bs-red)',background:' rgba(0,0,0,0.6)',borderRadius: 10,height: '540px'}}>
         <button className="btn btn-primary" style={{padding: '8.6px 17px 4.6px 18px',paddingRight: '7px',paddingBottom: '4.6px',fontSize: '11px',paddingTop: '4.6px',paddingLeft: '9px',position: 'absolute',marginBottom: '0px',marginTop: '11px',marginRight: '0',marginLeft: '135px',background: '#b837f4'}} onClick={props.onClose}>X</button>
         <img className="img-fluid" style={{width: '200px',height: '246px',boxShadow: '0px 0px 6px 3px var(--bs-pink)',marginTop: '10px'}} src={props.image} alt={props.name} />
        
         
         <div className="text-center"  style={{width: '280px',paddingTop: '10px'}}>
         <h2 className="fw-bold text-success mb-2" data-bss-hover-animate='pulse' style={{width: '200px',fontSize: '16px'}}>{props.name }</h2>
        
         <h4 className="fw-bold" style={{width: '200px',fontSize: '14px',color: 'var(--bs-orange)'}}>{props.gender }</h4>
         
         <h4 className="text-center" style={{width: '200px',fontSize: '12px'}}>{props.species }</h4>
         <h4 className="text-center" style={{width: '200px',fontSize: '12px'}}>{props.gender }</h4>
         <h4 className="text-center" style={{width: '200px',fontSize: '12px'}}>{props.origin.name }</h4>
         </div>
         </div>
      </div>
   );
}


