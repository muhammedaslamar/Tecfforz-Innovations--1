import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';
function card({name,gender,phone,imageUrl,id,delid,upid}) {
    return (
        <div className="mt-4 mb-2">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3 mb-2 ">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon">
                      <i className="bx bxl-mailchimp"></i>
                    </div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">{name}</h6>
                      <span><i class="fa fa-map-marker" aria-hidden="true"></i>  Austin</span>
                    </div>
                  </div>
                  <div className="badge">
                  <div className="dropdown">
                      <button className=" droo-bdn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <li><Link className="dropdown-item bg-transparent" to="/update"
                          onClick={
                            ()=>{
                              upid(id)
                            }
                          }><i class="fa fa-wrench" aria-hidden="true"></i></Link></li>
                          <li><a className="dropdown-item" href="#" onClick={
                            ()=>{
                              delid(id)
                            }
                          }><i class="fa fa-trash-o" aria-hidden="true"></i>
                          </a></li>        
                      </ul>
                  </div>
                  </div>
                </div>
                <div className="mt-3">
                    <a href="" className="email-link"><i class="fa fa-envelope-o" aria-hidden="true"></i>   {imageUrl}</a>
                  <div className="mt-3">
                    <div>
                        <span className="text-secondary marg-left">
                        <i class="fa fa-phone" aria-hidden="true"></i> {phone}
                        </span>
                    </div>
                    <div className="mt-3">
                      <button className="bottom-button"><i class="fa fa-phone" aria-hidden="true"></i> Call</button>
                      <button className="bottom-button"><i class="fa fa-envelope-o" aria-hidden="true"></i> Mail</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
}

export default card