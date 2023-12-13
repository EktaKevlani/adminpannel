import React from 'react'
import "./cardcomp.css"
const CardComp = ({icon,name,amt}) => {
  return (
    <>
      <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-1 icon">
        {icon}
    </div>
    <div class="col-md-10 px-2">
      <div class="card-body">
        <h6 class="card-title">{name}</h6>
        <p class="card-text">{amt}</p>
        <a href="#" class="card-link">View all</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CardComp
